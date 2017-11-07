/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Aug 27 9:00 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 27/Aug/13 : Initial version.
 - 29/Aug/13 : - Added DelayModes reference
               - Added DelayModes related Update code

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Enums/BindingDirections.ts" />
/// <reference path="../Interfaces/IDataAdapter.d.ts" />
/// <reference path="../Interfaces/IDataAccessor.d.ts" />
/// <reference path="../../Events/Classes/UpdateFromUserEvent.ts" />
/// <reference path="../../Events/Classes/UpdateFromSourceEvent.ts" />
/// <reference path="../../Events/Classes/DataPulledEvent.ts" />
/// <reference path="../../Events/Classes/Events.ts" />
/// <reference path="../../Collections/Classes/List.ts" />
/// <reference path="../Interfaces/IDataBinding.d.ts" />
/// <reference path="Data Accessors/HTTPDataAccessor.ts" />
/// <reference path="../Enums/UpdateTriggers.ts" />
/// <reference path="../Enums/DelayModes.ts" />

module TSUI.Data
{
    /** Defines the structure for a data binding. Data bindings bind a particular Control's property to a data source and handle pull / pushing data to/from that source. 
        I: Specifies the type of data sent/received to/from the server.
        O: Specifies the type of data out of the data adapter.
    */
    export class DataBinding<O> implements IDataBinding<string, O>
    {
        private static DefaultJSONAdapter = new JSONDataAdapter<any>();

        /** The underlying control. */
        private _Control: UI.IControl = null;
        /** The control to bind. */
        Control(value?: UI.IControl): UI.IControl
        {
            if (value !== undefined)
            {
                this.Unbind();
                this._Control = value;
                this.Bind();
            }
            return this._Control;
        }
        
        /** The underlying property name. */
        private _PropertyName: string = null;
        /** The name of the method to call to set the control property. */
        PropertyName(value?: string): string
        {
            if (value !== undefined)
            {
                this.Unbind();
                this._PropertyName = value;
                this.Bind();
            }
            return this._PropertyName;
        }
        
        /** The underlying accessor. */
        private _Accessor: IDataAccessor<string> = null;
        /** The data accessor to use for this binding. */
        Accessor(value?: IDataAccessor<string>): IDataAccessor<string>
        {
            if(value !== undefined)
            {
                this.Unbind();
                this._Accessor = value;
                this.Bind();
            }
            return this._Accessor;
        }
        /** The data adapter to use for this binding. */
        Adapter: IDataAdapter<string, O>;
        /** A list of property names (in increasing depth order) that specify what property of the data from the adapter to bind to. */
        DataProperty: Collections.IList<string>;
        /** The binding direction to use for this binding. */
        BindingDirection: BindingDirections;

        /** The Update Delay Mode to use for this binding. */
        DelayMode: DelayModes = DelayModes.First;

        /** Time to delay between sending access requests to the server to reduce network usage and JS overload. Useful for data bindings such as those bound to text boxes. */
        UpdateDelayTime: number = 0;

        /** The pull event handler attached to the data accessor. */
        private Accessor_OnDataPulledHandler: Events.DataPulledEventHandler<string>;
        /** The push event handler attached to the data accessor. */
        private Accessor_OnDataPushedHandler: Events.DataPushedEventHandler<string>;

        /** The old value of the property this binding is for. */
        private oldValue: any = null;
        /** The update timeout reference number. */
        private updateTimeout: number = null;

        /** Creates a new data binding. 
            @param control The control to bind.
            @param propertyName The name of the control property (i.e. method) to bind to.
            @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
            @param accessor The data accessor to use for this binding.
            @returns A new data binding.
        */
        constructor(control: UI.IControl, propertyName: string, dataProperty: Collections.IList<string>, accessor: IDataAccessor<string>);
        /** Creates a new data binding. 
            @param control The control to bind.
            @param propertyName The name of the control property (i.e. method) to bind to.
            @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
            @param accessor The data accessor to use for this binding.
            @param bindingDirection The binding direction to use for this binding. Default: BOTH_S2UDefault
            @returns A new data binding.
        */
        constructor(control: UI.IControl, propertyName: string, dataProperty: Collections.IList<string>, accessor: IDataAccessor<string>, bindingDirection: BindingDirections);
        /** Creates a new data binding. 
            @param control The control to bind.
            @param propertyName The name of the control property (i.e. method) to bind to.
            @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
            @param accessor The data accessor to use for this binding.
            @param adapter The data adapter to use for this binding. Default: JSONDataAdapter
            @param bindingDirection The binding direction to use for this binding. Default: BOTH_S2UDefault
            @returns A new data binding.
        */
        constructor(control: UI.IControl, propertyName: string, dataProperty: Collections.IList<string>, accessor: IDataAccessor<string>, bindingDirection: BindingDirections, adapter: IDataAdapter<string, O>);

        constructor(control: UI.IControl,
            propertyName: string,
            dataProperty: Collections.IList<string>,
            accessor: IDataAccessor<string>,
            bindingDirection: BindingDirections = BindingDirections.BOTH_S2UDefault,
            adapter: IDataAdapter<string, O> = DataBinding.DefaultJSONAdapter)
        {
            this._Control = control;
            this._PropertyName = propertyName;
            this.DataProperty = dataProperty;
            this._Accessor = accessor;
            this.Adapter = adapter;
            this.BindingDirection = bindingDirection;
            
            if (!this.Bind())
            {
                throw "Property is already bound or is not a function!";
            }
        }

        /** Wraps the property (method) in a special controlled method, maintaining a copy of the original. */
        public Bind(): boolean
        {
            var result = false;

            //Bind accessor events (first checking that it hasn't already been bound)
            var bindPull = false;
            if (!this.Accessor_OnDataPulledHandler)
            {
                bindPull = true;
                this.Accessor_OnDataPulledHandler = new Events.DataPulledEventHandler<string>(this.Accessor_OnDataPulled, this);
            }
            var bindPush = false;
            if (!this.Accessor_OnDataPushedHandler)
            {
                bindPush = true;
                this.Accessor_OnDataPushedHandler = new Events.DataPushedEventHandler<string>(this.Accessor_OnDataPushed, this);
            }
            if (bindPull || !this._Accessor.OnDataPulled.IsAttached(this.Accessor_OnDataPulledHandler))
            {
                this._Accessor.OnDataPulled.Attach(this.Accessor_OnDataPulledHandler);
            }
            if (bindPush || !this._Accessor.OnDataPushed.IsAttached(this.Accessor_OnDataPushedHandler))
            {
                this._Accessor.OnDataPushed.Attach(this.Accessor_OnDataPushedHandler);
            }

            //Check it is not already bound
            if (!this._Control[this._PropertyName + "_databinding_orig"])
            {
                //Check the property is actually a get/set method property (TSUI style property)
                if (isFunction(this._Control[this._PropertyName]))
                {
                    var propFunc = this._Control[this._PropertyName];
                    var _this = this;
                    var newPropFunc = function (value: any, trigger: UpdateTriggers = UpdateTriggers.User)
                    {
                        var newValue = _this._Control[_this._PropertyName + "_databinding_orig"].call(this, value);
                        if ((!!value && value !== newValue) || (newValue !== _this.oldValue))
                        {
                            _this.oldValue = newValue;
                            if (_this.Update(trigger))
                            {
                                return true;
                            }
                            else
                            {
                                return false;
                            }
                        }

                        return true;
                    };
                    this._Control[this._PropertyName] = newPropFunc;
                    this._Control[this._PropertyName + "_databinding_orig"] = propFunc;
                    result = true;
                }
            }

            return result;
        }
        /** Unwraps the property (method). */
        public Unbind(): boolean
        {
            var result = false;

            //Unbind accessor events
            this._Accessor.OnDataPulled.Detach(this.Accessor_OnDataPulledHandler);
            this._Accessor.OnDataPushed.Detach(this.Accessor_OnDataPushedHandler);

            //Check it is bound
            if (this._Control[this._PropertyName + "_databinding_orig"])
            {
                this._Control[this._PropertyName] = this._Control[this._PropertyName + "_databinding_orig"];
            }
            result = true;

            return result;
        }

        /** Causes the data binding to update using the direction specified in BindingDirection.
            @param trigger The trigger that caused the update request. Leave this parameter at default if calling programatically.
            @returns A boolean indicating whether the update was successful or not.
        */
        Update(trigger: UpdateTriggers = UpdateTriggers.Unkown): boolean
        {
            var executeUpdate = true;

            switch (this.DelayMode)
            {
                case DelayModes.First:
                    executeUpdate = (this.updateTimeout === null);
                    break;
                case DelayModes.Last:
                    if (this.updateTimeout !== null)
                    {
                        clearTimeout(this.updateTimeout);
                        this.updateTimeout = null;
                    }
                    break;
            }

            if (executeUpdate)
            {
                var updateFunc = () =>
                {
                    this.updateTimeout = null;

                    var result = false;

                    if (trigger === UpdateTriggers.Binding)
                    {
                        return true;
                    }

                    switch (this.BindingDirection)
                    {
                        case BindingDirections.S2U:
                            //Direction is forced
                            //So ignore the trigger
                            //Update data from server since user (local) data may have incorrectly changed
                            result = this.UpdateFromSource();
                            break;
                        case BindingDirections.U2S:
                            //Direction is forced
                            //So ignore the trigger
                            //Update data from user since server (remote) data may have incorrectly changed
                            result = this.UpdateFromUser();
                            break;
                        case BindingDirections.BOTH_S2UDefault:
                            //Direction is not forced
                            //So handle the trigger
                            //If trigger is unknown, use the default binding direction

                            switch (trigger)
                            {
                                case UpdateTriggers.Source:
                                case UpdateTriggers.Unkown:
                                    result = this.UpdateFromSource();
                                    break;
                                case UpdateTriggers.User:
                                    result = this.UpdateFromUser();
                                    break;
                            }
                            break;
                        case BindingDirections.BOTH_U2SDefault:
                            //Direction is not forced
                            //So handle the trigger
                            //If trigger is unknown, use the default binding direction

                            switch (trigger)
                            {
                                case UpdateTriggers.User:
                                case UpdateTriggers.Unkown:
                                    result = this.UpdateFromUser();
                                    break;
                                case UpdateTriggers.Source:
                                    result = this.UpdateFromSource();
                                    break;
                            }
                            break;
                    }

                    return result;
                };
                if (this.UpdateDelayTime !== null &&
                    this.UpdateDelayTime > 0)
                {
                    this.updateTimeout = setTimeout(updateFunc, this.UpdateDelayTime);
                }
                else
                {
                    return updateFunc();
                }
            }

            return true;
        }
        /** Causes the data binding to update from the source.
            @returns A boolean indicating whether the update has successfully started or not.
        */
        UpdateFromSource(): boolean
        {
            //Pull data

            var result = false;

            //All other directions potentially allow this method's direction of update
            if (this.BindingDirection != BindingDirections.U2S)
            {
                var requestStatus = this._Accessor.PullData();
                //Check request status and set 'result' accordingly
                //Check for complete in case the accessor is synchronous
                if (requestStatus.Status === DataAccessStatuses.Pending ||
                    requestStatus.Status === DataAccessStatuses.Complete)
                {
                    //Successful data pull request (either started or complete)
                    result = true;
                }
            }

            return result;
        }

        /** Called when the accessor receives data from the source after a pull request (i.e. when data is pulled from the source)
            @param args The event args for the event call.
            @returns Void.
        */
        private Accessor_OnDataPulled(args: Events.DataPulledEventArgs<string>): void
        {
            var result = false;
            if (args.Result.Status === DataAccessStatuses.Complete)
            {
                var procData = this.Adapter.I2O(args.Result.Result);
                result = this.UpdateUsingData(procData);
            }

            //Fire OnUpdateFromSource
            this.OnUpdateFromSource.Invoke(new Events.UpdateFromSourceEventArgs<string, O>(
                this, (result ? DataAccessStatuses.Complete : DataAccessStatuses.Failed)));
        }
        
        /** Causes the data binding to update from the user.
            @returns A boolean indicating whether the update has successfully started or not.
        */
        UpdateFromUser(): boolean
        {
            //Push data

            var result = false;
            
            //All other directions potentially allow this method's direction of update
            if (this.BindingDirection != BindingDirections.S2U)
            {
                //Write PushData code
                var propVal = this._Control[this._PropertyName](undefined, UpdateTriggers.Binding);
                var outputData: O = <O>{};
                var len = this.DataProperty.Count();
                if (len > 0)
                {
                    var value = outputData;
                    for (var i = 0; i < len - 1; i++)
                    {
                        value[this.DataProperty.ElementAt(i)] = {};
                        value = value[this.DataProperty.ElementAt(i)];
                    }
                    value[this.DataProperty.ElementAt(len - 1)] = propVal;
                }
                else
                {
                    outputData = propVal;
                }
                var inputData = this.Adapter.O2I(outputData);
                var requestStatus = this._Accessor.PushData(inputData);
                //Check request status and set 'result' accordingly
                //Check for complete in case the accessor is synchronous
                if (requestStatus.Status === DataAccessStatuses.Pending ||
                    requestStatus.Status === DataAccessStatuses.Complete)
                {
                    //Successful data push request (either started or complete)
                    result = true;
                }
            }

            return result;
        }

        /** Called when the accessor receives data from the source after a push request (i.e. when data is pushed to the source)
            @param args The event args for the event call.
            @returns Void.
        */
        private Accessor_OnDataPushed(args: Events.DataPushedEventArgs<string>): void
        {
            var result = false;
            if (args.Result.Status === DataAccessStatuses.Complete)
            {
                var procData = this.Adapter.I2O(args.Result.Result);
                result = this.UpdateUsingData(procData);
            }

            //Fire OnUpdateFromUser
            this.OnUpdateFromUser.Invoke(new Events.UpdateFromUserEventArgs<string, O>(
                this, (result ? DataAccessStatuses.Complete : DataAccessStatuses.Failed)));
        }

        /** Updates the control from the supplied data. 
            @param data The data to update from.
            @returns A boolean indicating whether the update was successful or not.
        */
        private UpdateUsingData(data: O): boolean
        {
            var result = false;

            //Load the value from the data
            if (data === null || data === undefined) {
                this._Control[this._PropertyName](null, UpdateTriggers.Binding);
                result = false;
            }
            else {
                var len = this.DataProperty.Count();
                var value = data;
                for (var i = 0; i < len; i++) {
                    value = value[this.DataProperty.ElementAt(i)];
                }

                //Set the value in the control
                result = this._Control[this._PropertyName](value, UpdateTriggers.Binding);
            }
            
            return result;
        }

        /** Fired when the binding updates from the source. */
        OnUpdateFromSource: Events.UpdateFromSourceEvent<string, O> = new Events.UpdateFromSourceEvent<string, O>();
        /** Fired when the binding updates from the user. */
        OnUpdateFromUser: Events.UpdateFromUserEvent<string, O> = new Events.UpdateFromUserEvent<string, O>();
    }
}
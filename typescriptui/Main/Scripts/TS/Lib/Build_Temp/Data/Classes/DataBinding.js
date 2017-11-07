var TSUI;
(function (TSUI) {
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
    (function (Data) {
        /** Defines the structure for a data binding. Data bindings bind a particular Control's property to a data source and handle pull / pushing data to/from that source.
        I: Specifies the type of data sent/received to/from the server.
        O: Specifies the type of data out of the data adapter.
        */
        var DataBinding = (function () {
            function DataBinding(control, propertyName, dataProperty, accessor, bindingDirection, adapter) {
                if (typeof bindingDirection === "undefined") { bindingDirection = Data.BindingDirections.BOTH_S2UDefault; }
                if (typeof adapter === "undefined") { adapter = DataBinding.DefaultJSONAdapter; }
                /** The underlying control. */
                this._Control = null;
                /** The underlying property name. */
                this._PropertyName = null;
                /** The underlying accessor. */
                this._Accessor = null;
                /** The Update Delay Mode to use for this binding. */
                this.DelayMode = Data.DelayModes.First;
                /** Time to delay between sending access requests to the server to reduce network usage and JS overload. Useful for data bindings such as those bound to text boxes. */
                this.UpdateDelayTime = 0;
                /** The old value of the property this binding is for. */
                this.oldValue = null;
                /** The update timeout reference number. */
                this.updateTimeout = null;
                /** Fired when the binding updates from the source. */
                this.OnUpdateFromSource = new TSUI.Events.UpdateFromSourceEvent();
                /** Fired when the binding updates from the user. */
                this.OnUpdateFromUser = new TSUI.Events.UpdateFromUserEvent();
                this._Control = control;
                this._PropertyName = propertyName;
                this.DataProperty = dataProperty;
                this._Accessor = accessor;
                this.Adapter = adapter;
                this.BindingDirection = bindingDirection;

                if (!this.Bind()) {
                    throw "Property is already bound or is not a function!";
                }
            }
            /** The control to bind. */
            DataBinding.prototype.Control = function (value) {
                if (value !== undefined) {
                    this.Unbind();
                    this._Control = value;
                    this.Bind();
                }
                return this._Control;
            };

            /** The name of the method to call to set the control property. */
            DataBinding.prototype.PropertyName = function (value) {
                if (value !== undefined) {
                    this.Unbind();
                    this._PropertyName = value;
                    this.Bind();
                }
                return this._PropertyName;
            };

            /** The data accessor to use for this binding. */
            DataBinding.prototype.Accessor = function (value) {
                if (value !== undefined) {
                    this.Unbind();
                    this._Accessor = value;
                    this.Bind();
                }
                return this._Accessor;
            };

            /** Wraps the property (method) in a special controlled method, maintaining a copy of the original. */
            DataBinding.prototype.Bind = function () {
                var result = false;

                //Bind accessor events (first checking that it hasn't already been bound)
                var bindPull = false;
                if (!this.Accessor_OnDataPulledHandler) {
                    bindPull = true;
                    this.Accessor_OnDataPulledHandler = new TSUI.Events.DataPulledEventHandler(this.Accessor_OnDataPulled, this);
                }
                var bindPush = false;
                if (!this.Accessor_OnDataPushedHandler) {
                    bindPush = true;
                    this.Accessor_OnDataPushedHandler = new TSUI.Events.DataPushedEventHandler(this.Accessor_OnDataPushed, this);
                }
                if (bindPull || !this._Accessor.OnDataPulled.IsAttached(this.Accessor_OnDataPulledHandler)) {
                    this._Accessor.OnDataPulled.Attach(this.Accessor_OnDataPulledHandler);
                }
                if (bindPush || !this._Accessor.OnDataPushed.IsAttached(this.Accessor_OnDataPushedHandler)) {
                    this._Accessor.OnDataPushed.Attach(this.Accessor_OnDataPushedHandler);
                }

                if (!this._Control[this._PropertyName + "_databinding_orig"]) {
                    if (TSUI.isFunction(this._Control[this._PropertyName])) {
                        var propFunc = this._Control[this._PropertyName];
                        var _this = this;
                        var newPropFunc = function (value, trigger) {
                            if (typeof trigger === "undefined") { trigger = Data.UpdateTriggers.User; }
                            var newValue = _this._Control[_this._PropertyName + "_databinding_orig"].call(this, value);
                            if ((!!value && value !== newValue) || (newValue !== _this.oldValue)) {
                                _this.oldValue = newValue;
                                if (_this.Update(trigger)) {
                                    return newValue;
                                } else {
                                    return null;
                                }
                            }

                            return newValue;
                        };
                        this._Control[this._PropertyName] = newPropFunc;
                        this._Control[this._PropertyName + "_databinding_orig"] = propFunc;
                        result = true;
                    }
                }

                return result;
            };

            /** Unwraps the property (method). */
            DataBinding.prototype.Unbind = function () {
                var result = false;

                //Unbind accessor events
                this._Accessor.OnDataPulled.Detach(this.Accessor_OnDataPulledHandler);
                this._Accessor.OnDataPushed.Detach(this.Accessor_OnDataPushedHandler);

                if (this._Control[this._PropertyName + "_databinding_orig"]) {
                    this._Control[this._PropertyName] = this._Control[this._PropertyName + "_databinding_orig"];
                }
                result = true;

                return result;
            };

            /** Causes the data binding to update using the direction specified in BindingDirection.
            @param trigger The trigger that caused the update request. Leave this parameter at default if calling programatically.
            @returns A boolean indicating whether the update was successful or not.
            */
            DataBinding.prototype.Update = function (trigger) {
                if (typeof trigger === "undefined") { trigger = Data.UpdateTriggers.Unkown; }
                var _this = this;
                var executeUpdate = true;

                switch (this.DelayMode) {
                    case Data.DelayModes.First:
                        executeUpdate = (this.updateTimeout === null);
                        break;
                    case Data.DelayModes.Last:
                        if (this.updateTimeout !== null) {
                            clearTimeout(this.updateTimeout);
                            this.updateTimeout = null;
                        }
                        break;
                }

                if (executeUpdate) {
                    var updateFunc = function () {
                        _this.updateTimeout = null;

                        var result = false;

                        if (trigger === Data.UpdateTriggers.Binding) {
                            return true;
                        }

                        switch (_this.BindingDirection) {
                            case Data.BindingDirections.S2U:
                                //Direction is forced
                                //So ignore the trigger
                                //Update data from server since user (local) data may have incorrectly changed
                                result = _this.UpdateFromSource();
                                break;
                            case Data.BindingDirections.U2S:
                                //Direction is forced
                                //So ignore the trigger
                                //Update data from user since server (remote) data may have incorrectly changed
                                result = _this.UpdateFromUser();
                                break;
                            case Data.BindingDirections.BOTH_S2UDefault:
                                switch (trigger) {
                                    case Data.UpdateTriggers.Source:
                                    case Data.UpdateTriggers.Unkown:
                                        result = _this.UpdateFromSource();
                                        break;
                                    case Data.UpdateTriggers.User:
                                        result = _this.UpdateFromUser();
                                        break;
                                }
                                break;
                            case Data.BindingDirections.BOTH_U2SDefault:
                                switch (trigger) {
                                    case Data.UpdateTriggers.User:
                                    case Data.UpdateTriggers.Unkown:
                                        result = _this.UpdateFromUser();
                                        break;
                                    case Data.UpdateTriggers.Source:
                                        result = _this.UpdateFromSource();
                                        break;
                                }
                                break;
                        }

                        return result;
                    };
                    if (this.UpdateDelayTime !== null && this.UpdateDelayTime > 0) {
                        this.updateTimeout = setTimeout(updateFunc, this.UpdateDelayTime);
                    } else {
                        return updateFunc();
                    }
                }

                return true;
            };

            /** Causes the data binding to update from the source.
            @returns A boolean indicating whether the update has successfully started or not.
            */
            DataBinding.prototype.UpdateFromSource = function () {
                //Pull data
                var result = false;

                if (this.BindingDirection != Data.BindingDirections.U2S) {
                    var requestStatus = this._Accessor.PullData();

                    if (requestStatus.Status === Data.DataAccessStatuses.Pending || requestStatus.Status === Data.DataAccessStatuses.Complete) {
                        //Successful data pull request (either started or complete)
                        result = true;
                    }
                }

                return result;
            };

            /** Called when the accessor receives data from the source after a pull request (i.e. when data is pulled from the source)
            @param args The event args for the event call.
            @returns Void.
            */
            DataBinding.prototype.Accessor_OnDataPulled = function (args) {
                var result = false;
                if (args.Result.Status === Data.DataAccessStatuses.Complete) {
                    var procData = this.Adapter.I2O(args.Result.Result);
                    result = this.UpdateUsingData(procData);
                }

                //Fire OnUpdateFromSource
                this.OnUpdateFromSource.Invoke(new TSUI.Events.UpdateFromSourceEventArgs(this, (result ? Data.DataAccessStatuses.Complete : Data.DataAccessStatuses.Failed)));
            };

            /** Causes the data binding to update from the user.
            @returns A boolean indicating whether the update has successfully started or not.
            */
            DataBinding.prototype.UpdateFromUser = function () {
                //Push data
                var result = false;

                if (this.BindingDirection != Data.BindingDirections.S2U) {
                    //Write PushData code
                    var propVal = this._Control[this._PropertyName](undefined, Data.UpdateTriggers.Binding);
                    var outputData = {};
                    var len = this.DataProperty.Count();
                    if (len > 0) {
                        var value = outputData;
                        for (var i = 0; i < len - 1; i++) {
                            value[this.DataProperty.ElementAt(i)] = {};
                            value = value[this.DataProperty.ElementAt(i)];
                        }
                        value[this.DataProperty.ElementAt(len - 1)] = propVal;
                    } else {
                        outputData = propVal;
                    }
                    var inputData = this.Adapter.O2I(outputData);
                    var requestStatus = this._Accessor.PushData(inputData);

                    if (requestStatus.Status === Data.DataAccessStatuses.Pending || requestStatus.Status === Data.DataAccessStatuses.Complete) {
                        //Successful data push request (either started or complete)
                        result = true;
                    }
                }

                return result;
            };

            /** Called when the accessor receives data from the source after a push request (i.e. when data is pushed to the source)
            @param args The event args for the event call.
            @returns Void.
            */
            DataBinding.prototype.Accessor_OnDataPushed = function (args) {
                var result = false;
                if (args.Result.Status === Data.DataAccessStatuses.Complete) {
                    var procData = this.Adapter.I2O(args.Result.Result);
                    result = this.UpdateUsingData(procData);
                }

                //Fire OnUpdateFromUser
                this.OnUpdateFromUser.Invoke(new TSUI.Events.UpdateFromUserEventArgs(this, (result ? Data.DataAccessStatuses.Complete : Data.DataAccessStatuses.Failed)));
            };

            /** Updates the control from the supplied data.
            @param data The data to update from.
            @returns A boolean indicating whether the update was successful or not.
            */
            DataBinding.prototype.UpdateUsingData = function (data) {
                var result = false;

                //Load the value from the data
                var len = this.DataProperty.Count();
                var value = data;
                for (var i = 0; i < len; i++) {
                    value = value[this.DataProperty.ElementAt(i)];
                }

                //Set the value in the control
                result = this._Control[this._PropertyName](value, Data.UpdateTriggers.Binding) === value;

                return result;
            };
            DataBinding.DefaultJSONAdapter = new Data.JSONDataAdapter();
            return DataBinding;
        })();
        Data.DataBinding = DataBinding;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

/// <reference path="../Enums/BindingDirections.d.ts" />
/// <reference path="../../Data/Interfaces/IDataAdapter.d.ts" />
/// <reference path="../../Data/Interfaces/IDataAccessor.d.ts" />
/// <reference path="../../Events/Classes/UpdateFromUserEvent.d.ts" />
/// <reference path="../../Events/Classes/UpdateFromSourceEvent.d.ts" />
/// <reference path="../../Events/Classes/DataPulledEvent.d.ts" />
/// <reference path="../../Events/Classes/Events.d.ts" />
/// <reference path="../../Collections/Classes/List.d.ts" />
/// <reference path="../../Data/Interfaces/IDataBinding.d.ts" />
/// <reference path="Data Accessors/HTTPDataAccessor.d.ts" />
/// <reference path="../Enums/UpdateTriggers.d.ts" />
/// <reference path="../Enums/DelayModes.d.ts" />
declare module TSUI.Data {
    /** Defines the structure for a data binding. Data bindings bind a particular Control's property to a data source and handle pull / pushing data to/from that source.
    I: Specifies the type of data sent/received to/from the server.
    O: Specifies the type of data out of the data adapter.
    */
    class DataBinding<O> implements Data.IDataBinding<string, O> {
        private static DefaultJSONAdapter;
        /** The underlying control. */
        private _Control;
        /** The control to bind. */
        public Control(value?: TSUI.UI.IControl): TSUI.UI.IControl;
        /** The underlying property name. */
        private _PropertyName;
        /** The name of the method to call to set the control property. */
        public PropertyName(value?: string): string;
        /** The underlying accessor. */
        private _Accessor;
        /** The data accessor to use for this binding. */
        public Accessor(value?: Data.IDataAccessor<string>): Data.IDataAccessor<string>;
        /** The data adapter to use for this binding. */
        public Adapter: Data.IDataAdapter<string, O>;
        /** A list of property names (in increasing depth order) that specify what property of the data from the adapter to bind to. */
        public DataProperty: TSUI.Collections.IList<string>;
        /** The binding direction to use for this binding. */
        public BindingDirection: Data.BindingDirections;
        /** The Update Delay Mode to use for this binding. */
        public DelayMode: Data.DelayModes;
        /** Time to delay between sending access requests to the server to reduce network usage and JS overload. Useful for data bindings such as those bound to text boxes. */
        public UpdateDelayTime: number;
        /** The pull event handler attached to the data accessor. */
        private Accessor_OnDataPulledHandler;
        /** The push event handler attached to the data accessor. */
        private Accessor_OnDataPushedHandler;
        /** The old value of the property this binding is for. */
        private oldValue;
        /** The update timeout reference number. */
        private updateTimeout;
        /** Creates a new data binding.
        @param control The control to bind.
        @param propertyName The name of the control property (i.e. method) to bind to.
        @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
        @param accessor The data accessor to use for this binding.
        @returns A new data binding.
        */
        constructor(control: TSUI.UI.IControl, propertyName: string, dataProperty: TSUI.Collections.IList<string>, accessor: Data.IDataAccessor<string>);
        /** Creates a new data binding.
        @param control The control to bind.
        @param propertyName The name of the control property (i.e. method) to bind to.
        @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
        @param accessor The data accessor to use for this binding.
        @param bindingDirection The binding direction to use for this binding. Default: BOTH_S2UDefault
        @returns A new data binding.
        */
        constructor(control: TSUI.UI.IControl, propertyName: string, dataProperty: TSUI.Collections.IList<string>, accessor: Data.IDataAccessor<string>, bindingDirection: Data.BindingDirections);
        /** Creates a new data binding.
        @param control The control to bind.
        @param propertyName The name of the control property (i.e. method) to bind to.
        @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
        @param accessor The data accessor to use for this binding.
        @param adapter The data adapter to use for this binding. Default: JSONDataAdapter
        @param bindingDirection The binding direction to use for this binding. Default: BOTH_S2UDefault
        @returns A new data binding.
        */
        constructor(control: TSUI.UI.IControl, propertyName: string, dataProperty: TSUI.Collections.IList<string>, accessor: Data.IDataAccessor<string>, bindingDirection: Data.BindingDirections, adapter: Data.IDataAdapter<string, O>);
        /** Wraps the property (method) in a special controlled method, maintaining a copy of the original. */
        public Bind(): boolean;
        /** Unwraps the property (method). */
        public Unbind(): boolean;
        /** Causes the data binding to update using the direction specified in BindingDirection.
        @param trigger The trigger that caused the update request. Leave this parameter at default if calling programatically.
        @returns A boolean indicating whether the update was successful or not.
        */
        public Update(trigger?: Data.UpdateTriggers): boolean;
        /** Causes the data binding to update from the source.
        @returns A boolean indicating whether the update has successfully started or not.
        */
        public UpdateFromSource(): boolean;
        /** Called when the accessor receives data from the source after a pull request (i.e. when data is pulled from the source)
        @param args The event args for the event call.
        @returns Void.
        */
        private Accessor_OnDataPulled(args);
        /** Causes the data binding to update from the user.
        @returns A boolean indicating whether the update has successfully started or not.
        */
        public UpdateFromUser(): boolean;
        /** Called when the accessor receives data from the source after a push request (i.e. when data is pushed to the source)
        @param args The event args for the event call.
        @returns Void.
        */
        private Accessor_OnDataPushed(args);
        /** Updates the control from the supplied data.
        @param data The data to update from.
        @returns A boolean indicating whether the update was successful or not.
        */
        private UpdateUsingData(data);
        /** Fired when the binding updates from the source. */
        public OnUpdateFromSource: TSUI.Events.UpdateFromSourceEvent<string, O>;
        /** Fired when the binding updates from the user. */
        public OnUpdateFromUser: TSUI.Events.UpdateFromUserEvent<string, O>;
    }
}

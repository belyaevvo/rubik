/// <reference path="../../Events/Classes/UpdateInvokedEvent.d.ts" />
/// <reference path="../../Events/Classes/UpdateEndEvent.d.ts" />
/// <reference path="../../Events/Classes/UpdateBeginEvent.d.ts" />
/// <reference path="../../Collections/Classes/List.d.ts" />
/// <reference path="../../Data/Interfaces/IDataBinding.d.ts" />
/// <reference path="../../Data/Interfaces/IDataUpdater.d.ts" />
declare module TSUI.Data {
    /** Defines the structure for a data updater. Data updaters can be used to call updates on all the bindings in a binding group either manually or at a regular interval. */
    class DataUpdater implements Data.IDataUpdater {
        /** Creates a new DataUpdater.
        @returns A new data updater.
        */
        constructor();
        /** Creates a new DataUpdater.
        @param getBindings A function which returns the list of data bindings to update.
        @returns A new data updater.
        */
        constructor(getBindings: () => TSUI.Collections.IList<Data.IDataBinding<any, any>>);
        /** Creates a new DataUpdater.
        @param getBindings A function which returns the list of data bindings to update.
        @param interval The interval with which to update the bindings.
        @returns A new data updater.
        */
        constructor(getBindings: () => TSUI.Collections.IList<Data.IDataBinding<any, any>>, interval: number);
        /** Updates all the bindings in the specified collection. May abort updating any remaining bindings if a binding fails to update.
        @param bindings The collection of bindings to update.
        @param abortOnFailure Whether to abort updating bindings if a binding fails to update.
        @returns The number of bindings which failed to update (or start to update if accessors are asynchronous).
        */
        public UpdateBindings(abortOnFailure?: boolean, bindings?: TSUI.Collections.IList<Data.IDataBinding<any, any>>): number;
        /** Set this delegate to a method which returns the data bindings to be updated when UpdateBindings is called (must be set for updaters which user intervals). */
        public GetBindings: () => TSUI.Collections.IList<Data.IDataBinding<any, any>>;
        /** The underlying interval value. */
        private _interval;
        /** The setInterval reference number. */
        private intervalRef;
        /** Gets or sets the interval with which to update the bindings. Set to -1 to disable periodic updating.
        @param value The interval (time in seconds) to wait between updates.
        @returns The interval time (in seconds) or -1 (indicates no interval)
        */
        public Interval(value?: number): number;
        /** Fired when an update is invoked (either from timer or externally using UpdateBindings). This occurs before OnUpdateBegin. Some invokes may be ignored and in those cases OnUpdateBegin/OnUpdateEnd will not be fired. */
        public OnUpdateInvoked: TSUI.Events.UpdateInvokedEvent;
        /** Fired when update of a data bindings begins. This should be attached to for detecting when an update actually begins. */
        public OnUpdateBegin: TSUI.Events.UpdateBeginEvent;
        /** Fired when update of a data bindings ends. This should be attached to for detecting when an update ends and the status on that update. */
        public OnUpdateEnd: TSUI.Events.UpdateEndEvent;
    }
}

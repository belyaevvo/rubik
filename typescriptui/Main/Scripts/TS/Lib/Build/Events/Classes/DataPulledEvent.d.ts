/// <reference path="../../Data/Interfaces/IDataAccessResult.d.ts" />
/// <reference path="../../Data/Enums/DataAccessStatuses.d.ts" />
/// <reference path="../../Data/Interfaces/IDataAccessor.d.ts" />
/// <reference path="Event.d.ts" />
/// <reference path="../../Events/Interfaces/IEventHandler.d.ts" />
/// <reference path="../../Events/Interfaces/IEventArgs.d.ts" />
/// <reference path="../../Events/Interfaces/IEvent.d.ts" />
declare module TSUI.Events {
    /** See Event for more details. */
    class DataPulledEvent<T> extends Events.Event {
        public Handlers: DataPulledEventHandler<T>[];
        public Attach(handler: DataPulledEventHandler<T>): void;
        public Detach(handler: DataPulledEventHandler<T>): void;
        public IsAttached(handler: DataPulledEventHandler<T>): boolean;
        public Invoke(args: DataPulledEventArgs<T>): void;
    }
    /** See EventHandler for more details. */
    class DataPulledEventHandler<T> extends Events.EventHandler {
        public Callback: (args: DataPulledEventArgs<T>) => void;
        public Context: any;
        constructor(Callback: (args: DataPulledEventArgs<T>) => void, Context: any);
        public Invoke(args: DataPulledEventArgs<T>): void;
    }
    /** See EventArgs for more details.*/
    class DataPulledEventArgs<T> extends Events.EventArgs {
        public Sender: TSUI.Data.IDataAccessor<T>;
        public Result: TSUI.Data.IDataAccessResult<T>;
        constructor(Sender: TSUI.Data.IDataAccessor<T>, Result: TSUI.Data.IDataAccessResult<T>);
    }
}

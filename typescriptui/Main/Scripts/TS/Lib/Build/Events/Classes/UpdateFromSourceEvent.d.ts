/// <reference path="../../Data/Enums/DataAccessStatuses.d.ts" />
/// <reference path="../../Data/Interfaces/IDataAccessResult.d.ts" />
/// <reference path="../../Data/Enums/DataAccessStatuses.d.ts" />
/// <reference path="../../Data/Interfaces/IDataBinding.d.ts" />
/// <reference path="Event.d.ts" />
/// <reference path="../../Events/Interfaces/IEventHandler.d.ts" />
/// <reference path="../../Events/Interfaces/IEventArgs.d.ts" />
/// <reference path="../../Events/Interfaces/IEvent.d.ts" />
declare module TSUI.Events {
    /** See Event for more details. */
    class UpdateFromSourceEvent<I, O> extends Events.Event {
        public Handlers: UpdateFromSourceEventHandler<I, O>[];
        public Attach(handler: UpdateFromSourceEventHandler<I, O>): void;
        public Detach(handler: UpdateFromSourceEventHandler<I, O>): void;
        public IsAttached(handler: UpdateFromSourceEventHandler<I, O>): boolean;
        public Invoke(args: UpdateFromSourceEventArgs<I, O>): void;
    }
    /** See EventHandler for more details. */
    class UpdateFromSourceEventHandler<I, O> extends Events.EventHandler {
        public Callback: (args: UpdateFromSourceEventArgs<I, O>) => void;
        public Context: any;
        constructor(Callback: (args: UpdateFromSourceEventArgs<I, O>) => void, Context: any);
        public Invoke(args: UpdateFromSourceEventArgs<I, O>): void;
    }
    /** See EventArgs for more details.*/
    class UpdateFromSourceEventArgs<I, O> extends Events.EventArgs {
        public Sender: TSUI.Data.IDataBinding<I, O>;
        public Status: TSUI.Data.DataAccessStatuses;
        constructor(Sender: TSUI.Data.IDataBinding<I, O>, Status: TSUI.Data.DataAccessStatuses);
    }
}

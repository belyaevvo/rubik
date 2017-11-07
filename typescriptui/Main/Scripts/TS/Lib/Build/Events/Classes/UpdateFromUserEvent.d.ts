/// <reference path="../../Data/Enums/DataAccessStatuses.d.ts" />
/// <reference path="../../Data/Interfaces/IDataBinding.d.ts" />
/// <reference path="Event.d.ts" />
/// <reference path="../../Events/Interfaces/IEventHandler.d.ts" />
/// <reference path="../../Events/Interfaces/IEventArgs.d.ts" />
/// <reference path="../../Events/Interfaces/IEvent.d.ts" />
declare module TSUI.Events {
    /** See Event for more details. */
    class UpdateFromUserEvent<I, O> extends Events.Event {
        public Handlers: UpdateFromUserEventHandler<I, O>[];
        public Attach(handler: UpdateFromUserEventHandler<I, O>): void;
        public Detach(handler: UpdateFromUserEventHandler<I, O>): void;
        public IsAttached(handler: UpdateFromUserEventHandler<I, O>): boolean;
        public Invoke(args: UpdateFromUserEventArgs<I, O>): void;
    }
    /** See EventHandler for more details. */
    class UpdateFromUserEventHandler<I, O> extends Events.EventHandler {
        public Callback: (args: UpdateFromUserEventArgs<I, O>) => void;
        public Context: any;
        constructor(Callback: (args: UpdateFromUserEventArgs<I, O>) => void, Context: any);
        public Invoke(args: UpdateFromUserEventArgs<I, O>): void;
    }
    /** See EventArgs for more details.*/
    class UpdateFromUserEventArgs<I, O> extends Events.EventArgs {
        public Sender: TSUI.Data.IDataBinding<I, O>;
        public Status: TSUI.Data.DataAccessStatuses;
        constructor(Sender: TSUI.Data.IDataBinding<I, O>, Status: TSUI.Data.DataAccessStatuses);
    }
}

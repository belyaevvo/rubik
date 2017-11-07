/// <reference path="../../Data/Interfaces/IDataUpdater.d.ts" />
/// <reference path="Event.d.ts" />
/// <reference path="../../Events/Interfaces/IEventHandler.d.ts" />
/// <reference path="../../Events/Interfaces/IEventArgs.d.ts" />
/// <reference path="../../Events/Interfaces/IEvent.d.ts" />
declare module TSUI.Events {
    /** See Event for more details. */
    class UpdateInvokedEvent extends Events.Event {
        public Handlers: UpdateInvokedEventHandler[];
        public Attach(handler: UpdateInvokedEventHandler): void;
        public Detach(handler: UpdateInvokedEventHandler): void;
        public IsAttached(handler: UpdateInvokedEventHandler): boolean;
        public Invoke(args: UpdateInvokedEventArgs): void;
    }
    /** See EventHandler for more details. */
    class UpdateInvokedEventHandler extends Events.EventHandler {
        public Callback: (args: UpdateInvokedEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: UpdateInvokedEventArgs) => void, Context: any);
        public Invoke(args: UpdateInvokedEventArgs): void;
    }
    /** See EventArgs for more details.*/
    class UpdateInvokedEventArgs extends Events.EventArgs {
        public Sender: TSUI.Data.IDataUpdater;
        constructor(Sender: TSUI.Data.IDataUpdater);
    }
}

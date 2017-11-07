/// <reference path="../../Data/Interfaces/IDataUpdater.d.ts" />
/// <reference path="Event.d.ts" />
/// <reference path="../../Events/Interfaces/IEventHandler.d.ts" />
/// <reference path="../../Events/Interfaces/IEventArgs.d.ts" />
/// <reference path="../../Events/Interfaces/IEvent.d.ts" />
declare module TSUI.Events {
    /** See Event for more details. */
    class UpdateEndEvent extends Events.Event {
        public Handlers: UpdateEndEventHandler[];
        public Attach(handler: UpdateEndEventHandler): void;
        public Detach(handler: UpdateEndEventHandler): void;
        public IsAttached(handler: UpdateEndEventHandler): boolean;
        public Invoke(args: UpdateEndEventArgs): void;
    }
    /** See EventHandler for more details. */
    class UpdateEndEventHandler extends Events.EventHandler {
        public Callback: (args: UpdateEndEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: UpdateEndEventArgs) => void, Context: any);
        public Invoke(args: UpdateEndEventArgs): void;
    }
    /** See EventArgs for more details.*/
    class UpdateEndEventArgs extends Events.EventArgs {
        public Sender: TSUI.Data.IDataUpdater;
        public failures: number;
        constructor(Sender: TSUI.Data.IDataUpdater, failures: number);
    }
}

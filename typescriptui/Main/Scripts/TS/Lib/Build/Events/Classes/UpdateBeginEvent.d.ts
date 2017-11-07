/// <reference path="../../Data/Interfaces/IDataUpdater.d.ts" />
/// <reference path="Event.d.ts" />
/// <reference path="../../Events/Interfaces/IEventHandler.d.ts" />
/// <reference path="../../Events/Interfaces/IEventArgs.d.ts" />
/// <reference path="../../Events/Interfaces/IEvent.d.ts" />
declare module TSUI.Events {
    /** See Event for more details. */
    class UpdateBeginEvent extends Events.Event {
        public Handlers: UpdateBeginEventHandler[];
        public Attach(handler: UpdateBeginEventHandler): void;
        public Detach(handler: UpdateBeginEventHandler): void;
        public IsAttached(handler: UpdateBeginEventHandler): boolean;
        public Invoke(args: UpdateBeginEventArgs): void;
    }
    /** See EventHandler for more details. */
    class UpdateBeginEventHandler extends Events.EventHandler {
        public Callback: (args: UpdateBeginEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: UpdateBeginEventArgs) => void, Context: any);
        public Invoke(args: UpdateBeginEventArgs): void;
    }
    /** See EventArgs for more details.*/
    class UpdateBeginEventArgs extends Events.EventArgs {
        public Sender: TSUI.Data.IDataUpdater;
        constructor(Sender: TSUI.Data.IDataUpdater);
    }
}

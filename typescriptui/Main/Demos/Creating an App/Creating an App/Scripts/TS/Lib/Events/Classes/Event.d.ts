/// <reference path="../Interfaces/IEventHandler.d.ts" />
/// <reference path="../Interfaces/IEventArgs.d.ts" />
/// <reference path="../Interfaces/IEvent.d.ts" />
declare module TSUI.Events {
    class Event implements Events.IEvent {
        public Handlers: Events.IEventHandler[];
        public OnHandlerAttached: () => void;
        public OnHandlerAttachedContext: any;
        public OnHandlerDettached: () => void;
        public OnHandlerDettachedContext: any;
        public Attach(handler: Events.IEventHandler): void;
        public Detach(handler: Events.IEventHandler): void;
        public IsAttached(handler: Events.IEventHandler): boolean;
        public Invoke(args: Events.IEventArgs): void;
    }
    class EventHandler implements Events.IEventHandler {
        public Callback: (args: Events.IEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: Events.IEventArgs) => void, Context: any);
        public Invoke(args: Events.IEventArgs): void;
    }
    class EventArgs implements Events.IEventArgs {
        public Sender: any;
        constructor(Sender: any);
    }
}

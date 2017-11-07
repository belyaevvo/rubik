/// <reference path="../../Events/Interfaces/IEventHandler.d.ts" />
/// <reference path="../../Events/Interfaces/IEventArgs.d.ts" />
/// <reference path="../../Events/Interfaces/IEvent.d.ts" />
declare module TSUI.Events {
    /** Fundamental implementation of an Event. All Events should inherit from this class.
    Note: See ClickEvent for sample derived class.
    Note: See List for sample usage.
    */
    class Event implements Events.IEvent {
        /** Private property - do not use externally. Should be overridden in derived classes simply to set the correct EventHandler type. */
        public Handlers: Events.IEventHandler[];
        /** Called when a new event handler is attached - can only be set to one method - if overriding, ensure full implementation as seen in this class. */
        public OnHandlerAttached: () => void;
        /** The context object to use when calling OnHandlerAttached (sets the value of "this" in the called function). */
        public OnHandlerAttachedContext: any;
        /** Called when a new event handler is attached - can only be set to one method - if overriding, ensure full implementation as seen in this class. */
        public OnHandlerDettached: () => void;
        /** The context object to use when calling OnHandlerDettached (sets the value of "this" in the called function). */
        public OnHandlerDettachedContext: any;
        /** Attaches a an event handler to this event to be called when the event is fired.
        @param handler The event handler to attach.
        Note: An event handler can be attached to more than one event.
        Note: Should be overridden in derived classes to more specifically type handler argument.
        */
        public Attach(handler: Events.IEventHandler): void;
        /** Detaches a an event handler from this event. Does nothing if the event handler has not already been attached.
        @param handler The event handler to detach.
        Note: Should be overridden in derived classes to more specifically type handler argument.
        */
        public Detach(handler: Events.IEventHandler): void;
        /** @returns whether the specified event handler is attached to this event or not.
        @param handler The event handler to check.
        Note: Should be overridden in derived classes to more specifically type handler argument.
        */
        public IsAttached(handler: Events.IEventHandler): boolean;
        /** Invokes (fires) this event with the given event args. Synchronously calls Invoke on each EventHandler in order of attachment, first-to-last.
        Note: Should be overridden in derived classes to more specifically type args argument.
        */
        public Invoke(args: Events.IEventArgs): void;
    }
    /** Fundamental implementation of an EventHandler. All EventHandlers should inherit from this class.
    Note: An event handler can be attached to multiple events (provided it is unaffected by being attached to that event e.g. not destroyed after one event fires).
    Note: See ClickEventHandler for sample derived class.
    */
    class EventHandler implements Events.IEventHandler {
        public Callback: (args: Events.IEventArgs) => void;
        public Context: any;
        /** Creates a new EventHandler.
        @param Callback The function to call when the event handler is invoked.
        @param Context The context to use when calling the Callback function (sets the value of "this" in the callback function).
        Note: Should be overridden in derived classes to more specifically type 'args' argument of Callback.
        */
        constructor(Callback: (args: Events.IEventArgs) => void, Context: any);
        /** Invokes the event handler's callback with correct context and passes in the arguments.
        Note: Should be overridden in derived classes to more specifically type eventArgs argument.
        */
        public Invoke(args: Events.IEventArgs): void;
    }
    /** Fundamental implementation of an EventArgs. All EventArgs should inherit from this class.
    Note: See ClickEventArgs for sample derived class.
    Note: See List for sample usage.
    */
    class EventArgs implements Events.IEventArgs {
        public Sender: any;
        /** Creates new EventArgs.
        @param Sender The object which caused this event (or which is passing on an underlying event).
        Note: Should be overridden in derived classes to add extra properties to the event and more specifically type Sender property.
        */
        constructor(Sender: any);
    }
}

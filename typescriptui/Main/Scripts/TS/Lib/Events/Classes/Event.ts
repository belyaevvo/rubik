/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Interfaces/IEventHandler.d.ts" />
/// <reference path="../Interfaces/IEventArgs.d.ts" />
/// <reference path="../Interfaces/IEvent.d.ts" />

module TSUI.Events
{
    /** Fundamental implementation of an Event. All Events should inherit from this class. 
        Note: See ClickEvent for sample derived class.
        Note: See List for sample usage.
    */
    export class Event implements IEvent
    {
        /** Private property - do not use externally. Should be overridden in derived classes simply to set the correct EventHandler type. */
        Handlers: IEventHandler[] = [];
        /** Called when a new event handler is attached - can only be set to one method - if overriding, ensure full implementation as seen in this class. */
        OnHandlerAttached: () => void = null;
        /** The context object to use when calling OnHandlerAttached (sets the value of "this" in the called function). */
        OnHandlerAttachedContext: any = null;
        /** Called when a new event handler is attached - can only be set to one method - if overriding, ensure full implementation as seen in this class. */
        OnHandlerDettached: () => void = null;
        /** The context object to use when calling OnHandlerDettached (sets the value of "this" in the called function). */
        OnHandlerDettachedContext: any = null;

        /** Attaches a an event handler to this event to be called when the event is fired. 
            @param handler The event handler to attach.
            Note: An event handler can be attached to more than one event.
            Note: Should be overridden in derived classes to more specifically type handler argument.
        */
        Attach(handler: IEventHandler): void
        {
            if (!this.IsAttached(handler))
            {
                this.Handlers.push(handler);
                if (this.OnHandlerAttached !== null)
                {
                    this.OnHandlerAttached.call(this.OnHandlerAttachedContext);
                }
            }
        }
        /** Detaches a an event handler from this event. Does nothing if the event handler has not already been attached. 
            @param handler The event handler to detach.
            Note: Should be overridden in derived classes to more specifically type handler argument.
        */
        Detach(handler: IEventHandler): void
        {
            if (this.IsAttached(handler))
            {
                this.Handlers.splice(this.Handlers.indexOf(handler), 1);
                if (this.OnHandlerDettached !== null)
                {
                    this.OnHandlerDettached.call(this.OnHandlerDettachedContext);
                }
            }
        }

        /** @returns whether the specified event handler is attached to this event or not.
            @param handler The event handler to check.
            Note: Should be overridden in derived classes to more specifically type handler argument.
         */
        IsAttached(handler: IEventHandler): boolean
        {
            return this.Handlers.indexOf(handler) > -1;
        }

        /** Invokes (fires) this event with the given event args. Synchronously calls Invoke on each EventHandler in order of attachment, first-to-last. 
            Note: Should be overridden in derived classes to more specifically type args argument.
        */
        Invoke(args: IEventArgs)
        {
            for (var i = 0; i < this.Handlers.length; i++)
            {
                this.Handlers[i].Invoke(args);
            }
        }
    }

    /** Fundamental implementation of an EventHandler. All EventHandlers should inherit from this class. 
        Note: An event handler can be attached to multiple events (provided it is unaffected by being attached to that event e.g. not destroyed after one event fires).
        Note: See ClickEventHandler for sample derived class.
    */
    export class EventHandler implements IEventHandler
    {
        /** Creates a new EventHandler.
            @param Callback The function to call when the event handler is invoked.
            @param Context The context to use when calling the Callback function (sets the value of "this" in the callback function).
            Note: Should be overridden in derived classes to more specifically type 'args' argument of Callback.
        */
        constructor(public Callback: (args: IEventArgs) => void , public Context: any)
        {
        }

        /** Invokes the event handler's callback with correct context and passes in the arguments. 
            Note: Should be overridden in derived classes to more specifically type eventArgs argument.
        */
        Invoke(args: IEventArgs)
        {
            this.Callback.call(this.Context, args);
        }
    }
    /** Fundamental implementation of an EventArgs. All EventArgs should inherit from this class. 
        Note: See ClickEventArgs for sample derived class.
        Note: See List for sample usage.
    */
    export class EventArgs implements IEventArgs
    {
        /** Creates new EventArgs.
            @param Sender The object which caused this event (or which is passing on an underlying event).
            Note: Should be overridden in derived classes to add extra properties to the event and more specifically type Sender property.
        */
        constructor(public Sender: any)
        {
        }
    }
}
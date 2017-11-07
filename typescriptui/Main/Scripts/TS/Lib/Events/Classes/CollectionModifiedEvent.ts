/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Enums/CollectionModifications.ts" />
/// <reference path="../../Collections/Collections_BuildRefs.d.ts" />
/// <reference path="Event.ts" />
/// <reference path="../Interfaces/IEventHandler.d.ts" />
/// <reference path="../Interfaces/IEventArgs.d.ts" />
/// <reference path="../Interfaces/IEvent.d.ts" />


module TSUI.Events
{
    /** Event to be fired when a collection (e.g. IList) is modified e.g. added to, removed from, re-ordered.
        Note: This event has been put into a separate class ro prevent reference loops with Collections namespace that result in compiler failures/errors.
     */
    export class CollectionModifiedEvent<T> extends Event
    {
        Handlers: CollectionModifiedEventHandler<T>[] = [];

        Attach(handler: CollectionModifiedEventHandler<T>): void
        {
            super.Attach(handler);
        }
        Detach(handler: CollectionModifiedEventHandler<T>): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: CollectionModifiedEventHandler<T>): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.CollectionModifiedEventArgs<T>)
        {
            super.Invoke(args);
        }
    }
    export class CollectionModifiedEventHandler<T> extends EventHandler
    {
        constructor(public Callback: (args: CollectionModifiedEventArgs<T>) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: CollectionModifiedEventArgs<T>)
        {
            super.Invoke(args);
        }
    }
        
    export class CollectionModifiedEventArgs<T> extends EventArgs
    {
        constructor(public Sender: Collections.IList<T>, public Modification: CollectionModifications, public ModifiedElements: Collections.IList<T>)
        {
            super(Sender);
        }
    }
}
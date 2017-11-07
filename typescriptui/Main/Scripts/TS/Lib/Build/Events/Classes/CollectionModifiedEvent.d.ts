/// <reference path="../Enums/CollectionModifications.d.ts" />
/// <reference path="../../Collections/CollectionsRefs.d.ts" />
/// <reference path="Event.d.ts" />
/// <reference path="../../Events/Interfaces/IEventHandler.d.ts" />
/// <reference path="../../Events/Interfaces/IEventArgs.d.ts" />
/// <reference path="../../Events/Interfaces/IEvent.d.ts" />
declare module TSUI.Events {
    /** Event to be fired when a collection (e.g. IList) is modified e.g. added to, removed from, re-ordered.
    Note: This event has been put into a separate class ro prevent reference loops with Collections namespace that result in compiler failures/errors.
    */
    class CollectionModifiedEvent<T> extends Events.Event {
        public Handlers: CollectionModifiedEventHandler<T>[];
        public Attach(handler: CollectionModifiedEventHandler<T>): void;
        public Detach(handler: CollectionModifiedEventHandler<T>): void;
        public IsAttached(handler: CollectionModifiedEventHandler<T>): boolean;
        public Invoke(args: CollectionModifiedEventArgs<T>): void;
    }
    class CollectionModifiedEventHandler<T> extends Events.EventHandler {
        public Callback: (args: CollectionModifiedEventArgs<T>) => void;
        public Context: any;
        constructor(Callback: (args: CollectionModifiedEventArgs<T>) => void, Context: any);
        public Invoke(args: CollectionModifiedEventArgs<T>): void;
    }
    class CollectionModifiedEventArgs<T> extends Events.EventArgs {
        public Sender: TSUI.Collections.IList<T>;
        public Modification: Events.CollectionModifications;
        public ModifiedElements: TSUI.Collections.IList<T>;
        constructor(Sender: TSUI.Collections.IList<T>, Modification: Events.CollectionModifications, ModifiedElements: TSUI.Collections.IList<T>);
    }
}

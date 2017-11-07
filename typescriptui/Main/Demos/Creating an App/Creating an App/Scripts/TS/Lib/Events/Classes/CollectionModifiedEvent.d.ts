/// <reference path="../Enums/CollectionModifications.d.ts" />
/// <reference path="../../Collections/CollectionsRefs.d.ts" />
/// <reference path="Event.d.ts" />
/// <reference path="../Interfaces/IEventHandler.d.ts" />
/// <reference path="../Interfaces/IEventArgs.d.ts" />
/// <reference path="../Interfaces/IEvent.d.ts" />
declare module TSUI.Events {
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

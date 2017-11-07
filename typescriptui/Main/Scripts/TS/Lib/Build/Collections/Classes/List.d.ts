/// <reference path="ToStringComparer.d.ts" />
/// <reference path="../../Exceptions/ExceptionsRefs.d.ts" />
/// <reference path="../../Utils.d.ts" />
/// <reference path="../../Collections/Interfaces/IList.d.ts" />
declare module TSUI.Collections {
    /** A generic IList implementation. */
    class List<T> implements Collections.IList<T> {
        /** The underlying array of items. */
        private items;
        /** Fired when the collection is modified i.e. added to, removed from or re-ordered*/
        public OnModified: TSUI.Events.CollectionModifiedEvent<T>;
        /** Creates a new list.
        @param obj OPTIONAL Either: null; a number indicating size of the array to create or an existing array to clone and use as the basis for the new list.
        */ 
        constructor(obj?: any);
        /** Adds the specified object to the end of the list.
        @param object The object to be added to the list.
        */
        public Add(object: T): void;
        /** Adds the specified list of objects to the end of the list.
        @param objects The list of objects to be added.
        */
        public AddRange(objects: Collections.IList<T>): void;
        /** Clears the list of all objects. */
        public Clear(): void;
        /** Creates a shallow clone of the list. Note: Reference-type objects are not deep cloned.
        @returns the new (clone) list.
        */
        public Clone(): Collections.IList<T>;
        /** Concatenates two lists. Does not modify either original list.
        @param other The list to be concatenated with.
        @returns a list containing this list followed by the other list.
        */
        public Concat(other: Collections.IList<T>): Collections.IList<T>;
        /** Determins whether the object is contained within the list.
        @param object The object to be searched for.
        @returns true if the object is contained within the list, otherwise false.
        */
        public Contains(object: T): boolean;
        /** Copies the specified number of items into another list, starting at the specified index.
        @param dest The list to be copied into.
        @param offset OPTIONAL The index at which to start copying. If unspecified, starts from index 0.
        @param count OPTIONAL The number of items to be copied. If unspecified, uses full length of list.
        */
        public CopyTo(dest: Collections.IList<T>, offset?: number, count?: number): void;
        /** @returns the number of items in the list (the length) */
        public Count(): number;
        /** @returns the element at the specified index or null if out of range.
        @param index The index of the element to get.
        */
        public ElementAt(index: number): T;
        /** @returns whether this list is equal to the specified object.
        @param object The object to test for equality.
        */
        public Equals(object: any): boolean;
        /** @returns the index of the specified object or -1 if not found.
        @param object The object to be searched for.
        */
        public IndexOf(object: T): number;
        /** Inserts the specified object into the list at the specified index.
        @param object The object to be inserted.
        @param index The index at which to insert the object.
        */
        public Insert(object: T, index: number): void;
        /** Inserts a list of objects at the specified index - expands the list at that index. Does not overwrite existing items.
        @param objects The list of objects to be inserted.
        @param index The index at which to start inserting.
        */
        public InsertRange(objects: Collections.IList<T>, index: number): void;
        /** @returns a list containing the specified range of objects from the list.
        @param index The index to start the range.
        @param count OPTIONAL The number of items to take. If unspecified, takes from index to the end of the list.
        */
        public Range(index: number, count?: number): Collections.IList<T>;
        /** Removes the specified object from the list.
        @param object The object to be removed.
        @param event Specifies whether to fire the OnModified event or not. Default: true.
        */
        public Remove(object: T, event?: boolean): void;
        /** Removes the specified list of objects from the list. Only fires one modified event.
        @param objects The list of objects to be removed.
        */
        public RemoveAll(objects: Collections.IList<T>): void;
        /** Removes the element at the specified index.
        @param index The index of the object to be removed.
        @returns the object which has been removed.
        */
        public RemoveAt(index: number): T;
        /** Removes the specified range of objects from the list.
        @param index The index at which to start removing.
        @param count The number of objects to remove.
        @returns a list containing the removed objects.
        */
        public RemoveRange(index: number, count: number): Collections.IList<T>;
        /** Reverses the list of objects. */
        public Reverse(): void;
        /** Sorts the list of objects using a ToStringComparer or the specified comparer.
        @param comparer OPTIONAL The comparer to use while sorting.
        */
        public Sort(comparer?: Collections.IComparer): void;
        /** Converts the list to a basic array.
        @returns a clone of the underlying array.
        */
        public ToArray(): T[];
    }
}

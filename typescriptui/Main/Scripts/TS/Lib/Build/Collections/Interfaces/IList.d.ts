/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Events/Classes/CollectionModifiedEvent.d.ts" />
/// <reference path="IComparer.d.ts" />
declare module TSUI.Collections
{
    /** Definition for a List - provides a wrapper for JS arrays with additional methods. Uses generics to enforce stronger typing.
    */
    export interface IList<T>
    {
        /** Fired when the collection is modified i.e. added to, removed from or re-ordered*/
        OnModified: Events.CollectionModifiedEvent<T>;

        /** Adds the specified object to the end of the list.
            @param object The object to be added to the list.
        */
        Add(object: T): void;
        /** Adds the specified list of objects to the end of the list.
            @param objects The list of objects to be added.
        */
        AddRange(objects: IList<T>): void;

        /** Clears the list of all objects. */
        Clear(): void;

        /** Creates a shallow clone of the list. Note: Reference-type objects are not deep cloned.
            @returns the new (clone) list.
        */
        Clone(): IList<T>;

        /** Concatenates two lists. Does not modify either original list.
            @param other The list to be concatenated with.
            @returns a list containing this list followed by the other list.
        */
        Concat(other: IList<T>): IList<T>;

        /** Determines whether the object is contained within the list.
            @param object The object to be searched for.
            @returns true if the object is contained within the list, otherwise false.
         */
        Contains(object: T): boolean;

        /** Copies the list to another list.
            @param dest The list to be copied into.
        */
        CopyTo(dest: IList<T>): void;
        /** Copies the list into another list, starting at the specified index.
            @param dest The list to be copied into.
            @param offset The index at which to start copying.
        */
        CopyTo(dest: IList<T>, offset: number): void;
        /** Copies the specified number of items into another list, starting at the specified index.
            @param dest The list to be copied into.
            @param offset The index at which to start copying.
            @param count The number of items to be copied.
        */
        CopyTo(dest: IList<T>, offset: number, count: number): void;

        /** @returns the number of items in the list (the length) */
        Count(): number;

        /** @returns the element at the specified index or null if out of range.
            @param index The index of the element to get.
        */
        ElementAt(index: number): T;
        /** @returns whether this list is equal to the specified object.
            @param object The object to test for equality.
        */
        Equals(object: any): boolean;

        /** @returns the index of the specified object or -1 if not found.
            @param object The object to be searched for.
        */
        IndexOf(object: T): number;

        /** Inserts the specified object into the list at the specified index.
            @param object The object to be inserted.
            @param index The index at which to insert the object.
        */
        Insert(object: T, index: number): void;
        /** Inserts a list of objects at the specified index - expands the list at that index. Does not overwrite existing items.
            @param objects The list of objects to be inserted.
            @param index The index at which to start inserting.
        */
        InsertRange(objects: IList<T>, index: number): void;

        /** @returns a list containing the specified range of objects from the list. Takes from index to end of the list.
            @param index The index to start the range.
        */
        Range(index: number): IList<T>;
        /** @returns a list containing the specified range of objects from the list.
            @param index The index to start the range.
            @param count The number of items to take.
        */
        Range(index: number, count?: number): IList<T>;

        /** Removes the specified object from the list. 
            @param object The object to be removed.
        */
        Remove(object: T): void;
        /** Removes the specified list of objects from the list. Only fires one modified event. 
            @param objects The list of objects to be removed.
        */
        RemoveAll(objects: IList<T>): void;
        /** Removes the element at the specified index.
            @param index The index of the object to be removed.
            @returns the object which has been removed.
        */
        RemoveAt(index: number): T;
        /** Removes the specified range of objects from the list.
            @param index The index at which to start removing.
            @param count The number of objects to remove.
            @returns A list containing the removed objects.
        */
        RemoveRange(index: number, count: number): IList<T>;

        /** Reverses the list of objects. */
        Reverse(): void;

        /** Sorts the list of objects using a ToStringComparer. */
        Sort(): void;
        /** Sorts the list of objects using the specified comparer. 
            @param comparer The comparer to use while sorting.
        */
        Sort(comparer: IComparer): void;

        /** Converts the list to a basic array.
            @returns a clone of the underlying array.
        */
        ToArray(): T[];
    }
}
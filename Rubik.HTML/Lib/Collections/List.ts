/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="ToStringComparer.ts" />
/// <reference path="../Exceptions/Exception.ts" />
/// <reference path="../Exceptions/ArgumentException.ts" />
/// <reference path="../Exceptions/IncorrectTypeException.ts" />
/// <reference path="../Utils.ts" />
/// <reference path="IList.d.ts" />

module Rubik.Collections
{
    /** A generic IList implementation. */
    export class List<T> implements IList<T>
    {
        /** The underlying array of items. */
        private items: any[] = [];

        /** Fired when the collection is modified i.e. added to, removed from or re-ordered*/
        OnModified: CollectionModifiedEvent<T> = new CollectionModifiedEvent<T>();

        /** Creates a new list. 
            @param obj OPTIONAL Either: null; a number indicating size of the array to create or an existing array to clone and use as the basis for the new list.
        */ 
        constructor(obj: any = null)
        {
            if (obj !== null)
            {
                if (Rubik.isNumber(obj))
                {
                    this.items = new Array<T>(<number>obj);
                }
                else if (Rubik.isArray(obj))
                {
                    this.items = (<any[]>obj).slice(0);
                }
                else
                {
                    throw new Exceptions.ArgumentException("obj",
                        "Rubik.Components.List:constructor",
                        new Exceptions.IncorrectTypeException(typeof (obj),
                                "number or array",
                                "Rubik.Components.List:constructor"));
                }
            }
            else
            {
                this.items = [];
            }
        }
        
        /** Adds the specified object to the end of the list.
            @param object The object to be added to the list.
        */
        Add(object: T): void
        {
            this.items.push(object);
            this.OnModified.Invoke(new CollectionModifiedEventArgs(this, CollectionModifications.Add, new List<T>([object])));
        }
        /** Adds the specified list of objects to the end of the list.
            @param objects The list of objects to be added.
        */
        AddRange(objects: IList<T>): void
        {
            this.items.push.apply(this.items,objects.ToArray());            
            this.OnModified.Invoke(new CollectionModifiedEventArgs(this, CollectionModifications.Add, objects));
        }
        
        /** Clears the list of all objects. */
        Clear(): void
        {
            var _thisClone = this.Clone();
            this.items = [];
            this.OnModified.Invoke(new CollectionModifiedEventArgs(this, CollectionModifications.Remove, _thisClone));
        }

        /** Creates a shallow clone of the list. Note: Reference-type objects are not deep cloned.
            @returns the new (clone) list.
        */
        Clone(): IList<T>
        {
            return new List<T>(this.items.slice(0));
        }
        
        /** Concatenates two lists. Does not modify either original list.
            @param other The list to be concatenated with.
            @returns a list containing this list followed by the other list.
        */
        Concat(other: IList<T>): IList<T>
        {
            var NewList: List<T> = new List<T>(this.Count() + other.Count());
            NewList.AddRange(this);
            NewList.AddRange(other);
            return NewList;
        }
        
        /** Determins whether the object is contained within the list.
            @param object The object to be searched for.
            @returns true if the object is contained within the list, otherwise false.
         */
        Contains(object: T): boolean
        {
            return this.IndexOf(object) > -1;
        }
        
        /** Copies the specified number of items into another list, starting at the specified index.
            @param dest The list to be copied into.
            @param offset OPTIONAL The index at which to start copying. If unspecified, starts from index 0.
            @param count OPTIONAL The number of items to be copied. If unspecified, uses full length of list.
        */
        CopyTo(dest: IList<T>, offset: number = 0, count: number = this.Count()): void
        {
            dest.AddRange(this.Range(offset, count));
        }

        /** @returns the number of items in the list (the length) */
        Count(): number
        {
            return this.items.length;
        }
        
        /** @returns the element at the specified index or null if out of range.
            @param index The index of the element to get.
        */
        ElementAt(index: number): T
        {
            if (index > -1 && index < this.Count())
            {
                return this.items[index];
            }
            return null;
        }
        /** @returns whether this list is equal to the specified object.
            @param object The object to test for equality.
        */
        Equals(object: any): boolean
        {
            return this === object;
        }
        
        /** @returns the index of the specified object or -1 if not found.
            @param object The object to be searched for.
        */
        IndexOf(object: T): number
        {
            return this.items.indexOf(object);
        }

        /** Inserts the specified object into the list at the specified index.
            @param object The object to be inserted.
            @param index The index at which to insert the object.
        */
        Insert(object: T, index: number): void
        {
            this.items.splice(index, 0, object);
            this.OnModified.Invoke(new CollectionModifiedEventArgs(this, CollectionModifications.Add, new List<T>([object])));
        }
        /** Inserts a list of objects at the specified index - expands the list at that index. Does not overwrite existing items.
            @param objects The list of objects to be inserted.
            @param index The index at which to start inserting.
        */
        InsertRange(objects: IList<T>, index: number): void
        {
            this.items.splice(index, 0, []);
            this.OnModified.Invoke(new CollectionModifiedEventArgs(this, CollectionModifications.Add, new List<T>(objects)));
        }

        /** @returns a list containing the specified range of objects from the list.
            @param index The index to start the range.
            @param count OPTIONAL The number of items to take. If unspecified, takes from index to the end of the list.
        */
        Range(index: number, count: number = this.Count() - index): IList<T>
        {
            var max = Math.min(index + count, this.Count());
            return new List<T>(this.items.slice(index, max));
        }

        /** Removes the specified object from the list. 
            @param object The object to be removed.
            @param event Specifies whether to fire the OnModified event or not. Default: true.
        */
        Remove(object: T, event: boolean = true): void
        {
            var index = this.IndexOf(object);
            if (index > -1)
            {
                this.items.splice(index, 1);
                if (event)
                {
                    this.OnModified.Invoke(new CollectionModifiedEventArgs(this, CollectionModifications.Remove, new List<T>([object])));
                }
            }
        }
        /** Removes the specified list of objects from the list. Only fires one modified event. 
            @param objects The list of objects to be removed.
        */
        RemoveAll(objects: IList<T>): void
        {
            for (var i = 0; i < objects.Count(); i++)
            {
                this.Remove(objects.ElementAt(i), false);
            }
            this.OnModified.Invoke(new CollectionModifiedEventArgs(this, CollectionModifications.Remove, objects));
        }
        /** Removes the element at the specified index.
            @param index The index of the object to be removed.
            @returns the object which has been removed.
        */
        RemoveAt(index: number): T
        {
            var x = this.items.splice(index, 1)[0];
            this.OnModified.Invoke(new CollectionModifiedEventArgs(this, CollectionModifications.Remove, new List<T>([x])));
            return x;
        }
        /** Removes the specified range of objects from the list.
            @param index The index at which to start removing.
            @param count The number of objects to remove.
            @returns a list containing the removed objects.
        */
        RemoveRange(index: number, count: number): IList<T>
        {
            count = Math.min(count, this.Count());
            var ReturnList: List<T> = new List<T>(this.items.splice(index, count));
            this.OnModified.Invoke(new CollectionModifiedEventArgs(this, CollectionModifications.Remove, ReturnList));
            return ReturnList;
        }
        
        /** Reverses the list of objects. */
        Reverse(): void
        {
            this.items = this.items.reverse();
            this.OnModified.Invoke(new CollectionModifiedEventArgs(this, CollectionModifications.Reorder, this));
        }
        
        /** Sorts the list of objects using a ToStringComparer or the specified comparer. 
            @param comparer OPTIONAL The comparer to use while sorting.
        */
        Sort(comparer: IComparer = new ToStringComparer()): void
        {
            this.items = this.items.sort(comparer.Compare);
            this.OnModified.Invoke(new CollectionModifiedEventArgs(this, CollectionModifications.Reorder, this));
        }
        
        /** Converts the list to a basic array.
            @returns a clone of the underlying array.
        */
        ToArray(): T[]
        {
            return this.items.slice(0);
        }
    }
}


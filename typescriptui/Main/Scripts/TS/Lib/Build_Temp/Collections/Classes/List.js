var TSUI;
(function (TSUI) {
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
    /// <reference path="../../Exceptions/Exceptions_BuildRefs.d.ts" />
    /// <reference path="../../Utils.ts" />
    /// <reference path="../Interfaces/IList.d.ts" />
    (function (Collections) {
        /** A generic IList implementation. */
        var List = (function () {
            /** Creates a new list.
            @param obj OPTIONAL Either: null; a number indicating size of the array to create or an existing array to clone and use as the basis for the new list.
            */
            function List(obj) {
                if (typeof obj === "undefined") { obj = null; }
                /** The underlying array of items. */
                this.items = [];
                /** Fired when the collection is modified i.e. added to, removed from or re-ordered*/
                this.OnModified = new TSUI.Events.CollectionModifiedEvent();
                if (obj !== null) {
                    if (TSUI.isNumber(obj)) {
                        this.items = new Array(obj);
                    } else if (TSUI.isArray(obj)) {
                        this.items = obj.slice(0);
                    } else {
                        throw new TSUI.Exceptions.ArgumentException("obj", "TSUI.Components.List:constructor", new TSUI.Exceptions.IncorrectTypeException(typeof (obj), "number or array", "TSUI.Components.List:constructor"));
                    }
                } else {
                    this.items = [];
                }
            }
            /** Adds the specified object to the end of the list.
            @param object The object to be added to the list.
            */
            List.prototype.Add = function (object) {
                this.items.push(object);
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Add, new List([object])));
            };

            /** Adds the specified list of objects to the end of the list.
            @param objects The list of objects to be added.
            */
            List.prototype.AddRange = function (objects) {
                this.items.push(objects.ToArray());
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Add, objects));
            };

            /** Clears the list of all objects. */
            List.prototype.Clear = function () {
                var _thisClone = this.Clone();
                this.items = [];
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Remove, _thisClone));
            };

            /** Creates a shallow clone of the list. Note: Reference-type objects are not deep cloned.
            @returns the new (clone) list.
            */
            List.prototype.Clone = function () {
                return new List(this.items.slice(0));
            };

            /** Concatenates two lists. Does not modify either original list.
            @param other The list to be concatenated with.
            @returns a list containing this list followed by the other list.
            */
            List.prototype.Concat = function (other) {
                var NewList = new List(this.Count() + other.Count());
                NewList.AddRange(this);
                NewList.AddRange(other);
                return NewList;
            };

            /** Determins whether the object is contained within the list.
            @param object The object to be searched for.
            @returns true if the object is contained within the list, otherwise false.
            */
            List.prototype.Contains = function (object) {
                return this.IndexOf(object) > -1;
            };

            /** Copies the specified number of items into another list, starting at the specified index.
            @param dest The list to be copied into.
            @param offset OPTIONAL The index at which to start copying. If unspecified, starts from index 0.
            @param count OPTIONAL The number of items to be copied. If unspecified, uses full length of list.
            */
            List.prototype.CopyTo = function (dest, offset, count) {
                if (typeof offset === "undefined") { offset = 0; }
                if (typeof count === "undefined") { count = this.Count(); }
                dest.AddRange(this.Range(offset, count));
            };

            /** @returns the number of items in the list (the length) */
            List.prototype.Count = function () {
                return this.items.length;
            };

            /** @returns the element at the specified index or null if out of range.
            @param index The index of the element to get.
            */
            List.prototype.ElementAt = function (index) {
                if (index > -1 && index < this.Count()) {
                    return this.items[index];
                }
                return null;
            };

            /** @returns whether this list is equal to the specified object.
            @param object The object to test for equality.
            */
            List.prototype.Equals = function (object) {
                return this === object;
            };

            /** @returns the index of the specified object or -1 if not found.
            @param object The object to be searched for.
            */
            List.prototype.IndexOf = function (object) {
                return this.items.indexOf(object);
            };

            /** Inserts the specified object into the list at the specified index.
            @param object The object to be inserted.
            @param index The index at which to insert the object.
            */
            List.prototype.Insert = function (object, index) {
                this.items.splice(index, 0, object);
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Add, new List([object])));
            };

            /** Inserts a list of objects at the specified index - expands the list at that index. Does not overwrite existing items.
            @param objects The list of objects to be inserted.
            @param index The index at which to start inserting.
            */
            List.prototype.InsertRange = function (objects, index) {
                this.items.splice(index, 0, []);
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Add, new List(objects)));
            };

            /** @returns a list containing the specified range of objects from the list.
            @param index The index to start the range.
            @param count OPTIONAL The number of items to take. If unspecified, takes from index to the end of the list.
            */
            List.prototype.Range = function (index, count) {
                if (typeof count === "undefined") { count = this.Count() - index; }
                var max = Math.min(index + count, this.Count());
                return new List(this.items.slice(index, max));
            };

            /** Removes the specified object from the list.
            @param object The object to be removed.
            @param event Specifies whether to fire the OnModified event or not. Default: true.
            */
            List.prototype.Remove = function (object, event) {
                if (typeof event === "undefined") { event = true; }
                var index = this.IndexOf(object);
                if (index > -1) {
                    this.items.splice(index, 1);
                    if (event) {
                        this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Remove, new List([object])));
                    }
                }
            };

            /** Removes the specified list of objects from the list. Only fires one modified event.
            @param objects The list of objects to be removed.
            */
            List.prototype.RemoveAll = function (objects) {
                for (var i = 0; i < objects.Count(); i++) {
                    this.Remove(objects.ElementAt(i), false);
                }
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Remove, objects));
            };

            /** Removes the element at the specified index.
            @param index The index of the object to be removed.
            @returns the object which has been removed.
            */
            List.prototype.RemoveAt = function (index) {
                var x = this.items.splice(index, 1)[0];
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Remove, new List([x])));
                return x;
            };

            /** Removes the specified range of objects from the list.
            @param index The index at which to start removing.
            @param count The number of objects to remove.
            @returns a list containing the removed objects.
            */
            List.prototype.RemoveRange = function (index, count) {
                count = Math.min(count, this.Count());
                var ReturnList = new List(this.items.splice(index, count));
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Remove, ReturnList));
                return ReturnList;
            };

            /** Reverses the list of objects. */
            List.prototype.Reverse = function () {
                this.items = this.items.reverse();
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Reorder, this));
            };

            /** Sorts the list of objects using a ToStringComparer or the specified comparer.
            @param comparer OPTIONAL The comparer to use while sorting.
            */
            List.prototype.Sort = function (comparer) {
                if (typeof comparer === "undefined") { comparer = new Collections.ToStringComparer(); }
                this.items = this.items.sort(comparer.Compare);
                this.OnModified.Invoke(new TSUI.Events.CollectionModifiedEventArgs(this, TSUI.Events.CollectionModifications.Reorder, this));
            };

            /** Converts the list to a basic array.
            @returns a clone of the underlying array.
            */
            List.prototype.ToArray = function () {
                return this.items.slice(0);
            };
            return List;
        })();
        Collections.List = List;
    })(TSUI.Collections || (TSUI.Collections = {}));
    var Collections = TSUI.Collections;
})(TSUI || (TSUI = {}));

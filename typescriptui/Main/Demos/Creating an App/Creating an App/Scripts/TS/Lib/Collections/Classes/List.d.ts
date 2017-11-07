/// <reference path="ToStringComparer.d.ts" />
/// <reference path="../../Exceptions/ExceptionsRefs.d.ts" />
/// <reference path="../../Utils.d.ts" />
/// <reference path="../Interfaces/IList.d.ts" />
declare module TSUI.Collections {
    class List<T> implements Collections.IList<any> {
        private items;
        public OnModified: TSUI.Events.CollectionModifiedEvent<T>;
        constructor(obj?: any);
        public Add(object: T): void;
        public AddRange(objects: Collections.IList<T>): void;
        public Clear(): void;
        public Clone(): List<T>;
        public Concat(other: Collections.IList<T>): List<T>;
        public Contains(object: T): boolean;
        public CopyTo(dest: Collections.IList<T>, offset?: number, count?: number): void;
        public Count(): number;
        public ElementAt(index: number): T;
        public Equals(object: any): boolean;
        public IndexOf(object: T): number;
        public Insert(object: T, index: number): void;
        public InsertRange(objects: Collections.IList<T>, index: number): void;
        public Range(index: number, count?: number): List<T>;
        public Remove(object: T, event?: boolean): void;
        public RemoveAll(objects: Collections.IList<T>): void;
        public RemoveAt(index: number): T;
        public RemoveRange(index: number, count: number): List<T>;
        public Reverse(): void;
        public Sort(comparer?: Collections.IComparer): void;
        public ToArray(): T[];
    }
}

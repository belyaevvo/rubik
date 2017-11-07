/// <reference path="../../Collections/Interfaces/IComparer.d.ts" />
declare module TSUI.Collections {
    /** A comparer which compares the results of calling ToString on the specified objects.*/
    class ToStringComparer implements Collections.IComparer {
        /** Compares two objects by comparing the result of calling ToString on them.
        @param x The first object to be compared
        @param y The second object to be compared
        @returns the result of the comparison. -1 if x < y; 0 if x === y; 1 if x > y;
        */
        public Compare(x: any, y: any): number;
    }
}

/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IComparer.d.ts" />

module Rubik.Collections
{
    /** A comparer which compares the results of calling ToString on the specified objects.*/
    export class ToStringComparer implements IComparer
    {
        /** Compares two objects by comparing the result of calling ToString on them.
            @param x The first object to be compared
            @param y The second object to be compared
            @returns the result of the comparison. -1 if x < y; 0 if x === y; 1 if x > y;
        */
        Compare(x: any, y: any): number
        {
            return x.toString().localCompare(y.toString());
        }
    }
}
/*
Copyright � Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

declare module TSUI.Collections
{
    /** Definition for a Comparer - enables sorting of lists */
    export interface IComparer
    {
        /** Compares two objects 
            @param x The first object to be compared
            @param y The second object to be compared
            @returns the result of the comparison. -1 if x < y; 0 if x === y; 1 if x > y;
        */
        Compare(x: any, y: any): number;
    }
}
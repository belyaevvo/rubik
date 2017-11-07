/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Aug 3 12:10 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 3/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Collections/Classes/List.ts" />

declare module TSUI.Data
{
    /** Defines the structure for DataAccessInfo which is used to specify how to access a particular data source for particular bits of data. */
    export interface IAccessInfo
    {
        /** The URL to the data source. */
        URL: string;
        /** The list of parameters (including paramname=value) */
        Params: Collections.IList<string>;
    }
}
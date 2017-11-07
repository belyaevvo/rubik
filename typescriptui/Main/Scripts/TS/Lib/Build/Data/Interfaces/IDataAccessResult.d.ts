/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Aug 3 12:35 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 3/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Enums/DataAccessStatuses.d.ts" />

declare module TSUI.Data
{
    /** Defines the structure for the result of a data access request. Contains the Status of the request and any data returned. 
        T: The type of data (the type of the Result property)
    */
    export interface IDataAccessResult<T>
    {
        /** The most recent status of the request. */
        Status: DataAccessStatuses;
        /** The result data of the request. */
        Result: T;
    }
}
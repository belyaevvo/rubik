/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Aug 3 12:35 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 25/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="DataAccessStatuses.ts" />
/// <reference path="IDataAccessResult.d.ts" />

module Rubik.Data
{
    /** Defines the structure for the result of a data access request. Contains the Status of the request and any data returned. 
        T: The type of data (the type of the Result property)
    */
    export class DataAccessResult<T> implements IDataAccessResult<T> 
    {
        /** The most recent status of the request. */
        Status: DataAccessStatuses;
        /** The result data of the request. */
        Result: T;

        /** Creates a new instance of DataAccessResult
            @param status The most recent status of the request.
            @param result The result data of the request. 
            @returns A new DataAccessResult instance.
        */
        constructor(status: DataAccessStatuses, result: T)
        {
            this.Status = status;
            this.Result = result;
        }
    }
}
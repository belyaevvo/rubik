/// <reference path="../Enums/DataAccessStatuses.d.ts" />
/// <reference path="../../Data/Interfaces/IDataAccessResult.d.ts" />
declare module TSUI.Data {
    /** Defines the structure for the result of a data access request. Contains the Status of the request and any data returned.
    T: The type of data (the type of the Result property)
    */
    class DataAccessResult<T> implements Data.IDataAccessResult<T> {
        /** The most recent status of the request. */
        public Status: Data.DataAccessStatuses;
        /** The result data of the request. */
        public Result: T;
        /** Creates a new instance of DataAccessResult
        @param status The most recent status of the request.
        @param result The result data of the request.
        @returns A new DataAccessResult instance.
        */
        constructor(status: Data.DataAccessStatuses, result: T);
    }
}

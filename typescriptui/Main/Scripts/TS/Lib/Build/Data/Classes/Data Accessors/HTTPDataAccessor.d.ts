/// <reference path="../DataAccessor.d.ts" />
/// <reference path="../../../../../Definitions/jquery.d.ts" />
declare module TSUI.Data {
    /** A basic data accessor which can send HTTP GET/POST requests for pul/push. Data accessors push or pull data to/from a data source such as a page on a web server. */
    class HTTPDataAccessor extends Data.DataAccessor<string> {
        /** Creates a new DataAccessor. */
        constructor();
        /** Creates a new DataAccessor with specified BaseAccessInfo. */
        constructor(baseAccessInfo: Data.IAccessInfo);
        /** HTTP request implementation of PushData.
        @param data The data to push to the server.
        @param accessInfo The AccessInfo to use for the data source.
        @returns The result of the request. Will return an initially empty result with status Pending.
        */
        public PushData(data: string, accessInfo?: Data.IAccessInfo): Data.IDataAccessResult<string>;
        /** HTTP request implementation of PullData.
        @param accessInfo The AccessInfo to use for the data source.
        @returns The status of the request. Will return an initially empty result with status Pending.
        */
        public PullData(accessInfo?: Data.IAccessInfo): Data.IDataAccessResult<string>;
        /** Builds the full HTTP requestable URL from the access info.
        @param accessInfo The access info to build the URL for.
        @returns The URL
        */
        public BuildFullURL(accessInfo: Data.IAccessInfo): string;
    }
}

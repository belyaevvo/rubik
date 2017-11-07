/// <reference path="../../Events/Classes/DataPulledEvent.d.ts" />
/// <reference path="../../Data/Interfaces/IDataAccessResult.d.ts" />
/// <reference path="../Enums/DataAccessStatuses.d.ts" />
/// <reference path="../../Events/Classes/Events.d.ts" />
/// <reference path="../../Data/Interfaces/IAccessInfo.d.ts" />
/// <reference path="../../Data/Interfaces/IDataAccessor.d.ts" />
/// <reference path="DataAccessResult.d.ts" />
declare module TSUI.Data {
    /** Defines the structure for data accessors. Data accessors push or pull data to/from a data source such as a page on a web server.
    T: Specifies the type of the data which will be sent to/from the server.
    */
    class DataAccessor<T> implements Data.IDataAccessor<T> {
        /** The normal access info to use in PushData and PullData when no alternative info is supplied. Use this to set up a data accessor for repeated access to the same data source. */
        public BaseAccessInfo: Data.IAccessInfo;
        /** Fired when data is pushed to the server (or when the data push request fails).
        Check the Status property of the event.
        */
        public OnDataPushed: TSUI.Events.DataPushedEvent<T>;
        /** Fired when data is pulled from the server (or when the data pull request fails).
        Check the Status property of the event.
        */
        public OnDataPulled: TSUI.Events.DataPulledEvent<T>;
        /** Creates a new DataAccessor. */
        constructor();
        /** Creates a new DataAccessor with specified BaseAccessInfo. */
        constructor(baseAccessInfo: Data.IAccessInfo);
        /** Pushes data to the data source (using the BaseAccessInfo property for data source).
        Note: This should be an aynschronous method.
        Note: This implementation is empty and will always return an error.
        @param data The data to push to the server.
        @returns The status of the request. Implementations of this which are asynchronous should return an empty result with status Pending.
        */
        public PushData(data: T): Data.IDataAccessResult<T>;
        /** Pushes data to the data source using the specified AccessInfo for the data source.
        Note: This should be an aynschronous method.
        Note: This implementation is empty and will always return an error.
        @param data The data to push to the server.
        @param accessInfo The AccessInfo to use for the data source.
        @returns The result of the request. Implementations of this which are asynchronous should return an empty result with status Pending.
        */
        public PushData(data: T, accessInfo: Data.IAccessInfo): Data.IDataAccessResult<T>;
        /** Pulls data from the data source (using the BaseAccessInfo property for data source).
        Note: This should be an aynschronous method.
        Note: This implementation is empty and will always return an error.
        @returns The status of the request. Implementations of this which are asynchronous should return empty result with status Pending.
        */
        public PullData(): Data.IDataAccessResult<T>;
        /** Pulls data from the data source using the specified AccessInfo for the data source.
        Note: This should be an aynschronous method.
        Note: This implementation is empty and will always return an error.
        @param accessInfo The AccessInfo to use for the data source.
        @returns The status of the request. Implementations of this which are asynchronous should return empty result with status Pending.
        */
        public PullData(accessInfo: Data.IAccessInfo): Data.IDataAccessResult<T>;
    }
}

/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: 25 Aug 19:32 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 25/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Events/Classes/DataPulledEvent.ts" />
/// <reference path="../Interfaces/IDataAccessResult.d.ts" />
/// <reference path="../Enums/DataAccessStatuses.ts" />
/// <reference path="../../Events/Classes/Events.ts" />
/// <reference path="../Interfaces/IAccessInfo.d.ts" />
/// <reference path="../Interfaces/IDataAccessor.d.ts" />
/// <reference path="DataAccessResult.ts" />

module TSUI.Data
{
    /** Defines the structure for data accessors. Data accessors push or pull data to/from a data source such as a page on a web server.
        T: Specifies the type of the data which will be sent to/from the server.
    */
    export class DataAccessor<T> implements IDataAccessor<T>
    {
        /** The normal access info to use in PushData and PullData when no alternative info is supplied. Use this to set up a data accessor for repeated access to the same data source. */
        public BaseAccessInfo: IAccessInfo = null;

        /** Fired when data is pushed to the server (or when the data push request fails). 
            Check the Status property of the event. 
        */
        public OnDataPushed: Events.DataPushedEvent<T> = new Events.DataPushedEvent<T>();
        /** Fired when data is pulled from the server (or when the data pull request fails). 
            Check the Status property of the event. 
        */
        public OnDataPulled: Events.DataPulledEvent<T> = new Events.DataPulledEvent<T>();

        /** Creates a new DataAccessor. */
        constructor();
        /** Creates a new DataAccessor with specified BaseAccessInfo. */
        constructor(baseAccessInfo: IAccessInfo)

        constructor(baseAccessInfo: IAccessInfo = null)
        {
            this.BaseAccessInfo = baseAccessInfo;
        }

        /** Pushes data to the data source (using the BaseAccessInfo property for data source). 
            Note: This should be an aynschronous method.
            Note: This implementation is empty and will always return an error.
            @param data The data to push to the server.    
            @returns The status of the request. Implementations of this which are asynchronous should return an empty result with status Pending. 
        */
        public PushData(data: T): IDataAccessResult<T>;
        /** Pushes data to the data source using the specified AccessInfo for the data source. 
            Note: This should be an aynschronous method.
            Note: This implementation is empty and will always return an error.
            @param data The data to push to the server. 
            @param accessInfo The AccessInfo to use for the data source.   
            @returns The result of the request. Implementations of this which are asynchronous should return an empty result with status Pending. 
        */
        public PushData(data: T, accessInfo: IAccessInfo): IDataAccessResult<T>;
        
        /** Empty implementation of PushData. Always returns an error result.
            @param data The data to push to the server. 
            @param accessInfo The AccessInfo to use for the data source.   
            @returns The result of the request. Implementations of this which are asynchronous should return an empty result with status Pending. 
        */
        PushData(data: T, accessInfo?: IAccessInfo): IDataAccessResult<T>
        { 
            return new DataAccessResult<T>(DataAccessStatuses.Error, null);
        }

        /** Pulls data from the data source (using the BaseAccessInfo property for data source). 
            Note: This should be an aynschronous method.
            Note: This implementation is empty and will always return an error.
            @returns The status of the request. Implementations of this which are asynchronous should return empty result with status Pending. 
        */
        public PullData(): IDataAccessResult<T>;
        /** Pulls data from the data source using the specified AccessInfo for the data source. 
            Note: This should be an aynschronous method.
            Note: This implementation is empty and will always return an error.
            @param accessInfo The AccessInfo to use for the data source.
            @returns The status of the request. Implementations of this which are asynchronous should return empty result with status Pending. 
        */
        public PullData(accessInfo: IAccessInfo): IDataAccessResult<T>;

        /** Empty implementation of PullData. Always returns an error result.
            @param accessInfo The AccessInfo to use for the data source.
            @returns The status of the request. Implementations of this which are asynchronous should return empty result with status Pending. 
        */
        PullData(accessInfo?: IAccessInfo): IDataAccessResult<T>
        {
            return new DataAccessResult<T>(DataAccessStatuses.Error, null);
        }
    }
}
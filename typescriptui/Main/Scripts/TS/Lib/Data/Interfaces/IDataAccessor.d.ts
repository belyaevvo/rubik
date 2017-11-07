/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 12:07 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.
 - 3/Aug/13 : Fleshed out the interface to fill the specification.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Events/Classes/DataPulledEvent.ts" />
/// <reference path="IDataAccessResult.d.ts" />
/// <reference path="../Enums/DataAccessStatuses.ts" />
/// <reference path="../../Events/Classes/Events.ts" />
/// <reference path="IAccessInfo.d.ts" />

declare module TSUI.Data
{
    /** Defines the structure for data accessors. Data accessors push or pull data to/from a data source such as a page on a web server.
        T: Specifies the type of the data which will be sent to/from the server.
    */
    export interface IDataAccessor<T>
    {
        /** The normal access info to use in PushData and PullData when no alternative info is supplied. Use this to set up a data accessor for repeated access to the same data source. */
        BaseAccessInfo: IAccessInfo;

        /** Fired when data is pushed to the server (or when the data push request fails). 
            Check the Status property of the event. 
        */
        OnDataPushed: Events.DataPushedEvent<T>;
        /** Fired when data is pulled from the server (or when the data pull request fails). 
            Check the Status property of the event. 
        */
        OnDataPulled: Events.DataPulledEvent<T>;

        /** Pushes data to the data source (using the BaseAccessInfo property for data source). 
            Note: This should be an aynschronous method. 
            @param data The data to push to the server.    
            @returns The status of the request. Implementations of this which are asynchronous should return an empty result with status Pending. 
        */
        PushData(data: T): IDataAccessResult<T>;
        /** Pushes data to the data source using the specified AccessInfo for the data source. 
            Note: This should be an aynschronous method.
            @param data The data to push to the server. 
            @param accessInfo The AccessInfo to use for the data source.   
            @returns The result of the request. Implementations of this which are asynchronous should return an empty result with status Pending. 
        */
        PushData(data: T, accessInfo?: IAccessInfo): IDataAccessResult<T>;
        /** Pulls data from the data source (using the BaseAccessInfo property for data source). 
            Note: This should be an aynschronous method.
            @returns The status of the request. Implementations of this which are asynchronous should return empty result with status Pending. 
        */
        PullData(): IDataAccessResult<T>;
        /** Pulls data from the data source using the specified AccessInfo for the data source. 
            Note: This should be an aynschronous method.
            @param accessInfo The AccessInfo to use for the data source.   
            @returns The status of the request. Implementations of this which are asynchronous should return empty result with status Pending. 
        */
        PullData(accessInfo?: IAccessInfo): IDataAccessResult<T>;
    }
}
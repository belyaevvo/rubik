var TSUI;
(function (TSUI) {
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
    (function (Data) {
        /** Defines the structure for data accessors. Data accessors push or pull data to/from a data source such as a page on a web server.
        T: Specifies the type of the data which will be sent to/from the server.
        */
        var DataAccessor = (function () {
            function DataAccessor(baseAccessInfo) {
                if (typeof baseAccessInfo === "undefined") { baseAccessInfo = null; }
                /** The normal access info to use in PushData and PullData when no alternative info is supplied. Use this to set up a data accessor for repeated access to the same data source. */
                this.BaseAccessInfo = null;
                /** Fired when data is pushed to the server (or when the data push request fails).
                Check the Status property of the event.
                */
                this.OnDataPushed = new TSUI.Events.DataPushedEvent();
                /** Fired when data is pulled from the server (or when the data pull request fails).
                Check the Status property of the event.
                */
                this.OnDataPulled = new TSUI.Events.DataPulledEvent();
                this.BaseAccessInfo = baseAccessInfo;
            }
            /** Empty implementation of PushData. Always returns an error result.
            @param data The data to push to the server.
            @param accessInfo The AccessInfo to use for the data source.
            @returns The result of the request. Implementations of this which are asynchronous should return an empty result with status Pending.
            */
            DataAccessor.prototype.PushData = function (data, accessInfo) {
                return new Data.DataAccessResult(Data.DataAccessStatuses.Error, null);
            };

            /** Empty implementation of PullData. Always returns an error result.
            @param accessInfo The AccessInfo to use for the data source.
            @returns The status of the request. Implementations of this which are asynchronous should return empty result with status Pending.
            */
            DataAccessor.prototype.PullData = function (accessInfo) {
                return new Data.DataAccessResult(Data.DataAccessStatuses.Error, null);
            };
            return DataAccessor;
        })();
        Data.DataAccessor = DataAccessor;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

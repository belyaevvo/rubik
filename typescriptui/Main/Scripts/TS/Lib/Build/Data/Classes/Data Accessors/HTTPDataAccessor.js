var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
    /// <reference path="../DataAccessor.ts" />
    /// <reference path="../../../../Definitions/jquery.d.ts" />
    (function (Data) {
        /** A basic data accessor which can send HTTP GET/POST requests for pul/push. Data accessors push or pull data to/from a data source such as a page on a web server. */
        var HTTPDataAccessor = (function (_super) {
            __extends(HTTPDataAccessor, _super);
            function HTTPDataAccessor(baseAccessInfo) {
                if (typeof baseAccessInfo === "undefined") { baseAccessInfo = null; }
                _super.call(this, baseAccessInfo);
            }
            /** HTTP request implementation of PushData.
            @param data The data to push to the server.
            @param accessInfo The AccessInfo to use for the data source.
            @returns The result of the request. Will return an initially empty result with status Pending.
            */
            HTTPDataAccessor.prototype.PushData = function (data, accessInfo) {
                var _this = this;
                var result = new Data.DataAccessResult(Data.DataAccessStatuses.Pending, null);

                if (accessInfo === undefined) {
                    accessInfo = this.BaseAccessInfo;
                }

                var url = this.BuildFullURL(accessInfo);

                var request = $.post(url, data, function (resultData, status, xhr) {
                    //Success
                    result.Status = Data.DataAccessStatuses.Complete;
                    result.Result = resultData;

                    _this.OnDataPushed.Invoke(new TSUI.Events.DataPushedEventArgs(_this, result));
                }, "text");

                request.fail(function (xhr, status, error) {
                    //Fail
                    result.Status = Data.DataAccessStatuses.Error | Data.DataAccessStatuses.Failed;
                    result.Result = error;

                    _this.OnDataPushed.Invoke(new TSUI.Events.DataPushedEventArgs(_this, result));
                });

                return result;
            };

            /** HTTP request implementation of PullData.
            @param accessInfo The AccessInfo to use for the data source.
            @returns The status of the request. Will return an initially empty result with status Pending.
            */
            HTTPDataAccessor.prototype.PullData = function (accessInfo) {
                var _this = this;
                var result = new Data.DataAccessResult(Data.DataAccessStatuses.Pending, null);

                if (accessInfo === undefined) {
                    accessInfo = this.BaseAccessInfo;
                }

                var url = this.BuildFullURL(accessInfo);

                var request = $.get(url, "", function (resultData, status, xhr) {
                    //Success
                    result.Status = Data.DataAccessStatuses.Complete;
                    result.Result = resultData;

                    _this.OnDataPulled.Invoke(new TSUI.Events.DataPushedEventArgs(_this, result));
                }, "text");

                request.fail(function (xhr, status, error) {
                    //Fail
                    result.Status = Data.DataAccessStatuses.Error | Data.DataAccessStatuses.Failed;
                    result.Result = error;

                    _this.OnDataPulled.Invoke(new TSUI.Events.DataPushedEventArgs(_this, result));
                });

                return result;
            };

            /** Builds the full HTTP requestable URL from the access info.
            @param accessInfo The access info to build the URL for.
            @returns The URL
            */
            HTTPDataAccessor.prototype.BuildFullURL = function (accessInfo) {
                var result = "";

                result = accessInfo.URL;
                result += "?";
                var count = accessInfo.Params.Count();
                for (var i = 0; i < count; i++) {
                    result += accessInfo.Params.ElementAt(i);
                    if (i < count - 1) {
                        result += "&";
                    }
                }

                return result;
            };
            return HTTPDataAccessor;
        })(Data.DataAccessor);
        Data.HTTPDataAccessor = HTTPDataAccessor;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

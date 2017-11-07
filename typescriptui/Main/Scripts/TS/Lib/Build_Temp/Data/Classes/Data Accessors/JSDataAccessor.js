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
    Date: 1 Sep 23:16 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 1/Sep/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../DataAccessor.ts" />
    /// <reference path="../../../../Definitions/jquery.d.ts" />
    (function (Data) {
        /** A basic data accessor which can use a JS global variable as its source for pull/push. Can also use a property method e.g. function(value: Val_Type): Val_Type
        Data accessors push or pull data to/from a data source such as a page on a web server. */
        var JSDataAccessor = (function (_super) {
            __extends(JSDataAccessor, _super);
            function JSDataAccessor(aContext, baseAccessInfo) {
                if (typeof baseAccessInfo === "undefined") { baseAccessInfo = null; }
                _super.call(this, baseAccessInfo);
                /** The context object to use when accessing the object. */
                this.Context = window;

                this.Context = aContext;
            }
            /** HTTP request implementation of PushData.
            @param data The data to push to the source variable.
            @param accessInfo The AccessInfo to use for the data source. See constructor for more info on how to set this.
            @returns Will return an initially empty result with status Error and no data or Complete and the data.
            */
            JSDataAccessor.prototype.PushData = function (data, accessInfo) {
                var result = new Data.DataAccessResult(Data.DataAccessStatuses.Pending, null);

                if (accessInfo === undefined) {
                    accessInfo = this.BaseAccessInfo;
                }

                var resData = this.setVal(accessInfo, data);
                if (resData !== null) {
                    result.Status = Data.DataAccessStatuses.Complete;
                } else {
                    result.Status = Data.DataAccessStatuses.Error;
                }
                result.Result = resData;

                this.OnDataPushed.Invoke(new TSUI.Events.DataPushedEventArgs(this, result));

                return result;
            };

            /** HTTP request implementation of PullData.
            @param accessInfo The AccessInfo to use for the data source.
            @returns Will return an initially empty result with status Error and no data or Complete and the data.
            */
            JSDataAccessor.prototype.PullData = function (accessInfo) {
                var result = new Data.DataAccessResult(Data.DataAccessStatuses.Error, null);

                if (accessInfo === undefined) {
                    accessInfo = this.BaseAccessInfo;
                }

                var resData = this.getVal(accessInfo);
                if (resData !== null) {
                    result.Status = Data.DataAccessStatuses.Complete;
                } else {
                    result.Status = Data.DataAccessStatuses.Error;
                }
                result.Result = resData;

                this.OnDataPulled.Invoke(new TSUI.Events.DataPulledEventArgs(this, result));

                return result;
            };

            JSDataAccessor.prototype.getVal = function (accessInfo) {
                var result = null;

                if (this.Context[accessInfo.URL] !== undefined) {
                    var obj = this.Context[accessInfo.URL];

                    var len = accessInfo.Params.Count();
                    for (var i = 0; i < len; i++) {
                        obj = obj[accessInfo.Params.ElementAt(i)];
                    }

                    if (TSUI.isFunction(obj)) {
                        result = obj.call(this.Context);
                    } else {
                        result = obj;
                    }
                }

                return result;
            };
            JSDataAccessor.prototype.setVal = function (accessInfo, data) {
                var result = null;

                if (this.Context[accessInfo.URL] !== undefined) {
                    var obj = this.Context[accessInfo.URL];
                    var lastParent = null;

                    var len = accessInfo.Params.Count();
                    for (var i = 0; i < len; i++) {
                        lastParent = obj;
                        obj = obj[accessInfo.Params.ElementAt(i)];
                    }

                    if (TSUI.isFunction(obj)) {
                        result = obj.call(this.Context, data);
                    } else {
                        if (accessInfo.Params.Count() === 0) {
                            result = this.Context[accessInfo.URL] = obj = data;
                        } else {
                            lastParent[accessInfo.Params.Count() - 1] = data;
                            result = obj = data;
                        }
                    }
                }

                return result;
            };
            return JSDataAccessor;
        })(Data.DataAccessor);
        Data.JSDataAccessor = JSDataAccessor;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

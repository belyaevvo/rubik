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
    Date: Aug 3 12:51 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 3/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../DataAdapter.ts" />
    (function (Data) {
        /** String Data Adapter is a string pass-through adapter - it doesn't actually do anything. Use this as a fill-in adapter.*/
        var StringDataAdapter = (function (_super) {
            __extends(StringDataAdapter, _super);
            function StringDataAdapter() {
                _super.apply(this, arguments);
            }
            /** Converts raw data to JavaScript object data.
            Note: This implementation always returns the input unless the input is "undefined" or "null" in which case it returns undefined or null respectively.
            @param input The raw string data.
            @returns The processed string data or undefined or null.
            */
            StringDataAdapter.prototype.I2O = function (input) {
                return input;
            };

            /** Converts JavaScript object data to raw data.
            Note: This implementation always returns the output unless the output is undefined or null in which case it returns "undefined" or "null" respectively.
            @param input The processed string data.
            @returns The raw string data.
            */
            StringDataAdapter.prototype.O2I = function (output) {
                return output;
            };
            return StringDataAdapter;
        })(Data.DataAdapter);
        Data.StringDataAdapter = StringDataAdapter;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

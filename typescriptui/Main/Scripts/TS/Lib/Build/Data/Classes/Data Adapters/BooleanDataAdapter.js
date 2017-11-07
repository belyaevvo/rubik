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
        /** Boolean Data Adapter converts a raw input string to a boolean or vice-versa.*/
        var BooleanDataAdapter = (function (_super) {
            __extends(BooleanDataAdapter, _super);
            function BooleanDataAdapter() {
                _super.apply(this, arguments);
            }
            /** Converts raw data to JavaScript object data.
            Note: This implementation does not check for a valid boolean with the exception that it does handle null and undefined.
            Note: This implementation tests for equality with "true", "1", "yes", "on" (case-insensitive).
            @param input The raw string data.
            @returns The boolean data or null or undefined.
            */
            BooleanDataAdapter.prototype.I2O = function (input) {
                if (input === "null" || input === null) {
                    return null;
                } else if (input === "undefined" || input === undefined) {
                    return undefined;
                }

                var testInput = input.toLowerCase();
                return testInput === "true" || testInput === "1" || testInput === "yes" || testInput === "on";
            };

            /** Converts JavaScript object data to raw data.
            Note: This implementation does handle null and undefined.
            @param input The boolean data.
            @returns The raw string data.
            */
            BooleanDataAdapter.prototype.O2I = function (output) {
                if (output === null) {
                    return "null";
                } else if (output === undefined) {
                    return "undefined";
                }

                return output ? "true" : "false";
            };
            return BooleanDataAdapter;
        })(Data.DataAdapter);
        Data.BooleanDataAdapter = BooleanDataAdapter;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

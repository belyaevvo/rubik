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
        /** Number Data Adapter converts a raw input string to a number or vice-versa.*/
        var NumberDataAdapter = (function (_super) {
            __extends(NumberDataAdapter, _super);
            function NumberDataAdapter() {
                _super.apply(this, arguments);
            }
            /** Converts raw data to JavaScript object data.
            Note: This implementation does not check for a valid number with the exception that it does handle NaN, null and undefined.
            Note: This implementation uses parseFloat.
            @param input The raw string data.
            @returns The (float) number data or null or undefined or NaN.
            */
            NumberDataAdapter.prototype.I2O = function (input) {
                if (input === "null" || input === null) {
                    return null;
                } else if (input === "undefined" || input === undefined) {
                    return undefined;
                } else if (input === "NaN") {
                    return NaN;
                }

                return parseFloat(input);
            };

            /** Converts JavaScript object data to raw data.
            Note: This implementation does handle NaN, null and undefined.
            Note: This implementation uses .toString() with radix: 10
            @param input The number data.
            @returns The raw string data.
            */
            NumberDataAdapter.prototype.O2I = function (output) {
                if (output === null) {
                    return "null";
                } else if (output === undefined) {
                    return "undefined";
                } else if (isNaN(output)) {
                    return "NaN";
                }

                return output.toString(10);
            };
            return NumberDataAdapter;
        })(Data.DataAdapter);
        Data.NumberDataAdapter = NumberDataAdapter;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

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
        /** JSON Data Adapter converts a raw input string to a JavaScript object or vice-versa. Use JSONDataAdapter to handle JSON-formatted arrays/objects.
        O: The output type of the adapter.
        */
        var JSONDataAdapter = (function (_super) {
            __extends(JSONDataAdapter, _super);
            function JSONDataAdapter() {
                _super.apply(this, arguments);
            }
            /** Converts raw data to JavaScript object data.
            Note: This implementation does handle null and undefined.
            Note: This implementation uses JSON.parse()
            @param input The raw JSON string.
            @returns The object data or null or undefined.
            */
            JSONDataAdapter.prototype.I2O = function (input) {
                if (input === "null" || input === null) {
                    return null;
                } else if (input === "undefined" || input === undefined) {
                    return undefined;
                }

                return JSON.parse(input);
            };

            /** Converts JavaScript object data to raw data.
            Note: This implementation does handle null and undefined.
            Note: This implementation uses JSON.stringify()
            @param input The object data.
            @returns The raw JSON string.
            */
            JSONDataAdapter.prototype.O2I = function (output) {
                if (output === null) {
                    return "null";
                } else if (output === undefined) {
                    return "undefined";
                }

                return JSON.stringify(output);
            };
            return JSONDataAdapter;
        })(Data.DataAdapter);
        Data.JSONDataAdapter = JSONDataAdapter;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

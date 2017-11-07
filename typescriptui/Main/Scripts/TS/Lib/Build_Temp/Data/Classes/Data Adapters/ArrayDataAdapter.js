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
        /** Array Data Adapter converts a raw input string to an array or vice-versa. Use JSONDataAdapter to handle JSON-formatted arrays/objects.
        O: The type of the items in the output array
        */
        var ArrayDataAdapter = (function (_super) {
            __extends(ArrayDataAdapter, _super);
            /** Creates a new ArrayDataAdapter<O>
            @param ItemAdapter The data adapter to use for converting array item strings into actual item objects.
            @param Delimiter The delimiter to use for splitting the input string into seperate items. Default: ","
            */
            function ArrayDataAdapter(ItemAdapter, Delimiter) {
                if (typeof Delimiter === "undefined") { Delimiter = ","; }
                _super.call(this);
                this.ItemAdapter = ItemAdapter;
                this.Delimiter = Delimiter;
            }
            /** Converts raw data to JavaScript object data.
            Note: This implementation does not check for a valid array with the exception that it does handle null and undefined.
            Note: This implementation splits by the specified delimiter then uses the item adapter to convert each item individually.
            @param input The raw string data.
            @returns The array data or null or undefined.
            */
            ArrayDataAdapter.prototype.I2O = function (input) {
                if (input === "null" || input === null) {
                    return null;
                } else if (input === "undefined" || input === undefined) {
                    return undefined;
                }

                var items = input.split(this.Delimiter);
                var result = new Array(items.length);
                for (var i = 0; i < items.length; i++) {
                    result[i] = this.ItemAdapter.I2O(items[i]);
                }

                return result;
            };

            /** Converts JavaScript object data to raw data.
            Note: This implementation does handle null and undefined.
            @param input The array data.
            @returns The raw string.
            */
            ArrayDataAdapter.prototype.O2I = function (output) {
                if (output === null) {
                    return "null";
                } else if (output === undefined) {
                    return "undefined";
                }

                var result = "";
                for (var i = 0; i < output.length; i++) {
                    result += this.ItemAdapter.O2I(output[i]);
                    if (i < output.length - 1) {
                        result += this.Delimiter;
                    }
                }

                return result;
            };
            return ArrayDataAdapter;
        })(Data.DataAdapter);
        Data.ArrayDataAdapter = ArrayDataAdapter;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

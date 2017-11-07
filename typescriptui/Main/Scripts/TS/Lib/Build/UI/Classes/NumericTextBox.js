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
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="TextBox.ts" />
    /// <reference path="../Interfaces/INumericTextBox.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var NumericTextBox = (function (_super) {
            __extends(NumericTextBox, _super);
            function NumericTextBox() {
                _super.call(this);
                this._NumericPrevSeenValue = null;

                this._rootElement.addClass("Numeric");

                this.OnValueChange = new TSUI.Events.ValueChangeEvent();

                this._TextInput.attr("type", "numeric");
                this._TextInput.numeric({
                    decimal: ".",
                    negative: true,
                    decimalPlaces: 2
                });

                this.OnTextChange.Attach(new TSUI.Events.TextChangeEventHandler(this._This_OnTextChange_ValueChange, this));
            }
            NumericTextBox.prototype._This_OnTextChange_ValueChange = function (eventArgs) {
                var value = this.Value();
                if (this._NumericPrevSeenValue !== value) {
                    this._NumericPrevSeenValue = value;
                    this.OnValueChange.Invoke(new TSUI.Events.ValueChangeEventArgs(this));
                }
            };

            NumericTextBox.prototype.AllowNegatives = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._TextInput.numeric_AllowNegatives(value);
            };
            NumericTextBox.prototype.AllowDecimals = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._TextInput.numeric_DecimalSeparator(value) !== "";
            };

            NumericTextBox.prototype.DecimalPlaces = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._TextInput.numeric_DecimalPlaces(value);
            };
            NumericTextBox.prototype.DecimalSeparator = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._TextInput.numeric_DecimalSeparator(value);
            };

            NumericTextBox.prototype.Min = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._TextInput.numeric_Min(value);
            };
            NumericTextBox.prototype.Max = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._TextInput.numeric_Max(value);
            };

            NumericTextBox.prototype.Value = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    var dp = this.DecimalPlaces();
                    if (dp > -1) {
                        value = parseFloat(value.toFixed(dp));
                    }
                    var min = this.Min();
                    if (min !== null) {
                        value = Math.max(value, min);
                    }
                    var max = this.Max();
                    if (max !== null) {
                        value = Math.min(value, max);
                    }
                    this._TextInput.val(dp > -1 ? value.toFixed(dp) : value.toString());

                    if (this._NumericPrevSeenValue !== value) {
                        this._NumericPrevSeenValue = value;
                        this.OnValueChange.Invoke(new TSUI.Events.ValueChangeEventArgs(this));
                    }
                }
                var result = parseFloat(this._TextInput.val());
                if (isNaN(result)) {
                    result = 0;
                }
                return result;
            };
            return NumericTextBox;
        })(UI.TextBox);
        UI.NumericTextBox = NumericTextBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

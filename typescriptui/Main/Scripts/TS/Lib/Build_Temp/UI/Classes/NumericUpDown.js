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
    /// <reference path="NumericTextBox.ts" />
    /// <reference path="Button.ts" />
    /// <reference path="../Interfaces/INumericUpDown.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var NumericUpDown = (function (_super) {
            __extends(NumericUpDown, _super);
            function NumericUpDown() {
                _super.call(this);
                this._PrevSeenValue = null;
                this._Increment = 1;

                this._rootElement.addClass("NumericUpDown");

                this._UnderlyingTextBox = new UI.NumericTextBox();
                this._UnderlyingTextBox.OnFocus.Attach(new TSUI.Events.FocusEventHandler(this._UnderlyingControl_OnFocus, this));
                this._UnderlyingTextBox.OnBlur.Attach(new TSUI.Events.BlurEventHandler(this._UnderlyingControl_OnBlur, this));
                this.Children.Add(this._UnderlyingTextBox);

                this._UpButton = new UI.Button();
                this._UpButton.AddClass("Up");
                this._UpButton.Text("^");
                this._UpButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._UpButton_OnClick, this));
                this._UpButton.OnFocus.Attach(new TSUI.Events.FocusEventHandler(this._UnderlyingControl_OnFocus, this));
                this._UpButton.OnBlur.Attach(new TSUI.Events.BlurEventHandler(this._UnderlyingControl_OnBlur, this));
                this.Children.Add(this._UpButton);

                this._DownButton = new UI.Button();
                this._DownButton.AddClass("Down");
                this._DownButton.Text("^");
                this._DownButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._DownButton_OnClick, this));
                this._DownButton.OnFocus.Attach(new TSUI.Events.FocusEventHandler(this._UnderlyingControl_OnFocus, this));
                this._DownButton.OnBlur.Attach(new TSUI.Events.BlurEventHandler(this._UnderlyingControl_OnBlur, this));
                this.Children.Add(this._DownButton);

                this.OnKeyDown.Attach(new TSUI.Events.KeyDownEventHandler(this._This_OnKeyDown_IncrementHandler, this));
                this.OnKeyUp.Attach(new TSUI.Events.KeyUpEventHandler(this._This_OnKeyUp_IncrementHandler, this));

                this.OnValueChange = new TSUI.Events.ValueChangeEvent();

                this.Focusable(true);
            }
            NumericUpDown.prototype._UnderlyingControl_OnFocus = function (eventArgs) {
                this._OnFocus(eventArgs.jqEvent);
            };
            NumericUpDown.prototype._UnderlyingControl_OnBlur = function (eventArgs) {
                this._OnBlur(eventArgs.jqEvent);
            };

            NumericUpDown.prototype._This_OnKeyDown_IncrementHandler = function (eventArgs) {
                if (this.ActuallyEnabled()) {
                    if (eventArgs.jqEvent.keyCode === 38) {
                        this.Value(this.Value() + this._Increment);
                        TSUI.StopEvent(eventArgs.jqEvent);
                    } else if (eventArgs.jqEvent.keyCode === 40) {
                        this.Value(this.Value() - this._Increment);
                        TSUI.StopEvent(eventArgs.jqEvent);
                    }
                }
            };
            NumericUpDown.prototype._This_OnKeyUp_IncrementHandler = function (eventArgs) {
                var result = this.Value();
                if (this._PrevSeenValue !== result) {
                    this._PrevSeenValue = result;
                    this.OnValueChange.Invoke(new TSUI.Events.ValueChangeEventArgs(this));
                }
            };

            NumericUpDown.prototype._UpButton_OnClick = function (eventArgs) {
                this.Value(this.Value() + this._Increment);
            };
            NumericUpDown.prototype._DownButton_OnClick = function (eventArgs) {
                this.Value(this.Value() - this._Increment);
            };

            NumericUpDown.prototype.AllowNegatives = function (value) {
                return this._UnderlyingTextBox.AllowNegatives(value);
            };
            NumericUpDown.prototype.AllowDecimals = function (value) {
                return this._UnderlyingTextBox.AllowDecimals(value);
            };

            NumericUpDown.prototype.DecimalPlaces = function (value) {
                return this._UnderlyingTextBox.DecimalPlaces(value);
            };
            NumericUpDown.prototype.DecimalSeparator = function (value) {
                return this._UnderlyingTextBox.DecimalSeparator(value);
            };

            NumericUpDown.prototype.Min = function (value) {
                return this._UnderlyingTextBox.Min(value);
            };
            NumericUpDown.prototype.Max = function (value) {
                return this._UnderlyingTextBox.Max(value);
            };

            NumericUpDown.prototype.Increment = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Increment = value;
                }
                return this._Increment;
            };

            NumericUpDown.prototype.Value = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = this._UnderlyingTextBox.Value(value);
                if (value !== null) {
                    if (this._PrevSeenValue !== result) {
                        this._PrevSeenValue = result;
                        this.OnValueChange.Invoke(new TSUI.Events.ValueChangeEventArgs(this));
                    }
                }
                return result;
            };

            NumericUpDown.prototype._HandleFocusableSet = function (focusable) {
                this._rootElement.removeAttr("tabindex");
            };

            NumericUpDown.prototype.Focus = function () {
                this._UnderlyingTextBox.Focus();
            };
            NumericUpDown.prototype.Blur = function () {
                this._UnderlyingTextBox.Blur();
                this._UpButton.Blur();
                this._DownButton.Blur();
            };
            return NumericUpDown;
        })(UI.Control);
        UI.NumericUpDown = NumericUpDown;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

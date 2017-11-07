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
    /// <reference path="../Interfaces/ITextBox.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var TextBox = (function (_super) {
            __extends(TextBox, _super);
            function TextBox() {
                _super.call(this);
                this._PrevSeenValue = "";
                this._TabIndex = 0;

                this._rootElement.addClass("TextBox");

                this.OnTextChange = new TSUI.Events.TextChangeEvent();

                this._TextInput = $("<input type=\"text\" tabindex=\"" + this._TabIndex.toString() + "\"/>");

                this.Focusable(true);

                this.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._This_OnClick_FocusBugFix, this));
            }
            TextBox.prototype.TextInput = function () {
                return this._TextInput;
            };

            //Layout bug fix : Can't focus input elemnts when they are inside absolute elements.
            //Noticed using: FireFox and Opera
            //Example of issue: Focus not given on mouse click
            TextBox.prototype._This_OnClick_FocusBugFix = function (eventArgs) {
                if (this.ActuallyEnabled() && !this._TextInput.is(":focus")) {
                    this._TextInput.focus();
                }
            };

            TextBox.prototype._HandleFocusableSet = function (focusable) {
                this._rootElement.removeAttr("tabindex");

                if (focusable && !this.HasClass("Disabled")) {
                    this._TextInput.attr("tabindex", this._TabIndex.toString());

                    if (this._TextInput.is(":focus") && !this.HasClass("Focused")) {
                        this.Focus();
                    }
                } else {
                    this._TextInput.removeAttr("tabindex");
                }

                if (!this._Focusable && this._TextInput.is(":focus")) {
                    this.Blur();
                }
            };

            TextBox.prototype._TextInput_OnFocus = function (event) {
                if (this.ActuallyEnabled()) {
                    this._OnFocus(event);
                } else {
                    this._TextInput.blur();
                }
            };
            TextBox.prototype._TextInput_OnBlur = function (event) {
                TSUI.StopEvent(event);
                this._OnBlur(event);
            };
            TextBox.prototype._TextInput_OnChange = function (event) {
                if (this.ActuallyEnabled()) {
                    if (this._PrevSeenValue !== this.Text()) {
                        this._PrevSeenValue = this.Text();
                        this.OnTextChange.Invoke(new TSUI.Events.TextChangeEventArgs(this, event));
                    }
                } else if (event.keyCode !== 9 && event.keyCode !== 116) {
                    TSUI.StopEvent(event);
                }
            };

            TextBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._rootElement.append(_this._TextInput);

                    _this._TextInput.on("focus", function (event) {
                        _this._TextInput_OnFocus(event);
                    });
                    _this._TextInput.on("blur", function (event) {
                        _this._TextInput_OnBlur(event);
                    });
                    _this._TextInput.on("change, keyup", function (event) {
                        _this._TextInput_OnChange(event);
                    });

                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            TextBox.prototype.DestroyDOM = function () {
                this._TextInput.remove();

                _super.prototype.DestroyDOM.call(this);
            };

            TextBox.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._TextInput.val(value);

                    if (this._PrevSeenValue !== value) {
                        this._PrevSeenValue = value;
                        this.OnTextChange.Invoke(new TSUI.Events.TextChangeEventArgs(this, null));
                    }
                }
                return this._TextInput.val();
            };
            TextBox.prototype.Masked = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._TextInput.attr("type", value ? "password" : "text");
                }
                return this._TextInput.attr("type") === "password";
            };

            TextBox.prototype.MaxLength = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._TextInput.attr("maxlength", value.toString());
                }
                var retVal = parseInt(this._TextInput.attr("maxlength"), 10);
                if (isNaN(retVal)) {
                    retVal = -1;
                }
                return retVal;
            };

            TextBox.prototype.Enabled = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (!value && this.HasClass("Focused")) {
                        this.RemoveClass("Focused");
                        this._TextInput.blur();
                    } else if (this._TextInput.is(":focus") && !this.HasClass("Focused")) {
                        this.AddClass("Focused");
                    }
                }
                return _super.prototype.Enabled.call(this, value);
            };

            TextBox.prototype.Focus = function () {
                this._TextInput.focus();
            };
            TextBox.prototype.Blur = function () {
                this._TextInput.blur();
            };

            TextBox.prototype.TabIndex = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._TabIndex = value;
                    if (value === -2) {
                        this._TextInput.removeAttr("tabindex");
                    } else {
                        this._TextInput.attr("tabindex", value.toString());
                    }
                }
                var retVal = parseInt(this._TextInput.attr("tabindex"), 10);
                if (isNaN(retVal)) {
                    retVal = -2;
                }
                return retVal;
            };
            return TextBox;
        })(UI.Control);
        UI.TextBox = TextBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

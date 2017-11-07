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
    /// <reference path="Label.ts" />
    /// <reference path="ToggleIndicator.ts" />
    /// <reference path="../Interfaces/ICheckBox.d.ts" />
    /// <reference path="../Enums/TextAlignments.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var CheckBox = (function (_super) {
            __extends(CheckBox, _super);
            function CheckBox(checked) {
                if (typeof checked === "undefined") { checked = false; }
                _super.call(this);

                this._rootElement.addClass("CheckBox");

                this.OnCheckedChange = new TSUI.Events.CheckedChangeEvent();

                this.Focusable(true);

                this.MainIndicator = new UI.ToggleIndicatorBox();
                this.MainIndicator.RelativeLayoutOn();
                this.MainIndicator.Focusable(false);
                this.Children.Add(this.MainIndicator);

                this.TextLabel = new UI.Label();
                this.TextLabel.RelativeLayoutOn();
                this.Children.Add(this.TextLabel);

                this.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._This_OnClick, this));

                this.Checked(checked);
            }
            CheckBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this.TextAlign(_this.TextAlign());
                    if (onComplete) {
                        onComplete();
                    }
                });
            };

            CheckBox.prototype._This_OnClick = function (eventArgs) {
                if (this.ActuallyEnabled()) {
                    this.Checked(!this.Checked());
                }
            };

            CheckBox.prototype.TextAlign = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    var oldVal = this._TextAlign;
                    this._TextAlign = value;
                    if (this.DOMConstructed) {
                        this.MainIndicator.DestroyDOM();
                        this.TextLabel.DestroyDOM();

                        if (this._TextAlign === UI.TextAlignments.Left) {
                            this.TextLabel.ConstructDOM(this._rootElement);
                            this.MainIndicator.ConstructDOM(this._rootElement);
                            this.AddClass("LeftAlign");
                        } else if (this._TextAlign === UI.TextAlignments.Right) {
                            this.MainIndicator.ConstructDOM(this._rootElement);
                            this.TextLabel.ConstructDOM(this._rootElement);
                            this.AddClass("RightAlign");
                        }
                    }
                }
                return this._TextAlign;
            };

            CheckBox.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.TextLabel.Text(value);
            };
            CheckBox.prototype.Checked = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (value) {
                        this.MainIndicator.SetIndicatorToOn();
                    } else {
                        this.MainIndicator.SetIndicatorToOff();
                    }
                    this.OnCheckedChange.Invoke(new TSUI.Events.CheckedChangeEventArgs(this));
                }
                return this.MainIndicator.IsOn();
            };

            CheckBox.prototype.InvokeDefaultAction = function () {
                this._rootElement.click();
            };
            return CheckBox;
        })(UI.Control);
        UI.CheckBox = CheckBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

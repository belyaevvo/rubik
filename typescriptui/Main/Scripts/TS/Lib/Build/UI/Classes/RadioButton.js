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
    /// <reference path="../Interfaces/IRadioButton.d.ts" />
    /// <reference path="../Enums/TextAlignments.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        UI.RadioButtonGroups = [];

        var RadioButton = (function (_super) {
            __extends(RadioButton, _super);
            function RadioButton(checked) {
                if (typeof checked === "undefined") { checked = false; }
                _super.call(this);
                this._Group = "";

                this._rootElement.addClass("RadioButton");

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
            RadioButton.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this.TextAlign(_this.TextAlign());

                    if (onComplete) {
                        onComplete();
                    }
                });
            };

            RadioButton.prototype._This_OnClick = function (eventArgs) {
                if (this.ActuallyEnabled()) {
                    if (!this.Group()) {
                        this.Checked(!this.Checked());
                    } else {
                        this.Checked(true);
                    }
                }
            };

            RadioButton.prototype.TextAlign = function (value) {
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

            RadioButton.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.TextLabel.Text(value);
            };
            RadioButton.prototype.Checked = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    var oldVal = this.Checked();

                    if (value) {
                        this.MainIndicator.SetIndicatorToOn();

                        if (this._Group !== "") {
                            for (var i = 0; i < UI.RadioButtonGroups[this._Group].length; i++) {
                                var el = UI.RadioButtonGroups[this._Group][i];
                                if (el != this) {
                                    el.Checked(false);
                                }
                            }
                        }
                    } else {
                        this.MainIndicator.SetIndicatorToOff();
                    }
                    if (value !== oldVal) {
                        this.OnCheckedChange.Invoke(new TSUI.Events.CheckedChangeEventArgs(this));
                    }
                }
                return this.MainIndicator.IsOn();
            };

            RadioButton.prototype.InvokeDefaultAction = function () {
                this._rootElement.click();
            };

            RadioButton.prototype.Group = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (this._Group !== "") {
                        UI.RadioButtonGroups[this._Group].splice(UI.RadioButtonGroups[this._Group].indexOf(this), 1);
                    }
                    this._Group = value;

                    if (this._Group !== "") {
                        if (UI.RadioButtonGroups[this._Group] === undefined) {
                            UI.RadioButtonGroups[this._Group] = [];
                        }
                        UI.RadioButtonGroups[this._Group].push(this);

                        this.Checked(this.Checked());
                    }
                }
                return this._Group;
            };
            return RadioButton;
        })(UI.Control);
        UI.RadioButton = RadioButton;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

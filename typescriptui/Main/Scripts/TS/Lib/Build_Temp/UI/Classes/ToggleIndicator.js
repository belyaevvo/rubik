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
    /// <reference path="../Interfaces/IToggleIndicator.d.ts" />
    /// <reference path="Label.ts" />
    (function (UI) {
        var ToggleIndicatorLabel = (function (_super) {
            __extends(ToggleIndicatorLabel, _super);
            function ToggleIndicatorLabel(_OffVal, _OnVal) {
                if (typeof _OffVal === "undefined") { _OffVal = "<"; }
                if (typeof _OnVal === "undefined") { _OnVal = "<"; }
                _super.call(this);
                this._OffVal = _OffVal;
                this._OnVal = _OnVal;

                this._rootElement.addClass("ToggleIndicatorLabel");

                this.Focusable(true);
            }
            ToggleIndicatorLabel.prototype.SetIndicatorToOn = function () {
                this.RemoveClass("Off");
                this.AddClass("On");
                this.Text(this._OnVal);
            };
            ToggleIndicatorLabel.prototype.SetIndicatorToOff = function () {
                this.RemoveClass("On");
                this.AddClass("Off");
                this.Text(this._OffVal);
            };
            ToggleIndicatorLabel.prototype.IsOn = function () {
                return this.HasClass("On");
            };
            ToggleIndicatorLabel.prototype.InvokeDefaultAction = function () {
                this._rootElement.click();
            };
            return ToggleIndicatorLabel;
        })(UI.Label);
        UI.ToggleIndicatorLabel = ToggleIndicatorLabel;
        var ToggleIndicatorBox = (function (_super) {
            __extends(ToggleIndicatorBox, _super);
            function ToggleIndicatorBox() {
                _super.call(this);

                this._rootElement.addClass("ToggleIndicatorBox");

                this._InnerDivElement = $("<div>");

                this.Focusable(true);
            }
            ToggleIndicatorBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._rootElement.append(_this._InnerDivElement);

                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            ToggleIndicatorBox.prototype.DestroyDOM = function () {
                this._InnerDivElement.remove();

                _super.prototype.DestroyDOM.call(this);
            };

            ToggleIndicatorBox.prototype.SetIndicatorToOn = function () {
                this.RemoveClass("Off");
                this.AddClass("On");
            };
            ToggleIndicatorBox.prototype.SetIndicatorToOff = function () {
                this.RemoveClass("On");
                this.AddClass("Off");
            };
            ToggleIndicatorBox.prototype.IsOn = function () {
                return this.HasClass("On");
            };

            ToggleIndicatorBox.prototype.InvokeDefaultAction = function () {
                this._rootElement.click();
            };
            return ToggleIndicatorBox;
        })(UI.Control);
        UI.ToggleIndicatorBox = ToggleIndicatorBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

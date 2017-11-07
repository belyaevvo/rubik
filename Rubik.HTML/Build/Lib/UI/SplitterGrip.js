/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="ISplitterGrip.d.ts" />
/// <reference path="Control.ts" />
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var SplitterGrip = (function (_super) {
            __extends(SplitterGrip, _super);
            function SplitterGrip() {
                var _this = _super.call(this) || this;
                _this._Orientation = UI.SplitterGrip_Orientations.Vertical;
                _this._SplitterDistance = 50;
                _this._SplitterWidth = 15;
                _this._rootElement.addClass("SplitterGrip");
                _this.OnSplitterMove = new Rubik.Events.SplitterMoveEvent();
                _this.OnOrientationChanged = new Rubik.Events.OrientationChangedEvent();
                return _this;
            }
            SplitterGrip.prototype.ConstructDOM = function (parent, onComplete) {
                if (onComplete === void 0) { onComplete = null; }
                var __this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    __this._rootElement.text("&nbsp;");
                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            SplitterGrip.prototype.MaxDistance = function () {
                return 99.5;
            };
            SplitterGrip.prototype.Orientation = function (value) {
                if (value === void 0) { value = null; }
                if (value !== null) {
                    this._Orientation = value;
                    var orientation = this.Orientation();
                    this._rootElement.css({
                        height: (orientation === UI.SplitterGrip_Orientations.Horizontal) ? value.toString() + "%" : "100%",
                        width: (orientation === UI.SplitterGrip_Orientations.Vertical) ? value.toString() + "%" : "100%",
                        top: (orientation === UI.SplitterGrip_Orientations.Horizontal) ? value.toString() + "%" : "0px",
                        left: (orientation === UI.SplitterGrip_Orientations.Vertical) ? value.toString() + "%" : "0px"
                    });
                    if (orientation === UI.SplitterGrip_Orientations.Horizontal) {
                        this._rootElement.removeClass("Vertical");
                        this._rootElement.addClass("Horizontal");
                    }
                    else {
                        this._rootElement.removeClass("Horizontal");
                        this._rootElement.addClass("Vertical");
                    }
                    this.OnOrientationChanged.Invoke(new Rubik.Events.OrientationChangedEventArgs(this));
                }
                return this._Orientation;
            };
            SplitterGrip.prototype.SplitterDistance = function (value) {
                if (value === void 0) { value = null; }
                if (value !== null) {
                    var max = this.MaxDistance();
                    value = value < 0 ? 0 : (value > max ? max : value);
                    this._SplitterDistance = value;
                    var orientation = this.Orientation();
                    this._rootElement.css({
                        top: (orientation === UI.SplitterGrip_Orientations.Horizontal) ? value.toString() + "%" : "0px",
                        left: (orientation === UI.SplitterGrip_Orientations.Vertical) ? value.toString() + "%" : "0px"
                    });
                    this.OnSplitterMove.Invoke(new Rubik.Events.SplitterMoveEventArgs(this));
                }
                return this._SplitterDistance;
            };
            SplitterGrip.prototype.SplitterWidth = function (value) {
                if (value === void 0) { value = null; }
                if (value !== null) {
                    this._SplitterWidth = value;
                    var orientation = this.Orientation();
                    this._rootElement.css({
                        height: (orientation === UI.SplitterGrip_Orientations.Horizontal) ? value.toString() + "px" : "100%",
                        width: (orientation === UI.SplitterGrip_Orientations.Vertical) ? value.toString() + "px" : "100%"
                    });
                }
                return this._SplitterWidth;
            };
            return SplitterGrip;
        }(UI.Control));
        UI.SplitterGrip = SplitterGrip;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=SplitterGrip.js.map
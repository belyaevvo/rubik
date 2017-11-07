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
    /// <reference path="../Interfaces/ISplitterGrip.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var SplitterGrip = (function (_super) {
            __extends(SplitterGrip, _super);
            function SplitterGrip() {
                _super.call(this);
                this._Orientation = UI.SplitterGrip_Orientations.Vertical;
                this._SplitterDistance = 50;
                this._SplitterWidth = 15;

                this._rootElement.addClass("SplitterGrip");

                this.OnSplitterMove = new TSUI.Events.SplitterMoveEvent();
                this.OnOrientationChanged = new TSUI.Events.OrientationChangedEvent();
            }
            SplitterGrip.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._rootElement.text("&nbsp;");

                    if (onComplete) {
                        onComplete();
                    }
                });
            };

            SplitterGrip.prototype.MaxDistance = function () {
                return 99.5;
            };

            SplitterGrip.prototype.Orientation = function (value) {
                if (typeof value === "undefined") { value = null; }
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
                    } else {
                        this._rootElement.removeClass("Horizontal");
                        this._rootElement.addClass("Vertical");
                    }
                    this.OnOrientationChanged.Invoke(new TSUI.Events.OrientationChangedEventArgs(this));
                }
                return this._Orientation;
            };

            SplitterGrip.prototype.SplitterDistance = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    var max = this.MaxDistance();
                    value = value < 0 ? 0 : (value > max ? max : value);
                    this._SplitterDistance = value;

                    var orientation = this.Orientation();
                    this._rootElement.css({
                        top: (orientation === UI.SplitterGrip_Orientations.Horizontal) ? value.toString() + "%" : "0px",
                        left: (orientation === UI.SplitterGrip_Orientations.Vertical) ? value.toString() + "%" : "0px"
                    });

                    this.OnSplitterMove.Invoke(new TSUI.Events.SplitterMoveEventArgs(this));
                }
                return this._SplitterDistance;
            };

            SplitterGrip.prototype.SplitterWidth = function (value) {
                if (typeof value === "undefined") { value = null; }
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
        })(UI.Control);
        UI.SplitterGrip = SplitterGrip;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

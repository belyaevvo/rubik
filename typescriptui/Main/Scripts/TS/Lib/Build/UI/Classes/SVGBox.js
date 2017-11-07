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
    /// <reference path="../Interfaces/ISVGBox.d.ts" />
    /// <reference path="ImageBox.ts" />
    (function (UI) {
        var SVGBox = (function (_super) {
            __extends(SVGBox, _super);
            function SVGBox(source) {
                _super.call(this);

                this._rootElement.addClass("SVGBox");
                this._ImageElement = $("<object type=\"image/svg+xml\">");

                this._OverlayElement = $("<div class=\"Overlay\">");

                this.Source(source);
            }
            SVGBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._rootElement.append(_this._OverlayElement);

                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            SVGBox.prototype.DestroyDOM = function () {
                this._OverlayElement.remove();

                _super.prototype.DestroyDOM.call(this);
            };

            SVGBox.prototype.Source = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._ImageElement.attr("data", value);
                }
                return this._ImageElement.attr("data");
            };
            return SVGBox;
        })(UI.ImageBox);
        UI.SVGBox = SVGBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

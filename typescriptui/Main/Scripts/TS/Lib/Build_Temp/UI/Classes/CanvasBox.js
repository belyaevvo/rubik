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
    /// <reference path="../Interfaces/ICanvasBox.d.ts" />
    /// <reference path="ImageBox.ts" />
    (function (UI) {
        var CanvasBox = (function (_super) {
            __extends(CanvasBox, _super);
            function CanvasBox() {
                _super.call(this);
                this._RenderImageOnLoaded = false;

                this._rootElement.addClass("CanvasBox");
                this._CanvasElement = $("<canvas width=\"100%\" height=\"100%\">");
            }
            CanvasBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._ImageElement.remove();
                    _this._rootElement.append(_this._CanvasElement);
                    _this._CanvasElement.append(_this._ImageElement);

                    _this._ImageElement.on("load", function () {
                        _this._OnImageElementLoaded();
                    });

                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            CanvasBox.prototype.DestroyDOM = function () {
                this._CanvasElement.remove();

                _super.prototype.DestroyDOM.call(this);
            };

            CanvasBox.prototype.Context = function () {
                this._RenderImageOnLoaded = false;
                return this._CanvasElement[0].getContext("2d");
            };

            CanvasBox.prototype.Source = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._RenderImageOnLoaded = true;
                }
                return _super.prototype.Source.call(this, value);
            };

            CanvasBox.prototype._OnImageElementLoaded = function () {
                if (this._RenderImageOnLoaded) {
                    this._RenderImageOnLoaded = false;
                    var context = this.Context();
                    var pos = this._ImageElement.position();
                    context.drawImage(this._ImageElement[0], pos.left, pos.top, 100, 100);
                }
            };
            return CanvasBox;
        })(UI.ImageBox);
        UI.CanvasBox = CanvasBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

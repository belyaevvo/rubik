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
    /// <reference path="CanvasBox.ts" />
    /// <reference path="../Interfaces/IResizeGrip.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var ResizeGrip = (function (_super) {
            __extends(ResizeGrip, _super);
            function ResizeGrip() {
                _super.call(this);
                this.GripColor = "#969696";

                this._rootElement.addClass("ResizeGrip");

                this._GripCanvas = new UI.CanvasBox();
                this.Children.Add(this._GripCanvas);
            }
            ResizeGrip.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this.Render();

                    if (onComplete) {
                        onComplete();
                    }
                });
            };

            ResizeGrip.prototype.Enabled = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = _super.prototype.Enabled.call(this, value);
                if (value !== null) {
                    this.Render();
                }
                return result;
            };

            ResizeGrip.prototype.Render = function () {
                var width = 100;
                var height = 100;

                var renderColor = this.GripColor;

                if (!this._Enabled) {
                    renderColor = "#FAFAFA";
                }

                var context = this._GripCanvas.Context();
                context.lineWidth = 8;
                context.strokeStyle = renderColor;
                context.beginPath();

                context.moveTo(0 * (width / 6), height);
                context.lineTo(width, 0);

                context.moveTo(2.75 * (width / 6), height);
                context.lineTo(width, 2.75 * (height / 6));

                context.moveTo(5 * (width / 6), height);
                context.lineTo(width, 5 * (height / 6));

                context.stroke();
            };
            return ResizeGrip;
        })(UI.Control);
        UI.ResizeGrip = ResizeGrip;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

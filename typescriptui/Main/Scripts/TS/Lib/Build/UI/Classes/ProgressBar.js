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
    /// <reference path="../Interfaces/IProgressBar.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var ProgressBar = (function (_super) {
            __extends(ProgressBar, _super);
            function ProgressBar(type) {
                if (typeof type === "undefined") { type = UI.ProgressBarTypes.Horizontal; }
                _super.call(this);
                this._Type = UI.ProgressBarTypes.Horizontal;
                this._Reverse = false;
                this._Progress = 0;
                this._ShowText = true;

                this._rootElement.addClass("ProgressBar");

                this._UnderlyingCanvas = new UI.CanvasBox();
                this.Children.Add(this._UnderlyingCanvas);

                this._BarColourElem = $("<span class=\"Bar\">");

                this.Type(type);
            }
            ProgressBar.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._rootElement.append(_this._BarColourElem);

                    _this._Render();

                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            ProgressBar.prototype.DestroyDOM = function () {
                this._BarColourElem.remove();

                _super.prototype.DestroyDOM.call(this);
            };

            ProgressBar.prototype.Type = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this.RemoveClass("Circular");
                    this.RemoveClass("Horizontal");
                    this.RemoveClass("Vertical");
                    switch (value) {
                        case UI.ProgressBarTypes.Circular:
                            this.AddClass("Circular");
                            break;
                        case UI.ProgressBarTypes.Horizontal:
                            this.AddClass("Horizontal");
                            break;
                        case UI.ProgressBarTypes.Vertical:
                            this.AddClass("Vertical");
                            break;
                    }
                    this._Type = value;
                    this._Render();
                }
                return this._Type;
            };

            ProgressBar.prototype.Reverse = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Reverse = value;
                    this._Render();
                }
                return this._Reverse;
            };

            ProgressBar.prototype.Progress = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    value = Math.max(0, Math.min(100, value));
                    this._Progress = value;
                    this._Render();
                }
                return this._Progress;
            };

            ProgressBar.prototype.ShowText = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._ShowText = value;
                    this._Render();
                }
                return this._ShowText;
            };

            ProgressBar.prototype._Render = function () {
                if (this.DOMConstructed) {
                    TSUI.Animation.RegisterAnimationForSingleCallback(new TSUI.Animation.AnimationCallback(function (TotalElapsedTime) {
                        var val = this.Progress();
                        val /= 100;

                        var context = this._UnderlyingCanvas.Context();

                        var width = context.canvas.width = this.ActualWidth();
                        var height = context.canvas.height = this.ActualHeight();

                        var reverse = this.Reverse();

                        context.fillStyle = this._BarColourElem.css("background-color");
                        context.strokeStyle = this._BarColourElem.css("background-color");
                        context.lineWidth = 5;

                        context.clearRect(0, 0, width, height);
                        context.textAlign = "center";
                        context.textBaseline = "middle";

                        var text = this.Progress().toFixed(0) + "%";
                        var showText = this.ShowText();

                        switch (this.Type()) {
                            case UI.ProgressBarTypes.Circular:
                                var Theta = (2 * Math.PI * val);
                                var radius = (width - context.lineWidth - 2) / 2;

                                context.font = (radius * 0.65).toString() + "px Arial";

                                if (val === 1) {
                                    Theta = (2 * Math.PI) - 0.01;
                                }

                                if (reverse) {
                                    Theta = (2 * Math.PI) - Theta;
                                }

                                Theta -= (Math.PI / 2);

                                if (val > 0.01) {
                                    context.beginPath();
                                    context.moveTo(width / 2, context.lineWidth + 1);
                                    context.arc(width / 2, height / 2, radius, -Math.PI / 2, Theta, reverse);
                                    context.stroke();
                                }

                                if (showText) {
                                    context.fillStyle = this._rootElement.css("color");
                                    context.fillText(text, (width / 2), (height / 2), (radius * 2) - 10);
                                }
                                break;
                            case UI.ProgressBarTypes.Horizontal:
                                var size = val * width;
                                var x = reverse ? width - size : 0;
                                var y = 0;
                                var renderWidth = size;
                                var renderHeight = height;
                                context.font = "16px Arial";
                                context.fillRect(x, y, renderWidth, renderHeight);

                                if (showText) {
                                    context.fillStyle = this._rootElement.css("color");
                                    context.fillText(text, (width / 2), (height / 2), width);
                                }
                                break;
                            case UI.ProgressBarTypes.Vertical:
                                var size = val * height;
                                var x = 0;
                                var y = reverse ? height - size : 0;
                                var renderWidth = width;
                                var renderHeight = size;
                                context.font = "16px Arial";
                                context.fillRect(x, y, renderWidth, renderHeight);

                                if (showText) {
                                    context.fillStyle = this._rootElement.css("color");
                                    context.fillText(text, (width / 2), (height / 2), width);
                                }
                                break;
                        }
                    }, this, true));
                }
            };
            return ProgressBar;
        })(UI.Control);
        UI.ProgressBar = ProgressBar;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

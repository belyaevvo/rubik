var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    (function (Apps) {
        /// <reference path="../Lib/Build/IApp.d.ts" />
        /// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
        /// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
        /// <reference path="../Definitions/jquery.d.ts" />
        (function (Samples) {
            var Sample13App = (function () {
                function Sample13App() {
                    this.MainContainer = null;
                    this.StartArgs = null;
                }
                Sample13App.prototype.Run = function (args, container) {
                    if (typeof args === "undefined") { args = []; }
                    if (typeof container === "undefined") { container = $("body"); }
                    this.StartArgs = args;
                    this.MainContainer = container;

                    this.MainContainer.addClass("Sample13");

                    console.log("Sample 13 loaded.");

                    var newWindow = new DesktopWindow();
                    newWindow.ConstructDOM(this.MainContainer, function () {
                        newWindow.Show();
                    });
                };
                return Sample13App;
            })();
            Samples.Sample13App = Sample13App;

            var DesktopWindow = (function (_super) {
                __extends(DesktopWindow, _super);
                function DesktopWindow() {
                    _super.call(this);

                    this.Title("Sample 13");

                    this.CloseButton.Visible(false);
                    this.ResizeEnabled(false);

                    this.Width(new TSUI.UI.CSSNumber(300));
                    this.Height(new TSUI.UI.CSSNumber(350));

                    var canvas = new AnimatedCanvas();
                    canvas.Width(new TSUI.UI.CSSNumber(90, "%"));
                    canvas.Height(new TSUI.UI.CSSNumber(90, "%"));
                    canvas.Left(new TSUI.UI.CSSNumber(5, "%"));
                    canvas.Top(new TSUI.UI.CSSNumber(5, "%"));
                    this.ContentPanel.Children.Add(canvas);
                }
                return DesktopWindow;
            })(TSUI.UI.Window);

            var AnimatedCanvas = (function (_super) {
                __extends(AnimatedCanvas, _super);
                function AnimatedCanvas() {
                    _super.call(this);
                    this._perviousPercThrough = 0;

                    this.AddClass("AnimatedCanvas");

                    this._canvas = new TSUI.UI.CanvasBox();
                    this._canvas.Width(new TSUI.UI.CSSNumber(100, "%"));
                    this._canvas.Height(new TSUI.UI.CSSNumber(100, "%"));
                    this._canvas.Top(new TSUI.UI.CSSNumber(0));
                    this._canvas.Left(new TSUI.UI.CSSNumber(0));
                    this.Children.Add(this._canvas);

                    TSUI.Animation.RegisterAnimationCallback(new TSUI.Animation.AnimationCallback(function (TotalElapsedTime) {
                        var canvas = this._canvas;
                        var canvasElem = canvas._CanvasElement[0];
                        var context = canvasElem.getContext("2d");

                        var width = canvasElem.width;
                        var height = canvasElem.height;

                        var animDuration = 4000;
                        TotalElapsedTime = TotalElapsedTime % animDuration;
                        var percThroughAnim = (TotalElapsedTime / animDuration);

                        if (this._previousPercThrough > percThroughAnim) {
                            context.clearRect((width / 2) - ((width / 2) * (this._previousPercThrough + 0.01)), (height / 2) - ((height / 2) * (this._previousPercThrough + 0.01)), width * (this._previousPercThrough + 0.01), height * (this._previousPercThrough + 0.01));
                        }
                        this._previousPercThrough = percThroughAnim;

                        context.translate(0.5, 0.5);

                        context.fillStyle = "#000000";
                        context.fillRect((width / 2) - ((width / 2) * (percThroughAnim + 0.01)), (height / 2) - ((height / 2) * (percThroughAnim + 0.01)), width * percThroughAnim, height * percThroughAnim);
                    }, this));
                }
                return AnimatedCanvas;
            })(TSUI.UI.Control);
        })(Apps.Samples || (Apps.Samples = {}));
        var Samples = Apps.Samples;
    })(TSUI.Apps || (TSUI.Apps = {}));
    var Apps = TSUI.Apps;
})(TSUI || (TSUI = {}));

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
            var Sample15App = (function () {
                function Sample15App() {
                    this.MainContainer = null;
                    this.StartArgs = null;
                }
                Sample15App.prototype.Run = function (args, container) {
                    if (typeof args === "undefined") { args = []; }
                    if (typeof container === "undefined") { container = $("body"); }
                    this.StartArgs = args;
                    this.MainContainer = container;

                    this.MainContainer.addClass("Sample15");

                    console.log("Sample 15 loaded.");

                    var newWindow = new DesktopWindow();
                    newWindow.ConstructDOM(this.MainContainer, function () {
                        newWindow.Show();
                    });
                };
                return Sample15App;
            })();
            Samples.Sample15App = Sample15App;

            var DesktopWindow = (function (_super) {
                __extends(DesktopWindow, _super);
                function DesktopWindow() {
                    _super.call(this);

                    this.Title("Sample 15");

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

                    canvas.OnRendered.Attach(new RenderedEventHandler(function (args) {
                        alert("OnRendered occurred!");
                    }, this));
                }
                return DesktopWindow;
            })(TSUI.UI.Window);

            var AnimatedCanvas = (function (_super) {
                __extends(AnimatedCanvas, _super);
                function AnimatedCanvas() {
                    _super.call(this);
                    this._perviousPercThrough = 0;
                    this.OnRendered = new RenderedEvent();

                    this.AddClass("AnimatedCanvas");

                    this._canvas = new TSUI.UI.CanvasBox();
                    this._canvas.Width(new TSUI.UI.CSSNumber(100, "%"));
                    this._canvas.Height(new TSUI.UI.CSSNumber(100, "%"));
                    this._canvas.Top(new TSUI.UI.CSSNumber(0));
                    this._canvas.Left(new TSUI.UI.CSSNumber(0));
                    this.Children.Add(this._canvas);

                    TSUI.Animation.RegisterAnimationForSingleCallback(new TSUI.Animation.AnimationCallback(function (TotalElapsedTime) {
                        var canvas = this._canvas;
                        var canvasElem = canvas._CanvasElement[0];
                        var context = canvasElem.getContext("2d");

                        var width = canvasElem.width;
                        var height = canvasElem.height;

                        var animDuration = 4000;
                        TotalElapsedTime = TotalElapsedTime % animDuration;
                        var percThroughAnim = 0.5;

                        if (this._previousPercThrough > percThroughAnim) {
                            context.clearRect((width / 2) - ((width / 2) * (this._previousPercThrough + 0.01)), (height / 2) - ((height / 2) * (this._previousPercThrough + 0.01)), width * (this._previousPercThrough + 0.01), height * (this._previousPercThrough + 0.01));
                        }
                        this._previousPercThrough = percThroughAnim;

                        context.translate(0.5, 0.5);

                        context.fillStyle = "#000000";
                        context.fillRect((width / 2) - ((width / 2) * (percThroughAnim + 0.01)), (height / 2) - ((height / 2) * (percThroughAnim + 0.01)), width * percThroughAnim, height * percThroughAnim);

                        this.OnRendered.Invoke(new RenderedEventArgs(this));
                    }, this));
                }
                return AnimatedCanvas;
            })(TSUI.UI.Control);

            /** See Event for more details. */
            var RenderedEvent = (function (_super) {
                __extends(RenderedEvent, _super);
                function RenderedEvent() {
                    _super.apply(this, arguments);
                    this.Handlers = [];
                }
                RenderedEvent.prototype.Attach = function (handler) {
                    _super.prototype.Attach.call(this, handler);
                };
                RenderedEvent.prototype.Detach = function (handler) {
                    _super.prototype.Detach.call(this, handler);
                };

                RenderedEvent.prototype.IsAttached = function (handler) {
                    return _super.prototype.IsAttached.call(this, handler);
                };

                RenderedEvent.prototype.Invoke = function (args) {
                    _super.prototype.Invoke.call(this, args);
                };
                return RenderedEvent;
            })(TSUI.Events.Event);

            /** See EventHandler for more details. */
            var RenderedEventHandler = (function (_super) {
                __extends(RenderedEventHandler, _super);
                function RenderedEventHandler(Callback, Context) {
                    _super.call(this, Callback, Context);
                    this.Callback = Callback;
                    this.Context = Context;
                }
                RenderedEventHandler.prototype.Invoke = function (args) {
                    _super.prototype.Invoke.call(this, args);
                };
                return RenderedEventHandler;
            })(TSUI.Events.EventHandler);

            /** See EventArgs for more details. */
            var RenderedEventArgs = (function (_super) {
                __extends(RenderedEventArgs, _super);
                function RenderedEventArgs(Sender) {
                    _super.call(this, Sender);
                    this.Sender = Sender;
                }
                return RenderedEventArgs;
            })(TSUI.Events.EventArgs);
        })(Apps.Samples || (Apps.Samples = {}));
        var Samples = Apps.Samples;
    })(TSUI.Apps || (TSUI.Apps = {}));
    var Apps = TSUI.Apps;
})(TSUI || (TSUI = {}));

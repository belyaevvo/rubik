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
    /// <reference path="../../../Animation/AppWindowAnimator.ts" />
    /// <reference path="../../Interfaces/Windows/IWindow.d.ts" />
    /// <reference path="../ResizeGrip.ts" />
    /// <reference path="../TitleBar.ts" />
    /// <reference path="../Button.ts" />
    /// <reference path="../Panel.ts" />
    /// <reference path="../Control.ts" />
    (function (UI) {
        var Window = (function (_super) {
            __extends(Window, _super);
            function Window() {
                _super.call(this);
                this._DraggingEnabled = true;
                this._DraggingWindow = false;
                this._DraggingOffset = null;
                this._ResizingEnabled = true;
                this._ResizingWindow = false;
                this._ResizingOffset = null;
                this.DestroyDOMOnClose = true;

                //this.OptimiseConstructForGraphics = true;
                this.EnableSelection();

                this._rootElement.addClass("Window");
                this.ApplyStyle("visibility", "hidden");

                this.OnClose = new TSUI.Events.CloseEvent();

                this.MainTitleBar = new UI.TitleBar();
                this.Children.Add(this.MainTitleBar);

                this._MainTitleBar_MouseUpHandler = new TSUI.Events.MouseUpEventHandler(this._MainTitleBar_OnMouseUp, this);
                this._MainTitleBar_MouseMoveHandler = new TSUI.Events.MouseMoveEventHandler(this._MainTitleBar_OnMouseMove, this);
                this.MainTitleBar.OnMouseDown.Attach(new TSUI.Events.MouseDownEventHandler(this._MainTitleBar_OnMouseDown, this));
                this.MainTitleBar.OnMouseUp.Attach(this._MainTitleBar_MouseUpHandler);
                this.MainTitleBar.OnMouseMove.Attach(this._MainTitleBar_MouseMoveHandler);

                this.CloseButton = new UI.Button();
                this.CloseButton.AddClass("WindowCloseButton");
                this.CloseButton.Text("X");
                this.Children.Add(this.CloseButton);

                this.ContentPanel = new UI.Panel();
                this.Children.Add(this.ContentPanel);

                this.MainResizeGrip = new UI.ResizeGrip();
                this.Children.Add(this.MainResizeGrip);

                this._MainResizeGrip_MouseUpHandler = new TSUI.Events.MouseUpEventHandler(this._MainResizeGrip_OnMouseUp, this);
                this._MainResizeGrip_MouseMoveHandler = new TSUI.Events.MouseMoveEventHandler(this._MainResizeGrip_OnMouseMove, this);
                this.MainResizeGrip.OnMouseDown.Attach(new TSUI.Events.MouseDownEventHandler(this._MainResizeGrip_OnMouseDown, this));

                this.CloseButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._CloseButton_Click, this));
            }
            Window.prototype._MainTitleBar_OnMouseDown = function (eventArgs) {
                if (this._DraggingEnabled) {
                    this._DraggingWindow = true;
                    this.Enabled(false);

                    if (UI.CurrentFocusedControl !== null) {
                        UI.CurrentFocusedControl.Blur();
                    }

                    $("*").css({
                        cursor: "pointer"
                    });

                    var parentPos = this._rootElement.parent().position();
                    var xOffsetBit = eventArgs.jqEvent.pageX - this.PageLeft();
                    var yOffsetBit = eventArgs.jqEvent.pageY - this.PageTop();
                    this._DraggingOffset = {
                        x: (xOffsetBit + parentPos.left),
                        y: (yOffsetBit + parentPos.top)
                    };

                    TSUI.StopEvent(eventArgs.jqEvent);

                    this.MainTitleBar.OnMouseUp.Attach(this._MainTitleBar_MouseUpHandler);
                    this.MainTitleBar.OnMouseMove.Attach(this._MainTitleBar_MouseMoveHandler);
                }
            };
            Window.prototype._MainTitleBar_OnMouseUp = function (eventArgs) {
                if (this._DraggingWindow) {
                    this._DraggingWindow = false;
                    this.Enabled(true);

                    $("*").css({
                        cursor: ""
                    });

                    TSUI.StopEvent(eventArgs.jqEvent);

                    this.MainTitleBar.OnMouseUp.Detach(this._MainTitleBar_MouseUpHandler);
                    this.MainTitleBar.OnMouseMove.Detach(this._MainTitleBar_MouseMoveHandler);
                }
            };
            Window.prototype._MainTitleBar_OnMouseMove = function (eventArgs) {
                if (this._DraggingWindow) {
                    if (!this._DraggingEnabled) {
                        this._DraggingWindow = false;
                    } else {
                        var y = eventArgs.jqEvent.pageY - this._DraggingOffset.y;
                        var x = eventArgs.jqEvent.pageX - this._DraggingOffset.x;

                        var parentWidth = this._rootElement.parent().width();
                        var parentHeight = this._rootElement.parent().height();

                        y = Math.min(Math.max(y, 0), parentHeight - this.ActualHeight());
                        x = Math.min(Math.max(x, 0), parentWidth - this.ActualWidth());

                        this.Top(new UI.CSSNumber((y / parentHeight) * 100, "%"));
                        this.Left(new UI.CSSNumber((x / parentWidth) * 100, "%"));
                    }

                    TSUI.StopEvent(eventArgs.jqEvent);
                }
            };

            Window.prototype._MainResizeGrip_OnMouseDown = function (eventArgs) {
                if (this._ResizingEnabled) {
                    this._ResizingWindow = true;
                    this.Enabled(false);

                    if (UI.CurrentFocusedControl !== null) {
                        UI.CurrentFocusedControl.Blur();
                    }

                    $("*").css({
                        cursor: "pointer"
                    });

                    TSUI.StopEvent(eventArgs.jqEvent);

                    this.MainResizeGrip.OnMouseUp.Attach(this._MainResizeGrip_MouseUpHandler);
                    this.MainResizeGrip.OnMouseMove.Attach(this._MainResizeGrip_MouseMoveHandler);
                }
            };
            Window.prototype._MainResizeGrip_OnMouseUp = function (eventArgs) {
                if (this._ResizingWindow) {
                    this._ResizingWindow = false;
                    this.Enabled(true);

                    $("*").css({
                        cursor: ""
                    });

                    TSUI.StopEvent(eventArgs.jqEvent);

                    this.MainResizeGrip.OnMouseUp.Detach(this._MainResizeGrip_MouseUpHandler);
                    this.MainResizeGrip.OnMouseMove.Detach(this._MainResizeGrip_MouseMoveHandler);
                }
            };
            Window.prototype._MainResizeGrip_OnMouseMove = function (eventArgs) {
                if (this._ResizingWindow) {
                    if (!this._ResizingEnabled) {
                        this._ResizingWindow = false;
                    } else {
                        var height = eventArgs.jqEvent.pageY - this.PageTop() + 5;
                        var width = eventArgs.jqEvent.pageX - this.PageLeft() + 5;

                        height = (height / this._rootElement.parent().height()) * 100;
                        width = (width / this._rootElement.parent().width()) * 100;

                        this.Height(new UI.CSSNumber(height, "%"));
                        this.Width(new UI.CSSNumber(width, "%"));
                    }

                    TSUI.StopEvent(eventArgs.jqEvent);
                }
            };

            Window.prototype._CloseButton_Click = function (eventArgs) {
                var _this = this;
                this.Hide(function () {
                    if (_this.DestroyDOMOnClose) {
                        _this.DestroyDOM();
                    }
                });
            };

            Window.prototype.DragEnabled = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._DraggingEnabled = value;

                    this.MainTitleBar.Draggable(this._DraggingEnabled);
                }
                return this._DraggingEnabled;
            };
            Window.prototype.ResizeEnabled = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._ResizingEnabled = value;

                    this.MainResizeGrip.Visible(this._ResizingEnabled);
                }
                return this._ResizingEnabled;
            };

            Window.prototype.Title = function (value) {
                if (typeof value === "undefined") { value = null; }
                this.MainTitleBar.Title(value);
                return this.MainTitleBar.Title();
            };

            Window.prototype.Show = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.AppWindowAnimator(); }
                UI.OpenWindows++;
                this.ApplyStyle("z-index", (UI.OpenWindows * 10).toString());
                _super.prototype.Show.call(this, callback, animator);
            };
            Window.prototype.Hide = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.AppWindowAnimator(); }
                UI.OpenWindows--;
                var _this = this;
                _super.prototype.Hide.call(this, function () {
                    _this.ApplyStyle("z-index", "");

                    _this.OnClose.Invoke(new TSUI.Events.CloseEventArgs(this));

                    if (callback !== null)
                        callback();
                }, animator);
            };
            return Window;
        })(UI.Control);
        UI.Window = Window;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

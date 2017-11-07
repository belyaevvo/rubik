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
/// <reference path="ISplitContainer.d.ts" />
/// <reference path="SplitterGrip.ts" />
/// <reference path="Panel.ts" />
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var SplitContainer = (function (_super) {
            __extends(SplitContainer, _super);
            function SplitContainer() {
                var _this = _super.call(this) || this;
                _this.boolean = false;
                _this._rootElement.addClass("SplitContainer");
                _this.Panel1 = new UI.Panel();
                _this.Panel2 = new UI.Panel();
                _this.Panel1.AddClass("Panel1");
                _this.Panel2.AddClass("Panel2");
                _this.Children.Add(_this.Panel1);
                _this.Children.Add(_this.Panel2);
                _this.MainSplitterGrip = new UI.SplitterGrip();
                _this.Children.Add(_this.MainSplitterGrip);
                _this.MainSplitterGrip.OnMouseDown.Attach(new Rubik.Events.MouseDownEventHandler(_this.MainSplitterGrip_OnMouseDown, _this));
                _this._MainSplitterGrip_MouseUpHandler = new Rubik.Events.MouseUpEventHandler(_this.MainSplitterGrip_OnMouseUp, _this);
                _this._MainSplitterGrip_MouseMoveHandler = new Rubik.Events.MouseMoveEventHandler(_this.MainSplitterGrip_OnMouseMove, _this);
                _this.MainSplitterGrip.OnSplitterMove.Attach(new Rubik.Events.SplitterMoveEventHandler(_this.MainSplitterGrip_OnSplitterMove, _this));
                _this.MainSplitterGrip.OnOrientationChanged.Attach(new Rubik.Events.OrientationChangedEventHandler(_this.MainSplitterGrip_OnOrientationChanged, _this));
                _this.OnResize.Attach(new Rubik.Events.ResizeEventHandler(_this._This_Resized, _this));
                _this.Width(new UI.CSSNumber(100, "%"));
                _this.Height(new UI.CSSNumber(100, "%"));
                return _this;
            }
            SplitContainer.prototype.ConstructDOM = function (parent, onComplete) {
                if (onComplete === void 0) { onComplete = null; }
                var __this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    __this.MainSplitterGrip.Orientation(__this.MainSplitterGrip.Orientation());
                    __this.MainSplitterGrip.SplitterDistance(__this.MainSplitterGrip.SplitterDistance());
                    __this.MainSplitterGrip.SplitterWidth(__this.MainSplitterGrip.SplitterWidth());
                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            SplitContainer.prototype.Orientation = function (value) {
                return this.MainSplitterGrip.Orientation(value);
            };
            SplitContainer.prototype.MainSplitterGrip_OnMouseDown = function (eventArgs) {
                this._MainSplitterGrip_Dragging = true;
                Rubik.StopEvent(eventArgs.jqEvent);
                this.MainSplitterGrip.OnMouseUp.Attach(this._MainSplitterGrip_MouseUpHandler);
                this.MainSplitterGrip.OnMouseMove.Attach(this._MainSplitterGrip_MouseMoveHandler);
            };
            SplitContainer.prototype.MainSplitterGrip_OnMouseUp = function (eventArgs) {
                if (this._MainSplitterGrip_Dragging) {
                    this._MainSplitterGrip_Dragging = false;
                    Rubik.StopEvent(eventArgs.jqEvent);
                    this.MainSplitterGrip.OnMouseUp.Detach(this._MainSplitterGrip_MouseUpHandler);
                    this.MainSplitterGrip.OnMouseMove.Detach(this._MainSplitterGrip_MouseMoveHandler);
                }
            };
            SplitContainer.prototype.MainSplitterGrip_OnMouseMove = function (eventArgs) {
                if (this._MainSplitterGrip_Dragging) {
                    if (!this.MainSplitterGrip.ActuallyEnabled()) {
                        this._MainSplitterGrip_Dragging = false;
                    }
                    else {
                        var width = this.ActualWidth();
                        var height = this.ActualHeight();
                        var xPerc = ((eventArgs.jqEvent.pageX - this.PageLeft()) / width) * 100;
                        var yPerc = ((eventArgs.jqEvent.pageY - this.PageTop()) / height) * 100;
                        if (this.MainSplitterGrip.Orientation() === UI.SplitterGrip_Orientations.Horizontal) {
                            this.MainSplitterGrip.SplitterDistance(yPerc);
                        }
                        else {
                            this.MainSplitterGrip.SplitterDistance(xPerc);
                        }
                    }
                    Rubik.StopEvent(eventArgs.jqEvent);
                }
            };
            SplitContainer.prototype.MainSplitterGrip_OnSplitterMove = function (eventArgs) {
                var perc = this.MainSplitterGrip.SplitterDistance();
                var OK = true;
                if (this.MainSplitterGrip.Orientation() === UI.SplitterGrip_Orientations.Horizontal) {
                    var minHeight = this.Panel1.MinHeight();
                    var minHeightVal = minHeight.Units === "px" ? (minHeight.Value / this.ActualHeight()) * 100 : minHeight.Value;
                    if (!minHeight.Auto && perc < minHeightVal) {
                        perc = minHeightVal;
                        this.MainSplitterGrip.Top(new UI.CSSNumber(perc, "%"));
                        OK = false;
                    }
                    if (OK) {
                        minHeight = this.Panel2.MinHeight();
                        minHeightVal = minHeight.Units === "px" ? (minHeight.Value / this.ActualHeight()) * 100 : minHeight.Value;
                        minHeightVal = 100 - minHeightVal;
                        if (!minHeight.Auto && perc > minHeightVal) {
                            perc = minHeightVal;
                            this.MainSplitterGrip.Top(new UI.CSSNumber(perc, "%"));
                            OK = false;
                        }
                    }
                }
                else {
                    var minWidth = this.Panel1.MinWidth();
                    var minWidthVal = minWidth.Units === "px" ? (minWidth.Value / this.ActualWidth()) * 100 : minWidth.Value;
                    if (!minWidth.Auto && perc < minWidthVal) {
                        perc = minWidthVal;
                        this.MainSplitterGrip.Left(new UI.CSSNumber(perc, "%"));
                        OK = false;
                    }
                    if (OK) {
                        minWidth = this.Panel2.MinWidth();
                        minWidthVal = minWidth.Units === "px" ? (minWidth.Value / this.ActualWidth()) * 100 : minWidth.Value;
                        minWidthVal = 100 - minWidthVal;
                        if (!minWidth.Auto && perc > minWidthVal) {
                            perc = minWidthVal;
                            this.MainSplitterGrip.Left(new UI.CSSNumber(perc, "%"));
                            OK = false;
                        }
                    }
                }
                if (this.MainSplitterGrip.Orientation() === UI.SplitterGrip_Orientations.Horizontal) {
                    this.Panel1.Height(new UI.CSSNumber(perc, "%"));
                    this.Panel2.Height(new UI.CSSNumber(100 - perc, "%"));
                    this.Panel2.Top(new UI.CSSNumber(perc, "%"));
                }
                else {
                    this.Panel1.Width(new UI.CSSNumber(perc, "%"));
                    this.Panel2.Width(new UI.CSSNumber(100 - perc, "%"));
                    this.Panel2.Left(new UI.CSSNumber(perc, "%"));
                }
            };
            SplitContainer.prototype.MainSplitterGrip_OnOrientationChanged = function (eventArgs) {
                if (this.MainSplitterGrip.Orientation() === UI.SplitterGrip_Orientations.Horizontal) {
                    this.Panel1.Width(new UI.CSSNumber(100, "%"));
                    this.Panel2.Width(new UI.CSSNumber(100, "%"));
                    this.Panel1.Left(new UI.CSSNumber(0));
                    this.Panel2.Left(new UI.CSSNumber(0));
                }
                else {
                    this.Panel1.Height(new UI.CSSNumber(100, "%"));
                    this.Panel2.Height(new UI.CSSNumber(100, "%"));
                    this.Panel1.Top(new UI.CSSNumber(0));
                    this.Panel2.Top(new UI.CSSNumber(0));
                }
                this.MainSplitterGrip.SplitterDistance(this.MainSplitterGrip.SplitterDistance());
            };
            SplitContainer.prototype._This_Resized = function (eventArgs) {
                this.MainSplitterGrip.SplitterDistance(this.MainSplitterGrip.SplitterDistance());
            };
            return SplitContainer;
        }(UI.Control));
        UI.SplitContainer = SplitContainer;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=SplitContainer.js.map
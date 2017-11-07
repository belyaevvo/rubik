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
    /// <reference path="../Interfaces/ISplitContainer.d.ts" />
    /// <reference path="SplitterGrip.ts" />
    /// <reference path="Panel.ts" />
    (function (UI) {
        var SplitContainer = (function (_super) {
            __extends(SplitContainer, _super);
            function SplitContainer() {
                _super.call(this);
                this.boolean = false;

                this._rootElement.addClass("SplitContainer");

                this.Panel1 = new UI.Panel();
                this.Panel2 = new UI.Panel();

                this.Panel1.AddClass("Panel1");
                this.Panel2.AddClass("Panel2");

                this.Children.Add(this.Panel1);
                this.Children.Add(this.Panel2);

                this.MainSplitterGrip = new UI.SplitterGrip();
                this.Children.Add(this.MainSplitterGrip);

                this.MainSplitterGrip.OnMouseDown.Attach(new TSUI.Events.MouseDownEventHandler(this.MainSplitterGrip_OnMouseDown, this));
                this._MainSplitterGrip_MouseUpHandler = new TSUI.Events.MouseUpEventHandler(this.MainSplitterGrip_OnMouseUp, this);
                this._MainSplitterGrip_MouseMoveHandler = new TSUI.Events.MouseMoveEventHandler(this.MainSplitterGrip_OnMouseMove, this);

                this.MainSplitterGrip.OnSplitterMove.Attach(new TSUI.Events.SplitterMoveEventHandler(this.MainSplitterGrip_OnSplitterMove, this));
                this.MainSplitterGrip.OnOrientationChanged.Attach(new TSUI.Events.OrientationChangedEventHandler(this.MainSplitterGrip_OnOrientationChanged, this));

                this.OnResize.Attach(new TSUI.Events.ResizeEventHandler(this._This_Resized, this));

                this.Width(new UI.CSSNumber(100, "%"));
                this.Height(new UI.CSSNumber(100, "%"));
            }
            SplitContainer.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this.MainSplitterGrip.Orientation(_this.MainSplitterGrip.Orientation());
                    _this.MainSplitterGrip.SplitterDistance(_this.MainSplitterGrip.SplitterDistance());
                    _this.MainSplitterGrip.SplitterWidth(_this.MainSplitterGrip.SplitterWidth());

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
                TSUI.StopEvent(eventArgs.jqEvent);

                this.MainSplitterGrip.OnMouseUp.Attach(this._MainSplitterGrip_MouseUpHandler);
                this.MainSplitterGrip.OnMouseMove.Attach(this._MainSplitterGrip_MouseMoveHandler);
            };
            SplitContainer.prototype.MainSplitterGrip_OnMouseUp = function (eventArgs) {
                if (this._MainSplitterGrip_Dragging) {
                    this._MainSplitterGrip_Dragging = false;
                    TSUI.StopEvent(eventArgs.jqEvent);

                    this.MainSplitterGrip.OnMouseUp.Detach(this._MainSplitterGrip_MouseUpHandler);
                    this.MainSplitterGrip.OnMouseMove.Detach(this._MainSplitterGrip_MouseMoveHandler);
                }
            };
            SplitContainer.prototype.MainSplitterGrip_OnMouseMove = function (eventArgs) {
                if (this._MainSplitterGrip_Dragging) {
                    if (!this.MainSplitterGrip.ActuallyEnabled()) {
                        this._MainSplitterGrip_Dragging = false;
                    } else {
                        var width = this.ActualWidth();
                        var height = this.ActualHeight();
                        var xPerc = ((eventArgs.jqEvent.pageX - this.PageLeft()) / width) * 100;
                        var yPerc = ((eventArgs.jqEvent.pageY - this.PageTop()) / height) * 100;

                        if (this.MainSplitterGrip.Orientation() === UI.SplitterGrip_Orientations.Horizontal) {
                            this.MainSplitterGrip.SplitterDistance(yPerc);
                        } else {
                            this.MainSplitterGrip.SplitterDistance(xPerc);
                        }
                    }
                    TSUI.StopEvent(eventArgs.jqEvent);
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
                } else {
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
                } else {
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
                } else {
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
        })(UI.Control);
        UI.SplitContainer = SplitContainer;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

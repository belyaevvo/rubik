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
    /// <reference path="Panel.ts" />
    /// <reference path="../Interfaces/ITrackBar.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var TrackBar = (function (_super) {
            __extends(TrackBar, _super);
            function TrackBar() {
                _super.call(this);
                this._Grip_Dragging = false;
                this._Mode = UI.TrackBarModes.Discrete;
                this._Max = 100;
                this._Min = 0;
                this._Divisions = 10;
                this._Value = 0;

                this._rootElement.addClass("TrackBar");

                this._BarElement = new UI.Panel();
                this._BarElement.AddClass("Bar");
                this.Children.Add(this._BarElement);

                this._GripElement = new UI.Panel();
                this._GripElement.AddClass("Grip");
                this.Children.Add(this._GripElement);

                this.OnValueChange = new TSUI.Events.ValueChangeEvent();

                this._GripElement.OnMouseDown.Attach(new TSUI.Events.MouseDownEventHandler(this._Grip_OnMouseDown, this));

                this._MouseUpHandler = new TSUI.Events.MouseUpEventHandler(this._Grip_OnMouseUp, this);
                this._MouseMoveHandler = new TSUI.Events.MouseMoveEventHandler(this._Grip_OnMouseMove, this);

                this.OnKeyDown.Attach(new TSUI.Events.KeyDownEventHandler(this._This_OnKeyDown, this));

                this.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._This_OnClick, this));

                this.Focusable(true);
            }
            TrackBar.prototype.Mode = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Mode = value;
                }
                return this._Mode;
            };

            TrackBar.prototype.Max = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Max = value;

                    this.Value(this.Value());
                }
                return this._Max;
            };

            TrackBar.prototype.Min = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Min = value;

                    this.Value(this.Value());
                }
                return this._Min;
            };

            TrackBar.prototype.Divisions = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Divisions = value;
                }
                return this._Divisions;
            };

            TrackBar.prototype.Value = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    value = Math.max(this._Min, Math.min(this._Max, value));

                    var oldVal = this._Value;
                    this._Value = value;

                    var width = this.ActualWidth();
                    var range = this._Max - this._Min;
                    var gripDistPerc = (value - this._Min) / range;
                    var gripX = gripDistPerc * width;
                    var gripWidth = this._GripElement.ActualWidth();
                    gripX -= (gripWidth / 2);
                    gripX = Math.max(0, Math.min(width - gripWidth, gripX));
                    this._GripElement.Left(new UI.CSSNumber(gripX));

                    if (oldVal !== value) {
                        this.OnValueChange.Invoke(new TSUI.Events.ValueChangeEventArgs(this));
                    }
                }
                return this._Value;
            };

            TrackBar.prototype._Grip_OnMouseDown = function (eventArgs) {
                this._Grip_Dragging = true;
                TSUI.StopEvent(eventArgs.jqEvent);
                this._GripElement.OnMouseUp.Attach(this._MouseUpHandler);
                this._GripElement.OnMouseMove.Attach(this._MouseMoveHandler);
                this.Focus();
            };
            TrackBar.prototype._Grip_OnMouseUp = function (eventArgs) {
                if (this._Grip_Dragging) {
                    this._Grip_Dragging = false;
                    TSUI.StopEvent(eventArgs.jqEvent);
                    this._GripElement.OnMouseUp.Detach(this._MouseUpHandler);
                    this._GripElement.OnMouseMove.Detach(this._MouseMoveHandler);
                }
            };
            TrackBar.prototype._Grip_OnMouseMove = function (eventArgs) {
                if (this._Grip_Dragging) {
                    var barLeft = this._rootElement.offset().left;
                    var dist = eventArgs.jqEvent.pageX - barLeft;
                    var width = this.ActualWidth();
                    var range = this._Max - this._Min;
                    var distPerc = dist / width;
                    var val = this._Min + (range * distPerc);
                    switch (this._Mode) {
                        case UI.TrackBarModes.Continuous:
                            break;
                        case UI.TrackBarModes.Discrete:
                            var divionVals = range / this._Divisions;
                            val = TSUI.roundTo(val, divionVals);
                            break;
                    }

                    this.Value(val);
                    TSUI.StopEvent(eventArgs.jqEvent);
                }
            };

            TrackBar.prototype._This_OnClick = function (eventArgs) {
                var dist = eventArgs.jqEvent.pageX - this._rootElement.offset().left;
                var width = this.ActualWidth();
                var range = this._Max - this._Min;
                var distPerc = dist / width;
                var val = this._Value;
                var mouseVal = this._Min + (range * distPerc);
                switch (this._Mode) {
                    case UI.TrackBarModes.Continuous:
                        val = mouseVal;
                        break;
                    case UI.TrackBarModes.Discrete:
                        var divisionVals = range / this._Divisions;
                        if (mouseVal > val) {
                            val += divisionVals;
                        } else {
                            val -= divisionVals;
                        }
                        break;
                }
                this.Value(val);
                TSUI.StopEvent(eventArgs.jqEvent);
            };

            TrackBar.prototype._This_OnKeyDown = function (eventArgs) {
                if (eventArgs.jqEvent.keyCode === 37) {
                    var width = this.ActualWidth();
                    var range = this._Max - this._Min;
                    var val = this._Value;
                    switch (this._Mode) {
                        case UI.TrackBarModes.Continuous:
                            val -= range / 100;
                            break;
                        case UI.TrackBarModes.Discrete:
                            var divisionVals = range / this._Divisions;
                            val -= divisionVals;
                            break;
                    }
                    this.Value(val);
                    TSUI.StopEvent(eventArgs.jqEvent);
                } else if (eventArgs.jqEvent.keyCode === 39) {
                    var width = this.ActualWidth();
                    var range = this._Max - this._Min;
                    var val = this._Value;
                    switch (this._Mode) {
                        case UI.TrackBarModes.Continuous:
                            val += range / 100;
                            break;
                        case UI.TrackBarModes.Discrete:
                            var divisionVals = range / this._Divisions;
                            val += divisionVals;
                            break;
                    }
                    this.Value(val);
                    TSUI.StopEvent(eventArgs.jqEvent);
                }
            };

            TrackBar.prototype.InvokeDefaultAction = function () {
            };
            return TrackBar;
        })(UI.Control);
        UI.TrackBar = TrackBar;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

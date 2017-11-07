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

module TSUI.UI
{
    export class TrackBar extends Control implements ITrackBar
    {
        OnValueChange: Events.ValueChangeEvent;

        _BarElement: IPanel;
        _GripElement: IPanel;

        constructor()
        {
            super();

            this._rootElement.addClass("TrackBar");

            this._BarElement = new Panel();
            this._BarElement.AddClass("Bar");
            this.Children.Add(this._BarElement);

            this._GripElement = new Panel();
            this._GripElement.AddClass("Grip");
            this.Children.Add(this._GripElement);

            this.OnValueChange = new Events.ValueChangeEvent();

            this._GripElement.OnMouseDown.Attach(new Events.MouseDownEventHandler(this._Grip_OnMouseDown, this));

            this._MouseUpHandler = new Events.MouseUpEventHandler(this._Grip_OnMouseUp, this);
            this._MouseMoveHandler = new Events.MouseMoveEventHandler(this._Grip_OnMouseMove, this);

            this.OnKeyDown.Attach(new Events.KeyDownEventHandler(this._This_OnKeyDown, this));

            this.OnClick.Attach(new Events.ClickEventHandler(this._This_OnClick, this));

            this.Focusable(true);
        }

        _Grip_Dragging: boolean = false;
        _Mode: TrackBarModes = TrackBarModes.Discrete;
        Mode(value: TrackBarModes = null): TrackBarModes
        {
            if (value !== null)
            {
                this._Mode = value;
            }
            return this._Mode;
        }
        _Max: number = 100;
        Max(value: number = null): number
        {
            if (value !== null)
            {
                this._Max = value;

                this.Value(this.Value());
            }
            return this._Max;
        }
        _Min: number = 0;
        Min(value: number = null): number
        {
            if (value !== null)
            {
                this._Min = value;

                this.Value(this.Value());
            }
            return this._Min;
        }
        _Divisions: number = 10;        
        Divisions(value: number = null): number
        {
            if (value !== null)
            {
                this._Divisions = value;
            }
            return this._Divisions;
        }
        _Value: number = 0;        
        Value(value: number = null): number
        {
            if (value !== null)
            {
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
                this._GripElement.Left(new CSSNumber(gripX));

                if (oldVal !== value)
                {
                    this.OnValueChange.Invoke(new Events.ValueChangeEventArgs(this));
                }
            }
            return this._Value;
        }

        _MouseUpHandler: Events.MouseUpEventHandler;
        _MouseMoveHandler: Events.MouseMoveEventHandler;

        _Grip_OnMouseDown(eventArgs: Events.MouseDownEventArgs): void
        {
            this._Grip_Dragging = true;
            StopEvent(eventArgs.jqEvent);
            this._GripElement.OnMouseUp.Attach(this._MouseUpHandler);
            this._GripElement.OnMouseMove.Attach(this._MouseMoveHandler);
            this.Focus();
        }
        _Grip_OnMouseUp(eventArgs: Events.MouseUpEventArgs): void
        {
            if (this._Grip_Dragging)
            {
                this._Grip_Dragging = false;
                StopEvent(eventArgs.jqEvent);
                this._GripElement.OnMouseUp.Detach(this._MouseUpHandler);
                this._GripElement.OnMouseMove.Detach(this._MouseMoveHandler);
            }
        }
        _Grip_OnMouseMove(eventArgs: Events.MouseMoveEventArgs): void
        {
            if (this._Grip_Dragging)
            {
                var barLeft = this._rootElement.offset().left;
                var dist = eventArgs.jqEvent.pageX - barLeft;
                var width = this.ActualWidth();
                var range = this._Max - this._Min;
                var distPerc = dist / width;
                var val = this._Min + (range * distPerc);
                switch (this._Mode)
                {
                    case TrackBarModes.Continuous:
                        //No change
                        break;
                    case TrackBarModes.Discrete:
                        var divionVals = range / this._Divisions;
                        val = roundTo(val, divionVals);
                        break;
                }
                
                this.Value(val);
                StopEvent(eventArgs.jqEvent);
            }
        }

        _This_OnClick(eventArgs: Events.ClickEventArgs): void
        {
            var dist = eventArgs.jqEvent.pageX - this._rootElement.offset().left;
            var width = this.ActualWidth();
            var range = this._Max - this._Min;
            var distPerc = dist / width;
            var val = this._Value;
            var mouseVal = this._Min + (range * distPerc);
            switch (this._Mode)
            {
                case TrackBarModes.Continuous:
                    val = mouseVal;
                    break;
                case TrackBarModes.Discrete:
                    var divisionVals = range / this._Divisions;
                    if (mouseVal > val)
                    {
                        val += divisionVals;
                    }
                    else
                    {
                        val -= divisionVals;
                    }
                    break;
            }
            this.Value(val);
            StopEvent(eventArgs.jqEvent);
        }

        _This_OnKeyDown(eventArgs: Events.KeyDownEventArgs)
        {
            if (eventArgs.jqEvent.keyCode === 37)
            {
                var width = this.ActualWidth();
                var range = this._Max - this._Min;
                var val = this._Value;
                switch (this._Mode)
                {
                    case TrackBarModes.Continuous:
                        val -= range / 100;
                        break;
                    case TrackBarModes.Discrete:
                        var divisionVals = range / this._Divisions;
                        val -= divisionVals;
                        break;
                }
                this.Value(val);
                StopEvent(eventArgs.jqEvent);
            }
            else if (eventArgs.jqEvent.keyCode === 39)
            {
                var width = this.ActualWidth();
                var range = this._Max - this._Min;
                var val = this._Value;
                switch (this._Mode)
                {
                    case TrackBarModes.Continuous:
                        val += range / 100;
                        break;
                    case TrackBarModes.Discrete:
                        var divisionVals = range / this._Divisions;
                        val += divisionVals;
                        break;
                }
                this.Value(val);
                StopEvent(eventArgs.jqEvent);
            }
        }

        InvokeDefaultAction(): void
        {
        }
    }
}
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

module TSUI.UI
{
    export class SplitContainer extends Control implements ISplitContainer
    {
        Panel1: IPanel;
        Panel2: IPanel;

        _MainSplitterGrip_Dragging; boolean = false;
        MainSplitterGrip: ISplitterGrip;
        
        constructor()
        {
            super();

            this._rootElement.addClass("SplitContainer");

            this.Panel1 = new Panel();
            this.Panel2 = new Panel();

            this.Panel1.AddClass("Panel1");
            this.Panel2.AddClass("Panel2");

            this.Children.Add(this.Panel1);
            this.Children.Add(this.Panel2);
        
            this.MainSplitterGrip = new SplitterGrip();
            this.Children.Add(this.MainSplitterGrip);

            this.MainSplitterGrip.OnMouseDown.Attach(new Events.MouseDownEventHandler(this.MainSplitterGrip_OnMouseDown, this));
            this._MainSplitterGrip_MouseUpHandler = new Events.MouseUpEventHandler(this.MainSplitterGrip_OnMouseUp, this);
            this._MainSplitterGrip_MouseMoveHandler = new Events.MouseMoveEventHandler(this.MainSplitterGrip_OnMouseMove, this);

            this.MainSplitterGrip.OnSplitterMove.Attach(new Events.SplitterMoveEventHandler(this.MainSplitterGrip_OnSplitterMove, this));
            this.MainSplitterGrip.OnOrientationChanged.Attach(new Events.OrientationChangedEventHandler(this.MainSplitterGrip_OnOrientationChanged, this));

            this.OnResize.Attach(new Events.ResizeEventHandler(this._This_Resized, this));

            this.Width(new CSSNumber(100, "%"));
            this.Height(new CSSNumber(100, "%"));
        }

        ConstructDOM(parent: JQuery, onComplete:()=>void = null): void
        {
            var _this = this;
            super.ConstructDOM(parent, function ()
            {
                _this.MainSplitterGrip.Orientation(_this.MainSplitterGrip.Orientation());
                _this.MainSplitterGrip.SplitterDistance(_this.MainSplitterGrip.SplitterDistance());
                _this.MainSplitterGrip.SplitterWidth(_this.MainSplitterGrip.SplitterWidth());

                if (onComplete)
                {
                    onComplete();
                }
            });
        }
        
        Orientation(value?: SplitterGrip_Orientations): SplitterGrip_Orientations
        {
            return this.MainSplitterGrip.Orientation(value);
        }

        _MainSplitterGrip_MouseUpHandler: Events.MouseUpEventHandler;
        _MainSplitterGrip_MouseMoveHandler: Events.MouseMoveEventHandler;

        MainSplitterGrip_OnMouseDown(eventArgs: Events.MouseDownEventArgs)
        {
            this._MainSplitterGrip_Dragging = true;
            StopEvent(eventArgs.jqEvent);
            
            this.MainSplitterGrip.OnMouseUp.Attach(this._MainSplitterGrip_MouseUpHandler);
            this.MainSplitterGrip.OnMouseMove.Attach(this._MainSplitterGrip_MouseMoveHandler);
        }
        MainSplitterGrip_OnMouseUp(eventArgs: Events.MouseUpEventArgs)
        {
            if (this._MainSplitterGrip_Dragging)
            {
                this._MainSplitterGrip_Dragging = false;
                StopEvent(eventArgs.jqEvent);
                
            this.MainSplitterGrip.OnMouseUp.Detach(this._MainSplitterGrip_MouseUpHandler);
            this.MainSplitterGrip.OnMouseMove.Detach(this._MainSplitterGrip_MouseMoveHandler);
            }
        }
        MainSplitterGrip_OnMouseMove(eventArgs: Events.MouseMoveEventArgs)
        {
            if (this._MainSplitterGrip_Dragging)
            {
                if (!this.MainSplitterGrip.ActuallyEnabled())
                {
                    this._MainSplitterGrip_Dragging = false;
                }
                else
                {
                    var width = this.ActualWidth();
                    var height = this.ActualHeight();
                    var xPerc = ((eventArgs.jqEvent.pageX - this.PageLeft()) / width) * 100;
                    var yPerc = ((eventArgs.jqEvent.pageY - this.PageTop()) / height) * 100;

                    if (this.MainSplitterGrip.Orientation() === SplitterGrip_Orientations.Horizontal)
                    {
                        this.MainSplitterGrip.SplitterDistance(yPerc);
                    }
                    else
                    {
                        this.MainSplitterGrip.SplitterDistance(xPerc);
                    }
                }
                StopEvent(eventArgs.jqEvent);
            }
        }
        MainSplitterGrip_OnSplitterMove(eventArgs: Events.SplitterMoveEventArgs)
        {
            var perc = this.MainSplitterGrip.SplitterDistance();
            var OK = true;
            if (this.MainSplitterGrip.Orientation() === SplitterGrip_Orientations.Horizontal)
            {
                var minHeight = this.Panel1.MinHeight();
                var minHeightVal = minHeight.Units === "px" ? (minHeight.Value / this.ActualHeight()) * 100 : minHeight.Value;
                if (!minHeight.Auto && perc < minHeightVal)
                {
                    perc = minHeightVal;
                    this.MainSplitterGrip.Top(new CSSNumber(perc, "%"));
                    OK = false;
                }

                if (OK)
                {
                    minHeight = this.Panel2.MinHeight();
                    minHeightVal = minHeight.Units === "px" ? (minHeight.Value / this.ActualHeight()) * 100 : minHeight.Value;
                    minHeightVal = 100 - minHeightVal;
                    if (!minHeight.Auto && perc > minHeightVal)
                    {
                        perc = minHeightVal;
                        this.MainSplitterGrip.Top(new CSSNumber(perc, "%"));
                        OK = false;
                    }
                }
            }
            else
            {
                var minWidth = this.Panel1.MinWidth();
                var minWidthVal = minWidth.Units === "px" ? (minWidth.Value / this.ActualWidth()) * 100 : minWidth.Value;
                if (!minWidth.Auto && perc < minWidthVal)
                {
                    perc = minWidthVal;
                    this.MainSplitterGrip.Left(new CSSNumber(perc, "%"));
                    OK = false;
                }

                if (OK)
                {
                    minWidth = this.Panel2.MinWidth();
                    minWidthVal = minWidth.Units === "px" ? (minWidth.Value / this.ActualWidth()) * 100 : minWidth.Value;
                    minWidthVal = 100 - minWidthVal;
                    if (!minWidth.Auto && perc > minWidthVal)
                    {
                        perc = minWidthVal;
                        this.MainSplitterGrip.Left(new CSSNumber(perc, "%"));
                        OK = false;
                    }
                }
            }


            if (this.MainSplitterGrip.Orientation() === SplitterGrip_Orientations.Horizontal)
            {
                this.Panel1.Height(new CSSNumber(perc, "%"));
                this.Panel2.Height(new CSSNumber(100 - perc, "%"));
                this.Panel2.Top(new CSSNumber(perc, "%"));
            }
            else
            {
                this.Panel1.Width(new CSSNumber(perc, "%"));
                this.Panel2.Width(new CSSNumber(100 - perc, "%"));
                this.Panel2.Left(new CSSNumber(perc, "%"));
            }
        }
        MainSplitterGrip_OnOrientationChanged(eventArgs: Events.OrientationChangedEventArgs)
        {
            if (this.MainSplitterGrip.Orientation() === SplitterGrip_Orientations.Horizontal)
            {
                this.Panel1.Width(new CSSNumber(100, "%"));
                this.Panel2.Width(new CSSNumber(100, "%"));
                this.Panel1.Left(new CSSNumber(0));
                this.Panel2.Left(new CSSNumber(0));
            }
            else
            {
                this.Panel1.Height(new CSSNumber(100, "%"));
                this.Panel2.Height(new CSSNumber(100, "%"));
                this.Panel1.Top(new CSSNumber(0));
                this.Panel2.Top(new CSSNumber(0));
            }
            this.MainSplitterGrip.SplitterDistance(this.MainSplitterGrip.SplitterDistance());
        }

        _This_Resized(eventArgs: Events.ResizeEventArgs)
        {
            this.MainSplitterGrip.SplitterDistance(this.MainSplitterGrip.SplitterDistance());
        }
    }
}
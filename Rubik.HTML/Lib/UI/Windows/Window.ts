/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IWindow.d.ts" />
/// <reference path="../Button.ts" />
/// <reference path="../Panel.ts" />
/// <reference path="../Control.ts" />

module Rubik.UI
{
    export class Window extends ContentControl implements IWindow
    {
        MainTitleBar: ITitleBar;
        MainResizeGrip: IResizeGrip;
        ContentPanel: IPanel;
        CloseButton: IButton;
        
        OnClose: Events.CloseEvent;

        _DraggingEnabled: boolean = true;
        _DraggingWindow: boolean = false;
        _DraggingOffset: { x: number; y: number; } = null;

        _ResizingEnabled: boolean = true;
        _ResizingWindow: boolean = false;
        _ResizingOffset: { x: number; y: number; } = null;
        
        DestroyDOMOnClose: boolean = true;

        constructor()
        {
            super();

            //this.OptimiseConstructForGraphics = true;

            this.EnableSelection();

            this._rootElement.addClass("Window");
            this.ApplyStyle("visibility", "hidden");

            this.OnClose = new Events.CloseEvent();

            this.MainTitleBar = new TitleBar();
            this.Children.Add(this.MainTitleBar);
            
            this._MainTitleBar_MouseUpHandler = new Events.MouseUpEventHandler(this._MainTitleBar_OnMouseUp, this);
            this._MainTitleBar_MouseMoveHandler = new Events.MouseMoveEventHandler(this._MainTitleBar_OnMouseMove, this);
            this.MainTitleBar.OnMouseDown.Attach(new Events.MouseDownEventHandler(this._MainTitleBar_OnMouseDown, this));
            this.MainTitleBar.OnMouseUp.Attach(this._MainTitleBar_MouseUpHandler);
            this.MainTitleBar.OnMouseMove.Attach(this._MainTitleBar_MouseMoveHandler);
        
            this.CloseButton = new Button();
            this.CloseButton.AddClass("WindowCloseButton");
            this.CloseButton.Text("X");
            this.Children.Add(this.CloseButton);

            this.ContentPanel = new Panel();
            this.Children.Add(this.ContentPanel);
            
            this.MainResizeGrip = new ResizeGrip();
            this.Children.Add(this.MainResizeGrip);

            this._MainResizeGrip_MouseUpHandler = new Events.MouseUpEventHandler(this._MainResizeGrip_OnMouseUp, this);
            this._MainResizeGrip_MouseMoveHandler = new Events.MouseMoveEventHandler(this._MainResizeGrip_OnMouseMove, this);
            this.MainResizeGrip.OnMouseDown.Attach(new Events.MouseDownEventHandler(this._MainResizeGrip_OnMouseDown, this));
            
            this.CloseButton.OnClick.Attach(new Events.ClickEventHandler(this._CloseButton_Click, this));
        }
        
        _MainTitleBar_MouseUpHandler: Events.MouseUpEventHandler;
        _MainTitleBar_MouseMoveHandler: Events.MouseMoveEventHandler;

        _MainResizeGrip_MouseUpHandler: Events.MouseUpEventHandler;
        _MainResizeGrip_MouseMoveHandler: Events.MouseMoveEventHandler;

        _MainTitleBar_OnMouseDown(eventArgs: Events.MouseDownEventArgs)
        {
            if (this._DraggingEnabled)
            {
                this._DraggingWindow = true;
                this.Enabled(false);
                
                if (CurrentFocusedControl !== null)
                {
                    CurrentFocusedControl.Blur();
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

                StopEvent(eventArgs.jqEvent);
            
                this.MainTitleBar.OnMouseUp.Attach(this._MainTitleBar_MouseUpHandler);
                this.MainTitleBar.OnMouseMove.Attach(this._MainTitleBar_MouseMoveHandler);
            }
        }
        _MainTitleBar_OnMouseUp(eventArgs: Events.MouseUpEventArgs)
        {
            if (this._DraggingWindow)
            {
                this._DraggingWindow = false;
                this.Enabled(true);
                
                $("*").css({
                    cursor: ""
                });

                StopEvent(eventArgs.jqEvent);
            
                this.MainTitleBar.OnMouseUp.Detach(this._MainTitleBar_MouseUpHandler);
                this.MainTitleBar.OnMouseMove.Detach(this._MainTitleBar_MouseMoveHandler);
            }
        }
        _MainTitleBar_OnMouseMove(eventArgs: Events.MouseMoveEventArgs)
        {
            if (this._DraggingWindow)
            {
                if (!this._DraggingEnabled)
                {
                    this._DraggingWindow = false;
                }
                else
                {
                    var y = eventArgs.jqEvent.pageY - this._DraggingOffset.y;
                    var x = eventArgs.jqEvent.pageX - this._DraggingOffset.x;

                    var parentWidth = this._rootElement.parent().width();
                    var parentHeight = this._rootElement.parent().height();

                    y = Math.min(Math.max(y, 0), parentHeight - this.ActualHeight());
                    x = Math.min(Math.max(x, 0), parentWidth - this.ActualWidth());

                    this.Top((y / parentHeight) * 100 + "%");
                    this.Left((x / parentWidth) * 100 +  "%");
                }

                StopEvent(eventArgs.jqEvent);
            }
        }

        _MainResizeGrip_OnMouseDown(eventArgs: Events.MouseDownEventArgs)
        {
            if (this._ResizingEnabled)
            {
                this._ResizingWindow = true;
                this.Enabled(false);
                
                if (CurrentFocusedControl !== null)
                {
                    CurrentFocusedControl.Blur();
                }
                
                $("*").css({
                    cursor: "pointer"
                });

                StopEvent(eventArgs.jqEvent);
                
                this.MainResizeGrip.OnMouseUp.Attach(this._MainResizeGrip_MouseUpHandler);
                this.MainResizeGrip.OnMouseMove.Attach(this._MainResizeGrip_MouseMoveHandler);
            }
        }
        _MainResizeGrip_OnMouseUp(eventArgs: Events.MouseUpEventArgs)
        {
            if (this._ResizingWindow)
            {
                this._ResizingWindow = false;
                this.Enabled(true);
                
                $("*").css({
                    cursor: ""
                });

                StopEvent(eventArgs.jqEvent);
                
                this.MainResizeGrip.OnMouseUp.Detach(this._MainResizeGrip_MouseUpHandler);
                this.MainResizeGrip.OnMouseMove.Detach(this._MainResizeGrip_MouseMoveHandler);
            }
        }
        _MainResizeGrip_OnMouseMove(eventArgs: Events.MouseMoveEventArgs)
        {
            if (this._ResizingWindow)
            {
                if (!this._ResizingEnabled)
                {
                    this._ResizingWindow = false;
                }
                else
                {
                    var height = eventArgs.jqEvent.pageY  - this.PageTop() + 5;
                    var width = eventArgs.jqEvent.pageX - this.PageLeft() + 5;

                    height = (height / this._rootElement.parent().height()) * 100;
                    width = (width / this._rootElement.parent().width()) * 100;

                    this.Height(height + "%");
                    this.Width(width + "%");
                }
                
                StopEvent(eventArgs.jqEvent);
            }
        }
        
        _CloseButton_Click(eventArgs: Events.ClickEventArgs)
        {
            var __this = this;
            this.Hide(function ()
            {
                if (__this.DestroyDOMOnClose)
                {
                    __this.DestroyDOM();
                }
            });
        }

        DragEnabled(value: boolean = null): boolean
        {
            if (value !== null)
            {
                this._DraggingEnabled = value;

                this.MainTitleBar.Draggable(this._DraggingEnabled);
            }
            return this._DraggingEnabled;
        }
        ResizeEnabled(value: boolean = null): boolean
        {
            if (value !== null)
            {
                this._ResizingEnabled = value;

                this.MainResizeGrip.Visible(this._ResizingEnabled);
            }
            return this._ResizingEnabled;
        }

        Title(value: string = null): string
        {
            this.MainTitleBar.Title(value);
            return this.MainTitleBar.Title();
        }
        
        Show(callback: ()=>void = null, animator: Animation.IAnimator = new Animation.AppWindowAnimator()): void
        {
            OpenWindows++;
            this.ApplyStyle("z-index", (OpenWindows * 10).toString());
            super.Show(callback, animator);
        }
        Hide(callback: ()=>void = null, animator: Animation.IAnimator = new Animation.AppWindowAnimator()): void
        {
            OpenWindows--;
            var __this = this;
            super.Hide(function ()
            {
                __this.ApplyStyle("z-index", "");
                
                __this.OnClose.Invoke(new Events.CloseEventArgs(this));

                if(callback !== null)
                    callback();
            }, animator);
        }
    }
}
/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Events/Classes/Events.ts" />
/// <reference path="../../Collections/Collections_BuildRefs.d.ts" />
/// <reference path="../CSSNumber.ts" />
/// <reference path="../Interfaces/IControl.d.ts" />
/// <reference path="../../Animation/FadeAnimator.ts" />
/// <reference path="../UI Static.ts" />
/// <reference path="../../Animation/Animation.ts" />
/// <reference path="../../Animation/IAnimator.d.ts" />
/// <reference path="../../../Definitions/jquery.d.ts" />

module TSUI.UI
{
    var __UIDGenerator = 0;
    export class Control implements IControl
    {
        __UID: number = __UIDGenerator++;
        
        _rootElement: JQuery = null;
        AnimationElement(): JQuery
        {
            return this._rootElement;
        }

        OnClick: Events.ClickEvent = new Events.ClickEvent();
        OnMouseDown: Events.MouseDownEvent = new Events.MouseDownEvent();
        OnMouseUp: Events.MouseUpEvent = new Events.MouseUpEvent();
        OnMouseMove: Events.MouseMoveEvent = new Events.MouseMoveEvent();
        OnResize: Events.ResizeEvent = new Events.ResizeEvent();
        OnMove: Events.MoveEvent = new Events.MoveEvent();
        OnShow: Events.ShowEvent = new Events.ShowEvent();
        OnHide: Events.HideEvent = new Events.HideEvent();
        OnFocus: Events.FocusEvent = new Events.FocusEvent();
        OnBlur: Events.BlurEvent = new Events.BlurEvent();
        OnKeyDown: Events.KeyDownEvent = new Events.KeyDownEvent();
        OnKeyPress: Events.KeyPressEvent = new Events.KeyPressEvent();
        OnKeyUp: Events.KeyUpEvent = new Events.KeyUpEvent();

        static OnClickEventName: string = "click";
        static OnMouseDownEventName: string = "mousedown touchstart";
        static OnMouseUpEventName: string = "mouseup touchend";
        static OnMouseMoveEventName: string = "mousemove touchmove";

        TargetDocumentFor_MouseUp: boolean = true;
        TargetDocumentFor_MouseMove: boolean = true;

        Children: Collections.IList<IControl> = new Collections.List<IControl>();

        _Enabled: boolean = true;

        OptimiseConstructForGraphics: boolean = false;
        static OptimiseConstructForGraphics_DelayTime = 30;

        constructor()
        {
            this.OnClick.OnHandlerAttachedContext = this.OnClick.OnHandlerDettachedContext = this;
            this.OnClick.OnHandlerAttached = this.OnClick.OnHandlerDettached = this._OnOnClickChanged;
            this.OnMouseDown.OnHandlerAttachedContext = this.OnMouseDown.OnHandlerDettachedContext = this;
            this.OnMouseDown.OnHandlerAttached = this.OnMouseDown.OnHandlerDettached = this._OnOnMouseDownChanged;
            this.OnMouseUp.OnHandlerAttachedContext = this.OnMouseUp.OnHandlerDettachedContext = this;
            this.OnMouseUp.OnHandlerAttached = this.OnMouseUp.OnHandlerDettached = this._OnOnMouseUpChanged;
            this.OnMouseMove.OnHandlerAttachedContext = this.OnMouseMove.OnHandlerDettachedContext = this;
            this.OnMouseMove.OnHandlerAttached = this.OnMouseMove.OnHandlerDettached = this._OnOnMouseMoveChanged;
            this.OnResize.OnHandlerAttachedContext = this.OnResize.OnHandlerDettachedContext = this;
            this.OnResize.OnHandlerAttached = this.OnResize.OnHandlerDettached = this._OnOnResizeChanged;
            this.OnMove.OnHandlerAttachedContext = this.OnMove.OnHandlerDettachedContext = this;
            this.OnMove.OnHandlerAttached = this.OnMove.OnHandlerDettached = this._OnOnMoveChanged;
            this.OnKeyPress.OnHandlerAttachedContext = this.OnKeyPress.OnHandlerDettachedContext = this;
            this.OnKeyPress.OnHandlerAttached = this.OnKeyPress.OnHandlerDettached = this._OnOnKeyPressChanged;
            this.OnKeyUp.OnHandlerAttachedContext = this.OnKeyUp.OnHandlerDettachedContext = this;
            this.OnKeyUp.OnHandlerAttached = this.OnKeyUp.OnHandlerDettached = this._OnOnKeyUpChanged;

            this.OnResize.Attach(new Events.ResizeEventHandler(this._This_Resized_ChainHandler, this));
            this.OnMove.Attach(new Events.MoveEventHandler(this._This_Moved_ChainHandler, this));

            this._rootElement = $("<div class=\"Control\">");
            this.DisableSelection();

            this.Children.OnModified.Attach(new Events.CollectionModifiedEventHandler<IControl>(this._OnChildren_Modified, this));

            this.DefaultGroup = new Data.BindingGroup();
            this.Bindings.BindingGroups.Add(this.DefaultGroup);
        }

        _RestoreThis(jqEvent: JQueryEventObject)
        {
            return jqEvent.data._callback.call(jqEvent.data._this, jqEvent);
        }
        _OnClickAttached: boolean = false;
        _OnOnClickChanged()
        {
            if (this.DOMConstructed)
            {
                if (this.OnClick.Handlers.length > 0 && !this._OnClickAttached)
                {
                    this._OnClickAttached = true;
                    this._rootElement.on(Control.OnClickEventName, { _this: this, _callback: this._OnClick }, this._RestoreThis);
                }
                else if(this._OnClickAttached)
                {
                    this._OnClickAttached = false;
                    this._rootElement.off(Control.OnClickEventName, this._RestoreThis);
                }
            }
        }
        _OnClick(jqEvent: JQueryEventObject)
        {
            if (this.ActuallyEnabled())
            {
                this.OnClick.Invoke(new Events.ClickEventArgs(this, jqEvent));
            }
        }
        _OnMouseDownAttached: boolean = false;
        _OnOnMouseDownChanged()
        {
            if (this.DOMConstructed)
            {
                if (this.OnMouseDown.Handlers.length > 0 && !this._OnMouseDownAttached)
                {
                    this._OnMouseDownAttached = true;
                    this._rootElement.on(Control.OnMouseDownEventName, { _this: this, _callback: this._OnMouseDown }, this._RestoreThis);
                }
                else if(this._OnMouseDownAttached)
                {
                    this._OnMouseDownAttached = false;
                    this._rootElement.off(Control.OnMouseDownEventName, this._RestoreThis);
                }
            }
        }
        _OnMouseDown(jqEvent: JQueryEventObject)
        {
            if (this.ActuallyEnabled())
            {
                jqEvent = standardiseEvent(jqEvent);
                this.OnMouseDown.Invoke(new Events.MouseDownEventArgs(this, jqEvent));
            }
        }
        _OnMouseUpAttached: boolean = false;
        _OnMouseUp_GlobalHandler: Events.MouseUpEventHandler = null;
        _OnOnMouseUpChanged()
        {
            if (this.DOMConstructed)
            {
                if (this.TargetDocumentFor_MouseUp)
                {
                    if (this.OnMouseUp.Handlers.length > 0 && !this._OnMouseUpAttached)
                    {
                        this._OnMouseUpAttached = true;
                        this._OnMouseUp_GlobalHandler = new Events.MouseUpEventHandler(function (args: Events.MouseUpEventArgs)
                        {
                            this.OnMouseUp.Invoke(new Events.MouseUpEventArgs(this, args.jqEvent));
                        }, this);
                        Global_MouseUpEvent.Attach(this._OnMouseUp_GlobalHandler);
                    }
                    else if(this._OnMouseUpAttached)
                    {
                        this._OnMouseUpAttached = false;
                        Global_MouseUpEvent.Detach(this._OnMouseUp_GlobalHandler);
                    }
                }
                else
                {
                    if (this.OnMouseUp.Handlers.length > 0 && !this._OnMouseUpAttached)
                    {
                        this._OnMouseUpAttached = true;
                        this._rootElement.on(Control.OnMouseUpEventName, { _this: this, _callback: this._OnMouseUp }, this._RestoreThis);
                    }
                    else if (this._OnMouseUpAttached)
                    {
                        this._OnMouseUpAttached = false;
                        this._rootElement.off(Control.OnMouseUpEventName, this._RestoreThis);
                    }
                }
            }
        }
        _OnMouseUp(jqEvent: JQueryEventObject)
        {
            if (this.ActuallyEnabled())
            {
                this.OnMouseUp.Invoke(new Events.MouseUpEventArgs(this, jqEvent));
            }
        }
        _OnMouseMoveAttached: boolean = false;
        _OnMouseMove_GlobalHandler: Events.MouseMoveEventHandler = null;
        _OnOnMouseMoveChanged()
        {
            if (this.DOMConstructed)
            {
                if (this.TargetDocumentFor_MouseMove)
                {
                    if (this.OnMouseMove.Handlers.length > 0 && !this._OnMouseMoveAttached)
                    {
                        this._OnMouseMoveAttached = true;
                        this._OnMouseMove_GlobalHandler = new Events.MouseMoveEventHandler(function (args: Events.MouseMoveEventArgs)
                        {
                            this.OnMouseMove.Invoke(new Events.MouseMoveEventArgs(this, args.jqEvent));
                        }, this);
                        Global_MouseMoveEvent.Attach(this._OnMouseMove_GlobalHandler);
                    }
                    else if(this._OnMouseMoveAttached)
                    {
                        this._OnMouseMoveAttached = false;
                        Global_MouseMoveEvent.Detach(this._OnMouseMove_GlobalHandler);
                    }
                }
                else
                {
                    if (this.OnMouseMove.Handlers.length > 0 && !this._OnMouseMoveAttached)
                    {
                        this._OnMouseMoveAttached = true;
                        this._rootElement.on(Control.OnMouseMoveEventName, { _this: this, _callback: this._OnMouseMove }, this._RestoreThis);
                    }
                    else if (this._OnMouseMoveAttached)
                    {
                        this._OnMouseMoveAttached = false;
                        this._rootElement.off(Control.OnMouseMoveEventName, this._RestoreThis);
                    }
                }
            }
        }
        _OnMouseMove(jqEvent: JQueryEventObject)
        {
            if (this.ActuallyEnabled())
            {
                this.OnMouseMove.Invoke(new Events.MouseMoveEventArgs(this, jqEvent));
            }
        }
        _OnResizeAttached: boolean = false;
        _OnOnResizeChanged()
        {
            if (this.DOMConstructed)
            {
                if (this.OnResize.Handlers.length > 0 && !this._OnResizeAttached)
                {
                    this._OnResizeAttached = true;
                    $(window).on("resize", { _this: this, _callback: this._OnResize }, this._RestoreThis);
                }
                else if(this._OnResizeAttached)
                {
                    this._OnResizeAttached = false;
                    $(window).off("resize", this._RestoreThis);
                }
            }
        }
        _OnResize(jqEvent: JQueryEventObject)
        {
            this.OnResize.Invoke(new Events.ResizeEventArgs(this, jqEvent));
        }
        _OnMoveAttached: boolean = false;
        _OnOnMoveChanged()
        {
            if (this.DOMConstructed)
            {
                if (this.OnMove.Handlers.length > 0 && !this._OnMoveAttached)
                {
                    this._OnMoveAttached = true;
                    $(window).on("resize", { _this: this, _callback: this._OnMove }, this._RestoreThis);
                }
                else if(this._OnMoveAttached)
                {
                    this._OnMoveAttached = false;
                    $(window).off("resize", this._RestoreThis);
                }
            }
        }
        _OnMove(jqEvent: JQueryEventObject)
        {
            this.OnMove.Invoke(new Events.MoveEventArgs(this, jqEvent));
        }
        _OnKeyPressAttached: boolean = false;
        _OnOnKeyPressChanged()
        {
            if (this.DOMConstructed)
            {
                if (this.OnKeyPress.Handlers.length > 0 && !this._OnKeyPressAttached)
                {
                    this._OnKeyPressAttached = true;
                    this._rootElement.on("keypress", { _this: this, _callback: this._OnKeyPress }, this._RestoreThis);
                }
                else if(this._OnKeyPressAttached)
                {
                    this._OnKeyPressAttached = false;
                    this._rootElement.off("keypress", this._RestoreThis);
                }
            }
        }
        _OnKeyPress(jqEvent: JQueryEventObject)
        {
            if (this.ActuallyEnabled())
            {
                this.OnKeyPress.Invoke(new Events.KeyPressEventArgs(this, jqEvent));
            }
        }
        _OnKeyUpAttached: boolean = false;
        _OnOnKeyUpChanged()
        {
            if (this.DOMConstructed)
            {
                if (this.OnKeyUp.Handlers.length > 0 && !this._OnKeyUpAttached)
                {
                    this._OnKeyUpAttached = true;
                    this._rootElement.on("keyup", { _this: this, _callback: this._OnKeyUp }, this._RestoreThis);
                }
                else if(this._OnKeyUpAttached)
                {
                    this._OnKeyUpAttached = false;
                    this._rootElement.off("keyup", this._RestoreThis);
                }
            }
        }
        _OnKeyUp(jqEvent: JQueryEventObject)
        {
            if (this.ActuallyEnabled())
            {
                this.OnKeyUp.Invoke(new Events.KeyUpEventArgs(this, jqEvent));
            }
        }

        _OnFocus(jqEvent: JQueryEventObject)
        {
            if (!this.ActuallyEnabled() || !this.ActuallyVisible())
            {
                StopEvent(jqEvent);
                this.Blur();
            }
            else if (!this.Focusable())
            {
                this.Blur();
            }
            else
            {
                CurrentFocusedControl = this;
                this.AddClass("Focused");
                if (JustUsedTabKeyTime + 50 > Date.now())
                {
                    this.AddClass("TabFocused");
                }
                this.OnFocus.Invoke(new Events.FocusEventArgs(this, jqEvent));
            }
        }
        _OnBlur(jqEvent: JQueryEventObject)
        {
            if (CurrentFocusedControl == this)
            {
                CurrentFocusedControl = null;
            }
            this.RemoveClass("Focused");
            this.RemoveClass("TabFocused");
            this.OnBlur.Invoke(new Events.BlurEventArgs(this, jqEvent));
        }
        _OnKeyDown(jqEvent: JQueryEventObject)
        {
            if (jqEvent.keyCode === 13)
            {
                StopEvent(jqEvent);
                this.InvokeDefaultAction();
            }
            else
            {
                OnKeyDown_Global_First(jqEvent);
                this.OnKeyDown.Invoke(new Events.KeyDownEventArgs(this, jqEvent));
                return OnKeyDown_Global_Last(jqEvent);
            }
        }


        _OnChildren_Modified(eventArgs: Events.CollectionModifiedEventArgs<IControl>): void
        {
            if (this.DOMConstructed)
            {
                switch (eventArgs.Modification)
                {
                    case Events.CollectionModifications.Add:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++)
                        {
                            eventArgs.ModifiedElements.ElementAt(i).ConstructDOM(this._rootElement);
                        }
                        break;
                    case Events.CollectionModifications.Remove:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++)
                        {
                            eventArgs.ModifiedElements.ElementAt(i).DestroyDOM();
                        }
                        break;
                    case Events.CollectionModifications.Reorder:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++)
                        {
                            var cObj = eventArgs.ModifiedElements.ElementAt(i);
                            cObj.DestroyDOM();
                            cObj.ConstructDOM(this._rootElement);
                        }
                        break;
                }
            }
        }

        _This_Resized_ChainHandler_Timeout: number = -1;
        _This_Resized_ChainHandler(eventArgs: Events.ResizeEventArgs)
        {
            if (this._This_Resized_ChainHandler_Timeout === -1)
            {
                var _this = this;
                this._This_Resized_ChainHandler_Timeout = setTimeout(function ()
                {
                    for (var i = 0; i < _this.Children.Count(); i++)
                    {
                        _this.Children.ElementAt(i).OnResize.Invoke(eventArgs);
                    }
                    _this._This_Resized_ChainHandler_Timeout = -1;
                }, 100);
            }
        }
        _This_Moved_ChainHandler_Timeout: number = -1;
        _This_Moved_ChainHandler(eventArgs: Events.MoveEventArgs)
        {
            if (this._This_Moved_ChainHandler_Timeout === -1)
            {
                var _this = this;
                this._This_Moved_ChainHandler_Timeout = setTimeout(function ()
                {
                    for (var i = 0; i < _this.Children.Count(); i++)
                    {
                        _this.Children.ElementAt(i).OnMove.Invoke(eventArgs);
                    }
                    _this._This_Moved_ChainHandler_Timeout = -1;
                }, 100);
            }
        }

        DOMConstructed: boolean = false;
        ConstructDOM(parent: JQuery, onComplete:()=>void = null): void
        {
            if (!this.DOMConstructed)
            {
                parent.append(this._rootElement);
                this.DOMConstructed = true;
                
                this._OnOnClickChanged();
                this._OnOnKeyPressChanged();
                this._OnOnKeyUpChanged();
                this._OnOnMouseDownChanged();
                this._OnOnMouseMoveChanged();
                this._OnOnMouseUpChanged();
                this._OnOnResizeChanged();
                
                this._rootElement.on("focus", { _this: this, _callback: this._OnFocus }, this._RestoreThis);
                this._rootElement.on("blur", { _this: this, _callback: this._OnBlur }, this._RestoreThis);
                this._rootElement.on("keydown", { _this: this, _callback: this._OnKeyDown }, this._RestoreThis);
            }

            if (!this.OptimiseConstructForGraphics)
            {
                for (var i = 0; i < this.Children.Count(); i++)
                {
                    var child = this.Children.ElementAt(i);
                    child.ConstructDOM(this._rootElement);
                }
                if (onComplete)
                {
                    onComplete();
                }
            }
            else if(this.Children.Count() > 0)
            {
                var i = 0;
                var _this = this;
                var func = function ()
                {
                    var child = _this.Children.ElementAt(i);
                    if (!!child)
                    {
                        child.OptimiseConstructForGraphics = true;
                        child.ConstructDOM(_this._rootElement, function ()
                        {
                            i++;
                            if (i < _this.Children.Count())
                            {
                                setTimeout(func, Control.OptimiseConstructForGraphics_DelayTime);
                            }
                            else if (onComplete)
                            {
                                onComplete();
                            }
                        });
                    }
                    else
                    {
                        i++;
                        if (i < _this.Children.Count())
                        {
                            setTimeout(func, Control.OptimiseConstructForGraphics_DelayTime);
                        }
                        else if (onComplete)
                        {
                            onComplete();
                        }
                    }
                };
                func();
            }
            else if (onComplete)
            {
                onComplete();
            }
        }
        DestroyDOM(): void
        {
            if (this.DOMConstructed)
            {
                this._rootElement.remove();
                this._rootElement.off();
                this._OnClickAttached = false;
                this._OnMouseDownAttached = false;
                this._OnMouseUpAttached = false;
                this._OnMouseMoveAttached = false;
                this._OnResizeAttached = false;
                this._OnKeyPressAttached = false;
                this._OnKeyUpAttached = false;
                this.DOMConstructed = false;
            }

            for (var i = 0; i < this.Children.Count(); i++)
            {
                this.Children.ElementAt(i).DestroyDOM();
            }
        }
        
        ID(value: string = null): string
        {
            if (value !== null)
            {
                this._rootElement.attr("id", value);
            }
            return this._rootElement.attr("id");
        }

        GetStyle(name: string): string
        {
            return this._rootElement.css(name);
        }
        ApplyStyle(name: string, value: string): void
        {
            this._rootElement.css(name, value);
        }
        ApplyStyles(cssProps: any): void
        {
            this._rootElement.css(cssProps);
        }
        AddClass(name: string): void
        {
            if (!this.HasClass(name))
            {
                this._rootElement.addClass(name);
            }
        }
        RemoveClass(name: string): void
        {
            this._rootElement.removeClass(name);
        }
        HasClass(name: string): boolean
        {
            return this._rootElement.hasClass(name);
        }

        BackColor(color: string = null): string
        {
            if (color !== null)
            {
                this._rootElement.css("background-color", color);
            }
            return this._rootElement.css("background-color");
        }
        ForeColor(color?: string): string
        {
            if (color !== null)
            {
                this._rootElement.css("color", color);
            }
            return this._rootElement.css("color");
        }

        CSSNumberStyle(style: string, value: CSSNumber = null): CSSNumber
        {
            if (value !== null)
            {
                this._rootElement.css(style, value.ToString());
            }
            return CSSNumber.FromString(this._rootElement.css(style));
        }

        Width(value: CSSNumber = null): CSSNumber
        {
            var result = this.CSSNumberStyle("width", value);
            if (value !== null)
            {
                this.OnResize.Invoke(new Events.ResizeEventArgs(this, null));
            }
            return result;
        }
        Height(value: CSSNumber = null): CSSNumber
        {
            var result = this.CSSNumberStyle("height", value);
            if (value !== null)
            {
                this.OnResize.Invoke(new Events.ResizeEventArgs(this, null));
            }
            return result;
        }

        ActualWidth(): number
        {
            return this._rootElement.outerWidth();
        }
        ActualHeight(): number
        {
            return this._rootElement.outerHeight();
        }

        Top(value: CSSNumber = null): CSSNumber
        {
            var result = this.CSSNumberStyle("top", value);
            this.OnMove.Invoke(new Events.MoveEventArgs(this, null));
            return result;
        }
        Bottom(value: CSSNumber = null): CSSNumber
        {
            return this.CSSNumberStyle("bottom", value);
        }
        Left(value: CSSNumber = null): CSSNumber
        {
            var result = this.CSSNumberStyle("left", value);
            this.OnMove.Invoke(new Events.MoveEventArgs(this, null));
            return result;
        }
        Right(value: CSSNumber = null): CSSNumber
        {
            return this.CSSNumberStyle("right", value);
        }

        PageTop(): number
        {
            return this._rootElement.offset().top;
        }
        PageLeft(): number
        {
            return this._rootElement.offset().left;
        }
        PageBottom(): number
        {
            return this._rootElement.offset().top + this.ActualHeight();
        }
        PageRight(): number
        {
            return this._rootElement.offset().left + this.ActualWidth();
        }

        MinWidth(value: CSSNumber = null): CSSNumber
        {
            return this.CSSNumberStyle("min-width", value);
        }
        MinHeight(value: CSSNumber = null): CSSNumber
        {
            return this.CSSNumberStyle("min-height", value);
        }
        MaxWidth(value: CSSNumber = null): CSSNumber
        {
            return this.CSSNumberStyle("max-width", value);
        }
        MaxHeight(value: CSSNumber = null): CSSNumber
        {
            return this.CSSNumberStyle("max-height", value);
        }

        _parentVisible: boolean = true;
        SetParentVisible(value: boolean): void
        {
            this._parentVisible = value;

            var len = this.Children.Count();
            for (var i = 0; i < len; i++)
            {
                this.Children.ElementAt(i).SetParentVisible(value);
            }
        }
        ActuallyVisible(): boolean
        {
            return this._parentVisible && this.Visible();
        }
        Visible(value: boolean = null): boolean
        {
            if (value !== null)
            {
                this._rootElement.css({
                    visibility: value ? "" : "hidden",
                    display: ""
                });

                var len = this.Children.Count();
                for (var i = 0; i < len; i++)
                {
                    this.Children.ElementAt(i).SetParentVisible(value);
                }
            }
            return this._rootElement.css("visibility") !== "hidden" && this._rootElement.css("display") !== "none";
        }
        EnableByParent(): void
        {
            this._HandleEnableSet(this._Enabled);
            if (this._Enabled)
            {
                for (var i = 0; i < this.Children.Count(); i++)
                {
                    this.Children.ElementAt(i).EnableByParent();
                }
            }
        }
        DisableByParent(): void
        {
            this._HandleEnableSet(false);
            for (var i = 0; i < this.Children.Count(); i++)
            {
                this.Children.ElementAt(i).DisableByParent();
            }
        }
        _WasSelectionEnabled: boolean = false;
        Enabled(value: boolean = null): boolean
        {
            if (value !== null)
            {
                this._Enabled = value;

                for (var i = 0; i < this.Children.Count(); i++)
                {
                    var elem = this.Children.ElementAt(i);
                    if (this._Enabled)
                    {
                        elem.EnableByParent();
                    }
                    else
                    {
                        elem.DisableByParent();
                    }
                }

                this._HandleEnableSet(this._Enabled);
            }
            return this._Enabled;
        }
        ActuallyEnabled(): boolean
        {
            return !this.HasClass("Disabled");
        }
        _HandleEnableSet(enabled: boolean)
        {
            if (enabled)
            {
                this._rootElement.removeClass("Disabled");
                if (this._WasSelectionEnabled)
                {
                    this.EnableSelection();
                }
            }
            else
            {
                this._rootElement.addClass("Disabled");
                this._WasSelectionEnabled = this._SelectionEnabled;
                this.DisableSelection();
            }

            this._HandleFocusableSet(this.Focusable());
        }
        _HandleFocusableSet(focusable: boolean)
        {
            if (focusable && !this.HasClass("Disabled"))
            {
                this._rootElement.attr("tabindex", this._TabIndex.toString());

                if (this._rootElement.is(":focus") && !this.HasClass("Focused"))
                {
                    this.Focus();
                }
            }
            else
            {
                this._rootElement.removeAttr("tabindex");
            }

            if (!this._Focusable && this._rootElement.is(":focus"))
            {
                this.Blur();
            }
        }
        _Focusable: boolean = false;
        Focusable(value: boolean = null): boolean
        {
            if (value !== null)
            {
                this._Focusable = value;
                if (this._TabIndex === 0)
                {
                    this._TabIndex = ++_currTabIndex;
                }

                this._HandleFocusableSet(value);
            }
            return this._Focusable;
        }
        Show(callback: () => void = null, animator: Animation.IAnimator = new Animation.FadeAnimator()): void
        {
            if (!this.Visible())
            {
                this.Enabled(false);
                var _this = this;
                animator.Show(this, function ()
                {
                    _this.Enabled(true);
                    _this.Visible(true);
                    _this.OnShow.Invoke(new Events.ShowEventArgs(_this));
                    if (callback !== null)
                        callback();
                });
            }
            else if(callback !== null)
            {
                callback();
            }
        }
        Hide(callback: () => void = null, animator: Animation.IAnimator = new Animation.FadeAnimator()): void
        {
            if (this.Visible())
            {
                this.Enabled(false);
                var _this = this;
                setTimeout(function ()
                {
                    animator.Hide(_this, function ()
                    {
                        _this.Enabled(true);
                        _this.Visible(false);
                        _this.OnHide.Invoke(new Events.HideEventArgs(_this));
                        if (callback !== null)
                            callback();
                    });
                }, 200);
            }
            else if(callback !== null)
            {
                callback();
            }
        }

        _SelectionEnabled: boolean = false;
        EnableSelection(): void
        {
            this._rootElement.enableSelection();
            this._SelectionEnabled = true;
        }
        DisableSelection(): void
        {
            this._rootElement.disableSelection();
            this._SelectionEnabled = false;
        }

        Focus(): void
        {
            this._rootElement.focus();
        }
        Blur(): void
        {
            this._rootElement.blur();
        }

        InvokeDefaultAction(): void
        {
        }

        IsRelativeLayout(): boolean
        {
            return this._rootElement.hasClass("RelativeLayout");
        }
        RelativeLayoutOn(): void
        {
            this.AddClass("RelativeLayout");
        }
        RelativeLayoutOff(): void
        {
            this.RemoveClass("RelativeLayout");
        }

        _TabIndex: number = 0;
        TabIndex(value: number = null): number
        {
            if (value !== null)
            {
                this._TabIndex = value;
                if (value === -2)
                {
                    this._rootElement.removeAttr("tabindex");
                }
                else
                {
                    this._rootElement.attr("tabindex", value.toString());
                }
            }
            var retVal = parseInt(this._rootElement.attr("tabindex"), 10);
            if (isNaN(retVal))
            {
                retVal = -2;
            }
            return retVal;
        }


        /** The collection containing all the binding groups (and thus bindings) for this control. */
        Bindings: Data.IBindingCollection = new Data.BindingCollection();
        /** The default binding group for the control. */
        private DefaultGroup: Data.IBindingGroup;
        /** Returns the default binding group for the control. */
        GetDefaultBindingGroup(): Data.IBindingGroup
        {
            return this.DefaultGroup;
        }

        /** Adds a new binding group to Bindings.
            @returns The new binding group.
        */
        AddBindingGroup(updater?: Data.IDataUpdater): Data.IBindingGroup
        {
            var newGroup = new Data.BindingGroup(updater);
            this.Bindings.BindingGroups.Add(newGroup);
            return newGroup;
        }
        /** Removes a binding group from Bindings and calls unbind on all the bindings in the group.
            @param group The group to remove.
            @returns The binding group that was removed.
        */
        RemoveBindingGroup(group: Data.IBindingGroup): Data.IBindingGroup
        {
            var len = group.DataBindings.Count();
            for (var i = 0; i < len; i++)
            {
                this._removeBinding(group, group.DataBindings.ElementAt(i));
            }
            this.Bindings.BindingGroups.Remove(group);

            return group;
        }

        /** Adds a new data binding to the specified group for this control. 
            @param property The control property to bind to.
            @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
            @param accessor The data accessor to use for the new binding.
            @returns The new data binding.
        */
        AddBinding(
            propertyName: string,
            dataProperty: Collections.IList<string>,
            accessor: Data.IDataAccessor<any>): Data.IDataBinding<any, any>;
        /** Adds a new data binding to the specified group for this control. 
            @param property The control property to bind to.
            @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
            @param accessor The data accessor to use for the new binding.
            @param group The binding group to add the new binding to.
            @returns The new data binding.
        */
        AddBinding(
            propertyName: string,
            dataProperty: Collections.IList<string>,
            accessor: Data.IDataAccessor<any>,
            group: Data.IBindingGroup): Data.IDataBinding<any, any>;
        /** Adds a new data binding to the specified group for this control. 
            @param property The control property to bind to.
            @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
            @param accessor The data accessor to use for the new binding.
            @param group The binding group to add the new binding to.
            @param bindingDirection The binding direction to use for the new binding.
            @returns The new data binding.
        */
        AddBinding(
            propertyName: string,
            dataProperty: Collections.IList<string>,
            accessor: Data.IDataAccessor<any>,
            group: Data.IBindingGroup,
            bindingDirection: Data.BindingDirections): Data.IDataBinding<any, any>;
        /** Adds a new data binding to the specified group for this control. 
            @param property The control property to bind to.
            @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
            @param accessor The data accessor to use for the new binding.
            @param group The binding group to add the new binding to.
            @param bindingDirection The binding direction to use for the new binding.
            @param adapter The data adapter to use for the new binding.
            @returns The new data binding.
        */
        AddBinding(
            propertyName: string,
            dataProperty: Collections.IList<string>,
            accessor: Data.IDataAccessor<any>,
            group: Data.IBindingGroup,
            bindingDirection: Data.BindingDirections,
            adapter: Data.IDataAdapter<any, any>): Data.IDataBinding<any, any>;
        
        /** Adds a new data binding to the specified group for this control. 
            @param property The control property to bind to.
            @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
            @param accessor The data accessor to use for the new binding.
            @param group The binding group to add the new binding to.
            @param bindingDirection The binding direction to use for the new binding.
            @param adapter The data adapter to use for the new binding.
            @returns The new data binding.
        */
        AddBinding(
            propertyName: string,
            dataProperty: Collections.IList<string>,
            accessor: Data.IDataAccessor<any>,
            group: Data.IBindingGroup = this.DefaultGroup,
            bindingDirection?: Data.BindingDirections,
            adapter?: Data.IDataAdapter<any, any>): Data.IDataBinding<any, any>
        {
            if (!this[propertyName])
            {
                throw "Property name does exist on this control!";
            }
            if (!isFunction(this[propertyName]))
            {
                throw "Property name does not refer to a function!";
            }

            var newBinding = new Data.DataBinding<any>(this, propertyName, dataProperty, accessor, bindingDirection, adapter);

            group.DataBindings.Add(newBinding);

            return newBinding;
        }
        /** Removes a data binding from all binding groups in the binding collection.
            @param binding The binding to remove.
            @returns Void
        */
        RemoveBinding(binding: Data.IDataBinding<any, any>): void
        {
            var groupsLen = this.Bindings.BindingGroups.Count();
            for (var groupNum = 0; groupNum < groupsLen; groupNum++)
            {
                var group = this.Bindings.BindingGroups.ElementAt(groupNum);
                this._removeBinding(group, binding);
            }
        }

        /** Internal method which handles removing a binding on the control from the specified group. 
            @param group The group to remove the binding from.
            @param binding The binding to remove.
            @returns Void
        */
        private _removeBinding(group: Data.IBindingGroup, binding: Data.IDataBinding<any, any>): void
        {
            binding.Unbind();
            group.DataBindings.Remove(binding);
        }
    }
}
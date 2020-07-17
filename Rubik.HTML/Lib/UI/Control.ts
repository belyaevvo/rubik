/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../Events/Events.ts" />
/// <reference path="../Collections/Collections_BuildRefs.d.ts" />
/// <reference path="CSSNumber.ts" />
/// <reference path="IControl.d.ts" />
/// <reference path="FrameworkElement.ts" />
/// <reference path="../Animation/FadeAnimator.ts" />
/// <reference path="UI Static.ts" />
/// <reference path="DragDrop.ts" />
/// <reference path="../Animation/Animation.ts" />
/// <reference path="../Animation/IAnimator.d.ts" />
/// <reference path="../../Scripts/typings/jquery/jquery.d.ts" />

module Rubik.UI
{
    

    var __UIDGenerator = 0;
    export class Control extends FrameworkElement implements IControl
    {        

        __UID: number = __UIDGenerator++;
                

        DOMConstructed: boolean;
        OptimiseConstructForGraphics: boolean = false;
                
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
        OnScroll: Events.JQueryEvent = new Events.JQueryEvent();

        OnDraggedEnter: DraggedEnterEvent = new DraggedEnterEvent();
        OnDraggedOver: Events.SimpleEvent = new Events.SimpleEvent();
        OnDraggedOut: Events.SimpleEvent = new Events.SimpleEvent();
        OnDropped: Events.SimpleEvent = new Events.SimpleEvent();
        OnDragStarted: DragStartedEvent = new DragStartedEvent();
        OnDragDelta: Events.SimpleEvent = new Events.SimpleEvent();
        OnDragCompleted: Events.SimpleEvent = new Events.SimpleEvent();

        /*static OnClickEventName: string = "click";
        static OnMouseDownEventName: string = "mousedown touchstart";
        static OnMouseUpEventName: string = "mouseup touchend";
        static OnMouseMoveEventName: string = "mousemove touchmove";*/

        TargetDocumentFor_MouseUp: boolean = true;
        TargetDocumentFor_MouseMove: boolean = true;
        

        _Enabled: boolean = true;
        
        AttachEvents: boolean = true;
        static OptimiseConstructForGraphics_DelayTime = 30;

        constructor()
        {
            super();
            this._rootElement.addClass("Control");            
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
            this.OnScroll.OnHandlerAttachedContext = this.OnScroll.OnHandlerDettachedContext = this;
            this.OnScroll.OnHandlerAttached = this.OnScroll.OnHandlerDettached = this._OnOnScrollChanged; 

            /*this.OnDraggedEnter.OnHandlerAttachedContext = this.OnDraggedEnter.OnHandlerDettachedContext = this;
            this.OnDraggedEnter.OnHandlerAttached = this.OnDraggedEnter.OnHandlerDettached = this._OnDraggedEnter;
            this.OnDraggedOver.OnHandlerAttachedContext = this.OnDraggedOver.OnHandlerDettachedContext = this;
            this.OnDraggedOver.OnHandlerAttached = this.OnDraggedOver.OnHandlerDettached = this._OnDraggedOver;
            this.OnDraggedOut.OnHandlerAttachedContext = this.OnDraggedOut.OnHandlerDettachedContext = this;
            this.OnDraggedOut.OnHandlerAttached = this.OnDraggedOut.OnHandlerDettached = this._OnDraggedOut;
            this.OnDropped.OnHandlerAttachedContext = this.OnDropped.OnHandlerDettachedContext = this;
            this.OnDropped.OnHandlerAttached = this.OnDropped.OnHandlerDettached = this._OnDropped;
            this.OnDragStarted.OnHandlerAttachedContext = this.OnDragStarted.OnHandlerDettachedContext = this;
            this.OnDragStarted.OnHandlerAttached = this.OnDragStarted.OnHandlerDettached = this._OnDragStarted;
            this.OnDragDelta.OnHandlerAttachedContext = this.OnDragDelta.OnHandlerDettachedContext = this;
            this.OnDragDelta.OnHandlerAttached = this.OnDragDelta.OnHandlerDettached = this._OnDragDelta;
            this.OnDragCompleted.OnHandlerAttachedContext = this.OnDragCompleted.OnHandlerDettachedContext = this;
            this.OnDragCompleted.OnHandlerAttached = this.OnDragCompleted.OnHandlerDettached = this._OnDragCompleted;*/
           
            this.DisableSelection();            
            
        }

        AnimationElement(): JQuery {
            return this._rootElement;
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
                    this._rootElement.on(OnClickEventName, { _this: this, _callback: this._OnClick }, this._RestoreThis);
                }
                else if(this._OnClickAttached)
                {
                    this._OnClickAttached = false;
                    this._rootElement.off(OnClickEventName, this._RestoreThis);
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
                    this._rootElement.on(OnMouseDownEventName, { _this: this, _callback: this._OnMouseDown }, this._RestoreThis);
                }
                else if(this._OnMouseDownAttached)
                {
                    this._OnMouseDownAttached = false;
                    this._rootElement.off(OnMouseDownEventName, this._RestoreThis);
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
                        this._rootElement.on(OnMouseUpEventName, { _this: this, _callback: this._OnMouseUp }, this._RestoreThis);
                    }
                    else if (this._OnMouseUpAttached)
                    {
                        this._OnMouseUpAttached = false;
                        this._rootElement.off(OnMouseUpEventName, this._RestoreThis);
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
                        this._rootElement.on(OnMouseMoveEventName, { _this: this, _callback: this._OnMouseMove }, this._RestoreThis);
                    }
                    else if (this._OnMouseMoveAttached)
                    {
                        this._OnMouseMoveAttached = false;
                        this._rootElement.off(OnMouseMoveEventName, this._RestoreThis);
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

        _OnScrollAttached: boolean = false;
        _OnOnScrollChanged() {
            if (this.DOMConstructed) {
                if (this.OnScroll.Handlers.length > 0 && !this._OnScrollAttached) {
                    this._OnScrollAttached = true;
                    this._rootElement.on("scroll", { _this: this, _callback: this._OnScroll }, this._RestoreThis);                    
                }
                else if (this._OnScrollAttached) {
                    this._OnScrollAttached = false;
                    this._rootElement.off("scroll", this._RestoreThis);
                }
            }
        }
        _OnScroll(jqEvent: JQueryEventObject) {
            this.OnScroll.Invoke(new Events.JQueryEventArgs(this, jqEvent));
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

        
       

        OnChildrenModified(args: Collections.CollectionModifiedEventArgs<IControl>) {
            {
                if (this.DOMConstructed) {
                    switch (args.Modification) {
                        case Collections.CollectionModifications.Add:
                            for (var i = 0; i < args.ModifiedElements.Count(); i++) {
                                args.ModifiedElements.ElementAt(i).ConstructDOM(this._rootElement);
                            }
                            break;
                        case Collections.CollectionModifications.Remove:
                            for (var i = 0; i < args.ModifiedElements.Count(); i++) {
                                args.ModifiedElements.ElementAt(i).DestroyDOM();
                            }
                            break;
                        case Collections.CollectionModifications.Reorder:
                            for (var i = 0; i < args.ModifiedElements.Count(); i++) {
                                var cObj = args.ModifiedElements.ElementAt(i);
                                cObj.DestroyDOM();
                                cObj.ConstructDOM(this._rootElement);
                            }
                            break;
                    }
                }
            }
        }
        
        ConstructDOM(parent: JQuery, onComplete:()=>void = null): void
        {
            if (!this.DOMConstructed)
            {
                parent.append(this._rootElement);
                this.DOMConstructed = true;

                if (this.AttachEvents) {

                    this._OnOnClickChanged();
                    this._OnOnKeyPressChanged();
                    this._OnOnKeyUpChanged();
                    this._OnOnMouseDownChanged();
                    this._OnOnMouseMoveChanged();
                    this._OnOnMouseUpChanged();
                    this._OnOnResizeChanged();
                    this._OnOnScrollChanged();

                    this._rootElement.on("focus", { _this: this, _callback: this._OnFocus }, this._RestoreThis);
                    this._rootElement.on("blur", { _this: this, _callback: this._OnBlur }, this._RestoreThis);
                    this._rootElement.on("keydown", { _this: this, _callback: this._OnKeyDown }, this._RestoreThis);
                }
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
                this._OnScrollAttached = false;
            }
           
        }
        
        
        Width(value?: string | number): any {
            if (value !== null) {
                this._rootElement.width(value);
                this.OnResize.Invoke(new Events.ResizeEventArgs(this, null));
            }
            else {
                return this._rootElement.width();
            }
        }

        Height(value?: string | number): any {
            if (value !== null) {
                this._rootElement.height(value);
                this.OnResize.Invoke(new Events.ResizeEventArgs(this, null));
            }
            else {
                return this._rootElement.height();
            }
        }
        

        ActualWidth(): number
        {
            return this._rootElement.outerWidth();
        }
        ActualHeight(): number
        {
            return this._rootElement.outerHeight();
        }

        Top(value?: string | number): number | void {                               
            if (value !== null) {
                this._rootElement.css("top", value);
                this.OnMove.Invoke(new Events.MoveEventArgs(this, null));
            }
            else {
                return this._rootElement.position().top;
            }
        }

        Bottom(value ?: string | number): number | void {        
                if (value !== null) {
                    this._rootElement.css("bottom", value);
                    this.OnMove.Invoke(new Events.MoveEventArgs(this, null));
                }
                else {
                    return this._rootElement.position().top + this._rootElement.outerHeight(true);
                }
        }

        Left(value ?: string | number): number | void {        
                if (value !== null) {
                    this._rootElement.css("left", value);
                    this.OnMove.Invoke(new Events.MoveEventArgs(this, null));
                }
                else {
                    return this._rootElement.position().left;
                }
        }

        Right(value?: string | number): number | void {        
                if (value !== null) {
                    this._rootElement.css("right", value);
                    this.OnMove.Invoke(new Events.MoveEventArgs(this, null));
                }
                else {
                    return this._rootElement.position().left + this._rootElement.outerWidth(true);
                }
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

       

        _parentVisible: boolean = true;
        SetParentVisible(value: boolean): void
        {
            this._parentVisible = value;           
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
            }
            return this._rootElement.css("visibility") !== "hidden" && this._rootElement.css("display") !== "none";
        }
        EnableByParent(): void
        {
            this._HandleEnableSet(this._Enabled);           
        }
        DisableByParent(): void
        {
            this._HandleEnableSet(false);            
        }
        _WasSelectionEnabled: boolean = false;
        Enabled(value: boolean = null): boolean
        {
            if (value !== null)
            {
                this._Enabled = value;                
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
                var __this = this;
                animator.Show(this, function ()
                {
                    __this.Enabled(true);
                    __this.Visible(true);
                    __this.OnShow.Invoke(new Events.ShowEventArgs(__this));
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
                var __this = this;
                setTimeout(function ()
                {
                    animator.Hide(__this, function ()
                    {
                        __this.Enabled(true);
                        __this.Visible(false);
                        __this.OnHide.Invoke(new Events.HideEventArgs(__this));
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

        _HandleChainEvents: boolean = true;
        HandleChainEvents(value: boolean = null): boolean
        {
            if (value !== null) {
                this._HandleChainEvents = value;
            }
            return this._HandleChainEvents;
        }

        AllowDrag(): void {
            this.CanDrag = true;
            this._rootElement.addClass('dragsource');
            if (this.ID() == null) {
                this.ID('uid' + this.__UID.toString());
            }
        }

        AllowDrop(): void {
            this._rootElement.addClass('droptarget');
            if (this.ID() == null) {
                this.ID('uid' + this.__UID.toString());
            }
        }

        
        DraggedEnter(): boolean {
            if (this.ActuallyEnabled()) {
                var args: DraggedEnterEventArgs = new DraggedEnterEventArgs(this, false);
                this.OnDraggedEnter.Invoke(args);
                if (args.EnableDrop) {
                    this.AddClass("dropenabled")
                }
                else {
                    this.AddClass("dropdisabled")
                }
                return args.EnableDrop;
            }
            return false;
        }

        DraggedOver(): void {
            if (this.ActuallyEnabled()) {
                this.OnDraggedOver.Invoke(new Events.EventArgs(this));                
            }
        }
        DraggedOut(): void {
            if (this.ActuallyEnabled()) {
                this.OnDraggedOut.Invoke(new Events.EventArgs(this));
                this.RemoveClass("dropenabled")
                this.RemoveClass("dropdisabled")
            }
        }

        Dropped(): void {
            if (this.ActuallyEnabled()) {
                this.OnDropped.Invoke(new Events.EventArgs(this));
                this.RemoveClass("dropenabled")
                this.RemoveClass("dropdisabled")
            }
        }

        CanDrag: boolean = false;

        DragStarted(dragsource: DragDropObject, ghost: GhostControl): boolean {            
            if (this.ActuallyEnabled()) {                
                var args = new DragStartedEventArgs(this, dragsource, ghost, true);
                this.OnDragStarted.Invoke(args);
                return args.EnableDrag;
            }
            return null;
        }
        DragDelta(): void {
            if (this.ActuallyEnabled()) {
                this.OnDragDelta.Invoke(new Events.EventArgs(this));
            }
        }
        DragCompleted(): void {
            if (this.ActuallyEnabled()) {
                this.OnDragCompleted.Invoke(new Events.EventArgs(this));
            }
        }
      
    }
}
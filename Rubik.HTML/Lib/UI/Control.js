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
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var __UIDGenerator = 0;
        class Control extends UI.FrameworkElement {
            constructor() {
                super();
                this.__UID = __UIDGenerator++;
                this.OptimiseConstructForGraphics = false;
                this.OnClick = new Rubik.Events.ClickEvent();
                this.OnMouseDown = new Rubik.Events.MouseDownEvent();
                this.OnMouseUp = new Rubik.Events.MouseUpEvent();
                this.OnMouseMove = new Rubik.Events.MouseMoveEvent();
                this.OnResize = new Rubik.Events.ResizeEvent();
                this.OnMove = new Rubik.Events.MoveEvent();
                this.OnShow = new Rubik.Events.ShowEvent();
                this.OnHide = new Rubik.Events.HideEvent();
                this.OnFocus = new Rubik.Events.FocusEvent();
                this.OnBlur = new Rubik.Events.BlurEvent();
                this.OnKeyDown = new Rubik.Events.KeyDownEvent();
                this.OnKeyPress = new Rubik.Events.KeyPressEvent();
                this.OnKeyUp = new Rubik.Events.KeyUpEvent();
                this.OnScroll = new Rubik.Events.JQueryEvent();
                this.OnDraggedEnter = new Rubik.Events.SimpleEvent();
                this.OnDraggedOver = new Rubik.Events.SimpleEvent();
                this.OnDraggedOut = new Rubik.Events.SimpleEvent();
                this.OnDropped = new Rubik.Events.SimpleEvent();
                this.OnDragStarted = new UI.DragStartedEvent();
                this.OnDragDelta = new Rubik.Events.SimpleEvent();
                this.OnDragCompleted = new Rubik.Events.SimpleEvent();
                /*static OnClickEventName: string = "click";
                static OnMouseDownEventName: string = "mousedown touchstart";
                static OnMouseUpEventName: string = "mouseup touchend";
                static OnMouseMoveEventName: string = "mousemove touchmove";*/
                this.TargetDocumentFor_MouseUp = true;
                this.TargetDocumentFor_MouseMove = true;
                this._Enabled = true;
                this.AttachEvents = true;
                this._OnClickAttached = false;
                this._OnMouseDownAttached = false;
                this._OnMouseUpAttached = false;
                this._OnMouseUp_GlobalHandler = null;
                this._OnMouseMoveAttached = false;
                this._OnMouseMove_GlobalHandler = null;
                this._OnResizeAttached = false;
                this._OnScrollAttached = false;
                this._OnMoveAttached = false;
                this._OnKeyPressAttached = false;
                this._OnKeyUpAttached = false;
                this._parentVisible = true;
                this._WasSelectionEnabled = false;
                this._Focusable = false;
                this._SelectionEnabled = false;
                this._TabIndex = 0;
                this._HandleChainEvents = true;
                this.CanDrag = false;
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
            AnimationElement() {
                return this._rootElement;
            }
            _RestoreThis(jqEvent) {
                return jqEvent.data._callback.call(jqEvent.data._this, jqEvent);
            }
            _OnOnClickChanged() {
                if (this.DOMConstructed) {
                    if (this.OnClick.Handlers.length > 0 && !this._OnClickAttached) {
                        this._OnClickAttached = true;
                        this._rootElement.on(UI.OnClickEventName, { _this: this, _callback: this._OnClick }, this._RestoreThis);
                    }
                    else if (this._OnClickAttached) {
                        this._OnClickAttached = false;
                        this._rootElement.off(UI.OnClickEventName, this._RestoreThis);
                    }
                }
            }
            _OnClick(jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnClick.Invoke(new Rubik.Events.ClickEventArgs(this, jqEvent));
                }
            }
            _OnOnMouseDownChanged() {
                if (this.DOMConstructed) {
                    if (this.OnMouseDown.Handlers.length > 0 && !this._OnMouseDownAttached) {
                        this._OnMouseDownAttached = true;
                        this._rootElement.on(UI.OnMouseDownEventName, { _this: this, _callback: this._OnMouseDown }, this._RestoreThis);
                    }
                    else if (this._OnMouseDownAttached) {
                        this._OnMouseDownAttached = false;
                        this._rootElement.off(UI.OnMouseDownEventName, this._RestoreThis);
                    }
                }
            }
            _OnMouseDown(jqEvent) {
                if (this.ActuallyEnabled()) {
                    jqEvent = Rubik.standardiseEvent(jqEvent);
                    this.OnMouseDown.Invoke(new Rubik.Events.MouseDownEventArgs(this, jqEvent));
                }
            }
            _OnOnMouseUpChanged() {
                if (this.DOMConstructed) {
                    if (this.TargetDocumentFor_MouseUp) {
                        if (this.OnMouseUp.Handlers.length > 0 && !this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = true;
                            this._OnMouseUp_GlobalHandler = new Rubik.Events.MouseUpEventHandler(function (args) {
                                this.OnMouseUp.Invoke(new Rubik.Events.MouseUpEventArgs(this, args.jqEvent));
                            }, this);
                            UI.Global_MouseUpEvent.Attach(this._OnMouseUp_GlobalHandler);
                        }
                        else if (this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = false;
                            UI.Global_MouseUpEvent.Detach(this._OnMouseUp_GlobalHandler);
                        }
                    }
                    else {
                        if (this.OnMouseUp.Handlers.length > 0 && !this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = true;
                            this._rootElement.on(UI.OnMouseUpEventName, { _this: this, _callback: this._OnMouseUp }, this._RestoreThis);
                        }
                        else if (this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = false;
                            this._rootElement.off(UI.OnMouseUpEventName, this._RestoreThis);
                        }
                    }
                }
            }
            _OnMouseUp(jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnMouseUp.Invoke(new Rubik.Events.MouseUpEventArgs(this, jqEvent));
                }
            }
            _OnOnMouseMoveChanged() {
                if (this.DOMConstructed) {
                    if (this.TargetDocumentFor_MouseMove) {
                        if (this.OnMouseMove.Handlers.length > 0 && !this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = true;
                            this._OnMouseMove_GlobalHandler = new Rubik.Events.MouseMoveEventHandler(function (args) {
                                this.OnMouseMove.Invoke(new Rubik.Events.MouseMoveEventArgs(this, args.jqEvent));
                            }, this);
                            UI.Global_MouseMoveEvent.Attach(this._OnMouseMove_GlobalHandler);
                        }
                        else if (this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = false;
                            UI.Global_MouseMoveEvent.Detach(this._OnMouseMove_GlobalHandler);
                        }
                    }
                    else {
                        if (this.OnMouseMove.Handlers.length > 0 && !this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = true;
                            this._rootElement.on(UI.OnMouseMoveEventName, { _this: this, _callback: this._OnMouseMove }, this._RestoreThis);
                        }
                        else if (this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = false;
                            this._rootElement.off(UI.OnMouseMoveEventName, this._RestoreThis);
                        }
                    }
                }
            }
            _OnMouseMove(jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnMouseMove.Invoke(new Rubik.Events.MouseMoveEventArgs(this, jqEvent));
                }
            }
            _OnOnResizeChanged() {
                if (this.DOMConstructed) {
                    if (this.OnResize.Handlers.length > 0 && !this._OnResizeAttached) {
                        this._OnResizeAttached = true;
                        $(window).on("resize", { _this: this, _callback: this._OnResize }, this._RestoreThis);
                    }
                    else if (this._OnResizeAttached) {
                        this._OnResizeAttached = false;
                        $(window).off("resize", this._RestoreThis);
                    }
                }
            }
            _OnResize(jqEvent) {
                this.OnResize.Invoke(new Rubik.Events.ResizeEventArgs(this, jqEvent));
            }
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
            _OnScroll(jqEvent) {
                this.OnScroll.Invoke(new Rubik.Events.JQueryEventArgs(this, jqEvent));
            }
            _OnOnMoveChanged() {
                if (this.DOMConstructed) {
                    if (this.OnMove.Handlers.length > 0 && !this._OnMoveAttached) {
                        this._OnMoveAttached = true;
                        $(window).on("resize", { _this: this, _callback: this._OnMove }, this._RestoreThis);
                    }
                    else if (this._OnMoveAttached) {
                        this._OnMoveAttached = false;
                        $(window).off("resize", this._RestoreThis);
                    }
                }
            }
            _OnMove(jqEvent) {
                this.OnMove.Invoke(new Rubik.Events.MoveEventArgs(this, jqEvent));
            }
            _OnOnKeyPressChanged() {
                if (this.DOMConstructed) {
                    if (this.OnKeyPress.Handlers.length > 0 && !this._OnKeyPressAttached) {
                        this._OnKeyPressAttached = true;
                        this._rootElement.on("keypress", { _this: this, _callback: this._OnKeyPress }, this._RestoreThis);
                    }
                    else if (this._OnKeyPressAttached) {
                        this._OnKeyPressAttached = false;
                        this._rootElement.off("keypress", this._RestoreThis);
                    }
                }
            }
            _OnKeyPress(jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnKeyPress.Invoke(new Rubik.Events.KeyPressEventArgs(this, jqEvent));
                }
            }
            _OnOnKeyUpChanged() {
                if (this.DOMConstructed) {
                    if (this.OnKeyUp.Handlers.length > 0 && !this._OnKeyUpAttached) {
                        this._OnKeyUpAttached = true;
                        this._rootElement.on("keyup", { _this: this, _callback: this._OnKeyUp }, this._RestoreThis);
                    }
                    else if (this._OnKeyUpAttached) {
                        this._OnKeyUpAttached = false;
                        this._rootElement.off("keyup", this._RestoreThis);
                    }
                }
            }
            _OnKeyUp(jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnKeyUp.Invoke(new Rubik.Events.KeyUpEventArgs(this, jqEvent));
                }
            }
            _OnFocus(jqEvent) {
                if (!this.ActuallyEnabled() || !this.ActuallyVisible()) {
                    Rubik.StopEvent(jqEvent);
                    this.Blur();
                }
                else if (!this.Focusable()) {
                    this.Blur();
                }
                else {
                    UI.CurrentFocusedControl = this;
                    this.AddClass("Focused");
                    if (UI.JustUsedTabKeyTime + 50 > Date.now()) {
                        this.AddClass("TabFocused");
                    }
                    this.OnFocus.Invoke(new Rubik.Events.FocusEventArgs(this, jqEvent));
                }
            }
            _OnBlur(jqEvent) {
                if (UI.CurrentFocusedControl == this) {
                    UI.CurrentFocusedControl = null;
                }
                this.RemoveClass("Focused");
                this.RemoveClass("TabFocused");
                this.OnBlur.Invoke(new Rubik.Events.BlurEventArgs(this, jqEvent));
            }
            _OnKeyDown(jqEvent) {
                if (jqEvent.keyCode === 13) {
                    Rubik.StopEvent(jqEvent);
                    this.InvokeDefaultAction();
                }
                else {
                    UI.OnKeyDown_Global_First(jqEvent);
                    this.OnKeyDown.Invoke(new Rubik.Events.KeyDownEventArgs(this, jqEvent));
                    return UI.OnKeyDown_Global_Last(jqEvent);
                }
            }
            OnChildrenModified(args) {
                {
                    if (this.DOMConstructed) {
                        switch (args.Modification) {
                            case Rubik.Collections.CollectionModifications.Add:
                                for (var i = 0; i < args.ModifiedElements.Count(); i++) {
                                    args.ModifiedElements.ElementAt(i).ConstructDOM(this._rootElement);
                                }
                                break;
                            case Rubik.Collections.CollectionModifications.Remove:
                                for (var i = 0; i < args.ModifiedElements.Count(); i++) {
                                    args.ModifiedElements.ElementAt(i).DestroyDOM();
                                }
                                break;
                            case Rubik.Collections.CollectionModifications.Reorder:
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
            ConstructDOM(parent, onComplete = null) {
                if (!this.DOMConstructed) {
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
            DestroyDOM() {
                if (this.DOMConstructed) {
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
            Width(value) {
                if (value !== null) {
                    this._rootElement.width(value);
                    this.OnResize.Invoke(new Rubik.Events.ResizeEventArgs(this, null));
                }
                else {
                    return this._rootElement.width();
                }
            }
            Height(value) {
                if (value !== null) {
                    this._rootElement.height(value);
                    this.OnResize.Invoke(new Rubik.Events.ResizeEventArgs(this, null));
                }
                else {
                    return this._rootElement.height();
                }
            }
            ActualWidth() {
                return this._rootElement.outerWidth();
            }
            ActualHeight() {
                return this._rootElement.outerHeight();
            }
            Top(value) {
                if (value !== null) {
                    this._rootElement.css("top", value);
                    this.OnMove.Invoke(new Rubik.Events.MoveEventArgs(this, null));
                }
                else {
                    return this._rootElement.position().top;
                }
            }
            Bottom(value) {
                if (value !== null) {
                    this._rootElement.css("bottom", value);
                    this.OnMove.Invoke(new Rubik.Events.MoveEventArgs(this, null));
                }
                else {
                    return this._rootElement.position().top + this._rootElement.outerHeight(true);
                }
            }
            Left(value) {
                if (value !== null) {
                    this._rootElement.css("left", value);
                    this.OnMove.Invoke(new Rubik.Events.MoveEventArgs(this, null));
                }
                else {
                    return this._rootElement.position().left;
                }
            }
            Right(value) {
                if (value !== null) {
                    this._rootElement.css("right", value);
                    this.OnMove.Invoke(new Rubik.Events.MoveEventArgs(this, null));
                }
                else {
                    return this._rootElement.position().left + this._rootElement.outerWidth(true);
                }
            }
            PageTop() {
                return this._rootElement.offset().top;
            }
            PageLeft() {
                return this._rootElement.offset().left;
            }
            PageBottom() {
                return this._rootElement.offset().top + this.ActualHeight();
            }
            PageRight() {
                return this._rootElement.offset().left + this.ActualWidth();
            }
            SetParentVisible(value) {
                this._parentVisible = value;
            }
            ActuallyVisible() {
                return this._parentVisible && this.Visible();
            }
            Visible(value = null) {
                if (value !== null) {
                    this._rootElement.css({
                        visibility: value ? "" : "hidden",
                        display: ""
                    });
                }
                return this._rootElement.css("visibility") !== "hidden" && this._rootElement.css("display") !== "none";
            }
            EnableByParent() {
                this._HandleEnableSet(this._Enabled);
            }
            DisableByParent() {
                this._HandleEnableSet(false);
            }
            Enabled(value = null) {
                if (value !== null) {
                    this._Enabled = value;
                    this._HandleEnableSet(this._Enabled);
                }
                return this._Enabled;
            }
            ActuallyEnabled() {
                return !this.HasClass("Disabled");
            }
            _HandleEnableSet(enabled) {
                if (enabled) {
                    this._rootElement.removeClass("Disabled");
                    if (this._WasSelectionEnabled) {
                        this.EnableSelection();
                    }
                }
                else {
                    this._rootElement.addClass("Disabled");
                    this._WasSelectionEnabled = this._SelectionEnabled;
                    this.DisableSelection();
                }
                this._HandleFocusableSet(this.Focusable());
            }
            _HandleFocusableSet(focusable) {
                if (focusable && !this.HasClass("Disabled")) {
                    this._rootElement.attr("tabindex", this._TabIndex.toString());
                    if (this._rootElement.is(":focus") && !this.HasClass("Focused")) {
                        this.Focus();
                    }
                }
                else {
                    this._rootElement.removeAttr("tabindex");
                }
                if (!this._Focusable && this._rootElement.is(":focus")) {
                    this.Blur();
                }
            }
            Focusable(value = null) {
                if (value !== null) {
                    this._Focusable = value;
                    if (this._TabIndex === 0) {
                        this._TabIndex = ++UI._currTabIndex;
                    }
                    this._HandleFocusableSet(value);
                }
                return this._Focusable;
            }
            Show(callback = null, animator = new Rubik.Animation.FadeAnimator()) {
                if (!this.Visible()) {
                    this.Enabled(false);
                    var __this = this;
                    animator.Show(this, function () {
                        __this.Enabled(true);
                        __this.Visible(true);
                        __this.OnShow.Invoke(new Rubik.Events.ShowEventArgs(__this));
                        if (callback !== null)
                            callback();
                    });
                }
                else if (callback !== null) {
                    callback();
                }
            }
            Hide(callback = null, animator = new Rubik.Animation.FadeAnimator()) {
                if (this.Visible()) {
                    this.Enabled(false);
                    var __this = this;
                    setTimeout(function () {
                        animator.Hide(__this, function () {
                            __this.Enabled(true);
                            __this.Visible(false);
                            __this.OnHide.Invoke(new Rubik.Events.HideEventArgs(__this));
                            if (callback !== null)
                                callback();
                        });
                    }, 200);
                }
                else if (callback !== null) {
                    callback();
                }
            }
            EnableSelection() {
                this._rootElement.enableSelection();
                this._SelectionEnabled = true;
            }
            DisableSelection() {
                this._rootElement.disableSelection();
                this._SelectionEnabled = false;
            }
            Focus() {
                this._rootElement.focus();
            }
            Blur() {
                this._rootElement.blur();
            }
            InvokeDefaultAction() {
            }
            IsRelativeLayout() {
                return this._rootElement.hasClass("RelativeLayout");
            }
            RelativeLayoutOn() {
                this.AddClass("RelativeLayout");
            }
            RelativeLayoutOff() {
                this.RemoveClass("RelativeLayout");
            }
            TabIndex(value = null) {
                if (value !== null) {
                    this._TabIndex = value;
                    if (value === -2) {
                        this._rootElement.removeAttr("tabindex");
                    }
                    else {
                        this._rootElement.attr("tabindex", value.toString());
                    }
                }
                var retVal = parseInt(this._rootElement.attr("tabindex"), 10);
                if (isNaN(retVal)) {
                    retVal = -2;
                }
                return retVal;
            }
            HandleChainEvents(value = null) {
                if (value !== null) {
                    this._HandleChainEvents = value;
                }
                return this._HandleChainEvents;
            }
            AllowDrag() {
                this.CanDrag = true;
                this._rootElement.addClass('dragsource');
            }
            AllowDrop() {
                this._rootElement.addClass('dragtarget');
            }
            DraggedEnter() {
                if (this.ActuallyEnabled()) {
                    this.OnDraggedEnter.Invoke(new Rubik.Events.EventArgs(this));
                }
            }
            DraggedOver() {
                if (this.ActuallyEnabled()) {
                    this.OnDraggedOver.Invoke(new Rubik.Events.EventArgs(this));
                }
            }
            DraggedOut() {
                if (this.ActuallyEnabled()) {
                    this.OnDraggedOut.Invoke(new Rubik.Events.EventArgs(this));
                }
            }
            Dropped() {
                if (this.ActuallyEnabled()) {
                    this.OnDropped.Invoke(new Rubik.Events.EventArgs(this));
                }
            }
            DragStarted(dragsource) {
                if (this.ActuallyEnabled()) {
                    var ghost = new UI.GhostControl();
                    this.OnDragStarted.Invoke(new UI.DragStartedEventArgs(this, dragsource, ghost));
                    return ghost;
                }
                return null;
            }
            DragDelta() {
                if (this.ActuallyEnabled()) {
                    this.OnDragDelta.Invoke(new Rubik.Events.EventArgs(this));
                }
            }
            DragCompleted() {
                if (this.ActuallyEnabled()) {
                    this.OnDragCompleted.Invoke(new Rubik.Events.EventArgs(this));
                }
            }
        }
        Control.OptimiseConstructForGraphics_DelayTime = 30;
        UI.Control = Control;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=Control.js.map
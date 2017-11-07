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
    /// <reference path="../../Events/Classes/Events.ts" />
    /// <reference path="../../Collections/Collections_BuildRefs.d.ts" />
    /// <reference path="../CSSNumber.ts" />
    /// <reference path="../Interfaces/IControl.d.ts" />
    /// <reference path="../../Animation/FadeAnimator.ts" />
    /// <reference path="../UI Static.ts" />
    /// <reference path="../../Animation/Animation.ts" />
    /// <reference path="../../Animation/IAnimator.d.ts" />
    /// <reference path="../../../Definitions/jquery.d.ts" />
    (function (UI) {
        var __UIDGenerator = 0;
        var Control = (function () {
            function Control() {
                this.__UID = __UIDGenerator++;
                this._rootElement = null;
                this.OnClick = new TSUI.Events.ClickEvent();
                this.OnMouseDown = new TSUI.Events.MouseDownEvent();
                this.OnMouseUp = new TSUI.Events.MouseUpEvent();
                this.OnMouseMove = new TSUI.Events.MouseMoveEvent();
                this.OnResize = new TSUI.Events.ResizeEvent();
                this.OnMove = new TSUI.Events.MoveEvent();
                this.OnShow = new TSUI.Events.ShowEvent();
                this.OnHide = new TSUI.Events.HideEvent();
                this.OnFocus = new TSUI.Events.FocusEvent();
                this.OnBlur = new TSUI.Events.BlurEvent();
                this.OnKeyDown = new TSUI.Events.KeyDownEvent();
                this.OnKeyPress = new TSUI.Events.KeyPressEvent();
                this.OnKeyUp = new TSUI.Events.KeyUpEvent();
                this.TargetDocumentFor_MouseUp = true;
                this.TargetDocumentFor_MouseMove = true;
                this.Children = new TSUI.Collections.List();
                this._Enabled = true;
                this.OptimiseConstructForGraphics = false;
                this._OnClickAttached = false;
                this._OnMouseDownAttached = false;
                this._OnMouseUpAttached = false;
                this._OnMouseUp_GlobalHandler = null;
                this._OnMouseMoveAttached = false;
                this._OnMouseMove_GlobalHandler = null;
                this._OnResizeAttached = false;
                this._OnMoveAttached = false;
                this._OnKeyPressAttached = false;
                this._OnKeyUpAttached = false;
                this._This_Resized_ChainHandler_Timeout = -1;
                this._This_Moved_ChainHandler_Timeout = -1;
                this.DOMConstructed = false;
                this._parentVisible = true;
                this._WasSelectionEnabled = false;
                this._Focusable = false;
                this._SelectionEnabled = false;
                this._TabIndex = 0;
                /** The collection containing all the binding groups (and thus bindings) for this control. */
                this.Bindings = new TSUI.Data.BindingCollection();
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

                this.OnResize.Attach(new TSUI.Events.ResizeEventHandler(this._This_Resized_ChainHandler, this));
                this.OnMove.Attach(new TSUI.Events.MoveEventHandler(this._This_Moved_ChainHandler, this));

                this._rootElement = $("<div class=\"Control\">");
                this.DisableSelection();

                this.Children.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._OnChildren_Modified, this));

                this.DefaultGroup = new TSUI.Data.BindingGroup();
                this.Bindings.BindingGroups.Add(this.DefaultGroup);
            }
            Control.prototype.AnimationElement = function () {
                return this._rootElement;
            };

            Control.prototype._RestoreThis = function (jqEvent) {
                return jqEvent.data._callback.call(jqEvent.data._this, jqEvent);
            };

            Control.prototype._OnOnClickChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnClick.Handlers.length > 0 && !this._OnClickAttached) {
                        this._OnClickAttached = true;
                        this._rootElement.on(Control.OnClickEventName, { _this: this, _callback: this._OnClick }, this._RestoreThis);
                    } else if (this._OnClickAttached) {
                        this._OnClickAttached = false;
                        this._rootElement.off(Control.OnClickEventName, this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnClick = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnClick.Invoke(new TSUI.Events.ClickEventArgs(this, jqEvent));
                }
            };

            Control.prototype._OnOnMouseDownChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnMouseDown.Handlers.length > 0 && !this._OnMouseDownAttached) {
                        this._OnMouseDownAttached = true;
                        this._rootElement.on(Control.OnMouseDownEventName, { _this: this, _callback: this._OnMouseDown }, this._RestoreThis);
                    } else if (this._OnMouseDownAttached) {
                        this._OnMouseDownAttached = false;
                        this._rootElement.off(Control.OnMouseDownEventName, this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnMouseDown = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    jqEvent = TSUI.standardiseEvent(jqEvent);
                    this.OnMouseDown.Invoke(new TSUI.Events.MouseDownEventArgs(this, jqEvent));
                }
            };

            Control.prototype._OnOnMouseUpChanged = function () {
                if (this.DOMConstructed) {
                    if (this.TargetDocumentFor_MouseUp) {
                        if (this.OnMouseUp.Handlers.length > 0 && !this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = true;
                            this._OnMouseUp_GlobalHandler = new TSUI.Events.MouseUpEventHandler(function (args) {
                                this.OnMouseUp.Invoke(new TSUI.Events.MouseUpEventArgs(this, args.jqEvent));
                            }, this);
                            UI.Global_MouseUpEvent.Attach(this._OnMouseUp_GlobalHandler);
                        } else if (this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = false;
                            UI.Global_MouseUpEvent.Detach(this._OnMouseUp_GlobalHandler);
                        }
                    } else {
                        if (this.OnMouseUp.Handlers.length > 0 && !this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = true;
                            this._rootElement.on(Control.OnMouseUpEventName, { _this: this, _callback: this._OnMouseUp }, this._RestoreThis);
                        } else if (this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = false;
                            this._rootElement.off(Control.OnMouseUpEventName, this._RestoreThis);
                        }
                    }
                }
            };
            Control.prototype._OnMouseUp = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnMouseUp.Invoke(new TSUI.Events.MouseUpEventArgs(this, jqEvent));
                }
            };

            Control.prototype._OnOnMouseMoveChanged = function () {
                if (this.DOMConstructed) {
                    if (this.TargetDocumentFor_MouseMove) {
                        if (this.OnMouseMove.Handlers.length > 0 && !this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = true;
                            this._OnMouseMove_GlobalHandler = new TSUI.Events.MouseMoveEventHandler(function (args) {
                                this.OnMouseMove.Invoke(new TSUI.Events.MouseMoveEventArgs(this, args.jqEvent));
                            }, this);
                            UI.Global_MouseMoveEvent.Attach(this._OnMouseMove_GlobalHandler);
                        } else if (this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = false;
                            UI.Global_MouseMoveEvent.Detach(this._OnMouseMove_GlobalHandler);
                        }
                    } else {
                        if (this.OnMouseMove.Handlers.length > 0 && !this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = true;
                            this._rootElement.on(Control.OnMouseMoveEventName, { _this: this, _callback: this._OnMouseMove }, this._RestoreThis);
                        } else if (this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = false;
                            this._rootElement.off(Control.OnMouseMoveEventName, this._RestoreThis);
                        }
                    }
                }
            };
            Control.prototype._OnMouseMove = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnMouseMove.Invoke(new TSUI.Events.MouseMoveEventArgs(this, jqEvent));
                }
            };

            Control.prototype._OnOnResizeChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnResize.Handlers.length > 0 && !this._OnResizeAttached) {
                        this._OnResizeAttached = true;
                        $(window).on("resize", { _this: this, _callback: this._OnResize }, this._RestoreThis);
                    } else if (this._OnResizeAttached) {
                        this._OnResizeAttached = false;
                        $(window).off("resize", this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnResize = function (jqEvent) {
                this.OnResize.Invoke(new TSUI.Events.ResizeEventArgs(this, jqEvent));
            };

            Control.prototype._OnOnMoveChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnMove.Handlers.length > 0 && !this._OnMoveAttached) {
                        this._OnMoveAttached = true;
                        $(window).on("resize", { _this: this, _callback: this._OnMove }, this._RestoreThis);
                    } else if (this._OnMoveAttached) {
                        this._OnMoveAttached = false;
                        $(window).off("resize", this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnMove = function (jqEvent) {
                this.OnMove.Invoke(new TSUI.Events.MoveEventArgs(this, jqEvent));
            };

            Control.prototype._OnOnKeyPressChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnKeyPress.Handlers.length > 0 && !this._OnKeyPressAttached) {
                        this._OnKeyPressAttached = true;
                        this._rootElement.on("keypress", { _this: this, _callback: this._OnKeyPress }, this._RestoreThis);
                    } else if (this._OnKeyPressAttached) {
                        this._OnKeyPressAttached = false;
                        this._rootElement.off("keypress", this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnKeyPress = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnKeyPress.Invoke(new TSUI.Events.KeyPressEventArgs(this, jqEvent));
                }
            };

            Control.prototype._OnOnKeyUpChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnKeyUp.Handlers.length > 0 && !this._OnKeyUpAttached) {
                        this._OnKeyUpAttached = true;
                        this._rootElement.on("keyup", { _this: this, _callback: this._OnKeyUp }, this._RestoreThis);
                    } else if (this._OnKeyUpAttached) {
                        this._OnKeyUpAttached = false;
                        this._rootElement.off("keyup", this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnKeyUp = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnKeyUp.Invoke(new TSUI.Events.KeyUpEventArgs(this, jqEvent));
                }
            };

            Control.prototype._OnFocus = function (jqEvent) {
                if (!this.ActuallyEnabled() || !this.ActuallyVisible()) {
                    TSUI.StopEvent(jqEvent);
                    this.Blur();
                } else if (!this.Focusable()) {
                    this.Blur();
                } else {
                    UI.CurrentFocusedControl = this;
                    this.AddClass("Focused");
                    if (UI.JustUsedTabKeyTime + 50 > Date.now()) {
                        this.AddClass("TabFocused");
                    }
                    this.OnFocus.Invoke(new TSUI.Events.FocusEventArgs(this, jqEvent));
                }
            };
            Control.prototype._OnBlur = function (jqEvent) {
                if (UI.CurrentFocusedControl == this) {
                    UI.CurrentFocusedControl = null;
                }
                this.RemoveClass("Focused");
                this.RemoveClass("TabFocused");
                this.OnBlur.Invoke(new TSUI.Events.BlurEventArgs(this, jqEvent));
            };
            Control.prototype._OnKeyDown = function (jqEvent) {
                if (jqEvent.keyCode === 13) {
                    TSUI.StopEvent(jqEvent);
                    this.InvokeDefaultAction();
                } else {
                    UI.OnKeyDown_Global_First(jqEvent);
                    this.OnKeyDown.Invoke(new TSUI.Events.KeyDownEventArgs(this, jqEvent));
                    return UI.OnKeyDown_Global_Last(jqEvent);
                }
            };

            Control.prototype._OnChildren_Modified = function (eventArgs) {
                if (this.DOMConstructed) {
                    switch (eventArgs.Modification) {
                        case TSUI.Events.CollectionModifications.Add:
                            for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                                eventArgs.ModifiedElements.ElementAt(i).ConstructDOM(this._rootElement);
                            }
                            break;
                        case TSUI.Events.CollectionModifications.Remove:
                            for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                                eventArgs.ModifiedElements.ElementAt(i).DestroyDOM();
                            }
                            break;
                        case TSUI.Events.CollectionModifications.Reorder:
                            for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                                var cObj = eventArgs.ModifiedElements.ElementAt(i);
                                cObj.DestroyDOM();
                                cObj.ConstructDOM(this._rootElement);
                            }
                            break;
                    }
                }
            };

            Control.prototype._This_Resized_ChainHandler = function (eventArgs) {
                if (this._This_Resized_ChainHandler_Timeout === -1) {
                    var _this = this;
                    this._This_Resized_ChainHandler_Timeout = setTimeout(function () {
                        for (var i = 0; i < _this.Children.Count(); i++) {
                            _this.Children.ElementAt(i).OnResize.Invoke(eventArgs);
                        }
                        _this._This_Resized_ChainHandler_Timeout = -1;
                    }, 100);
                }
            };

            Control.prototype._This_Moved_ChainHandler = function (eventArgs) {
                if (this._This_Moved_ChainHandler_Timeout === -1) {
                    var _this = this;
                    this._This_Moved_ChainHandler_Timeout = setTimeout(function () {
                        for (var i = 0; i < _this.Children.Count(); i++) {
                            _this.Children.ElementAt(i).OnMove.Invoke(eventArgs);
                        }
                        _this._This_Moved_ChainHandler_Timeout = -1;
                    }, 100);
                }
            };

            Control.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                if (!this.DOMConstructed) {
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

                if (!this.OptimiseConstructForGraphics) {
                    for (var i = 0; i < this.Children.Count(); i++) {
                        var child = this.Children.ElementAt(i);
                        child.ConstructDOM(this._rootElement);
                    }
                    if (onComplete) {
                        onComplete();
                    }
                } else if (this.Children.Count() > 0) {
                    var i = 0;
                    var _this = this;
                    var func = function () {
                        var child = _this.Children.ElementAt(i);
                        if (!!child) {
                            child.OptimiseConstructForGraphics = true;
                            child.ConstructDOM(_this._rootElement, function () {
                                i++;
                                if (i < _this.Children.Count()) {
                                    setTimeout(func, Control.OptimiseConstructForGraphics_DelayTime);
                                } else if (onComplete) {
                                    onComplete();
                                }
                            });
                        } else {
                            i++;
                            if (i < _this.Children.Count()) {
                                setTimeout(func, Control.OptimiseConstructForGraphics_DelayTime);
                            } else if (onComplete) {
                                onComplete();
                            }
                        }
                    };
                    func();
                } else if (onComplete) {
                    onComplete();
                }
            };
            Control.prototype.DestroyDOM = function () {
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
                }

                for (var i = 0; i < this.Children.Count(); i++) {
                    this.Children.ElementAt(i).DestroyDOM();
                }
            };

            Control.prototype.ID = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._rootElement.attr("id", value);
                }
                return this._rootElement.attr("id");
            };

            Control.prototype.GetStyle = function (name) {
                return this._rootElement.css(name);
            };
            Control.prototype.ApplyStyle = function (name, value) {
                this._rootElement.css(name, value);
            };
            Control.prototype.ApplyStyles = function (cssProps) {
                this._rootElement.css(cssProps);
            };
            Control.prototype.AddClass = function (name) {
                if (!this.HasClass(name)) {
                    this._rootElement.addClass(name);
                }
            };
            Control.prototype.RemoveClass = function (name) {
                this._rootElement.removeClass(name);
            };
            Control.prototype.HasClass = function (name) {
                return this._rootElement.hasClass(name);
            };

            Control.prototype.BackColor = function (color) {
                if (typeof color === "undefined") { color = null; }
                if (color !== null) {
                    this._rootElement.css("background-color", color);
                }
                return this._rootElement.css("background-color");
            };
            Control.prototype.ForeColor = function (color) {
                if (color !== null) {
                    this._rootElement.css("color", color);
                }
                return this._rootElement.css("color");
            };

            Control.prototype.CSSNumberStyle = function (style, value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._rootElement.css(style, value.ToString());
                }
                return UI.CSSNumber.FromString(this._rootElement.css(style));
            };

            Control.prototype.Width = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = this.CSSNumberStyle("width", value);
                if (value !== null) {
                    this.OnResize.Invoke(new TSUI.Events.ResizeEventArgs(this, null));
                }
                return result;
            };
            Control.prototype.Height = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = this.CSSNumberStyle("height", value);
                if (value !== null) {
                    this.OnResize.Invoke(new TSUI.Events.ResizeEventArgs(this, null));
                }
                return result;
            };

            Control.prototype.ActualWidth = function () {
                return this._rootElement.outerWidth();
            };
            Control.prototype.ActualHeight = function () {
                return this._rootElement.outerHeight();
            };

            Control.prototype.Top = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = this.CSSNumberStyle("top", value);
                this.OnMove.Invoke(new TSUI.Events.MoveEventArgs(this, null));
                return result;
            };
            Control.prototype.Bottom = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.CSSNumberStyle("bottom", value);
            };
            Control.prototype.Left = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = this.CSSNumberStyle("left", value);
                this.OnMove.Invoke(new TSUI.Events.MoveEventArgs(this, null));
                return result;
            };
            Control.prototype.Right = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.CSSNumberStyle("right", value);
            };

            Control.prototype.PageTop = function () {
                return this._rootElement.offset().top;
            };
            Control.prototype.PageLeft = function () {
                return this._rootElement.offset().left;
            };
            Control.prototype.PageBottom = function () {
                return this._rootElement.offset().top + this.ActualHeight();
            };
            Control.prototype.PageRight = function () {
                return this._rootElement.offset().left + this.ActualWidth();
            };

            Control.prototype.MinWidth = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.CSSNumberStyle("min-width", value);
            };
            Control.prototype.MinHeight = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.CSSNumberStyle("min-height", value);
            };
            Control.prototype.MaxWidth = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.CSSNumberStyle("max-width", value);
            };
            Control.prototype.MaxHeight = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.CSSNumberStyle("max-height", value);
            };

            Control.prototype.SetParentVisible = function (value) {
                this._parentVisible = value;

                var len = this.Children.Count();
                for (var i = 0; i < len; i++) {
                    this.Children.ElementAt(i).SetParentVisible(value);
                }
            };
            Control.prototype.ActuallyVisible = function () {
                return this._parentVisible && this.Visible();
            };
            Control.prototype.Visible = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._rootElement.css({
                        visibility: value ? "" : "hidden",
                        display: ""
                    });

                    var len = this.Children.Count();
                    for (var i = 0; i < len; i++) {
                        this.Children.ElementAt(i).SetParentVisible(value);
                    }
                }
                return this._rootElement.css("visibility") !== "hidden" && this._rootElement.css("display") !== "none";
            };
            Control.prototype.EnableByParent = function () {
                this._HandleEnableSet(this._Enabled);
                if (this._Enabled) {
                    for (var i = 0; i < this.Children.Count(); i++) {
                        this.Children.ElementAt(i).EnableByParent();
                    }
                }
            };
            Control.prototype.DisableByParent = function () {
                this._HandleEnableSet(false);
                for (var i = 0; i < this.Children.Count(); i++) {
                    this.Children.ElementAt(i).DisableByParent();
                }
            };

            Control.prototype.Enabled = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Enabled = value;

                    for (var i = 0; i < this.Children.Count(); i++) {
                        var elem = this.Children.ElementAt(i);
                        if (this._Enabled) {
                            elem.EnableByParent();
                        } else {
                            elem.DisableByParent();
                        }
                    }

                    this._HandleEnableSet(this._Enabled);
                }
                return this._Enabled;
            };
            Control.prototype.ActuallyEnabled = function () {
                return !this.HasClass("Disabled");
            };
            Control.prototype._HandleEnableSet = function (enabled) {
                if (enabled) {
                    this._rootElement.removeClass("Disabled");
                    if (this._WasSelectionEnabled) {
                        this.EnableSelection();
                    }
                } else {
                    this._rootElement.addClass("Disabled");
                    this._WasSelectionEnabled = this._SelectionEnabled;
                    this.DisableSelection();
                }

                this._HandleFocusableSet(this.Focusable());
            };
            Control.prototype._HandleFocusableSet = function (focusable) {
                if (focusable && !this.HasClass("Disabled")) {
                    this._rootElement.attr("tabindex", this._TabIndex.toString());

                    if (this._rootElement.is(":focus") && !this.HasClass("Focused")) {
                        this.Focus();
                    }
                } else {
                    this._rootElement.removeAttr("tabindex");
                }

                if (!this._Focusable && this._rootElement.is(":focus")) {
                    this.Blur();
                }
            };

            Control.prototype.Focusable = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Focusable = value;
                    if (this._TabIndex === 0) {
                        this._TabIndex = ++UI._currTabIndex;
                    }

                    this._HandleFocusableSet(value);
                }
                return this._Focusable;
            };
            Control.prototype.Show = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.FadeAnimator(); }
                if (!this.Visible()) {
                    this.Enabled(false);
                    var _this = this;
                    animator.Show(this, function () {
                        _this.Enabled(true);
                        _this.Visible(true);
                        _this.OnShow.Invoke(new TSUI.Events.ShowEventArgs(_this));
                        if (callback !== null)
                            callback();
                    });
                } else if (callback !== null) {
                    callback();
                }
            };
            Control.prototype.Hide = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.FadeAnimator(); }
                if (this.Visible()) {
                    this.Enabled(false);
                    var _this = this;
                    setTimeout(function () {
                        animator.Hide(_this, function () {
                            _this.Enabled(true);
                            _this.Visible(false);
                            _this.OnHide.Invoke(new TSUI.Events.HideEventArgs(_this));
                            if (callback !== null)
                                callback();
                        });
                    }, 200);
                } else if (callback !== null) {
                    callback();
                }
            };

            Control.prototype.EnableSelection = function () {
                this._rootElement.enableSelection();
                this._SelectionEnabled = true;
            };
            Control.prototype.DisableSelection = function () {
                this._rootElement.disableSelection();
                this._SelectionEnabled = false;
            };

            Control.prototype.Focus = function () {
                this._rootElement.focus();
            };
            Control.prototype.Blur = function () {
                this._rootElement.blur();
            };

            Control.prototype.InvokeDefaultAction = function () {
            };

            Control.prototype.IsRelativeLayout = function () {
                return this._rootElement.hasClass("RelativeLayout");
            };
            Control.prototype.RelativeLayoutOn = function () {
                this.AddClass("RelativeLayout");
            };
            Control.prototype.RelativeLayoutOff = function () {
                this.RemoveClass("RelativeLayout");
            };

            Control.prototype.TabIndex = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._TabIndex = value;
                    if (value === -2) {
                        this._rootElement.removeAttr("tabindex");
                    } else {
                        this._rootElement.attr("tabindex", value.toString());
                    }
                }
                var retVal = parseInt(this._rootElement.attr("tabindex"), 10);
                if (isNaN(retVal)) {
                    retVal = -2;
                }
                return retVal;
            };

            /** Returns the default binding group for the control. */
            Control.prototype.GetDefaultBindingGroup = function () {
                return this.DefaultGroup;
            };

            /** Adds a new binding group to Bindings.
            @returns The new binding group.
            */
            Control.prototype.AddBindingGroup = function (updater) {
                var newGroup = new TSUI.Data.BindingGroup(updater);
                this.Bindings.BindingGroups.Add(newGroup);
                return newGroup;
            };

            /** Removes a binding group from Bindings and calls unbind on all the bindings in the group.
            @param group The group to remove.
            @returns The binding group that was removed.
            */
            Control.prototype.RemoveBindingGroup = function (group) {
                var len = group.DataBindings.Count();
                for (var i = 0; i < len; i++) {
                    this._removeBinding(group, group.DataBindings.ElementAt(i));
                }
                this.Bindings.BindingGroups.Remove(group);

                return group;
            };

            /** Adds a new data binding to the specified group for this control.
            @param property The control property to bind to.
            @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
            @param accessor The data accessor to use for the new binding.
            @param group The binding group to add the new binding to.
            @param bindingDirection The binding direction to use for the new binding.
            @param adapter The data adapter to use for the new binding.
            @returns The new data binding.
            */
            Control.prototype.AddBinding = function (propertyName, dataProperty, accessor, group, bindingDirection, adapter) {
                if (typeof group === "undefined") { group = this.DefaultGroup; }
                if (!this[propertyName]) {
                    throw "Property name does exist on this control!";
                }
                if (!TSUI.isFunction(this[propertyName])) {
                    throw "Property name does not refer to a function!";
                }

                var newBinding = new TSUI.Data.DataBinding(this, propertyName, dataProperty, accessor, bindingDirection, adapter);

                group.DataBindings.Add(newBinding);

                return newBinding;
            };

            /** Removes a data binding from all binding groups in the binding collection.
            @param binding The binding to remove.
            @returns Void
            */
            Control.prototype.RemoveBinding = function (binding) {
                var groupsLen = this.Bindings.BindingGroups.Count();
                for (var groupNum = 0; groupNum < groupsLen; groupNum++) {
                    var group = this.Bindings.BindingGroups.ElementAt(groupNum);
                    this._removeBinding(group, binding);
                }
            };

            /** Internal method which handles removing a binding on the control from the specified group.
            @param group The group to remove the binding from.
            @param binding The binding to remove.
            @returns Void
            */
            Control.prototype._removeBinding = function (group, binding) {
                binding.Unbind();
                group.DataBindings.Remove(binding);
            };
            Control.OnClickEventName = "click";
            Control.OnMouseDownEventName = "mousedown touchstart";
            Control.OnMouseUpEventName = "mouseup touchend";
            Control.OnMouseMoveEventName = "mousemove touchmove";

            Control.OptimiseConstructForGraphics_DelayTime = 30;
            return Control;
        })();
        UI.Control = Control;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

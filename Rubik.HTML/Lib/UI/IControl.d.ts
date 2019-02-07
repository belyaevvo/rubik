/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.
 - 6/Sep/13 : Added inline documentation.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Collections/Collections_BuildRefs.d.ts" />
/// <reference path="../Animation/IAnimator.d.ts" />
/// <reference path="CSSNumber.ts" />
/// <reference path="../../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../Events/Events.ts" />
/// <reference path="IFrameworkElement.ts" />

declare module Rubik.UI
{
    /** Defines a user interface control. */
    export interface IControl extends IFrameworkElement
    {
        /** The unique identifier for the control. */
        __UID: number;


        /** The jQuery element to use when animating the control. (Often the root element)*/
        AnimationElement(): JQuery;

        /** Whether to optimise construct calls for reducing interuptions to on-screen animation. 
           (Uses setTimeout to delay construction allowing time for browser to fire graphics events e.g. requestAnimationFrame responses.)
       */
        OptimiseConstructForGraphics: boolean;

        /** Whether the DOM has been constructed for the control. */
        DOMConstructed: boolean;
        /** Constructs the DOM for control adding the root element to the specified parent. 
            @param parent The element to add the control to.
            @param onComplete The method to call when the control and its children have been constructed.
            @returns Void.
        */
        ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        /** Destroys the DOM for the control.
            @returns Void.
        */
        DestroyDOM(): void;
        
      

        /** Event fired when the control is clicked. (Also, normally, when default action is invoked). */
        OnClick: Events.ClickEvent;
        /** Event fired when the mouse left-click goes down on the control. */
        OnMouseDown: Events.MouseDownEvent;
        /** Event fired when the mouse left-click goes up on the control. */
        OnMouseUp: Events.MouseUpEvent;
        /** Event fired when the mouse moves over the control. */
        OnMouseMove: Events.MouseMoveEvent;
        /** Event fired when the control is resized. Does not include jQuery animation or direct DOM manipulation. */
        OnResize: Events.ResizeEvent;
        /** Event fired when the control is moved. Does not include jQuery animation or direct DOM manipulation. */
        OnMove: Events.MoveEvent;
        /** Event fired when the control is shown. Does not include jQuery animation or direct DOM manipulation. */
        OnShow: Events.ShowEvent;
        /** Event fired when the control is hidden. Does not include jQuery animation or direct DOM manipulation. */
        OnHide: Events.HideEvent;
        /** Event fired when the control gains focus. Occurs either from tab key or mouse focus. */
        OnFocus: Events.FocusEvent;
        /** Event fired when the control loses focus. Occurs either from tab key or mouse de-focus. */
        OnBlur: Events.BlurEvent;
        /** Event fired when a key is pushed down and the control has focus. */
        OnKeyDown: Events.KeyDownEvent;
        /** Event fired when a key is pushed down and held (i.e. pressed) and the control has focus. */
        OnKeyPress: Events.KeyPressEvent;
        /** Event fired when a key is released and the control has focus. */
        OnKeyUp: Events.KeyUpEvent;

        /** Whether the document element should be used for mouse up events. */
        TargetDocumentFor_MouseUp: boolean;
        /** Whether the document element should be used for mouse move events. */
        TargetDocumentFor_MouseMove: boolean;
               
                     
        /** Sets the underlying value as to whether the parent control is visible or not.
            @param value The value to set the parent visible value to.
            @returns Void.
        */
        SetParentVisible(value: boolean): void;
      
        /** Gets or sets whether the control is enabled or not.
            @param value The value to enabled to.
            @returns The actual value of enabled state. Ignores parent enabled state.
        */
        Enabled(value?: boolean): boolean;
        /** Gets whether the control is actually enabled or not taking into account parent enabled state.
            @returns The actual value of enabled state taking into account parent enabled state.
        */
        ActuallyEnabled(): boolean;
        /** Gets or sets whether the control is focusable or not.
            @param value The value to focusable to.
            @returns The actual value of focusable state.
        */
        Focusable(value?: boolean): boolean;
        /** Call when the parent control is enabled. 
            @returns Void.
        */
        EnableByParent(): void;
        /** Call when the parent control is disabled. 
            @returns Void.
        */
        DisableByParent(): void;

        /** Shows the current control using the specified animator. Some controls have a different default animator.
            @param callback The callback function to call when showing is complete.
            @param animator The animator to use to show the control.
            @returns Void.
        */
            Show(callback?: () => void, animator?: Animation.IAnimator): void ;
        /** Hides the current control using the specified animator. Some controls have a different default animator.
            @param callback The callback function to call when hiding is complete.
            @param animator The animator to use to hide the control.
            @returns Void.
        */
        Hide(callback?: () => void, animator?: Animation.IAnimator): void;

        /** Enables selection (highlighting) of the control.
            @returns Void.
        */
        EnableSelection(): void;
        /** Disables selection (highlighting) of the control.
            @returns Void.
        */
        DisableSelection(): void;

        /** Focuses the control - gives focus to the control. */
        Focus(): void;
        /** Blurs the control - removes focus from the control. */
        Blur(): void;
       

        /** Gets or sets the tab index of the control.
            @param value The value to set the tab index to.
            @returns The actual value of the control's tab index.
        */
        TabIndex(value?: number): number; 

        /** Gets or sets whether the control is propogate resize or move events to children.
           @param value The value to handlechainevents set to.
           @returns The actual value of handlechainevents state.
       */
        HandleChainEvents(value?: boolean): boolean;
    }   
}
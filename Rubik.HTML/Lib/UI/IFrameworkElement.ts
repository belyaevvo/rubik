/// <reference path="../Collections/Collections_BuildRefs.d.ts" />
/// <reference path="../Animation/IAnimator.d.ts" />
/// <reference path="CSSNumber.ts" />
/// <reference path="../../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../Events/Events.ts" />

declare module Rubik.UI {
    /** Defines a user interface control. */
    export interface IFrameworkElement {
        /** The unique identifier for the control. */
        __UID: number;

        /** The root jQuery element for the control. This shouldn't generally be accessed outside of the library. */
        _rootElement: JQuery;
        
        /** The children of the control. Adding/removing to/from this list automatically constructs/destroys the required DOM. */
        Children: Collections.IList<IControl>;
        
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

        /** The ID for the control. Sets the 'id' attribute (not __UID)
            @param value The value to set the ID to.
            @returns The actual value of the ID.
        */
        ID(value?: string): string;

        /** Gets the value of the specified css style.
            @param name The name of the css style to get.
            @returns The value of the specified css style.
        */
        GetStyle(name: string): string;
        /** Applies the specified css style with the specified value.
            @param name The name of the css value to set.
            @param value The value to set the css style to.
            @returns Void.
        */
        ApplyStyle(name: string, value: string): void;
        /** Applies the specified css styles to the control. cssProps relates to the jQuery parameter.
            @param cssProps The properties and values to set. See jQuery .css method.
            @returns Void.
        */
        ApplyStyles(cssProps: any): void;
        /** Adds the specified class to the control.
            @param name The name of the class to add.
            @returns Void.
        */
        AddClass(name: string): void;
        /** Removes the specified class from the control.
            @param name The name of the class to remove.
            @returns Void.
        */
        RemoveClass(name: string): void;
        /** Whether the control has the specified class or not.
            @param name The class to look for.
            @returns Whether the control has the class or not.
        */
        HasClass(name: string): boolean;

        /** Gets or sets the background colour of the control.
            @param color The colour to set to.
            @returns The actual value of the background color.
        */
        BackColor(color?: string): string;
        /** Gets or sets the fore (text) colour of the control.
            @param color The colour to set to.
            @returns The actual value of the fore (text) color.
        */
        ForeColor(color?: string): string;

        
        /** Gets or sets the width of the control.
            @param value The value to set the width to.
            @returns The actual value of the width.
        */
        Width(value?: string | number): number | void;
        /** Gets or sets the height of the control.
            @param value The value to set the height to.
            @returns The actual value of the height.
        */
        Height(value?: string | number): number | void;

        /** Gets the pixel width of the control.
            @returns The pixel width of the control.
        */
        ActualWidth(): number;
        /** Gets the pixel height of the control.
            @returns The pixel height of the control.
        */
        ActualHeight(): number;

        /** Gets or sets the top position of the control.
            @param value The value to set the top position to.
            @returns The actual value of the top position.
        */
        Top(value?: string | number): number | void;
        /** Gets or sets the bottom position of the control.
            @param value The value to set the bottom position to.
            @returns The actual value of the bottom position.
        */
        Bottom(value?: string | number): number | void;
        /** Gets or sets the left position of the control.
            @param value The value to set the left position to.
            @returns The actual value of the left position.
        */
        Left(value?: string | number): number | void;
        /** Gets or sets the right position of the control.
            @param value The value to set the right position to.
            @returns The actual value of the right position.
        */
        Right(value?: string | number): number | void;

        /** Gets or sets the top margin of the control.
           @param value The value to set the top margin to.
           @returns The actual value of the top margin.
       */
        MarginTop(value?: string | number): number | void;
        /** Gets or sets the bottom margin of the control.
            @param value The value to set the bottom margin to.
            @returns The actual value of the bottom margin.
        */
        MarginBottom(value?: string | number): number | void;
        /** Gets or sets the left margin of the control.
            @param value The value to set the left margin to.
            @returns The actual value of the left margin.
        */
        MarginLeft(value?: string | number): number | void;
        /** Gets or sets the right margin of the control.
            @param value The value to set the right margin to.
            @returns The actual value of the right margin.
        */
        MarginRight(value?: string | number): number | void;       

        /** Gets or sets the min-width of the control.
            @param value The value to set the min-width to.
            @returns The actual value of the min-width.
        */
        MinWidth(value?: string | number): number | void;
        /** Gets or sets the min-height of the control.
            @param value The value to set the min-height to.
            @returns The actual value of the min-height.
        */
        MinHeight(value?: string | number): number | void;
        /** Gets or sets the max-width of the control.
            @param value The value to set the max-width to.
            @returns The actual value of the max-width.
        */
        MaxWidth(value?: string | number): number | void;
        /** Gets or sets the max-height of the control.
            @param value The value to set the max-height to.
            @returns The actual value of the max-height.
        */
        MaxHeight(value?: string | number): number | void;

        /** Sets the underlying value as to whether the parent control is visible or not.
            @param value The value to set the parent visible value to.
            @returns Void.
        */
        SetParentVisible(value: boolean): void;
        /** Gets whether the control is actually visible i.e. it and its parent are visible. 
            @returns Whether the control is actually visible or not.
        */
        ActuallyVisible(): boolean;
        /** Gets or sets whether the control is visible or not.
            @param value The value to visibility to. Uses visibility: hidden.
            @returns The actual value of visibility taking into account css visibility and display. Ignores parent visibility.
        */
        Visible(value?: boolean): boolean;
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

        /** Invokes the default action on the control. */
        InvokeDefaultAction(): void;

        /** Whether the control is using relative layout or absolute positioning. */
        IsRelativeLayout(): boolean;
        /** Switches the control to relative positioning - position:relative. */
        RelativeLayoutOn(): void;
        /** Switches the control to absolute positioning - position:absolute. */
        RelativeLayoutOff(): void;

        /** Gets or sets the tab index of the control.
            @param value The value to set the tab index to.
            @returns The actual value of the control's tab index.
        */
        TabIndex(value?: number): number;
        
    }
}
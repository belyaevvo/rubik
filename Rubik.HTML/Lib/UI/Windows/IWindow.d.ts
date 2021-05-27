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


/// <reference path="../IButton.d.ts" />
/// <reference path="../IPanel.d.ts" />
/// <reference path="../IControl.d.ts" />

declare module Rubik.UI
{
    /** Defines a window. */
    export interface IWindow extends IContentControl
    {
        /** The content panel that all children should be added to. */
        ContentPanel: IPanel;
        /** The close button for the window. */
        CloseButton: IButton;

        /** Whether the window should destroy its DOM when it closes. */
        DestroyDOMOnClose: boolean;

        /** Event fired when the window closes. */
        OnClose: Events.CloseEvent;

        /** Gets the title of the window. 
            @returns The title of the window.
        */
        Title(): string;
        /** Sets the title of the window.
            @param value The value to set the title to.
            @returns The final value of the title of the window.
        */
        Title(value: string): string;

        /** The main title bar of the window. */
        MainTitleBar: ITitleBar;
        /** The main resize grip for the window. */
        MainResizeGrip: IResizeGrip;

        /** Whether dragging to reposition the window is enabled. 
            @param value Whether to enable dragging or not.
            @retruns The final value of whether dragging is enabled or not.
        */
        DragEnabled(value?: boolean): boolean;
        /** Whether dragging to resize the window is enabled. 
            @param value Whether to enable resizing or not.
            @retruns The final value of whether resizing is enabled or not.
        */
        ResizeEnabled(value?: boolean): boolean;
    }
}
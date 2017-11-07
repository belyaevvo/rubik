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

/// <reference path="../IListBox.d.ts" />
/// <reference path="IWindow.d.ts" />

declare module TSUI.UI
{
    /** Defines a basic selection window.
        T: The type of item in the list.
    */
    export interface ISelectionWindow<T> extends IWindow
    {
        /** The main list box for the window to add items to. */
        ContentPanel: IListBox<T>;
        
        /** Positions the message box in the centre of the window (use before calling Show). 
            @returns Void.
        */
        PositionCenterWindow(): void;
    }
}
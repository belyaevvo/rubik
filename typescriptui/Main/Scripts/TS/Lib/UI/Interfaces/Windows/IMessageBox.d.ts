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

/// <reference path="IWindow.d.ts" />

declare module TSUI.UI
{
    /** Defines a basic message box window. */
    export interface IMessageBox extends IWindow
    {
        /** The message box text. 
            @param value The text to set to.
            @returns Void.
        */
        Text(value?: string): string;

        /** Positions the message box in the centre of the parent (use before calling Show). 
            @param parent The control to centre in.
            @returns Void.
        */
        PositionCenterParent(parent: IControl): void;
    }
}
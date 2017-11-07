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
    /** Defines a basic page window for displaying static HTML. */
    export interface IPageWindow extends IWindow
    {
        /** Positions the message box in the centre of the window (use before calling Show). 
            @returns Void.
        */
        PositionCenterWindow(): void;
    }
}
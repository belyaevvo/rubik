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


declare module Rubik.UI
{
    /** Defines a TitleBar control. */
    export interface ITitleBar extends IControl
    {
        /** Gets or sets the title text.
            @param value The value to set the title to.
            @returns The actual title.
        */
        Title(value?: string): string;
        
        /** Gets the minimum suitable window width to display the full title bar.
            @returns The width in pixels.
        */
        WindowMinSuitableWidth(): number;

        /** Gets or sets whether the title bar is draggable or not.
            @param value Whether the title bar should be draggable or not.
            @returns Whether the title bar is draggable or not.
        */
        Draggable(value?: boolean): boolean;
    }
}
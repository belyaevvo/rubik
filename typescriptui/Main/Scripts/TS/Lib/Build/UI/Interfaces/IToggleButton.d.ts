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

/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    /** Defines a ToggleButton control. */
    export interface IToggleButton extends IControl
    {
        /** Fired when the check state changes. */
        OnCheckedChange: Events.CheckedChangeEvent;

        /** Gets or sets whether the toggle button is on or off.
            @param value The value to set the toggle state to.
            @returns The checked state - true for on.
        */
        Checked(value?: boolean): boolean;
    }
}
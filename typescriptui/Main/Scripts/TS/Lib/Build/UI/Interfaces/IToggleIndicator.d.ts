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
    /** Defines a ToggleIndicator. */
    export interface IToggleIndicator extends IControl
    {
        /** Sets the toggle indicator to on.
            @returns Void.
        */
        SetIndicatorToOn(): void;
        /** Sets the toggle indicator to off.
            @returns Void.
        */
        SetIndicatorToOff(): void;
        /** Gets whether the toggle indicator is on or off.
            @returns True if the indicator is on.
        */
        IsOn(): boolean;
    }
}
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

/// <reference path="../Enums/ProgressSpinnerTypes.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    /** Defines a ProgressSpinner control. */
    export interface IProgressSpinner extends IControl
    {
        /** Gets or sets the duration (in milliseconds) of the spinner animation.
            @param value The value to set the duration to.
            @returns The actual value of the duration.
        */
        AnimationDuration(value?: number): number;
        /** Gets or sets whether the animation runs in reverse.
            @param value The value to set the reversal state to.
            @returns The actual value of the reversal state.
        */
        Reverse(value?: boolean): boolean;
    }
}
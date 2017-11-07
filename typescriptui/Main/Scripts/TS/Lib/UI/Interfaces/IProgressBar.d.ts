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

/// <reference path="../Enums/ProgressBarTypes.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    /** Defines a ProgressBar control. */
    export interface IProgressBar extends IControl
    {
        /** Gets or sets whether the animation runs in reverse.
            @param value The value to set the reversal state to.
            @returns The actual value of the reversal state.
        */
        Reverse(value?: boolean): boolean;
        /** Gets or sets the progress the bar indicates.
            @param value The value to set the progress indicator to.
            @returns The actual value of the progress indicator.
        */
        Progress(value?: number): number;
        /** Gets or sets whether the progress bar should show the %age text or not.
            @param value Whether to show the text or not.
            @returns Whether the progress bar is showing the text or not.
        */
        ShowText(value?: boolean): boolean;
    }
}
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

/// <reference path="../Enums/TextAlignments.d.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    /** Defines a Check Box control. */
    export interface ICheckBox extends IControl
    {
        /** Event fired when the Checked status of the check box changes. */
        OnCheckedChange: Events.CheckedChangeEvent;

        /** The text to put next to the check box. 
            @param value The value to set the text to.
            @returns The actual value of the text.
        */
        Text(value?: string): string;
        /** The checked status of the check box.
            @param value The value to set the checked status to. 
            @returns The actual status of the check box.
        */
        Checked(value?: boolean): boolean;
        /** The text align for the check box. Whether the text is to the left or right of the check box.
            @param value The value to set the text alignment to. 
            @returns The actual text alignment of the check box.
        */
        TextAlign(value?: TextAlignments): TextAlignments;
    }
}
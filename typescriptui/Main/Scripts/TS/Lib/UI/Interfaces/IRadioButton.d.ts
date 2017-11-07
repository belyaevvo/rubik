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

/// <reference path="../Enums/TextAlignments.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    /** Defines a RadionButton control. */
    export interface IRadioButton extends IControl
    {
        /** Fired when the checked state of the control is changed. */
        OnCheckedChange: Events.CheckedChangeEvent;

        /** Gets or sets the text of the check box. 
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
        
        /** Gets or sets the group this radio button belongs to.
            @param value The value to set the group to.
            @returns The actual value of the group the cotnrol belongs to.
        */
        Group(value?: string): string;
    }
}
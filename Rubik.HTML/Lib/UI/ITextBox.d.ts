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

declare module Rubik.UI
{
    /** Defines a TextBox control. */
    export interface ITextBox extends IControl
    {
        /** Fired when the text is changed. */
        OnTextChange: Events.TextChangeEvent;

        /** Gets or sets the text of the control.
            @param value The value to set the text to.
            @returns The actual text of the control.
        */
        Text(value?: string): string;
        /** Gets or sets whether the text is masked.
            @param value The value to set the masked state to.
            @returns The actual text mask state.
        */
        Masked(value?: boolean): boolean;

        /** Gets or sets the max-length of the text.
            @param value The value to set the max-length to.
            @returns The actual value of the max-length.
        */
        MaxLength(value?: number): number;

        /** Gets the underlying <input> element. 
            @returns The underlying <input> element. 
        */
        TextInput(): JQuery;
    }
}
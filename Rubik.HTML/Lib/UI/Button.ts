/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IButton.d.ts" />
/// <reference path="Label.ts" />
/// <reference path="Control.ts" />

module Rubik.UI
{
    /** A basic button control implementation. */
    export class Button extends Control implements IButton
    {
        /** The label control which is the button's text. */
        TextLabel: ILabel;

        /** Creates a new Button control. */
        constructor()
        {
            super();

            this._rootElement.addClass("Button");

            this.TextLabel = new Label();
            this.Children.Add(this.TextLabel);

            this.Focusable(true);
        }

        /** Gets or sets the button text.
            @param value (Optional) The value to set the text to.
            @returns the value of the button's text.
        */
        Text(value: string = null): string
        {
            return this.TextLabel.Text(value);
        }

        /** Invokes the button's click event. */
        InvokeDefaultAction(): void
        {
            this._rootElement.click();
        }
    }
}
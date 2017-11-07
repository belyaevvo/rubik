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
    /** Defines a Label control. */
    export interface ILabel extends IControl
    {
        /** Gets or sets the text of the label.
            @param value The value to set the text to.
            @returns The actual value of the text.
        */
        Text(value?: string): string;
        /** Gets or sets the inner HTML of the label.
            @param value The value to set the inner HTML to.
            @returns The actual value of the inner HTML.
        */
        HTML(value?: string): string;
        /** Gets or sets the url the label should link to.
            @param value The value to set the url to.
            @returns The actual value of the url the label links to.
        */
        Link(value?: string): string;
    }
}
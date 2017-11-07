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
    /** Defines an Image Box control. */
    export interface IImageBox extends IControl
    {
        /** Gets or sets the alternate text of the image.
            @param value The value to set the alternate text to.
            @returns The actual value of the alternate text.
        */
        AlternateText(value?: string): string;
        /** Gets or sets the source of the image.
            @param value The value to set the source to.
            @returns The actual value of the source.
        */
        Source(value?: string): string;
    }
}
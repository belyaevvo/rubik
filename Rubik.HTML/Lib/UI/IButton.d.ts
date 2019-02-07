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

/// <reference path="ContentControl.ts" />

declare module Rubik.UI
{
    /** Defines a Button control. */
    export interface IButton extends IContentControl
    {
        /** The text of the button. */
        Text(value?: string): string;
    }
}
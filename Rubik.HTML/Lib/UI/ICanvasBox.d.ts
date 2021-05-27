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

/// <reference path="IImageBox.d.ts" />

declare module Rubik.UI
{
    /** Defines a Canvas control. Uses HTML5 canvas element. */
    export interface ICanvasBox extends IImageBox
    {
        /** Gets the 2D rendering context for the canvas. */
        Context(): CanvasRenderingContext2D;
    }
}
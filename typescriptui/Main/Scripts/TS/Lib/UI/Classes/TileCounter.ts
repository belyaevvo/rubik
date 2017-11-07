/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Interfaces/ITileCounter.d.ts" />
/// <reference path="Label.ts" />

module TSUI.UI
{
    export class TileCounter extends Label implements ITileCounter
    {
        constructor()
        {
            super();

            this._rootElement.addClass("Counter");
        }
    }
}
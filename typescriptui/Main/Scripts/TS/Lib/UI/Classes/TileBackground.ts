/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Interfaces/ITileBackground.d.ts" />
/// <reference path="ImageBox.ts" />

module TSUI.UI
{
    export class TileBackground extends ImageBox implements ITileBackground
    {
        constructor(source?: string)
        {
            super(source);

            this._rootElement.addClass("Background");
        }

        SetPosition(value: TileBackgroundPositions)
        {
            switch (value)
            {
                case TileBackgroundPositions.OffTop:
                    this._rootElement.addClass("OffTop");
                    this._rootElement.removeClass("In");
                    this._rootElement.removeClass("OffBottom");
                    break;
                case TileBackgroundPositions.In:
                    this._rootElement.addClass("In");
                    this._rootElement.removeClass("OffTop");
                    this._rootElement.removeClass("OffBottom");
                    break;
                case TileBackgroundPositions.OffBottom:
                    this._rootElement.addClass("OffBottom");
                    this._rootElement.removeClass("In");
                    this._rootElement.removeClass("OffTop");
                    break;
            }
        }
    }
}
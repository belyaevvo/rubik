/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Interfaces/ISVGBox.d.ts" />
/// <reference path="ImageBox.ts" />

module TSUI.UI
{
    export class SVGBox extends ImageBox implements ISVGBox
    {
        _OverlayElement: JQuery;

        constructor(source?: string)
        {
            super();

            this._rootElement.addClass("SVGBox");
            this._ImageElement = $("<object type=\"image/svg+xml\">");

            this._OverlayElement = $("<div class=\"Overlay\">");

            this.Source(source);
        }
        
        ConstructDOM(parent: JQuery, onComplete:()=>void = null): void
        {
            var _this = this;
            super.ConstructDOM(parent, function ()
            {
                _this._rootElement.append(_this._OverlayElement);

                if (onComplete)
                {
                    onComplete();
                }
            });
        }
        DestroyDOM(): void
        {
            this._OverlayElement.remove();

            super.DestroyDOM();
        }
        
        Source(value: string = null): string
        {
            if (value !== null)
            {
                this._ImageElement.attr("data", value);
            }
            return this._ImageElement.attr("data");
        }
    }
}
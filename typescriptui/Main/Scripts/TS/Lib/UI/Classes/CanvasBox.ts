/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Interfaces/ICanvasBox.d.ts" />
/// <reference path="ImageBox.ts" />

module TSUI.UI
{
    export class CanvasBox extends ImageBox implements ICanvasBox
    {
        _CanvasElement: JQuery;

        constructor()
        {
            super();

            this._rootElement.addClass("CanvasBox");
            this._CanvasElement = $("<canvas width=\"100%\" height=\"100%\">");
        }
        
        ConstructDOM(parent: JQuery, onComplete:()=>void = null): void
        {
            var _this = this;
            super.ConstructDOM(parent, function ()
            {
                _this._ImageElement.remove();
                _this._rootElement.append(_this._CanvasElement);
                _this._CanvasElement.append(_this._ImageElement);

                _this._ImageElement.on("load", function ()
                {
                    _this._OnImageElementLoaded();
                });

                if (onComplete)
                {
                    onComplete();
                }
            });
        }
        DestroyDOM(): void
        {
            this._CanvasElement.remove();

            super.DestroyDOM();
        }

        Context(): CanvasRenderingContext2D
        {
            this._RenderImageOnLoaded = false;
            return (<HTMLCanvasElement>this._CanvasElement[0]).getContext("2d");
        }

        Source(value: string = null): string
        {
            if (value !== null)
            {
                this._RenderImageOnLoaded = true;
            }
            return super.Source(value);
        }
        _RenderImageOnLoaded:boolean = false;
        _OnImageElementLoaded(): void
        {
            if (this._RenderImageOnLoaded)
            {
                this._RenderImageOnLoaded = false;
                var context = this.Context();
                var pos = this._ImageElement.position();
                context.drawImage(this._ImageElement[0],
                                  pos.left,
                                  pos.top,
                                  100,
                                  100);
            }
        }
    }
}
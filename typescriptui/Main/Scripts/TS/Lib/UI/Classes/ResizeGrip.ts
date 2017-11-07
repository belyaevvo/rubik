/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="CanvasBox.ts" />
/// <reference path="../Interfaces/IResizeGrip.d.ts" />
/// <reference path="Control.ts" />

module TSUI.UI
{
    export class ResizeGrip extends Control implements IResizeGrip
    {
        _GripCanvas: ICanvasBox;

        GripColor: string = "#969696";
        
        constructor()
        {
            super();

            this._rootElement.addClass("ResizeGrip");
        
            this._GripCanvas = new CanvasBox();
            this.Children.Add(this._GripCanvas);
        }

        ConstructDOM(parent: JQuery, onComplete:()=>void = null): void
        {
            var _this = this;
            super.ConstructDOM(parent, function ()
            {
                _this.Render();

                if (onComplete)
                {
                    onComplete();
                }
            });
        }
        
        Enabled(value: boolean = null): boolean
        {
            var result = super.Enabled(value);
            if (value !== null)
            {
                this.Render();
            }
            return result;
        }

        Render(): void
        {
            var width = 100;
            var height = 100;
            
            var renderColor = this.GripColor;
            
            if (!this._Enabled)
            {
                renderColor = "#FAFAFA";
            }

            var context = this._GripCanvas.Context();
            context.lineWidth = 8;
            context.strokeStyle = renderColor;
            context.beginPath();

            context.moveTo(0 * (width / 6), height);
            context.lineTo(width, 0);
            
            context.moveTo(2.75 * (width / 6), height);
            context.lineTo(width, 2.75 * (height / 6));
            
            context.moveTo(5 * (width / 6), height);
            context.lineTo(width, 5 * (height / 6));
            
            context.stroke();
        }
    }
}
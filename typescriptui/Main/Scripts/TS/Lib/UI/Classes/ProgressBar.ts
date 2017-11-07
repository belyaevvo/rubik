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
/// <reference path="../Interfaces/IProgressBar.d.ts" />
/// <reference path="Control.ts" />

module TSUI.UI
{
    export class ProgressBar extends Control implements IProgressBar
    {
        _UnderlyingCanvas: ICanvasBox;

        _BarColourElem: JQuery;

        constructor(type: ProgressBarTypes = ProgressBarTypes.Horizontal)
        {
            super();

            this._rootElement.addClass("ProgressBar");

            this._UnderlyingCanvas = new CanvasBox();
            this.Children.Add(this._UnderlyingCanvas);

            this._BarColourElem = $("<span class=\"Bar\">");

            this.Type(type);
        }

        ConstructDOM(parent: JQuery, onComplete:()=>void = null): void
        {
            var _this = this;
            super.ConstructDOM(parent, function ()
            {
                _this._rootElement.append(_this._BarColourElem);

                _this._Render();

                if (onComplete)
                {
                    onComplete();
                }
            });
        }
        DestroyDOM(): void
        {
            this._BarColourElem.remove();

            super.DestroyDOM();
        }

        _Type: ProgressBarTypes = ProgressBarTypes.Horizontal;
        Type(value: ProgressBarTypes = null): ProgressBarTypes
        {
            if (value !== null)
            {
                this.RemoveClass("Circular");
                this.RemoveClass("Horizontal");
                this.RemoveClass("Vertical");
                switch (value)
                {
                    case ProgressBarTypes.Circular:
                        this.AddClass("Circular");
                        break;
                    case ProgressBarTypes.Horizontal:
                        this.AddClass("Horizontal");
                        break;
                    case ProgressBarTypes.Vertical:
                        this.AddClass("Vertical");
                        break;
                }
                this._Type = value;
                this._Render();
            }
            return this._Type;
        }

        _Reverse: boolean = false;
        Reverse(value: boolean = null): boolean
        {
            if (value !== null)
            {
                this._Reverse = value;
                this._Render();
            }
            return this._Reverse;
        }

        _Progress: number = 0;
        Progress(value: number = null): number
        {
            if (value !== null)
            {
                value = Math.max(0, Math.min(100, value));
                this._Progress = value;
                this._Render();
            }
            return this._Progress;
        }

        _ShowText: boolean = true;
        ShowText(value: boolean = null): boolean
        {
            if (value !== null)
            {
                this._ShowText = value;
                this._Render();
            }
            return this._ShowText;
        }
        
        _Render(): void
        {
            if (this.DOMConstructed)
            {
                Animation.RegisterAnimationForSingleCallback(new Animation.AnimationCallback(function (TotalElapsedTime: number)
                {
                    var val = this.Progress();
                    val /= 100;

                    var context = this._UnderlyingCanvas.Context();

                    var width: number = context.canvas.width = this.ActualWidth();
                    var height: number = context.canvas.height = this.ActualHeight();

                    var reverse = this.Reverse();

                    context.fillStyle = this._BarColourElem.css("background-color");
                    context.strokeStyle = this._BarColourElem.css("background-color");
                    context.lineWidth = 5;

                    context.clearRect(0, 0, width, height);
                    context.textAlign = "center";
                    context.textBaseline = "middle";

                    var text = this.Progress().toFixed(0) + "%";
                    var showText = this.ShowText();

                    switch (this.Type())
                    {
                        case ProgressBarTypes.Circular:
                            var Theta = (2 * Math.PI * val);
                            var radius = (width - context.lineWidth - 2) / 2;

                            context.font = (radius * 0.65).toString() + "px Arial";

                            if (val === 1)
                            {
                                Theta = (2 * Math.PI) - 0.01;
                            }

                            if (reverse)
                            {
                                Theta = (2 * Math.PI) - Theta;
                            }

                            Theta -= (Math.PI / 2);

                            if (val > 0.01)
                            {
                                context.beginPath();
                                context.moveTo(width / 2, context.lineWidth + 1);
                                context.arc(width / 2, height / 2, radius, -Math.PI / 2, Theta, reverse);
                                context.stroke();
                            }

                            if (showText)
                            {
                                context.fillStyle = this._rootElement.css("color");
                                context.fillText(text, (width / 2), (height / 2), (radius * 2) - 10);
                            }
                            break;
                        case ProgressBarTypes.Horizontal:
                            var size = val * width;
                            var x = reverse ? width - size : 0;
                            var y = 0;
                            var renderWidth = size;
                            var renderHeight = height;
                            context.font = "16px Arial";
                            context.fillRect(x, y, renderWidth, renderHeight);

                            if (showText)
                            {
                                context.fillStyle = this._rootElement.css("color");
                                context.fillText(text, (width / 2), (height / 2), width);
                            }
                            break;
                        case ProgressBarTypes.Vertical:
                            var size = val * height;
                            var x = 0;
                            var y = reverse ? height - size : 0;
                            var renderWidth = width;
                            var renderHeight = size;
                            context.font = "16px Arial";
                            context.fillRect(x, y, renderWidth, renderHeight);

                            if (showText)
                            {
                                context.fillStyle = this._rootElement.css("color");
                                context.fillText(text, (width / 2), (height / 2), width);
                            }
                            break;
                    }
                },
                this,
                true));
            }
        }
    }
}
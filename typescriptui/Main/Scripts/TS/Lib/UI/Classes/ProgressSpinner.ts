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
/// <reference path="../Interfaces/IProgressSpinner.d.ts" />
/// <reference path="Control.ts" />

module TSUI.UI
{
    export class ProgressSpinner extends Control implements IProgressSpinner
    {
        _UnderlyingCanvas: ICanvasBox;

        constructor(type: ProgressSpinnerTypes = ProgressSpinnerTypes.Horizontal)
        {
            super();

            this._rootElement.addClass("ProgressSpinner");

            this._UnderlyingCanvas = new CanvasBox();
            this.Children.Add(this._UnderlyingCanvas);

            this.Type(type);
        }
        
        _Type: ProgressSpinnerTypes = ProgressSpinnerTypes.Horizontal;
        Type(value: ProgressSpinnerTypes = null): ProgressSpinnerTypes
        {
            if (value !== null)
            {
                this.RemoveClass("Circular");
                this.RemoveClass("Horizontal");
                this.RemoveClass("Vertical");
                switch (value)
                {
                    case ProgressSpinnerTypes.Circular:
                        this.AddClass("Circular");
                        break;
                    case ProgressSpinnerTypes.Horizontal:
                        this.AddClass("Horizontal");
                        break;
                    case ProgressSpinnerTypes.Vertical:
                        this.AddClass("Vertical");
                        break;
                }
                this._Type = value;
                this._Animate();
            }
            return this._Type;
        }

        _AnimationDuration: number = 2000;
        _ReverseAnimation: boolean = false;

        AnimationDuration(value: number = null): number
        {
            if (value !== null)
            {
                this._AnimationDuration = value;
            }
            return this._AnimationDuration;
        }
        Reverse(value: boolean = null): boolean
        {
            if (value !== null)
            {
                this._ReverseAnimation = value;
            }
            return this._ReverseAnimation;
        }

        _AnimationCallbackObj: any = null;
        _Animate(): void
        {
            this._RetestVisiblity();
        }


        SetParentVisible(value: boolean): void
        {
            super.SetParentVisible(value);
            this._RetestVisiblity();
        }
        Visible(value: boolean = null): boolean
        {
            if (value !== null)
            {
                var vis = super.Visible(value);
                this._RetestVisiblity();
                return vis;
            }
            return super.Visible();
        }

        _RetestVisiblity(): void
        {
            if (this._AnimationCallbackObj !== null)
            {
                Animation.UnregisterAnimationCallback(this._AnimationCallbackObj);
                this._AnimationCallbackObj = null;
            }

            if (this.ActuallyVisible())
            {
                var context: CanvasRenderingContext2D = <CanvasRenderingContext2D>this._UnderlyingCanvas.Context();
                var width = context.canvas.width = this.ActualWidth();
                var height = context.canvas.height = this.ActualHeight();
                var _cacheWidth = width;
                var _cacheHeight = height;
                var _cacheColor = this._rootElement.css("color");

                var _cacheCallsSinceRefresh = 0;

                this._AnimationCallbackObj = Animation.RegisterAnimationCallback(new Animation.AnimationCallback(
                    function (TotalElapsedTime: number)
                    {
                        _cacheCallsSinceRefresh++;
                        if (_cacheCallsSinceRefresh > 25)
                        {
                            //Refresh cache about once a second
                            _cacheWidth = this.ActualWidth();
                            _cacheHeight = this.ActualHeight();
                            _cacheColor = this._rootElement.css("color");

                            context.canvas.width = _cacheWidth;
                            context.canvas.height = _cacheHeight;

                            _cacheCallsSinceRefresh = 0;
                        }

                        var width = _cacheWidth;
                        var height = _cacheHeight;
                        var percThrough = (TotalElapsedTime / this._AnimationDuration) % 2;

                        var type = this.Type();

                        var radius = 0;

                        context.clearRect(0, 0, width, height);

                        radius = 3;
                        var radiusPerc = 0.2;
                        var pow = 3;
                        var offsetDistMult = 3;
                        var timeOffsetDist = 0.2;

                        var AnimCircleRadius = (width - (radius * 2) - 2) / 2;
                        var circOffsetDistMult = ((radius * 3) / AnimCircleRadius);
                        var circTimeOffsetDist = 0.2;


                        context.shadowBlur = 0;

                        context.fillStyle = context.strokeStyle = _cacheColor;

                        context.beginPath();

                        if (type === ProgressSpinnerTypes.Vertical)
                        {
                            var temp = height;
                            height = width;
                            width = temp;
                        }

                        var reverse = this._ReverseAnimation;

                        var circle1Y = radius + 1;
                        var circle1X = 0;

                        var Theta = 0;
                        var pc = 0;

                        for (var circleNum = -2; circleNum < 3; circleNum++)
                        {
                            if (reverse)
                            {
                                circle1X = width - circle1X;
                            }

                            if (type == 0)
                            {
                                pc = (2 + (percThrough + (circTimeOffsetDist * circleNum))) + 0.5;
                                pc %= 2;
                                circle1X = Math.PI * (Math.pow(pc - 1, 3) + 1);

                                Theta = reverse ? (2 * Math.PI) - circle1X : circle1X;
                                circle1X = AnimCircleRadius * Math.sin(Theta);
                                circle1Y = AnimCircleRadius * Math.cos(Theta);

                                circle1X += width / 2;
                                circle1Y += height / 2;

                                context.moveTo(circle1X + 0.5, circle1Y + 0.5);
                                context.arc(circle1X + 0.5, circle1Y + 0.5, radius, 0, 2 * Math.PI);
                            }
                            else if (type === ProgressSpinnerTypes.Horizontal)
                            {
                                circle1X = (((width / 2) - (radius * offsetDistMult * circleNum)) * (Math.pow((2 * percThrough) - (2 + (timeOffsetDist * circleNum)), pow) + 1));
                                context.moveTo(circle1X + 0.5, circle1Y + 0.5);
                                context.arc(circle1X + 0.5, circle1Y + 0.5, radius, 0, 2 * Math.PI);
                            }
                            else if (type === ProgressSpinnerTypes.Vertical)
                            {
                                circle1X = (((width / 2) - (radius * offsetDistMult * circleNum)) * (Math.pow((2 * percThrough) - (2 + (timeOffsetDist * circleNum)), pow) + 1));
                                context.moveTo(circle1Y + 0.5, circle1X + 0.5);
                                context.arc(circle1Y + 0.5, circle1X + 0.5, radius, 0, 2 * Math.PI);
                            }
                        }

                        context.fill();
                    },
                    this
                    ));
            }
        }
    }
}
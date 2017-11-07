/// <reference path="../Lib/Build/IApp.d.ts" />
/// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
/// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
/// <reference path="../Definitions/jquery.d.ts" />

module TSUI.Apps.Samples
{
    export class Sample14App implements IApp
    {
        private MainContainer: JQuery = null;
        private StartArgs: string[] = null;

        Run(args: string[]= [], container: JQuery = $("body")): void
        {
            this.StartArgs = args;
            this.MainContainer = container;

            this.MainContainer.addClass("Sample14");

            console.log("Sample 14 loaded.");

            var newWindow = new DesktopWindow();
            newWindow.ConstructDOM(this.MainContainer, function ()
            {
                newWindow.Show();
            });
        }
    }

    class DesktopWindow extends UI.Window
    {
        constructor()
        {
            super();

            this.Title("Sample 14");

            this.CloseButton.Visible(false);
            this.ResizeEnabled(false);

            this.Width(new UI.CSSNumber(300));
            this.Height(new UI.CSSNumber(350));

            var canvas = new AnimatedCanvas();
            canvas.Width(new UI.CSSNumber(90, "%"));
            canvas.Height(new UI.CSSNumber(90, "%"));
            canvas.Left(new UI.CSSNumber(5, "%"));
            canvas.Top(new UI.CSSNumber(5, "%"));
            this.ContentPanel.Children.Add(canvas);
        }
    }

    class AnimatedCanvas extends UI.Control
    {
        _canvas: UI.CanvasBox;
        _perviousPercThrough: number = 0;

        constructor()
        {
            super();

            this.AddClass("AnimatedCanvas");

            this._canvas = new UI.CanvasBox();
            this._canvas.Width(new UI.CSSNumber(100, "%"));
            this._canvas.Height(new UI.CSSNumber(100, "%"));
            this._canvas.Top(new UI.CSSNumber(0));
            this._canvas.Left(new UI.CSSNumber(0));
            this.Children.Add(this._canvas);

            Animation.RegisterAnimationForSingleCallback(new Animation.AnimationCallback(function (TotalElapsedTime: number)
            {
                var canvas: UI.CanvasBox = this._canvas;
                var canvasElem: HTMLCanvasElement = <HTMLCanvasElement>canvas._CanvasElement[0];
                var context = canvasElem.getContext("2d");

                var width = canvasElem.width;
                var height = canvasElem.height;

                var animDuration = 4000;
                TotalElapsedTime = TotalElapsedTime % animDuration;
                var percThroughAnim = 0.5; //(TotalElapsedTime / animDuration);

                if (this._previousPercThrough > percThroughAnim)
                {
                    context.clearRect(
                        (width / 2) - ((width / 2) * (this._previousPercThrough + 0.01)),
                        (height / 2) - ((height / 2) * (this._previousPercThrough + 0.01)),
                        width * (this._previousPercThrough + 0.01),
                        height * (this._previousPercThrough + 0.01));
                }
                this._previousPercThrough = percThroughAnim;

                context.translate(0.5, 0.5);

                context.fillStyle = "#000000";
                context.fillRect(
                    (width / 2) - ((width / 2) * (percThroughAnim + 0.01)),
                    (height / 2) - ((height / 2) * (percThroughAnim + 0.01)),
                    width * percThroughAnim,
                    height * percThroughAnim);
            }, this));
        }
    }
}
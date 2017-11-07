/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="Animation.ts" />
/// <reference path="IAnimator.d.ts" />

module Rubik.Animation
{
    /** Animator for an AppWindow
        Note: Makes use if HTML2Canvas animation if specified.
    */
    export class AppWindowAnimator implements IAnimator
    {
        /** The length of time (milliseconds) to spend moving the window on/off the screen ('flying' the window).
            Default: 500ms
        */
        static FlyTime: number = 500;
        /** The length of time (milliseconds) to spend shrinking/enlarging the window before/after flying ('resizing' the window).
            Default: 100ms
        */
        static ResizeTime: number = 100;
        /** The length of time (milliseconds) to delay between resizing and flying the window.
            Default: 500ms
        */
        static DelayTime: number = 50;
        /** The amount (as decimal percentage e.g. 0.01 = 1%) to shrink the window (width & height).
            Default: 0.01 (i.e. 1%)
        */
        static ShrinkAmount: number = 0.01;

        /** The jQuery animation easing to use for flying and resizing. 
            Default: easeOutCubic
        */
        static AnimationEasing: string = "easeOutCubic";

        /** Indicates whether HTML2Canvas animation should be used if it is deemed better than standard animation. Set to false to disable use of HTML2Canvas.
            Default: false
        */
        static UseCanvasRenderIfSensible: boolean = false;

        /** Private: The HTML2Canvas canvas element (as jQuery reference) to be animated. */
        _CanvasElem: JQuery = null;

        /** Shows the control and invokes the callback (context not restored) after the animation is completed. 
            Window is shrunk before being shown, then flown on from the right, delay then expanded and finally callback called.
            If HTML2Canvas is to be used and canvas has not been prepared, it is prepared in this call. Otherwise, jQuery animation is used. If HTML2Canvas is used, RestoreAfterAnimationHTML2Canvas is called.
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
        */
        Show(control: UI.IControl, callback: () => void = null): void
        {
            var useCanvasRender = this._EvaluateUseCanvasRender(control);
            var OK = false;
            if (useCanvasRender)
            {
                OK = true;
                try
                {
                    var element = control.AnimationElement();
                    if (this._CanvasElem === null)
                    {
                        var _this = this;
                        AnimationHelper.PrepareHTML2CanvasForAnimation(element, function (canvas: JQuery)
                        {
                            _this.DoHTML2CanvasShow(element, canvas, callback);
                        });
                    }
                    else
                    {
                        this.DoHTML2CanvasShow(element, this._CanvasElem, callback);
                    }
                }
                catch (ex)
                {
                    OK = false;
                    AppWindowAnimator.UseCanvasRenderIfSensible = false;
                }
            }
            if (!OK)
            {
                var element = control.AnimationElement();
                var startSize = GetSize(control);
                var startWidth = startSize.width;
                var startHeight = startSize.height;
                var startPos = GetPosition(control);
                var origCSSTop = ((startPos.top / element.parent().height()) * 100).toString() + "%";
                var origCSSLeft = ((startPos.left / element.parent().width()) * 100).toString() + "%"

                element.css({
                    width: startWidth - (startWidth * AppWindowAnimator.ShrinkAmount * 2),
                    height: startHeight - (startHeight * AppWindowAnimator.ShrinkAmount * 2),
                    left: element.parent().width() + 50,
                    visibility: "",
                    display: ""
                });

                element
                    .css({
                        top: startPos.top + (startHeight * AppWindowAnimator.ShrinkAmount)
                    })
                    .animate({
                        left: startPos.left + (startWidth * AppWindowAnimator.ShrinkAmount),
                        opacity: 1
                    }, AppWindowAnimator.FlyTime, AppWindowAnimator.AnimationEasing)
                    .delay(AppWindowAnimator.DelayTime)
                    .animate({
                        width: startWidth,
                        height: startHeight,
                        top: origCSSTop,
                        left: origCSSLeft,
                        visibility: "",
                        display: ""
                    }, AppWindowAnimator.ResizeTime, callback);
            }
        }
        /** Hides the control and invokes the callback (context not restored) after the animation is completed. 
            Window is shrunk, delay, then flown off to the right, hidden properly, restored to original position & size and finally callback called.
            If HTML2Canvas is to be used and canvas has not been prepared, it is prepared in this call. Otherwise, jQuery animation is used.
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
        */
        Hide(control: UI.IControl, callback: () => void = null): void
        {
            var useCanvasRender = this._EvaluateUseCanvasRender(control);
            var OK = false;
            if (useCanvasRender)
            {
                OK = true;
                try
                {
                    var element = control.AnimationElement();
                    if (this._CanvasElem === null)
                    {
                        var _this = this;
                        AnimationHelper.PrepareHTML2CanvasForAnimation(element, function (canvas: JQuery)
                        {
                            _this.DoHTML2CanvasHide(element, canvas, callback);
                        });
                    }
                    else
                    {
                        this.DoHTML2CanvasHide(element, this._CanvasElem, callback);
                    }
                }
                catch (ex)
                {
                    OK = false;
                    AppWindowAnimator.UseCanvasRenderIfSensible = false;
                }
            }
            if (!OK)
            {
                var element = control.AnimationElement();
                var startSize = GetSize(control);
                var startWidth = startSize.width;
                var startHeight = startSize.height;
                var startPos = GetPosition(control);

                element
                    .animate({
                        width: startWidth - (startWidth * AppWindowAnimator.ShrinkAmount * 2),
                        height: startHeight - (startHeight * AppWindowAnimator.ShrinkAmount * 2),
                        top: startPos.top + (startHeight * AppWindowAnimator.ShrinkAmount),
                        left: startPos.left + (startWidth * AppWindowAnimator.ShrinkAmount)
                    }, AppWindowAnimator.ResizeTime)
                    .delay(AppWindowAnimator.DelayTime)
                    .animate({
                        left: element.parent().width() + 50,
                        opacity: 0
                    },
                    AppWindowAnimator.FlyTime,
                    AppWindowAnimator.AnimationEasing,
                    function ()
                    {
                        element.css({
                            width: startWidth,
                            height: startHeight,
                            top: startPos.top,
                            left: startPos.left,
                            display: "",
                            visibility: "hidden"
                        });

                        if (callback)
                        {
                            callback();
                        }
                    });
            }
        }

        /** Animates the passed canvas and handles switching between the canvas and the element. For more details see Show. 
            @param element The element to "animate" - should already prepared using HTML2Canvas.
            @param canvas The prepared HTML2Canvas canvas element to be animated.
            @param callback The callback to invoke after animation has completed.
        */
        private DoHTML2CanvasShow(element: JQuery, canvas: JQuery, callback: () => void )
        {
            var startWidth = parseInt(canvas.css("width"), 10);
            var startHeight = parseInt(canvas.css("height"), 10);
            var startPos = {
                top: parseInt(canvas.css("top"), 10),
                left: parseInt(canvas.css("left"), 10)
            }
            var _this = this;

            canvas
                .css({
                    width: startWidth - (startWidth * AppWindowAnimator.ShrinkAmount * 2),
                    height: startHeight - (startHeight * AppWindowAnimator.ShrinkAmount * 2),
                    left: element.parent().width() + 50,
                    top: startPos.top + (startHeight * AppWindowAnimator.ShrinkAmount),
                    opacity: 0,
                    visibility: "",
                    display: ""
                })
                .animate({
                    left: startPos.left + (startWidth * AppWindowAnimator.ShrinkAmount),
                    opacity: 1
                }, AppWindowAnimator.FlyTime, AppWindowAnimator.AnimationEasing)
                .delay(AppWindowAnimator.DelayTime)
                .animate({
                    width: startWidth,
                    height: startHeight,
                    top: startPos.top,
                    left: startPos.left,
                    visibility: "",
                    display: ""
                }, AppWindowAnimator.ResizeTime, function ()
                {
                    AnimationHelper.RestoreAfterAnimationHTML2Canvas(element, canvas);

                    _this._CanvasElem = null;

                    if (callback !== null)
                    {
                        callback();
                    }
                });
        }
        /** Animates the passed canvas and handles switching between the canvas and the element. For more details see Show. 
            @param element The element to "animate" - should already prepared using HTML2Canvas.
            @param canvas The prepared HTML2Canvas canvas element to be animated.
            @param callback The callback to invoke after animation has completed.
        */
        private DoHTML2CanvasHide(element: JQuery, canvas: JQuery, callback: () => void )
        {
            var startWidth = parseInt(canvas.css("width"), 10);
            var startHeight = parseInt(canvas.css("height"), 10);
            var startPos = {
                top: parseInt(canvas.css("top"), 10),
                left: parseInt(canvas.css("left"), 10)
            }
            canvas.css("display", "block");
            element.css("display", "none");

            canvas
                .animate({
                    width: startWidth - (startWidth * AppWindowAnimator.ShrinkAmount * 2),
                    height: startHeight - (startHeight * AppWindowAnimator.ShrinkAmount * 2),
                    top: startPos.top + (startHeight * AppWindowAnimator.ShrinkAmount),
                    left: startPos.left + (startWidth * AppWindowAnimator.ShrinkAmount)
                }, AppWindowAnimator.ResizeTime)
                .delay(AppWindowAnimator.DelayTime)
                .animate({
                    left: element.parent().width() + 50,
                    opacity: 0
                },
                AppWindowAnimator.FlyTime,
                AppWindowAnimator.AnimationEasing,
                function ()
                {
                    canvas.remove();
                    element.css({
                        width: startWidth,
                        height: startHeight,
                        top: startPos.top,
                        left: startPos.left,
                        display: "",
                        visibility: "hidden"
                    });

                    if (callback)
                    {
                        callback();
                    }
                });
        }

        /** Determines whether HTML2Canvas should be used to animate specified control (i.e. window) - takes into account UseCanvasRenderIfSensible. 
            @param control The control (i.e. window) to determine whether to animate using HTML2Canvas.
        */
        _EvaluateUseCanvasRender(control: UI.IControl): boolean
        {
            var use = AppWindowAnimator.UseCanvasRenderIfSensible;

            if (use)
            {
                var elem = control.AnimationElement();
                use = elem.width() * elem.height() > 240000; //(Window size > area of 600 x 400)
                var children = elem.find("*");
                if (use)
                {
                    use = children.length > 15;
                }
                else
                {
                    use = children.length > 50;
                }
            }

            return use;
        }

        /** Prepares a window with HTML2Canvas for animation without actually showing the canvas. Allows window to be prepared for animation then switched smoothly with another window. Preparation can take up to 30 seconds in older/slower browsers or on slow hardware. Use callback to wait for preparation to complete.
            @param control The control (i.e. window) to prepare
            @param callback The callback to invoke after preparation has completed.
        */
        PrepareHTML2CanvasForAnimation(control: UI.IControl, callback: () => void = null)
        {
            if (this._EvaluateUseCanvasRender(control))
            {
                try
                {
                    var _this = this;
                    _this._CanvasElem = null;
                    var elem = control.AnimationElement();
                    AnimationHelper.PrepareHTML2CanvasForAnimation(elem, function (canvas: JQuery)
                    {
                        _this._CanvasElem = canvas;

                        if (callback)
                        {
                            callback();
                        }
                    });
                }
                catch (ex)
                {
                    AppWindowAnimator.UseCanvasRenderIfSensible = false;
                    _this._CanvasElem = null;

                    if (callback)
                    {
                        callback();
                    }
                }
            }
            else
            {
                if (callback)
                {
                    callback();
                }
            }
        }
    }
}
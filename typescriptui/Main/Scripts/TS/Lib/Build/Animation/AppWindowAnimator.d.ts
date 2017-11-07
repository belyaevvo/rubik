/// <reference path="Animation.d.ts" />
/// <reference path="../Animation/IAnimator.d.ts" />
declare module TSUI.Animation {
    /** Animator for an AppWindow
    Note: Makes use if HTML2Canvas animation if specified.
    */
    class AppWindowAnimator implements Animation.IAnimator {
        /** The length of time (milliseconds) to spend moving the window on/off the screen ('flying' the window).
        Default: 500ms
        */
        static FlyTime: number;
        /** The length of time (milliseconds) to spend shrinking/enlarging the window before/after flying ('resizing' the window).
        Default: 100ms
        */
        static ResizeTime: number;
        /** The length of time (milliseconds) to delay between resizing and flying the window.
        Default: 500ms
        */
        static DelayTime: number;
        /** The amount (as decimal percentage e.g. 0.01 = 1%) to shrink the window (width & height).
        Default: 0.01 (i.e. 1%)
        */
        static ShrinkAmount: number;
        /** The jQuery animation easing to use for flying and resizing.
        Default: easeOutCubic
        */
        static AnimationEasing: string;
        /** Indicates whether HTML2Canvas animation should be used if it is deemed better than standard animation. Set to false to disable use of HTML2Canvas.
        Default: false
        */
        static UseCanvasRenderIfSensible: boolean;
        /** Private: The HTML2Canvas canvas element (as jQuery reference) to be animated. */
        public _CanvasElem: JQuery;
        /** Shows the control and invokes the callback (context not restored) after the animation is completed.
        Window is shrunk before being shown, then flown on from the right, delay then expanded and finally callback called.
        If HTML2Canvas is to be used and canvas has not been prepared, it is prepared in this call. Otherwise, jQuery animation is used. If HTML2Canvas is used, RestoreAfterAnimationHTML2Canvas is called.
        @param control The control to animate.
        @param callback The callback to invoke after animation has completed.
        */
        public Show(control: TSUI.UI.IControl, callback?: () => void): void;
        /** Hides the control and invokes the callback (context not restored) after the animation is completed.
        Window is shrunk, delay, then flown off to the right, hidden properly, restored to original position & size and finally callback called.
        If HTML2Canvas is to be used and canvas has not been prepared, it is prepared in this call. Otherwise, jQuery animation is used.
        @param control The control to animate.
        @param callback The callback to invoke after animation has completed.
        */
        public Hide(control: TSUI.UI.IControl, callback?: () => void): void;
        /** Animates the passed canvas and handles switching between the canvas and the element. For more details see Show.
        @param element The element to "animate" - should already prepared using HTML2Canvas.
        @param canvas The prepared HTML2Canvas canvas element to be animated.
        @param callback The callback to invoke after animation has completed.
        */
        private DoHTML2CanvasShow(element, canvas, callback);
        /** Animates the passed canvas and handles switching between the canvas and the element. For more details see Show.
        @param element The element to "animate" - should already prepared using HTML2Canvas.
        @param canvas The prepared HTML2Canvas canvas element to be animated.
        @param callback The callback to invoke after animation has completed.
        */
        private DoHTML2CanvasHide(element, canvas, callback);
        /** Determines whether HTML2Canvas should be used to animate specified control (i.e. window) - takes into account UseCanvasRenderIfSensible.
        @param control The control (i.e. window) to determine whether to animate using HTML2Canvas.
        */
        public _EvaluateUseCanvasRender(control: TSUI.UI.IControl): boolean;
        /** Prepares a window with HTML2Canvas for animation without actually showing the canvas. Allows window to be prepared for animation then switched smoothly with another window. Preparation can take up to 30 seconds in older/slower browsers or on slow hardware. Use callback to wait for preparation to complete.
        @param control The control (i.e. window) to prepare
        @param callback The callback to invoke after preparation has completed.
        */
        public PrepareHTML2CanvasForAnimation(control: TSUI.UI.IControl, callback?: () => void): void;
    }
}

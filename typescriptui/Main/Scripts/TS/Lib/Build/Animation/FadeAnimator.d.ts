/// <reference path="../Animation/IAnimator.d.ts" />
declare module TSUI.Animation {
    /** Generic fade animator for any control.
    Note: Not guaranteed to work in all situations. Does not force visibility if style sheet specifies hidden.
    */
    class FadeAnimator implements Animation.IAnimator {
        /** The length of time (milliseconds) to spend fading.
        Default: 300ms
        */
        static AnimationTime: number;
        /** The jQuery animation easing to use
        Default: swing
        */
        static AnimationEasing: string;
        /** Fades the control in. Clears CSS 'display' and 'visibility' (does not force show).
        @param control The control to animate.
        @param callback The callback to invoke after animation has completed.
        */
        public Show(control: TSUI.UI.IControl, callback?: () => void): void;
        /** Fades the control out. Sets CSS 'visibility:hidden' and 'opacity:1' after animation is complete (does not force set 'display:none').
        @param control The control to animate.
        @param callback The callback to invoke after animation has completed.
        */
        public Hide(control: TSUI.UI.IControl, callback?: () => void): void;
    }
}

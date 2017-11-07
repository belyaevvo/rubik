/// <reference path="../UI/UI Static.d.ts" />
/// <reference path="../Animation/IAnimator.d.ts" />
declare module TSUI.Animation {
    /** Animator for a StaticPageWindow. */
    class PageWindowAnimator implements Animation.IAnimator {
        /** The length of time (milliseconds) to spend animating the window.
        Default: 250ms
        */
        static AnimationTime: number;
        /** The jQuery animation easing to use
        Default: easeOutQuad
        */
        static AnimationEasing: string;
        /** Fades in the page window and the PageWindow_DisableOverlay. Clears CSS 'display' and 'visibility'
        @param control The control to animate.
        @param callback The callback to invoke after animation has completed.
        */
        public Show(control: TSUI.UI.IControl, callback?: () => void): void;
        /** Fades out the page window and the PageWindow_DisableOverlay. Sets CSS 'display:none' and 'visibility:hidden'
        @param control The control to animate.
        @param callback The callback to invoke after animation has completed.
        */
        public Hide(control: TSUI.UI.IControl, callback?: () => void): void;
    }
}

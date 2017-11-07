/// <reference path="../Animation/IAnimator.d.ts" />
declare module TSUI.Animation {
    /** Animator for a Notification. */
    class NotificationAnimator implements Animation.IAnimator {
        /** The length of time (milliseconds) to spend animating the notification.
        Default: 1000ms
        */
        static AnimationTime: number;
        /** The jQuery animation easing to use
        Default: linear
        */
        static AnimationEasing: string;
        /** Slides the notification in from the right - does not set "top". Clears CSS 'visibility' and 'display' values.
        @param control The control to animate.
        @param callback The callback to invoke after animation has completed.
        */
        public Show(control: TSUI.UI.IControl, callback?: () => void): void;
        /** Slides the notification off to the right - does not set "top". Sets CSS 'visibility:hidden' and 'display:none'; Restores CSS 'right'.
        @param control The control to animate.
        @param callback The callback to invoke after animation has completed.
        */
        public Hide(control: TSUI.UI.IControl, callback?: () => void): void;
    }
}

/// <reference path="../Animation/IAnimator.d.ts" />
declare module TSUI.Animation {
    /** Animator for animating restack of notifications.
    Note: Show/Hide are empty methods.
    */
    class NotificationRestackAnimator implements Animation.IAnimator {
        /** The length of time (milliseconds) to spend restacking.
        Default: 1000ms
        */
        static AnimationTime: number;
        /** The jQuery animation easing to use
        Default: easeInCubic
        */
        static AnimationEasing: string;
        /** This method is empty. */
        public Show(control: TSUI.UI.IControl, callback?: () => void): void;
        /** This method is empty. */
        public Hide(control: TSUI.UI.IControl, callback?: () => void): void;
        /** Animates the control to slide it up/down to new bottom (i.e. animates restack).
        @param control The control to animate.
        @param newBottom The new CSS 'bottom' value.
        @param callback The callback to invoke after animation has completed.
        */
        public AnimateRestack(control: TSUI.UI.IControl, newBottom: number, callback?: () => void): void;
    }
}

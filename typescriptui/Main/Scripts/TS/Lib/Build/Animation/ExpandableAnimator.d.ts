/// <reference path="../UI/Interfaces/IExpandable.d.ts" />
/// <reference path="../Animation/IAnimator.d.ts" />
declare module TSUI.Animation {
    /** Animator for an Expandable. */
    class ExpandableAnimator implements Animation.IAnimator {
        /** The length of time (milliseconds) to spend expanding the expandable.
        Default: 450ms
        */
        static AnimationTime: number;
        /** The jQuery animation easing to use
        Default: easeOutQuad
        */
        static AnimationEasing: string;
        /** Expands the main body of the expandable to the correct (calculated) height.
        @param control The control to animate.
        @param callback The callback to invoke after animation has completed.
        */
        public Show(control: TSUI.UI.IExpandable, callback?: () => void): void;
        /** Collapses the main body of the expandable to the correct (calculated) height i.e. just the title bar showing.
        @param control The control to animate.
        @param callback The callback to invoke after animation has completed.
        */
        public Hide(control: TSUI.UI.IExpandable, callback?: () => void): void;
    }
}

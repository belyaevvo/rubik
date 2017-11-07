/// <reference path="IAnimator.d.ts" />
declare module TSUI.Animation {
    class Animator implements Animation.IAnimator {
        public Show(control: TSUI.UI.IControl, callback?: () => void): void;
        public Hide(control: TSUI.UI.IControl, callback?: () => void): void;
    }
}

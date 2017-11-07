/// <reference path="../UI/UI Static.d.ts" />
/// <reference path="IAnimator.d.ts" />
declare module TSUI.Animation {
    class PageWindowAnimator implements Animation.IAnimator {
        static AnimationTime: number;
        static AnimationEasing: string;
        public Show(control: TSUI.UI.IControl, callback?: () => void): void;
        public Hide(control: TSUI.UI.IControl, callback?: () => void): void;
    }
}

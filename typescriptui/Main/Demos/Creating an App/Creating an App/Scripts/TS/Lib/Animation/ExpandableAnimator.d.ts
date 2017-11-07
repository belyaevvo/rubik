/// <reference path="../UI/Interfaces/IExpandable.d.ts" />
/// <reference path="IAnimator.d.ts" />
declare module TSUI.Animation {
    class ExpandableAnimator implements Animation.IAnimator {
        static AnimationTime: number;
        static AnimationEasing: string;
        public Show(control: TSUI.UI.IExpandable, callback?: () => void): void;
        public Hide(control: TSUI.UI.IExpandable, callback?: () => void): void;
    }
}

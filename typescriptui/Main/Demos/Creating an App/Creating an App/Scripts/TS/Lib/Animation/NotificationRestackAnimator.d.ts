/// <reference path="IAnimator.d.ts" />
declare module TSUI.Animation {
    class NotificationRestackAnimator implements Animation.IAnimator {
        static AnimationTime: number;
        static AnimationEasing: string;
        public Show(control: TSUI.UI.IControl, callback?: () => void): void;
        public Hide(control: TSUI.UI.IControl, callback?: () => void): void;
        public AnimateRestack(control: TSUI.UI.IControl, newBottom: number, callback?: () => void): void;
    }
}

/// <reference path="Animation.d.ts" />
/// <reference path="IAnimator.d.ts" />
declare module TSUI.Animation {
    class AppWindowAnimator implements Animation.IAnimator {
        static FlyTime: number;
        static ResizeTime: number;
        static DelayTime: number;
        static ShrinkAmount: number;
        static AnimationEasing: string;
        static UseCanvasRenderIfSensible: boolean;
        public _CanvasElem: JQuery;
        public Show(control: TSUI.UI.IControl, callback?: () => void): void;
        public Hide(control: TSUI.UI.IControl, callback?: () => void): void;
        private DoHTML2CanvasShow(element, canvas, callback);
        private DoHTML2CanvasHide(element, canvas, callback);
        public _EvaluateUseCanvasRender(control: TSUI.UI.IControl): boolean;
        public PrepareHTML2CanvasForAnimation(control: TSUI.UI.IControl, callback?: () => void): void;
    }
}

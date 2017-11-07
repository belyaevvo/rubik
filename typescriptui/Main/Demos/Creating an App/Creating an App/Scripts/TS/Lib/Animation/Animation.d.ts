/// <reference path="../Collections/CollectionsRefs.d.ts" />
/// <reference path="../../Definitions/jquery.d.ts" />
/// <reference path="../../Definitions/html2canvas.d.ts" />
declare module TSUI.Animation {
    class AnimationCallback {
        public callback: (TotalElapsedTime: number) => void;
        public context: any;
        public single: boolean;
        public AnimationStartTime: number;
        constructor(callback: (TotalElapsedTime: number) => void, context: any, single?: boolean);
    }
    var RegisterAnimationCallback: (obj: AnimationCallback) => AnimationCallback;
    var RegisterAnimationForSingleCallback: (obj: AnimationCallback) => AnimationCallback;
    var UnregisterAnimationCallback: (obj: AnimationCallback) => AnimationCallback;
    class AnimationHelper {
        static PrepareHTML2CanvasForAnimation(elem: JQuery, callback: (canvas: JQuery) => void): void;
        static RestoreAfterAnimationHTML2Canvas(elem: JQuery, canvas: JQuery): void;
    }
}

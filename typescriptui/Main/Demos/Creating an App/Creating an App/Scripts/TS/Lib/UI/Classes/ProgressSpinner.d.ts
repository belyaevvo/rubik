/// <reference path="CanvasBox.d.ts" />
/// <reference path="../Interfaces/IProgressSpinner.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class ProgressSpinner extends UI.Control implements UI.IProgressSpinner {
        public _UnderlyingCanvas: UI.ICanvasBox;
        constructor(type?: UI.ProgressSpinnerTypes);
        public _Type: UI.ProgressSpinnerTypes;
        public Type(value?: UI.ProgressSpinnerTypes): UI.ProgressSpinnerTypes;
        public _AnimationDuration: number;
        public _ReverseAnimation: boolean;
        public AnimationDuration(value?: number): number;
        public Reverse(value?: boolean): boolean;
        public _AnimationCallbackObj: any;
        public _Animate(): void;
    }
}

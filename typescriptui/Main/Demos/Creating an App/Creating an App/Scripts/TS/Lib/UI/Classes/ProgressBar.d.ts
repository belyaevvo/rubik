/// <reference path="CanvasBox.d.ts" />
/// <reference path="../Interfaces/IProgressBar.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class ProgressBar extends UI.Control implements UI.IProgressBar {
        public _UnderlyingCanvas: UI.ICanvasBox;
        public _BarColourElem: JQuery;
        constructor(type?: UI.ProgressBarTypes);
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public DestroyDOM(): void;
        public _Type: UI.ProgressBarTypes;
        public Type(value?: UI.ProgressBarTypes): UI.ProgressBarTypes;
        public _Reverse: boolean;
        public Reverse(value?: boolean): boolean;
        public _Progress: number;
        public Progress(value?: number): number;
        public _ShowText: boolean;
        public ShowText(value?: boolean): boolean;
        public _Render(): void;
    }
}

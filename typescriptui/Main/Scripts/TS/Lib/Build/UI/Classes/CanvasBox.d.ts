/// <reference path="../../UI/Interfaces/ICanvasBox.d.ts" />
/// <reference path="ImageBox.d.ts" />
declare module TSUI.UI {
    class CanvasBox extends UI.ImageBox implements UI.ICanvasBox {
        public _CanvasElement: JQuery;
        constructor();
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public DestroyDOM(): void;
        public Context(): CanvasRenderingContext2D;
        public Source(value?: string): string;
        public _RenderImageOnLoaded: boolean;
        public _OnImageElementLoaded(): void;
    }
}

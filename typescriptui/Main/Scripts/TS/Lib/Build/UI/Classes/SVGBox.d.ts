/// <reference path="../../UI/Interfaces/ISVGBox.d.ts" />
/// <reference path="ImageBox.d.ts" />
declare module TSUI.UI {
    class SVGBox extends UI.ImageBox implements UI.ISVGBox {
        public _OverlayElement: JQuery;
        constructor(source?: string);
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public DestroyDOM(): void;
        public Source(value?: string): string;
    }
}

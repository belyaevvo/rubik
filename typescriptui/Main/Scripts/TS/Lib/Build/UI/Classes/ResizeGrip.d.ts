/// <reference path="CanvasBox.d.ts" />
/// <reference path="../../UI/Interfaces/IResizeGrip.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class ResizeGrip extends UI.Control implements UI.IResizeGrip {
        public _GripCanvas: UI.ICanvasBox;
        public GripColor: string;
        constructor();
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public Enabled(value?: boolean): boolean;
        public Render(): void;
    }
}

/// <reference path="Label.d.ts" />
/// <reference path="../../UI/Interfaces/ITitleBar.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class TitleBar extends UI.Control implements UI.ITitleBar {
        public _TitleLabel: UI.ILabel;
        public _Draggable: boolean;
        constructor();
        public WindowMinSuitableWidth(): number;
        public Title(value?: string): string;
        public Draggable(value?: boolean): boolean;
    }
}

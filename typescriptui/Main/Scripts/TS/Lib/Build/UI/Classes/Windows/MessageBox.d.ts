/// <reference path="../../../UI/Interfaces/Windows/IMessageBox.d.ts" />
/// <reference path="../Label.d.ts" />
/// <reference path="Window.d.ts" />
declare module TSUI.UI {
    class MessageBox extends UI.Window implements UI.IMessageBox {
        public TextLabel: UI.ILabel;
        constructor(title: string, text: string);
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public PositionCenterParent(parent: UI.IControl): void;
        public Text(value?: string): string;
        public Width(value?: UI.CSSNumber): UI.CSSNumber;
    }
}

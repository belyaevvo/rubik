/// <reference path="../Interfaces/IButton.d.ts" />
/// <reference path="Label.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class Button extends UI.Control implements UI.IButton {
        public TextLabel: UI.ILabel;
        constructor();
        public Text(value?: string): string;
        public InvokeDefaultAction(): void;
    }
}

/// <reference path="../../UI/Interfaces/ILabel.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class Label extends UI.Control implements UI.ILabel {
        constructor(text?: string);
        public _This_Clicked(eventArgs: TSUI.Events.ClickEventArgs): void;
        public Text(value?: string): string;
        public HTML(value?: string): string;
        public _Focusable_AddedByLink: boolean;
        public Link(value?: string): string;
        public Focusable(value?: boolean): boolean;
        public InvokeDefaultAction(): void;
    }
}

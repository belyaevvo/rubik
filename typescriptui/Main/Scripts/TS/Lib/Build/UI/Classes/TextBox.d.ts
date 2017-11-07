/// <reference path="../../UI/Interfaces/ITextBox.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class TextBox extends UI.Control implements UI.ITextBox {
        public _TextInput: JQuery;
        public TextInput(): JQuery;
        public OnTextChange: TSUI.Events.TextChangeEvent;
        public _PrevSeenValue: string;
        constructor();
        public _This_OnClick_FocusBugFix(eventArgs: TSUI.Events.ClickEventArgs): void;
        public _HandleFocusableSet(focusable: boolean): void;
        public _TextInput_OnFocus(event: JQueryEventObject): void;
        public _TextInput_OnBlur(event: JQueryEventObject): void;
        public _TextInput_OnChange(event: JQueryEventObject): void;
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public DestroyDOM(): void;
        public Text(value?: string): string;
        public Masked(value?: boolean): boolean;
        public MaxLength(value?: number): number;
        public Enabled(value?: boolean): boolean;
        public Focus(): void;
        public Blur(): void;
        public _TabIndex: number;
        public TabIndex(value?: number): number;
    }
}

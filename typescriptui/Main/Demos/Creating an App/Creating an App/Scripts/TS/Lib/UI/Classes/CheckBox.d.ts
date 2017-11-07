/// <reference path="Label.d.ts" />
/// <reference path="ToggleIndicator.d.ts" />
/// <reference path="../Interfaces/ICheckBox.d.ts" />
/// <reference path="../Enums/TextAlignments.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class CheckBox extends UI.Control implements UI.ICheckBox {
        public OnCheckedChange: TSUI.Events.CheckedChangeEvent;
        public TextLabel: UI.ILabel;
        public MainIndicator: UI.IToggleIndicator;
        constructor(checked?: boolean);
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public _This_OnClick(eventArgs: TSUI.Events.ClickEventArgs): void;
        public _TextAlign: UI.TextAlignments;
        public TextAlign(value?: UI.TextAlignments): UI.TextAlignments;
        public Text(value?: string): string;
        public Checked(value?: boolean): boolean;
        public InvokeDefaultAction(): void;
    }
}

/// <reference path="Label.d.ts" />
/// <reference path="Panel.d.ts" />
/// <reference path="../Interfaces/IToggleButton.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class ToggleButton extends UI.Control implements UI.IToggleButton {
        public OnCheckedChange: TSUI.Events.CheckedChangeEvent;
        public TogglePanel: UI.IPanel;
        public TogglePanelInner: UI.IPanel;
        public GripBox: UI.IPanel;
        public WhitePanel: UI.IPanel;
        public BluePanel: UI.IPanel;
        public TextLabel: UI.ILabel;
        constructor(checked?: boolean);
        public _This_OnClick(eventArgs: TSUI.Events.ClickEventArgs): void;
        public Checked(value?: boolean): boolean;
        public Text(value?: string): string;
        public InvokeDefaultAction(): void;
    }
}

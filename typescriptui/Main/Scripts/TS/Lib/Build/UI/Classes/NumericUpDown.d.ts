/// <reference path="NumericTextBox.d.ts" />
/// <reference path="Button.d.ts" />
/// <reference path="../../UI/Interfaces/INumericUpDown.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class NumericUpDown extends UI.Control implements UI.INumericUpDown {
        public OnValueChange: TSUI.Events.ValueChangeEvent;
        public _UnderlyingTextBox: UI.NumericTextBox;
        public _UpButton: UI.IButton;
        public _DownButton: UI.IButton;
        public _PrevSeenValue: number;
        constructor();
        public _UnderlyingControl_OnFocus(eventArgs: TSUI.Events.FocusEventArgs): void;
        public _UnderlyingControl_OnBlur(eventArgs: TSUI.Events.BlurEventArgs): void;
        public _This_OnKeyDown_IncrementHandler(eventArgs: TSUI.Events.KeyDownEventArgs): void;
        public _This_OnKeyUp_IncrementHandler(eventArgs: TSUI.Events.KeyUpEventArgs): void;
        public _UpButton_OnClick(eventArgs: TSUI.Events.ClickEventArgs): void;
        public _DownButton_OnClick(eventArgs: TSUI.Events.ClickEventArgs): void;
        public AllowNegatives(value?: boolean): boolean;
        public AllowDecimals(value?: boolean): boolean;
        public DecimalPlaces(value?: number): number;
        public DecimalSeparator(value?: string): string;
        public Min(value?: number): number;
        public Max(value?: number): number;
        public _Increment: number;
        public Increment(value?: number): number;
        public Value(value?: number): number;
        public _HandleFocusableSet(focusable: boolean): void;
        public Focus(): void;
        public Blur(): void;
    }
}

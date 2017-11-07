/// <reference path="TextBox.d.ts" />
/// <reference path="../Interfaces/INumericTextBox.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class NumericTextBox extends UI.TextBox implements UI.INumericTextBox {
        public OnValueChange: TSUI.Events.ValueChangeEvent;
        public _NumericPrevSeenValue: number;
        constructor();
        public _This_OnTextChange_ValueChange(eventArgs: TSUI.Events.TextChangeEventArgs): void;
        public AllowNegatives(value?: boolean): boolean;
        public AllowDecimals(value?: boolean): boolean;
        public DecimalPlaces(value?: number): number;
        public DecimalSeparator(value?: string): string;
        public Min(value?: number): number;
        public Max(value?: number): number;
        public Value(value?: number): number;
    }
}

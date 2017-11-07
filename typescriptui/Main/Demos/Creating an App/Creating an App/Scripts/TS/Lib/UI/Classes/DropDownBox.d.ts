/// <reference path="SelectionWindow.d.ts" />
/// <reference path="ToggleIndicator.d.ts" />
/// <reference path="Label.d.ts" />
/// <reference path="Panel.d.ts" />
/// <reference path="../Interfaces/IDropDownBox.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class DropDownBox<T> extends UI.Control implements UI.IDropDownBox<any> {
        public OnSelectedIndexChange: TSUI.Events.SelectedIndexChangeEvent;
        public _InputContentPanel: UI.IPanel;
        public _UnderlyingTextBox: UI.ILabel;
        public _DropDownToggle: UI.IToggleIndicator;
        public Items: TSUI.Collections.IList<UI.IListItem<T>>;
        public _SelectionWindow: UI.ISelectionWindow<T>;
        constructor();
        public _HandleFocusableSet(focusable: boolean): void;
        public _JustClosedItems: boolean;
        public SelectionWindow_Close(eventArgs: TSUI.Events.CloseEventArgs): void;
        public SelectionWindow_OnSelectionMade(eventArgs: TSUI.Events.SelectionMadeEventArgs): void;
        public SelectionWindow_OnSelectedIndexChanged(eventArgs: TSUI.Events.SelectedIndexChangeEventArgs): void;
        public _HideItemsTimeout: number;
        public _IgnoreNextBlur: boolean;
        public _OnFocus(event: JQueryEventObject): void;
        public _OnBlur(event: JQueryEventObject): void;
        public _DropDownToggle_OnClick(event: TSUI.Events.ClickEventArgs): void;
        public _UnderlyingControl_OnFocus(eventArgs: TSUI.Events.FocusEventArgs): void;
        public _UnderlyingControl_OnBlur(eventArgs: TSUI.Events.BlurEventArgs): void;
        public SelectedIndex(value?: number): number;
        public Focus(): void;
        public Blur(): void;
        public ShowItems(): void;
        public HideItems(): void;
        public Enabled(value?: boolean): boolean;
    }
}

/// <reference path="StackPanelRow.d.ts" />
/// <reference path="Label.d.ts" />
/// <reference path="../Interfaces/IListBox.d.ts" />
/// <reference path="StackPanel.d.ts" />
declare module TSUI.UI {
    class ListBox<T> extends UI.StackPanel implements UI.IListBox<any> {
        public OnSelectionMade: TSUI.Events.SelectionMadeEvent;
        public OnSelectedIndexChange: TSUI.Events.SelectedIndexChangeEvent;
        public Items: TSUI.Collections.IList<UI.IListItem<T>>;
        constructor();
        public _Items_OnModified(eventArgs: TSUI.Events.CollectionModifiedEventArgs<UI.IListItem<T>>): void;
        public _AddRowForItem(elem: UI.IListItem<T>): void;
        public _CreateRow(elem: UI.IListItem<T>): UI.IStackPanelRow;
        public _HandleFocusableSet(focusable: boolean): void;
        public _OnFocus(event: JQueryEventObject): void;
        public _OnBlur(event: JQueryEventObject): void;
        public _FocusIndex: number;
        public _UnderlyingControl_KeyDown(eventArgs: TSUI.Events.KeyDownEventArgs): void;
        public _GetElementWithHighestSequentialTabIndex_Cache: UI.IControl;
        public _GetElementWithHighestSequentialTabIndex(): UI.IControl;
        public _UnderlyingControl_OnFocus(eventArgs: TSUI.Events.FocusEventArgs): void;
        public _UnderlyingControl_OnBlur(eventArgs: TSUI.Events.BlurEventArgs): void;
        public _StackPanelRow_Clicked(eventArgs: TSUI.Events.ClickEventArgs): void;
        public _SelectedIndex: number;
        public _SelectedRow: UI.IStackPanelRow;
        public SelectedIndex(value?: number): number;
        public Focus(): void;
        public Blur(): void;
    }
}

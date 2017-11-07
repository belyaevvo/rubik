/// <reference path="Windows/SelectionWindow.d.ts" />
/// <reference path="ToggleIndicator.d.ts" />
/// <reference path="Label.d.ts" />
/// <reference path="Panel.d.ts" />
/// <reference path="../../UI/Interfaces/IDropDownBox.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class DropDownBox<T> extends UI.Control implements UI.IDropDownBox<T> {
        public OnSelectedIndexChange: TSUI.Events.SelectedIndexChangeEvent;
        public _UnderlyingSelectBox: JQuery;
        public Items: TSUI.Collections.IList<UI.IListItem<T>>;
        constructor();
        public _Items_OnModified(eventArgs: TSUI.Events.CollectionModifiedEventArgs<UI.IListItem<T>>): void;
        public _ClearRows(): void;
        public _AddRowForItem(elem: UI.IListItem<T>): void;
        public _CreateRow(elem: UI.IListItem<T>): JQuery;
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public DestroyDOM(): void;
        public _HandleFocusableSet(focusable: boolean): void;
        public SelectedIndex(value?: number): number;
        public _OnFocus(event: JQueryEventObject): void;
        public _OnBlur(event: JQueryEventObject): void;
        public _UnderlyingControl_OnFocus(eventArgs: TSUI.Events.FocusEventArgs): void;
        public _UnderlyingControl_OnBlur(eventArgs: TSUI.Events.BlurEventArgs): void;
        public Focus(): void;
        public Blur(): void;
        public Enabled(value?: boolean): boolean;
    }
}

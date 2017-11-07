/// <reference path="../../Animation/SelectionWindowAnimator.d.ts" />
/// <reference path="../Interfaces/ISelectionWindow.d.ts" />
/// <reference path="ListBox.d.ts" />
/// <reference path="Window.d.ts" />
declare module TSUI.UI {
    class SelectionWindow<T> extends UI.Window implements UI.ISelectionWindow<any> {
        public ContentPanel: UI.IListBox<T>;
        constructor();
        public PositionCenterWindow(): void;
        public Show(callback?: () => void, animator?: TSUI.Animation.IAnimator): void;
        public Hide(callback?: () => void, animator?: TSUI.Animation.IAnimator): void;
        public Height(value?: UI.CSSNumber): UI.CSSNumber;
    }
}

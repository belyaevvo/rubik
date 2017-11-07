/// <reference path="../../../Animation/AppWindowAnimator.d.ts" />
/// <reference path="../../../Animation/PageWindowAnimator.d.ts" />
/// <reference path="../../../UI/Interfaces/Windows/IPageWindow.d.ts" />
/// <reference path="Window.d.ts" />
declare module TSUI.UI {
    class PageWindow extends UI.Window implements UI.IPageWindow {
        constructor();
        public PositionCenterWindow(): void;
        public Show(callback?: () => void, animator?: TSUI.Animation.IAnimator): void;
        public Hide(callback?: () => void, animator?: TSUI.Animation.IAnimator): void;
        public Height(value?: UI.CSSNumber): UI.CSSNumber;
    }
}

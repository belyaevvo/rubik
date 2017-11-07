/// <reference path="Label.d.ts" />
/// <reference path="../Interfaces/IStaticPageWindow.d.ts" />
/// <reference path="PageWindow.d.ts" />
declare module TSUI.UI {
    class StaticPageWindow extends UI.PageWindow implements UI.IStaticPageWindow {
        public ContentLabel: UI.ILabel;
        constructor(url: string);
        public LoadContent(url: string, data?: any): void;
    }
}

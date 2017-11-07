/// <reference path="../ProgressSpinner.d.ts" />
/// <reference path="../../../UI/Interfaces/Windows/ISplashScreen.d.ts" />
/// <reference path="Window.d.ts" />
declare module TSUI.UI {
    class DesktopSplashScreen extends UI.Window implements UI.ISplashScreen {
        public NameLabel: UI.ILabel;
        constructor(title?: string);
        public ConstructDOM(parent: JQuery): void;
        public Title(value?: string): string;
    }
    class MobileSplashScreen extends DesktopSplashScreen implements UI.ISplashScreen {
        constructor(title?: string);
        public ConstructDOM(parent: JQuery): void;
    }
}

/// <reference path="../../../UI/Interfaces/Windows/IStartupWindow.d.ts" />
/// <reference path="Window.d.ts" />
/// <reference path="../TextBox.d.ts" />
/// <reference path="../StackPanel.d.ts" />
/// <reference path="../StackPanelRow.d.ts" />
/// <reference path="../Tile.d.ts" />
declare module TSUI.UI {
    class StartupWindow extends UI.Window implements UI.IStartupWindow {
        public Rows: TSUI.Collections.IList<UI.IStartupWindow_Row>;
        public _InnerStackPanel: UI.IStackPanel;
        constructor(title?: string);
        public _This_OnRowsChanged(eventArgs: TSUI.Events.CollectionModifiedEventArgs<UI.IStartupWindow_Row>): void;
    }
    class DesktopStartupWindow extends StartupWindow implements UI.IStartupWindow {
        constructor(title?: string);
    }
    class MobileStartupWindow extends DesktopStartupWindow implements UI.IStartupWindow {
        constructor(title?: string);
        public Show(callback?: () => void, animator?: TSUI.Animation.IAnimator): void;
        public Hide(callback?: () => void, animator?: TSUI.Animation.IAnimator): void;
    }
    class StartupWindow_Row extends UI.StackPanelRow implements UI.IStartupWindow_Row {
        public MobileMode: boolean;
        public _InnerStackPanel: UI.IStackPanel;
        public Groups: TSUI.Collections.IList<UI.IStartupWindow_Group>;
        constructor(MobileMode?: boolean);
        public _This_OnGroupsChanged(eventArgs: TSUI.Events.CollectionModifiedEventArgs<UI.IStartupWindow_Group>): void;
    }
    class StartupWindow_Group extends UI.StackPanelRow implements UI.IStartupWindow_Group {
        public MobileMode: boolean;
        public Tiles: TSUI.Collections.IList<UI.ITile>;
        constructor(MobileMode?: boolean);
        public _This_OnTilesChanged(eventArgs: TSUI.Events.CollectionModifiedEventArgs<UI.ITile>): void;
    }
}

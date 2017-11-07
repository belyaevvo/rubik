/// <reference path="../../UI/Interfaces/ITab.d.ts" />
/// <reference path="Button.d.ts" />
/// <reference path="Panel.d.ts" />
/// <reference path="../../UI/Interfaces/ITabControl.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class TabControl extends UI.Control implements UI.ITabControl {
        public OnSelectedIndexChange: TSUI.Events.SelectedIndexChangeEvent;
        public Tabs: TSUI.Collections.IList<UI.ITab>;
        public _TabButtonsPanel: UI.IPanel;
        public _TabButtonsInnerPanel: UI.IPanel;
        public _TabsContainer: UI.IPanel;
        public _SelectedTabBar: UI.IPanel;
        public _TabButtons: any[];
        public _FocusIndex: number;
        constructor();
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public _UnderlyingControl_KeyDown(eventArgs: TSUI.Events.KeyDownEventArgs): void;
        public _GetElementWithHighestSequentialTabIndex_Cache: UI.IControl;
        public _GetElementWithHighestSequentialTabIndex(): UI.IControl;
        public _Tabs_OnModified(eventArgs: TSUI.Events.CollectionModifiedEventArgs<UI.ITab>): void;
        public _ConstructTab(tab: UI.ITab): void;
        public _DestroyTab(tab: UI.ITab): void;
        public _Tab_NameChanged(eventArgs: TSUI.Events.NameChangeEventArgs): void;
        public _TabButton_Clicked(eventArgs: TSUI.Events.ClickEventArgs): void;
        public _SelectedIndex: number;
        public SelectedIndex(value?: number): number;
        public _ShowTab(index: number, callback?: () => void): void;
        public _HideTab(index: number, callback?: () => void): void;
    }
}

/// <reference path="../../Animation/ExpandableAnimator.d.ts" />
/// <reference path="ToggleIndicator.d.ts" />
/// <reference path="../Interfaces/IExpandable.d.ts" />
/// <reference path="TitleBar.d.ts" />
/// <reference path="Panel.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class Expandable extends UI.Control implements UI.IExpandable {
        public MainTitleBar: UI.ITitleBar;
        public ContentPanel: UI.IPanel;
        public MainToggleIndiciator: UI.IToggleIndicator;
        public _Expanded: boolean;
        constructor(expanded?: boolean);
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public _MainTitleBar_Clicked(eventArgs: TSUI.Events.ClickEventArgs): void;
        public Title(value?: string): string;
        public Expanded(): boolean;
        public Toggle(): void;
        public Expand(callback?: () => void, animator?: TSUI.Animation.ExpandableAnimator): void;
        public Collapse(callback?: () => void, animator?: TSUI.Animation.ExpandableAnimator): void;
        public EnableByParent(): void;
    }
}

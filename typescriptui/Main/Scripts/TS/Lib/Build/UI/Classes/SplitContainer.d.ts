/// <reference path="../../UI/Interfaces/ISplitContainer.d.ts" />
/// <reference path="SplitterGrip.d.ts" />
/// <reference path="Panel.d.ts" />
declare module TSUI.UI {
    class SplitContainer extends UI.Control implements UI.ISplitContainer {
        public Panel1: UI.IPanel;
        public Panel2: UI.IPanel;
        public _MainSplitterGrip_Dragging: any;
        public boolean: boolean;
        public MainSplitterGrip: UI.ISplitterGrip;
        constructor();
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public Orientation(value?: UI.SplitterGrip_Orientations): UI.SplitterGrip_Orientations;
        public _MainSplitterGrip_MouseUpHandler: TSUI.Events.MouseUpEventHandler;
        public _MainSplitterGrip_MouseMoveHandler: TSUI.Events.MouseMoveEventHandler;
        public MainSplitterGrip_OnMouseDown(eventArgs: TSUI.Events.MouseDownEventArgs): void;
        public MainSplitterGrip_OnMouseUp(eventArgs: TSUI.Events.MouseUpEventArgs): void;
        public MainSplitterGrip_OnMouseMove(eventArgs: TSUI.Events.MouseMoveEventArgs): void;
        public MainSplitterGrip_OnSplitterMove(eventArgs: TSUI.Events.SplitterMoveEventArgs): void;
        public MainSplitterGrip_OnOrientationChanged(eventArgs: TSUI.Events.OrientationChangedEventArgs): void;
        public _This_Resized(eventArgs: TSUI.Events.ResizeEventArgs): void;
    }
}

/// <reference path="Panel.d.ts" />
/// <reference path="../Interfaces/ITrackBar.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class TrackBar extends UI.Control implements UI.ITrackBar {
        public OnValueChange: TSUI.Events.ValueChangeEvent;
        public _BarElement: UI.IPanel;
        public _GripElement: UI.IPanel;
        constructor();
        public _Grip_Dragging: boolean;
        public _Mode: UI.TrackBarModes;
        public Mode(value?: UI.TrackBarModes): UI.TrackBarModes;
        public _Max: number;
        public Max(value?: number): number;
        public _Min: number;
        public Min(value?: number): number;
        public _Divisions: number;
        public Divisions(value?: number): number;
        public _Value: number;
        public Value(value?: number): number;
        public _MouseUpHandler: TSUI.Events.MouseUpEventHandler;
        public _MouseMoveHandler: TSUI.Events.MouseMoveEventHandler;
        public _Grip_OnMouseDown(eventArgs: TSUI.Events.MouseDownEventArgs): void;
        public _Grip_OnMouseUp(eventArgs: TSUI.Events.MouseUpEventArgs): void;
        public _Grip_OnMouseMove(eventArgs: TSUI.Events.MouseMoveEventArgs): void;
        public _This_OnClick(eventArgs: TSUI.Events.ClickEventArgs): void;
        public _This_OnKeyDown(eventArgs: TSUI.Events.KeyDownEventArgs): void;
        public InvokeDefaultAction(): void;
    }
}

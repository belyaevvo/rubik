/// <reference path="../../../Animation/AppWindowAnimator.d.ts" />
/// <reference path="../../../UI/Interfaces/Windows/IWindow.d.ts" />
/// <reference path="../ResizeGrip.d.ts" />
/// <reference path="../TitleBar.d.ts" />
/// <reference path="../Button.d.ts" />
/// <reference path="../Panel.d.ts" />
/// <reference path="../Control.d.ts" />
declare module TSUI.UI {
    class Window extends UI.Control implements UI.IWindow {
        public MainTitleBar: UI.ITitleBar;
        public MainResizeGrip: UI.IResizeGrip;
        public ContentPanel: UI.IPanel;
        public CloseButton: UI.IButton;
        public OnClose: TSUI.Events.CloseEvent;
        public _DraggingEnabled: boolean;
        public _DraggingWindow: boolean;
        public _DraggingOffset: {
            x: number;
            y: number;
        };
        public _ResizingEnabled: boolean;
        public _ResizingWindow: boolean;
        public _ResizingOffset: {
            x: number;
            y: number;
        };
        public DestroyDOMOnClose: boolean;
        constructor();
        public _MainTitleBar_MouseUpHandler: TSUI.Events.MouseUpEventHandler;
        public _MainTitleBar_MouseMoveHandler: TSUI.Events.MouseMoveEventHandler;
        public _MainResizeGrip_MouseUpHandler: TSUI.Events.MouseUpEventHandler;
        public _MainResizeGrip_MouseMoveHandler: TSUI.Events.MouseMoveEventHandler;
        public _MainTitleBar_OnMouseDown(eventArgs: TSUI.Events.MouseDownEventArgs): void;
        public _MainTitleBar_OnMouseUp(eventArgs: TSUI.Events.MouseUpEventArgs): void;
        public _MainTitleBar_OnMouseMove(eventArgs: TSUI.Events.MouseMoveEventArgs): void;
        public _MainResizeGrip_OnMouseDown(eventArgs: TSUI.Events.MouseDownEventArgs): void;
        public _MainResizeGrip_OnMouseUp(eventArgs: TSUI.Events.MouseUpEventArgs): void;
        public _MainResizeGrip_OnMouseMove(eventArgs: TSUI.Events.MouseMoveEventArgs): void;
        public _CloseButton_Click(eventArgs: TSUI.Events.ClickEventArgs): void;
        public DragEnabled(value?: boolean): boolean;
        public ResizeEnabled(value?: boolean): boolean;
        public Title(value?: string): string;
        public Show(callback?: () => void, animator?: TSUI.Animation.IAnimator): void;
        public Hide(callback?: () => void, animator?: TSUI.Animation.IAnimator): void;
    }
}

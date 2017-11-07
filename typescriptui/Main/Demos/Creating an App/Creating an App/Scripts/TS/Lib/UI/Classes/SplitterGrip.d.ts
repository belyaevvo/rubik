/// <reference path="../Interfaces/ISplitterGrip.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class SplitterGrip extends UI.Control implements UI.ISplitterGrip {
        public OnSplitterMove: TSUI.Events.SplitterMoveEvent;
        public OnOrientationChanged: TSUI.Events.OrientationChangedEvent;
        constructor();
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public MaxDistance(): number;
        public _Orientation: UI.SplitterGrip_Orientations;
        public Orientation(value?: UI.SplitterGrip_Orientations): UI.SplitterGrip_Orientations;
        public _SplitterDistance: number;
        public SplitterDistance(value?: number): number;
        public _SplitterWidth: number;
        public SplitterWidth(value?: number): number;
    }
}

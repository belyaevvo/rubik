/// <reference path="../../UI/Interfaces/IToggleIndicator.d.ts" />
/// <reference path="Label.d.ts" />
declare module TSUI.UI {
    class ToggleIndicatorLabel extends UI.Label implements UI.IToggleIndicator {
        public _OffVal: string;
        public _OnVal: string;
        constructor(_OffVal?: string, _OnVal?: string);
        public SetIndicatorToOn(): void;
        public SetIndicatorToOff(): void;
        public IsOn(): boolean;
        public InvokeDefaultAction(): void;
    }
    class ToggleIndicatorBox extends UI.Control implements UI.IToggleIndicator {
        public _InnerDivElement: JQuery;
        constructor();
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public DestroyDOM(): void;
        public SetIndicatorToOn(): void;
        public SetIndicatorToOff(): void;
        public IsOn(): boolean;
        public InvokeDefaultAction(): void;
    }
}

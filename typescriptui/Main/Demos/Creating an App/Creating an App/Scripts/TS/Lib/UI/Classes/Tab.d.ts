/// <reference path="../../Animation/IAnimator.d.ts" />
/// <reference path="../../Animation/FadeAnimator.d.ts" />
/// <reference path="../Interfaces/ITab.d.ts" />
/// <reference path="Panel.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class Tab extends UI.Panel implements UI.ITab {
        public OnNameChange: TSUI.Events.NameChangeEvent;
        constructor();
        public _Name: string;
        public Name(value?: string): string;
        public Hide(callback?: () => void, animator?: TSUI.Animation.IAnimator): void;
    }
}

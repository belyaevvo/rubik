/// <reference path="../Interfaces/IImageBox.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class ImageBox extends UI.Control implements UI.IImageBox {
        public _ImageElement: JQuery;
        constructor(src?: string, alt?: string);
        public _This_OnClick_NavigateHandler(eventArgs: TSUI.Events.ClickEventArgs): void;
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public DestroyDOM(): void;
        public AlternateText(value?: string): string;
        public Source(value?: string): string;
        public _NavigateToOnClick: string;
        public _Focusable_AddedByLink: boolean;
        public NavigateToOnClick(value?: string): string;
        public Focusable(value?: boolean): boolean;
        public InvokeDefaultAction(): void;
    }
}

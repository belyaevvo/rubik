/// <reference path="../../Animation/NotificationAnimator.d.ts" />
/// <reference path="../../Animation/NotificationRestackAnimator.d.ts" />
/// <reference path="../../UI/Interfaces/INotification.d.ts" />
/// <reference path="Control.d.ts" />
/// <reference path="Button.d.ts" />
declare module TSUI.UI {
    var AllVisibleNotifications: INotification[][];
    class Notification extends UI.Control implements UI.INotification {
        public stackReference: number;
        public _TextLabel: UI.ILabel;
        public CloseButton: UI.IButton;
        public OnClose: TSUI.Events.CloseEvent;
        constructor(stackReference: number, text?: string);
        public Text(value?: string): string;
        public _HideTimeoutRef: number;
        public _CloseButton_Click(eventArgs: TSUI.Events.ClickEventArgs): void;
        public _OffsetAdded: number;
        public _Showing: boolean;
        public Show(callback?: () => void, animator?: TSUI.Animation.IAnimator): void;
        public ShowFor(seconds: number, callback?: () => void, animator?: TSUI.Animation.IAnimator): void;
        public Hide(callback?: () => void, animator?: TSUI.Animation.IAnimator): void;
        public _Restack(): void;
        public RestackAll(): void;
    }
}

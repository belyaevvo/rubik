/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Animation/NotificationAnimator.ts" />
/// <reference path="../../Animation/NotificationRestackAnimator.ts" />
/// <reference path="../Interfaces/INotification.d.ts" />
/// <reference path="Control.ts" />
/// <reference path="Button.ts" />

module TSUI.UI
{
    var NotificationBottomOffsets: number[] = [];
    export var AllVisibleNotifications: INotification[][] = [];

    export class Notification extends Control implements INotification
    {
        _TextLabel: ILabel;
        CloseButton: IButton;
        OnClose: Events.CloseEvent;

        constructor(public stackReference: number, text?: string)
        {
            super();

            if (!NotificationBottomOffsets[stackReference])
            {
                NotificationBottomOffsets[stackReference] = 0;
                AllVisibleNotifications[stackReference] = [];
            }

            this._rootElement.addClass("Notification");
            this._rootElement.css("visibility", "hidden");

            this.OnClose = new Events.CloseEvent();

            this.CloseButton = new Button();
            this.CloseButton.AddClass("NotificationCloseButton");
            this.CloseButton.Text("X");
            this.Children.Add(this.CloseButton);

            this._TextLabel = new Label();
            this._TextLabel.RelativeLayoutOn();
            this.Children.Add(this._TextLabel);

            this.Text(text);
        
            this.CloseButton.OnClick.Attach(new Events.ClickEventHandler(this._CloseButton_Click, this));
        }

        Text(value: string = null): string
        {
            return this._TextLabel.Text(value);
        }

        _HideTimeoutRef: number = -1;

        _CloseButton_Click(eventArgs: Events.ClickEventArgs)
        {
            var _this = this;
            this.Hide();
        }

        _OffsetAdded = 0;
        _Showing: boolean = false;
        Show(callback: () => void = null, animator: Animation.IAnimator = new Animation.NotificationAnimator()): void
        {
            if (this._HideTimeoutRef !== -1)
            {
                clearTimeout(this._HideTimeoutRef);
                this._HideTimeoutRef = -1;
            }

            if (!this.Visible() && !this._Showing)
            {
                this._Showing = true;
                var _this = this;
                this.Bottom(new CSSNumber(NotificationBottomOffsets[this.stackReference]));
                AllVisibleNotifications[this.stackReference].push(this);
                super.Show(function ()
                {
                    _this._Showing = false;
                    if(callback !== null)
                        callback();
                }, animator);
                NotificationBottomOffsets[this.stackReference] += (this._OffsetAdded = this.AnimationElement().outerHeight());
            }
            else if(callback !== null)
            {
                callback();
            }
        }
        ShowFor(seconds: number, callback: () => void = null, animator?: Animation.IAnimator): void
        {
            var _this = this;
            this.Show(function ()
            {
                if (this._HideTimeoutRef !== -1)
                {
                    clearTimeout(this._HideTimeoutRef);
                    this._HideTimeoutRef = -1;
                }

                _this._HideTimeoutRef = setTimeout(function ()
                {
                    _this.Hide(null, animator);
                }, seconds * 1000);

                if (callback !== null)
                {
                    callback();
                }
            }, animator);
        }
        Hide(callback: () => void = null, animator: Animation.IAnimator = new Animation.NotificationAnimator()): void
        {
            var _this = this;
            NotificationBottomOffsets[this.stackReference] -= this._OffsetAdded;
            AllVisibleNotifications[this.stackReference].splice(AllVisibleNotifications[this.stackReference].indexOf(this), 1);
            this.RestackAll();
            this._OffsetAdded = 0;
            super.Hide(function ()
            {
                _this.OnClose.Invoke(new Events.CloseEventArgs(_this));
                if (callback !== null)
                {
                    callback();
                }
            }, animator);
        }

        _Restack(): void
        {
            new Animation.NotificationRestackAnimator().AnimateRestack(this, NotificationBottomOffsets[this.stackReference]);
            NotificationBottomOffsets[this.stackReference] += (this._OffsetAdded = this.AnimationElement().outerHeight());
        }

        RestackAll(): void
        {
            NotificationBottomOffsets[this.stackReference] = 0;
            for (var i = 0; i < AllVisibleNotifications[this.stackReference].length; i++)
            {
                AllVisibleNotifications[this.stackReference][i]._Restack();
            }
        }
    }
}
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
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
    (function (UI) {
        var NotificationBottomOffsets = [];
        UI.AllVisibleNotifications = [];

        var Notification = (function (_super) {
            __extends(Notification, _super);
            function Notification(stackReference, text) {
                _super.call(this);
                this.stackReference = stackReference;
                this._HideTimeoutRef = -1;
                this._OffsetAdded = 0;
                this._Showing = false;

                if (!NotificationBottomOffsets[stackReference]) {
                    NotificationBottomOffsets[stackReference] = 0;
                    UI.AllVisibleNotifications[stackReference] = [];
                }

                this._rootElement.addClass("Notification");
                this._rootElement.css("visibility", "hidden");

                this.OnClose = new TSUI.Events.CloseEvent();

                this.CloseButton = new UI.Button();
                this.CloseButton.AddClass("NotificationCloseButton");
                this.CloseButton.Text("X");
                this.Children.Add(this.CloseButton);

                this._TextLabel = new UI.Label();
                this._TextLabel.RelativeLayoutOn();
                this.Children.Add(this._TextLabel);

                this.Text(text);

                this.CloseButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._CloseButton_Click, this));
            }
            Notification.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._TextLabel.Text(value);
            };

            Notification.prototype._CloseButton_Click = function (eventArgs) {
                var _this = this;
                this.Hide();
            };

            Notification.prototype.Show = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.NotificationAnimator(); }
                if (this._HideTimeoutRef !== -1) {
                    clearTimeout(this._HideTimeoutRef);
                    this._HideTimeoutRef = -1;
                }

                if (!this.Visible() && !this._Showing) {
                    this._Showing = true;
                    var _this = this;
                    this.Bottom(new UI.CSSNumber(NotificationBottomOffsets[this.stackReference]));
                    UI.AllVisibleNotifications[this.stackReference].push(this);
                    _super.prototype.Show.call(this, function () {
                        _this._Showing = false;
                        if (callback !== null)
                            callback();
                    }, animator);
                    NotificationBottomOffsets[this.stackReference] += (this._OffsetAdded = this.AnimationElement().outerHeight());
                } else if (callback !== null) {
                    callback();
                }
            };
            Notification.prototype.ShowFor = function (seconds, callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                var _this = this;
                this.Show(function () {
                    if (this._HideTimeoutRef !== -1) {
                        clearTimeout(this._HideTimeoutRef);
                        this._HideTimeoutRef = -1;
                    }

                    _this._HideTimeoutRef = setTimeout(function () {
                        _this.Hide(null, animator);
                    }, seconds * 1000);

                    if (callback !== null) {
                        callback();
                    }
                }, animator);
            };
            Notification.prototype.Hide = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.NotificationAnimator(); }
                var _this = this;
                NotificationBottomOffsets[this.stackReference] -= this._OffsetAdded;
                UI.AllVisibleNotifications[this.stackReference].splice(UI.AllVisibleNotifications[this.stackReference].indexOf(this), 1);
                this.RestackAll();
                this._OffsetAdded = 0;
                _super.prototype.Hide.call(this, function () {
                    _this.OnClose.Invoke(new TSUI.Events.CloseEventArgs(_this));
                    if (callback !== null) {
                        callback();
                    }
                }, animator);
            };

            Notification.prototype._Restack = function () {
                new TSUI.Animation.NotificationRestackAnimator().AnimateRestack(this, NotificationBottomOffsets[this.stackReference]);
                NotificationBottomOffsets[this.stackReference] += (this._OffsetAdded = this.AnimationElement().outerHeight());
            };

            Notification.prototype.RestackAll = function () {
                NotificationBottomOffsets[this.stackReference] = 0;
                for (var i = 0; i < UI.AllVisibleNotifications[this.stackReference].length; i++) {
                    UI.AllVisibleNotifications[this.stackReference][i]._Restack();
                }
            };
            return Notification;
        })(UI.Control);
        UI.Notification = Notification;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

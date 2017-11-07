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
    /// <reference path="../../Animation/ExpandableAnimator.ts" />
    /// <reference path="ToggleIndicator.ts" />
    /// <reference path="../Interfaces/IExpandable.d.ts" />
    /// <reference path="TitleBar.ts" />
    /// <reference path="Panel.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var Expandable = (function (_super) {
            __extends(Expandable, _super);
            function Expandable(expanded) {
                if (typeof expanded === "undefined") { expanded = false; }
                _super.call(this);
                this._Expanded = false;

                this._rootElement.addClass("Expandable");

                this.MainTitleBar = new UI.TitleBar();
                this.Children.Add(this.MainTitleBar);

                this.MainTitleBar.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._MainTitleBar_Clicked, this));

                this.MainToggleIndiciator = new UI.ToggleIndicatorLabel();
                this.MainToggleIndiciator.AddClass("ToggleIndicator");
                this.Children.Add(this.MainToggleIndiciator);
                if (!expanded) {
                    this.MainToggleIndiciator.SetIndicatorToOff();
                    this._rootElement.addClass("Collapsed");
                } else {
                    this.MainToggleIndiciator.SetIndicatorToOn();
                }
                this._Expanded = expanded;

                this.MainToggleIndiciator.Focusable(true);
                this.MainToggleIndiciator.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._MainTitleBar_Clicked, this));

                this.ContentPanel = new UI.Panel();
                this.Children.Add(this.ContentPanel);

                this.Height(new UI.CSSNumber(30));
            }
            Expandable.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    if (_this._Expanded) {
                        _this.Height(new UI.CSSNumber(_this.ContentPanel.Top().Value + _this.ContentPanel.Height().Value + 15));
                        _this.ContentPanel.Enabled(true);
                    } else {
                        _this.Height(new UI.CSSNumber(_this.MainTitleBar.ActualHeight()));
                        _this.ContentPanel.Enabled(false);
                    }
                    if (onComplete) {
                        onComplete();
                    }
                });
            };

            Expandable.prototype._MainTitleBar_Clicked = function (eventArgs) {
                this.Toggle();
            };

            Expandable.prototype.Title = function (value) {
                return this.MainTitleBar.Title(value);
            };

            Expandable.prototype.Expanded = function () {
                return this._Expanded;
            };

            Expandable.prototype.Toggle = function () {
                if (this._Expanded) {
                    this.Collapse();
                } else {
                    this.Expand();
                }
            };
            Expandable.prototype.Expand = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.ExpandableAnimator(); }
                if (!this.Expanded()) {
                    var _this = this;
                    this.MainToggleIndiciator.SetIndicatorToOn();
                    this._rootElement.removeClass("Collapsed");
                    animator.Show(this, function () {
                        if (_this.ContentPanel.HasClass("RelativeLayout")) {
                            _this.ContentPanel.Height(new UI.CSSNumber(_this.Height().Value - 60));
                        }

                        _this.ContentPanel.Enabled(true);

                        _this._Expanded = true;
                        if (callback !== null)
                            callback();
                    });
                }
            };
            Expandable.prototype.Collapse = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.ExpandableAnimator(); }
                if (this.Expanded()) {
                    var _this = this;
                    this.MainToggleIndiciator.SetIndicatorToOff();
                    this._rootElement.addClass("Collapsed");
                    this.ContentPanel.Enabled(false);
                    animator.Hide(this, function () {
                        if (_this.ContentPanel.HasClass("RelativeLayout")) {
                            _this.ContentPanel.Height(new UI.CSSNumber(0, "", true));
                        }

                        _this._Expanded = false;
                        if (callback !== null)
                            callback();
                    });
                }
            };

            Expandable.prototype.EnableByParent = function () {
                _super.prototype.EnableByParent.call(this);
                if (!this._Expanded) {
                    this.ContentPanel.Enabled(false);
                }
            };
            return Expandable;
        })(UI.Control);
        UI.Expandable = Expandable;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

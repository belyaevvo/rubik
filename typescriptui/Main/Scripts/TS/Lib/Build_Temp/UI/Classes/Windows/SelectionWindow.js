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
    /// <reference path="../../../Animation/SelectionWindowAnimator.ts" />
    /// <reference path="../../Interfaces/Windows/ISelectionWindow.d.ts" />
    /// <reference path="../ListBox.ts" />
    /// <reference path="Window.ts" />
    (function (UI) {
        var SelectionWindow = (function (_super) {
            __extends(SelectionWindow, _super);
            function SelectionWindow() {
                _super.call(this);

                this.DestroyDOMOnClose = false;

                this._rootElement.addClass("SelectionWindow");

                this.MainTitleBar.Visible(false);
                this.MainResizeGrip.Visible(false);
                this.DragEnabled(false);
                this.ResizeEnabled(false);

                this.Children.Remove(this.ContentPanel);
                this.ContentPanel = new UI.ListBox();
                this.ContentPanel.Top(new UI.CSSNumber(24));
                this.ContentPanel.Bottom(new UI.CSSNumber(0));
                this.ContentPanel.Left(new UI.CSSNumber(0));
                this.ContentPanel.Width(new UI.CSSNumber(100, "%"));
                this.ContentPanel.Height(new UI.CSSNumber(100, "%", true));
                this.Children.Add(this.ContentPanel);

                var bodyElem = $("body");
                if (bodyElem.find(".SelectionWindow_DisableOverlay").length === 0) {
                    bodyElem.append($("<div class=\"SelectionWindow_DisableOverlay\">"));
                }

                this.Visible(false);
            }
            SelectionWindow.prototype.PositionCenterWindow = function () {
                var height = $(window).height();
                var width = $(window).width();

                var visiblity = this.GetStyle("visibility");
                var display = this.GetStyle("display");
                var zIndex = this.GetStyle("z-index");

                this.ApplyStyle("z-index", "-1");
                this.ApplyStyle("visibility", "hidden");
                this.ApplyStyle("display", "block");

                var itemsHeight = this.ContentPanel.Items.Count() > 0 ? this.ContentPanel.Items.Count() * this.ContentPanel.Children.ElementAt(0).ActualHeight() : 0;

                this.Width(new UI.CSSNumber((Math.max(Math.min(width / 2, 300), 200) / width) * 100, "%"));
                this.Height(new UI.CSSNumber(Math.max(Math.min(itemsHeight, 300), 100) + 29));

                this.Top(new UI.CSSNumber((((height - this.ActualHeight()) / 2) / height) * 100, "%"));
                this.Left(new UI.CSSNumber((((width - this.ActualWidth()) / 2) / width) * 100, "%"));

                this.ApplyStyle("z-index", zIndex);
                this.ApplyStyle("visibility", visiblity);
                this.ApplyStyle("display", display);
            };

            SelectionWindow.prototype.Show = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.SelectionWindowAnimator(); }
                if (this.ContentPanel.Children.Count() > 0) {
                    var _this = this;
                    _super.prototype.Show.call(this, function () {
                        _this.ContentPanel.Children.ElementAt(_this.ContentPanel.SelectedIndex() > -1 ? _this.ContentPanel.SelectedIndex() : 0).Focus();

                        if (callback) {
                            callback();
                        }
                    }, animator);
                } else {
                    if (callback) {
                        callback();
                    }
                }
            };
            SelectionWindow.prototype.Hide = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.SelectionWindowAnimator(); }
                _super.prototype.Hide.call(this, callback, animator);
            };

            SelectionWindow.prototype.Height = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = _super.prototype.Height.call(this, value);
                if (value !== null) {
                    this.ContentPanel.Height(new UI.CSSNumber(100, "%", true));
                }
                return result;
            };
            return SelectionWindow;
        })(UI.Window);
        UI.SelectionWindow = SelectionWindow;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

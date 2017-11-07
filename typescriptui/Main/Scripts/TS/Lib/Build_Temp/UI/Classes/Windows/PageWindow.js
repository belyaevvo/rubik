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
    /// <reference path="../../../Animation/AppWindowAnimator.ts" />
    /// <reference path="../../../Animation/PageWindowAnimator.ts" />
    /// <reference path="../../Interfaces/Windows/IPageWindow.d.ts" />
    /// <reference path="Window.ts" />
    (function (UI) {
        var PageWindow = (function (_super) {
            __extends(PageWindow, _super);
            function PageWindow() {
                _super.call(this);

                this.DestroyDOMOnClose = false;

                this._rootElement.addClass("PageWindow");

                this.MainTitleBar.Visible(false);
                this.MainResizeGrip.Visible(false);
                this.DragEnabled(false);
                this.ResizeEnabled(false);

                this.ContentPanel.Top(new UI.CSSNumber(24));
                this.ContentPanel.Bottom(new UI.CSSNumber(0));
                this.ContentPanel.Left(new UI.CSSNumber(0));
                this.ContentPanel.Width(new UI.CSSNumber(100, "%"));
                this.ContentPanel.Height(new UI.CSSNumber(100, "%", true));

                var bodyElem = $("body");
                if (bodyElem.find(".PageWindow_DisableOverlay").length === 0) {
                    bodyElem.append($("<div class=\"PageWindow_DisableOverlay\">"));
                }

                this.Visible(false);
            }
            PageWindow.prototype.PositionCenterWindow = function () {
                var height = $(window).height();
                var width = $(window).width();

                var visiblity = this.GetStyle("visibility");
                var display = this.GetStyle("display");
                var zIndex = this.GetStyle("z-index");

                this.ApplyStyle("z-index", "-1");
                this.ApplyStyle("visibility", "hidden");
                this.ApplyStyle("display", "block");

                this.Width(new UI.CSSNumber((Math.max(width / 2, Math.min(400, width - 50)) / width) * 100, "%"));
                this.Height(new UI.CSSNumber(Math.max(height / 2, Math.min(500, height - 50)) + 29));

                this.Top(new UI.CSSNumber((((height - this.ActualHeight()) / 2) / height) * 100, "%"));
                this.Left(new UI.CSSNumber((((width - this.ActualWidth()) / 2) / width) * 100, "%"));

                this.ApplyStyle("z-index", zIndex);
                this.ApplyStyle("visibility", visiblity);
                this.ApplyStyle("display", display);
            };

            PageWindow.prototype.Show = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.PageWindowAnimator(); }
                if (this.ContentPanel.Children.Count() > 0) {
                    _super.prototype.Show.call(this, callback, animator);
                } else {
                    if (callback) {
                        callback();
                    }
                }
            };
            PageWindow.prototype.Hide = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.PageWindowAnimator(); }
                _super.prototype.Hide.call(this, callback, animator);
            };

            PageWindow.prototype.Height = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = _super.prototype.Height.call(this, value);
                if (value !== null) {
                    this.ContentPanel.Height(new UI.CSSNumber(100, "%", true));
                }
                return result;
            };
            return PageWindow;
        })(UI.Window);
        UI.PageWindow = PageWindow;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

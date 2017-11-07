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
    /// <reference path="../Label.ts" />
    /// <reference path="../../Interfaces/Windows/IStaticPageWindow.d.ts" />
    /// <reference path="PageWindow.ts" />
    (function (UI) {
        var StaticPageWindow = (function (_super) {
            __extends(StaticPageWindow, _super);
            function StaticPageWindow(url) {
                _super.call(this);

                this._rootElement.addClass("StaticPageWindow");

                this.ContentLabel = new UI.Label();
                this.ContentLabel.AddClass("ContentLabel");
                this.ContentPanel.Children.Add(this.ContentLabel);

                this.LoadContent(url);
            }
            StaticPageWindow.prototype.LoadContent = function (url, data) {
                var _this = this;
                $.get(url, data, function (data) {
                    _this.ContentLabel.HTML(data);
                }).fail(function () {
                    _this.ContentLabel.HTML("<i>Failed to load content.</i>");
                });
            };
            return StaticPageWindow;
        })(UI.PageWindow);
        UI.StaticPageWindow = StaticPageWindow;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

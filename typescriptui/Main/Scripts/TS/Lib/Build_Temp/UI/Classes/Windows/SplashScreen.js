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
    Date: Jul 10 00:13 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 10/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../ProgressSpinner.ts" />
    /// <reference path="../../Interfaces/Windows/ISplashScreen.d.ts" />
    /// <reference path="Window.ts" />
    (function (UI) {
        var DesktopSplashScreen = (function (_super) {
            __extends(DesktopSplashScreen, _super);
            function DesktopSplashScreen(title) {
                if (typeof title === "undefined") { title = ""; }
                _super.call(this);

                this.OptimiseConstructForGraphics = false;

                this.AddClass("SplashScreen");

                this.MainTitleBar.Visible(false);
                this.CloseButton.Visible(false);
                this.ResizeEnabled(false);
                this.DragEnabled(false);

                this.Width(new UI.CSSNumber(500));
                this.Height(new UI.CSSNumber(250));

                this.NameLabel = new UI.Label();
                this.NameLabel.AddClass("NameLabel");
                this.Children.Add(this.NameLabel);

                var TheProgressSpinner = new UI.ProgressSpinner();
                TheProgressSpinner.AnimationDuration(2000);
                this.Children.Add(TheProgressSpinner);

                this.Title(title);
            }
            DesktopSplashScreen.prototype.ConstructDOM = function (parent) {
                _super.prototype.ConstructDOM.call(this, parent);

                var topPx = ($(window).height() - this.Height().Value) / 2;
                this.Top(new TSUI.UI.CSSNumber((topPx / $(window).height()) * 100, "%"));
                var leftPx = ($(window).width() - this.Width().Value) / 2;
                this.Left(new TSUI.UI.CSSNumber((leftPx / $(window).width()) * 100, "%"));
            };

            DesktopSplashScreen.prototype.Title = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.NameLabel.Text(value);
            };
            return DesktopSplashScreen;
        })(UI.Window);
        UI.DesktopSplashScreen = DesktopSplashScreen;
        var MobileSplashScreen = (function (_super) {
            __extends(MobileSplashScreen, _super);
            function MobileSplashScreen(title) {
                _super.call(this, title);

                this.AddClass("Mobile");

                this.Top(new TSUI.UI.CSSNumber(0));
                this.Left(new TSUI.UI.CSSNumber(0));
            }
            MobileSplashScreen.prototype.ConstructDOM = function (parent) {
                _super.prototype.ConstructDOM.call(this, parent);

                var width = Math.min($(window).width(), 280);
                this.Width(new TSUI.UI.CSSNumber(width));
                this.Left(new TSUI.UI.CSSNumber(($(window).width() - width) / 2));
                this.Height(new TSUI.UI.CSSNumber($(window).height()));
                this.Top(new TSUI.UI.CSSNumber(0));
            };
            return MobileSplashScreen;
        })(DesktopSplashScreen);
        UI.MobileSplashScreen = MobileSplashScreen;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

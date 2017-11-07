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
    /// <reference path="../../Interfaces/Windows/IMessageBox.d.ts" />
    /// <reference path="../Label.ts" />
    /// <reference path="Window.ts" />
    (function (UI) {
        var MessageBox = (function (_super) {
            __extends(MessageBox, _super);
            function MessageBox(title, text) {
                _super.call(this);

                this._rootElement.addClass("MessageBox");

                this.ContentPanel.ApplyStyles({
                    padding: "15px"
                });

                this.TextLabel = new UI.Label();
                this.TextLabel.ApplyStyles({
                    position: "relative"
                });
                this.ContentPanel.Children.Add(this.TextLabel);

                this.EnableSelection();
                this.ContentPanel.EnableSelection();
                this.TextLabel.EnableSelection();

                this.Title(title);
                this.Text(text);
            }
            MessageBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this.Width(new UI.CSSNumber($(window).width()));
                    _this.Height(new UI.CSSNumber($(window).height()));

                    _this.ContentPanel.Width(new UI.CSSNumber(0, "", true));
                    _this.ContentPanel.Height(new UI.CSSNumber(0, "", true));
                    _this.ContentPanel.Right(new UI.CSSNumber(0, "", true));
                    _this.ContentPanel.Bottom(new UI.CSSNumber(0, "", true));

                    _this.Width(new UI.CSSNumber(Math.max(_this.ContentPanel.ActualWidth() + 10, _this.MainTitleBar.WindowMinSuitableWidth() + 10)));
                    _this.Height(new UI.CSSNumber(_this.TextLabel.ActualHeight() + _this.MainTitleBar.ActualHeight() + 35));

                    _this.ContentPanel.MaxWidth(new UI.CSSNumber(100, "%"));
                    _this.TextLabel.Width(new UI.CSSNumber(100, "%"));
                    _this.TextLabel.Height(new UI.CSSNumber(0, "", true));

                    if (onComplete) {
                        onComplete();
                    }
                });
            };

            MessageBox.prototype.PositionCenterParent = function (parent) {
                this.Top(new UI.CSSNumber((((parent.ActualHeight() - this.ActualHeight()) / 2) / parent.ActualHeight()) * 100, "%"));
                this.Left(new UI.CSSNumber((((parent.ActualWidth() - this.ActualWidth()) / 2) / parent.ActualWidth()) * 100, "%"));
            };

            MessageBox.prototype.Text = function (value) {
                return this.TextLabel.Text(value);
            };

            MessageBox.prototype.Width = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = _super.prototype.Width.call(this, value);
                if (value !== null) {
                    //Margin around the text
                    this.ContentPanel.Width(new UI.CSSNumber(this.ActualWidth() - 30));
                }
                return result;
            };
            return MessageBox;
        })(UI.Window);
        UI.MessageBox = MessageBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

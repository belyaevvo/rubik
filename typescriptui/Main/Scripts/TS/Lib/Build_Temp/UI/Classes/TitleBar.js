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
    /// <reference path="Label.ts" />
    /// <reference path="../Interfaces/ITitleBar.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var TitleBar = (function (_super) {
            __extends(TitleBar, _super);
            function TitleBar() {
                _super.call(this);

                this._rootElement.addClass("TitleBar");

                this._TitleLabel = new UI.Label();
                this._TitleLabel.AddClass("Title");
                this.Children.Add(this._TitleLabel);
            }
            TitleBar.prototype.WindowMinSuitableWidth = function () {
                //+50 for close button
                return this._TitleLabel.ActualWidth() + 50;
            };

            TitleBar.prototype.Title = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._TitleLabel.Text(value);
                }
                return this._TitleLabel.Text();
            };

            TitleBar.prototype.Draggable = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Draggable = value;

                    if (this._Draggable) {
                        this._rootElement.removeClass("Undraggable");
                    } else {
                        this._rootElement.addClass("Undraggable");
                    }
                }
                return this._Draggable;
            };
            return TitleBar;
        })(UI.Control);
        UI.TitleBar = TitleBar;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

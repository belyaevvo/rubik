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
    /// <reference path="../Interfaces/ILabel.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var Label = (function (_super) {
            __extends(Label, _super);
            function Label(text) {
                if (typeof text === "undefined") { text = null; }
                _super.call(this);
                this._Focusable_AddedByLink = false;

                this._rootElement.addClass("Label");

                this.Text(text || " ");

                this.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._This_Clicked, this));
            }
            Label.prototype._This_Clicked = function (eventArgs) {
                if (this.Focusable()) {
                    this.Focus();
                }
            };

            Label.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    value = value.replace("\n", "<br />");
                    this._rootElement.html(value);
                }
                return this._rootElement.text();
            };
            Label.prototype.HTML = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._rootElement.html(value);
                }
                return this._rootElement.html();
            };

            Label.prototype.Link = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (value === "") {
                        //Removes any inner <a> tags
                        this.Text(this.Text());

                        if (this._Focusable && this._Focusable_AddedByLink) {
                            this.Focusable(false);
                        }
                    } else {
                        var text = this.Text();
                        var newHTML = "<a href=\"" + value + "\" target=\"_blank\">" + text + "</a>";
                        this.HTML(newHTML);

                        if (!this._Focusable) {
                            this.Focusable(true);
                            this._Focusable_AddedByLink = true;
                        }
                    }
                }
                var elem = this._rootElement.find("a");
                var retVal = null;
                if (elem.length > 0) {
                    retVal = elem.first().attr("href");
                }
                return retVal;
            };

            Label.prototype.Focusable = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = _super.prototype.Focusable.call(this, value);
                if (value !== null) {
                    this._Focusable_AddedByLink = false;
                }
                return result;
            };

            Label.prototype.InvokeDefaultAction = function () {
                var link = this.Link();
                if (link !== null) {
                    TSUI.OpenInNewWindow(link);
                } else {
                    this._rootElement.click();
                }
            };
            return Label;
        })(UI.Control);
        UI.Label = Label;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

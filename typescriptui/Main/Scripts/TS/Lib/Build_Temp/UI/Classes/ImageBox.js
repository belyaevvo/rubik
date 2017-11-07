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
    /// <reference path="../Interfaces/IImageBox.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var ImageBox = (function (_super) {
            __extends(ImageBox, _super);
            function ImageBox(src, alt) {
                if (typeof src === "undefined") { src = ""; }
                if (typeof alt === "undefined") { alt = ""; }
                _super.call(this);
                this._NavigateToOnClick = "";
                this._Focusable_AddedByLink = false;

                this._rootElement.addClass("ImageBox");

                this._ImageElement = $("<img>");

                this.Source(src);
                if (alt !== "") {
                    this.AlternateText(alt);
                }

                this.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._This_OnClick_NavigateHandler, this));
            }
            ImageBox.prototype._This_OnClick_NavigateHandler = function (eventArgs) {
                if (this.ActuallyEnabled()) {
                    if (this._NavigateToOnClick !== "") {
                        TSUI.OpenInNewWindow(this._NavigateToOnClick);
                    }
                }
            };

            ImageBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._rootElement.append(_this._ImageElement);
                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            ImageBox.prototype.DestroyDOM = function () {
                this._ImageElement.remove();

                _super.prototype.DestroyDOM.call(this);
            };

            ImageBox.prototype.AlternateText = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._ImageElement.attr("alt", value);
                }
                return this._ImageElement.attr("alt");
            };
            ImageBox.prototype.Source = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._ImageElement.attr("src", value);
                    if (value === "") {
                        this._rootElement.addClass("NoSource");
                    } else {
                        this._rootElement.removeClass("NoSource");
                    }
                }
                return this._ImageElement.attr("src");
            };

            ImageBox.prototype.NavigateToOnClick = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._NavigateToOnClick = value;
                    if (value !== "") {
                        this.AddClass("Clickable");
                        if (!this._Focusable_AddedByLink) {
                            this.Focusable(true);
                            this._Focusable_AddedByLink = true;
                        }
                    } else {
                        this.RemoveClass("Clickable");
                        if (this._Focusable_AddedByLink) {
                            this.Focusable(false);
                        }
                    }
                }
                return this._NavigateToOnClick;
            };

            ImageBox.prototype.Focusable = function (value) {
                if (typeof value === "undefined") { value = null; }
                var result = _super.prototype.Focusable.call(this, value);
                if (value !== null) {
                    this._Focusable_AddedByLink = false;
                }
                return result;
            };

            ImageBox.prototype.InvokeDefaultAction = function () {
                this._ImageElement.click();
            };
            return ImageBox;
        })(UI.Control);
        UI.ImageBox = ImageBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

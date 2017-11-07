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
    /// <reference path="../Interfaces/ITileBackground.d.ts" />
    /// <reference path="ImageBox.ts" />
    (function (UI) {
        var TileBackground = (function (_super) {
            __extends(TileBackground, _super);
            function TileBackground(source) {
                _super.call(this, source);

                this._rootElement.addClass("Background");
            }
            TileBackground.prototype.SetPosition = function (value) {
                switch (value) {
                    case UI.TileBackgroundPositions.OffTop:
                        this._rootElement.addClass("OffTop");
                        this._rootElement.removeClass("In");
                        this._rootElement.removeClass("OffBottom");
                        break;
                    case UI.TileBackgroundPositions.In:
                        this._rootElement.addClass("In");
                        this._rootElement.removeClass("OffTop");
                        this._rootElement.removeClass("OffBottom");
                        break;
                    case UI.TileBackgroundPositions.OffBottom:
                        this._rootElement.addClass("OffBottom");
                        this._rootElement.removeClass("In");
                        this._rootElement.removeClass("OffTop");
                        break;
                }
            };
            return TileBackground;
        })(UI.ImageBox);
        UI.TileBackground = TileBackground;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

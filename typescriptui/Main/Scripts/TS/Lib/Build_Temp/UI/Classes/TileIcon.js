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
    /// <reference path="../Interfaces/ITileIcon.d.ts" />
    /// <reference path="ImageBox.ts" />
    (function (UI) {
        UI.IconsDirectory = "Images/";
        UI.TileIcons = {
            About: "InfoIcon.png",
            Download: "DownloadIcon.png",
            Secure: "SecureIcon.png"
        };

        var TileIcon = (function (_super) {
            __extends(TileIcon, _super);
            function TileIcon() {
                _super.call(this);

                this._rootElement.addClass("Icon");
            }
            TileIcon.prototype.Source = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value === UI.TileIcons.About || value === UI.TileIcons.Download || value === UI.TileIcons.Secure) {
                    value = UI.IconsDirectory + value;
                }

                var result = _super.prototype.Source.call(this, value);
                if (value.indexOf(UI.IconsDirectory) === 0) {
                    value = value.substring(UI.IconsDirectory.length, value.length);
                }
                return result;
            };
            return TileIcon;
        })(UI.ImageBox);
        UI.TileIcon = TileIcon;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

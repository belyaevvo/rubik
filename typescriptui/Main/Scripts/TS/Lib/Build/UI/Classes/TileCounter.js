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
    /// <reference path="../Interfaces/ITileCounter.d.ts" />
    /// <reference path="Label.ts" />
    (function (UI) {
        var TileCounter = (function (_super) {
            __extends(TileCounter, _super);
            function TileCounter() {
                _super.call(this);

                this._rootElement.addClass("Counter");
            }
            return TileCounter;
        })(UI.Label);
        UI.TileCounter = TileCounter;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

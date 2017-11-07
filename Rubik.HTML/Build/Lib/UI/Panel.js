/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="IPanel.d.ts" />
/// <reference path="Control.ts" />
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var Panel = (function (_super) {
            __extends(Panel, _super);
            function Panel() {
                var _this = _super.call(this) || this;
                _this._rootElement.addClass("Panel");
                return _this;
            }
            return Panel;
        }(UI.Control));
        UI.Panel = Panel;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=Panel.js.map
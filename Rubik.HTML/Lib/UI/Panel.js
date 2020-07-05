/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="IPanel.d.ts" />
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        class Panel extends UI.ContentControl {
            constructor() {
                super();
                this._rootElement.addClass("Panel");
            }
        }
        UI.Panel = Panel;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=Panel.js.map
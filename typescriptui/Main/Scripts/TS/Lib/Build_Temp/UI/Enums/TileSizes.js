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
    (function (UI) {
        /** The sizes of tiles (as specified by Microsoft) */
        (function (TileSizes) {
            TileSizes[TileSizes["Small"] = 0] = "Small";
            TileSizes[TileSizes["Medium"] = 1] = "Medium";
            TileSizes[TileSizes["Large"] = 2] = "Large";
            TileSizes[TileSizes["LargeSquare"] = 3] = "LargeSquare";
        })(UI.TileSizes || (UI.TileSizes = {}));
        var TileSizes = UI.TileSizes;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

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
        /** The types of tile (as specified by Microsoft) */
        (function (TileTypes) {
            TileTypes[TileTypes["Flip"] = 0] = "Flip";
            TileTypes[TileTypes["Iconic"] = 1] = "Iconic";
            TileTypes[TileTypes["Cycle"] = 2] = "Cycle";
        })(UI.TileTypes || (UI.TileTypes = {}));
        var TileTypes = UI.TileTypes;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

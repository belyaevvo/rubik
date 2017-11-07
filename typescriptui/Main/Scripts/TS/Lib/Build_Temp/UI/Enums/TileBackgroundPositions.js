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
        /** The positions for a Tile Background. (Used in animation) */
        (function (TileBackgroundPositions) {
            /** Position the background off the tile to the top i.e. CSS top:-100%, left:0% */
            TileBackgroundPositions[TileBackgroundPositions["OffTop"] = 0] = "OffTop";

            /** Position the background inside the tile to the top-left i.e. CSS top:0%, left:0% */
            TileBackgroundPositions[TileBackgroundPositions["In"] = 1] = "In";

            /** Position the background off the tile to the bottom i.e. CSS top:100%, left:0% */
            TileBackgroundPositions[TileBackgroundPositions["OffBottom"] = 2] = "OffBottom";
        })(UI.TileBackgroundPositions || (UI.TileBackgroundPositions = {}));
        var TileBackgroundPositions = UI.TileBackgroundPositions;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

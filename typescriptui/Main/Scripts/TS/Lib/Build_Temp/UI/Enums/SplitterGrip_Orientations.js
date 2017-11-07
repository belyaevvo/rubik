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
        /** The orientations of a splitter grip. */
        (function (SplitterGrip_Orientations) {
            /** Horizontal splitter grip */
            SplitterGrip_Orientations[SplitterGrip_Orientations["Horizontal"] = 0] = "Horizontal";

            /** Vertical splitter grip */
            SplitterGrip_Orientations[SplitterGrip_Orientations["Vertical"] = 1] = "Vertical";
        })(UI.SplitterGrip_Orientations || (UI.SplitterGrip_Orientations = {}));
        var SplitterGrip_Orientations = UI.SplitterGrip_Orientations;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

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
        /** The orientations of stacking in a stack panel. */
        (function (StackPanelOrientations) {
            /** Horizontally stack items i.e. in stack in columns */
            StackPanelOrientations[StackPanelOrientations["Horizontal"] = 0] = "Horizontal";

            /** Vertically stack items i.e. in stack in rows */
            StackPanelOrientations[StackPanelOrientations["Vertical"] = 1] = "Vertical";
        })(UI.StackPanelOrientations || (UI.StackPanelOrientations = {}));
        var StackPanelOrientations = UI.StackPanelOrientations;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

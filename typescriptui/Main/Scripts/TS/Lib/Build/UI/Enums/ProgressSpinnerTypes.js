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
        /** The types of progress spinners.
        Note: To reverse direction, see IProgressSpinner.Reverse
        */
        (function (ProgressSpinnerTypes) {
            /** A circular, clockwise progress spinner */
            ProgressSpinnerTypes[ProgressSpinnerTypes["Circular"] = 0] = "Circular";

            /** A horizontal, left-to-right progress spinner */
            ProgressSpinnerTypes[ProgressSpinnerTypes["Horizontal"] = 1] = "Horizontal";

            /** A vertical, top-to-bottom progress spinner */
            ProgressSpinnerTypes[ProgressSpinnerTypes["Vertical"] = 2] = "Vertical";
        })(UI.ProgressSpinnerTypes || (UI.ProgressSpinnerTypes = {}));
        var ProgressSpinnerTypes = UI.ProgressSpinnerTypes;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

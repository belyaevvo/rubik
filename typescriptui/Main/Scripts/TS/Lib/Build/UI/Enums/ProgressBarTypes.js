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
        /** The types of progress bars.
        Note: To reverse direction, see IProgressBar.Reverse
        */
        (function (ProgressBarTypes) {
            /** A circular, clockwise progress bar */
            ProgressBarTypes[ProgressBarTypes["Circular"] = 0] = "Circular";

            /** A horizontal, left-to-right progress bar */
            ProgressBarTypes[ProgressBarTypes["Horizontal"] = 1] = "Horizontal";

            /** A vertical, top-to-bottom progress bar */
            ProgressBarTypes[ProgressBarTypes["Vertical"] = 2] = "Vertical";
        })(UI.ProgressBarTypes || (UI.ProgressBarTypes = {}));
        var ProgressBarTypes = UI.ProgressBarTypes;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

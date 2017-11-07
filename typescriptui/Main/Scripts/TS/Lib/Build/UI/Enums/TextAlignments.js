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
        /** Text alignments */
        (function (TextAlignments) {
            /** Align text to the left. */
            TextAlignments[TextAlignments["Left"] = 0] = "Left";

            /** Align text to the right. */
            TextAlignments[TextAlignments["Right"] = 1] = "Right";
        })(UI.TextAlignments || (UI.TextAlignments = {}));
        var TextAlignments = UI.TextAlignments;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 24 22:15 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 24/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (Data) {
        /** The directions of data flow that control the data binding. */
        (function (BindingDirections) {
            /** Indicates the data flow is from source to user. */
            BindingDirections[BindingDirections["S2U"] = 0] = "S2U";

            /** Indicates the data flow is from user to source. */
            BindingDirections[BindingDirections["U2S"] = 1] = "U2S";

            /** Indicates the data flow is in both directions with default direction as source to user. */
            BindingDirections[BindingDirections["BOTH_S2UDefault"] = 2] = "BOTH_S2UDefault";

            /** Indicates the data flow is in both directions with default direction as user to source. */
            BindingDirections[BindingDirections["BOTH_U2SDefault"] = 3] = "BOTH_U2SDefault";
        })(Data.BindingDirections || (Data.BindingDirections = {}));
        var BindingDirections = Data.BindingDirections;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

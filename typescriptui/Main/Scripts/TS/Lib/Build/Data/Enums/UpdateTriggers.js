var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 27 22:00 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 27/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (Data) {
        /** FLAGS: The statuses that a data push or data pull request can have. */
        (function (UpdateTriggers) {
            /** Indicates the trigger of the update request is unknown. */
            UpdateTriggers[UpdateTriggers["Unkown"] = 0] = "Unkown";

            /** Indicates the trigger of the update request is the source. */
            UpdateTriggers[UpdateTriggers["Source"] = 1] = "Source";

            /** Indicates the trigger of the update request is the user. */
            UpdateTriggers[UpdateTriggers["User"] = 2] = "User";

            /** Indicates the trigger of the update request is the data binding. */
            UpdateTriggers[UpdateTriggers["Binding"] = 4] = "Binding";
        })(Data.UpdateTriggers || (Data.UpdateTriggers = {}));
        var UpdateTriggers = Data.UpdateTriggers;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

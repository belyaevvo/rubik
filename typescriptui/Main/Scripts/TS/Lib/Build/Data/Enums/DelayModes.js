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
        /** The delay modes a data binding can use. */
        (function (DelayModes) {
            /** Indicates the data binding should delay the first call to update and ignore subsequent calls until the update has completed (or failed). */
            DelayModes[DelayModes["First"] = 0] = "First";

            /** Indicates the data binding should cancel previous calls to update and delay the latest call. */
            DelayModes[DelayModes["Last"] = 1] = "Last";
        })(Data.DelayModes || (Data.DelayModes = {}));
        var DelayModes = Data.DelayModes;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

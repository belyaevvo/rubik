var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Sep 5 13:47 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 5/Sep/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (Logging) {
        /** The list of modes used when recovering from an error. */
        (function (RecoveryModes) {
            RecoveryModes[RecoveryModes["Abort"] = 0] = "Abort";
            RecoveryModes[RecoveryModes["Retry"] = 1] = "Retry";
            RecoveryModes[RecoveryModes["Continue"] = 2] = "Continue";
            RecoveryModes[RecoveryModes["Continue_SkipSection"] = 3] = "Continue_SkipSection";
        })(Logging.RecoveryModes || (Logging.RecoveryModes = {}));
        var RecoveryModes = Logging.RecoveryModes;
    })(TSUI.Logging || (TSUI.Logging = {}));
    var Logging = TSUI.Logging;
})(TSUI || (TSUI = {}));

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
        /** The internal list of trace types for logs. */
        (function (TraceTypes) {
            TraceTypes[TraceTypes["LOG"] = 0] = "LOG";
            TraceTypes[TraceTypes["COMMON"] = 1] = "COMMON";

            TraceTypes[TraceTypes["LOGIC_TRACE"] = 2] = "LOGIC_TRACE";
            TraceTypes[TraceTypes["DATA_TRACE"] = 3] = "DATA_TRACE";
            TraceTypes[TraceTypes["ERROR_TRACE"] = 4] = "ERROR_TRACE";
        })(Logging.TraceTypes || (Logging.TraceTypes = {}));
        var TraceTypes = Logging.TraceTypes;
    })(TSUI.Logging || (TSUI.Logging = {}));
    var Logging = TSUI.Logging;
})(TSUI || (TSUI = {}));

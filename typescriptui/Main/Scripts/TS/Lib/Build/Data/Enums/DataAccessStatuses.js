var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 3 12:15 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 3/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (Data) {
        /** FLAGS: The statuses that a data push or data pull request can have. */
        (function (DataAccessStatuses) {
            /** Indicates the status of the request is not known. */
            DataAccessStatuses[DataAccessStatuses["Unkown"] = 0] = "Unkown";

            /** Indicates that the request is pending completion. */
            DataAccessStatuses[DataAccessStatuses["Pending"] = 1] = "Pending";

            /** Indicates that the request has completed succesffuly. */
            DataAccessStatuses[DataAccessStatuses["Complete"] = 2] = "Complete";

            /** Indicates that the request has completed but failed. */
            DataAccessStatuses[DataAccessStatuses["Failed"] = 4] = "Failed";

            /** Indicates that an error occurred other than request failure. */
            DataAccessStatuses[DataAccessStatuses["Error"] = 8] = "Error";
        })(Data.DataAccessStatuses || (Data.DataAccessStatuses = {}));
        var DataAccessStatuses = Data.DataAccessStatuses;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

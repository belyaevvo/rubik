var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 3 12:35 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 25/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Enums/DataAccessStatuses.ts" />
    /// <reference path="../Interfaces/IDataAccessResult.d.ts" />
    (function (Data) {
        /** Defines the structure for the result of a data access request. Contains the Status of the request and any data returned.
        T: The type of data (the type of the Result property)
        */
        var DataAccessResult = (function () {
            /** Creates a new instance of DataAccessResult
            @param status The most recent status of the request.
            @param result The result data of the request.
            @returns A new DataAccessResult instance.
            */
            function DataAccessResult(status, result) {
                this.Status = status;
                this.Result = result;
            }
            return DataAccessResult;
        })();
        Data.DataAccessResult = DataAccessResult;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

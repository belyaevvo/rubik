var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
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
    /// <reference path="Exception.ts" />
    (function (Exceptions) {
        /** An incorrect type exception. Automatically adds descriptive information in the constructor. */
        var IncorrectTypeException = (function (_super) {
            __extends(IncorrectTypeException, _super);
            /** Creates a new ArgumentException instance with specified information. Automatically adds descriptive information about this particular
            type of exception.
            @param GivenType The name of the type which was given.
            @param ExpectedType The name of the type which was expected.
            @param Trace The origin of the exception
            @param InnerException The inner exception which lead to this exception, if any.
            Note: Also automatically logs the exception in the browser log.
            */
            function IncorrectTypeException(GivenType, ExpectedType, Trace, InnerException) {
                if (typeof GivenType === "undefined") { GivenType = ""; }
                if (typeof ExpectedType === "undefined") { ExpectedType = ""; }
                if (typeof Trace === "undefined") { Trace = ""; }
                if (typeof InnerException === "undefined") { InnerException = null; }
                _super.call(this, "Incorrect type! Expected type " + ExpectedType + " got " + GivenType, Trace, InnerException);
                this.GivenType = GivenType;
                this.ExpectedType = ExpectedType;
                this.Trace = Trace;
                this.InnerException = InnerException;
            }
            return IncorrectTypeException;
        })(Exceptions.Exception);
        Exceptions.IncorrectTypeException = IncorrectTypeException;
    })(TSUI.Exceptions || (TSUI.Exceptions = {}));
    var Exceptions = TSUI.Exceptions;
})(TSUI || (TSUI = {}));

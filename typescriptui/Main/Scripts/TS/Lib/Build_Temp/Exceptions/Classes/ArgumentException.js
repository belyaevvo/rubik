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
        /** An argument exception. Automatically adds descriptive information in the constructor. */
        var ArgumentException = (function (_super) {
            __extends(ArgumentException, _super);
            /** Creates a new ArgumentException instance with specified information. Automatically adds descriptive information about this particular
            type of exception.
            @param ArgumentName The name of the invalid argument.
            @param Trace The origin of the exception
            @param InnerException The inner exception which lead to this exception, if any.
            Note: Also automatically logs the exception in the browser log.
            */
            function ArgumentException(ArgumentName, Trace, InnerException) {
                if (typeof ArgumentName === "undefined") { ArgumentName = ""; }
                if (typeof Trace === "undefined") { Trace = ""; }
                if (typeof InnerException === "undefined") { InnerException = null; }
                _super.call(this, "Invalid argument! Name: " + ArgumentName, Trace, InnerException);
                this.ArgumentName = ArgumentName;
                this.Trace = Trace;
                this.InnerException = InnerException;
            }
            return ArgumentException;
        })(Exceptions.Exception);
        Exceptions.ArgumentException = ArgumentException;
    })(TSUI.Exceptions || (TSUI.Exceptions = {}));
    var Exceptions = TSUI.Exceptions;
})(TSUI || (TSUI = {}));

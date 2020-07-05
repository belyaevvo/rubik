/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="IException.d.ts" />
var Rubik;
(function (Rubik) {
    var Exceptions;
    (function (Exceptions) {
        /** A generic exception implementation. All exception implementations should derive from this. */
        class Exception {
            /** Creates a new Exception instance with specified information.
                @param Message The message to describe the exception.
                @param Trace The origin of the exception
                @param InnerException The inner exception which lead to this exception, if any.
                Note: Also automatically logs the exception in the browser log.
            */
            constructor(Message = "", Trace = "", InnerException = null) {
                this.Message = Message;
                this.Trace = Trace;
                this.InnerException = InnerException;
                console.log(this.toString());
            }
            /** Converts the exception to a human-readable string representation. */
            toString() {
                return typeof (this) + ": " + this.Message + "\n" + this.Trace +
                    (this.InnerException === null ? "" : "\nInner exception:\n" + this.InnerException.toString());
            }
        }
        Exceptions.Exception = Exception;
    })(Exceptions = Rubik.Exceptions || (Rubik.Exceptions = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=Exception.js.map
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
var Rubik;
(function (Rubik) {
    var Exceptions;
    (function (Exceptions) {
        /** An argument exception. Automatically adds descriptive information in the constructor. */
        class ArgumentException extends Exceptions.Exception {
            /** Creates a new ArgumentException instance with specified information. Automatically adds descriptive information about this particular
            type of exception.
                @param ArgumentName The name of the invalid argument.
                @param Trace The origin of the exception
                @param InnerException The inner exception which lead to this exception, if any.
                Note: Also automatically logs the exception in the browser log.
            */
            constructor(ArgumentName = "", Trace = "", InnerException = null) {
                super("Invalid argument! Name: " + ArgumentName, Trace, InnerException);
                this.ArgumentName = ArgumentName;
                this.Trace = Trace;
                this.InnerException = InnerException;
            }
        }
        Exceptions.ArgumentException = ArgumentException;
    })(Exceptions = Rubik.Exceptions || (Rubik.Exceptions = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=ArgumentException.js.map
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
        /** An incorrect type exception. Automatically adds descriptive information in the constructor. */
        class IncorrectTypeException extends Exceptions.Exception {
            /** Creates a new ArgumentException instance with specified information. Automatically adds descriptive information about this particular
            type of exception.
                @param GivenType The name of the type which was given.
                @param ExpectedType The name of the type which was expected.
                @param Trace The origin of the exception
                @param InnerException The inner exception which lead to this exception, if any.
                Note: Also automatically logs the exception in the browser log.
            */
            constructor(GivenType = "", ExpectedType = "", Trace = "", InnerException = null) {
                super("Incorrect type! Expected type " + ExpectedType + " got " + GivenType, Trace, InnerException);
                this.GivenType = GivenType;
                this.ExpectedType = ExpectedType;
                this.Trace = Trace;
                this.InnerException = InnerException;
            }
        }
        Exceptions.IncorrectTypeException = IncorrectTypeException;
    })(Exceptions = Rubik.Exceptions || (Rubik.Exceptions = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=IncorrectTypeException.js.map
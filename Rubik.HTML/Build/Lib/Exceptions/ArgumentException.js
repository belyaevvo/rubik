/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="Exception.ts" />
var Rubik;
(function (Rubik) {
    var Exceptions;
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
                if (ArgumentName === void 0) { ArgumentName = ""; }
                if (Trace === void 0) { Trace = ""; }
                if (InnerException === void 0) { InnerException = null; }
                var _this = _super.call(this, "Invalid argument! Name: " + ArgumentName, Trace, InnerException) || this;
                _this.ArgumentName = ArgumentName;
                _this.Trace = Trace;
                _this.InnerException = InnerException;
                return _this;
            }
            return ArgumentException;
        }(Exceptions.Exception));
        Exceptions.ArgumentException = ArgumentException;
    })(Exceptions = Rubik.Exceptions || (Rubik.Exceptions = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=ArgumentException.js.map
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
        /** An incorrect type exception. Automatically adds descriptive information in the constructor. */
        var IncorrectTypeException = /** @class */ (function (_super) {
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
                if (GivenType === void 0) { GivenType = ""; }
                if (ExpectedType === void 0) { ExpectedType = ""; }
                if (Trace === void 0) { Trace = ""; }
                if (InnerException === void 0) { InnerException = null; }
                var _this = _super.call(this, "Incorrect type! Expected type " + ExpectedType + " got " + GivenType, Trace, InnerException) || this;
                _this.GivenType = GivenType;
                _this.ExpectedType = ExpectedType;
                _this.Trace = Trace;
                _this.InnerException = InnerException;
                return _this;
            }
            return IncorrectTypeException;
        }(Exceptions.Exception));
        Exceptions.IncorrectTypeException = IncorrectTypeException;
    })(Exceptions = Rubik.Exceptions || (Rubik.Exceptions = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=IncorrectTypeException.js.map
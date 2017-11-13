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
/// <reference path="CollectionModifications.ts" />
/// <reference path="../Events/Event.ts" />
/// <reference path="../Events/IEventHandler.d.ts" />
/// <reference path="../Events/IEventArgs.d.ts" />
/// <reference path="../Events/IEvent.d.ts" />
var Rubik;
(function (Rubik) {
    var Collections;
    (function (Collections) {
        /** Event to be fired when a collection (e.g. IList) is modified e.g. added to, removed from, re-ordered.
            Note: This event has been put into a separate class ro prevent reference loops with Collections namespace that result in compiler failures/errors.
         */
        var CollectionModifiedEvent = /** @class */ (function (_super) {
            __extends(CollectionModifiedEvent, _super);
            function CollectionModifiedEvent() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.Handlers = [];
                return _this;
            }
            CollectionModifiedEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            CollectionModifiedEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };
            CollectionModifiedEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };
            CollectionModifiedEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return CollectionModifiedEvent;
        }(Rubik.Events.Event));
        Collections.CollectionModifiedEvent = CollectionModifiedEvent;
        var CollectionModifiedEventHandler = /** @class */ (function (_super) {
            __extends(CollectionModifiedEventHandler, _super);
            function CollectionModifiedEventHandler(Callback, Context) {
                var _this = _super.call(this, Callback, Context) || this;
                _this.Callback = Callback;
                _this.Context = Context;
                return _this;
            }
            CollectionModifiedEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return CollectionModifiedEventHandler;
        }(Rubik.Events.EventHandler));
        Collections.CollectionModifiedEventHandler = CollectionModifiedEventHandler;
        var CollectionModifiedEventArgs = /** @class */ (function (_super) {
            __extends(CollectionModifiedEventArgs, _super);
            function CollectionModifiedEventArgs(Sender, Modification, ModifiedElements) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.Modification = Modification;
                _this.ModifiedElements = ModifiedElements;
                return _this;
            }
            return CollectionModifiedEventArgs;
        }(Rubik.Events.EventArgs));
        Collections.CollectionModifiedEventArgs = CollectionModifiedEventArgs;
    })(Collections = Rubik.Collections || (Rubik.Collections = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=CollectionModifiedEvent.js.map
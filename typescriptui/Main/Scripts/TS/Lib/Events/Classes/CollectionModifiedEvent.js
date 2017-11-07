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
    /// <reference path="../Enums/CollectionModifications.ts" />
    /// <reference path="../../Collections/Collections_BuildRefs.d.ts" />
    /// <reference path="Event.ts" />
    /// <reference path="../Interfaces/IEventHandler.d.ts" />
    /// <reference path="../Interfaces/IEventArgs.d.ts" />
    /// <reference path="../Interfaces/IEvent.d.ts" />
    (function (Events) {
        /** Event to be fired when a collection (e.g. IList) is modified e.g. added to, removed from, re-ordered.
        Note: This event has been put into a separate class ro prevent reference loops with Collections namespace that result in compiler failures/errors.
        */
        var CollectionModifiedEvent = (function (_super) {
            __extends(CollectionModifiedEvent, _super);
            function CollectionModifiedEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
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
        })(Events.Event);
        Events.CollectionModifiedEvent = CollectionModifiedEvent;
        var CollectionModifiedEventHandler = (function (_super) {
            __extends(CollectionModifiedEventHandler, _super);
            function CollectionModifiedEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            CollectionModifiedEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return CollectionModifiedEventHandler;
        })(Events.EventHandler);
        Events.CollectionModifiedEventHandler = CollectionModifiedEventHandler;

        var CollectionModifiedEventArgs = (function (_super) {
            __extends(CollectionModifiedEventArgs, _super);
            function CollectionModifiedEventArgs(Sender, Modification, ModifiedElements) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.Modification = Modification;
                this.ModifiedElements = ModifiedElements;
            }
            return CollectionModifiedEventArgs;
        })(Events.EventArgs);
        Events.CollectionModifiedEventArgs = CollectionModifiedEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

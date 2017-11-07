var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /// <reference path="../../Data/Enums/DataAccessStatuses.ts" />
    /// <reference path="../../Data/Interfaces/IDataAccessResult.d.ts" />
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13  : Initial version.
    - 28/Aug/13 : Corrected IDataBindng.d.ts to IDataBinding.d.ts (in the reference)
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Data/Enums/DataAccessStatuses.ts" />
    /// <reference path="../../Data/Interfaces/IDataBinding.d.ts" />
    /// <reference path="Event.ts" />
    /// <reference path="../Interfaces/IEventHandler.d.ts" />
    /// <reference path="../Interfaces/IEventArgs.d.ts" />
    /// <reference path="../Interfaces/IEvent.d.ts" />
    (function (Events) {
        //#region Update From Source Event
        /** See Event for more details. */
        var UpdateFromSourceEvent = (function (_super) {
            __extends(UpdateFromSourceEvent, _super);
            function UpdateFromSourceEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            UpdateFromSourceEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            UpdateFromSourceEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            UpdateFromSourceEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            UpdateFromSourceEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateFromSourceEvent;
        })(Events.Event);
        Events.UpdateFromSourceEvent = UpdateFromSourceEvent;

        /** See EventHandler for more details. */
        var UpdateFromSourceEventHandler = (function (_super) {
            __extends(UpdateFromSourceEventHandler, _super);
            function UpdateFromSourceEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            UpdateFromSourceEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateFromSourceEventHandler;
        })(Events.EventHandler);
        Events.UpdateFromSourceEventHandler = UpdateFromSourceEventHandler;

        /** See EventArgs for more details.*/
        var UpdateFromSourceEventArgs = (function (_super) {
            __extends(UpdateFromSourceEventArgs, _super);
            function UpdateFromSourceEventArgs(Sender, Status) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.Status = Status;
            }
            return UpdateFromSourceEventArgs;
        })(Events.EventArgs);
        Events.UpdateFromSourceEventArgs = UpdateFromSourceEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

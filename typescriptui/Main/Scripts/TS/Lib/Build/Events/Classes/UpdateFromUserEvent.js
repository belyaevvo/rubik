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
        //#region Update From User Event
        /** See Event for more details. */
        var UpdateFromUserEvent = (function (_super) {
            __extends(UpdateFromUserEvent, _super);
            function UpdateFromUserEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            UpdateFromUserEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            UpdateFromUserEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            UpdateFromUserEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            UpdateFromUserEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateFromUserEvent;
        })(Events.Event);
        Events.UpdateFromUserEvent = UpdateFromUserEvent;

        /** See EventHandler for more details. */
        var UpdateFromUserEventHandler = (function (_super) {
            __extends(UpdateFromUserEventHandler, _super);
            function UpdateFromUserEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            UpdateFromUserEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateFromUserEventHandler;
        })(Events.EventHandler);
        Events.UpdateFromUserEventHandler = UpdateFromUserEventHandler;

        /** See EventArgs for more details.*/
        var UpdateFromUserEventArgs = (function (_super) {
            __extends(UpdateFromUserEventArgs, _super);
            function UpdateFromUserEventArgs(Sender, Status) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.Status = Status;
            }
            return UpdateFromUserEventArgs;
        })(Events.EventArgs);
        Events.UpdateFromUserEventArgs = UpdateFromUserEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

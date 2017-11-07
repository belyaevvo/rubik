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
    /// <reference path="../../Data/Interfaces/IDataUpdater.d.ts" />
    /// <reference path="Event.ts" />
    /// <reference path="../Interfaces/IEventHandler.d.ts" />
    /// <reference path="../Interfaces/IEventArgs.d.ts" />
    /// <reference path="../Interfaces/IEvent.d.ts" />
    (function (Events) {
        //#region Update Invoked Event
        /** See Event for more details. */
        var UpdateBeginEvent = (function (_super) {
            __extends(UpdateBeginEvent, _super);
            function UpdateBeginEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            UpdateBeginEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            UpdateBeginEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            UpdateBeginEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            UpdateBeginEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateBeginEvent;
        })(Events.Event);
        Events.UpdateBeginEvent = UpdateBeginEvent;

        /** See EventHandler for more details. */
        var UpdateBeginEventHandler = (function (_super) {
            __extends(UpdateBeginEventHandler, _super);
            function UpdateBeginEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            UpdateBeginEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateBeginEventHandler;
        })(Events.EventHandler);
        Events.UpdateBeginEventHandler = UpdateBeginEventHandler;

        /** See EventArgs for more details.*/
        var UpdateBeginEventArgs = (function (_super) {
            __extends(UpdateBeginEventArgs, _super);
            function UpdateBeginEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return UpdateBeginEventArgs;
        })(Events.EventArgs);
        Events.UpdateBeginEventArgs = UpdateBeginEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

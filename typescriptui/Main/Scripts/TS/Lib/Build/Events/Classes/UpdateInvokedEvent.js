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
        var UpdateInvokedEvent = (function (_super) {
            __extends(UpdateInvokedEvent, _super);
            function UpdateInvokedEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            UpdateInvokedEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            UpdateInvokedEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            UpdateInvokedEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            UpdateInvokedEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateInvokedEvent;
        })(Events.Event);
        Events.UpdateInvokedEvent = UpdateInvokedEvent;

        /** See EventHandler for more details. */
        var UpdateInvokedEventHandler = (function (_super) {
            __extends(UpdateInvokedEventHandler, _super);
            function UpdateInvokedEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            UpdateInvokedEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateInvokedEventHandler;
        })(Events.EventHandler);
        Events.UpdateInvokedEventHandler = UpdateInvokedEventHandler;

        /** See EventArgs for more details.*/
        var UpdateInvokedEventArgs = (function (_super) {
            __extends(UpdateInvokedEventArgs, _super);
            function UpdateInvokedEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return UpdateInvokedEventArgs;
        })(Events.EventArgs);
        Events.UpdateInvokedEventArgs = UpdateInvokedEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

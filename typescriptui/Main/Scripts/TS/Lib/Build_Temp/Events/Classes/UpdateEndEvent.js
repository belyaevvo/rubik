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
        var UpdateEndEvent = (function (_super) {
            __extends(UpdateEndEvent, _super);
            function UpdateEndEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            UpdateEndEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            UpdateEndEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            UpdateEndEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            UpdateEndEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateEndEvent;
        })(Events.Event);
        Events.UpdateEndEvent = UpdateEndEvent;

        /** See EventHandler for more details. */
        var UpdateEndEventHandler = (function (_super) {
            __extends(UpdateEndEventHandler, _super);
            function UpdateEndEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            UpdateEndEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return UpdateEndEventHandler;
        })(Events.EventHandler);
        Events.UpdateEndEventHandler = UpdateEndEventHandler;

        /** See EventArgs for more details.*/
        var UpdateEndEventArgs = (function (_super) {
            __extends(UpdateEndEventArgs, _super);
            function UpdateEndEventArgs(Sender, failures) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.failures = failures;
            }
            return UpdateEndEventArgs;
        })(Events.EventArgs);
        Events.UpdateEndEventArgs = UpdateEndEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

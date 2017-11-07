var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /// <reference path="../../Data/Interfaces/IDataAccessResult.d.ts" />
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Data/Enums/DataAccessStatuses.ts" />
    /// <reference path="../../Data/Interfaces/IDataAccessor.d.ts" />
    /// <reference path="Event.ts" />
    /// <reference path="../Interfaces/IEventHandler.d.ts" />
    /// <reference path="../Interfaces/IEventArgs.d.ts" />
    /// <reference path="../Interfaces/IEvent.d.ts" />
    (function (Events) {
        //#region Data Pulled Event
        /** See Event for more details. */
        var DataPulledEvent = (function (_super) {
            __extends(DataPulledEvent, _super);
            function DataPulledEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            DataPulledEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            DataPulledEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            DataPulledEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            DataPulledEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return DataPulledEvent;
        })(Events.Event);
        Events.DataPulledEvent = DataPulledEvent;

        /** See EventHandler for more details. */
        var DataPulledEventHandler = (function (_super) {
            __extends(DataPulledEventHandler, _super);
            function DataPulledEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            DataPulledEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return DataPulledEventHandler;
        })(Events.EventHandler);
        Events.DataPulledEventHandler = DataPulledEventHandler;

        /** See EventArgs for more details.*/
        var DataPulledEventArgs = (function (_super) {
            __extends(DataPulledEventArgs, _super);
            function DataPulledEventArgs(Sender, Result) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.Result = Result;
            }
            return DataPulledEventArgs;
        })(Events.EventArgs);
        Events.DataPulledEventArgs = DataPulledEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

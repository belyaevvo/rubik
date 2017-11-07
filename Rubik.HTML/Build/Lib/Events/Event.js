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
/// <reference path="IEventHandler.d.ts" />
/// <reference path="IEventArgs.d.ts" />
/// <reference path="IEvent.d.ts" />
var Rubik;
(function (Rubik) {
    var Events;
    (function (Events) {
        /** Fundamental implementation of an Event. All Events should inherit from this class.
            Note: See ClickEvent for sample derived class.
            Note: See List for sample usage.
        */
        var EventBase = (function () {
            function EventBase() {
                /** Private property - do not use externally. Should be overridden in derived classes simply to set the correct EventHandler type. */
                this.Handlers = [];
                /** Called when a new event handler is attached - can only be set to one method - if overriding, ensure full implementation as seen in this class. */
                this.OnHandlerAttached = null;
                /** The context object to use when calling OnHandlerAttached (sets the value of "this" in the called function). */
                this.OnHandlerAttachedContext = null;
                /** Called when a new event handler is attached - can only be set to one method - if overriding, ensure full implementation as seen in this class. */
                this.OnHandlerDettached = null;
                /** The context object to use when calling OnHandlerDettached (sets the value of "this" in the called function). */
                this.OnHandlerDettachedContext = null;
            }
            /** Attaches a an event handler to this event to be called when the event is fired.
                @param handler The event handler to attach.
                Note: An event handler can be attached to more than one event.
                Note: Should be overridden in derived classes to more specifically type handler argument.
            */
            EventBase.prototype.Attach = function (handler) {
                if (!this.IsAttached(handler)) {
                    this.Handlers.push(handler);
                    if (this.OnHandlerAttached !== null) {
                        this.OnHandlerAttached.call(this.OnHandlerAttachedContext);
                    }
                }
            };
            /** Detaches a an event handler from this event. Does nothing if the event handler has not already been attached.
                @param handler The event handler to detach.
                Note: Should be overridden in derived classes to more specifically type handler argument.
            */
            EventBase.prototype.Detach = function (handler) {
                if (this.IsAttached(handler)) {
                    this.Handlers.splice(this.Handlers.indexOf(handler), 1);
                    if (this.OnHandlerDettached !== null) {
                        this.OnHandlerDettached.call(this.OnHandlerDettachedContext);
                    }
                }
            };
            /** @returns whether the specified event handler is attached to this event or not.
                @param handler The event handler to check.
                Note: Should be overridden in derived classes to more specifically type handler argument.
             */
            EventBase.prototype.IsAttached = function (handler) {
                return this.Handlers.indexOf(handler) > -1;
            };
            /** Invokes (fires) this event with the given event args. Synchronously calls Invoke on each EventHandler in order of attachment, first-to-last.
                Note: Should be overridden in derived classes to more specifically type args argument.
            */
            EventBase.prototype.Invoke = function (args) {
                for (var i = 0; i < this.Handlers.length; i++) {
                    this.Handlers[i].Invoke(args);
                }
            };
            return EventBase;
        }());
        Events.EventBase = EventBase;
        /** Fundamental implementation of an EventHandler. All EventHandlers should inherit from this class.
            Note: An event handler can be attached to multiple events (provided it is unaffected by being attached to that event e.g. not destroyed after one event fires).
            Note: See ClickEventHandler for sample derived class.
        */
        var EventHandlerBase = (function () {
            /** Creates a new EventHandler.
                @param Callback The function to call when the event handler is invoked.
                @param Context The context to use when calling the Callback function (sets the value of "this" in the callback function).
                Note: Should be overridden in derived classes to more specifically type 'args' argument of Callback.
            */
            function EventHandlerBase(Callback, Context) {
                this.Callback = Callback;
                this.Context = Context;
            }
            /** Invokes the event handler's callback with correct context and passes in the arguments.
                Note: Should be overridden in derived classes to more specifically type eventArgs argument.
            */
            EventHandlerBase.prototype.Invoke = function (args) {
                this.Callback.call(this.Context, args);
            };
            return EventHandlerBase;
        }());
        Events.EventHandlerBase = EventHandlerBase;
        /** Fundamental implementation of an EventArgs. All EventArgs should inherit from this class.
            Note: See ClickEventArgs for sample derived class.
            Note: See List for sample usage.
        */
        var EventArgs = (function () {
            /** Creates new EventArgs.
                @param Sender The object which caused this event (or which is passing on an underlying event).
                Note: Should be overridden in derived classes to add extra properties to the event and more specifically type Sender property.
            */
            function EventArgs(Sender) {
                this.Sender = Sender;
            }
            return EventArgs;
        }());
        Events.EventArgs = EventArgs;
        var EventHandler = (function (_super) {
            __extends(EventHandler, _super);
            function EventHandler(Callback, Context) {
                var _this = _super.call(this, Callback, Context) || this;
                _this.Callback = Callback;
                _this.Context = Context;
                return _this;
            }
            EventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return EventHandler;
        }(EventHandlerBase));
        Events.EventHandler = EventHandler;
        var Event = (function (_super) {
            __extends(Event, _super);
            function Event() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.Handlers = [];
                return _this;
            }
            Event.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            Event.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };
            Event.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };
            Event.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return Event;
        }(EventBase));
        Events.Event = Event;
    })(Events = Rubik.Events || (Rubik.Events = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=Event.js.map
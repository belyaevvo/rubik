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
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
var Rubik;
(function (Rubik) {
    /** @returns the string name of the type of the object (using Object.prototype.toString.call approach) */
    Rubik.getType = function (x) {
        return Object.prototype.toString.call(x);
    };
    /** @returns true if the object is a number */
    Rubik.isNumber = function (x) {
        return Rubik.getType(x) === "[object Number]";
    };
    /** @returns true if the object is a string */
    Rubik.isString = function (x) {
        return Rubik.getType(x) === "[object String]";
    };
    /** @returns true if the object is a date */
    Rubik.isDate = function (x) {
        return Rubik.getType(x) === "[object Date]";
    };
    /** @returns true if the object is a function */
    Rubik.isFunction = function (x) {
        return Rubik.getType(x) === "[object Function]";
    };
    /** @returns true if the object is an array */
    Rubik.isArray = function (x) {
        return Rubik.getType(x) === "[object Array]";
    };
    /** Stops a jQuery event from bubbling and prevents default browser behaviour.
        Ignores certain events based on keyboard conditions to ensure F5 and other such buttons still work.
    */
    Rubik.StopEvent = function (jqEvent) {
        if (!jqEvent.keyCode || jqEvent.keyCode === 13 || jqEvent.keyCode === 8 || (jqEvent.keyCode >= 17 && jqEvent.keyCode <= 90) || (jqEvent.keyCode >= 96 && jqEvent.keyCode <= 111) || (jqEvent.keyCode >= 186 && jqEvent.keyCode <= 222)) {
            jqEvent.stopPropagation();
            jqEvent.stopImmediatePropagation();
            jqEvent.preventDefault();
        }
    };
    /** Determines the abosolute px position of a control's animation element relative to its parent.
        @param control The UI.Control to determine the position of.
        @returns an object with top and left px position.
    */
    Rubik.GetPosition = function (control) {
        var element = control.AnimationElement();
        var startPosObj = {
            top: control.Top(),
            left: control.Left()
        };
        var startPos = {
            top: 0,
            left: 0
        };
        if (startPosObj.left.Units === "%") {
            var parentWidth = element.parent().width();
            var leftPerc = startPosObj.left.Value;
            startPos.left = (leftPerc / 100) * parentWidth;
        }
        else {
            startPos.left = startPosObj.left.Value;
        }
        if (startPosObj.top.Units === "%") {
            var parentHeight = element.parent().height();
            var topPerc = startPosObj.top.Value;
            startPos.top = (topPerc / 100) * parentHeight;
        }
        else {
            startPos.top = startPosObj.top.Value;
        }
        return startPos;
    };
    /** Determines the abosolute px size of a control's animation element.
        @param control The UI.Control to determine the size of.
        @returns an object with width and height px size.
    */
    Rubik.GetSize = function (control) {
        var element = control.AnimationElement();
        var startPosObj = {
            width: control.Width(),
            height: control.Height()
        };
        var startPos = {
            width: 0,
            height: 0
        };
        if (startPosObj.width.Units === "%") {
            var parentWidth = element.parent().width();
            var leftPerc = startPosObj.width.Value;
            startPos.width = (leftPerc / 100) * parentWidth;
        }
        else {
            startPos.width = startPosObj.width.Value;
        }
        if (startPosObj.height.Units === "%") {
            var parentHeight = element.parent().height();
            var topPerc = startPosObj.height.Value;
            startPos.height = (topPerc / 100) * parentHeight;
        }
        else {
            startPos.height = startPosObj.height.Value;
        }
        return startPos;
    };
    /** Opens the specified URL in a new window.
        @param url The URL to open.
    */
    Rubik.OpenInNewWindow = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    /** Rounds a number to the nearest multiple of another.
        @param x The number to be rounded.
        @param multiple The base number (x is rounded to nearest multiple of this)
    */
    Rubik.roundTo = function (x, multiple) {
        var neg = x < 0 ? -1 : 1;
        x = Math.abs(x);
        var resto = x % multiple;
        if (resto <= (multiple / 2)) {
            return (x - resto) * neg;
        }
        else {
            return (x + multiple - resto) * neg;
        }
    };
    /** Standardises a jQuery [touch/mouse] event.
        Uses only the first touch as the mouse position.
        @param jqEvent The event to standardise
        @returns the standardised event.
    */
    Rubik.standardiseEvent = function (jqEvent) {
        if (jqEvent) {
            if (jqEvent.originalEvent) {
                if (jqEvent.originalEvent.touches) {
                    if (jqEvent.originalEvent.touches.length > 0) {
                        jqEvent.pageX = jqEvent.originalEvent.touches[0].pageX;
                        jqEvent.pageY = jqEvent.originalEvent.touches[0].pageY;
                    }
                }
            }
        }
        return jqEvent;
    };
    /** Converts an enum flags value into a semi-colon delimited string representation. */
    Rubik.getFlagsString = function (enumType, status) {
        var statuses = "";
        if (status == 0) {
            statuses = enumType[status];
        }
        else {
            for (var i = 1;; i *= 2) {
                if (!enumType[i]) {
                    break;
                }
                else {
                    if ((status & i) > 0) {
                        statuses += enumType[i] + "; ";
                    }
                }
            }
        }
        return statuses;
    };
    /** Pads a string with the field string.
        @param str The string to pad.
        @param field The string to pad with (i.e. the default field value)
        @returns The padded string.
    */
    Rubik.pad = function (str, field) {
        var n = '' + str;
        var w = n.length;
        var l = field.length;
        var pad = w < l ? l - w : 0;
        return n + field.substr(0, pad);
    };
    Function.prototype.trace = function () {
        var trace = [];
        var current = this;
        while (current) {
            trace.push(current.signature());
            current = current.caller;
        }
        return trace;
    };
    Function.prototype.signature = function () {
        var signature = {
            name: this.getName(),
            params: [],
            toString: function () {
                var params = this.params.length > 0 ?
                    "'" + this.params.join("', '") + "'" : "";
                return this.name + "(" + params + ")";
            }
        };
        if (this.arguments) {
            for (var x = 0; x < this.arguments.length; x++)
                signature.params.push(this.arguments[x]);
        }
        return signature;
    };
    Function.prototype.getName = function () {
        if (this.name)
            return this.name;
        var definition = this.toString().split("\n")[0];
        var exp = /^function ([^\s(]+).+/;
        if (exp.test(definition))
            return definition.split("\n")[0].replace(exp, "$1") || "anonymous";
        return "anonymous";
    };
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="IComparer.d.ts" />
var Rubik;
(function (Rubik) {
    var Collections;
    (function (Collections) {
        /** A comparer which compares the results of calling ToString on the specified objects.*/
        var ToStringComparer = /** @class */ (function () {
            function ToStringComparer() {
            }
            /** Compares two objects by comparing the result of calling ToString on them.
                @param x The first object to be compared
                @param y The second object to be compared
                @returns the result of the comparison. -1 if x < y; 0 if x === y; 1 if x > y;
            */
            ToStringComparer.prototype.Compare = function (x, y) {
                return x.toString().localCompare(y.toString());
            };
            return ToStringComparer;
        }());
        Collections.ToStringComparer = ToStringComparer;
    })(Collections = Rubik.Collections || (Rubik.Collections = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="IException.d.ts" />
var Rubik;
(function (Rubik) {
    var Exceptions;
    (function (Exceptions) {
        /** A generic exception implementation. All exception implementations should derive from this. */
        var Exception = /** @class */ (function () {
            /** Creates a new Exception instance with specified information.
                @param Message The message to describe the exception.
                @param Trace The origin of the exception
                @param InnerException The inner exception which lead to this exception, if any.
                Note: Also automatically logs the exception in the browser log.
            */
            function Exception(Message, Trace, InnerException) {
                if (Message === void 0) { Message = ""; }
                if (Trace === void 0) { Trace = ""; }
                if (InnerException === void 0) { InnerException = null; }
                this.Message = Message;
                this.Trace = Trace;
                this.InnerException = InnerException;
                console.log(this.toString());
            }
            /** Converts the exception to a human-readable string representation. */
            Exception.prototype.toString = function () {
                return typeof (this) + ": " + this.Message + "\n" + this.Trace +
                    (this.InnerException === null ? "" : "\nInner exception:\n" + this.InnerException.toString());
            };
            return Exception;
        }());
        Exceptions.Exception = Exception;
    })(Exceptions = Rubik.Exceptions || (Rubik.Exceptions = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="Exception.ts" />
var Rubik;
(function (Rubik) {
    var Exceptions;
    (function (Exceptions) {
        /** An argument exception. Automatically adds descriptive information in the constructor. */
        var ArgumentException = /** @class */ (function (_super) {
            __extends(ArgumentException, _super);
            /** Creates a new ArgumentException instance with specified information. Automatically adds descriptive information about this particular
            type of exception.
                @param ArgumentName The name of the invalid argument.
                @param Trace The origin of the exception
                @param InnerException The inner exception which lead to this exception, if any.
                Note: Also automatically logs the exception in the browser log.
            */
            function ArgumentException(ArgumentName, Trace, InnerException) {
                if (ArgumentName === void 0) { ArgumentName = ""; }
                if (Trace === void 0) { Trace = ""; }
                if (InnerException === void 0) { InnerException = null; }
                var _this = _super.call(this, "Invalid argument! Name: " + ArgumentName, Trace, InnerException) || this;
                _this.ArgumentName = ArgumentName;
                _this.Trace = Trace;
                _this.InnerException = InnerException;
                return _this;
            }
            return ArgumentException;
        }(Exceptions.Exception));
        Exceptions.ArgumentException = ArgumentException;
    })(Exceptions = Rubik.Exceptions || (Rubik.Exceptions = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
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
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
var Rubik;
(function (Rubik) {
    var Collections;
    (function (Collections) {
        /** The list of different modifications (changes) which can be made to a list which will cause the Modified event to fire. */
        var CollectionModifications;
        (function (CollectionModifications) {
            /** Indicates that no change has been made. */
            CollectionModifications[CollectionModifications["None"] = 0] = "None";
            /** Indicates that one or more items have been added to the collection. */
            CollectionModifications[CollectionModifications["Add"] = 1] = "Add";
            /** Indicates that one or more items have been removed from the collection. */
            CollectionModifications[CollectionModifications["Remove"] = 2] = "Remove";
            /** Indicates that two or more items have been re-ordered within the collection. */
            CollectionModifications[CollectionModifications["Reorder"] = 3] = "Reorder";
        })(CollectionModifications = Collections.CollectionModifications || (Collections.CollectionModifications = {}));
    })(Collections = Rubik.Collections || (Rubik.Collections = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
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
        var EventBase = /** @class */ (function () {
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
        var EventHandlerBase = /** @class */ (function () {
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
        var EventArgs = /** @class */ (function () {
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
        var EventHandler = /** @class */ (function (_super) {
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
        var Event = /** @class */ (function (_super) {
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
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
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
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="ToStringComparer.ts" />
/// <reference path="../Exceptions/Exception.ts" />
/// <reference path="../Exceptions/ArgumentException.ts" />
/// <reference path="../Exceptions/IncorrectTypeException.ts" />
/// <reference path="../Utils.ts" />
/// <reference path="IList.d.ts" />
var Rubik;
(function (Rubik) {
    var Collections;
    (function (Collections) {
        /** A generic IList implementation. */
        var List = /** @class */ (function () {
            /** Creates a new list.
                @param obj OPTIONAL Either: null; a number indicating size of the array to create or an existing array to clone and use as the basis for the new list.
            */
            function List(obj) {
                if (obj === void 0) { obj = null; }
                /** The underlying array of items. */
                this.items = [];
                /** Fired when the collection is modified i.e. added to, removed from or re-ordered*/
                this.OnModified = new Collections.CollectionModifiedEvent();
                if (obj !== null) {
                    if (Rubik.isNumber(obj)) {
                        this.items = new Array(obj);
                    }
                    else if (Rubik.isArray(obj)) {
                        this.items = obj.slice(0);
                    }
                    else {
                        throw new Rubik.Exceptions.ArgumentException("obj", "Rubik.Components.List:constructor", new Rubik.Exceptions.IncorrectTypeException(typeof (obj), "number or array", "Rubik.Components.List:constructor"));
                    }
                }
                else {
                    this.items = [];
                }
            }
            /** Adds the specified object to the end of the list.
                @param object The object to be added to the list.
            */
            List.prototype.Add = function (object) {
                this.items.push(object);
                this.OnModified.Invoke(new Collections.CollectionModifiedEventArgs(this, Collections.CollectionModifications.Add, new List([object])));
            };
            /** Adds the specified list of objects to the end of the list.
                @param objects The list of objects to be added.
            */
            List.prototype.AddRange = function (objects) {
                this.items.push.apply(this.items, objects.ToArray());
                this.OnModified.Invoke(new Collections.CollectionModifiedEventArgs(this, Collections.CollectionModifications.Add, objects));
            };
            /** Clears the list of all objects. */
            List.prototype.Clear = function () {
                var _thisClone = this.Clone();
                this.items = [];
                this.OnModified.Invoke(new Collections.CollectionModifiedEventArgs(this, Collections.CollectionModifications.Remove, _thisClone));
            };
            /** Creates a shallow clone of the list. Note: Reference-type objects are not deep cloned.
                @returns the new (clone) list.
            */
            List.prototype.Clone = function () {
                return new List(this.items.slice(0));
            };
            /** Concatenates two lists. Does not modify either original list.
                @param other The list to be concatenated with.
                @returns a list containing this list followed by the other list.
            */
            List.prototype.Concat = function (other) {
                var NewList = new List(this.Count() + other.Count());
                NewList.AddRange(this);
                NewList.AddRange(other);
                return NewList;
            };
            /** Determins whether the object is contained within the list.
                @param object The object to be searched for.
                @returns true if the object is contained within the list, otherwise false.
             */
            List.prototype.Contains = function (object) {
                return this.IndexOf(object) > -1;
            };
            /** Copies the specified number of items into another list, starting at the specified index.
                @param dest The list to be copied into.
                @param offset OPTIONAL The index at which to start copying. If unspecified, starts from index 0.
                @param count OPTIONAL The number of items to be copied. If unspecified, uses full length of list.
            */
            List.prototype.CopyTo = function (dest, offset, count) {
                if (offset === void 0) { offset = 0; }
                if (count === void 0) { count = this.Count(); }
                dest.AddRange(this.Range(offset, count));
            };
            /** @returns the number of items in the list (the length) */
            List.prototype.Count = function () {
                return this.items.length;
            };
            /** @returns the element at the specified index or null if out of range.
                @param index The index of the element to get.
            */
            List.prototype.ElementAt = function (index) {
                if (index > -1 && index < this.Count()) {
                    return this.items[index];
                }
                return null;
            };
            /** @returns whether this list is equal to the specified object.
                @param object The object to test for equality.
            */
            List.prototype.Equals = function (object) {
                return this === object;
            };
            /** @returns the index of the specified object or -1 if not found.
                @param object The object to be searched for.
            */
            List.prototype.IndexOf = function (object) {
                return this.items.indexOf(object);
            };
            /** Inserts the specified object into the list at the specified index.
                @param object The object to be inserted.
                @param index The index at which to insert the object.
            */
            List.prototype.Insert = function (object, index) {
                this.items.splice(index, 0, object);
                this.OnModified.Invoke(new Collections.CollectionModifiedEventArgs(this, Collections.CollectionModifications.Add, new List([object])));
            };
            /** Inserts a list of objects at the specified index - expands the list at that index. Does not overwrite existing items.
                @param objects The list of objects to be inserted.
                @param index The index at which to start inserting.
            */
            List.prototype.InsertRange = function (objects, index) {
                this.items.splice(index, 0, []);
                this.OnModified.Invoke(new Collections.CollectionModifiedEventArgs(this, Collections.CollectionModifications.Add, new List(objects)));
            };
            /** @returns a list containing the specified range of objects from the list.
                @param index The index to start the range.
                @param count OPTIONAL The number of items to take. If unspecified, takes from index to the end of the list.
            */
            List.prototype.Range = function (index, count) {
                if (count === void 0) { count = this.Count() - index; }
                var max = Math.min(index + count, this.Count());
                return new List(this.items.slice(index, max));
            };
            /** Removes the specified object from the list.
                @param object The object to be removed.
                @param event Specifies whether to fire the OnModified event or not. Default: true.
            */
            List.prototype.Remove = function (object, event) {
                if (event === void 0) { event = true; }
                var index = this.IndexOf(object);
                if (index > -1) {
                    this.items.splice(index, 1);
                    if (event) {
                        this.OnModified.Invoke(new Collections.CollectionModifiedEventArgs(this, Collections.CollectionModifications.Remove, new List([object])));
                    }
                }
            };
            /** Removes the specified list of objects from the list. Only fires one modified event.
                @param objects The list of objects to be removed.
            */
            List.prototype.RemoveAll = function (objects) {
                for (var i = 0; i < objects.Count(); i++) {
                    this.Remove(objects.ElementAt(i), false);
                }
                this.OnModified.Invoke(new Collections.CollectionModifiedEventArgs(this, Collections.CollectionModifications.Remove, objects));
            };
            /** Removes the element at the specified index.
                @param index The index of the object to be removed.
                @returns the object which has been removed.
            */
            List.prototype.RemoveAt = function (index) {
                var x = this.items.splice(index, 1)[0];
                this.OnModified.Invoke(new Collections.CollectionModifiedEventArgs(this, Collections.CollectionModifications.Remove, new List([x])));
                return x;
            };
            /** Removes the specified range of objects from the list.
                @param index The index at which to start removing.
                @param count The number of objects to remove.
                @returns a list containing the removed objects.
            */
            List.prototype.RemoveRange = function (index, count) {
                count = Math.min(count, this.Count());
                var ReturnList = new List(this.items.splice(index, count));
                this.OnModified.Invoke(new Collections.CollectionModifiedEventArgs(this, Collections.CollectionModifications.Remove, ReturnList));
                return ReturnList;
            };
            /** Reverses the list of objects. */
            List.prototype.Reverse = function () {
                this.items = this.items.reverse();
                this.OnModified.Invoke(new Collections.CollectionModifiedEventArgs(this, Collections.CollectionModifications.Reorder, this));
            };
            /** Sorts the list of objects using a ToStringComparer or the specified comparer.
                @param comparer OPTIONAL The comparer to use while sorting.
            */
            List.prototype.Sort = function (comparer) {
                if (comparer === void 0) { comparer = new Collections.ToStringComparer(); }
                this.items = this.items.sort(comparer.Compare);
                this.OnModified.Invoke(new Collections.CollectionModifiedEventArgs(this, Collections.CollectionModifications.Reorder, this));
            };
            /** Converts the list to a basic array.
                @returns a clone of the underlying array.
            */
            List.prototype.ToArray = function () {
                return this.items.slice(0);
            };
            return List;
        }());
        Collections.List = List;
    })(Collections = Rubik.Collections || (Rubik.Collections = {}));
})(Rubik || (Rubik = {}));
/*
Copyright © Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.
 - 5/Sep/13 : Bug fix: requestAnimationFrame was defined in Android browser when cancelAnimationFrame wasn't causing fatal error.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../Collections/Collections_BuildRefs.d.ts" />
/// <reference path="../../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../Scripts/typings/html2canvas/html2canvas.d.ts" />
/* Standardises requestAnimationFrame and cancelAnimationFrame */
/*(function ()
{
    var requestAnimationFrame = (<any>window).requestAnimationFrame || (<any>window).mozRequestAnimationFrame ||
                                (<any>window).webkitRequestAnimationFrame || window.msRequestAnimationFrame || (<any>window).oRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    
    var cancelAnimationFrame = (<any>window).cancelAnimationFrame || (<any>window).mozCancelAnimationFrame ||
                                (<any>window).webkitCancelAnimationFrame || window.msCancelRequestAnimationFrame || (<any>window).oCancelRequestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;

    if (!window.requestAnimationFrame || !window.cancelAnimationFrame)
    {
        window.requestAnimationFrame = undefined;
        window.cancelAnimationFrame = undefined;
    }
})();*/
var Rubik;
(function (Rubik) {
    var Animation;
    (function (Animation) {
        /** A callback for animation rendering when requestAnimationFrame is answered. */
        var AnimationCallback = /** @class */ (function () {
            /** Creates a new Animation Callback.
                @param callback The function to call when requestAnimationFrame is answered.
                @param context The context to use when calling callback (sets the value of "this" in callback).
                @param single Indicates whether the callback should occur once or should repeat.
            */
            function AnimationCallback(callback, context, single) {
                if (single === void 0) { single = false; }
                this.callback = callback;
                this.context = context;
                this.single = single;
                /** The time at which animation began i.e. the time at which the first invoke of the callback occurred. */
                this.AnimationStartTime = -1;
            }
            return AnimationCallback;
        }());
        Animation.AnimationCallback = AnimationCallback;
        /** The interval reference used when simulating request animation frame. */
        var AnimationIntervalRef = -1;
        /** The list of animation callbacks to invoke when requestAnimationFrame is answered. */
        var AnimationCallbacks = new Rubik.Collections.List();
        /** Adds an animation callback to the list of animation callbacks. */
        Animation.RegisterAnimationCallback = function (obj) {
            AnimationCallbacks.Add(obj);
            return obj;
        };
        /** Adds an animation callback to the list of animation callbacks to be invoked only once. */
        Animation.RegisterAnimationForSingleCallback = function (obj) {
            obj.single = true;
            AnimationCallbacks.Add(obj);
            return obj;
        };
        /** Removes an animation callback to the list of animation callbacks. */
        Animation.UnregisterAnimationCallback = function (obj) {
            AnimationCallbacks.Remove(obj);
            return obj;
        };
        /** Called when the list of animation callbacks is modified. */
        var AnimationCallbacks_Modified = function (eventArgs) {
            if (AnimationCallbacks.Count() === 0) {
                if (AnimationIntervalRef !== -1) {
                    if (window.requestAnimationFrame && window.cancelAnimationFrame) {
                        window.cancelAnimationFrame(AnimationIntervalRef);
                        AnimationIntervalRef = -1;
                    }
                    else {
                        clearInterval(AnimationIntervalRef);
                        AnimationIntervalRef = -1;
                    }
                }
            }
            else {
                if (AnimationIntervalRef === -1) {
                    if (window.requestAnimationFrame && window.cancelAnimationFrame) {
                        AnimationIntervalRef = window.requestAnimationFrame(AnimationIntervaFunc);
                    }
                    else {
                        AnimationIntervalRef = setInterval(AnimationIntervaFunc, 150);
                    }
                }
            }
        };
        /** Called when requestAnimationFrame (or its simulation) is answered. */
        var AnimationIntervaFunc = function () {
            var elems = AnimationCallbacks.ToArray();
            var elapsedTime = -1;
            var removeElems = new Rubik.Collections.List();
            var doRemove = false;
            for (var i = 0; i < elems.length; i++) {
                var callback = elems[i];
                if (callback.AnimationStartTime === -1) {
                    callback.AnimationStartTime = Date.now();
                }
                elapsedTime = Date.now() - callback.AnimationStartTime;
                callback.callback.call(elems[i].context, elapsedTime);
                if (callback.single) {
                    removeElems.Add(elems[i]);
                    doRemove = true;
                }
            }
            if (doRemove) {
                AnimationCallbacks.RemoveAll(removeElems);
            }
            if (window.requestAnimationFrame) {
                AnimationIntervalRef = window.requestAnimationFrame(AnimationIntervaFunc);
            }
            else {
                $("body").css({ zIndex: $("body").css("z-index") === "1" ? 0 : 1 });
            }
        };
        AnimationCallbacks.OnModified.Attach(new Rubik.Collections.CollectionModifiedEventHandler(AnimationCallbacks_Modified, AnimationCallbacks));
        /** Provides functions for animation including preparing and destroying canvases for HTML2Canvas animation. */
        var AnimationHelper = /** @class */ (function () {
            function AnimationHelper() {
            }
            /** Takes an jQuery element (must be contained within the actual page DOM) and prepares it for HTML2Cnavas animation.
                It does not overlay the canvas on top of the original element but does attempt to position it so it can be faded in.
                Calls the callback once the canvas has been generated.
                @param elem The element to generate an image of.
                @param callback The callback to invoke once the canvas has been generated. Context is not retained.
            */
            AnimationHelper.PrepareHTML2CanvasForAnimation = function (elem, callback) {
                var elems = elem.find("*").not(".Hidden");
                elem.attr("data-html2canvas-visible", "");
                elems.attr("data-html2canvas-visible", "");
                html2canvas(elem.get(0)).then(function (canvas) {
                    var newCanvas = $(canvas);
                    newCanvas.css({
                        position: "absolute",
                        top: elem.offset().top,
                        left: elem.offset().left,
                        zIndex: elem.css("z-index"),
                        display: "none"
                    });
                    $("body").append(newCanvas);
                    elem.removeAttr("data-html2canvas-visible");
                    elems.removeAttr("data-html2canvas-visible");
                    callback(newCanvas);
                });
            };
            /** Restores the original element after HTML2Canvas is no longer required.
                Fades in the element over the top of the canvas then quickly fades out the canvas from underneath.
                Canvas is then destroyed.
                @param elem The element (JQuery reference) to restore.
                @param canvas The canvas (JQuery reference) that is an image of the element. Must already be positioned on top of the element.
            */
            AnimationHelper.RestoreAfterAnimationHTML2Canvas = function (elem, canvas) {
                var zIndex = parseInt(canvas.css("z-index"), 10);
                canvas.css({ opacity: 1, zIndex: zIndex });
                elem.css({
                    display: "",
                    opacity: 0,
                    visibility: "visible",
                    zIndex: zIndex + 2
                })
                    .animate({
                    opacity: 1
                }, 500, "swing", function () {
                    elem.css({
                        opacity: 1
                    });
                    canvas.animate({
                        opacity: 0
                    }, 500, "swing", function () {
                        canvas.css("display", "none");
                        canvas.remove();
                        elem.css({
                            zIndex: zIndex
                        });
                    });
                });
            };
            return AnimationHelper;
        }());
        Animation.AnimationHelper = AnimationHelper;
    })(Animation = Rubik.Animation || (Rubik.Animation = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        /** Represents a CSS number value e.g. 10px, 10% or 'auto'.
            Also provides static methods for converting from CSS string to CSSNumber.
        */
        var CSSNumber = /** @class */ (function () {
            /** Creates a new CSSNumber with specified value and units.
                @param Value The value of the number (irrelevant if auto is set - see auto param)
                @param Units OPTIONAL The units of the CSS number - px, % or em. Default: px. (Irrelevant if auto is set - see auto param)
                @param Auto OPTIONAL Whether the number has value of "auto"  - other parameters are ignored if set. Default: false
            */
            function CSSNumber(Value, Units, Auto) {
                if (Units === void 0) { Units = "px"; }
                if (Auto === void 0) { Auto = false; }
                this.Value = Value;
                this.Units = Units;
                this.Auto = Auto;
            }
            /** Converts a CSS string representation of a CSS Number to a CSS Number.
                @param value The CSS string representation of the number.
                @returns the new CSS Number.
            */
            CSSNumber.FromString = function (value) {
                if (value === "auto") {
                    return new CSSNumber(0, "", true);
                }
                else if (value === null || value.trim() === "") {
                    return new CSSNumber(0, "", true);
                }
                else {
                    var Value = parseInt(value, 10);
                    var Units = value.indexOf("%") > -1 ? "%" : (value.indexOf("em") > -1 ? "em" : "px");
                    return new CSSNumber(Value, Units);
                }
            };
            /** Returns value to ToString method. */
            CSSNumber.prototype.toString = function () {
                return this.ToString();
            };
            /** Returns the CSS string representation of the CSS number e.g. 10px, 10% or auto*/
            CSSNumber.prototype.ToString = function () {
                return this.Auto ? "auto" : this.Value.toString() + this.Units;
            };
            return CSSNumber;
        }());
        UI.CSSNumber = CSSNumber;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../UI/IControl.d.ts" />
/// <reference path="Event.ts" />
/// <reference path="IEventHandler.d.ts" />
/// <reference path="IEventArgs.d.ts" />
/// <reference path="IEvent.d.ts" />
var Rubik;
(function (Rubik) {
    var Events;
    (function (Events) {
        /* This file contains all event classes (including Events, Event Handlers and Event Args
            except for those which must be put into separate files to prevent reference loops
            (see CollectionModifiedEventArgs.d.ts). See Event interface more info on how events
            are programmed.
        */
        //#region Click Event
        /** See Event for more details. */
        var ClickEvent = /** @class */ (function (_super) {
            __extends(ClickEvent, _super);
            function ClickEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ClickEvent;
        }(Events.Event));
        Events.ClickEvent = ClickEvent;
        var ClickEventHandler = /** @class */ (function (_super) {
            __extends(ClickEventHandler, _super);
            function ClickEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ClickEventHandler;
        }(Events.EventHandler));
        Events.ClickEventHandler = ClickEventHandler;
        /** See EventArgs for more details. */
        var ClickEventArgs = /** @class */ (function (_super) {
            __extends(ClickEventArgs, _super);
            function ClickEventArgs(Sender, jqEvent) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.jqEvent = jqEvent;
                return _this;
            }
            return ClickEventArgs;
        }(Events.EventArgs));
        Events.ClickEventArgs = ClickEventArgs;
        //#endregion
        //#region Mouse Down Event
        /** See Event for more details. */
        var MouseDownEvent = /** @class */ (function (_super) {
            __extends(MouseDownEvent, _super);
            function MouseDownEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MouseDownEvent;
        }(Events.Event));
        Events.MouseDownEvent = MouseDownEvent;
        var MouseDownEventHandler = /** @class */ (function (_super) {
            __extends(MouseDownEventHandler, _super);
            function MouseDownEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MouseDownEventHandler;
        }(Events.EventHandler));
        Events.MouseDownEventHandler = MouseDownEventHandler;
        /** See EventArgs for more details. */
        var MouseDownEventArgs = /** @class */ (function (_super) {
            __extends(MouseDownEventArgs, _super);
            function MouseDownEventArgs(Sender, jqEvent) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.jqEvent = jqEvent;
                return _this;
            }
            return MouseDownEventArgs;
        }(Events.EventArgs));
        Events.MouseDownEventArgs = MouseDownEventArgs;
        //#endregion
        //#region Mouse Up Event
        /** See Event for more details. */
        var MouseUpEvent = /** @class */ (function (_super) {
            __extends(MouseUpEvent, _super);
            function MouseUpEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MouseUpEvent;
        }(Events.Event));
        Events.MouseUpEvent = MouseUpEvent;
        var MouseUpEventHandler = /** @class */ (function (_super) {
            __extends(MouseUpEventHandler, _super);
            function MouseUpEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MouseUpEventHandler;
        }(Events.EventHandler));
        Events.MouseUpEventHandler = MouseUpEventHandler;
        /** See EventArgs for more details. */
        var MouseUpEventArgs = /** @class */ (function (_super) {
            __extends(MouseUpEventArgs, _super);
            function MouseUpEventArgs(Sender, jqEvent) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.jqEvent = jqEvent;
                return _this;
            }
            return MouseUpEventArgs;
        }(Events.EventArgs));
        Events.MouseUpEventArgs = MouseUpEventArgs;
        //#endregion
        //#region Mouse Move Event
        /** See Event for more details. */
        var MouseMoveEvent = /** @class */ (function (_super) {
            __extends(MouseMoveEvent, _super);
            function MouseMoveEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MouseMoveEvent;
        }(Events.Event));
        Events.MouseMoveEvent = MouseMoveEvent;
        var MouseMoveEventHandler = /** @class */ (function (_super) {
            __extends(MouseMoveEventHandler, _super);
            function MouseMoveEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MouseMoveEventHandler;
        }(Events.EventHandler));
        Events.MouseMoveEventHandler = MouseMoveEventHandler;
        /** See EventArgs for more details. */
        var MouseMoveEventArgs = /** @class */ (function (_super) {
            __extends(MouseMoveEventArgs, _super);
            function MouseMoveEventArgs(Sender, jqEvent) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.jqEvent = jqEvent;
                return _this;
            }
            return MouseMoveEventArgs;
        }(Events.EventArgs));
        Events.MouseMoveEventArgs = MouseMoveEventArgs;
        //#endregion
        //#region Splitter Move Event
        /** See Event for more details. */
        var SplitterMoveEvent = /** @class */ (function (_super) {
            __extends(SplitterMoveEvent, _super);
            function SplitterMoveEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SplitterMoveEvent;
        }(Events.Event));
        Events.SplitterMoveEvent = SplitterMoveEvent;
        var SplitterMoveEventHandler = /** @class */ (function (_super) {
            __extends(SplitterMoveEventHandler, _super);
            function SplitterMoveEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SplitterMoveEventHandler;
        }(Events.EventHandler));
        Events.SplitterMoveEventHandler = SplitterMoveEventHandler;
        /** See EventArgs for more details. */
        var SplitterMoveEventArgs = /** @class */ (function (_super) {
            __extends(SplitterMoveEventArgs, _super);
            function SplitterMoveEventArgs(Sender) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                return _this;
            }
            return SplitterMoveEventArgs;
        }(Events.EventArgs));
        Events.SplitterMoveEventArgs = SplitterMoveEventArgs;
        //#endregion
        //#region Splitter Orientation Changed Event
        /** See Event for more details. */
        var OrientationChangedEvent = /** @class */ (function (_super) {
            __extends(OrientationChangedEvent, _super);
            function OrientationChangedEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return OrientationChangedEvent;
        }(Events.Event));
        Events.OrientationChangedEvent = OrientationChangedEvent;
        var OrientationChangedEventHandler = /** @class */ (function (_super) {
            __extends(OrientationChangedEventHandler, _super);
            function OrientationChangedEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return OrientationChangedEventHandler;
        }(Events.EventHandler));
        Events.OrientationChangedEventHandler = OrientationChangedEventHandler;
        /** See EventArgs for more details. */
        var OrientationChangedEventArgs = /** @class */ (function (_super) {
            __extends(OrientationChangedEventArgs, _super);
            function OrientationChangedEventArgs(Sender) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                return _this;
            }
            return OrientationChangedEventArgs;
        }(Events.EventArgs));
        Events.OrientationChangedEventArgs = OrientationChangedEventArgs;
        //#endregion
        //#region Resize Event
        /** See Event for more details. */
        var ResizeEvent = /** @class */ (function (_super) {
            __extends(ResizeEvent, _super);
            function ResizeEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ResizeEvent;
        }(Events.Event));
        Events.ResizeEvent = ResizeEvent;
        var ResizeEventHandler = /** @class */ (function (_super) {
            __extends(ResizeEventHandler, _super);
            function ResizeEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ResizeEventHandler;
        }(Events.EventHandler));
        Events.ResizeEventHandler = ResizeEventHandler;
        /** See EventArgs for more details. */
        var ResizeEventArgs = /** @class */ (function (_super) {
            __extends(ResizeEventArgs, _super);
            function ResizeEventArgs(Sender, jqEvent) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.jqEvent = jqEvent;
                return _this;
            }
            return ResizeEventArgs;
        }(Events.EventArgs));
        Events.ResizeEventArgs = ResizeEventArgs;
        //#endregion
        //#region Move Event
        /** See Event for more details. */
        var MoveEvent = /** @class */ (function (_super) {
            __extends(MoveEvent, _super);
            function MoveEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MoveEvent;
        }(Events.Event));
        Events.MoveEvent = MoveEvent;
        var MoveEventHandler = /** @class */ (function (_super) {
            __extends(MoveEventHandler, _super);
            function MoveEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return MoveEventHandler;
        }(Events.EventHandler));
        Events.MoveEventHandler = MoveEventHandler;
        /** See EventArgs for more details. */
        var MoveEventArgs = /** @class */ (function (_super) {
            __extends(MoveEventArgs, _super);
            function MoveEventArgs(Sender, jqEvent) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.jqEvent = jqEvent;
                return _this;
            }
            return MoveEventArgs;
        }(Events.EventArgs));
        Events.MoveEventArgs = MoveEventArgs;
        //#endregion
        //#region Checked Change Event
        /** See Event for more details. */
        var CheckedChangeEvent = /** @class */ (function (_super) {
            __extends(CheckedChangeEvent, _super);
            function CheckedChangeEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CheckedChangeEvent;
        }(Events.Event));
        Events.CheckedChangeEvent = CheckedChangeEvent;
        var CheckedChangeEventHandler = /** @class */ (function (_super) {
            __extends(CheckedChangeEventHandler, _super);
            function CheckedChangeEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CheckedChangeEventHandler;
        }(Events.EventHandler));
        Events.CheckedChangeEventHandler = CheckedChangeEventHandler;
        /** See EventArgs for more details. */
        var CheckedChangeEventArgs = /** @class */ (function (_super) {
            __extends(CheckedChangeEventArgs, _super);
            function CheckedChangeEventArgs(Sender) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                return _this;
            }
            return CheckedChangeEventArgs;
        }(Events.EventArgs));
        Events.CheckedChangeEventArgs = CheckedChangeEventArgs;
        //#endregion
        //#region Text Change Event
        /** See Event for more details. */
        var TextChangeEvent = /** @class */ (function (_super) {
            __extends(TextChangeEvent, _super);
            function TextChangeEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return TextChangeEvent;
        }(Events.Event));
        Events.TextChangeEvent = TextChangeEvent;
        var TextChangeEventHandler = /** @class */ (function (_super) {
            __extends(TextChangeEventHandler, _super);
            function TextChangeEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return TextChangeEventHandler;
        }(Events.EventHandler));
        Events.TextChangeEventHandler = TextChangeEventHandler;
        /** See EventArgs for more details. */
        var TextChangeEventArgs = /** @class */ (function (_super) {
            __extends(TextChangeEventArgs, _super);
            function TextChangeEventArgs(Sender, jqEvent) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.jqEvent = jqEvent;
                return _this;
            }
            return TextChangeEventArgs;
        }(Events.EventArgs));
        Events.TextChangeEventArgs = TextChangeEventArgs;
        //#endregion
        //#region Close Event
        /** See Event for more details. */
        var CloseEvent = /** @class */ (function (_super) {
            __extends(CloseEvent, _super);
            function CloseEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CloseEvent;
        }(Events.Event));
        Events.CloseEvent = CloseEvent;
        var CloseEventHandler = /** @class */ (function (_super) {
            __extends(CloseEventHandler, _super);
            function CloseEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return CloseEventHandler;
        }(Events.EventHandler));
        Events.CloseEventHandler = CloseEventHandler;
        /** See EventArgs for more details. */
        var CloseEventArgs = /** @class */ (function (_super) {
            __extends(CloseEventArgs, _super);
            function CloseEventArgs(Sender) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                return _this;
            }
            return CloseEventArgs;
        }(Events.EventArgs));
        Events.CloseEventArgs = CloseEventArgs;
        //#endregion
        //#region Show Event
        /** See Event for more details. */
        var ShowEvent = /** @class */ (function (_super) {
            __extends(ShowEvent, _super);
            function ShowEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ShowEvent;
        }(Events.Event));
        Events.ShowEvent = ShowEvent;
        var ShowEventHandler = /** @class */ (function (_super) {
            __extends(ShowEventHandler, _super);
            function ShowEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ShowEventHandler;
        }(Events.EventHandler));
        Events.ShowEventHandler = ShowEventHandler;
        /** See EventArgs for more details. */
        var ShowEventArgs = /** @class */ (function (_super) {
            __extends(ShowEventArgs, _super);
            function ShowEventArgs(Sender) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                return _this;
            }
            return ShowEventArgs;
        }(Events.EventArgs));
        Events.ShowEventArgs = ShowEventArgs;
        //#endregion
        //#region Hide Event
        /** See Event for more details. */
        var HideEvent = /** @class */ (function (_super) {
            __extends(HideEvent, _super);
            function HideEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return HideEvent;
        }(Events.Event));
        Events.HideEvent = HideEvent;
        var HideEventHandler = /** @class */ (function (_super) {
            __extends(HideEventHandler, _super);
            function HideEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return HideEventHandler;
        }(Events.EventHandler));
        Events.HideEventHandler = HideEventHandler;
        /** See EventArgs for more details. */
        var HideEventArgs = /** @class */ (function (_super) {
            __extends(HideEventArgs, _super);
            function HideEventArgs(Sender) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                return _this;
            }
            return HideEventArgs;
        }(Events.EventArgs));
        Events.HideEventArgs = HideEventArgs;
        //#endregion
        //#region Focus Event
        /** See Event for more details. */
        var FocusEvent = /** @class */ (function (_super) {
            __extends(FocusEvent, _super);
            function FocusEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return FocusEvent;
        }(Events.Event));
        Events.FocusEvent = FocusEvent;
        var FocusEventHandler = /** @class */ (function (_super) {
            __extends(FocusEventHandler, _super);
            function FocusEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return FocusEventHandler;
        }(Events.EventHandler));
        Events.FocusEventHandler = FocusEventHandler;
        /** See EventArgs for more details.
            Note: jqEvent is optional property. Default value: null.
        */
        var FocusEventArgs = /** @class */ (function (_super) {
            __extends(FocusEventArgs, _super);
            function FocusEventArgs(Sender, jqEvent) {
                if (jqEvent === void 0) { jqEvent = null; }
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.jqEvent = jqEvent;
                return _this;
            }
            return FocusEventArgs;
        }(Events.EventArgs));
        Events.FocusEventArgs = FocusEventArgs;
        //#endregion
        //#region Blur Event
        /** See Event for more details. */
        var BlurEvent = /** @class */ (function (_super) {
            __extends(BlurEvent, _super);
            function BlurEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BlurEvent;
        }(Events.Event));
        Events.BlurEvent = BlurEvent;
        var BlurEventHandler = /** @class */ (function (_super) {
            __extends(BlurEventHandler, _super);
            function BlurEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return BlurEventHandler;
        }(Events.EventHandler));
        Events.BlurEventHandler = BlurEventHandler;
        /** See EventArgs for more details.
            Note: jqEvent is optional property. Default value: null.
        */
        var BlurEventArgs = /** @class */ (function (_super) {
            __extends(BlurEventArgs, _super);
            function BlurEventArgs(Sender, jqEvent) {
                if (jqEvent === void 0) { jqEvent = null; }
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.jqEvent = jqEvent;
                return _this;
            }
            return BlurEventArgs;
        }(Events.EventArgs));
        Events.BlurEventArgs = BlurEventArgs;
        //#endregion
        //#region Key Down Event
        /** See Event for more details. */
        var KeyDownEvent = /** @class */ (function (_super) {
            __extends(KeyDownEvent, _super);
            function KeyDownEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return KeyDownEvent;
        }(Events.Event));
        Events.KeyDownEvent = KeyDownEvent;
        var KeyDownEventHandler = /** @class */ (function (_super) {
            __extends(KeyDownEventHandler, _super);
            function KeyDownEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return KeyDownEventHandler;
        }(Events.EventHandler));
        Events.KeyDownEventHandler = KeyDownEventHandler;
        /** See EventArgs for more details.
            Note: jqEvent is optional property. Default value: null.
        */
        var KeyDownEventArgs = /** @class */ (function (_super) {
            __extends(KeyDownEventArgs, _super);
            function KeyDownEventArgs(Sender, jqEvent) {
                if (jqEvent === void 0) { jqEvent = null; }
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.jqEvent = jqEvent;
                return _this;
            }
            return KeyDownEventArgs;
        }(Events.EventArgs));
        Events.KeyDownEventArgs = KeyDownEventArgs;
        //#endregion
        //#region Key Press Event
        /** See Event for more details. */
        var KeyPressEvent = /** @class */ (function (_super) {
            __extends(KeyPressEvent, _super);
            function KeyPressEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return KeyPressEvent;
        }(Events.Event));
        Events.KeyPressEvent = KeyPressEvent;
        var KeyPressEventHandler = /** @class */ (function (_super) {
            __extends(KeyPressEventHandler, _super);
            function KeyPressEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return KeyPressEventHandler;
        }(Events.EventHandler));
        Events.KeyPressEventHandler = KeyPressEventHandler;
        /** See EventArgs for more details.
            Note: jqEvent is optional property. Default value: null.
        */
        var KeyPressEventArgs = /** @class */ (function (_super) {
            __extends(KeyPressEventArgs, _super);
            function KeyPressEventArgs(Sender, jqEvent) {
                if (jqEvent === void 0) { jqEvent = null; }
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.jqEvent = jqEvent;
                return _this;
            }
            return KeyPressEventArgs;
        }(Events.EventArgs));
        Events.KeyPressEventArgs = KeyPressEventArgs;
        //#endregion
        //#region Key Up Event
        /** See Event for more details. */
        var KeyUpEvent = /** @class */ (function (_super) {
            __extends(KeyUpEvent, _super);
            function KeyUpEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return KeyUpEvent;
        }(Events.Event));
        Events.KeyUpEvent = KeyUpEvent;
        var KeyUpEventHandler = /** @class */ (function (_super) {
            __extends(KeyUpEventHandler, _super);
            function KeyUpEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return KeyUpEventHandler;
        }(Events.EventHandler));
        Events.KeyUpEventHandler = KeyUpEventHandler;
        /** See EventArgs for more details.
            Note: jqEvent is optional property. Default value: null.
        */
        var KeyUpEventArgs = /** @class */ (function (_super) {
            __extends(KeyUpEventArgs, _super);
            function KeyUpEventArgs(Sender, jqEvent) {
                if (jqEvent === void 0) { jqEvent = null; }
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.jqEvent = jqEvent;
                return _this;
            }
            return KeyUpEventArgs;
        }(Events.EventArgs));
        Events.KeyUpEventArgs = KeyUpEventArgs;
        //#endregion
        //#region Selected Index Change Event
        /** See Event for more details. */
        var SelectedIndexChangeEvent = /** @class */ (function (_super) {
            __extends(SelectedIndexChangeEvent, _super);
            function SelectedIndexChangeEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SelectedIndexChangeEvent;
        }(Events.Event));
        Events.SelectedIndexChangeEvent = SelectedIndexChangeEvent;
        var SelectedIndexChangeEventHandler = /** @class */ (function (_super) {
            __extends(SelectedIndexChangeEventHandler, _super);
            function SelectedIndexChangeEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SelectedIndexChangeEventHandler;
        }(Events.EventHandler));
        Events.SelectedIndexChangeEventHandler = SelectedIndexChangeEventHandler;
        /** See EventArgs for more details. */
        var SelectedIndexChangeEventArgs = /** @class */ (function (_super) {
            __extends(SelectedIndexChangeEventArgs, _super);
            function SelectedIndexChangeEventArgs(Sender) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                return _this;
            }
            return SelectedIndexChangeEventArgs;
        }(Events.EventArgs));
        Events.SelectedIndexChangeEventArgs = SelectedIndexChangeEventArgs;
        //#endregion
        //#region Value Change Event
        /** See Event for more details. */
        var ValueChangeEvent = /** @class */ (function (_super) {
            __extends(ValueChangeEvent, _super);
            function ValueChangeEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ValueChangeEvent;
        }(Events.Event));
        Events.ValueChangeEvent = ValueChangeEvent;
        var ValueChangeEventHandler = /** @class */ (function (_super) {
            __extends(ValueChangeEventHandler, _super);
            function ValueChangeEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return ValueChangeEventHandler;
        }(Events.EventHandler));
        Events.ValueChangeEventHandler = ValueChangeEventHandler;
        /** See EventArgs for more details. */
        var ValueChangeEventArgs = /** @class */ (function (_super) {
            __extends(ValueChangeEventArgs, _super);
            function ValueChangeEventArgs(Sender) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                return _this;
            }
            return ValueChangeEventArgs;
        }(Events.EventArgs));
        Events.ValueChangeEventArgs = ValueChangeEventArgs;
        //#endregion
        //#region Name Change Event
        /** See Event for more details. */
        var NameChangeEvent = /** @class */ (function (_super) {
            __extends(NameChangeEvent, _super);
            function NameChangeEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return NameChangeEvent;
        }(Events.Event));
        Events.NameChangeEvent = NameChangeEvent;
        var NameChangeEventHandler = /** @class */ (function (_super) {
            __extends(NameChangeEventHandler, _super);
            function NameChangeEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return NameChangeEventHandler;
        }(Events.EventHandler));
        Events.NameChangeEventHandler = NameChangeEventHandler;
        /** See EventArgs for more details. */
        var NameChangeEventArgs = /** @class */ (function (_super) {
            __extends(NameChangeEventArgs, _super);
            function NameChangeEventArgs(Sender, oldName) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.oldName = oldName;
                return _this;
            }
            return NameChangeEventArgs;
        }(Events.EventArgs));
        Events.NameChangeEventArgs = NameChangeEventArgs;
        //#endregion
        //#region Selection Made Event
        /** See Event for more details. */
        var SelectionMadeEvent = /** @class */ (function (_super) {
            __extends(SelectionMadeEvent, _super);
            function SelectionMadeEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SelectionMadeEvent;
        }(Events.Event));
        Events.SelectionMadeEvent = SelectionMadeEvent;
        var SelectionMadeEventHandler = /** @class */ (function (_super) {
            __extends(SelectionMadeEventHandler, _super);
            function SelectionMadeEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return SelectionMadeEventHandler;
        }(Events.EventHandler));
        Events.SelectionMadeEventHandler = SelectionMadeEventHandler;
        /** See EventArgs for more details.
            Note: jqEvent is optional property. Default value: null.
        */
        var SelectionMadeEventArgs = /** @class */ (function (_super) {
            __extends(SelectionMadeEventArgs, _super);
            function SelectionMadeEventArgs(Sender, jqEvent) {
                if (jqEvent === void 0) { jqEvent = null; }
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.jqEvent = jqEvent;
                return _this;
            }
            return SelectionMadeEventArgs;
        }(Events.EventArgs));
        Events.SelectionMadeEventArgs = SelectionMadeEventArgs;
        //#endregion
        var JQueryEvent = /** @class */ (function (_super) {
            __extends(JQueryEvent, _super);
            function JQueryEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return JQueryEvent;
        }(Events.Event));
        Events.JQueryEvent = JQueryEvent;
        var JQueryEventHandler = /** @class */ (function (_super) {
            __extends(JQueryEventHandler, _super);
            function JQueryEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return JQueryEventHandler;
        }(Events.EventHandler));
        Events.JQueryEventHandler = JQueryEventHandler;
        var JQueryEventArgs = /** @class */ (function (_super) {
            __extends(JQueryEventArgs, _super);
            function JQueryEventArgs(Sender, jqEvent) {
                if (jqEvent === void 0) { jqEvent = null; }
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.jqEvent = jqEvent;
                return _this;
            }
            return JQueryEventArgs;
        }(Events.EventArgs));
        Events.JQueryEventArgs = JQueryEventArgs;
    })(Events = Rubik.Events || (Rubik.Events = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13     : Initial version.
 - 27/Jul/13    : Added inline documentation.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../Events/Events.ts" />
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        UI.OnClickEventName = "click";
        UI.OnMouseDownEventName = "mousedown touchstart";
        UI.OnMouseUpEventName = "mouseup touchend";
        UI.OnMouseMoveEventName = "mousemove touchmove";
        /** This is used to keep global track of the number of open windows so that new
            windows can have z-index set so they are on top. */
        UI.OpenWindows = 0;
        /** The time when the tab key was last pressed. Used in tab key overriding. */
        UI.JustUsedTabKeyTime = 0;
        /** Keeps global track of which control currently has focus. Used in global keyboard
            events to invoke them on the correct control. */
        UI.CurrentFocusedControl = null;
        /** The current max allocated tabindex so new controls can have new tab index
            assigned. */
        UI._currTabIndex = 0;
        /** This event is attached the the global document mouse up event.
            This event handles tab key management and then passes the event off to the
            currently focused control.
        */
        UI.Global_MouseUpEvent = new Rubik.Events.MouseUpEvent();
        /** This event is attached the the global document mouse move event.
            This event reduces the number of mouse move events that are attached to improve
            performance by reducing the load on the DOM. */
        UI.Global_MouseMoveEvent = new Rubik.Events.MouseMoveEvent();
        /** Whether to prevent the tab key event. This used primarily by List controls
            which use out of order tab indexing so override tab key functionality. */
        UI.preventTabKey = false;
        /** Each control attaches its own key down event. This method is called by the key
            down handling control immediately before the control handles the event. The return
            value is currently irrelevant. */
        UI.OnKeyDown_Global_First = function (jqEvent) {
            if (jqEvent.keyCode === 9) {
                UI.JustUsedTabKeyTime = Date.now();
            }
            return true;
        };
        /** Each control attaches its own key down event. This method is called by the key
            down handling control immediately after the control handles the event. The return
            value is returned by the handler. */
        UI.OnKeyDown_Global_Last = function (jqEvent) {
            if (jqEvent.keyCode === 9) {
                if (UI.preventTabKey) {
                    UI.preventTabKey = false;
                    Rubik.StopEvent(jqEvent);
                    return false;
                }
            }
            return !jqEvent.isDefaultPrevented();
        };
        //var _tapStartTime: number = Number.MAX_VALUE - 1000;
        //var _tapTarget: JQuery = null;
        //if (document.documentElement.hasOwnProperty('ontouchstart'))
        //{
        //    $(document).on("touchstart", function (event: JQueryEventObject)
        //    {
        //        _tapStartTime = Date.now();
        //        _tapTarget = $(event.target);
        //    });
        //}
        /** Adds and handles the document mouse up event.
            Standardises the event then invokes Global_MouseUpEvent.
            After invoking the event it defocuses the current control. */
        $(document).on(UI.OnMouseUpEventName, function (event) {
            //if (false && _tapStartTime + 10 < Date.now())
            //{
            //   // _tapTarget.click();
            //    _tapTarget = null;
            //    _tapStartTime = -1;
            //}
            //else
            //{
            event = Rubik.standardiseEvent(event);
            UI.Global_MouseUpEvent.Invoke(new Rubik.Events.MouseUpEventArgs(null, event));
            if (!event.isPropagationStopped() && UI.CurrentFocusedControl !== null &&
                !$(event.target).is("input") && !$(event.target).is("select")) {
                UI.CurrentFocusedControl.Blur();
            }
            //}
        });
        /** Adds and handles the document mouse move event.
            Standardises the event then invokes Global_MouseMoveEvent. */
        $(document).on(UI.OnMouseMoveEventName, function (event) {
            //if (_tapStartTime + 10 > Date.now())
            {
                event = Rubik.standardiseEvent(event);
                UI.Global_MouseMoveEvent.Invoke(new Rubik.Events.MouseMoveEventArgs(null, event));
            }
        });
        /** Adds and handles the document key up event.
            If the tab key is pressed it defocuses the currently focused control. */
        $(document).on("keyup", function (event) {
            if (!event.isPropagationStopped() && UI.CurrentFocusedControl !== null &&
                event.keyCode === 27) {
                UI.CurrentFocusedControl.Blur();
            }
        });
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
/** Adds the global background which hides the "Sorry this don't work" message and
    standardises the page background color across browsers. */
$(function () {
    $("body").append("<div class=\"Bg\">");
});
/*
Copyright © Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../UI/UI Static.ts" />
/// <reference path="IAnimator.d.ts" />
var Rubik;
(function (Rubik) {
    var Animation;
    (function (Animation) {
        /** Animator for a SelectionWindow. */
        var SelectionWindowAnimator = /** @class */ (function () {
            function SelectionWindowAnimator() {
            }
            /** Fades in the selection window and the SelectionWindow_DisableOverlay. Clears CSS 'display' and 'visibility'
                @param control The control to animate.
                @param callback The callback to invoke after animation has completed.
            */
            SelectionWindowAnimator.prototype.Show = function (control, callback) {
                if (callback === void 0) { callback = null; }
                $(".SelectionWindow_DisableOverlay")
                    .css({
                    display: "block",
                    opacity: 0,
                    zIndex: (Rubik.UI.OpenWindows * 10) - 1
                })
                    .animate({
                    opacity: 0.6
                }, 200, "swing", function () {
                });
                var oldOpacity = control.GetStyle("opacity");
                control.AnimationElement().stop(true, true);
                control.AnimationElement().css({
                    opacity: 0,
                    visibility: "",
                    display: ""
                }).animate({
                    opacity: oldOpacity,
                }, SelectionWindowAnimator.AnimationTime, SelectionWindowAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            /** Fades out the selection window and the SelectionWindow_DisableOverlay. Sets CSS 'display:none' and 'visibility:hidden'
                @param control The control to animate.
                @param callback The callback to invoke after animation has completed.
            */
            SelectionWindowAnimator.prototype.Hide = function (control, callback) {
                if (callback === void 0) { callback = null; }
                $(".SelectionWindow_DisableOverlay")
                    .animate({
                    opacity: 0
                }, 200, "swing", function () {
                    $(this).css({
                        display: ""
                    });
                });
                control.AnimationElement().stop(true, true);
                control.AnimationElement().animate({
                    opacity: 0
                }, SelectionWindowAnimator.AnimationTime, SelectionWindowAnimator.AnimationEasing, function () {
                    control.AnimationElement().css({
                        visibility: "hidden",
                        opacity: 1,
                        display: "none"
                    });
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            /** The length of time (milliseconds) to spend animating the window.
                Default: 250ms
            */
            SelectionWindowAnimator.AnimationTime = 250;
            /** The jQuery animation easing to use
                Default: easeOutQuad
            */
            SelectionWindowAnimator.AnimationEasing = "easeOutQuad";
            return SelectionWindowAnimator;
        }());
        Animation.SelectionWindowAnimator = SelectionWindowAnimator;
    })(Animation = Rubik.Animation || (Rubik.Animation = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../UI/UI Static.ts" />
/// <reference path="IAnimator.d.ts" />
var Rubik;
(function (Rubik) {
    var Animation;
    (function (Animation) {
        /** Animator for a StaticPageWindow. */
        var PageWindowAnimator = /** @class */ (function () {
            function PageWindowAnimator() {
            }
            /** Fades in the page window and the PageWindow_DisableOverlay. Clears CSS 'display' and 'visibility'
                @param control The control to animate.
                @param callback The callback to invoke after animation has completed.
            */
            PageWindowAnimator.prototype.Show = function (control, callback) {
                if (callback === void 0) { callback = null; }
                $(".PageWindow_DisableOverlay")
                    .css({
                    display: "block",
                    opacity: 0,
                    zIndex: (Rubik.UI.OpenWindows * 10) - 1
                })
                    .animate({
                    opacity: 0.6
                }, 200, "swing", function () {
                });
                var oldOpacity = control.GetStyle("opacity");
                control.AnimationElement().stop(true, true);
                control.AnimationElement().css({
                    opacity: 0,
                    visibility: "",
                    display: ""
                }).animate({
                    opacity: oldOpacity,
                }, PageWindowAnimator.AnimationTime, PageWindowAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            /** Fades out the page window and the PageWindow_DisableOverlay. Sets CSS 'display:none' and 'visibility:hidden'
                @param control The control to animate.
                @param callback The callback to invoke after animation has completed.
            */
            PageWindowAnimator.prototype.Hide = function (control, callback) {
                if (callback === void 0) { callback = null; }
                $(".PageWindow_DisableOverlay")
                    .animate({
                    opacity: 0
                }, 200, "swing", function () {
                    $(this).css({
                        display: ""
                    });
                });
                control.AnimationElement().stop(true, true);
                control.AnimationElement().animate({
                    opacity: 0
                }, PageWindowAnimator.AnimationTime, PageWindowAnimator.AnimationEasing, function () {
                    control.AnimationElement().css({
                        visibility: "hidden",
                        opacity: 1,
                        display: "none"
                    });
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            /** The length of time (milliseconds) to spend animating the window.
                Default: 250ms
            */
            PageWindowAnimator.AnimationTime = 250;
            /** The jQuery animation easing to use
                Default: easeOutQuad
            */
            PageWindowAnimator.AnimationEasing = "easeOutQuad";
            return PageWindowAnimator;
        }());
        Animation.PageWindowAnimator = PageWindowAnimator;
    })(Animation = Rubik.Animation || (Rubik.Animation = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="IAnimator.d.ts" />
var Rubik;
(function (Rubik) {
    var Animation;
    (function (Animation) {
        /** Animator for animating restack of notifications.
            Note: Show/Hide are empty methods.
        */
        var NotificationRestackAnimator = /** @class */ (function () {
            function NotificationRestackAnimator() {
            }
            /** This method is empty. */
            NotificationRestackAnimator.prototype.Show = function (control, callback) {
                if (callback === void 0) { callback = null; }
            };
            /** This method is empty. */
            NotificationRestackAnimator.prototype.Hide = function (control, callback) {
                if (callback === void 0) { callback = null; }
            };
            /** Animates the control to slide it up/down to new bottom (i.e. animates restack).
                @param control The control to animate.
                @param newBottom The new CSS 'bottom' value.
                @param callback The callback to invoke after animation has completed.
            */
            NotificationRestackAnimator.prototype.AnimateRestack = function (control, newBottom, callback) {
                if (callback === void 0) { callback = null; }
                var element = control.AnimationElement();
                element.animate({
                    bottom: newBottom
                }, NotificationRestackAnimator.AnimationTime, NotificationRestackAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            /** The length of time (milliseconds) to spend restacking.
                Default: 1000ms
            */
            NotificationRestackAnimator.AnimationTime = 1000;
            /** The jQuery animation easing to use
                Default: easeInCubic
            */
            NotificationRestackAnimator.AnimationEasing = "easeInCubic";
            return NotificationRestackAnimator;
        }());
        Animation.NotificationRestackAnimator = NotificationRestackAnimator;
    })(Animation = Rubik.Animation || (Rubik.Animation = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="IAnimator.d.ts" />
var Rubik;
(function (Rubik) {
    var Animation;
    (function (Animation) {
        /** Animator for a Notification. */
        var NotificationAnimator = /** @class */ (function () {
            function NotificationAnimator() {
            }
            /** Slides the notification in from the right - does not set "top". Clears CSS 'visibility' and 'display' values.
                @param control The control to animate.
                @param callback The callback to invoke after animation has completed.
            */
            NotificationAnimator.prototype.Show = function (control, callback) {
                if (callback === void 0) { callback = null; }
                var element = control.AnimationElement();
                element.stop(true, true);
                var startRight = element.css("right");
                element.css({
                    right: -element.outerWidth(),
                    visibility: "",
                    display: ""
                }).animate({
                    right: startRight
                }, NotificationAnimator.AnimationTime, NotificationAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            /** Slides the notification off to the right - does not set "top". Sets CSS 'visibility:hidden' and 'display:none'; Restores CSS 'right'.
                @param control The control to animate.
                @param callback The callback to invoke after animation has completed.
            */
            NotificationAnimator.prototype.Hide = function (control, callback) {
                if (callback === void 0) { callback = null; }
                var element = control.AnimationElement();
                element.stop(true, true);
                var startRight = element.css("right");
                element.animate({
                    right: -element.outerWidth()
                }, NotificationAnimator.AnimationTime, NotificationAnimator.AnimationEasing, function () {
                    element.css({
                        visibility: "hidden",
                        display: "none",
                        right: startRight
                    });
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            /** The length of time (milliseconds) to spend animating the notification.
                Default: 1000ms
            */
            NotificationAnimator.AnimationTime = 1000;
            /** The jQuery animation easing to use
                Default: linear
            */
            NotificationAnimator.AnimationEasing = "linear";
            return NotificationAnimator;
        }());
        Animation.NotificationAnimator = NotificationAnimator;
    })(Animation = Rubik.Animation || (Rubik.Animation = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="IAnimator.d.ts" />
var Rubik;
(function (Rubik) {
    var Animation;
    (function (Animation) {
        /** Generic fade animator for any control.
            Note: Not guaranteed to work in all situations. Does not force visibility if style sheet specifies hidden.
        */
        var FadeAnimator = /** @class */ (function () {
            function FadeAnimator() {
            }
            /** Fades the control in. Clears CSS 'display' and 'visibility' (does not force show).
                @param control The control to animate.
                @param callback The callback to invoke after animation has completed.
            */
            FadeAnimator.prototype.Show = function (control, callback) {
                if (callback === void 0) { callback = null; }
                control.AnimationElement().stop(true, true).css({
                    display: "",
                    visibility: "",
                    opacity: 0
                });
                control.AnimationElement().animate({
                    opacity: 1
                }, FadeAnimator.AnimationTime, FadeAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            /** Fades the control out. Sets CSS 'visibility:hidden' and 'opacity:1' after animation is complete (does not force set 'display:none').
                @param control The control to animate.
                @param callback The callback to invoke after animation has completed.
            */
            FadeAnimator.prototype.Hide = function (control, callback) {
                if (callback === void 0) { callback = null; }
                control.AnimationElement().stop(true, true);
                control.AnimationElement().animate({
                    opacity: 0
                }, FadeAnimator.AnimationTime, FadeAnimator.AnimationEasing, function () {
                    $(this).css({
                        visibility: "hidden",
                        opacity: 1
                    });
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            /** The length of time (milliseconds) to spend fading.
                Default: 300ms
            */
            FadeAnimator.AnimationTime = 300;
            /** The jQuery animation easing to use
                Default: swing
            */
            FadeAnimator.AnimationEasing = "swing";
            return FadeAnimator;
        }());
        Animation.FadeAnimator = FadeAnimator;
    })(Animation = Rubik.Animation || (Rubik.Animation = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="Animation.ts" />
/// <reference path="IAnimator.d.ts" />
var Rubik;
(function (Rubik) {
    var Animation;
    (function (Animation) {
        /** Animator for an AppWindow
            Note: Makes use if HTML2Canvas animation if specified.
        */
        var AppWindowAnimator = /** @class */ (function () {
            function AppWindowAnimator() {
                /** Private: The HTML2Canvas canvas element (as jQuery reference) to be animated. */
                this._CanvasElem = null;
            }
            /** Shows the control and invokes the callback (context not restored) after the animation is completed.
                Window is shrunk before being shown, then flown on from the right, delay then expanded and finally callback called.
                If HTML2Canvas is to be used and canvas has not been prepared, it is prepared in this call. Otherwise, jQuery animation is used. If HTML2Canvas is used, RestoreAfterAnimationHTML2Canvas is called.
                @param control The control to animate.
                @param callback The callback to invoke after animation has completed.
            */
            AppWindowAnimator.prototype.Show = function (control, callback) {
                if (callback === void 0) { callback = null; }
                var useCanvasRender = this._EvaluateUseCanvasRender(control);
                var OK = false;
                if (useCanvasRender) {
                    OK = true;
                    try {
                        var element = control.AnimationElement();
                        if (this._CanvasElem === null) {
                            var _this = this;
                            Animation.AnimationHelper.PrepareHTML2CanvasForAnimation(element, function (canvas) {
                                _this.DoHTML2CanvasShow(element, canvas, callback);
                            });
                        }
                        else {
                            this.DoHTML2CanvasShow(element, this._CanvasElem, callback);
                        }
                    }
                    catch (ex) {
                        OK = false;
                        AppWindowAnimator.UseCanvasRenderIfSensible = false;
                    }
                }
                if (!OK) {
                    var element = control.AnimationElement();
                    var startSize = Rubik.GetSize(control);
                    var startWidth = startSize.width;
                    var startHeight = startSize.height;
                    var startPos = Rubik.GetPosition(control);
                    var origCSSTop = ((startPos.top / element.parent().height()) * 100).toString() + "%";
                    var origCSSLeft = ((startPos.left / element.parent().width()) * 100).toString() + "%";
                    element.css({
                        width: startWidth - (startWidth * AppWindowAnimator.ShrinkAmount * 2),
                        height: startHeight - (startHeight * AppWindowAnimator.ShrinkAmount * 2),
                        left: element.parent().width() + 50,
                        visibility: "",
                        display: ""
                    });
                    element
                        .css({
                        top: startPos.top + (startHeight * AppWindowAnimator.ShrinkAmount)
                    })
                        .animate({
                        left: startPos.left + (startWidth * AppWindowAnimator.ShrinkAmount),
                        opacity: 1
                    }, AppWindowAnimator.FlyTime, AppWindowAnimator.AnimationEasing)
                        .delay(AppWindowAnimator.DelayTime)
                        .animate({
                        width: startWidth,
                        height: startHeight,
                        top: origCSSTop,
                        left: origCSSLeft,
                        visibility: "",
                        display: ""
                    }, AppWindowAnimator.ResizeTime, callback);
                }
            };
            /** Hides the control and invokes the callback (context not restored) after the animation is completed.
                Window is shrunk, delay, then flown off to the right, hidden properly, restored to original position & size and finally callback called.
                If HTML2Canvas is to be used and canvas has not been prepared, it is prepared in this call. Otherwise, jQuery animation is used.
                @param control The control to animate.
                @param callback The callback to invoke after animation has completed.
            */
            AppWindowAnimator.prototype.Hide = function (control, callback) {
                if (callback === void 0) { callback = null; }
                var useCanvasRender = this._EvaluateUseCanvasRender(control);
                var OK = false;
                if (useCanvasRender) {
                    OK = true;
                    try {
                        var element = control.AnimationElement();
                        if (this._CanvasElem === null) {
                            var _this = this;
                            Animation.AnimationHelper.PrepareHTML2CanvasForAnimation(element, function (canvas) {
                                _this.DoHTML2CanvasHide(element, canvas, callback);
                            });
                        }
                        else {
                            this.DoHTML2CanvasHide(element, this._CanvasElem, callback);
                        }
                    }
                    catch (ex) {
                        OK = false;
                        AppWindowAnimator.UseCanvasRenderIfSensible = false;
                    }
                }
                if (!OK) {
                    var element = control.AnimationElement();
                    var startSize = Rubik.GetSize(control);
                    var startWidth = startSize.width;
                    var startHeight = startSize.height;
                    var startPos = Rubik.GetPosition(control);
                    element
                        .animate({
                        width: startWidth - (startWidth * AppWindowAnimator.ShrinkAmount * 2),
                        height: startHeight - (startHeight * AppWindowAnimator.ShrinkAmount * 2),
                        top: startPos.top + (startHeight * AppWindowAnimator.ShrinkAmount),
                        left: startPos.left + (startWidth * AppWindowAnimator.ShrinkAmount)
                    }, AppWindowAnimator.ResizeTime)
                        .delay(AppWindowAnimator.DelayTime)
                        .animate({
                        left: element.parent().width() + 50,
                        opacity: 0
                    }, AppWindowAnimator.FlyTime, AppWindowAnimator.AnimationEasing, function () {
                        element.css({
                            width: startWidth,
                            height: startHeight,
                            top: startPos.top,
                            left: startPos.left,
                            display: "",
                            visibility: "hidden"
                        });
                        if (callback) {
                            callback();
                        }
                    });
                }
            };
            /** Animates the passed canvas and handles switching between the canvas and the element. For more details see Show.
                @param element The element to "animate" - should already prepared using HTML2Canvas.
                @param canvas The prepared HTML2Canvas canvas element to be animated.
                @param callback The callback to invoke after animation has completed.
            */
            AppWindowAnimator.prototype.DoHTML2CanvasShow = function (element, canvas, callback) {
                var startWidth = parseInt(canvas.css("width"), 10);
                var startHeight = parseInt(canvas.css("height"), 10);
                var startPos = {
                    top: parseInt(canvas.css("top"), 10),
                    left: parseInt(canvas.css("left"), 10)
                };
                var _this = this;
                canvas
                    .css({
                    width: startWidth - (startWidth * AppWindowAnimator.ShrinkAmount * 2),
                    height: startHeight - (startHeight * AppWindowAnimator.ShrinkAmount * 2),
                    left: element.parent().width() + 50,
                    top: startPos.top + (startHeight * AppWindowAnimator.ShrinkAmount),
                    opacity: 0,
                    visibility: "",
                    display: ""
                })
                    .animate({
                    left: startPos.left + (startWidth * AppWindowAnimator.ShrinkAmount),
                    opacity: 1
                }, AppWindowAnimator.FlyTime, AppWindowAnimator.AnimationEasing)
                    .delay(AppWindowAnimator.DelayTime)
                    .animate({
                    width: startWidth,
                    height: startHeight,
                    top: startPos.top,
                    left: startPos.left,
                    visibility: "",
                    display: ""
                }, AppWindowAnimator.ResizeTime, function () {
                    Animation.AnimationHelper.RestoreAfterAnimationHTML2Canvas(element, canvas);
                    _this._CanvasElem = null;
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            /** Animates the passed canvas and handles switching between the canvas and the element. For more details see Show.
                @param element The element to "animate" - should already prepared using HTML2Canvas.
                @param canvas The prepared HTML2Canvas canvas element to be animated.
                @param callback The callback to invoke after animation has completed.
            */
            AppWindowAnimator.prototype.DoHTML2CanvasHide = function (element, canvas, callback) {
                var startWidth = parseInt(canvas.css("width"), 10);
                var startHeight = parseInt(canvas.css("height"), 10);
                var startPos = {
                    top: parseInt(canvas.css("top"), 10),
                    left: parseInt(canvas.css("left"), 10)
                };
                canvas.css("display", "block");
                element.css("display", "none");
                canvas
                    .animate({
                    width: startWidth - (startWidth * AppWindowAnimator.ShrinkAmount * 2),
                    height: startHeight - (startHeight * AppWindowAnimator.ShrinkAmount * 2),
                    top: startPos.top + (startHeight * AppWindowAnimator.ShrinkAmount),
                    left: startPos.left + (startWidth * AppWindowAnimator.ShrinkAmount)
                }, AppWindowAnimator.ResizeTime)
                    .delay(AppWindowAnimator.DelayTime)
                    .animate({
                    left: element.parent().width() + 50,
                    opacity: 0
                }, AppWindowAnimator.FlyTime, AppWindowAnimator.AnimationEasing, function () {
                    canvas.remove();
                    element.css({
                        width: startWidth,
                        height: startHeight,
                        top: startPos.top,
                        left: startPos.left,
                        display: "",
                        visibility: "hidden"
                    });
                    if (callback) {
                        callback();
                    }
                });
            };
            /** Determines whether HTML2Canvas should be used to animate specified control (i.e. window) - takes into account UseCanvasRenderIfSensible.
                @param control The control (i.e. window) to determine whether to animate using HTML2Canvas.
            */
            AppWindowAnimator.prototype._EvaluateUseCanvasRender = function (control) {
                var use = AppWindowAnimator.UseCanvasRenderIfSensible;
                if (use) {
                    var elem = control.AnimationElement();
                    use = elem.width() * elem.height() > 240000; //(Window size > area of 600 x 400)
                    var children = elem.find("*");
                    if (use) {
                        use = children.length > 15;
                    }
                    else {
                        use = children.length > 50;
                    }
                }
                return use;
            };
            /** Prepares a window with HTML2Canvas for animation without actually showing the canvas. Allows window to be prepared for animation then switched smoothly with another window. Preparation can take up to 30 seconds in older/slower browsers or on slow hardware. Use callback to wait for preparation to complete.
                @param control The control (i.e. window) to prepare
                @param callback The callback to invoke after preparation has completed.
            */
            AppWindowAnimator.prototype.PrepareHTML2CanvasForAnimation = function (control, callback) {
                if (callback === void 0) { callback = null; }
                if (this._EvaluateUseCanvasRender(control)) {
                    try {
                        var _this = this;
                        _this._CanvasElem = null;
                        var elem = control.AnimationElement();
                        Animation.AnimationHelper.PrepareHTML2CanvasForAnimation(elem, function (canvas) {
                            _this._CanvasElem = canvas;
                            if (callback) {
                                callback();
                            }
                        });
                    }
                    catch (ex) {
                        AppWindowAnimator.UseCanvasRenderIfSensible = false;
                        _this._CanvasElem = null;
                        if (callback) {
                            callback();
                        }
                    }
                }
                else {
                    if (callback) {
                        callback();
                    }
                }
            };
            /** The length of time (milliseconds) to spend moving the window on/off the screen ('flying' the window).
                Default: 500ms
            */
            AppWindowAnimator.FlyTime = 500;
            /** The length of time (milliseconds) to spend shrinking/enlarging the window before/after flying ('resizing' the window).
                Default: 100ms
            */
            AppWindowAnimator.ResizeTime = 100;
            /** The length of time (milliseconds) to delay between resizing and flying the window.
                Default: 500ms
            */
            AppWindowAnimator.DelayTime = 50;
            /** The amount (as decimal percentage e.g. 0.01 = 1%) to shrink the window (width & height).
                Default: 0.01 (i.e. 1%)
            */
            AppWindowAnimator.ShrinkAmount = 0.01;
            /** The jQuery animation easing to use for flying and resizing.
                Default: easeOutCubic
            */
            AppWindowAnimator.AnimationEasing = "easeOutCubic";
            /** Indicates whether HTML2Canvas animation should be used if it is deemed better than standard animation. Set to false to disable use of HTML2Canvas.
                Default: false
            */
            AppWindowAnimator.UseCanvasRenderIfSensible = false;
            return AppWindowAnimator;
        }());
        Animation.AppWindowAnimator = AppWindowAnimator;
    })(Animation = Rubik.Animation || (Rubik.Animation = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="IAnimator.d.ts" />
var Rubik;
(function (Rubik) {
    var Animation;
    (function (Animation) {
        /** Basic implementation of an IAnimator. */
        var Animator = /** @class */ (function () {
            function Animator() {
            }
            /** Clears the values of 'visibility' and 'display' - does not force them to 'visible'.
                This implementation restores the control to its stylesheet state of visibility.
                @param control The control to show.
                @param callback The function to call when showing is complete.
            */
            Animator.prototype.Show = function (control, callback) {
                if (callback === void 0) { callback = null; }
                control.AnimationElement().css({
                    visibility: "",
                    display: ""
                });
                if (callback !== null) {
                    callback();
                }
            };
            /** Sets the value of 'visibility' to 'hidden' and clears the value of 'display' - does not set 'display:none'.
                This implementation does a basic hide of a control.
                @param control The control to hide.
                @param callback The function to call when hiding is complete.
            */
            Animator.prototype.Hide = function (control, callback) {
                if (callback === void 0) { callback = null; }
                control.AnimationElement().css({
                    visibility: "hidden",
                    display: ""
                });
                if (callback !== null) {
                    callback();
                }
            };
            return Animator;
        }());
        Animation.Animator = Animator;
    })(Animation = Rubik.Animation || (Rubik.Animation = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Aug 3 12:15 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 3/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
var Rubik;
(function (Rubik) {
    var Data;
    (function (Data) {
        /** FLAGS: The statuses that a data push or data pull request can have. */
        var DataAccessStatuses;
        (function (DataAccessStatuses) {
            /** Indicates the status of the request is not known. */
            DataAccessStatuses[DataAccessStatuses["Unkown"] = 0] = "Unkown";
            /** Indicates that the request is pending completion. */
            DataAccessStatuses[DataAccessStatuses["Pending"] = 1] = "Pending";
            /** Indicates that the request has completed succesffuly. */
            DataAccessStatuses[DataAccessStatuses["Complete"] = 2] = "Complete";
            /** Indicates that the request has completed but failed. */
            DataAccessStatuses[DataAccessStatuses["Failed"] = 4] = "Failed";
            /** Indicates that an error occurred other than request failure. */
            DataAccessStatuses[DataAccessStatuses["Error"] = 8] = "Error";
        })(DataAccessStatuses = Data.DataAccessStatuses || (Data.DataAccessStatuses = {}));
    })(Data = Rubik.Data || (Rubik.Data = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="DataAccessStatuses.ts" />
/// <reference path="IDataAccessor.d.ts" />
/// <reference path="../Events/Event.ts" />
/// <reference path="../Events/IEventHandler.d.ts" />
/// <reference path="../Events/IEventArgs.d.ts" />
/// <reference path="../Events/IEvent.d.ts" />
var Rubik;
(function (Rubik) {
    var Data;
    (function (Data) {
        //#region Data Pulled Event
        /** See Event for more details. */
        var DataPulledEvent = /** @class */ (function (_super) {
            __extends(DataPulledEvent, _super);
            function DataPulledEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return DataPulledEvent;
        }(Rubik.Events.Event));
        Data.DataPulledEvent = DataPulledEvent;
        /** See EventHandler for more details. */
        var DataPulledEventHandler = /** @class */ (function (_super) {
            __extends(DataPulledEventHandler, _super);
            function DataPulledEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return DataPulledEventHandler;
        }(Rubik.Events.EventHandler));
        Data.DataPulledEventHandler = DataPulledEventHandler;
        /** See EventArgs for more details.*/
        var DataPulledEventArgs = /** @class */ (function (_super) {
            __extends(DataPulledEventArgs, _super);
            function DataPulledEventArgs(Sender, Result) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.Result = Result;
                return _this;
            }
            return DataPulledEventArgs;
        }(Rubik.Events.EventArgs));
        Data.DataPulledEventArgs = DataPulledEventArgs;
        //#endregion
    })(Data = Rubik.Data || (Rubik.Data = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Aug 3 12:35 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 25/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="DataAccessStatuses.ts" />
/// <reference path="IDataAccessResult.d.ts" />
var Rubik;
(function (Rubik) {
    var Data;
    (function (Data) {
        /** Defines the structure for the result of a data access request. Contains the Status of the request and any data returned.
            T: The type of data (the type of the Result property)
        */
        var DataAccessResult = /** @class */ (function () {
            /** Creates a new instance of DataAccessResult
                @param status The most recent status of the request.
                @param result The result data of the request.
                @returns A new DataAccessResult instance.
            */
            function DataAccessResult(status, result) {
                this.Status = status;
                this.Result = result;
            }
            return DataAccessResult;
        }());
        Data.DataAccessResult = DataAccessResult;
    })(Data = Rubik.Data || (Rubik.Data = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: 25 Aug 19:32 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 25/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="DataPulledEvent.ts" />
/// <reference path="IDataAccessResult.d.ts" />
/// <reference path="DataAccessStatuses.ts" />
/// <reference path="../Events/Events.ts" />
/// <reference path="IAccessInfo.d.ts" />
/// <reference path="IDataAccessor.d.ts" />
/// <reference path="DataAccessResult.ts" />
var Rubik;
(function (Rubik) {
    var Data;
    (function (Data) {
        /** Defines the structure for data accessors. Data accessors push or pull data to/from a data source such as a page on a web server.
            T: Specifies the type of the data which will be sent to/from the server.
        */
        var DataAccessor = /** @class */ (function () {
            function DataAccessor(baseAccessInfo) {
                if (baseAccessInfo === void 0) { baseAccessInfo = null; }
                /** The normal access info to use in PushData and PullData when no alternative info is supplied. Use this to set up a data accessor for repeated access to the same data source. */
                this.BaseAccessInfo = null;
                /** Fired when data is pushed to the server (or when the data push request fails).
                    Check the Status property of the event.
                */
                this.OnDataPushed = new Data.DataPushedEvent();
                /** Fired when data is pulled from the server (or when the data pull request fails).
                    Check the Status property of the event.
                */
                this.OnDataPulled = new Data.DataPulledEvent();
                this.BaseAccessInfo = baseAccessInfo;
            }
            /** Empty implementation of PushData. Always returns an error result.
                @param data The data to push to the server.
                @param accessInfo The AccessInfo to use for the data source.
                @returns The result of the request. Implementations of this which are asynchronous should return an empty result with status Pending.
            */
            DataAccessor.prototype.PushData = function (data, accessInfo) {
                return new Data.DataAccessResult(Data.DataAccessStatuses.Error, null);
            };
            /** Empty implementation of PullData. Always returns an error result.
                @param accessInfo The AccessInfo to use for the data source.
                @returns The status of the request. Implementations of this which are asynchronous should return empty result with status Pending.
            */
            DataAccessor.prototype.PullData = function (accessInfo) {
                return new Data.DataAccessResult(Data.DataAccessStatuses.Error, null);
            };
            return DataAccessor;
        }());
        Data.DataAccessor = DataAccessor;
    })(Data = Rubik.Data || (Rubik.Data = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Aug 3 12:51 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 3/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="IDataAdapter.d.ts" />
var Rubik;
(function (Rubik) {
    var Data;
    (function (Data) {
        /** Defines the structure for data adapters. Data adapters convert raw input data to JavaScript objects or vice-versa.
            I: Specifies the type of the input data.
            O: Specifies the type of the output data.
        */
        var DataAdapter = /** @class */ (function () {
            function DataAdapter() {
            }
            /** Converts raw data to JavaScript object data.
                Note: This implementation always returns null.
                @param input The raw data.
                @returns The JavaScript object data.
            */
            DataAdapter.prototype.I2O = function (input) {
                return null;
            };
            /** Converts JavaScript object data to raw data.
                Note: This implementation always returns null.
                @param input The JavaScript object data.
                @returns The raw data.
            */
            DataAdapter.prototype.O2I = function (output) {
                return null;
            };
            return DataAdapter;
        }());
        Data.DataAdapter = DataAdapter;
    })(Data = Rubik.Data || (Rubik.Data = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="DataAccessStatuses.ts" />
/// <reference path="IDataAccessor.d.ts" />
/// <reference path="../Events/Event.ts" />
/// <reference path="../Events/IEventHandler.d.ts" />
/// <reference path="../Events/IEventArgs.d.ts" />
/// <reference path="../Events/IEvent.d.ts" />
var Rubik;
(function (Rubik) {
    var Data;
    (function (Data) {
        /** See Event for more details. */
        var DataPushedEvent = /** @class */ (function (_super) {
            __extends(DataPushedEvent, _super);
            function DataPushedEvent() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return DataPushedEvent;
        }(Rubik.Events.Event));
        Data.DataPushedEvent = DataPushedEvent;
        /** See EventHandler for more details. */
        var DataPushedEventHandler = /** @class */ (function (_super) {
            __extends(DataPushedEventHandler, _super);
            function DataPushedEventHandler() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return DataPushedEventHandler;
        }(Rubik.Events.EventHandler));
        Data.DataPushedEventHandler = DataPushedEventHandler;
        /** See EventArgs for more details.
            Note: Success paramter indicates whether the push was successful.
        */
        var DataPushedEventArgs = /** @class */ (function (_super) {
            __extends(DataPushedEventArgs, _super);
            function DataPushedEventArgs(Sender, Result) {
                var _this = _super.call(this, Sender) || this;
                _this.Sender = Sender;
                _this.Result = Result;
                return _this;
            }
            return DataPushedEventArgs;
        }(Rubik.Events.EventArgs));
        Data.DataPushedEventArgs = DataPushedEventArgs;
    })(Data = Rubik.Data || (Rubik.Data = {}));
})(Rubik || (Rubik = {}));
var Rubik;
(function (Rubik) {
    var Schema;
    (function (Schema_1) {
        var Schema = /** @class */ (function () {
            function Schema() {
            }
            return Schema;
        }());
        Schema_1.Schema = Schema;
    })(Schema = Rubik.Schema || (Rubik.Schema = {}));
})(Rubik || (Rubik = {}));
var Rubik;
(function (Rubik) {
    var Schema;
    (function (Schema) {
        var SchemaObject = /** @class */ (function () {
            function SchemaObject() {
            }
            return SchemaObject;
        }());
        Schema.SchemaObject = SchemaObject;
    })(Schema = Rubik.Schema || (Rubik.Schema = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../Events/Events.ts" />
/// <reference path="../Collections/Collections_BuildRefs.d.ts" />
/// <reference path="CSSNumber.ts" />
/// <reference path="IControl.d.ts" />
/// <reference path="../Animation/FadeAnimator.ts" />
/// <reference path="UI Static.ts" />
/// <reference path="../Animation/Animation.ts" />
/// <reference path="../Animation/IAnimator.d.ts" />
/// <reference path="../../Scripts/typings/jquery/jquery.d.ts" />
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var __UIDGenerator = 0;
        var Control = /** @class */ (function () {
            function Control() {
                this.__UID = __UIDGenerator++;
                this._rootElement = null;
                this.OnClick = new Rubik.Events.ClickEvent();
                this.OnMouseDown = new Rubik.Events.MouseDownEvent();
                this.OnMouseUp = new Rubik.Events.MouseUpEvent();
                this.OnMouseMove = new Rubik.Events.MouseMoveEvent();
                this.OnResize = new Rubik.Events.ResizeEvent();
                this.OnMove = new Rubik.Events.MoveEvent();
                this.OnShow = new Rubik.Events.ShowEvent();
                this.OnHide = new Rubik.Events.HideEvent();
                this.OnFocus = new Rubik.Events.FocusEvent();
                this.OnBlur = new Rubik.Events.BlurEvent();
                this.OnKeyDown = new Rubik.Events.KeyDownEvent();
                this.OnKeyPress = new Rubik.Events.KeyPressEvent();
                this.OnKeyUp = new Rubik.Events.KeyUpEvent();
                this.OnScroll = new Rubik.Events.JQueryEvent();
                /*static OnClickEventName: string = "click";
                static OnMouseDownEventName: string = "mousedown touchstart";
                static OnMouseUpEventName: string = "mouseup touchend";
                static OnMouseMoveEventName: string = "mousemove touchmove";*/
                this.TargetDocumentFor_MouseUp = true;
                this.TargetDocumentFor_MouseMove = true;
                this.Children = new Rubik.Collections.List();
                this._Enabled = true;
                this.OptimiseConstructForGraphics = false;
                this._OnClickAttached = false;
                this._OnMouseDownAttached = false;
                this._OnMouseUpAttached = false;
                this._OnMouseUp_GlobalHandler = null;
                this._OnMouseMoveAttached = false;
                this._OnMouseMove_GlobalHandler = null;
                this._OnResizeAttached = false;
                this._OnScrollAttached = false;
                this._OnMoveAttached = false;
                this._OnKeyPressAttached = false;
                this._OnKeyUpAttached = false;
                this._This_Resized_ChainHandler_Timeout = -1;
                this._This_Moved_ChainHandler_Timeout = -1;
                this.DOMConstructed = false;
                this._parentVisible = true;
                this._WasSelectionEnabled = false;
                this._Focusable = false;
                this._SelectionEnabled = false;
                this._TabIndex = 0;
                this.OnClick.OnHandlerAttachedContext = this.OnClick.OnHandlerDettachedContext = this;
                this.OnClick.OnHandlerAttached = this.OnClick.OnHandlerDettached = this._OnOnClickChanged;
                this.OnMouseDown.OnHandlerAttachedContext = this.OnMouseDown.OnHandlerDettachedContext = this;
                this.OnMouseDown.OnHandlerAttached = this.OnMouseDown.OnHandlerDettached = this._OnOnMouseDownChanged;
                this.OnMouseUp.OnHandlerAttachedContext = this.OnMouseUp.OnHandlerDettachedContext = this;
                this.OnMouseUp.OnHandlerAttached = this.OnMouseUp.OnHandlerDettached = this._OnOnMouseUpChanged;
                this.OnMouseMove.OnHandlerAttachedContext = this.OnMouseMove.OnHandlerDettachedContext = this;
                this.OnMouseMove.OnHandlerAttached = this.OnMouseMove.OnHandlerDettached = this._OnOnMouseMoveChanged;
                this.OnResize.OnHandlerAttachedContext = this.OnResize.OnHandlerDettachedContext = this;
                this.OnResize.OnHandlerAttached = this.OnResize.OnHandlerDettached = this._OnOnResizeChanged;
                this.OnMove.OnHandlerAttachedContext = this.OnMove.OnHandlerDettachedContext = this;
                this.OnMove.OnHandlerAttached = this.OnMove.OnHandlerDettached = this._OnOnMoveChanged;
                this.OnKeyPress.OnHandlerAttachedContext = this.OnKeyPress.OnHandlerDettachedContext = this;
                this.OnKeyPress.OnHandlerAttached = this.OnKeyPress.OnHandlerDettached = this._OnOnKeyPressChanged;
                this.OnKeyUp.OnHandlerAttachedContext = this.OnKeyUp.OnHandlerDettachedContext = this;
                this.OnKeyUp.OnHandlerAttached = this.OnKeyUp.OnHandlerDettached = this._OnOnKeyUpChanged;
                this.OnScroll.OnHandlerAttachedContext = this.OnScroll.OnHandlerDettachedContext = this;
                this.OnScroll.OnHandlerAttached = this.OnScroll.OnHandlerDettached = this._OnOnScrollChanged;
                this.OnResize.Attach(new Rubik.Events.ResizeEventHandler(this._This_Resized_ChainHandler, this));
                this.OnMove.Attach(new Rubik.Events.MoveEventHandler(this._This_Moved_ChainHandler, this));
                this._rootElement = $("<div class=\"Control\">");
                this.DisableSelection();
                this.Children.OnModified.Attach(new Rubik.Collections.CollectionModifiedEventHandler(this._OnChildren_Modified, this));
            }
            Control.prototype.AnimationElement = function () {
                return this._rootElement;
            };
            Control.prototype._RestoreThis = function (jqEvent) {
                return jqEvent.data._callback.call(jqEvent.data._this, jqEvent);
            };
            Control.prototype._OnOnClickChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnClick.Handlers.length > 0 && !this._OnClickAttached) {
                        this._OnClickAttached = true;
                        this._rootElement.on(UI.OnClickEventName, { _this: this, _callback: this._OnClick }, this._RestoreThis);
                    }
                    else if (this._OnClickAttached) {
                        this._OnClickAttached = false;
                        this._rootElement.off(UI.OnClickEventName, this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnClick = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnClick.Invoke(new Rubik.Events.ClickEventArgs(this, jqEvent));
                }
            };
            Control.prototype._OnOnMouseDownChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnMouseDown.Handlers.length > 0 && !this._OnMouseDownAttached) {
                        this._OnMouseDownAttached = true;
                        this._rootElement.on(UI.OnMouseDownEventName, { _this: this, _callback: this._OnMouseDown }, this._RestoreThis);
                    }
                    else if (this._OnMouseDownAttached) {
                        this._OnMouseDownAttached = false;
                        this._rootElement.off(UI.OnMouseDownEventName, this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnMouseDown = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    jqEvent = Rubik.standardiseEvent(jqEvent);
                    this.OnMouseDown.Invoke(new Rubik.Events.MouseDownEventArgs(this, jqEvent));
                }
            };
            Control.prototype._OnOnMouseUpChanged = function () {
                if (this.DOMConstructed) {
                    if (this.TargetDocumentFor_MouseUp) {
                        if (this.OnMouseUp.Handlers.length > 0 && !this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = true;
                            this._OnMouseUp_GlobalHandler = new Rubik.Events.MouseUpEventHandler(function (args) {
                                this.OnMouseUp.Invoke(new Rubik.Events.MouseUpEventArgs(this, args.jqEvent));
                            }, this);
                            UI.Global_MouseUpEvent.Attach(this._OnMouseUp_GlobalHandler);
                        }
                        else if (this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = false;
                            UI.Global_MouseUpEvent.Detach(this._OnMouseUp_GlobalHandler);
                        }
                    }
                    else {
                        if (this.OnMouseUp.Handlers.length > 0 && !this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = true;
                            this._rootElement.on(UI.OnMouseUpEventName, { _this: this, _callback: this._OnMouseUp }, this._RestoreThis);
                        }
                        else if (this._OnMouseUpAttached) {
                            this._OnMouseUpAttached = false;
                            this._rootElement.off(UI.OnMouseUpEventName, this._RestoreThis);
                        }
                    }
                }
            };
            Control.prototype._OnMouseUp = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnMouseUp.Invoke(new Rubik.Events.MouseUpEventArgs(this, jqEvent));
                }
            };
            Control.prototype._OnOnMouseMoveChanged = function () {
                if (this.DOMConstructed) {
                    if (this.TargetDocumentFor_MouseMove) {
                        if (this.OnMouseMove.Handlers.length > 0 && !this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = true;
                            this._OnMouseMove_GlobalHandler = new Rubik.Events.MouseMoveEventHandler(function (args) {
                                this.OnMouseMove.Invoke(new Rubik.Events.MouseMoveEventArgs(this, args.jqEvent));
                            }, this);
                            UI.Global_MouseMoveEvent.Attach(this._OnMouseMove_GlobalHandler);
                        }
                        else if (this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = false;
                            UI.Global_MouseMoveEvent.Detach(this._OnMouseMove_GlobalHandler);
                        }
                    }
                    else {
                        if (this.OnMouseMove.Handlers.length > 0 && !this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = true;
                            this._rootElement.on(UI.OnMouseMoveEventName, { _this: this, _callback: this._OnMouseMove }, this._RestoreThis);
                        }
                        else if (this._OnMouseMoveAttached) {
                            this._OnMouseMoveAttached = false;
                            this._rootElement.off(UI.OnMouseMoveEventName, this._RestoreThis);
                        }
                    }
                }
            };
            Control.prototype._OnMouseMove = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnMouseMove.Invoke(new Rubik.Events.MouseMoveEventArgs(this, jqEvent));
                }
            };
            Control.prototype._OnOnResizeChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnResize.Handlers.length > 0 && !this._OnResizeAttached) {
                        this._OnResizeAttached = true;
                        $(window).on("resize", { _this: this, _callback: this._OnResize }, this._RestoreThis);
                    }
                    else if (this._OnResizeAttached) {
                        this._OnResizeAttached = false;
                        $(window).off("resize", this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnResize = function (jqEvent) {
                this.OnResize.Invoke(new Rubik.Events.ResizeEventArgs(this, jqEvent));
            };
            Control.prototype._OnOnScrollChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnScroll.Handlers.length > 0 && !this._OnScrollAttached) {
                        this._OnScrollAttached = true;
                        this._rootElement.on("scroll", { _this: this, _callback: this._OnScroll }, this._RestoreThis);
                    }
                    else if (this._OnScrollAttached) {
                        this._OnScrollAttached = false;
                        this._rootElement.off("scroll", this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnScroll = function (jqEvent) {
                this.OnScroll.Invoke(new Rubik.Events.JQueryEventArgs(this, jqEvent));
            };
            Control.prototype._OnOnMoveChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnMove.Handlers.length > 0 && !this._OnMoveAttached) {
                        this._OnMoveAttached = true;
                        $(window).on("resize", { _this: this, _callback: this._OnMove }, this._RestoreThis);
                    }
                    else if (this._OnMoveAttached) {
                        this._OnMoveAttached = false;
                        $(window).off("resize", this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnMove = function (jqEvent) {
                this.OnMove.Invoke(new Rubik.Events.MoveEventArgs(this, jqEvent));
            };
            Control.prototype._OnOnKeyPressChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnKeyPress.Handlers.length > 0 && !this._OnKeyPressAttached) {
                        this._OnKeyPressAttached = true;
                        this._rootElement.on("keypress", { _this: this, _callback: this._OnKeyPress }, this._RestoreThis);
                    }
                    else if (this._OnKeyPressAttached) {
                        this._OnKeyPressAttached = false;
                        this._rootElement.off("keypress", this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnKeyPress = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnKeyPress.Invoke(new Rubik.Events.KeyPressEventArgs(this, jqEvent));
                }
            };
            Control.prototype._OnOnKeyUpChanged = function () {
                if (this.DOMConstructed) {
                    if (this.OnKeyUp.Handlers.length > 0 && !this._OnKeyUpAttached) {
                        this._OnKeyUpAttached = true;
                        this._rootElement.on("keyup", { _this: this, _callback: this._OnKeyUp }, this._RestoreThis);
                    }
                    else if (this._OnKeyUpAttached) {
                        this._OnKeyUpAttached = false;
                        this._rootElement.off("keyup", this._RestoreThis);
                    }
                }
            };
            Control.prototype._OnKeyUp = function (jqEvent) {
                if (this.ActuallyEnabled()) {
                    this.OnKeyUp.Invoke(new Rubik.Events.KeyUpEventArgs(this, jqEvent));
                }
            };
            Control.prototype._OnFocus = function (jqEvent) {
                if (!this.ActuallyEnabled() || !this.ActuallyVisible()) {
                    Rubik.StopEvent(jqEvent);
                    this.Blur();
                }
                else if (!this.Focusable()) {
                    this.Blur();
                }
                else {
                    UI.CurrentFocusedControl = this;
                    this.AddClass("Focused");
                    if (UI.JustUsedTabKeyTime + 50 > Date.now()) {
                        this.AddClass("TabFocused");
                    }
                    this.OnFocus.Invoke(new Rubik.Events.FocusEventArgs(this, jqEvent));
                }
            };
            Control.prototype._OnBlur = function (jqEvent) {
                if (UI.CurrentFocusedControl == this) {
                    UI.CurrentFocusedControl = null;
                }
                this.RemoveClass("Focused");
                this.RemoveClass("TabFocused");
                this.OnBlur.Invoke(new Rubik.Events.BlurEventArgs(this, jqEvent));
            };
            Control.prototype._OnKeyDown = function (jqEvent) {
                if (jqEvent.keyCode === 13) {
                    Rubik.StopEvent(jqEvent);
                    this.InvokeDefaultAction();
                }
                else {
                    UI.OnKeyDown_Global_First(jqEvent);
                    this.OnKeyDown.Invoke(new Rubik.Events.KeyDownEventArgs(this, jqEvent));
                    return UI.OnKeyDown_Global_Last(jqEvent);
                }
            };
            Control.prototype._OnChildren_Modified = function (eventArgs) {
                if (this.DOMConstructed) {
                    switch (eventArgs.Modification) {
                        case Rubik.Collections.CollectionModifications.Add:
                            for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                                eventArgs.ModifiedElements.ElementAt(i).ConstructDOM(this._rootElement);
                            }
                            break;
                        case Rubik.Collections.CollectionModifications.Remove:
                            for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                                eventArgs.ModifiedElements.ElementAt(i).DestroyDOM();
                            }
                            break;
                        case Rubik.Collections.CollectionModifications.Reorder:
                            for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                                var cObj = eventArgs.ModifiedElements.ElementAt(i);
                                cObj.DestroyDOM();
                                cObj.ConstructDOM(this._rootElement);
                            }
                            break;
                    }
                }
            };
            Control.prototype._This_Resized_ChainHandler = function (eventArgs) {
                if (this._This_Resized_ChainHandler_Timeout === -1) {
                    var _this = this;
                    this._This_Resized_ChainHandler_Timeout = setTimeout(function () {
                        for (var i = 0; i < _this.Children.Count(); i++) {
                            _this.Children.ElementAt(i).OnResize.Invoke(eventArgs);
                        }
                        _this._This_Resized_ChainHandler_Timeout = -1;
                    }, 100);
                }
            };
            Control.prototype._This_Moved_ChainHandler = function (eventArgs) {
                if (this._This_Moved_ChainHandler_Timeout === -1) {
                    var _this = this;
                    this._This_Moved_ChainHandler_Timeout = setTimeout(function () {
                        for (var i = 0; i < _this.Children.Count(); i++) {
                            _this.Children.ElementAt(i).OnMove.Invoke(eventArgs);
                        }
                        _this._This_Moved_ChainHandler_Timeout = -1;
                    }, 100);
                }
            };
            Control.prototype.ConstructDOM = function (parent, onComplete) {
                if (onComplete === void 0) { onComplete = null; }
                if (!this.DOMConstructed) {
                    parent.append(this._rootElement);
                    this.DOMConstructed = true;
                    this._OnOnClickChanged();
                    this._OnOnKeyPressChanged();
                    this._OnOnKeyUpChanged();
                    this._OnOnMouseDownChanged();
                    this._OnOnMouseMoveChanged();
                    this._OnOnMouseUpChanged();
                    this._OnOnResizeChanged();
                    this._OnOnScrollChanged();
                    this._rootElement.on("focus", { _this: this, _callback: this._OnFocus }, this._RestoreThis);
                    this._rootElement.on("blur", { _this: this, _callback: this._OnBlur }, this._RestoreThis);
                    this._rootElement.on("keydown", { _this: this, _callback: this._OnKeyDown }, this._RestoreThis);
                }
                if (!this.OptimiseConstructForGraphics) {
                    for (var i = 0; i < this.Children.Count(); i++) {
                        var child = this.Children.ElementAt(i);
                        child.ConstructDOM(this._rootElement);
                    }
                    if (onComplete) {
                        onComplete();
                    }
                }
                else if (this.Children.Count() > 0) {
                    var i = 0;
                    var _this = this;
                    var func = function () {
                        var child = _this.Children.ElementAt(i);
                        if (!!child) {
                            child.OptimiseConstructForGraphics = true;
                            child.ConstructDOM(_this._rootElement, function () {
                                i++;
                                if (i < _this.Children.Count()) {
                                    setTimeout(func, Control.OptimiseConstructForGraphics_DelayTime);
                                }
                                else if (onComplete) {
                                    onComplete();
                                }
                            });
                        }
                        else {
                            i++;
                            if (i < _this.Children.Count()) {
                                setTimeout(func, Control.OptimiseConstructForGraphics_DelayTime);
                            }
                            else if (onComplete) {
                                onComplete();
                            }
                        }
                    };
                    func();
                }
                else if (onComplete) {
                    onComplete();
                }
            };
            Control.prototype.DestroyDOM = function () {
                if (this.DOMConstructed) {
                    this._rootElement.remove();
                    this._rootElement.off();
                    this._OnClickAttached = false;
                    this._OnMouseDownAttached = false;
                    this._OnMouseUpAttached = false;
                    this._OnMouseMoveAttached = false;
                    this._OnResizeAttached = false;
                    this._OnKeyPressAttached = false;
                    this._OnKeyUpAttached = false;
                    this.DOMConstructed = false;
                    this._OnScrollAttached = false;
                }
                for (var i = 0; i < this.Children.Count(); i++) {
                    this.Children.ElementAt(i).DestroyDOM();
                }
            };
            Control.prototype.ID = function (value) {
                if (value === void 0) { value = null; }
                if (value !== null) {
                    this._rootElement.attr("id", value);
                }
                return this._rootElement.attr("id");
            };
            Control.prototype.GetStyle = function (name) {
                return this._rootElement.css(name);
            };
            Control.prototype.ApplyStyle = function (name, value) {
                this._rootElement.css(name, value);
            };
            Control.prototype.ApplyStyles = function (cssProps) {
                this._rootElement.css(cssProps);
            };
            Control.prototype.AddClass = function (name) {
                if (!this.HasClass(name)) {
                    this._rootElement.addClass(name);
                }
            };
            Control.prototype.RemoveClass = function (name) {
                this._rootElement.removeClass(name);
            };
            Control.prototype.HasClass = function (name) {
                return this._rootElement.hasClass(name);
            };
            Control.prototype.BackColor = function (color) {
                if (color === void 0) { color = null; }
                if (color !== null) {
                    this._rootElement.css("background-color", color);
                }
                return this._rootElement.css("background-color");
            };
            Control.prototype.ForeColor = function (color) {
                if (color !== null) {
                    this._rootElement.css("color", color);
                }
                return this._rootElement.css("color");
            };
            Control.prototype.CSSNumberStyle = function (style, value) {
                if (value === void 0) { value = null; }
                if (value !== null) {
                    this._rootElement.css(style, value.ToString());
                }
                return UI.CSSNumber.FromString(this._rootElement.css(style));
            };
            Control.prototype.Width = function (value) {
                if (value === void 0) { value = null; }
                var result = this.CSSNumberStyle("width", value);
                if (value !== null) {
                    this.OnResize.Invoke(new Rubik.Events.ResizeEventArgs(this, null));
                }
                return result;
            };
            Control.prototype.Height = function (value) {
                if (value === void 0) { value = null; }
                var result = this.CSSNumberStyle("height", value);
                if (value !== null) {
                    this.OnResize.Invoke(new Rubik.Events.ResizeEventArgs(this, null));
                }
                return result;
            };
            Control.prototype.ActualWidth = function () {
                return this._rootElement.outerWidth();
            };
            Control.prototype.ActualHeight = function () {
                return this._rootElement.outerHeight();
            };
            Control.prototype.Top = function (value) {
                if (value === void 0) { value = null; }
                var result = this.CSSNumberStyle("top", value);
                this.OnMove.Invoke(new Rubik.Events.MoveEventArgs(this, null));
                return result;
            };
            Control.prototype.Bottom = function (value) {
                if (value === void 0) { value = null; }
                return this.CSSNumberStyle("bottom", value);
            };
            Control.prototype.Left = function (value) {
                if (value === void 0) { value = null; }
                var result = this.CSSNumberStyle("left", value);
                this.OnMove.Invoke(new Rubik.Events.MoveEventArgs(this, null));
                return result;
            };
            Control.prototype.Right = function (value) {
                if (value === void 0) { value = null; }
                return this.CSSNumberStyle("right", value);
            };
            Control.prototype.MarginTop = function (value) {
                if (value === void 0) { value = null; }
                return this.CSSNumberStyle("margin-top", value);
            };
            Control.prototype.MarginLeft = function (value) {
                if (value === void 0) { value = null; }
                return this.CSSNumberStyle("margin-left", value);
            };
            Control.prototype.MarginBottom = function (value) {
                if (value === void 0) { value = null; }
                return this.CSSNumberStyle("margin-bottom", value);
            };
            Control.prototype.MarginRight = function (value) {
                if (value === void 0) { value = null; }
                return this.CSSNumberStyle("margin-right", value);
            };
            Control.prototype.PageTop = function () {
                return this._rootElement.offset().top;
            };
            Control.prototype.PageLeft = function () {
                return this._rootElement.offset().left;
            };
            Control.prototype.PageBottom = function () {
                return this._rootElement.offset().top + this.ActualHeight();
            };
            Control.prototype.PageRight = function () {
                return this._rootElement.offset().left + this.ActualWidth();
            };
            Control.prototype.MinWidth = function (value) {
                if (value === void 0) { value = null; }
                return this.CSSNumberStyle("min-width", value);
            };
            Control.prototype.MinHeight = function (value) {
                if (value === void 0) { value = null; }
                return this.CSSNumberStyle("min-height", value);
            };
            Control.prototype.MaxWidth = function (value) {
                if (value === void 0) { value = null; }
                return this.CSSNumberStyle("max-width", value);
            };
            Control.prototype.MaxHeight = function (value) {
                if (value === void 0) { value = null; }
                return this.CSSNumberStyle("max-height", value);
            };
            Control.prototype.SetParentVisible = function (value) {
                this._parentVisible = value;
                var len = this.Children.Count();
                for (var i = 0; i < len; i++) {
                    this.Children.ElementAt(i).SetParentVisible(value);
                }
            };
            Control.prototype.ActuallyVisible = function () {
                return this._parentVisible && this.Visible();
            };
            Control.prototype.Visible = function (value) {
                if (value === void 0) { value = null; }
                if (value !== null) {
                    this._rootElement.css({
                        visibility: value ? "" : "hidden",
                        display: ""
                    });
                    var len = this.Children.Count();
                    for (var i = 0; i < len; i++) {
                        this.Children.ElementAt(i).SetParentVisible(value);
                    }
                }
                return this._rootElement.css("visibility") !== "hidden" && this._rootElement.css("display") !== "none";
            };
            Control.prototype.EnableByParent = function () {
                this._HandleEnableSet(this._Enabled);
                if (this._Enabled) {
                    for (var i = 0; i < this.Children.Count(); i++) {
                        this.Children.ElementAt(i).EnableByParent();
                    }
                }
            };
            Control.prototype.DisableByParent = function () {
                this._HandleEnableSet(false);
                for (var i = 0; i < this.Children.Count(); i++) {
                    this.Children.ElementAt(i).DisableByParent();
                }
            };
            Control.prototype.Enabled = function (value) {
                if (value === void 0) { value = null; }
                if (value !== null) {
                    this._Enabled = value;
                    for (var i = 0; i < this.Children.Count(); i++) {
                        var elem = this.Children.ElementAt(i);
                        if (this._Enabled) {
                            elem.EnableByParent();
                        }
                        else {
                            elem.DisableByParent();
                        }
                    }
                    this._HandleEnableSet(this._Enabled);
                }
                return this._Enabled;
            };
            Control.prototype.ActuallyEnabled = function () {
                return !this.HasClass("Disabled");
            };
            Control.prototype._HandleEnableSet = function (enabled) {
                if (enabled) {
                    this._rootElement.removeClass("Disabled");
                    if (this._WasSelectionEnabled) {
                        this.EnableSelection();
                    }
                }
                else {
                    this._rootElement.addClass("Disabled");
                    this._WasSelectionEnabled = this._SelectionEnabled;
                    this.DisableSelection();
                }
                this._HandleFocusableSet(this.Focusable());
            };
            Control.prototype._HandleFocusableSet = function (focusable) {
                if (focusable && !this.HasClass("Disabled")) {
                    this._rootElement.attr("tabindex", this._TabIndex.toString());
                    if (this._rootElement.is(":focus") && !this.HasClass("Focused")) {
                        this.Focus();
                    }
                }
                else {
                    this._rootElement.removeAttr("tabindex");
                }
                if (!this._Focusable && this._rootElement.is(":focus")) {
                    this.Blur();
                }
            };
            Control.prototype.Focusable = function (value) {
                if (value === void 0) { value = null; }
                if (value !== null) {
                    this._Focusable = value;
                    if (this._TabIndex === 0) {
                        this._TabIndex = ++UI._currTabIndex;
                    }
                    this._HandleFocusableSet(value);
                }
                return this._Focusable;
            };
            Control.prototype.Show = function (callback, animator) {
                if (callback === void 0) { callback = null; }
                if (animator === void 0) { animator = new Rubik.Animation.FadeAnimator(); }
                if (!this.Visible()) {
                    this.Enabled(false);
                    var _this = this;
                    animator.Show(this, function () {
                        _this.Enabled(true);
                        _this.Visible(true);
                        _this.OnShow.Invoke(new Rubik.Events.ShowEventArgs(_this));
                        if (callback !== null)
                            callback();
                    });
                }
                else if (callback !== null) {
                    callback();
                }
            };
            Control.prototype.Hide = function (callback, animator) {
                if (callback === void 0) { callback = null; }
                if (animator === void 0) { animator = new Rubik.Animation.FadeAnimator(); }
                if (this.Visible()) {
                    this.Enabled(false);
                    var _this = this;
                    setTimeout(function () {
                        animator.Hide(_this, function () {
                            _this.Enabled(true);
                            _this.Visible(false);
                            _this.OnHide.Invoke(new Rubik.Events.HideEventArgs(_this));
                            if (callback !== null)
                                callback();
                        });
                    }, 200);
                }
                else if (callback !== null) {
                    callback();
                }
            };
            Control.prototype.EnableSelection = function () {
                this._rootElement.enableSelection();
                this._SelectionEnabled = true;
            };
            Control.prototype.DisableSelection = function () {
                this._rootElement.disableSelection();
                this._SelectionEnabled = false;
            };
            Control.prototype.Focus = function () {
                this._rootElement.focus();
            };
            Control.prototype.Blur = function () {
                this._rootElement.blur();
            };
            Control.prototype.InvokeDefaultAction = function () {
            };
            Control.prototype.IsRelativeLayout = function () {
                return this._rootElement.hasClass("RelativeLayout");
            };
            Control.prototype.RelativeLayoutOn = function () {
                this.AddClass("RelativeLayout");
            };
            Control.prototype.RelativeLayoutOff = function () {
                this.RemoveClass("RelativeLayout");
            };
            Control.prototype.TabIndex = function (value) {
                if (value === void 0) { value = null; }
                if (value !== null) {
                    this._TabIndex = value;
                    if (value === -2) {
                        this._rootElement.removeAttr("tabindex");
                    }
                    else {
                        this._rootElement.attr("tabindex", value.toString());
                    }
                }
                var retVal = parseInt(this._rootElement.attr("tabindex"), 10);
                if (isNaN(retVal)) {
                    retVal = -2;
                }
                return retVal;
            };
            Control.OptimiseConstructForGraphics_DelayTime = 30;
            return Control;
        }());
        UI.Control = Control;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        /** The orientations of a splitter grip. */
        var SplitterGrip_Orientations;
        (function (SplitterGrip_Orientations) {
            /** Horizontal splitter grip */
            SplitterGrip_Orientations[SplitterGrip_Orientations["Horizontal"] = 0] = "Horizontal";
            /** Vertical splitter grip */
            SplitterGrip_Orientations[SplitterGrip_Orientations["Vertical"] = 1] = "Vertical";
        })(SplitterGrip_Orientations = UI.SplitterGrip_Orientations || (UI.SplitterGrip_Orientations = {}));
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="IPanel.d.ts" />
/// <reference path="Control.ts" />
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var Panel = /** @class */ (function (_super) {
            __extends(Panel, _super);
            function Panel() {
                var _this = _super.call(this) || this;
                _this._rootElement.addClass("Panel");
                return _this;
            }
            return Panel;
        }(UI.Control));
        UI.Panel = Panel;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="ISplitterGrip.d.ts" />
/// <reference path="Control.ts" />
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var SplitterGrip = /** @class */ (function (_super) {
            __extends(SplitterGrip, _super);
            function SplitterGrip() {
                var _this = _super.call(this) || this;
                _this._Orientation = UI.SplitterGrip_Orientations.Vertical;
                _this._SplitterDistance = 50;
                _this._SplitterWidth = 15;
                _this._rootElement.addClass("SplitterGrip");
                _this.OnSplitterMove = new Rubik.Events.SplitterMoveEvent();
                _this.OnOrientationChanged = new Rubik.Events.OrientationChangedEvent();
                return _this;
            }
            SplitterGrip.prototype.ConstructDOM = function (parent, onComplete) {
                if (onComplete === void 0) { onComplete = null; }
                var __this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    __this._rootElement.text("&nbsp;");
                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            SplitterGrip.prototype.MaxDistance = function () {
                return 99.5;
            };
            SplitterGrip.prototype.Orientation = function (value) {
                if (value === void 0) { value = null; }
                if (value !== null) {
                    this._Orientation = value;
                    var orientation = this.Orientation();
                    this._rootElement.css({
                        height: (orientation === UI.SplitterGrip_Orientations.Horizontal) ? value.toString() + "%" : "100%",
                        width: (orientation === UI.SplitterGrip_Orientations.Vertical) ? value.toString() + "%" : "100%",
                        top: (orientation === UI.SplitterGrip_Orientations.Horizontal) ? value.toString() + "%" : "0px",
                        left: (orientation === UI.SplitterGrip_Orientations.Vertical) ? value.toString() + "%" : "0px"
                    });
                    if (orientation === UI.SplitterGrip_Orientations.Horizontal) {
                        this._rootElement.removeClass("Vertical");
                        this._rootElement.addClass("Horizontal");
                    }
                    else {
                        this._rootElement.removeClass("Horizontal");
                        this._rootElement.addClass("Vertical");
                    }
                    this.OnOrientationChanged.Invoke(new Rubik.Events.OrientationChangedEventArgs(this));
                }
                return this._Orientation;
            };
            SplitterGrip.prototype.SplitterDistance = function (value) {
                if (value === void 0) { value = null; }
                if (value !== null) {
                    var max = this.MaxDistance();
                    value = value < 0 ? 0 : (value > max ? max : value);
                    this._SplitterDistance = value;
                    var orientation = this.Orientation();
                    this._rootElement.css({
                        top: (orientation === UI.SplitterGrip_Orientations.Horizontal) ? value.toString() + "%" : "0px",
                        left: (orientation === UI.SplitterGrip_Orientations.Vertical) ? value.toString() + "%" : "0px"
                    });
                    this.OnSplitterMove.Invoke(new Rubik.Events.SplitterMoveEventArgs(this));
                }
                return this._SplitterDistance;
            };
            SplitterGrip.prototype.SplitterWidth = function (value) {
                if (value === void 0) { value = null; }
                if (value !== null) {
                    this._SplitterWidth = value;
                    var orientation = this.Orientation();
                    this._rootElement.css({
                        height: (orientation === UI.SplitterGrip_Orientations.Horizontal) ? value.toString() + "px" : "100%",
                        width: (orientation === UI.SplitterGrip_Orientations.Vertical) ? value.toString() + "px" : "100%"
                    });
                }
                return this._SplitterWidth;
            };
            return SplitterGrip;
        }(UI.Control));
        UI.SplitterGrip = SplitterGrip;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="ISplitContainer.d.ts" />
/// <reference path="SplitterGrip.ts" />
/// <reference path="Panel.ts" />
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var SplitContainer = /** @class */ (function (_super) {
            __extends(SplitContainer, _super);
            function SplitContainer() {
                var _this = _super.call(this) || this;
                _this.boolean = false;
                _this._rootElement.addClass("SplitContainer");
                _this.Panel1 = new UI.Panel();
                _this.Panel2 = new UI.Panel();
                _this.Panel1.AddClass("Panel1");
                _this.Panel2.AddClass("Panel2");
                _this.Children.Add(_this.Panel1);
                _this.Children.Add(_this.Panel2);
                _this.MainSplitterGrip = new UI.SplitterGrip();
                _this.Children.Add(_this.MainSplitterGrip);
                _this.MainSplitterGrip.OnMouseDown.Attach(new Rubik.Events.MouseDownEventHandler(_this.MainSplitterGrip_OnMouseDown, _this));
                _this._MainSplitterGrip_MouseUpHandler = new Rubik.Events.MouseUpEventHandler(_this.MainSplitterGrip_OnMouseUp, _this);
                _this._MainSplitterGrip_MouseMoveHandler = new Rubik.Events.MouseMoveEventHandler(_this.MainSplitterGrip_OnMouseMove, _this);
                _this.MainSplitterGrip.OnSplitterMove.Attach(new Rubik.Events.SplitterMoveEventHandler(_this.MainSplitterGrip_OnSplitterMove, _this));
                _this.MainSplitterGrip.OnOrientationChanged.Attach(new Rubik.Events.OrientationChangedEventHandler(_this.MainSplitterGrip_OnOrientationChanged, _this));
                _this.OnResize.Attach(new Rubik.Events.ResizeEventHandler(_this._This_Resized, _this));
                _this.Width(new UI.CSSNumber(100, "%"));
                _this.Height(new UI.CSSNumber(100, "%"));
                return _this;
            }
            SplitContainer.prototype.ConstructDOM = function (parent, onComplete) {
                if (onComplete === void 0) { onComplete = null; }
                var __this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    __this.MainSplitterGrip.Orientation(__this.MainSplitterGrip.Orientation());
                    __this.MainSplitterGrip.SplitterDistance(__this.MainSplitterGrip.SplitterDistance());
                    __this.MainSplitterGrip.SplitterWidth(__this.MainSplitterGrip.SplitterWidth());
                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            SplitContainer.prototype.Orientation = function (value) {
                return this.MainSplitterGrip.Orientation(value);
            };
            SplitContainer.prototype.MainSplitterGrip_OnMouseDown = function (eventArgs) {
                this._MainSplitterGrip_Dragging = true;
                Rubik.StopEvent(eventArgs.jqEvent);
                this.MainSplitterGrip.OnMouseUp.Attach(this._MainSplitterGrip_MouseUpHandler);
                this.MainSplitterGrip.OnMouseMove.Attach(this._MainSplitterGrip_MouseMoveHandler);
            };
            SplitContainer.prototype.MainSplitterGrip_OnMouseUp = function (eventArgs) {
                if (this._MainSplitterGrip_Dragging) {
                    this._MainSplitterGrip_Dragging = false;
                    Rubik.StopEvent(eventArgs.jqEvent);
                    this.MainSplitterGrip.OnMouseUp.Detach(this._MainSplitterGrip_MouseUpHandler);
                    this.MainSplitterGrip.OnMouseMove.Detach(this._MainSplitterGrip_MouseMoveHandler);
                }
            };
            SplitContainer.prototype.MainSplitterGrip_OnMouseMove = function (eventArgs) {
                if (this._MainSplitterGrip_Dragging) {
                    if (!this.MainSplitterGrip.ActuallyEnabled()) {
                        this._MainSplitterGrip_Dragging = false;
                    }
                    else {
                        var width = this.ActualWidth();
                        var height = this.ActualHeight();
                        var xPerc = ((eventArgs.jqEvent.pageX - this.PageLeft()) / width) * 100;
                        var yPerc = ((eventArgs.jqEvent.pageY - this.PageTop()) / height) * 100;
                        if (this.MainSplitterGrip.Orientation() === UI.SplitterGrip_Orientations.Horizontal) {
                            this.MainSplitterGrip.SplitterDistance(yPerc);
                        }
                        else {
                            this.MainSplitterGrip.SplitterDistance(xPerc);
                        }
                    }
                    Rubik.StopEvent(eventArgs.jqEvent);
                }
            };
            SplitContainer.prototype.MainSplitterGrip_OnSplitterMove = function (eventArgs) {
                var perc = this.MainSplitterGrip.SplitterDistance();
                var OK = true;
                if (this.MainSplitterGrip.Orientation() === UI.SplitterGrip_Orientations.Horizontal) {
                    var minHeight = this.Panel1.MinHeight();
                    var minHeightVal = minHeight.Units === "px" ? (minHeight.Value / this.ActualHeight()) * 100 : minHeight.Value;
                    if (!minHeight.Auto && perc < minHeightVal) {
                        perc = minHeightVal;
                        this.MainSplitterGrip.Top(new UI.CSSNumber(perc, "%"));
                        OK = false;
                    }
                    if (OK) {
                        minHeight = this.Panel2.MinHeight();
                        minHeightVal = minHeight.Units === "px" ? (minHeight.Value / this.ActualHeight()) * 100 : minHeight.Value;
                        minHeightVal = 100 - minHeightVal;
                        if (!minHeight.Auto && perc > minHeightVal) {
                            perc = minHeightVal;
                            this.MainSplitterGrip.Top(new UI.CSSNumber(perc, "%"));
                            OK = false;
                        }
                    }
                }
                else {
                    var minWidth = this.Panel1.MinWidth();
                    var minWidthVal = minWidth.Units === "px" ? (minWidth.Value / this.ActualWidth()) * 100 : minWidth.Value;
                    if (!minWidth.Auto && perc < minWidthVal) {
                        perc = minWidthVal;
                        this.MainSplitterGrip.Left(new UI.CSSNumber(perc, "%"));
                        OK = false;
                    }
                    if (OK) {
                        minWidth = this.Panel2.MinWidth();
                        minWidthVal = minWidth.Units === "px" ? (minWidth.Value / this.ActualWidth()) * 100 : minWidth.Value;
                        minWidthVal = 100 - minWidthVal;
                        if (!minWidth.Auto && perc > minWidthVal) {
                            perc = minWidthVal;
                            this.MainSplitterGrip.Left(new UI.CSSNumber(perc, "%"));
                            OK = false;
                        }
                    }
                }
                if (this.MainSplitterGrip.Orientation() === UI.SplitterGrip_Orientations.Horizontal) {
                    this.Panel1.Height(new UI.CSSNumber(perc, "%"));
                    this.Panel2.Height(new UI.CSSNumber(100 - perc, "%"));
                    this.Panel2.Top(new UI.CSSNumber(perc, "%"));
                }
                else {
                    this.Panel1.Width(new UI.CSSNumber(perc, "%"));
                    this.Panel2.Width(new UI.CSSNumber(100 - perc, "%"));
                    this.Panel2.Left(new UI.CSSNumber(perc, "%"));
                }
            };
            SplitContainer.prototype.MainSplitterGrip_OnOrientationChanged = function (eventArgs) {
                if (this.MainSplitterGrip.Orientation() === UI.SplitterGrip_Orientations.Horizontal) {
                    this.Panel1.Width(new UI.CSSNumber(100, "%"));
                    this.Panel2.Width(new UI.CSSNumber(100, "%"));
                    this.Panel1.Left(new UI.CSSNumber(0));
                    this.Panel2.Left(new UI.CSSNumber(0));
                }
                else {
                    this.Panel1.Height(new UI.CSSNumber(100, "%"));
                    this.Panel2.Height(new UI.CSSNumber(100, "%"));
                    this.Panel1.Top(new UI.CSSNumber(0));
                    this.Panel2.Top(new UI.CSSNumber(0));
                }
                this.MainSplitterGrip.SplitterDistance(this.MainSplitterGrip.SplitterDistance());
            };
            SplitContainer.prototype._This_Resized = function (eventArgs) {
                this.MainSplitterGrip.SplitterDistance(this.MainSplitterGrip.SplitterDistance());
            };
            return SplitContainer;
        }(UI.Control));
        UI.SplitContainer = SplitContainer;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: 25 Aug 19:32 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 25/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../DataAccessor.ts" />
/// <reference path="../DataPushedEvent.ts" />
/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts" />
var Rubik;
(function (Rubik) {
    var Data;
    (function (Data) {
        /** A basic data accessor which can send HTTP GET/POST requests for pul/push. Data accessors push or pull data to/from a data source such as a page on a web server. */
        var HTTPDataAccessor = /** @class */ (function (_super) {
            __extends(HTTPDataAccessor, _super);
            function HTTPDataAccessor(baseAccessInfo) {
                if (baseAccessInfo === void 0) { baseAccessInfo = null; }
                return _super.call(this, baseAccessInfo) || this;
            }
            /** HTTP request implementation of PushData.
                @param data The data to push to the server.
                @param accessInfo The AccessInfo to use for the data source.
                @returns The result of the request. Will return an initially empty result with status Pending.
            */
            HTTPDataAccessor.prototype.PushData = function (data, accessInfo) {
                var _this = this;
                var result = new Data.DataAccessResult(Data.DataAccessStatuses.Pending, null);
                if (accessInfo === undefined) {
                    accessInfo = this.BaseAccessInfo;
                }
                var url = this.BuildFullURL(accessInfo);
                var request = $.post(url, data, function (resultData, status, xhr) {
                    //Success
                    result.Status = Data.DataAccessStatuses.Complete;
                    result.Result = resultData;
                    _this.OnDataPushed.Invoke(new Data.DataPushedEventArgs(_this, result));
                }, "text");
                request.fail(function (xhr, status, error) {
                    //Fail
                    result.Status = Data.DataAccessStatuses.Error | Data.DataAccessStatuses.Failed;
                    result.Result = error;
                    _this.OnDataPushed.Invoke(new Data.DataPushedEventArgs(_this, result));
                });
                return result;
            };
            /** HTTP request implementation of PullData.
                @param accessInfo The AccessInfo to use for the data source.
                @returns The status of the request. Will return an initially empty result with status Pending.
            */
            HTTPDataAccessor.prototype.PullData = function (accessInfo) {
                var _this = this;
                var result = new Data.DataAccessResult(Data.DataAccessStatuses.Pending, null);
                if (accessInfo === undefined) {
                    accessInfo = this.BaseAccessInfo;
                }
                var url = this.BuildFullURL(accessInfo);
                var request = $.get(url, "", function (resultData, status, xhr) {
                    //Success
                    result.Status = Data.DataAccessStatuses.Complete;
                    result.Result = resultData;
                    _this.OnDataPulled.Invoke(new Data.DataPushedEventArgs(_this, result));
                }, "text");
                request.fail(function (xhr, status, error) {
                    //Fail
                    result.Status = Data.DataAccessStatuses.Error | Data.DataAccessStatuses.Failed;
                    result.Result = error;
                    _this.OnDataPulled.Invoke(new Data.DataPushedEventArgs(_this, result));
                });
                return result;
            };
            /** Builds the full HTTP requestable URL from the access info.
                @param accessInfo The access info to build the URL for.
                @returns The URL
            */
            HTTPDataAccessor.prototype.BuildFullURL = function (accessInfo) {
                var result = "";
                result = accessInfo.URL;
                result += "?";
                var count = accessInfo.Params.Count();
                for (var i = 0; i < count; i++) {
                    result += accessInfo.Params.ElementAt(i);
                    if (i < count - 1) {
                        result += "&";
                    }
                }
                return result;
            };
            return HTTPDataAccessor;
        }(Data.DataAccessor));
        Data.HTTPDataAccessor = HTTPDataAccessor;
    })(Data = Rubik.Data || (Rubik.Data = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: 1 Sep 23:16 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 1/Sep/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../DataAccessor.ts" />
/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts" />
var Rubik;
(function (Rubik) {
    var Data;
    (function (Data) {
        /** A basic data accessor which can use a JS global variable as its source for pull/push. Can also use a property method e.g. function(value: Val_Type): Val_Type
            Data accessors push or pull data to/from a data source such as a page on a web server. */
        var JSDataAccessor = /** @class */ (function (_super) {
            __extends(JSDataAccessor, _super);
            function JSDataAccessor(aContext, baseAccessInfo) {
                if (baseAccessInfo === void 0) { baseAccessInfo = null; }
                var _this = _super.call(this, baseAccessInfo) || this;
                /** The context object to use when accessing the object. */
                _this.Context = window;
                _this.Context = aContext;
                return _this;
            }
            /** HTTP request implementation of PushData.
                @param data The data to push to the source variable.
                @param accessInfo The AccessInfo to use for the data source. See constructor for more info on how to set this.
                @returns Will return an initially empty result with status Error and no data or Complete and the data.
            */
            JSDataAccessor.prototype.PushData = function (data, accessInfo) {
                var result = new Data.DataAccessResult(Data.DataAccessStatuses.Pending, null);
                if (accessInfo === undefined) {
                    accessInfo = this.BaseAccessInfo;
                }
                var resData = this.setVal(accessInfo, data);
                if (resData !== null) {
                    result.Status = Data.DataAccessStatuses.Complete;
                }
                else {
                    result.Status = Data.DataAccessStatuses.Error;
                }
                result.Result = resData;
                this.OnDataPushed.Invoke(new Data.DataPushedEventArgs(this, result));
                return result;
            };
            /** HTTP request implementation of PullData.
                @param accessInfo The AccessInfo to use for the data source.
                @returns Will return an initially empty result with status Error and no data or Complete and the data.
            */
            JSDataAccessor.prototype.PullData = function (accessInfo) {
                var result = new Data.DataAccessResult(Data.DataAccessStatuses.Error, null);
                if (accessInfo === undefined) {
                    accessInfo = this.BaseAccessInfo;
                }
                var resData = this.getVal(accessInfo);
                if (resData !== null) {
                    result.Status = Data.DataAccessStatuses.Complete;
                }
                else {
                    result.Status = Data.DataAccessStatuses.Error;
                }
                result.Result = resData;
                this.OnDataPulled.Invoke(new Data.DataPulledEventArgs(this, result));
                return result;
            };
            JSDataAccessor.prototype.getVal = function (accessInfo) {
                var result = null;
                if (this.Context[accessInfo.URL] !== undefined) {
                    var obj = this.Context[accessInfo.URL];
                    var len = accessInfo.Params.Count();
                    for (var i = 0; i < len; i++) {
                        obj = obj[accessInfo.Params.ElementAt(i)];
                    }
                    if (Rubik.isFunction(obj)) {
                        result = obj.call(this.Context);
                    }
                    else {
                        result = obj;
                    }
                }
                return result;
            };
            JSDataAccessor.prototype.setVal = function (accessInfo, data) {
                var result = null;
                if (this.Context[accessInfo.URL] !== undefined) {
                    var obj = this.Context[accessInfo.URL];
                    var lastParent = null;
                    var len = accessInfo.Params.Count();
                    for (var i = 0; i < len; i++) {
                        lastParent = obj;
                        obj = obj[accessInfo.Params.ElementAt(i)];
                    }
                    if (Rubik.isFunction(obj)) {
                        result = obj.call(this.Context, data);
                    }
                    else {
                        if (accessInfo.Params.Count() === 0) {
                            result = this.Context[accessInfo.URL] = obj = data;
                        }
                        else {
                            lastParent[accessInfo.Params.Count() - 1] = data;
                            result = obj = data;
                        }
                    }
                }
                return result;
            };
            return JSDataAccessor;
        }(Data.DataAccessor));
        Data.JSDataAccessor = JSDataAccessor;
    })(Data = Rubik.Data || (Rubik.Data = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Aug 3 12:51 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 3/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../DataAdapter.ts" />
var Rubik;
(function (Rubik) {
    var Data;
    (function (Data) {
        /** Array Data Adapter converts a raw input string to an array or vice-versa. Use JSONDataAdapter to handle JSON-formatted arrays/objects.
            O: The type of the items in the output array
        */
        var ArrayDataAdapter = /** @class */ (function (_super) {
            __extends(ArrayDataAdapter, _super);
            /** Creates a new ArrayDataAdapter<O>
                @param ItemAdapter The data adapter to use for converting array item strings into actual item objects.
                @param Delimiter The delimiter to use for splitting the input string into seperate items. Default: ","
             */
            function ArrayDataAdapter(ItemAdapter, Delimiter) {
                if (Delimiter === void 0) { Delimiter = ","; }
                var _this = _super.call(this) || this;
                _this.ItemAdapter = ItemAdapter;
                _this.Delimiter = Delimiter;
                return _this;
            }
            /** Converts raw data to JavaScript object data.
                Note: This implementation does not check for a valid array with the exception that it does handle null and undefined.
                Note: This implementation splits by the specified delimiter then uses the item adapter to convert each item individually.
                @param input The raw string data.
                @returns The array data or null or undefined.
            */
            ArrayDataAdapter.prototype.I2O = function (input) {
                if (input === "null" || input === null) {
                    return null;
                }
                else if (input === "undefined" || input === undefined) {
                    return undefined;
                }
                var items = input.split(this.Delimiter);
                var result = new Array(items.length);
                for (var i = 0; i < items.length; i++) {
                    result[i] = this.ItemAdapter.I2O(items[i]);
                }
                return result;
            };
            /** Converts JavaScript object data to raw data.
                Note: This implementation does handle null and undefined.
                @param input The array data.
                @returns The raw string.
            */
            ArrayDataAdapter.prototype.O2I = function (output) {
                if (output === null) {
                    return "null";
                }
                else if (output === undefined) {
                    return "undefined";
                }
                var result = "";
                for (var i = 0; i < output.length; i++) {
                    result += this.ItemAdapter.O2I(output[i]);
                    if (i < output.length - 1) {
                        result += this.Delimiter;
                    }
                }
                return result;
            };
            return ArrayDataAdapter;
        }(Data.DataAdapter));
        Data.ArrayDataAdapter = ArrayDataAdapter;
    })(Data = Rubik.Data || (Rubik.Data = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Aug 3 12:51 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 3/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../DataAdapter.ts" />
var Rubik;
(function (Rubik) {
    var Data;
    (function (Data) {
        /** Boolean Data Adapter converts a raw input string to a boolean or vice-versa.*/
        var BooleanDataAdapter = /** @class */ (function (_super) {
            __extends(BooleanDataAdapter, _super);
            function BooleanDataAdapter() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** Converts raw data to JavaScript object data.
                Note: This implementation does not check for a valid boolean with the exception that it does handle null and undefined.
                Note: This implementation tests for equality with "true", "1", "yes", "on" (case-insensitive).
                @param input The raw string data.
                @returns The boolean data or null or undefined.
            */
            BooleanDataAdapter.prototype.I2O = function (input) {
                if (input === "null" || input === null) {
                    return null;
                }
                else if (input === "undefined" || input === undefined) {
                    return undefined;
                }
                var testInput = input.toLowerCase();
                return testInput === "true" || testInput === "1" || testInput === "yes" || testInput === "on";
            };
            /** Converts JavaScript object data to raw data.
                Note: This implementation does handle null and undefined.
                @param input The boolean data.
                @returns The raw string data.
            */
            BooleanDataAdapter.prototype.O2I = function (output) {
                if (output === null) {
                    return "null";
                }
                else if (output === undefined) {
                    return "undefined";
                }
                return output ? "true" : "false";
            };
            return BooleanDataAdapter;
        }(Data.DataAdapter));
        Data.BooleanDataAdapter = BooleanDataAdapter;
    })(Data = Rubik.Data || (Rubik.Data = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Aug 3 12:51 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 3/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../DataAdapter.ts" />
var Rubik;
(function (Rubik) {
    var Data;
    (function (Data) {
        /** JSON Data Adapter converts a raw input string to a JavaScript object or vice-versa. Use JSONDataAdapter to handle JSON-formatted arrays/objects.
            O: The output type of the adapter.
        */
        var JSONDataAdapter = /** @class */ (function (_super) {
            __extends(JSONDataAdapter, _super);
            function JSONDataAdapter() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** Converts raw data to JavaScript object data.
                Note: This implementation does handle null and undefined.
                Note: This implementation uses JSON.parse()
                @param input The raw JSON string.
                @returns The object data or null or undefined.
            */
            JSONDataAdapter.prototype.I2O = function (input) {
                if (input === "null" || input === null) {
                    return null;
                }
                else if (input === "undefined" || input === undefined) {
                    return undefined;
                }
                return JSON.parse(input);
            };
            /** Converts JavaScript object data to raw data.
                Note: This implementation does handle null and undefined.
                Note: This implementation uses JSON.stringify()
                @param input The object data.
                @returns The raw JSON string.
            */
            JSONDataAdapter.prototype.O2I = function (output) {
                if (output === null) {
                    return "null";
                }
                else if (output === undefined) {
                    return "undefined";
                }
                return JSON.stringify(output);
            };
            return JSONDataAdapter;
        }(Data.DataAdapter));
        Data.JSONDataAdapter = JSONDataAdapter;
    })(Data = Rubik.Data || (Rubik.Data = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Aug 3 12:51 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 3/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../DataAdapter.ts" />
var Rubik;
(function (Rubik) {
    var Data;
    (function (Data) {
        /** Number Data Adapter converts a raw input string to a number or vice-versa.*/
        var NumberDataAdapter = /** @class */ (function (_super) {
            __extends(NumberDataAdapter, _super);
            function NumberDataAdapter() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** Converts raw data to JavaScript object data.
                Note: This implementation does not check for a valid number with the exception that it does handle NaN, null and undefined.
                Note: This implementation uses parseFloat.
                @param input The raw string data.
                @returns The (float) number data or null or undefined or NaN.
            */
            NumberDataAdapter.prototype.I2O = function (input) {
                if (input === "null" || input === null) {
                    return null;
                }
                else if (input === "undefined" || input === undefined) {
                    return undefined;
                }
                else if (input === "NaN") {
                    return NaN;
                }
                return parseFloat(input);
            };
            /** Converts JavaScript object data to raw data.
                Note: This implementation does handle NaN, null and undefined.
                Note: This implementation uses .toString() with radix: 10
                @param input The number data.
                @returns The raw string data.
            */
            NumberDataAdapter.prototype.O2I = function (output) {
                if (output === null) {
                    return "null";
                }
                else if (output === undefined) {
                    return "undefined";
                }
                else if (isNaN(output)) {
                    return "NaN";
                }
                return output.toString(10);
            };
            return NumberDataAdapter;
        }(Data.DataAdapter));
        Data.NumberDataAdapter = NumberDataAdapter;
    })(Data = Rubik.Data || (Rubik.Data = {}));
})(Rubik || (Rubik = {}));
/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Aug 3 12:51 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 3/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../DataAdapter.ts" />
var Rubik;
(function (Rubik) {
    var Data;
    (function (Data) {
        /** String Data Adapter is a string pass-through adapter - it doesn't actually do anything. Use this as a fill-in adapter.*/
        var StringDataAdapter = /** @class */ (function (_super) {
            __extends(StringDataAdapter, _super);
            function StringDataAdapter() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            /** Converts raw data to JavaScript object data.
                Note: This implementation always returns the input unless the input is "undefined" or "null" in which case it returns undefined or null respectively.
                @param input The raw string data.
                @returns The processed string data or undefined or null.
            */
            StringDataAdapter.prototype.I2O = function (input) {
                return input;
            };
            /** Converts JavaScript object data to raw data.
                Note: This implementation always returns the output unless the output is undefined or null in which case it returns "undefined" or "null" respectively.
                @param input The processed string data.
                @returns The raw string data.
            */
            StringDataAdapter.prototype.O2I = function (output) {
                return output;
            };
            return StringDataAdapter;
        }(Data.DataAdapter));
        Data.StringDataAdapter = StringDataAdapter;
    })(Data = Rubik.Data || (Rubik.Data = {}));
})(Rubik || (Rubik = {}));
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var DataManager = /** @class */ (function () {
            function DataManager() {
            }
            DataManager.prototype.GetColsCount = function () {
                return 20;
            };
            DataManager.prototype.GetRowsCount = function () {
                return 100000;
            };
            DataManager.prototype.GetCellValue = function (col, row) {
                return col.toString() + "," + row.toString();
            };
            return DataManager;
        }());
        UI.DataManager = DataManager;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var SizeManager = /** @class */ (function () {
            function SizeManager() {
                this.RowsSize = {};
                this.ColsSize = {};
                this.LastRowOffset = null;
                this.LastColOffset = null;
                this.DefaultRowHeight = 0;
                this.DefaultColWidth = 0;
                this._rowsCount = 0;
                this._colsCount = 0;
            }
            SizeManager.prototype.Initialize = function (colsCount, rowsCount) {
                if (colsCount === void 0) { colsCount = 0; }
                if (rowsCount === void 0) { rowsCount = 0; }
                this._colsCount = colsCount;
                this._rowsCount = rowsCount;
                this.RowsSize = {};
                this.ColsSize = {};
                this.LastRowOffset = null;
                this.LastColOffset = null;
            };
            SizeManager.prototype.RowsCount = function (count) {
                if (count === void 0) { count = null; }
                if (count != null)
                    this._rowsCount = count;
                return this._rowsCount;
            };
            SizeManager.prototype.ColsCount = function (count) {
                if (count === void 0) { count = null; }
                if (count != null)
                    this._colsCount = count;
                return this._colsCount;
            };
            SizeManager.prototype.GetRowHeight = function (index) {
                return this.RowsSize[index] || this.DefaultRowHeight;
            };
            SizeManager.prototype.SetRowHeight = function (index, height) {
                if (index < this._rowsCount) {
                    this.LastRowOffset = null;
                    this.RowsSize[index] = height;
                }
            };
            SizeManager.prototype.GetColWidth = function (index) {
                return this.ColsSize[index] || this.DefaultColWidth;
            };
            SizeManager.prototype.SetColWidth = function (index, width) {
                if (index < this._colsCount) {
                    this.LastColOffset = null;
                    this.ColsSize[index] = width;
                }
            };
            SizeManager.prototype.GetRowTop = function (index) {
                var indices = Object.keys(this.RowsSize).map(Number);
                var top = this.DefaultRowHeight * index;
                for (var i = 0; i < indices.length; i++) {
                    if (index < indices[i])
                        break;
                    top = this.RowsSize[indices[i]] - this.DefaultRowHeight;
                }
                return top;
            };
            SizeManager.prototype.GetColLeft = function (index) {
                var indices = Object.keys(this.ColsSize).map(Number);
                var left = this.DefaultColWidth * index;
                for (var i = 0; i < indices.length; i++) {
                    if (index < indices[i])
                        break;
                    left = this.ColsSize[indices[i]] - this.DefaultColWidth;
                }
                return left;
            };
            SizeManager.prototype.GetVisibleRows = function (top, bottom) {
                var offset = 0;
                var topRow = null;
                var bottomRow = null;
                topRow = (top / this.DefaultRowHeight) | 0;
                bottomRow = (bottom / this.DefaultRowHeight) | 0 + 1;
                /*for (var i = 0; i < this._rowsCount; i++) {
                    
                    offset += this.GetRowHeight(i);
    
                    if (offset >= top && topRow == null) {
                        topRow = i;
                    }
                    if (topRow != null) {
                        bottomRow = i;
                    }
                    if (offset >= bottom) {
                        break;
                    }
                    
                }*/
                return [topRow, bottomRow];
            };
            SizeManager.prototype.GetVisibleCols = function (left, right) {
                var offset = 0;
                var leftCol = null;
                var rightCol = null;
                for (var i = 0; i < this._colsCount; i++) {
                    offset += this.GetColWidth(i);
                    if (offset >= left && leftCol == null) {
                        leftCol = i;
                    }
                    if (leftCol != null) {
                        rightCol = i;
                    }
                    if (offset >= right) {
                        break;
                    }
                }
                return [leftCol, rightCol];
            };
            SizeManager.prototype.GetTotalHeight = function () {
                var indices = Object.keys(this.RowsSize).map(Number);
                var height = this.DefaultRowHeight * this._rowsCount;
                for (var i = 0; i < indices.length; i++) {
                    height += this.RowsSize[indices[i]] - this.DefaultRowHeight;
                }
                return height;
            };
            SizeManager.prototype.GetTotalWidth = function () {
                var indices = Object.keys(this.ColsSize).map(Number);
                var width = this.DefaultColWidth * this._colsCount;
                for (var i = 0; i < indices.length; i++) {
                    width += this.ColsSize[indices[i]] - this.DefaultColWidth;
                }
                return width;
            };
            return SizeManager;
        }());
        UI.SizeManager = SizeManager;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var GridCell = /** @class */ (function (_super) {
            __extends(GridCell, _super);
            function GridCell() {
                var _this = _super.call(this) || this;
                _this._span = null;
                _this._rootElement.addClass("GridCell");
                _this._span = $("<span class=\"GridCell-content\">");
                _this._rootElement.append(_this._span);
                return _this;
            }
            GridCell.prototype.Text = function (text) {
                if (text === void 0) { text = null; }
                if (text != null) {
                    this._span.text(text);
                }
                return this._span.text();
            };
            return GridCell;
        }(UI.Control));
        UI.GridCell = GridCell;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
/// <reference path="../Control.ts" />
/// <reference path="DataManager.ts" />
/// <reference path="SizeManager.ts" />
/// <reference path="GridCell.ts" />
/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts" />
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var Grid = /** @class */ (function (_super) {
            __extends(Grid, _super);
            function Grid() {
                var _this = _super.call(this) || this;
                _this.DataManager = new UI.DataManager();
                _this.SizeManager = new UI.SizeManager();
                _this.SizeManager.DefaultColWidth = 60;
                _this.SizeManager.DefaultRowHeight = 22;
                _this._rootElement.addClass("Grid");
                _this.PanelCols = new UI.Panel();
                _this.PanelRows = new UI.Panel();
                _this.ScrollPanel = new UI.Panel();
                _this.CellsPanel = new UI.Panel();
                //this.PanelRows.AddClass("Panel1");
                _this.CellsPanel.AddClass("GridCellsPanel");
                _this.ScrollPanel.AddClass("GridScrollPanel");
                _this.PanelCols.Height(new UI.CSSNumber(_this.SizeManager.DefaultRowHeight));
                _this.PanelRows.Width(new UI.CSSNumber(_this.SizeManager.DefaultColWidth));
                _this.ScrollPanel.Children.Add(_this.CellsPanel);
                _this.Children.Add(_this.PanelRows);
                _this.Children.Add(_this.PanelCols);
                _this.Children.Add(_this.ScrollPanel);
                _this.OnResize.Attach(new Rubik.Events.ResizeEventHandler(_this._This_Resized, _this));
                _this.OnResize.Attach(new Rubik.Events.ShowEventHandler(_this._This_Show, _this));
                _this.ScrollPanel.OnScroll.Attach(new Rubik.Events.JQueryEventHandler(_this._Scroll, _this));
                _this.DataChanged();
                return _this;
            }
            Grid.prototype._This_Resized = function (eventArgs) {
                this.PanelRows.Height(new UI.CSSNumber(this.ActualHeight()));
                this.PanelCols.MarginLeft(new UI.CSSNumber(this.PanelRows.ActualWidth()));
                this.PanelCols.Width(new UI.CSSNumber(this.ActualWidth() - this.PanelRows.ActualWidth()));
                this.ScrollPanel.MarginTop(new UI.CSSNumber(this.PanelCols.ActualHeight()));
                this.ScrollPanel.MarginLeft(new UI.CSSNumber(this.PanelRows.ActualWidth()));
                this.ScrollPanel.Height(new UI.CSSNumber(this.ActualHeight() - this.PanelCols.ActualHeight()));
                this.ScrollPanel.Width(new UI.CSSNumber(this.ActualWidth() - this.PanelRows.ActualWidth()));
                this.Draw();
            };
            Grid.prototype._This_Show = function (eventArgs) {
                //this.DataChanged();
            };
            Grid.prototype._Scroll = function (eventArgs) {
                this.Draw();
            };
            Grid.prototype.DataChanged = function () {
                this.SizeManager.Initialize(this.DataManager.GetColsCount(), this.DataManager.GetRowsCount());
                this.CellsPanel.Height(new UI.CSSNumber(this.SizeManager.GetTotalHeight()));
                this.CellsPanel.Width(new UI.CSSNumber(this.SizeManager.GetTotalWidth()));
                //this.Draw();            
            };
            Grid.prototype.Draw = function () {
                var scrollTop = this.ScrollPanel._rootElement.scrollTop();
                var scrollLeft = this.ScrollPanel._rootElement.scrollLeft();
                var _a = this.SizeManager.GetVisibleRows(scrollTop, this.ScrollPanel.ActualHeight() + scrollTop), startRow = _a[0], endRow = _a[1];
                var _b = this.SizeManager.GetVisibleCols(scrollLeft, this.ScrollPanel.ActualWidth() + scrollLeft), startCol = _b[0], endCol = _b[1];
                this.CellsPanel.Children.Clear();
                var cells = new Rubik.Collections.List();
                for (var col = startCol; col <= endCol; col++) {
                    for (var row = startRow; row <= endRow; row++) {
                        var cell = new UI.GridCell();
                        cell.Text(this.DataManager.GetCellValue(col, row));
                        cell.Left(new UI.CSSNumber(this.SizeManager.GetColLeft(col)));
                        cell.Width(new UI.CSSNumber(this.SizeManager.GetColWidth(col)));
                        cell.Top(new UI.CSSNumber(this.SizeManager.GetRowTop(row)));
                        cell.Height(new UI.CSSNumber(this.SizeManager.GetRowHeight(row)));
                        //this.CellsPanel.Children.Add(cell);
                        cells.Add(cell);
                    }
                }
                this.CellsPanel.Children.AddRange(cells);
            };
            return Grid;
        }(UI.Control));
        UI.Grid = Grid;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=rubik.js.map
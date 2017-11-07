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
    /// <reference path="../../../Definitions/jquery_all.d.ts" />
    /// <reference path="../../UI/Interfaces/IListItem.d.ts" />
    /// <reference path="../../UI/Interfaces/IControl.d.ts" />
    /// <reference path="Event.ts" />
    /// <reference path="../Interfaces/IEventHandler.d.ts" />
    /// <reference path="../Interfaces/IEventArgs.d.ts" />
    /// <reference path="../Interfaces/IEvent.d.ts" />
    (function (Events) {
        /* This file contains all event classes (including Events, Event Handlers and Event Args
        except for those which must be put into separate files to prevent reference loops
        (see CollectionModifiedEventArgs.d.ts). See Event interface more info on how events
        are programmed.
        */
        //#region Click Event
        /** See Event for more details. */
        var ClickEvent = (function (_super) {
            __extends(ClickEvent, _super);
            function ClickEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            ClickEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            ClickEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            ClickEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            ClickEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ClickEvent;
        })(Events.Event);
        Events.ClickEvent = ClickEvent;

        /** See EventHandler for more details. */
        var ClickEventHandler = (function (_super) {
            __extends(ClickEventHandler, _super);
            function ClickEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            ClickEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ClickEventHandler;
        })(Events.EventHandler);
        Events.ClickEventHandler = ClickEventHandler;

        /** See EventArgs for more details. */
        var ClickEventArgs = (function (_super) {
            __extends(ClickEventArgs, _super);
            function ClickEventArgs(Sender, jqEvent) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return ClickEventArgs;
        })(Events.EventArgs);
        Events.ClickEventArgs = ClickEventArgs;

        //#endregion
        //#region Mouse Down Event
        /** See Event for more details. */
        var MouseDownEvent = (function (_super) {
            __extends(MouseDownEvent, _super);
            function MouseDownEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            MouseDownEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            MouseDownEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            MouseDownEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            MouseDownEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MouseDownEvent;
        })(Events.Event);
        Events.MouseDownEvent = MouseDownEvent;

        /** See EventHandler for more details. */
        var MouseDownEventHandler = (function (_super) {
            __extends(MouseDownEventHandler, _super);
            function MouseDownEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            MouseDownEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MouseDownEventHandler;
        })(Events.EventHandler);
        Events.MouseDownEventHandler = MouseDownEventHandler;

        /** See EventArgs for more details. */
        var MouseDownEventArgs = (function (_super) {
            __extends(MouseDownEventArgs, _super);
            function MouseDownEventArgs(Sender, jqEvent) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return MouseDownEventArgs;
        })(Events.EventArgs);
        Events.MouseDownEventArgs = MouseDownEventArgs;

        //#endregion
        //#region Mouse Up Event
        /** See Event for more details. */
        var MouseUpEvent = (function (_super) {
            __extends(MouseUpEvent, _super);
            function MouseUpEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            MouseUpEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            MouseUpEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            MouseUpEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            MouseUpEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MouseUpEvent;
        })(Events.Event);
        Events.MouseUpEvent = MouseUpEvent;

        /** See EventHandler for more details. */
        var MouseUpEventHandler = (function (_super) {
            __extends(MouseUpEventHandler, _super);
            function MouseUpEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            MouseUpEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MouseUpEventHandler;
        })(Events.EventHandler);
        Events.MouseUpEventHandler = MouseUpEventHandler;

        /** See EventArgs for more details. */
        var MouseUpEventArgs = (function (_super) {
            __extends(MouseUpEventArgs, _super);
            function MouseUpEventArgs(Sender, jqEvent) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return MouseUpEventArgs;
        })(Events.EventArgs);
        Events.MouseUpEventArgs = MouseUpEventArgs;

        //#endregion
        //#region Mouse Move Event
        /** See Event for more details. */
        var MouseMoveEvent = (function (_super) {
            __extends(MouseMoveEvent, _super);
            function MouseMoveEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            MouseMoveEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            MouseMoveEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            MouseMoveEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            MouseMoveEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MouseMoveEvent;
        })(Events.Event);
        Events.MouseMoveEvent = MouseMoveEvent;

        /** See EventHandler for more details. */
        var MouseMoveEventHandler = (function (_super) {
            __extends(MouseMoveEventHandler, _super);
            function MouseMoveEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            MouseMoveEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MouseMoveEventHandler;
        })(Events.EventHandler);
        Events.MouseMoveEventHandler = MouseMoveEventHandler;

        /** See EventArgs for more details. */
        var MouseMoveEventArgs = (function (_super) {
            __extends(MouseMoveEventArgs, _super);
            function MouseMoveEventArgs(Sender, jqEvent) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return MouseMoveEventArgs;
        })(Events.EventArgs);
        Events.MouseMoveEventArgs = MouseMoveEventArgs;

        //#endregion
        //#region Splitter Move Event
        /** See Event for more details. */
        var SplitterMoveEvent = (function (_super) {
            __extends(SplitterMoveEvent, _super);
            function SplitterMoveEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            SplitterMoveEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            SplitterMoveEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            SplitterMoveEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            SplitterMoveEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return SplitterMoveEvent;
        })(Events.Event);
        Events.SplitterMoveEvent = SplitterMoveEvent;

        /** See EventHandler for more details. */
        var SplitterMoveEventHandler = (function (_super) {
            __extends(SplitterMoveEventHandler, _super);
            function SplitterMoveEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            SplitterMoveEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return SplitterMoveEventHandler;
        })(Events.EventHandler);
        Events.SplitterMoveEventHandler = SplitterMoveEventHandler;

        /** See EventArgs for more details. */
        var SplitterMoveEventArgs = (function (_super) {
            __extends(SplitterMoveEventArgs, _super);
            function SplitterMoveEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return SplitterMoveEventArgs;
        })(Events.EventArgs);
        Events.SplitterMoveEventArgs = SplitterMoveEventArgs;

        //#endregion
        //#region Splitter Orientation Changed Event
        /** See Event for more details. */
        var OrientationChangedEvent = (function (_super) {
            __extends(OrientationChangedEvent, _super);
            function OrientationChangedEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            OrientationChangedEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            OrientationChangedEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            OrientationChangedEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            OrientationChangedEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return OrientationChangedEvent;
        })(Events.Event);
        Events.OrientationChangedEvent = OrientationChangedEvent;

        /** See EventHandler for more details. */
        var OrientationChangedEventHandler = (function (_super) {
            __extends(OrientationChangedEventHandler, _super);
            function OrientationChangedEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            OrientationChangedEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return OrientationChangedEventHandler;
        })(Events.EventHandler);
        Events.OrientationChangedEventHandler = OrientationChangedEventHandler;

        /** See EventArgs for more details. */
        var OrientationChangedEventArgs = (function (_super) {
            __extends(OrientationChangedEventArgs, _super);
            function OrientationChangedEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return OrientationChangedEventArgs;
        })(Events.EventArgs);
        Events.OrientationChangedEventArgs = OrientationChangedEventArgs;

        //#endregion
        //#region Resize Event
        /** See Event for more details. */
        var ResizeEvent = (function (_super) {
            __extends(ResizeEvent, _super);
            function ResizeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            ResizeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            ResizeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            ResizeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            ResizeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ResizeEvent;
        })(Events.Event);
        Events.ResizeEvent = ResizeEvent;

        /** See EventHandler for more details. */
        var ResizeEventHandler = (function (_super) {
            __extends(ResizeEventHandler, _super);
            function ResizeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            ResizeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ResizeEventHandler;
        })(Events.EventHandler);
        Events.ResizeEventHandler = ResizeEventHandler;

        /** See EventArgs for more details. */
        var ResizeEventArgs = (function (_super) {
            __extends(ResizeEventArgs, _super);
            function ResizeEventArgs(Sender, jqEvent) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return ResizeEventArgs;
        })(Events.EventArgs);
        Events.ResizeEventArgs = ResizeEventArgs;

        //#endregion
        //#region Move Event
        /** See Event for more details. */
        var MoveEvent = (function (_super) {
            __extends(MoveEvent, _super);
            function MoveEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            MoveEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            MoveEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            MoveEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            MoveEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MoveEvent;
        })(Events.Event);
        Events.MoveEvent = MoveEvent;

        /** See EventHandler for more details. */
        var MoveEventHandler = (function (_super) {
            __extends(MoveEventHandler, _super);
            function MoveEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            MoveEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return MoveEventHandler;
        })(Events.EventHandler);
        Events.MoveEventHandler = MoveEventHandler;

        /** See EventArgs for more details. */
        var MoveEventArgs = (function (_super) {
            __extends(MoveEventArgs, _super);
            function MoveEventArgs(Sender, jqEvent) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return MoveEventArgs;
        })(Events.EventArgs);
        Events.MoveEventArgs = MoveEventArgs;

        //#endregion
        //#region Checked Change Event
        /** See Event for more details. */
        var CheckedChangeEvent = (function (_super) {
            __extends(CheckedChangeEvent, _super);
            function CheckedChangeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            CheckedChangeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            CheckedChangeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            CheckedChangeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            CheckedChangeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return CheckedChangeEvent;
        })(Events.Event);
        Events.CheckedChangeEvent = CheckedChangeEvent;

        /** See EventHandler for more details. */
        var CheckedChangeEventHandler = (function (_super) {
            __extends(CheckedChangeEventHandler, _super);
            function CheckedChangeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            CheckedChangeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return CheckedChangeEventHandler;
        })(Events.EventHandler);
        Events.CheckedChangeEventHandler = CheckedChangeEventHandler;

        /** See EventArgs for more details. */
        var CheckedChangeEventArgs = (function (_super) {
            __extends(CheckedChangeEventArgs, _super);
            function CheckedChangeEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return CheckedChangeEventArgs;
        })(Events.EventArgs);
        Events.CheckedChangeEventArgs = CheckedChangeEventArgs;

        //#endregion
        //#region Text Change Event
        /** See Event for more details. */
        var TextChangeEvent = (function (_super) {
            __extends(TextChangeEvent, _super);
            function TextChangeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            TextChangeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            TextChangeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            TextChangeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            TextChangeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return TextChangeEvent;
        })(Events.Event);
        Events.TextChangeEvent = TextChangeEvent;

        /** See EventHandler for more details. */
        var TextChangeEventHandler = (function (_super) {
            __extends(TextChangeEventHandler, _super);
            function TextChangeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            TextChangeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return TextChangeEventHandler;
        })(Events.EventHandler);
        Events.TextChangeEventHandler = TextChangeEventHandler;

        /** See EventArgs for more details. */
        var TextChangeEventArgs = (function (_super) {
            __extends(TextChangeEventArgs, _super);
            function TextChangeEventArgs(Sender, jqEvent) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return TextChangeEventArgs;
        })(Events.EventArgs);
        Events.TextChangeEventArgs = TextChangeEventArgs;

        //#endregion
        //#region Close Event
        /** See Event for more details. */
        var CloseEvent = (function (_super) {
            __extends(CloseEvent, _super);
            function CloseEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            CloseEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            CloseEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            CloseEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            CloseEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return CloseEvent;
        })(Events.Event);
        Events.CloseEvent = CloseEvent;

        /** See EventHandler for more details. */
        var CloseEventHandler = (function (_super) {
            __extends(CloseEventHandler, _super);
            function CloseEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            CloseEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return CloseEventHandler;
        })(Events.EventHandler);
        Events.CloseEventHandler = CloseEventHandler;

        /** See EventArgs for more details. */
        var CloseEventArgs = (function (_super) {
            __extends(CloseEventArgs, _super);
            function CloseEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return CloseEventArgs;
        })(Events.EventArgs);
        Events.CloseEventArgs = CloseEventArgs;

        //#endregion
        //#region Show Event
        /** See Event for more details. */
        var ShowEvent = (function (_super) {
            __extends(ShowEvent, _super);
            function ShowEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            ShowEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            ShowEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            ShowEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            ShowEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ShowEvent;
        })(Events.Event);
        Events.ShowEvent = ShowEvent;

        /** See EventHandler for more details. */
        var ShowEventHandler = (function (_super) {
            __extends(ShowEventHandler, _super);
            function ShowEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            ShowEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ShowEventHandler;
        })(Events.EventHandler);
        Events.ShowEventHandler = ShowEventHandler;

        /** See EventArgs for more details. */
        var ShowEventArgs = (function (_super) {
            __extends(ShowEventArgs, _super);
            function ShowEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return ShowEventArgs;
        })(Events.EventArgs);
        Events.ShowEventArgs = ShowEventArgs;

        //#endregion
        //#region Hide Event
        /** See Event for more details. */
        var HideEvent = (function (_super) {
            __extends(HideEvent, _super);
            function HideEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            HideEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            HideEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            HideEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            HideEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return HideEvent;
        })(Events.Event);
        Events.HideEvent = HideEvent;

        /** See EventHandler for more details. */
        var HideEventHandler = (function (_super) {
            __extends(HideEventHandler, _super);
            function HideEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            HideEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return HideEventHandler;
        })(Events.EventHandler);
        Events.HideEventHandler = HideEventHandler;

        /** See EventArgs for more details. */
        var HideEventArgs = (function (_super) {
            __extends(HideEventArgs, _super);
            function HideEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return HideEventArgs;
        })(Events.EventArgs);
        Events.HideEventArgs = HideEventArgs;

        //#endregion
        //#region Focus Event
        /** See Event for more details. */
        var FocusEvent = (function (_super) {
            __extends(FocusEvent, _super);
            function FocusEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            FocusEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            FocusEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            FocusEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            FocusEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return FocusEvent;
        })(Events.Event);
        Events.FocusEvent = FocusEvent;

        /** See EventHandler for more details. */
        var FocusEventHandler = (function (_super) {
            __extends(FocusEventHandler, _super);
            function FocusEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            FocusEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return FocusEventHandler;
        })(Events.EventHandler);
        Events.FocusEventHandler = FocusEventHandler;

        /** See EventArgs for more details.
        Note: jqEvent is optional property. Default value: null.
        */
        var FocusEventArgs = (function (_super) {
            __extends(FocusEventArgs, _super);
            function FocusEventArgs(Sender, jqEvent) {
                if (typeof jqEvent === "undefined") { jqEvent = null; }
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return FocusEventArgs;
        })(Events.EventArgs);
        Events.FocusEventArgs = FocusEventArgs;

        //#endregion
        //#region Blur Event
        /** See Event for more details. */
        var BlurEvent = (function (_super) {
            __extends(BlurEvent, _super);
            function BlurEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            BlurEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            BlurEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            BlurEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            BlurEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return BlurEvent;
        })(Events.Event);
        Events.BlurEvent = BlurEvent;

        /** See EventHandler for more details. */
        var BlurEventHandler = (function (_super) {
            __extends(BlurEventHandler, _super);
            function BlurEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            BlurEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return BlurEventHandler;
        })(Events.EventHandler);
        Events.BlurEventHandler = BlurEventHandler;

        /** See EventArgs for more details.
        Note: jqEvent is optional property. Default value: null.
        */
        var BlurEventArgs = (function (_super) {
            __extends(BlurEventArgs, _super);
            function BlurEventArgs(Sender, jqEvent) {
                if (typeof jqEvent === "undefined") { jqEvent = null; }
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return BlurEventArgs;
        })(Events.EventArgs);
        Events.BlurEventArgs = BlurEventArgs;

        //#endregion
        //#region Key Down Event
        /** See Event for more details. */
        var KeyDownEvent = (function (_super) {
            __extends(KeyDownEvent, _super);
            function KeyDownEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            KeyDownEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            KeyDownEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            KeyDownEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            KeyDownEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return KeyDownEvent;
        })(Events.Event);
        Events.KeyDownEvent = KeyDownEvent;

        /** See EventHandler for more details. */
        var KeyDownEventHandler = (function (_super) {
            __extends(KeyDownEventHandler, _super);
            function KeyDownEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            KeyDownEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return KeyDownEventHandler;
        })(Events.EventHandler);
        Events.KeyDownEventHandler = KeyDownEventHandler;

        /** See EventArgs for more details.
        Note: jqEvent is optional property. Default value: null.
        */
        var KeyDownEventArgs = (function (_super) {
            __extends(KeyDownEventArgs, _super);
            function KeyDownEventArgs(Sender, jqEvent) {
                if (typeof jqEvent === "undefined") { jqEvent = null; }
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return KeyDownEventArgs;
        })(Events.EventArgs);
        Events.KeyDownEventArgs = KeyDownEventArgs;

        //#endregion
        //#region Key Press Event
        /** See Event for more details. */
        var KeyPressEvent = (function (_super) {
            __extends(KeyPressEvent, _super);
            function KeyPressEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            KeyPressEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            KeyPressEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            KeyPressEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            KeyPressEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return KeyPressEvent;
        })(Events.Event);
        Events.KeyPressEvent = KeyPressEvent;

        /** See EventHandler for more details. */
        var KeyPressEventHandler = (function (_super) {
            __extends(KeyPressEventHandler, _super);
            function KeyPressEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            KeyPressEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return KeyPressEventHandler;
        })(Events.EventHandler);
        Events.KeyPressEventHandler = KeyPressEventHandler;

        /** See EventArgs for more details.
        Note: jqEvent is optional property. Default value: null.
        */
        var KeyPressEventArgs = (function (_super) {
            __extends(KeyPressEventArgs, _super);
            function KeyPressEventArgs(Sender, jqEvent) {
                if (typeof jqEvent === "undefined") { jqEvent = null; }
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return KeyPressEventArgs;
        })(Events.EventArgs);
        Events.KeyPressEventArgs = KeyPressEventArgs;

        //#endregion
        //#region Key Up Event
        /** See Event for more details. */
        var KeyUpEvent = (function (_super) {
            __extends(KeyUpEvent, _super);
            function KeyUpEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            KeyUpEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            KeyUpEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            KeyUpEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            KeyUpEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return KeyUpEvent;
        })(Events.Event);
        Events.KeyUpEvent = KeyUpEvent;

        /** See EventHandler for more details. */
        var KeyUpEventHandler = (function (_super) {
            __extends(KeyUpEventHandler, _super);
            function KeyUpEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            KeyUpEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return KeyUpEventHandler;
        })(Events.EventHandler);
        Events.KeyUpEventHandler = KeyUpEventHandler;

        /** See EventArgs for more details.
        Note: jqEvent is optional property. Default value: null.
        */
        var KeyUpEventArgs = (function (_super) {
            __extends(KeyUpEventArgs, _super);
            function KeyUpEventArgs(Sender, jqEvent) {
                if (typeof jqEvent === "undefined") { jqEvent = null; }
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return KeyUpEventArgs;
        })(Events.EventArgs);
        Events.KeyUpEventArgs = KeyUpEventArgs;

        //#endregion
        //#region ListItem Text Change Event
        /** See Event for more details. */
        var ListItem_TextChangeEvent = (function (_super) {
            __extends(ListItem_TextChangeEvent, _super);
            function ListItem_TextChangeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            ListItem_TextChangeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            ListItem_TextChangeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            ListItem_TextChangeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            ListItem_TextChangeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ListItem_TextChangeEvent;
        })(Events.Event);
        Events.ListItem_TextChangeEvent = ListItem_TextChangeEvent;

        /** See EventHandler for more details. */
        var ListItem_TextChangeEventHandler = (function (_super) {
            __extends(ListItem_TextChangeEventHandler, _super);
            function ListItem_TextChangeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            ListItem_TextChangeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ListItem_TextChangeEventHandler;
        })(Events.EventHandler);
        Events.ListItem_TextChangeEventHandler = ListItem_TextChangeEventHandler;

        /** See EventArgs for more details. */
        var ListItem_TextChangeEventArgs = (function (_super) {
            __extends(ListItem_TextChangeEventArgs, _super);
            function ListItem_TextChangeEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return ListItem_TextChangeEventArgs;
        })(Events.EventArgs);
        Events.ListItem_TextChangeEventArgs = ListItem_TextChangeEventArgs;

        //#endregion
        //#region Selected Index Change Event
        /** See Event for more details. */
        var SelectedIndexChangeEvent = (function (_super) {
            __extends(SelectedIndexChangeEvent, _super);
            function SelectedIndexChangeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            SelectedIndexChangeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            SelectedIndexChangeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            SelectedIndexChangeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            SelectedIndexChangeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return SelectedIndexChangeEvent;
        })(Events.Event);
        Events.SelectedIndexChangeEvent = SelectedIndexChangeEvent;

        /** See EventHandler for more details. */
        var SelectedIndexChangeEventHandler = (function (_super) {
            __extends(SelectedIndexChangeEventHandler, _super);
            function SelectedIndexChangeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            SelectedIndexChangeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return SelectedIndexChangeEventHandler;
        })(Events.EventHandler);
        Events.SelectedIndexChangeEventHandler = SelectedIndexChangeEventHandler;

        /** See EventArgs for more details. */
        var SelectedIndexChangeEventArgs = (function (_super) {
            __extends(SelectedIndexChangeEventArgs, _super);
            function SelectedIndexChangeEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return SelectedIndexChangeEventArgs;
        })(Events.EventArgs);
        Events.SelectedIndexChangeEventArgs = SelectedIndexChangeEventArgs;

        //#endregion
        //#region Value Change Event
        /** See Event for more details. */
        var ValueChangeEvent = (function (_super) {
            __extends(ValueChangeEvent, _super);
            function ValueChangeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            ValueChangeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            ValueChangeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            ValueChangeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            ValueChangeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ValueChangeEvent;
        })(Events.Event);
        Events.ValueChangeEvent = ValueChangeEvent;

        /** See EventHandler for more details. */
        var ValueChangeEventHandler = (function (_super) {
            __extends(ValueChangeEventHandler, _super);
            function ValueChangeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            ValueChangeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return ValueChangeEventHandler;
        })(Events.EventHandler);
        Events.ValueChangeEventHandler = ValueChangeEventHandler;

        /** See EventArgs for more details. */
        var ValueChangeEventArgs = (function (_super) {
            __extends(ValueChangeEventArgs, _super);
            function ValueChangeEventArgs(Sender) {
                _super.call(this, Sender);
                this.Sender = Sender;
            }
            return ValueChangeEventArgs;
        })(Events.EventArgs);
        Events.ValueChangeEventArgs = ValueChangeEventArgs;

        //#endregion
        //#region Name Change Event
        /** See Event for more details. */
        var NameChangeEvent = (function (_super) {
            __extends(NameChangeEvent, _super);
            function NameChangeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            NameChangeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            NameChangeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            NameChangeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            NameChangeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return NameChangeEvent;
        })(Events.Event);
        Events.NameChangeEvent = NameChangeEvent;

        /** See EventHandler for more details. */
        var NameChangeEventHandler = (function (_super) {
            __extends(NameChangeEventHandler, _super);
            function NameChangeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            NameChangeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return NameChangeEventHandler;
        })(Events.EventHandler);
        Events.NameChangeEventHandler = NameChangeEventHandler;

        /** See EventArgs for more details. */
        var NameChangeEventArgs = (function (_super) {
            __extends(NameChangeEventArgs, _super);
            function NameChangeEventArgs(Sender, oldName) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.oldName = oldName;
            }
            return NameChangeEventArgs;
        })(Events.EventArgs);
        Events.NameChangeEventArgs = NameChangeEventArgs;

        //#endregion
        //#region Selection Made Event
        /** See Event for more details. */
        var SelectionMadeEvent = (function (_super) {
            __extends(SelectionMadeEvent, _super);
            function SelectionMadeEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            SelectionMadeEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            SelectionMadeEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            SelectionMadeEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            SelectionMadeEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return SelectionMadeEvent;
        })(Events.Event);
        Events.SelectionMadeEvent = SelectionMadeEvent;

        /** See EventHandler for more details. */
        var SelectionMadeEventHandler = (function (_super) {
            __extends(SelectionMadeEventHandler, _super);
            function SelectionMadeEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            SelectionMadeEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return SelectionMadeEventHandler;
        })(Events.EventHandler);
        Events.SelectionMadeEventHandler = SelectionMadeEventHandler;

        /** See EventArgs for more details.
        Note: jqEvent is optional property. Default value: null.
        */
        var SelectionMadeEventArgs = (function (_super) {
            __extends(SelectionMadeEventArgs, _super);
            function SelectionMadeEventArgs(Sender, jqEvent) {
                if (typeof jqEvent === "undefined") { jqEvent = null; }
                _super.call(this, Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
            return SelectionMadeEventArgs;
        })(Events.EventArgs);
        Events.SelectionMadeEventArgs = SelectionMadeEventArgs;

        //#endregion
        //#region Data Pushed Event
        /** See Event for more details. */
        var DataPushedEvent = (function (_super) {
            __extends(DataPushedEvent, _super);
            function DataPushedEvent() {
                _super.apply(this, arguments);
                this.Handlers = [];
            }
            DataPushedEvent.prototype.Attach = function (handler) {
                _super.prototype.Attach.call(this, handler);
            };
            DataPushedEvent.prototype.Detach = function (handler) {
                _super.prototype.Detach.call(this, handler);
            };

            DataPushedEvent.prototype.IsAttached = function (handler) {
                return _super.prototype.IsAttached.call(this, handler);
            };

            DataPushedEvent.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return DataPushedEvent;
        })(Events.Event);
        Events.DataPushedEvent = DataPushedEvent;

        /** See EventHandler for more details. */
        var DataPushedEventHandler = (function (_super) {
            __extends(DataPushedEventHandler, _super);
            function DataPushedEventHandler(Callback, Context) {
                _super.call(this, Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            DataPushedEventHandler.prototype.Invoke = function (args) {
                _super.prototype.Invoke.call(this, args);
            };
            return DataPushedEventHandler;
        })(Events.EventHandler);
        Events.DataPushedEventHandler = DataPushedEventHandler;

        /** See EventArgs for more details.
        Note: Success paramter indicates whether the push was successful.
        */
        var DataPushedEventArgs = (function (_super) {
            __extends(DataPushedEventArgs, _super);
            function DataPushedEventArgs(Sender, Result) {
                _super.call(this, Sender);
                this.Sender = Sender;
                this.Result = Result;
            }
            return DataPushedEventArgs;
        })(Events.EventArgs);
        Events.DataPushedEventArgs = DataPushedEventArgs;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

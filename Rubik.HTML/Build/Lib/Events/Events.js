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
//# sourceMappingURL=Events.js.map
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
        class ClickEvent extends Events.Event {
        }
        Events.ClickEvent = ClickEvent;
        class ClickEventHandler extends Events.EventHandler {
        }
        Events.ClickEventHandler = ClickEventHandler;
        /** See EventArgs for more details. */
        class ClickEventArgs extends Events.EventArgs {
            constructor(Sender, jqEvent) {
                super(Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
        }
        Events.ClickEventArgs = ClickEventArgs;
        //#endregion
        //#region Mouse Down Event
        /** See Event for more details. */
        class MouseDownEvent extends Events.Event {
        }
        Events.MouseDownEvent = MouseDownEvent;
        class MouseDownEventHandler extends Events.EventHandler {
        }
        Events.MouseDownEventHandler = MouseDownEventHandler;
        /** See EventArgs for more details. */
        class MouseDownEventArgs extends Events.EventArgs {
            constructor(Sender, jqEvent) {
                super(Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
        }
        Events.MouseDownEventArgs = MouseDownEventArgs;
        //#endregion
        //#region Mouse Up Event
        /** See Event for more details. */
        class MouseUpEvent extends Events.Event {
        }
        Events.MouseUpEvent = MouseUpEvent;
        class MouseUpEventHandler extends Events.EventHandler {
        }
        Events.MouseUpEventHandler = MouseUpEventHandler;
        /** See EventArgs for more details. */
        class MouseUpEventArgs extends Events.EventArgs {
            constructor(Sender, jqEvent) {
                super(Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
        }
        Events.MouseUpEventArgs = MouseUpEventArgs;
        //#endregion
        //#region Mouse Move Event
        /** See Event for more details. */
        class MouseMoveEvent extends Events.Event {
        }
        Events.MouseMoveEvent = MouseMoveEvent;
        class MouseMoveEventHandler extends Events.EventHandler {
        }
        Events.MouseMoveEventHandler = MouseMoveEventHandler;
        /** See EventArgs for more details. */
        class MouseMoveEventArgs extends Events.EventArgs {
            constructor(Sender, jqEvent) {
                super(Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
        }
        Events.MouseMoveEventArgs = MouseMoveEventArgs;
        //#endregion
        //#region Splitter Move Event
        /** See Event for more details. */
        class SplitterMoveEvent extends Events.Event {
        }
        Events.SplitterMoveEvent = SplitterMoveEvent;
        class SplitterMoveEventHandler extends Events.EventHandler {
        }
        Events.SplitterMoveEventHandler = SplitterMoveEventHandler;
        /** See EventArgs for more details. */
        class SplitterMoveEventArgs extends Events.EventArgs {
            constructor(Sender) {
                super(Sender);
                this.Sender = Sender;
            }
        }
        Events.SplitterMoveEventArgs = SplitterMoveEventArgs;
        //#endregion
        //#region Splitter Orientation Changed Event
        /** See Event for more details. */
        class OrientationChangedEvent extends Events.Event {
        }
        Events.OrientationChangedEvent = OrientationChangedEvent;
        class OrientationChangedEventHandler extends Events.EventHandler {
        }
        Events.OrientationChangedEventHandler = OrientationChangedEventHandler;
        /** See EventArgs for more details. */
        class OrientationChangedEventArgs extends Events.EventArgs {
            constructor(Sender) {
                super(Sender);
                this.Sender = Sender;
            }
        }
        Events.OrientationChangedEventArgs = OrientationChangedEventArgs;
        //#endregion
        //#region Resize Event
        /** See Event for more details. */
        class ResizeEvent extends Events.Event {
        }
        Events.ResizeEvent = ResizeEvent;
        class ResizeEventHandler extends Events.EventHandler {
        }
        Events.ResizeEventHandler = ResizeEventHandler;
        /** See EventArgs for more details. */
        class ResizeEventArgs extends Events.EventArgs {
            constructor(Sender, jqEvent) {
                super(Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
        }
        Events.ResizeEventArgs = ResizeEventArgs;
        //#endregion
        //#region Move Event
        /** See Event for more details. */
        class MoveEvent extends Events.Event {
        }
        Events.MoveEvent = MoveEvent;
        class MoveEventHandler extends Events.EventHandler {
        }
        Events.MoveEventHandler = MoveEventHandler;
        /** See EventArgs for more details. */
        class MoveEventArgs extends Events.EventArgs {
            constructor(Sender, jqEvent) {
                super(Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
        }
        Events.MoveEventArgs = MoveEventArgs;
        //#endregion
        //#region Checked Change Event
        /** See Event for more details. */
        class CheckedChangeEvent extends Events.Event {
        }
        Events.CheckedChangeEvent = CheckedChangeEvent;
        class CheckedChangeEventHandler extends Events.EventHandler {
        }
        Events.CheckedChangeEventHandler = CheckedChangeEventHandler;
        /** See EventArgs for more details. */
        class CheckedChangeEventArgs extends Events.EventArgs {
            constructor(Sender) {
                super(Sender);
                this.Sender = Sender;
            }
        }
        Events.CheckedChangeEventArgs = CheckedChangeEventArgs;
        //#endregion
        //#region Text Change Event
        /** See Event for more details. */
        class TextChangeEvent extends Events.Event {
        }
        Events.TextChangeEvent = TextChangeEvent;
        class TextChangeEventHandler extends Events.EventHandler {
        }
        Events.TextChangeEventHandler = TextChangeEventHandler;
        /** See EventArgs for more details. */
        class TextChangeEventArgs extends Events.EventArgs {
            constructor(Sender, jqEvent) {
                super(Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
        }
        Events.TextChangeEventArgs = TextChangeEventArgs;
        //#endregion
        //#region Close Event
        /** See Event for more details. */
        class CloseEvent extends Events.Event {
        }
        Events.CloseEvent = CloseEvent;
        class CloseEventHandler extends Events.EventHandler {
        }
        Events.CloseEventHandler = CloseEventHandler;
        /** See EventArgs for more details. */
        class CloseEventArgs extends Events.EventArgs {
            constructor(Sender) {
                super(Sender);
                this.Sender = Sender;
            }
        }
        Events.CloseEventArgs = CloseEventArgs;
        //#endregion
        //#region Show Event
        /** See Event for more details. */
        class ShowEvent extends Events.Event {
        }
        Events.ShowEvent = ShowEvent;
        class ShowEventHandler extends Events.EventHandler {
        }
        Events.ShowEventHandler = ShowEventHandler;
        /** See EventArgs for more details. */
        class ShowEventArgs extends Events.EventArgs {
            constructor(Sender) {
                super(Sender);
                this.Sender = Sender;
            }
        }
        Events.ShowEventArgs = ShowEventArgs;
        //#endregion
        //#region Hide Event
        /** See Event for more details. */
        class HideEvent extends Events.Event {
        }
        Events.HideEvent = HideEvent;
        class HideEventHandler extends Events.EventHandler {
        }
        Events.HideEventHandler = HideEventHandler;
        /** See EventArgs for more details. */
        class HideEventArgs extends Events.EventArgs {
            constructor(Sender) {
                super(Sender);
                this.Sender = Sender;
            }
        }
        Events.HideEventArgs = HideEventArgs;
        //#endregion
        //#region Focus Event
        /** See Event for more details. */
        class FocusEvent extends Events.Event {
        }
        Events.FocusEvent = FocusEvent;
        class FocusEventHandler extends Events.EventHandler {
        }
        Events.FocusEventHandler = FocusEventHandler;
        /** See EventArgs for more details.
            Note: jqEvent is optional property. Default value: null.
        */
        class FocusEventArgs extends Events.EventArgs {
            constructor(Sender, jqEvent = null) {
                super(Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
        }
        Events.FocusEventArgs = FocusEventArgs;
        //#endregion
        //#region Blur Event
        /** See Event for more details. */
        class BlurEvent extends Events.Event {
        }
        Events.BlurEvent = BlurEvent;
        class BlurEventHandler extends Events.EventHandler {
        }
        Events.BlurEventHandler = BlurEventHandler;
        /** See EventArgs for more details.
            Note: jqEvent is optional property. Default value: null.
        */
        class BlurEventArgs extends Events.EventArgs {
            constructor(Sender, jqEvent = null) {
                super(Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
        }
        Events.BlurEventArgs = BlurEventArgs;
        //#endregion
        //#region Key Down Event
        /** See Event for more details. */
        class KeyDownEvent extends Events.Event {
        }
        Events.KeyDownEvent = KeyDownEvent;
        class KeyDownEventHandler extends Events.EventHandler {
        }
        Events.KeyDownEventHandler = KeyDownEventHandler;
        /** See EventArgs for more details.
            Note: jqEvent is optional property. Default value: null.
        */
        class KeyDownEventArgs extends Events.EventArgs {
            constructor(Sender, jqEvent = null) {
                super(Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
        }
        Events.KeyDownEventArgs = KeyDownEventArgs;
        //#endregion
        //#region Key Press Event
        /** See Event for more details. */
        class KeyPressEvent extends Events.Event {
        }
        Events.KeyPressEvent = KeyPressEvent;
        class KeyPressEventHandler extends Events.EventHandler {
        }
        Events.KeyPressEventHandler = KeyPressEventHandler;
        /** See EventArgs for more details.
            Note: jqEvent is optional property. Default value: null.
        */
        class KeyPressEventArgs extends Events.EventArgs {
            constructor(Sender, jqEvent = null) {
                super(Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
        }
        Events.KeyPressEventArgs = KeyPressEventArgs;
        //#endregion
        //#region Key Up Event
        /** See Event for more details. */
        class KeyUpEvent extends Events.Event {
        }
        Events.KeyUpEvent = KeyUpEvent;
        class KeyUpEventHandler extends Events.EventHandler {
        }
        Events.KeyUpEventHandler = KeyUpEventHandler;
        /** See EventArgs for more details.
            Note: jqEvent is optional property. Default value: null.
        */
        class KeyUpEventArgs extends Events.EventArgs {
            constructor(Sender, jqEvent = null) {
                super(Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
        }
        Events.KeyUpEventArgs = KeyUpEventArgs;
        //#endregion
        //#region Selected Index Change Event
        /** See Event for more details. */
        class SelectedIndexChangeEvent extends Events.Event {
        }
        Events.SelectedIndexChangeEvent = SelectedIndexChangeEvent;
        class SelectedIndexChangeEventHandler extends Events.EventHandler {
        }
        Events.SelectedIndexChangeEventHandler = SelectedIndexChangeEventHandler;
        /** See EventArgs for more details. */
        class SelectedIndexChangeEventArgs extends Events.EventArgs {
            constructor(Sender) {
                super(Sender);
                this.Sender = Sender;
            }
        }
        Events.SelectedIndexChangeEventArgs = SelectedIndexChangeEventArgs;
        //#endregion
        //#region Value Change Event
        /** See Event for more details. */
        class ValueChangeEvent extends Events.Event {
        }
        Events.ValueChangeEvent = ValueChangeEvent;
        class ValueChangeEventHandler extends Events.EventHandler {
        }
        Events.ValueChangeEventHandler = ValueChangeEventHandler;
        /** See EventArgs for more details. */
        class ValueChangeEventArgs extends Events.EventArgs {
            constructor(Sender) {
                super(Sender);
                this.Sender = Sender;
            }
        }
        Events.ValueChangeEventArgs = ValueChangeEventArgs;
        //#endregion
        //#region Name Change Event
        /** See Event for more details. */
        class NameChangeEvent extends Events.Event {
        }
        Events.NameChangeEvent = NameChangeEvent;
        class NameChangeEventHandler extends Events.EventHandler {
        }
        Events.NameChangeEventHandler = NameChangeEventHandler;
        /** See EventArgs for more details. */
        class NameChangeEventArgs extends Events.EventArgs {
            constructor(Sender, oldName) {
                super(Sender);
                this.Sender = Sender;
                this.oldName = oldName;
            }
        }
        Events.NameChangeEventArgs = NameChangeEventArgs;
        //#endregion
        //#region Selection Made Event
        /** See Event for more details. */
        class SelectionMadeEvent extends Events.Event {
        }
        Events.SelectionMadeEvent = SelectionMadeEvent;
        class SelectionMadeEventHandler extends Events.EventHandler {
        }
        Events.SelectionMadeEventHandler = SelectionMadeEventHandler;
        /** See EventArgs for more details.
            Note: jqEvent is optional property. Default value: null.
        */
        class SelectionMadeEventArgs extends Events.EventArgs {
            constructor(Sender, jqEvent = null) {
                super(Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
        }
        Events.SelectionMadeEventArgs = SelectionMadeEventArgs;
        //#endregion
        class JQueryEvent extends Events.Event {
        }
        Events.JQueryEvent = JQueryEvent;
        class JQueryEventHandler extends Events.EventHandler {
        }
        Events.JQueryEventHandler = JQueryEventHandler;
        class JQueryEventArgs extends Events.EventArgs {
            constructor(Sender, jqEvent = null) {
                super(Sender);
                this.Sender = Sender;
                this.jqEvent = jqEvent;
            }
        }
        Events.JQueryEventArgs = JQueryEventArgs;
        class SimpleEvent extends Events.Event {
        }
        Events.SimpleEvent = SimpleEvent;
        class SimpleEventHandler extends Events.EventHandler {
        }
        Events.SimpleEventHandler = SimpleEventHandler;
    })(Events = Rubik.Events || (Rubik.Events = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=Events.js.map
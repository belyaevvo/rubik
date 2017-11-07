/// <reference path="../../Data/Interfaces/IDataAccessResult.d.ts" />
/// <reference path="../../Data/Enums/DataAccessStatuses.d.ts" />
/// <reference path="../../Data/Interfaces/IDataAccessor.d.ts" />
/// <reference path="../../../../Definitions/jquery_all.d.ts" />
/// <reference path="../../UI/Interfaces/IListItem.d.ts" />
/// <reference path="../../UI/Interfaces/IControl.d.ts" />
/// <reference path="Event.d.ts" />
/// <reference path="../../Events/Interfaces/IEventHandler.d.ts" />
/// <reference path="../../Events/Interfaces/IEventArgs.d.ts" />
/// <reference path="../../Events/Interfaces/IEvent.d.ts" />
declare module TSUI.Events {
    /** See Event for more details. */
    class ClickEvent extends Events.Event {
        public Handlers: ClickEventHandler[];
        public Attach(handler: ClickEventHandler): void;
        public Detach(handler: ClickEventHandler): void;
        public IsAttached(handler: ClickEventHandler): boolean;
        public Invoke(args: ClickEventArgs): void;
    }
    /** See EventHandler for more details. */
    class ClickEventHandler extends Events.EventHandler {
        public Callback: (args: ClickEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: ClickEventArgs) => void, Context: any);
        public Invoke(args: ClickEventArgs): void;
    }
    /** See EventArgs for more details. */
    class ClickEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        public jqEvent: JQueryEventObject;
        constructor(Sender: TSUI.UI.IControl, jqEvent: JQueryEventObject);
    }
    /** See Event for more details. */
    class MouseDownEvent extends Events.Event {
        public Handlers: MouseDownEventHandler[];
        public Attach(handler: MouseDownEventHandler): void;
        public Detach(handler: MouseDownEventHandler): void;
        public IsAttached(handler: MouseDownEventHandler): boolean;
        public Invoke(args: MouseDownEventArgs): void;
    }
    /** See EventHandler for more details. */
    class MouseDownEventHandler extends Events.EventHandler {
        public Callback: (args: MouseDownEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: MouseDownEventArgs) => void, Context: any);
        public Invoke(args: MouseDownEventArgs): void;
    }
    /** See EventArgs for more details. */
    class MouseDownEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        public jqEvent: JQueryEventObject;
        constructor(Sender: TSUI.UI.IControl, jqEvent: JQueryEventObject);
    }
    /** See Event for more details. */
    class MouseUpEvent extends Events.Event {
        public Handlers: MouseUpEventHandler[];
        public Attach(handler: MouseUpEventHandler): void;
        public Detach(handler: MouseUpEventHandler): void;
        public IsAttached(handler: MouseUpEventHandler): boolean;
        public Invoke(args: MouseUpEventArgs): void;
    }
    /** See EventHandler for more details. */
    class MouseUpEventHandler extends Events.EventHandler {
        public Callback: (args: MouseUpEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: MouseUpEventArgs) => void, Context: any);
        public Invoke(args: MouseUpEventArgs): void;
    }
    /** See EventArgs for more details. */
    class MouseUpEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        public jqEvent: JQueryEventObject;
        constructor(Sender: TSUI.UI.IControl, jqEvent: JQueryEventObject);
    }
    /** See Event for more details. */
    class MouseMoveEvent extends Events.Event {
        public Handlers: MouseMoveEventHandler[];
        public Attach(handler: MouseMoveEventHandler): void;
        public Detach(handler: MouseMoveEventHandler): void;
        public IsAttached(handler: MouseMoveEventHandler): boolean;
        public Invoke(args: MouseMoveEventArgs): void;
    }
    /** See EventHandler for more details. */
    class MouseMoveEventHandler extends Events.EventHandler {
        public Callback: (args: MouseMoveEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: MouseMoveEventArgs) => void, Context: any);
        public Invoke(args: MouseMoveEventArgs): void;
    }
    /** See EventArgs for more details. */
    class MouseMoveEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        public jqEvent: JQueryEventObject;
        constructor(Sender: TSUI.UI.IControl, jqEvent: JQueryEventObject);
    }
    /** See Event for more details. */
    class SplitterMoveEvent extends Events.Event {
        public Handlers: SplitterMoveEventHandler[];
        public Attach(handler: SplitterMoveEventHandler): void;
        public Detach(handler: SplitterMoveEventHandler): void;
        public IsAttached(handler: SplitterMoveEventHandler): boolean;
        public Invoke(args: SplitterMoveEventArgs): void;
    }
    /** See EventHandler for more details. */
    class SplitterMoveEventHandler extends Events.EventHandler {
        public Callback: (args: SplitterMoveEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: SplitterMoveEventArgs) => void, Context: any);
        public Invoke(args: SplitterMoveEventArgs): void;
    }
    /** See EventArgs for more details. */
    class SplitterMoveEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        constructor(Sender: TSUI.UI.IControl);
    }
    /** See Event for more details. */
    class OrientationChangedEvent extends Events.Event {
        public Handlers: OrientationChangedEventHandler[];
        public Attach(handler: OrientationChangedEventHandler): void;
        public Detach(handler: OrientationChangedEventHandler): void;
        public IsAttached(handler: OrientationChangedEventHandler): boolean;
        public Invoke(args: OrientationChangedEventArgs): void;
    }
    /** See EventHandler for more details. */
    class OrientationChangedEventHandler extends Events.EventHandler {
        public Callback: (args: OrientationChangedEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: OrientationChangedEventArgs) => void, Context: any);
        public Invoke(args: OrientationChangedEventArgs): void;
    }
    /** See EventArgs for more details. */
    class OrientationChangedEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        constructor(Sender: TSUI.UI.IControl);
    }
    /** See Event for more details. */
    class ResizeEvent extends Events.Event {
        public Handlers: ResizeEventHandler[];
        public Attach(handler: ResizeEventHandler): void;
        public Detach(handler: ResizeEventHandler): void;
        public IsAttached(handler: ResizeEventHandler): boolean;
        public Invoke(args: ResizeEventArgs): void;
    }
    /** See EventHandler for more details. */
    class ResizeEventHandler extends Events.EventHandler {
        public Callback: (args: ResizeEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: ResizeEventArgs) => void, Context: any);
        public Invoke(args: ResizeEventArgs): void;
    }
    /** See EventArgs for more details. */
    class ResizeEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        public jqEvent: JQueryEventObject;
        constructor(Sender: TSUI.UI.IControl, jqEvent: JQueryEventObject);
    }
    /** See Event for more details. */
    class MoveEvent extends Events.Event {
        public Handlers: MoveEventHandler[];
        public Attach(handler: MoveEventHandler): void;
        public Detach(handler: MoveEventHandler): void;
        public IsAttached(handler: MoveEventHandler): boolean;
        public Invoke(args: MoveEventArgs): void;
    }
    /** See EventHandler for more details. */
    class MoveEventHandler extends Events.EventHandler {
        public Callback: (args: MoveEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: MoveEventArgs) => void, Context: any);
        public Invoke(args: MoveEventArgs): void;
    }
    /** See EventArgs for more details. */
    class MoveEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        public jqEvent: JQueryEventObject;
        constructor(Sender: TSUI.UI.IControl, jqEvent: JQueryEventObject);
    }
    /** See Event for more details. */
    class CheckedChangeEvent extends Events.Event {
        public Handlers: CheckedChangeEventHandler[];
        public Attach(handler: CheckedChangeEventHandler): void;
        public Detach(handler: CheckedChangeEventHandler): void;
        public IsAttached(handler: CheckedChangeEventHandler): boolean;
        public Invoke(args: CheckedChangeEventArgs): void;
    }
    /** See EventHandler for more details. */
    class CheckedChangeEventHandler extends Events.EventHandler {
        public Callback: (args: CheckedChangeEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: CheckedChangeEventArgs) => void, Context: any);
        public Invoke(args: CheckedChangeEventArgs): void;
    }
    /** See EventArgs for more details. */
    class CheckedChangeEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        constructor(Sender: TSUI.UI.IControl);
    }
    /** See Event for more details. */
    class TextChangeEvent extends Events.Event {
        public Handlers: TextChangeEventHandler[];
        public Attach(handler: TextChangeEventHandler): void;
        public Detach(handler: TextChangeEventHandler): void;
        public IsAttached(handler: TextChangeEventHandler): boolean;
        public Invoke(args: TextChangeEventArgs): void;
    }
    /** See EventHandler for more details. */
    class TextChangeEventHandler extends Events.EventHandler {
        public Callback: (args: TextChangeEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: TextChangeEventArgs) => void, Context: any);
        public Invoke(args: TextChangeEventArgs): void;
    }
    /** See EventArgs for more details. */
    class TextChangeEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        public jqEvent: JQueryEventObject;
        constructor(Sender: TSUI.UI.IControl, jqEvent: JQueryEventObject);
    }
    /** See Event for more details. */
    class CloseEvent extends Events.Event {
        public Handlers: CloseEventHandler[];
        public Attach(handler: CloseEventHandler): void;
        public Detach(handler: CloseEventHandler): void;
        public IsAttached(handler: CloseEventHandler): boolean;
        public Invoke(args: CloseEventArgs): void;
    }
    /** See EventHandler for more details. */
    class CloseEventHandler extends Events.EventHandler {
        public Callback: (args: CloseEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: CloseEventArgs) => void, Context: any);
        public Invoke(args: CloseEventArgs): void;
    }
    /** See EventArgs for more details. */
    class CloseEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        constructor(Sender: TSUI.UI.IControl);
    }
    /** See Event for more details. */
    class ShowEvent extends Events.Event {
        public Handlers: ShowEventHandler[];
        public Attach(handler: ShowEventHandler): void;
        public Detach(handler: ShowEventHandler): void;
        public IsAttached(handler: ShowEventHandler): boolean;
        public Invoke(args: ShowEventArgs): void;
    }
    /** See EventHandler for more details. */
    class ShowEventHandler extends Events.EventHandler {
        public Callback: (args: ShowEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: ShowEventArgs) => void, Context: any);
        public Invoke(args: ShowEventArgs): void;
    }
    /** See EventArgs for more details. */
    class ShowEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        constructor(Sender: TSUI.UI.IControl);
    }
    /** See Event for more details. */
    class HideEvent extends Events.Event {
        public Handlers: HideEventHandler[];
        public Attach(handler: HideEventHandler): void;
        public Detach(handler: HideEventHandler): void;
        public IsAttached(handler: HideEventHandler): boolean;
        public Invoke(args: HideEventArgs): void;
    }
    /** See EventHandler for more details. */
    class HideEventHandler extends Events.EventHandler {
        public Callback: (args: HideEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: HideEventArgs) => void, Context: any);
        public Invoke(args: HideEventArgs): void;
    }
    /** See EventArgs for more details. */
    class HideEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        constructor(Sender: TSUI.UI.IControl);
    }
    /** See Event for more details. */
    class FocusEvent extends Events.Event {
        public Handlers: FocusEventHandler[];
        public Attach(handler: FocusEventHandler): void;
        public Detach(handler: FocusEventHandler): void;
        public IsAttached(handler: FocusEventHandler): boolean;
        public Invoke(args: FocusEventArgs): void;
    }
    /** See EventHandler for more details. */
    class FocusEventHandler extends Events.EventHandler {
        public Callback: (args: FocusEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: FocusEventArgs) => void, Context: any);
        public Invoke(args: FocusEventArgs): void;
    }
    /** See EventArgs for more details.
    Note: jqEvent is optional property. Default value: null.
    */
    class FocusEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        public jqEvent: JQueryEventObject;
        constructor(Sender: TSUI.UI.IControl, jqEvent?: JQueryEventObject);
    }
    /** See Event for more details. */
    class BlurEvent extends Events.Event {
        public Handlers: BlurEventHandler[];
        public Attach(handler: BlurEventHandler): void;
        public Detach(handler: BlurEventHandler): void;
        public IsAttached(handler: BlurEventHandler): boolean;
        public Invoke(args: BlurEventArgs): void;
    }
    /** See EventHandler for more details. */
    class BlurEventHandler extends Events.EventHandler {
        public Callback: (args: BlurEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: BlurEventArgs) => void, Context: any);
        public Invoke(args: BlurEventArgs): void;
    }
    /** See EventArgs for more details.
    Note: jqEvent is optional property. Default value: null.
    */
    class BlurEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        public jqEvent: JQueryEventObject;
        constructor(Sender: TSUI.UI.IControl, jqEvent?: JQueryEventObject);
    }
    /** See Event for more details. */
    class KeyDownEvent extends Events.Event {
        public Handlers: KeyDownEventHandler[];
        public Attach(handler: KeyDownEventHandler): void;
        public Detach(handler: KeyDownEventHandler): void;
        public IsAttached(handler: KeyDownEventHandler): boolean;
        public Invoke(args: KeyDownEventArgs): void;
    }
    /** See EventHandler for more details. */
    class KeyDownEventHandler extends Events.EventHandler {
        public Callback: (args: KeyDownEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: KeyDownEventArgs) => void, Context: any);
        public Invoke(args: KeyDownEventArgs): void;
    }
    /** See EventArgs for more details.
    Note: jqEvent is optional property. Default value: null.
    */
    class KeyDownEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        public jqEvent: JQueryEventObject;
        constructor(Sender: TSUI.UI.IControl, jqEvent?: JQueryEventObject);
    }
    /** See Event for more details. */
    class KeyPressEvent extends Events.Event {
        public Handlers: KeyPressEventHandler[];
        public Attach(handler: KeyPressEventHandler): void;
        public Detach(handler: KeyPressEventHandler): void;
        public IsAttached(handler: KeyPressEventHandler): boolean;
        public Invoke(args: KeyPressEventArgs): void;
    }
    /** See EventHandler for more details. */
    class KeyPressEventHandler extends Events.EventHandler {
        public Callback: (args: KeyPressEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: KeyPressEventArgs) => void, Context: any);
        public Invoke(args: KeyPressEventArgs): void;
    }
    /** See EventArgs for more details.
    Note: jqEvent is optional property. Default value: null.
    */
    class KeyPressEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        public jqEvent: JQueryEventObject;
        constructor(Sender: TSUI.UI.IControl, jqEvent?: JQueryEventObject);
    }
    /** See Event for more details. */
    class KeyUpEvent extends Events.Event {
        public Handlers: KeyUpEventHandler[];
        public Attach(handler: KeyUpEventHandler): void;
        public Detach(handler: KeyUpEventHandler): void;
        public IsAttached(handler: KeyUpEventHandler): boolean;
        public Invoke(args: KeyUpEventArgs): void;
    }
    /** See EventHandler for more details. */
    class KeyUpEventHandler extends Events.EventHandler {
        public Callback: (args: KeyUpEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: KeyUpEventArgs) => void, Context: any);
        public Invoke(args: KeyUpEventArgs): void;
    }
    /** See EventArgs for more details.
    Note: jqEvent is optional property. Default value: null.
    */
    class KeyUpEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        public jqEvent: JQueryEventObject;
        constructor(Sender: TSUI.UI.IControl, jqEvent?: JQueryEventObject);
    }
    /** See Event for more details. */
    class ListItem_TextChangeEvent<T> extends Events.Event {
        public Handlers: ListItem_TextChangeEventHandler<T>[];
        public Attach(handler: ListItem_TextChangeEventHandler<T>): void;
        public Detach(handler: ListItem_TextChangeEventHandler<T>): void;
        public IsAttached(handler: ListItem_TextChangeEventHandler<T>): boolean;
        public Invoke(args: ListItem_TextChangeEventArgs<T>): void;
    }
    /** See EventHandler for more details. */
    class ListItem_TextChangeEventHandler<T> extends Events.EventHandler {
        public Callback: (args: ListItem_TextChangeEventArgs<T>) => void;
        public Context: any;
        constructor(Callback: (args: ListItem_TextChangeEventArgs<T>) => void, Context: any);
        public Invoke(args: ListItem_TextChangeEventArgs<T>): void;
    }
    /** See EventArgs for more details. */
    class ListItem_TextChangeEventArgs<T> extends Events.EventArgs {
        public Sender: TSUI.UI.IListItem<T>;
        constructor(Sender: TSUI.UI.IListItem<T>);
    }
    /** See Event for more details. */
    class SelectedIndexChangeEvent extends Events.Event {
        public Handlers: SelectedIndexChangeEventHandler[];
        public Attach(handler: SelectedIndexChangeEventHandler): void;
        public Detach(handler: SelectedIndexChangeEventHandler): void;
        public IsAttached(handler: SelectedIndexChangeEventHandler): boolean;
        public Invoke(args: SelectedIndexChangeEventArgs): void;
    }
    /** See EventHandler for more details. */
    class SelectedIndexChangeEventHandler extends Events.EventHandler {
        public Callback: (args: SelectedIndexChangeEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: SelectedIndexChangeEventArgs) => void, Context: any);
        public Invoke(args: SelectedIndexChangeEventArgs): void;
    }
    /** See EventArgs for more details. */
    class SelectedIndexChangeEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        constructor(Sender: TSUI.UI.IControl);
    }
    /** See Event for more details. */
    class ValueChangeEvent extends Events.Event {
        public Handlers: ValueChangeEventHandler[];
        public Attach(handler: ValueChangeEventHandler): void;
        public Detach(handler: ValueChangeEventHandler): void;
        public IsAttached(handler: ValueChangeEventHandler): boolean;
        public Invoke(args: ValueChangeEventArgs): void;
    }
    /** See EventHandler for more details. */
    class ValueChangeEventHandler extends Events.EventHandler {
        public Callback: (args: ValueChangeEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: ValueChangeEventArgs) => void, Context: any);
        public Invoke(args: ValueChangeEventArgs): void;
    }
    /** See EventArgs for more details. */
    class ValueChangeEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        constructor(Sender: TSUI.UI.IControl);
    }
    /** See Event for more details. */
    class NameChangeEvent extends Events.Event {
        public Handlers: NameChangeEventHandler[];
        public Attach(handler: NameChangeEventHandler): void;
        public Detach(handler: NameChangeEventHandler): void;
        public IsAttached(handler: NameChangeEventHandler): boolean;
        public Invoke(args: NameChangeEventArgs): void;
    }
    /** See EventHandler for more details. */
    class NameChangeEventHandler extends Events.EventHandler {
        public Callback: (args: NameChangeEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: NameChangeEventArgs) => void, Context: any);
        public Invoke(args: NameChangeEventArgs): void;
    }
    /** See EventArgs for more details. */
    class NameChangeEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        public oldName: string;
        constructor(Sender: TSUI.UI.IControl, oldName: string);
    }
    /** See Event for more details. */
    class SelectionMadeEvent extends Events.Event {
        public Handlers: SelectionMadeEventHandler[];
        public Attach(handler: SelectionMadeEventHandler): void;
        public Detach(handler: SelectionMadeEventHandler): void;
        public IsAttached(handler: SelectionMadeEventHandler): boolean;
        public Invoke(args: SelectionMadeEventArgs): void;
    }
    /** See EventHandler for more details. */
    class SelectionMadeEventHandler extends Events.EventHandler {
        public Callback: (args: SelectionMadeEventArgs) => void;
        public Context: any;
        constructor(Callback: (args: SelectionMadeEventArgs) => void, Context: any);
        public Invoke(args: SelectionMadeEventArgs): void;
    }
    /** See EventArgs for more details.
    Note: jqEvent is optional property. Default value: null.
    */
    class SelectionMadeEventArgs extends Events.EventArgs {
        public Sender: TSUI.UI.IControl;
        public jqEvent: JQueryEventObject;
        constructor(Sender: TSUI.UI.IControl, jqEvent?: JQueryEventObject);
    }
    /** See Event for more details. */
    class DataPushedEvent<T> extends Events.Event {
        public Handlers: DataPushedEventHandler<T>[];
        public Attach(handler: DataPushedEventHandler<T>): void;
        public Detach(handler: DataPushedEventHandler<T>): void;
        public IsAttached(handler: DataPushedEventHandler<T>): boolean;
        public Invoke(args: DataPushedEventArgs<T>): void;
    }
    /** See EventHandler for more details. */
    class DataPushedEventHandler<T> extends Events.EventHandler {
        public Callback: (args: DataPushedEventArgs<T>) => void;
        public Context: any;
        constructor(Callback: (args: DataPushedEventArgs<T>) => void, Context: any);
        public Invoke(args: DataPushedEventArgs<T>): void;
    }
    /** See EventArgs for more details.
    Note: Success paramter indicates whether the push was successful.
    */
    class DataPushedEventArgs<T> extends Events.EventArgs {
        public Sender: TSUI.Data.IDataAccessor<T>;
        public Result: TSUI.Data.IDataAccessResult<T>;
        constructor(Sender: TSUI.Data.IDataAccessor<T>, Result: TSUI.Data.IDataAccessResult<T>);
    }
}

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

module TSUI.Events
{
    /* This file contains all event classes (including Events, Event Handlers and Event Args
        except for those which must be put into separate files to prevent reference loops
        (see CollectionModifiedEventArgs.d.ts). See Event interface more info on how events
        are programmed.
    */

    //#region Click Event
    
    /** See Event for more details. */
    export class ClickEvent extends Event
    {
        Handlers: ClickEventHandler[] = [];

        Attach(handler: ClickEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: ClickEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: ClickEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.ClickEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class ClickEventHandler extends EventHandler
    {
        constructor(public Callback: (args: ClickEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: ClickEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class ClickEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl, public jqEvent: JQueryEventObject)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Mouse Down Event
    
    /** See Event for more details. */
    export class MouseDownEvent extends Event
    {
        Handlers: MouseDownEventHandler[] = [];

        Attach(handler: MouseDownEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: MouseDownEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: MouseDownEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.MouseDownEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class MouseDownEventHandler extends EventHandler
    {
        constructor(public Callback: (args: MouseDownEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: MouseDownEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class MouseDownEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl, public jqEvent: JQueryEventObject)
        {
            super(Sender);
        }
    }
    
    //#endregion

    //#region Mouse Up Event
    
    /** See Event for more details. */
    export class MouseUpEvent extends Event
    {
        Handlers: MouseUpEventHandler[] = [];

        Attach(handler: MouseUpEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: MouseUpEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: MouseUpEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.MouseUpEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class MouseUpEventHandler extends EventHandler
    {
        constructor(public Callback: (args: MouseUpEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: MouseUpEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class MouseUpEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl, public jqEvent: JQueryEventObject)
        {
            super(Sender);
        }
    }
    
    //#endregion

    //#region Mouse Move Event
    
    /** See Event for more details. */
    export class MouseMoveEvent extends Event
    {
        Handlers: MouseMoveEventHandler[] = [];

        Attach(handler: MouseMoveEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: MouseMoveEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: MouseMoveEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.MouseMoveEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class MouseMoveEventHandler extends EventHandler
    {
        constructor(public Callback: (args: MouseMoveEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: MouseMoveEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class MouseMoveEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl, public jqEvent: JQueryEventObject)
        {
            super(Sender);
        }
    }
    
    //#endregion

    //#region Splitter Move Event
    
    /** See Event for more details. */
    export class SplitterMoveEvent extends Event
    {
        Handlers: SplitterMoveEventHandler[] = [];

        Attach(handler: SplitterMoveEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: SplitterMoveEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: SplitterMoveEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.SplitterMoveEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class SplitterMoveEventHandler extends EventHandler
    {
        constructor(public Callback: (args: SplitterMoveEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: SplitterMoveEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class SplitterMoveEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Splitter Orientation Changed Event
    
    /** See Event for more details. */
    export class OrientationChangedEvent extends Event
    {
        Handlers: OrientationChangedEventHandler[] = [];

        Attach(handler: OrientationChangedEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: OrientationChangedEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: OrientationChangedEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.OrientationChangedEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class OrientationChangedEventHandler extends EventHandler
    {
        constructor(public Callback: (args: OrientationChangedEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: OrientationChangedEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class OrientationChangedEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl)
        {
            super(Sender);
        }
    }

    //#endregion

    //#region Resize Event
    
    /** See Event for more details. */
    export class ResizeEvent extends Event
    {
        Handlers: ResizeEventHandler[] = [];

        Attach(handler: ResizeEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: ResizeEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: ResizeEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.ResizeEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class ResizeEventHandler extends EventHandler
    {
        constructor(public Callback: (args: ResizeEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: ResizeEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class ResizeEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl, public jqEvent: JQueryEventObject)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Move Event
    
    /** See Event for more details. */
    export class MoveEvent extends Event
    {
        Handlers: MoveEventHandler[] = [];

        Attach(handler: MoveEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: MoveEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: MoveEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.MoveEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class MoveEventHandler extends EventHandler
    {
        constructor(public Callback: (args: MoveEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: MoveEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class MoveEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl, public jqEvent: JQueryEventObject)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Checked Change Event
    
    /** See Event for more details. */
    export class CheckedChangeEvent extends Event
    {
        Handlers: CheckedChangeEventHandler[] = [];

        Attach(handler: CheckedChangeEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: CheckedChangeEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: CheckedChangeEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.CheckedChangeEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class CheckedChangeEventHandler extends EventHandler
    {
        constructor(public Callback: (args: CheckedChangeEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: CheckedChangeEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class CheckedChangeEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Text Change Event
    
    /** See Event for more details. */
    export class TextChangeEvent extends Event
    {
        Handlers: TextChangeEventHandler[] = [];

        Attach(handler: TextChangeEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: TextChangeEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: TextChangeEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.TextChangeEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class TextChangeEventHandler extends EventHandler
    {
        constructor(public Callback: (args: TextChangeEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: TextChangeEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class TextChangeEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl, public jqEvent: JQueryEventObject)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Close Event
    
    /** See Event for more details. */
    export class CloseEvent extends Event
    {
        Handlers: CloseEventHandler[] = [];

        Attach(handler: CloseEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: CloseEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: CloseEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.CloseEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class CloseEventHandler extends EventHandler
    {
        constructor(public Callback: (args: CloseEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: CloseEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class CloseEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Show Event
    
    /** See Event for more details. */
    export class ShowEvent extends Event
    {
        Handlers: ShowEventHandler[] = [];

        Attach(handler: ShowEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: ShowEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: ShowEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.ShowEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class ShowEventHandler extends EventHandler
    {
        constructor(public Callback: (args: ShowEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: ShowEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class ShowEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Hide Event
    
    /** See Event for more details. */
    export class HideEvent extends Event
    {
        Handlers: HideEventHandler[] = [];

        Attach(handler: HideEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: HideEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: HideEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.HideEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class HideEventHandler extends EventHandler
    {
        constructor(public Callback: (args: HideEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: HideEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class HideEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Focus Event
    
    /** See Event for more details. */
    export class FocusEvent extends Event
    {
        Handlers: FocusEventHandler[] = [];

        Attach(handler: FocusEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: FocusEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: FocusEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.FocusEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class FocusEventHandler extends EventHandler
    {
        constructor(public Callback: (args: FocusEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: FocusEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. 
        Note: jqEvent is optional property. Default value: null.
    */
    export class FocusEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl, public jqEvent: JQueryEventObject = null)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Blur Event
    
    /** See Event for more details. */
    export class BlurEvent extends Event
    {
        Handlers: BlurEventHandler[] = [];

        Attach(handler: BlurEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: BlurEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: BlurEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.BlurEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class BlurEventHandler extends EventHandler
    {
        constructor(public Callback: (args: BlurEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: BlurEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. 
        Note: jqEvent is optional property. Default value: null.
    */
    export class BlurEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl, public jqEvent: JQueryEventObject = null)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Key Down Event
    
    /** See Event for more details. */
    export class KeyDownEvent extends Event
    {
        Handlers: KeyDownEventHandler[] = [];

        Attach(handler: KeyDownEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: KeyDownEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: KeyDownEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.KeyDownEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class KeyDownEventHandler extends EventHandler
    {
        constructor(public Callback: (args: KeyDownEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: KeyDownEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. 
        Note: jqEvent is optional property. Default value: null.
    */
    export class KeyDownEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl, public jqEvent: JQueryEventObject = null)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Key Press Event
    
    /** See Event for more details. */
    export class KeyPressEvent extends Event
    {
        Handlers: KeyPressEventHandler[] = [];

        Attach(handler: KeyPressEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: KeyPressEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: KeyPressEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.KeyPressEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class KeyPressEventHandler extends EventHandler
    {
        constructor(public Callback: (args: KeyPressEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: KeyPressEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. 
        Note: jqEvent is optional property. Default value: null.
    */
    export class KeyPressEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl, public jqEvent: JQueryEventObject = null)
        {
            super(Sender);
        }
    }

    //#endregion

    //#region Key Up Event
    
    /** See Event for more details. */
    export class KeyUpEvent extends Event
    {
        Handlers: KeyUpEventHandler[] = [];

        Attach(handler: KeyUpEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: KeyUpEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: KeyUpEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.KeyUpEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class KeyUpEventHandler extends EventHandler
    {
        constructor(public Callback: (args: KeyUpEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: KeyUpEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. 
        Note: jqEvent is optional property. Default value: null.
    */
    export class KeyUpEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl, public jqEvent: JQueryEventObject = null)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region ListItem Text Change Event
    
    /** See Event for more details. */
    export class ListItem_TextChangeEvent<T> extends Event
    {
        Handlers: ListItem_TextChangeEventHandler<T>[] = [];

        Attach(handler: ListItem_TextChangeEventHandler<T>): void
        {
            super.Attach(handler);
        }
        Detach(handler: ListItem_TextChangeEventHandler<T>): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: ListItem_TextChangeEventHandler<T>): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.ListItem_TextChangeEventArgs<T>)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class ListItem_TextChangeEventHandler<T> extends EventHandler
    {
        constructor(public Callback: (args: ListItem_TextChangeEventArgs<T>) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: ListItem_TextChangeEventArgs<T>)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class ListItem_TextChangeEventArgs<T> extends EventArgs
    {
        constructor(public Sender: UI.IListItem<T>)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Selected Index Change Event
    
    /** See Event for more details. */
    export class SelectedIndexChangeEvent extends Event
    {
        Handlers: SelectedIndexChangeEventHandler[] = [];

        Attach(handler: SelectedIndexChangeEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: SelectedIndexChangeEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: SelectedIndexChangeEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.SelectedIndexChangeEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class SelectedIndexChangeEventHandler extends EventHandler
    {
        constructor(public Callback: (args: SelectedIndexChangeEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: SelectedIndexChangeEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class SelectedIndexChangeEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl)
        {
            super(Sender);
        }
    }

    //#endregion
        
    //#region Value Change Event
    
    /** See Event for more details. */
    export class ValueChangeEvent extends Event
    {
        Handlers: ValueChangeEventHandler[] = [];

        Attach(handler: ValueChangeEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: ValueChangeEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: ValueChangeEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.ValueChangeEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class ValueChangeEventHandler extends EventHandler
    {
        constructor(public Callback: (args: ValueChangeEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: ValueChangeEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class ValueChangeEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Name Change Event
    
    /** See Event for more details. */
    export class NameChangeEvent extends Event
    {
        Handlers: NameChangeEventHandler[] = [];

        Attach(handler: NameChangeEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: NameChangeEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: NameChangeEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.NameChangeEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class NameChangeEventHandler extends EventHandler
    {
        constructor(public Callback: (args: NameChangeEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: NameChangeEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. */
    export class NameChangeEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl, public oldName: string)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Selection Made Event
    
    /** See Event for more details. */
    export class SelectionMadeEvent extends Event
    {
        Handlers: SelectionMadeEventHandler[] = [];

        Attach(handler: SelectionMadeEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: SelectionMadeEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: SelectionMadeEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.SelectionMadeEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class SelectionMadeEventHandler extends EventHandler
    {
        constructor(public Callback: (args: SelectionMadeEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: SelectionMadeEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details. 
        Note: jqEvent is optional property. Default value: null.
    */
    export class SelectionMadeEventArgs extends EventArgs
    {
        constructor(public Sender: UI.IControl, public jqEvent: JQueryEventObject = null)
        {
            super(Sender);
        }
    }

    //#endregion
    
    //#region Data Pushed Event
    
    /** See Event for more details. */
    export class DataPushedEvent<T> extends Event
    {
        Handlers: DataPushedEventHandler<T>[] = [];

        Attach(handler: DataPushedEventHandler<T>): void
        {
            super.Attach(handler);
        }
        Detach(handler: DataPushedEventHandler<T>): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: DataPushedEventHandler<T>): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.DataPushedEventArgs<T>)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class DataPushedEventHandler<T> extends EventHandler
    {
        constructor(public Callback: (args: DataPushedEventArgs<T>) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: DataPushedEventArgs<T>)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details.
        Note: Success paramter indicates whether the push was successful.
    */
    export class DataPushedEventArgs<T> extends EventArgs
    {
        constructor(public Sender: Data.IDataAccessor<T>, public Result: Data.IDataAccessResult<T>)
        {
            super(Sender);
        }
    }

    //#endregion
}
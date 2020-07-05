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

module Rubik.Events
{
    /* This file contains all event classes (including Events, Event Handlers and Event Args
        except for those which must be put into separate files to prevent reference loops
        (see CollectionModifiedEventArgs.d.ts). See Event interface more info on how events
        are programmed.
    */

    //#region Click Event
    
    /** See Event for more details. */
    export class ClickEvent extends Event<ClickEventArgs> { }    

    export class ClickEventHandler extends EventHandler<ClickEventArgs> { }    
    
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
    export class MouseDownEvent extends Event<MouseDownEventArgs> { }

    export class MouseDownEventHandler extends EventHandler<MouseDownEventArgs> { }
    
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
    export class MouseUpEvent extends Event<MouseUpEventArgs> { }

    export class MouseUpEventHandler extends EventHandler<MouseUpEventArgs> { }
    
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
    export class MouseMoveEvent extends Event<MouseMoveEventArgs> { }

    export class MouseMoveEventHandler extends EventHandler<MouseMoveEventArgs> { }
        
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
    export class SplitterMoveEvent extends Event<SplitterMoveEventArgs> { }

    export class SplitterMoveEventHandler extends EventHandler<SplitterMoveEventArgs> { }
        
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
    export class OrientationChangedEvent extends Event<OrientationChangedEventArgs> { }

    export class OrientationChangedEventHandler extends EventHandler<OrientationChangedEventArgs> { }
        
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
    export class ResizeEvent extends Event<ResizeEventArgs> { }

    export class ResizeEventHandler extends EventHandler<ResizeEventArgs> { }
    
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
    export class MoveEvent extends Event<MoveEventArgs> { }

    export class MoveEventHandler extends EventHandler<MoveEventArgs> { }
       
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
    export class CheckedChangeEvent extends Event<CheckedChangeEventArgs> { }

    export class CheckedChangeEventHandler extends EventHandler<CheckedChangeEventArgs> { }
    
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
    export class TextChangeEvent extends Event<TextChangeEventArgs> { }

    export class TextChangeEventHandler extends EventHandler<TextChangeEventArgs> { }
        
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
    export class CloseEvent extends Event<CloseEventArgs> { }

    export class CloseEventHandler extends EventHandler<CloseEventArgs> { }
   
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
    export class ShowEvent extends Event<ShowEventArgs> { }

    export class ShowEventHandler extends EventHandler<ShowEventArgs> { }
        
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
    export class HideEvent extends Event<HideEventArgs> { }

    export class HideEventHandler extends EventHandler<HideEventArgs> { }
       
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
    export class FocusEvent extends Event<FocusEventArgs> { }

    export class FocusEventHandler extends EventHandler<FocusEventArgs> { }
        
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
    export class BlurEvent extends Event<BlurEventArgs> { }

    export class BlurEventHandler extends EventHandler<BlurEventArgs> { }
           
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
    export class KeyDownEvent extends Event<KeyDownEventArgs> { }

    export class KeyDownEventHandler extends EventHandler<KeyDownEventArgs> { }
       
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
    export class KeyPressEvent extends Event<KeyPressEventArgs> { }

    export class KeyPressEventHandler extends EventHandler<KeyPressEventArgs> { }
    
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
    export class KeyUpEvent extends Event<KeyUpEventArgs> { }

    export class KeyUpEventHandler extends EventHandler<KeyUpEventArgs> { }
    
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
    
      
    //#region Selected Index Change Event
    
    /** See Event for more details. */
    export class SelectedIndexChangeEvent extends Event<SelectedIndexChangeEventArgs> { }

    export class SelectedIndexChangeEventHandler extends EventHandler<SelectedIndexChangeEventArgs> { }
       
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
    export class ValueChangeEvent extends Event<ValueChangeEventArgs> { }

    export class ValueChangeEventHandler extends EventHandler<ValueChangeEventArgs> { }
        
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
    export class NameChangeEvent extends Event<NameChangeEventArgs> { }

    export class NameChangeEventHandler extends EventHandler<NameChangeEventArgs> { }
        
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
    export class SelectionMadeEvent extends Event<SelectionMadeEventArgs> { }

    export class SelectionMadeEventHandler extends EventHandler<SelectionMadeEventArgs> { }
        
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

    export class JQueryEvent extends Event<JQueryEventArgs> { }

    export class JQueryEventHandler extends EventHandler<JQueryEventArgs> { }

    export class JQueryEventArgs extends EventArgs {
        constructor(public Sender: UI.IControl, public jqEvent: JQueryEventObject = null) {
            super(Sender);
        }
    }

    export class SimpleEvent extends Event<EventArgs> { }

    export class SimpleEventHandler extends EventHandler<EventArgs> { }

    
   
}
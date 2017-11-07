/// <reference path="Classes/Control.d.ts" />
declare module TSUI.UI {
    /** This is used to keep global track of the number of open windows so that new
    windows can have z-index set so they are on top. */
    var OpenWindows: number;
    /** The time when the tab key was last pressed. Used in tab key overriding. */
    var JustUsedTabKeyTime: number;
    /** Keeps global track of which control currently has focus. Used in global keyboard
    events to invoke them on the correct control. */
    var CurrentFocusedControl: IControl;
    /** The current max allocated tabindex so new controls can have new tab index
    assigned. */
    var _currTabIndex: number;
    /** This event is attached the the global document mouse up event.
    This event handles tab key management and then passes the event off to the
    currently focused control.
    */
    var Global_MouseUpEvent: TSUI.Events.MouseUpEvent;
    /** This event is attached the the global document mouse move event.
    This event reduces the number of mouse move events that are attached to improve
    performance by reducing the load on the DOM. */
    var Global_MouseMoveEvent: TSUI.Events.MouseMoveEvent;
    /** Whether to prevent the tab key event. This used primarily by List controls
    which use out of order tab indexing so override tab key functionality. */
    var preventTabKey: boolean;
    /** Each control attaches its own key down event. This method is called by the key
    down handling control immediately before the control handles the event. The return
    value is currently irrelevant. */
    var OnKeyDown_Global_First: (jqEvent: JQueryEventObject) => boolean;
    /** Each control attaches its own key down event. This method is called by the key
    down handling control immediately after the control handles the event. The return
    value is returned by the handler. */
    var OnKeyDown_Global_Last: (jqEvent: JQueryEventObject) => boolean;
}

var TSUI;
(function (TSUI) {
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
    /// <reference path="Classes/Control.ts" />
    (function (UI) {
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
        UI.Global_MouseUpEvent = new TSUI.Events.MouseUpEvent();

        /** This event is attached the the global document mouse move event.
        This event reduces the number of mouse move events that are attached to improve
        performance by reducing the load on the DOM. */
        UI.Global_MouseMoveEvent = new TSUI.Events.MouseMoveEvent();

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
                    TSUI.StopEvent(jqEvent);
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
        $(document).on(UI.Control.OnMouseUpEventName, function (event) {
            //if (false && _tapStartTime + 10 < Date.now())
            //{
            //   // _tapTarget.click();
            //    _tapTarget = null;
            //    _tapStartTime = -1;
            //}
            //else
            //{
            event = TSUI.standardiseEvent(event);

            UI.Global_MouseUpEvent.Invoke(new TSUI.Events.MouseUpEventArgs(null, event));

            if (!event.isPropagationStopped() && UI.CurrentFocusedControl !== null && !$(event.target).is("input") && !$(event.target).is("select")) {
                UI.CurrentFocusedControl.Blur();
            }
            //}
        });

        /** Adds and handles the document mouse move event.
        Standardises the event then invokes Global_MouseMoveEvent. */
        $(document).on(UI.Control.OnMouseMoveEventName, function (event) {
             {
                event = TSUI.standardiseEvent(event);
                UI.Global_MouseMoveEvent.Invoke(new TSUI.Events.MouseMoveEventArgs(null, event));
            }
        });

        /** Adds and handles the document key up event.
        If the tab key is pressed it defocuses the currently focused control. */
        $(document).on("keyup", function (event) {
            if (!event.isPropagationStopped() && UI.CurrentFocusedControl !== null && event.keyCode === 27) {
                UI.CurrentFocusedControl.Blur();
            }
        });
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

/** Adds the global background which hides the "Sorry this don't work" message and
standardises the page background color across browsers. */
$(function () {
    $("body").append("<div class=\"Bg\">");
});

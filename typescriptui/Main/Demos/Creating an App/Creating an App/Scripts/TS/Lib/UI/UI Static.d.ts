/// <reference path="Classes/Control.d.ts" />
declare module TSUI.UI {
    var OpenWindows: number;
    var JustUsedTabKeyTime: number;
    var CurrentFocusedControl: IControl;
    var _currTabIndex: number;
    var Global_MouseUpEvent: TSUI.Events.MouseUpEvent;
    var Global_MouseMoveEvent: TSUI.Events.MouseMoveEvent;
    var preventTabKey: boolean;
    var OnKeyDown_Global_First: (jqEvent: JQueryEventObject) => boolean;
    var OnKeyDown_Global_Last: (jqEvent: JQueryEventObject) => boolean;
}

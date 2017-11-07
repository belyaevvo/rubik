/// <reference path="../../../UI/Interfaces/IControl.d.ts" />
declare module TSUI.UI {
    class ControlDescriptionLoader {
        /** Loads the specified description.
        @param descrip The control description to load.
        @param eventHanldersObj The object which has all the event handler methods on it (including methods for all child controls).
        @param parent The parent control to add the created control to.
        @param control The existing control to use as the root control of the description.
        @returns True if the description is completely, successfully loaded.
        */
        static LoadDescription(descrip: IControlDescription, eventHandlersObj: any, parent?: UI.IControl, control?: UI.IControl): boolean;
    }
    interface IControlDescription {
        Name: string;
        Type: new() => UI.IControl;
        Properties?: {
            Name: string;
            Values: any[];
        }[];
        Events?: {
            Name: string;
            HandlerType: new(Callback: (args: TSUI.Events.IEventArgs) => void, Context: any) => TSUI.Events.IEventHandler;
            HandlerName: string;
        }[];
        Children?: IControlDescription[];
    }
}

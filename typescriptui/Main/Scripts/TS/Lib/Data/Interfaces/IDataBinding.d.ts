/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.
 - 24/Aug/13 : Fleshed out interface to the specification.
 - 28/Aug/13 : - Added Control, UpdateDelayTime properties
               - Changed Control, PropertyName and Accessor to TSUI style get/set property methods
 - 29/Aug/13 : - Added DelayModes reference
               - Added DelayModes related Update code

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Enums/BindingDirections.ts" />
/// <reference path="../Enums/DelayModes.ts" />
/// <reference path="IDataAdapter.d.ts" />
/// <reference path="IDataAccessor.d.ts" />
/// <reference path="../../Events/Classes/UpdateFromUserEvent.ts" />
/// <reference path="../../Events/Classes/UpdateFromSourceEvent.ts" />
/// <reference path="../../Collections/Classes/List.ts" />
/// <reference path="../../UI/Interfaces/IControl.d.ts" />

declare module TSUI.Data
{
    /** Defines the structure for a data binding. Data bindings bind a particular Control's property to a data source and handle pull / pushing data to/from that source. 
        I: Specifies the type of data sent/received to/from the server.
        O: Specifies the type of data out of the data adapter.
    */
    export interface IDataBinding<I,O>
    {
        /** The control to bind. */
        Control(value?: UI.IControl): UI.IControl;
        /** The name of the method to call to set the control property. */
        PropertyName(value?: string): string;
        /** The data accessor to use for this binding. */
        Accessor(value?: IDataAccessor<I>): IDataAccessor<I>;
        /** The data adapter to use for this binding. */
        Adapter: IDataAdapter<I, O>;
        /** A list of property names (in increasing depth order) that specify what property of the data from the adapter to bind to. */
        DataProperty: Collections.IList<string>;
        /** The binding direction to use for this binding. */
        BindingDirection: BindingDirections;

        /** The Update Delay Mode to use for this binding. */
        DelayMode: DelayModes;

        /** Time to delay between sending access requests to the server to reduce network usage and JS overload. Useful for data bindings such as those bound to text boxes. */
        UpdateDelayTime: number;

        /** Wraps the property (method) in a special controlled method, maintaining a copy of the original. */
        Bind(): boolean;
        /** Unwraps the property (method). */
        Unbind(): boolean;

        /** Causes the data binding to update using the direction specified in BindingDirection.
            @returns A boolean indicating whether the update was successful or not.
        */
        Update(): boolean;
        /** Causes the data binding to update from the source.
            @returns A boolean indicating whether the update was successful or not.
        */
        UpdateFromSource(): boolean;
        /** Causes the data binding to update from the user.
            @returns A boolean indicating whether the update was successful or not.
        */
        UpdateFromUser(): boolean;
        /** Fired when the binding updates from the source. */
        OnUpdateFromSource: Events.UpdateFromSourceEvent<I, O>;
        /** Fired when the binding updates from the user. */
        OnUpdateFromUser: Events.UpdateFromUserEvent<I, O>;
    }
}
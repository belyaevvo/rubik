/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.
 - 24/Aug/13 : Fleshed out interface to the specification.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Enums/BindingDirections.d.ts" />
/// <reference path="IDataAdapter.d.ts" />
/// <reference path="../../Events/Classes/UpdateFromUserEvent.d.ts" />
/// <reference path="../../Events/Classes/UpdateFromSourceEvent.d.ts" />
/// <reference path="../../Collections/Classes/List.d.ts" />

declare module TSUI.Data
{
    /** Defines the structure for a data binding. Data bindings bind a particular Control's property to a data source and handle pull / pushing data to/from that source. 
        I: Specifies the type of data sent/received to/from the server.
        O: Specifies the type of data out of the data adapter.
    */
    export interface IDataBinding<I,O>
    {
        /** The name of the method to call to set the control property. */
        PropertyName: string;
        /** The data accessor to use for this binding. */
        Accessor: IDataAccessor<I>;
        /** The data adapter to use for this binding. */
        Adapter: IDataAdapter<I, O>;
        /** A list of property names (in increasing depth order) that specify what property of the data from the adapter to bind to. */
        DataProperty: Collections.IList<string>;
        /** The binding direction to use for this binding. */
        BindingDirection: BindingDirections;
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
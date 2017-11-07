/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 31 21:05 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 31/Jul/13 : Initial version.
 - 25/Aug/13 : Fleshed out to meet spec.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Collections/Interfaces/IList.d.ts" />
/// <reference path="IBindingGroup.d.ts" />

declare module TSUI.Data
{
    /** Defines the structure for a binding collection. A binding collection contains a list of the binding groups for a control. */
    export interface IBindingCollection
    {
        /** The list of binding groups in the collection. */
        BindingGroups: Collections.IList<IBindingGroup>;
        /** Updates all the binding groups in the collection.
            @returns Whether all the bindings updated successfully.
        */
        UpdateAllBindings(): boolean;
    }
}
/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 31 21:05 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 31/Jul/13 : Initial version.
 - 25/Aug/13 : Fleshed out to meet spec.
 - 28/Aug/13 : Corrected IDataBindng.d.ts to IDataBinding.d.ts

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Collections/Interfaces/IList.d.ts" />
/// <reference path="IDataBinding.d.ts" />
/// <reference path="IDataUpdater.d.ts" />

declare module TSUI.Data
{
    /** Defines the structure for a binding group. A binding group is a collection of data bindings (one or more) and an associated updater. It provides an easy way to block update data bindings. */
    export interface IBindingGroup
    {
        /** The list of data bindings in the group. */
        DataBindings: Collections.IList<IDataBinding<any, any>>;
        /** The data updater associated with the group. */
        Updater: IDataUpdater;
        /** Forces the data updater to update all the bindings in the group. 
            @param abortOnFailure Whether to abort updating bindings if a binding fails to update.
            @returns Whether the update completed successfully (all bindings must complete successfuly for this to be true.)
        */
        UpdateAllBindings(abortOnFailure?: boolean): boolean;
    }
}
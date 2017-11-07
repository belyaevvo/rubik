/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Aug 28 22:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 28/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Collections/Interfaces/IList.d.ts" />
/// <reference path="../Interfaces/IDataBinding.d.ts" />
/// <reference path="../Interfaces/IDataUpdater.d.ts" />
/// <reference path="../Interfaces/IBindingGroup.d.ts" />

module TSUI.Data
{
    /** Defines the structure for a binding group. A binding group is a collection of data bindings (one or more) and an associated updater. It provides an easy way to block update data bindings. */
    export class BindingGroup implements IBindingGroup
    {
        /** The list of data bindings in the group. */
        DataBindings: Collections.IList<IDataBinding<any, any>>;
        /** The data updater associated with the group. */
        Updater: IDataUpdater;

        /** Creates a new BindingGroup.
            @returns A new BindingGroup.
        */
        constructor();
        /** Creates a new BindingGroup.
            @param updater The data updater to use for the group.
            @returns A new BindingGroup.
        */
        constructor(updater: IDataUpdater);
        /** Creates a new BindingGroup.
            @param updater The data updater to use for the group.
            @param bindings An existing array of data bindings to include in the group.
            @returns A new BindingGroup.
        */
        constructor(updater: IDataUpdater, bindings: IDataBinding<any, any>[]);
        
        /** Creates a new BindingGroup.
            @param updater The data updater to use for the group.
            @param bindings An existing array of data bindings to include in the group.
            @returns A new BindingGroup.
        */
        constructor(updater: IDataUpdater = null, bindings: IDataBinding<any, any>[] = [])
        {
            if(updater !== null)
            {
                this.Updater = updater;
            }
            else
            {
                this.Updater = new DataUpdater(null, -1);
            }

            this.Updater.GetBindings = () =>
            {
                return this.DataBindings;
            };

            this.DataBindings = new Collections.List<IDataBinding<any, any>>(bindings);
        }

        /** Forces the data updater to update all the bindings in the group. 
            @param abortOnFailure Whether to abort updating bindings if a binding fails to update.
            @returns Whether the update completed successfully (all bindings must complete successfuly for this to be true.)
        */
        UpdateAllBindings(abortOnFailure: boolean = false): boolean
        {
            return this.Updater.UpdateBindings(abortOnFailure) === 0;
        }
    }
}
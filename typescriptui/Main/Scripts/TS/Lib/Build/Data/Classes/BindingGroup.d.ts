/// <reference path="../../Collections/Interfaces/IList.d.ts" />
/// <reference path="../../Data/Interfaces/IDataBinding.d.ts" />
/// <reference path="../../Data/Interfaces/IDataUpdater.d.ts" />
/// <reference path="../../Data/Interfaces/IBindingGroup.d.ts" />
declare module TSUI.Data {
    /** Defines the structure for a binding group. A binding group is a collection of data bindings (one or more) and an associated updater. It provides an easy way to block update data bindings. */
    class BindingGroup implements Data.IBindingGroup {
        /** The list of data bindings in the group. */
        public DataBindings: TSUI.Collections.IList<Data.IDataBinding<any, any>>;
        /** The data updater associated with the group. */
        public Updater: Data.IDataUpdater;
        /** Creates a new BindingGroup.
        @returns A new BindingGroup.
        */
        constructor();
        /** Creates a new BindingGroup.
        @param updater The data updater to use for the group.
        @returns A new BindingGroup.
        */
        constructor(updater: Data.IDataUpdater);
        /** Creates a new BindingGroup.
        @param updater The data updater to use for the group.
        @param bindings An existing array of data bindings to include in the group.
        @returns A new BindingGroup.
        */
        constructor(updater: Data.IDataUpdater, bindings: Data.IDataBinding<any, any>[]);
        /** Forces the data updater to update all the bindings in the group.
        @param abortOnFailure Whether to abort updating bindings if a binding fails to update.
        @returns Whether the update completed successfully (all bindings must complete successfuly for this to be true.)
        */
        public UpdateAllBindings(abortOnFailure?: boolean): boolean;
    }
}

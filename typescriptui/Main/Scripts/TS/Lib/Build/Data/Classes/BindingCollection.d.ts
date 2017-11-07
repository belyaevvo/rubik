/// <reference path="../../Collections/Interfaces/IList.d.ts" />
/// <reference path="../../Data/Interfaces/IBindingGroup.d.ts" />
/// <reference path="../../Data/Interfaces/IBindingCollection.d.ts" />
declare module TSUI.Data {
    /** Defines the structure for a binding collection. A binding collection contains a list of the binding groups for a control. */
    class BindingCollection implements Data.IBindingCollection {
        /** The list of binding groups in the collection. */
        public BindingGroups: TSUI.Collections.IList<Data.IBindingGroup>;
        /** Updates all the binding groups in the collection.
        @returns Whether all the bindings updated successfully.
        */
        public UpdateAllBindings(): boolean;
    }
}

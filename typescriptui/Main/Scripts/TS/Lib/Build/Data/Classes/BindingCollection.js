var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Aug 28 22:56 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 28/Aug/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Collections/Interfaces/IList.d.ts" />
    /// <reference path="../Interfaces/IBindingGroup.d.ts" />
    /// <reference path="../Interfaces/IBindingCollection.d.ts" />
    (function (Data) {
        /** Defines the structure for a binding collection. A binding collection contains a list of the binding groups for a control. */
        var BindingCollection = (function () {
            function BindingCollection() {
                /** The list of binding groups in the collection. */
                this.BindingGroups = new TSUI.Collections.List();
            }
            /** Updates all the binding groups in the collection.
            @returns Whether all the bindings updated successfully.
            */
            BindingCollection.prototype.UpdateAllBindings = function () {
                var OK = true;

                var len = this.BindingGroups.Count();
                for (var i = 0; i < len; i++) {
                    OK = this.BindingGroups.ElementAt(i).UpdateAllBindings() && OK;
                }

                return OK;
            };
            return BindingCollection;
        })();
        Data.BindingCollection = BindingCollection;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

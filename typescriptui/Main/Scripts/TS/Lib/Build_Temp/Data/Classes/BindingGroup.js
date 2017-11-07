var TSUI;
(function (TSUI) {
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
    (function (Data) {
        /** Defines the structure for a binding group. A binding group is a collection of data bindings (one or more) and an associated updater. It provides an easy way to block update data bindings. */
        var BindingGroup = (function () {
            /** Creates a new BindingGroup.
            @param updater The data updater to use for the group.
            @param bindings An existing array of data bindings to include in the group.
            @returns A new BindingGroup.
            */
            function BindingGroup(updater, bindings) {
                if (typeof updater === "undefined") { updater = null; }
                if (typeof bindings === "undefined") { bindings = []; }
                var _this = this;
                if (updater !== null) {
                    this.Updater = updater;
                } else {
                    this.Updater = new Data.DataUpdater(null, -1);
                }

                this.Updater.GetBindings = function () {
                    return _this.DataBindings;
                };

                this.DataBindings = new TSUI.Collections.List(bindings);
            }
            /** Forces the data updater to update all the bindings in the group.
            @param abortOnFailure Whether to abort updating bindings if a binding fails to update.
            @returns Whether the update completed successfully (all bindings must complete successfuly for this to be true.)
            */
            BindingGroup.prototype.UpdateAllBindings = function (abortOnFailure) {
                if (typeof abortOnFailure === "undefined") { abortOnFailure = false; }
                return this.Updater.UpdateBindings(abortOnFailure) === 0;
            };
            return BindingGroup;
        })();
        Data.BindingGroup = BindingGroup;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

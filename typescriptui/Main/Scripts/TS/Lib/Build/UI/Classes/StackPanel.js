var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/IStackPanel.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var StackPanel = (function (_super) {
            __extends(StackPanel, _super);
            function StackPanel() {
                _super.call(this);
                this.Rows = new TSUI.Collections.List();

                this._rootElement.addClass("StackPanel");

                this.Rows.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._OnRows_Modified, this));

                this.Orientation(UI.StackPanelOrientations.Vertical);
            }
            StackPanel.prototype._OnRows_Modified = function (eventArgs) {
                switch (eventArgs.Modification) {
                    case TSUI.Events.CollectionModifications.Add:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            this.Children.Add(eventArgs.ModifiedElements.ElementAt(i));
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Remove:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            this.Children.Remove(eventArgs.ModifiedElements.ElementAt(i));
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        this.Children.Clear();
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            this.Children.Add(eventArgs.ModifiedElements.ElementAt(i));
                        }
                        break;
                }
            };

            StackPanel.prototype.Orientation = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (value === UI.StackPanelOrientations.Horizontal) {
                        this.RemoveClass("Vertical");
                        this.AddClass("Horizontal");
                    } else {
                        this.RemoveClass("Horizontal");
                        this.AddClass("Vertical");
                    }
                }
                return this.HasClass("Horizontal") ? UI.StackPanelOrientations.Horizontal : UI.StackPanelOrientations.Vertical;
            };
            return StackPanel;
        })(UI.Control);
        UI.StackPanel = StackPanel;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

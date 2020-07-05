/// <reference path="Panel.ts" />
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        /** The orientations of stacking in a stack panel. */
        let StackPanelOrientations;
        (function (StackPanelOrientations) {
            /** Horizontally stack items i.e. in stack in columns */
            StackPanelOrientations[StackPanelOrientations["Horizontal"] = 0] = "Horizontal";
            /** Vertically stack items i.e. in stack in rows */
            StackPanelOrientations[StackPanelOrientations["Vertical"] = 1] = "Vertical";
        })(StackPanelOrientations = UI.StackPanelOrientations || (UI.StackPanelOrientations = {}));
        class StackPanel extends UI.Panel {
            constructor() {
                super();
                this._rootElement.addClass("StackPanel");
                this.Orientation(StackPanelOrientations.Vertical);
            }
            Orientation(value = null) {
                if (value !== null) {
                    if (value === StackPanelOrientations.Horizontal) {
                        this.RemoveClass("Vertical");
                        this.AddClass("Horizontal");
                    }
                    else {
                        this.RemoveClass("Horizontal");
                        this.AddClass("Vertical");
                    }
                }
                return this.HasClass("Horizontal") ? StackPanelOrientations.Horizontal : StackPanelOrientations.Vertical;
            }
            OnChildrenModified(args) {
                for (var i = 0; i < this.Children.Count(); i++) {
                    this.Children.ElementAt(i).AddClass("Row");
                }
                super.OnChildrenModified(args);
            }
        }
        UI.StackPanel = StackPanel;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=StackPanel.js.map
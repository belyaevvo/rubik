/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        class GridPanel extends UI.Panel {
            constructor() {
                super();
                this.Columns = 0;
                this._rootElement.addClass("GridPanel");
                //this.Children.OnModified.Attach(new Collections.CollectionModifiedEventHandler<IControl>(this.OnChildrenModified, this));
            }
            ConstructDOM(parent, onComplete = null) {
                var columns = this.Columns > 0 ? this.Columns : 1;
                var rows = ((this.Children.Count() / columns) | 0);
                this._rootElement.css("grid-template-columns", Rubik.repeat("auto ", columns));
                this._rootElement.css("-ms-grid-columns", Rubik.repeat("1fr 1em ", columns - 1) + "1fr ");
                this._rootElement.css("-ms-grid-rows", Rubik.repeat("1fr 1em ", rows - 1) + "1fr ");
                super.ConstructDOM(parent, onComplete);
            }
            OnChildrenModified(args) {
                var columns = this.Columns > 0 ? this.Columns : 1;
                for (var i = 0; i < this.Children.Count(); i++) {
                    var col = (i % columns) * 2 + 1;
                    var row = ((i / columns) | 0) * 2 + 1;
                    this.Children.ElementAt(i).ApplyStyle("-ms-grid-column", col.toString());
                    this.Children.ElementAt(i).ApplyStyle("-ms-grid-row", row.toString());
                }
                super.OnChildrenModified(args);
            }
        }
        UI.GridPanel = GridPanel;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=GridPanel.js.map
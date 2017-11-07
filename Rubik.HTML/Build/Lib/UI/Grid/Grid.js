/// <reference path="../Control.ts" />
/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts" />
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var Grid = (function (_super) {
            __extends(Grid, _super);
            function Grid() {
                var _this = _super.call(this) || this;
                _this._rootElement.addClass("Grid");
                _this.PanelRows = new UI.Panel();
                _this.PanelCols = new UI.Panel();
                //this.PanelRows.AddClass("Panel1");
                //this.PanelCols.AddClass("Panel2");
                _this.Children.Add(_this.PanelRows);
                _this.Children.Add(_this.PanelCols);
                return _this;
            }
            return Grid;
        }(UI.Control));
        UI.Grid = Grid;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=Grid.js.map
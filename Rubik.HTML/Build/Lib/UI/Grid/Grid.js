/// <reference path="../Control.ts" />
/// <reference path="DataManager.ts" />
/// <reference path="SizeManager.ts" />
/// <reference path="GridCell.ts" />
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
        var Grid = /** @class */ (function (_super) {
            __extends(Grid, _super);
            function Grid() {
                var _this = _super.call(this) || this;
                _this.DataManager = new UI.DataManager();
                _this.SizeManager = new UI.SizeManager();
                _this.SizeManager.DefaultColWidth = 60;
                _this.SizeManager.DefaultRowHeight = 22;
                _this._rootElement.addClass("Grid");
                _this.PanelCols = new UI.Panel();
                _this.PanelRows = new UI.Panel();
                _this.ScrollPanel = new UI.Panel();
                _this.CellsPanel = new UI.Panel();
                //this.PanelRows.AddClass("Panel1");
                _this.CellsPanel.AddClass("GridCellsPanel");
                _this.ScrollPanel.AddClass("GridScrollPanel");
                _this.PanelCols.Height(new UI.CSSNumber(_this.SizeManager.DefaultRowHeight));
                _this.PanelRows.Width(new UI.CSSNumber(_this.SizeManager.DefaultColWidth));
                _this.ScrollPanel.Children.Add(_this.CellsPanel);
                _this.Children.Add(_this.PanelRows);
                _this.Children.Add(_this.PanelCols);
                _this.Children.Add(_this.ScrollPanel);
                _this.OnResize.Attach(new Rubik.Events.ResizeEventHandler(_this._This_Resized, _this));
                _this.OnResize.Attach(new Rubik.Events.ShowEventHandler(_this._This_Show, _this));
                _this.ScrollPanel.OnScroll.Attach(new Rubik.Events.JQueryEventHandler(_this._Scroll, _this));
                _this.DataChanged();
                return _this;
            }
            Grid.prototype._This_Resized = function (eventArgs) {
                this.PanelRows.Height(new UI.CSSNumber(this.ActualHeight()));
                this.PanelCols.MarginLeft(new UI.CSSNumber(this.PanelRows.ActualWidth()));
                this.PanelCols.Width(new UI.CSSNumber(this.ActualWidth() - this.PanelRows.ActualWidth()));
                this.ScrollPanel.MarginTop(new UI.CSSNumber(this.PanelCols.ActualHeight()));
                this.ScrollPanel.MarginLeft(new UI.CSSNumber(this.PanelRows.ActualWidth()));
                this.ScrollPanel.Height(new UI.CSSNumber(this.ActualHeight() - this.PanelCols.ActualHeight()));
                this.ScrollPanel.Width(new UI.CSSNumber(this.ActualWidth() - this.PanelRows.ActualWidth()));
                this.Draw();
            };
            Grid.prototype._This_Show = function (eventArgs) {
                //this.DataChanged();
            };
            Grid.prototype._Scroll = function (eventArgs) {
                this.Draw();
            };
            Grid.prototype.DataChanged = function () {
                this.SizeManager.Initialize(this.DataManager.GetColsCount(), this.DataManager.GetRowsCount());
                this.CellsPanel.Height(new UI.CSSNumber(this.SizeManager.GetTotalHeight()));
                this.CellsPanel.Width(new UI.CSSNumber(this.SizeManager.GetTotalWidth()));
                //this.Draw();            
            };
            Grid.prototype.Draw = function () {
                var scrollTop = this.ScrollPanel._rootElement.scrollTop();
                var scrollLeft = this.ScrollPanel._rootElement.scrollLeft();
                var _a = this.SizeManager.GetVisibleRows(scrollTop, this.ScrollPanel.ActualHeight() + scrollTop), startRow = _a[0], endRow = _a[1];
                var _b = this.SizeManager.GetVisibleCols(scrollLeft, this.ScrollPanel.ActualWidth() + scrollLeft), startCol = _b[0], endCol = _b[1];
                this.CellsPanel.Children.Clear();
                var cells = new Rubik.Collections.List();
                for (var col = startCol; col <= endCol; col++) {
                    for (var row = startRow; row <= endRow; row++) {
                        var cell = new UI.GridCell();
                        cell.Text(this.DataManager.GetCellValue(col, row));
                        cell.Left(new UI.CSSNumber(this.SizeManager.GetColLeft(col)));
                        cell.Width(new UI.CSSNumber(this.SizeManager.GetColWidth(col)));
                        cell.Top(new UI.CSSNumber(this.SizeManager.GetRowTop(row)));
                        cell.Height(new UI.CSSNumber(this.SizeManager.GetRowHeight(row)));
                        //this.CellsPanel.Children.Add(cell);
                        cells.Add(cell);
                    }
                }
                this.CellsPanel.Children.AddRange(cells);
            };
            return Grid;
        }(UI.Control));
        UI.Grid = Grid;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=Grid.js.map
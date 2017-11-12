/// <reference path="../Control.ts" />
/// <reference path="DataManager.ts" />
/// <reference path="SizeManager.ts" />
/// <reference path="GridCell.ts" />
/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts" />

module Rubik.UI
{
    export class Grid extends Control {

        PanelRows: IPanel;
        PanelCols: IPanel;
        ScrollPanel: Panel;
        CellsPanel: IPanel;
        DataManager: DataManager = new DataManager();
        SizeManager: SizeManager = new SizeManager();

        constructor() {
            super();

            this.SizeManager.DefaultColWidth = 30;
            this.SizeManager.DefaultRowHeight = 30;

            this._rootElement.addClass("Grid");            

            this.PanelCols = new Panel();
            this.PanelRows = new Panel();
            this.ScrollPanel = new Panel();
            this.CellsPanel = new Panel();
            
            
            //this.PanelRows.AddClass("Panel1");
            this.ScrollPanel.AddClass("ScrollPanel");

            this.PanelCols.Height(new CSSNumber(30));
            this.PanelRows.Width(new CSSNumber(30));
           

            this.ScrollPanel.Children.Add(this.CellsPanel);

            this.Children.Add(this.PanelRows);
            this.Children.Add(this.PanelCols);            
            this.Children.Add(this.ScrollPanel);            
            

            this.OnResize.Attach(new Events.ResizeEventHandler(this._This_Resized, this));
            this.OnResize.Attach(new Events.ShowEventHandler(this._This_Show, this));
            this.ScrollPanel.OnScroll.Attach(new Events.JQueryEventHandler(this._Scroll, this));

            this.DataChanged();
            
        }

        _This_Resized(eventArgs: Events.ResizeEventArgs) {
            this.PanelRows.Height(new CSSNumber(this.ActualHeight()));
            this.PanelCols.MarginLeft(new CSSNumber(this.PanelRows.ActualWidth()))
            this.PanelCols.Width(new CSSNumber(this.ActualWidth() - this.PanelRows.ActualWidth()));
            this.ScrollPanel.MarginTop(new CSSNumber(this.PanelCols.ActualHeight()))
            this.ScrollPanel.MarginLeft(new CSSNumber(this.PanelRows.ActualWidth()))
            this.ScrollPanel.Height(new CSSNumber(this.ActualHeight() - this.PanelCols.ActualHeight()));
            this.ScrollPanel.Width(new CSSNumber(this.ActualWidth() - this.PanelRows.ActualWidth()));
            this.Draw();
        }

        _This_Show(eventArgs: Events.ShowEventArgs) {
            //this.DataChanged();
        }

        _Scroll(eventArgs: Events.JQueryEventArgs) {                  
            this.Draw();
        }

        DataChanged(): void {
            this.SizeManager.Initialize(this.DataManager.GetColsCount(), this.DataManager.GetRowsCount());
            alert(this.SizeManager.GetTotalHeight());
            this.CellsPanel.Height(new CSSNumber(this.SizeManager.GetTotalHeight()));
            this.CellsPanel.Width(new CSSNumber(this.SizeManager.GetTotalWidth()));
            //this.Draw();            
        }


        Draw(): void {
            var scrollTop: number = this.ScrollPanel._rootElement.scrollTop();            
            var scrollLeft: number = this.ScrollPanel._rootElement.scrollLeft();            
            var [startRow, endRow]: [number, number] = this.SizeManager.GetVisibleRows(scrollTop, this.ScrollPanel.ActualHeight() + scrollTop);            
            var [startCol, endCol]: [number, number] = this.SizeManager.GetVisibleCols(scrollLeft, this.ScrollPanel.ActualWidth() + scrollLeft);         
            
            this.CellsPanel.Children.Clear();

            for (var col = startCol; col <= endCol; col++) {
                for (var row = startRow; row <= endRow; row++) {
                    var cell: GridCell = new GridCell();
                    cell.Text(this.DataManager.GetCellValue(col, row));              
                    cell.Left(new CSSNumber(this.SizeManager.GetColLeft(col)))
                    cell.Width(new CSSNumber(this.SizeManager.GetColWidth(col)));
                    cell.Top(new CSSNumber(this.SizeManager.GetRowTop(row)));
                    cell.Height(new CSSNumber(this.SizeManager.GetRowHeight(row)));
                    this.CellsPanel.Children.Add(cell);
                }
            }
        }
    }
}
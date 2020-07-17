/// <reference path="../ContentControl.ts" />
/// <reference path="../../Data/Grid/IGridDataSource.d.ts" />
/// <reference path="SizeManager.ts" />
/// <reference path="GridCell.ts" />
/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts" />


module Rubik.UI
{    

    export class Grid extends ContentControl {

        protected PanelRows: Panel;
        protected PanelCols: Panel;
        protected ScrollPanel: Panel;
        protected CellsPanel: Panel;
        protected DivScrollPanel: JQuery;
        protected DivCellsPanel: JQuery;
        protected DivColsHeaderPanel: JQuery;
        protected DivRowsHeaderPanel: JQuery;
        protected DivCrossPanel: JQuery;        
        protected SizeManager: SizeManager = new SizeManager();
        protected FixedAreaSizeManager: SizeManager = new SizeManager();
        protected expandlastcolumn: boolean = false;
        protected changestate: boolean = true;
        private dataSource: Data.IGridDataSource;

        get DataSource(): Data.IGridDataSource {
            return this.dataSource;
        }

        set DataSource(dataSource: Data.IGridDataSource) {
            if (this.dataSource != null) {
                this.dataSource.DataChanged.Detach(new Events.EventHandler<Events.EventArgs>(this.DataChanged, this));
            }
            this.dataSource = dataSource;
            if (this.dataSource != null) {
                this.dataSource.DataChanged.Attach(new Events.EventHandler<Events.EventArgs>(this.DataChanged, this));
            }             
        }

        get ExpandLastColumn(): boolean {
            return this.expandlastcolumn;
        }

        set ExpandLastColumn(expand: boolean) {
            this.expandlastcolumn=expand;
        }

        constructor() {
            super();            
            //this.OptimiseConstructForGraphics = true;
            this.SizeManager.DefaultColWidth = 130;
            this.SizeManager.DefaultRowHeight = 22;
            this.FixedAreaSizeManager.DefaultColWidth = 130;
            this.FixedAreaSizeManager.DefaultRowHeight = 22;

            this._rootElement.addClass("Grid");            

            this.HandleChainEvents(false);

            this.PanelCols = new Panel();                        
            this.PanelCols.HandleChainEvents(false);
            this.PanelRows = new Panel();
            this.PanelRows.HandleChainEvents(false);
            this.ScrollPanel = new Panel();
            this.ScrollPanel.HandleChainEvents(false);
            this.CellsPanel = new Panel();
            this.CellsPanel.HandleChainEvents(false);
            this.DivScrollPanel = $("<div class=\"Control Panel GridScrollPanel\">");
            this.DivCellsPanel = $("<div class=\"Control Panel GridCellsPanel\">");
            this.DivColsHeaderPanel = $("<div class=\"Control Panel GridColsHeaderPanel\">");
            this.DivRowsHeaderPanel = $("<div class=\"Control Panel GridRowsHeaderPanel\">");
            this.DivCrossPanel = $("<div class=\"Control Panel GridCrossPanel\">");
            
            
            //this.PanelRows.AddClass("Panel1");
            this.CellsPanel.AddClass("GridCellsPanel");
            this.ScrollPanel.AddClass("GridScrollPanel");

            this.PanelCols.Height(this.SizeManager.DefaultRowHeight);
            this.PanelRows.Width(this.SizeManager.DefaultColWidth);
           

            this.ScrollPanel.Children.Add(this.PanelRows);
            this.ScrollPanel.Children.Add(this.CellsPanel);
            //this.DivScrollPanel.append(this.DivCellsPanel);            
            this.PanelRows._rootElement.append(this.DivCrossPanel);
            this.PanelRows._rootElement.append(this.DivRowsHeaderPanel);            
            this.PanelCols._rootElement.append(this.DivColsHeaderPanel);
            //this.ScrollPanel._rootElement.append(this.DivCellsPanel);

            //this.Children.Add(this.PanelRows);
            this.Children.Add(this.PanelCols);            
            this.Children.Add(this.ScrollPanel);
            //this._rootElement.append(this.DivScrollPanel);
            

            this.OnResize.Attach(new Events.ResizeEventHandler(this._This_Resized, this));
            this.OnShow.Attach(new Events.ShowEventHandler(this._This_Show, this));
            this.ScrollPanel.OnScroll.Attach(new Events.JQueryEventHandler(this._Scroll, this));
            this.OnClick.Attach(new Events.ClickEventHandler(this._Clicked, this));
            //this.DivScrollPanel.scroll(function (eventObject: JQueryEventObject) { this._Scroll() }.bind(this));
            //this.DataManager.DataChanged.Attach(new Events.EventHandler<Events.EventArgs>(this.DataChanged, this));            
        }

        GetColRowFromPoint(x: number, y: number): [number, number] {
            var elem = document.elementFromPoint(x, y);
            var cell = $(elem).closest('.GridCell')[0] || $(elem).closest('.GridHeaderCell')[0];
            var col = +cell.getAttribute("data-col");
            var row = +cell.getAttribute("data-row");
            return [col, row];
        }


        _Clicked(args: Events.ClickEventArgs) {                        
            if (args.jqEvent.target.classList.contains("GridHeaderCell-expandstate")) {
                var cell = $(args.jqEvent.target).closest('.GridHeaderCell')[0];
                var col = +cell.getAttribute("data-col");
                var row = +cell.getAttribute("data-row");
                var mbr: Rubik.Data.IGridDataMember;
                if (cell.classList.contains("GridColHeaderCell")) {
                    mbr = this.DataSource.getColMember(col, row);
                }
                if (cell.classList.contains("GridRowHeaderCell")) {
                    mbr = this.DataSource.getRowMember(col, row);
                }
                if (mbr != null && mbr.HasChildren) {
                    /*args.jqEvent.target.classList.remove("fa-caret-down");
                    args.jqEvent.target.classList.remove("fa-caret-right");
                    args.jqEvent.target.classList.remove("fa-spinner");
                    args.jqEvent.target.classList.remove("fa-spin");
                    args.jqEvent.target.classList.add("fa-spinner");
                    args.jqEvent.target.classList.add("fa-spin");*/
                    if (mbr.Expanded) {
                        this.DataSource.collapse(col, row);
                    }
                    else {
                        this.DataSource.expand(col, row);
                    }
                }

            }            
        }

        _This_Resized(eventArgs: Events.ResizeEventArgs) {
           
            /*this.DivScrollPanel.css("margin-top", this.PanelCols.ActualHeight());
            this.DivScrollPanel.css("margin-left", this.PanelRows.ActualWidth());
            this.DivScrollPanel.css("height", this.ActualHeight() - this.PanelCols.ActualHeight());
            this.DivScrollPanel.css("width", this.ActualWidth() - this.PanelRows.ActualWidth());*/
            this.Resize();
            this.Draw();
        }

        _This_Show(eventArgs: Events.ShowEventArgs) {
            //this.DataChanged();
        }

        scrollTimer: number = null;
        inscroll: boolean = false;
        scrollTop: number = 0;
        scrollLeft: number = 0;

        _Scroll(eventArgs: Events.JQueryEventArgs) {                  
            var scrollhandler = function () {
                if (this.inscroll)
                    return;
                if (this.ScrollPanel._rootElement.scrollTop() != this.scrollTop
                    || this.ScrollPanel._rootElement.scrollLeft() != this.scrollLeft) {
                    this.scrollTop = this.ScrollPanel._rootElement.scrollTop();
                    this.scrollLeft = this.ScrollPanel._rootElement.scrollLeft();
                    this.Draw();
                }
            };

            scrollhandler.bind(this)();
            return;

            /*if (this.scrollTimer) {
                clearTimeout(this.scrollTimer);
            }
            this.scrollTimer = setTimeout(scrollhandler.bind(this), 10);
            return;*/
            /*if (this.inscroll)
                return;
            if (this.ScrollPanel._rootElement.scrollTop() != this.scrollTop
                || this.ScrollPanel._rootElement.scrollLeft() != this.scrollLeft) {
                this.scrollTop = this.ScrollPanel._rootElement.scrollTop();
                this.scrollLeft = this.ScrollPanel._rootElement.scrollLeft();
                this.Draw();
            } */
        }

        DataChanged(args: Events.EventArgs): void {
            this.SizeManager.Initialize(this.DataSource.getColsCount(), this.DataSource.getRowsCount(), 1, 1);            
            this.FixedAreaSizeManager.Initialize(this.DataSource.getFixedColsCount(), this.DataSource.getFixedRowsCount(), 1, 1);   
            //this.CellsPanel.Height(new CSSNumber(this.SizeManager.GetTotalHeight()));
            //this.CellsPanel.Width(new CSSNumber(this.SizeManager.GetTotalWidth()));
            if (!this.changestate) {
                this.inscroll = true;
                this.ScrollPanel._rootElement.scrollTop(0);
                this.ScrollPanel._rootElement.scrollLeft(0);
                this.inscroll = false;                
            }   
            this.Resize();
            this.Draw();                        
        }


        Resize(): void {

            /*this.PanelRows.Width(new CSSNumber(this.FixedAreaSizeManager.GetTotalColsWidth() + 1));
            this.PanelCols.Height(new CSSNumber(this.FixedAreaSizeManager.GetTotalRowsHeight() + 1));
            this.DivCellsPanel.css("height", this.SizeManager.GetTotalViewHeight());
            this.DivCellsPanel.css("width", this.SizeManager.GetTotalViewWidth());

            this.PanelRows.Height(new CSSNumber(this.ActualHeight()));
            this.PanelCols.MarginLeft(new CSSNumber(this.PanelRows.ActualWidth()-1))
            this.PanelCols.Width(new CSSNumber(this.ActualWidth() - this.PanelRows.ActualWidth()));
            this.ScrollPanel.MarginTop(new CSSNumber(this.PanelCols.ActualHeight()))
            this.ScrollPanel.MarginLeft(new CSSNumber(this.PanelRows.ActualWidth()))
            this.ScrollPanel.Height(new CSSNumber(this.ActualHeight() - this.PanelCols.ActualHeight()));
            this.ScrollPanel.Width(new CSSNumber(this.ActualWidth() - this.PanelRows.ActualWidth()));

            this.DivColsHeaderPanel.css("height", this.PanelCols.ActualHeight());
            this.DivColsHeaderPanel.css("width", this.PanelCols.ActualWidth());
            this.DivRowsHeaderPanel.css("margin-top", this.PanelCols.ActualHeight()-1);                        
            this.DivRowsHeaderPanel.css("height", this.PanelRows.ActualHeight() - this.PanelCols.ActualHeight());
            this.DivRowsHeaderPanel.css("width", this.PanelRows.ActualWidth());
            this.DivCrossPanel.css("height", this.PanelCols.ActualHeight()-1);
            this.DivCrossPanel.css("width", this.PanelRows.ActualWidth()-1);*/

            if (this.expandlastcolumn) {
                var remainingWidth = this.ActualWidth() - this.FixedAreaSizeManager.GetTotalColsWidth() - this.SizeManager.GetTotalColsWidth()
                var lastColWidth = this.SizeManager.ColsCount > 0 ? this.SizeManager.GetColWidth(this.SizeManager.ColsCount - 1) : 0
                    + this.FixedAreaSizeManager.ColsCount > 0 ? this.FixedAreaSizeManager.GetColWidth(this.FixedAreaSizeManager.ColsCount - 1) : 0;
                remainingWidth = remainingWidth + lastColWidth;
                if (remainingWidth > 0) {
                    if (this.SizeManager.ColsCount > 0) {
                        this.SizeManager.SetColWidth(this.SizeManager.ColsCount - 1, remainingWidth-20);
                    } else if (this.FixedAreaSizeManager.ColsCount > 0) {
                        this.FixedAreaSizeManager.SetColWidth(this.FixedAreaSizeManager.ColsCount - 1, remainingWidth-20);
                    }
                }
            }
            
            this.PanelCols.Height(this.FixedAreaSizeManager.GetTotalRowsHeight());
            this.PanelRows.Width(this.FixedAreaSizeManager.GetTotalColsWidth());
            //this.DivCellsPanel.css("height", this.SizeManager.GetTotalViewHeight());
            //this.DivCellsPanel.css("width", this.SizeManager.GetTotalViewWidth());
            this.CellsPanel.Height(this.SizeManager.GetTotalViewHeight());
            this.CellsPanel.Width(this.SizeManager.GetTotalViewWidth());            
            this.CellsPanel.MarginLeft(this.PanelRows.ActualWidth())

            //this.PanelRows.Height(this.ActualHeight());
            this.PanelRows.Height(this.SizeManager.GetTotalViewHeight());
            this.PanelCols.MarginLeft(this.PanelRows.ActualWidth())
            this.PanelCols.Width(this.ActualWidth() - this.PanelRows.ActualWidth());
            this.ScrollPanel.MarginTop(this.PanelCols.ActualHeight())
            //this.ScrollPanel.MarginLeft(this.PanelRows.ActualWidth())            
            this.ScrollPanel.Height(this.ActualHeight() - this.PanelCols.ActualHeight());
            //this.ScrollPanel.Width(this.ActualWidth() - this.PanelRows.ActualWidth());
            this.ScrollPanel.Width(this.ActualWidth());

            this.DivColsHeaderPanel.css("height", this.PanelCols.ActualHeight());
            this.DivColsHeaderPanel.css("width", this.PanelCols.ActualWidth());
            //this.DivRowsHeaderPanel.css("margin-top", this.PanelCols.ActualHeight());
            this.DivRowsHeaderPanel.css("height", this.PanelRows.ActualHeight() - this.PanelCols.ActualHeight());
            this.DivRowsHeaderPanel.css("width", this.PanelRows.ActualWidth());
            this.DivCrossPanel.css("height", this.PanelCols.ActualHeight());
            this.DivCrossPanel.css("width", this.PanelRows.ActualWidth());

        }

        Draw(): void {
            if (this.DataSource && !this.DataSource.isPopulated())
                return;
            var scrollTop: number = this.scrollTop;            
            var scrollLeft: number = this.scrollLeft;
            this.SizeManager.SetScrollView(scrollTop, scrollLeft, this.ScrollPanel.ActualHeight() + scrollTop, this.ScrollPanel.ActualWidth() + scrollLeft);                  
            var [startRow, endRow]: [number, number] = this.SizeManager.GetVisibleRows();            
            var [startCol, endCol]: [number, number] = this.SizeManager.GetVisibleCols();         

            this.CellsPanel.Empty();
            //this.DivCellsPanel.empty();
            this.DivColsHeaderPanel.empty();
            this.DivRowsHeaderPanel.empty();

            var colcells: Array<GridHeaderCell> = new Array<GridHeaderCell>();            
            //var cells: Array<JQuery> = new Array<JQuery>();

            //Заголовки столбцов
            for (var row = 0; row < this.FixedAreaSizeManager.RowsCount; row++) {                    
                lastkey = "";                
                for (var col = startCol; col <= endCol; col++) {                
                    /*var div = $("<div class=\"Control GridColHeaderCell\">");
                    var span = $("<span class=\"GridCell-content\">");
                    span.text(this.DataManager.getColMember(col, row).caption);
                    div.append(span)
                    div.css("left", this.SizeManager.GetColLeft(col) - this.ScrollPanel._rootElement.scrollLeft());
                    div.css("width", this.SizeManager.GetColWidth(col));
                    div.css("top", this.FixedAreaSizeManager.GetRowTop(row));
                    div.css("height", this.FixedAreaSizeManager.GetRowHeight(row));
                    this.DivColsHeaderPanel.append(div);*/
                    if (lastkey != this.DataSource.getColKey(col, row)) {
                        var colcell: GridHeaderCell = new GridHeaderCell();                        
                        colcell.AddClass("GridColHeaderCell");
                        if (col == startCol) {
                            colcell.AddClass("GridFirstColHeaderCell");
                        }
                        if (col == endCol) {
                            colcell.AddClass("GridLastColHeaderCell");
                        }
                        if (endRow==null && row == this.FixedAreaSizeManager.RowsCount - 1) {
                            colcell.AddClass("GridLastRowCell");
                        }
                        var mbr = this.DataSource.getColMember(col, row);                        
                        colcell.Level(mbr.Level);                                           
                        colcell.Text(this.DataSource.getColMember(col, row).Caption);
                        colcell.Icon(mbr.Icon);  
                        colcell.Expanded = mbr.HasChildren ? mbr.Expanded : null;
                        colcell.Populated = mbr.Populated;
                        colcell.Left(this.SizeManager.GetColLeft(col) - this.scrollLeft)
                        colcell.Width(this.SizeManager.GetColWidth(col));
                        colcell.Top(this.FixedAreaSizeManager.GetRowTop(row));
                        colcell.Height(this.FixedAreaSizeManager.GetRowHeight(row));
                        colcell.SetDataColRow(col, row);                                       
                        colcells.push(colcell);
                        //this.DivColsHeaderPanel.append(cell._rootElement);  
                    }
                    else {                        
                        var colcell: GridHeaderCell = colcells[colcells.length - 1];
                        colcell.Width(+colcell.Width() + this.SizeManager.GetColWidth(col));
                    }
                    lastkey = this.DataSource.getColKey(col, row);                    
                }
            }
            
            this.DivColsHeaderPanel.append(colcells.map(function (value, index, array) { return array[index]._rootElement; }));

            var rowcells: Array<GridHeaderCell> = new Array<GridHeaderCell>();    

            //Заголовки строк
            for (var col = 0; col < this.FixedAreaSizeManager.ColsCount; col++) {
                var lastkey = "";
                for (var row = startRow; row <= endRow; row++) {                    
                    /*var div = $("<div class=\"Control GridRowHeaderCell\">");
                    var span = $("<span class=\"GridCell-content\">");
                    span.text(this.DataManager.getRowMember(col, row).caption);
                    div.append(span)
                    div.css("left", this.FixedAreaSizeManager.GetColLeft(col));
                    div.css("width", this.FixedAreaSizeManager.GetColWidth(col));
                    div.css("top", this.SizeManager.GetRowTop(row) - this.ScrollPanel._rootElement.scrollTop());
                    div.css("height", this.SizeManager.GetRowHeight(row));
                    this.DivRowsHeaderPanel.append(div);*/
                    if (lastkey != this.DataSource.getRowKey(col, row)) {
                        var rowcell: GridHeaderCell = new GridHeaderCell();
                        rowcell.AddClass("GridRowHeaderCell");
                       
                        if (row == startRow) {
                            rowcell.AddClass("GridFirstRowHeaderCell");
                        }
                        if (row == endRow) {
                            rowcell.AddClass("GridLastRowHeaderCell");
                        }
                        if (endCol == null && col == this.FixedAreaSizeManager.ColsCount - 1) {
                            rowcell.AddClass("GridLastColCell");
                        }
                        var mbr = this.DataSource.getRowMember(col, row);                        
                        rowcell.Level(mbr.Level);                        
                        rowcell.Text(mbr.Caption);                        
                        rowcell.Icon(mbr.Icon);
                        rowcell.Expanded = mbr.HasChildren ? mbr.Expanded : null;
                        rowcell.Populated = mbr.Populated;                    
                        rowcell.Left(this.FixedAreaSizeManager.GetColLeft(col))
                        rowcell.Width(this.FixedAreaSizeManager.GetColWidth(col));
                        //rowcell.Top(this.SizeManager.GetRowTop(row) - this.scrollTop);
                        rowcell.Top(this.SizeManager.GetRowTop(row));
                        rowcell.Height(this.SizeManager.GetRowHeight(row));
                        rowcell.SetDataColRow(col, row);  
                        rowcells.push(rowcell);
                        //this.DivRowsHeaderPanel.append(cell._rootElement);  
                    }
                    else {                        
                        var rowcell: GridHeaderCell = rowcells[rowcells.length - 1];
                        if (rowcell) {
                            rowcell.Height(rowcell.ActualHeight() + this.SizeManager.GetRowHeight(row));
                        }
                    }     
                    lastkey = this.DataSource.getRowKey(col, row);                             
                }
            }
            this.DivRowsHeaderPanel.append(rowcells.map(function (value, index, array) { return array[index]._rootElement; }));
            
            
            for (var col = startCol; col!=null && col <= endCol; col++) {
                //var column: Panel = new Panel();
                //column.Left(new CSSNumber(this.SizeManager.GetColLeft(col)));                
                //column.Width(new CSSNumber(this.SizeManager.GetColWidth(col)));
                //var left = this.SizeManager.GetColLeft(col);
                //var top = this.SizeManager.GetRowTop(startRow);//this.SizeManager.GetRowTop(startRow)
                for (var row = startRow; row!=null && row <= endRow; row++) {                                                            
                    var cell: GridCell = new GridCell();                   
                    cell.Text(this.DataSource.getCellFormattedValue(col, row));              
                    cell.Left(this.SizeManager.GetColLeft(col))
                    cell.Width(this.SizeManager.GetColWidth(col));
                    cell.Top(this.SizeManager.GetRowTop(row));
                    cell.Height(this.SizeManager.GetRowHeight(row));
                    //this.DivCellsPanel.append(cell._rootElement);  
                    if (col == startCol) {
                        cell.AddClass("GridFirstColCell");
                    }
                    if (col == endCol) {
                        cell.AddClass("GridLastColCell");
                    }
                    if (row == startRow) {
                        cell.AddClass("GridFirstRowCell");
                    }
                    if (row == endRow) {
                        cell.AddClass("GridLastRowCell");
                    }
                    cell.SetDataColRow(col, row);
                    this.CellsPanel.Element().append(cell.Element());
                    //cells.Add(cell);
                    //column.Children.Add(cell);
                }
                //this.DivCellsPanel.append(cells);                    
                //cells.Add(column);                
            }
            //this.CellsPanel.Children.AddRange(cells);            
        }
    }
}
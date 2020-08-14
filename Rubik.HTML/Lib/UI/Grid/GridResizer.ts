module Rubik.UI {

    export class GridResizer {

        horizontal: boolean = true;       
        elem: JQuery = null;
        target: EventTarget;
        position: Rubik.Common.Point;
        col: number;
        row: number;
        moveX: number;
        moveY: number;
        area: string;

        public Initialize(grid: Grid): void {

            grid.OnMouseDown.Attach(new Events.MouseDownEventHandler((args) => {
                var e = args.jqEvent;
                if (e.which != 1) { // если клик правой кнопкой мыши
                    return; // то он не запускает перенос
                }

                this.elem = $(e.target).closest('.resizeX, .resizeY');
                if (Rubik.exists(this.elem)) {
                    this.horizontal = this.elem.hasClass('resizeX');
                    var cell = $(e.target).closest('.GridHeaderCell, .GridCell');
                    this.col = +cell.attr("data-col");
                    this.row = +cell.attr("data-row");
                    this.target = e.target;
                    this.position = new Rubik.Common.Point(e.pageX, e.pageY)
                    if ($(e.target).closest('.GridCellsPanel').length > 0) {
                        this.area = "CellsPanel";
                    }
                    else if ($(e.target).closest('.GridColsHeaderPanel').length > 0) {
                        this.area = "ColsPanel";
                    }
                    else if ($(e.target).closest('.GridRowsHeaderPanel').length > 0) {
                        this.area = "RowsPanel";
                    }
                    grid.AddClass(this.horizontal ? "GridColumnResize" : "GridRowResize");                    
                    this.moveX = 50;
                    this.moveY = 50;
                }
                else {
                    this.elem = null;
                }
            }, this));


            grid.OnMouseMove.Attach(new Events.MouseMoveEventHandler((args) => {
                var e = args.jqEvent;

                if (!this.elem) return; // элемент не зажат

                var moveX = e.pageX - this.position.x;
                var moveY = e.pageY - this.position.y;
                if (this.horizontal ? Math.abs(moveX) < 3 : Math.abs(moveY) < 3) {
                    return; // ничего не делать, мышь не передвинулась достаточно далеко
                }
                this.moveX = moveX;
                this.moveY = moveY;
            }, this));
            

            grid.OnMouseUp.Attach(new Events.MouseUpEventHandler((args) => {
                var e = args.jqEvent;

                if (!this.elem) return;

                grid.RemoveClass(this.horizontal ? "GridColumnResize" : "GridRowResize");

                if (this.horizontal) {
                    if (this.area != "RowsPanel") {
                        var width = grid.GetColWidth(this.col) + this.moveX;
                        grid.SetColWidth(this.col, width);
                    }
                    else {
                        var width = grid.GetFixedColWidth(this.col) + this.moveX;
                        grid.SetFixedColWidth(this.col, width);
                    }
                }
                else {
                    if (this.area != "ColsPanel") {
                        var height = grid.GetRowHeight(this.row) + this.moveY;
                        grid.SetRowHeight(this.row, height);
                    }
                    else {
                        var height = grid.GetFixedRowHeight(this.row) + this.moveY;
                        grid.SetFixedRowHeight(this.row, height);
                    }
                }

                this.elem = null;
                this.target = null;
                this.position = null;

                grid.Resize();
                grid.Draw();

            }, this));


        }
    }
}
module Rubik.UI {
    export class SizeManager {        

        private RowsSize: Object = {};
        private ColsSize: Object = {};
        private LastRowOffset: [number, number] = null;
        private LastColOffset: [number, number] = null;
        private top: number = 0;
        private left: number = 0;
        private bottom: number = 0;
        private right: number = 0;
        private offsetX: number = 0;
        private offsetY: number = 0;
        

        DefaultRowHeight: number = 0;
        DefaultColWidth: number = 0;

        ScaleX: number = 1;
        ScaleY: number = 1;

        private _rowsCount: number = 0;
        private _colsCount: number = 0;
        private visibleCols: [number, number] = [null, null];
        private visibleRows: [number, number] = [null, null];

        private alignFirstCell: boolean = true;
       

        Initialize(colsCount: number=0, rowsCount: number=0, scaleX: number=1, scaleY: number=1) {            
            this._colsCount = colsCount;
            this._rowsCount = rowsCount;
            this.ScaleX = scaleX;
            this.ScaleY = scaleY;

            this.RowsSize = {};
            this.ColsSize = {};
            this.LastRowOffset = null;
            this.LastColOffset = null;
        }

        get RowsCount(): number  {        
            return this._rowsCount;            
        }
        
        get ColsCount(): number {            
            return this._colsCount;
        }


        SetScrollView(top: number, left: number, bottom: number, right: number) {
            this.top = Math.round(top / this.ScaleY);
            this.bottom = bottom - top + Math.round(top / this.ScaleY);
            this.left = Math.round(left / this.ScaleX);
            this.right = right - left + Math.round(left / this.ScaleX);
            this.DetermineVisibleCols();
            this.DetermineVisibleRows();
        }

        GetRowHeight(index: number): number {
            return this.RowsSize[index] || this.DefaultRowHeight;
        }

        SetRowHeight(index: number, height: number) {
            if (index < this._rowsCount) {
                this.LastRowOffset = null;
                this.RowsSize[index] = height;
            }
        }

        GetColWidth(index: number): number {
            return this.ColsSize[index] || this.DefaultColWidth;
        }

        SetColWidth(index: number, width: number) {
            if (index < this._colsCount) {
                this.LastColOffset = null;
                this.ColsSize[index] = width;
            }
        }

        GetRowTop(index: number): number {
            var indices: Array<number> = Object.keys(this.RowsSize).map(Number);
            var top: number = this.DefaultRowHeight * index;
            for (var i = 0; i < indices.length; i++) {
                if (index <= indices[i])
                    break;
                top += this.RowsSize[indices[i]] - this.DefaultRowHeight;
            }
            return top - this.top + Math.round(this.top * this.ScaleY) - this.offsetY;
        }

        GetColLeft(index: number): number {
            var indices: Array<number> = Object.keys(this.ColsSize).map(Number);
            var left: number = this.DefaultColWidth * index;
            for (var i = 0; i < indices.length; i++) {
                if (index <= indices[i])
                    break;
                left += this.ColsSize[indices[i]] - this.DefaultColWidth;
            }
            return left - this.left + Math.round(this.left * this.ScaleX) - this.offsetX;
        }

        GetVisibleCols(): [number, number] {
            return this.visibleCols;
        }

        GetVisibleRows(): [number, number] {
            return this.visibleRows;
        }

        GetTotalRowsHeight(): number {
            var indices: Array<number> = Object.keys(this.RowsSize).map(Number);
            var height: number = this.DefaultRowHeight * this._rowsCount;
            for (var i = 0; i < indices.length; i++) {
                height += this.RowsSize[indices[i]] - this.DefaultRowHeight;
            }
            return height;
        }

        GetTotalColsWidth(): number {
            var indices: Array<number> = Object.keys(this.ColsSize).map(Number);
            var width: number = this.DefaultColWidth * this._colsCount;
            for (var i = 0; i < indices.length; i++) {
                width += this.ColsSize[indices[i]] - this.DefaultColWidth;
            }
            return width;
        }

        

        
         GetTotalViewHeight(): number {
            var indices: Array<number> = Object.keys(this.RowsSize).map(Number);
            var height: number = this.DefaultRowHeight * (this._rowsCount);
            for (var i = 0; i < indices.length; i++) {
                height += this.RowsSize[indices[i]] - this.DefaultRowHeight;
            }
            return Math.round(height * this.ScaleY);
        }

        GetTotalViewWidth(): number {
            var indices: Array<number> = Object.keys(this.ColsSize).map(Number);
            var width: number = this.DefaultColWidth * (this._colsCount);
            for (var i = 0; i < indices.length; i++) {
                width += this.ColsSize[indices[i]] - this.DefaultColWidth;
            }
            return Math.round(width * this.ScaleX);
        }

         

        private DetermineVisibleRows() {

            var offset: number = 0;
            var height: number = 0;
            var topRow: number = null;
            var bottomRow: number = null;
            //topRow = (top / this.DefaultRowHeight) | 0;
            //bottomRow = (bottom / this.DefaultRowHeight) | 0 + 1;
            //bottomRow = bottomRow >= this._rowsCount ? this._rowsCount - 1 : bottomRow;
            this.offsetY = 0;
            for (var i = 0; i < this._rowsCount; i++) {

                height = this.GetRowHeight(i);                

                if (topRow == null && offset >= this.top) {
                    topRow = i;
                    if (this.alignFirstCell) {
                        this.offsetY = - this.top + offset; //- height;                        
                    }
                }
                if (topRow != null) {
                    bottomRow = i;
                }
                if ((offset + this.offsetY) >= this.bottom) {
                    break;
                }

                offset += height;

            }
            this.visibleRows = [topRow, bottomRow];
        }

        private DetermineVisibleCols() {
            var offset: number = 0;
            var width: number = 0;
            var leftCol: number = null;
            var rightCol: number = null;

            this.offsetX = 0;
            for (var i = 0; i < this._colsCount; i++) {

                width = this.GetColWidth(i);                

                if (leftCol == null && offset >= this.left) {
                    leftCol = i;
                    if (this.alignFirstCell) {
                        this.offsetX = - this.left + offset; //- width;                        
                    }
                }
                if (leftCol != null) {
                    rightCol = i;
                }
                if ((offset + this.offsetX) >= this.right) {
                    break;
                }

                offset += width;

            }
            this.visibleCols = [leftCol, rightCol];
        }

    }
   
}
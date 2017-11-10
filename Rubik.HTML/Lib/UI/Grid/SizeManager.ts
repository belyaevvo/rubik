module Rubik.UI {
    export class SizeManager {        

        RowsSize: Object = {};
        ColsSize: Object = {};
        LastRowOffset: [number,number] = null;
        LastColOffset: [number, number] = null;
        

        DefaultRowHeight: number = 0;
        DefaultColWidth: number = 0;

        _rowsCount: number = 0;
        _colsCount: number = 0;

        Initialize(colsCount: number=0, rowsCount: number=0) {            
            this._colsCount = colsCount;
            this._rowsCount = rowsCount;

            this.RowsSize = {};
            this.ColsSize = {};
            this.LastRowOffset = null;
            this.LastColOffset = null;
        }

        RowsCount(count: number=null): number
        {
            if (count != null)
                this._rowsCount = count;
            
            return this._rowsCount;            
        }

        ColsCount(count: number = null): number {
            if (count != null)
                this._colsCount = count;
            return this._colsCount;
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
                if (index < indices[i])
                    break;
                top = this.RowsSize[indices[i]] - this.DefaultRowHeight;
            }
            return top;
        }

        GetColLeft(index: number): number {
            var indices: Array<number> = Object.keys(this.ColsSize).map(Number);
            var left: number = this.DefaultColWidth * index;
            for (var i = 0; i < indices.length; i++) {
                if (index < indices[i])
                    break;
                left = this.ColsSize[indices[i]] - this.DefaultColWidth;
            }
            return left;
        }

        GetVisibleRows(top: number, bottom: number): [number, number] {
            
            var offset: number = 0;
            var topRow: number = null;
            var bottomRow: number = null;
            for (var i = 0; i < this._rowsCount; i++) {
                
                if (offset >= top && topRow == null) {
                    topRow = i;
                }
                if (topRow != null) {
                    bottomRow = i;
                }
                if (offset >= bottom) {                    
                    break;
                }
                offset += this.GetRowHeight(i);
            }
            return [topRow,bottomRow];
        }

        GetVisibleCols(left: number, right: number): [number, number] {
            var offset: number = 0;
            var leftCol: number = null;
            var rightCol: number = null;
            for (var i = 0; i < this._colsCount; i++) {

                if (offset >= left && leftCol == null) {
                    leftCol = i;
                }
                if (leftCol != null) {
                    rightCol = i;
                }
                if (offset >= right) {
                    break;
                }
                offset += this.GetColWidth(i);
            }
            return [leftCol, rightCol];
        }


        GetTotalHeight(): number {
            var indices: Array<number> = Object.keys(this.RowsSize).map(Number);
            var height: number = this.DefaultRowHeight * this._rowsCount;
            for (var i = 0; i < indices.length; i++) {                
                height += this.RowsSize[indices[i]] - this.DefaultRowHeight;
            }
            return height;
        }

        GetTotalWidth(): number {
            var indices: Array<number> = Object.keys(this.ColsSize).map(Number);
            var width: number = this.DefaultColWidth * this._colsCount;
            for (var i = 0; i < indices.length; i++) {
                width += this.ColsSize[indices[i]] - this.DefaultColWidth;
            }
            return width;
        }
    }
   
}
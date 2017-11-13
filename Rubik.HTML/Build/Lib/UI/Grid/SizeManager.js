var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var SizeManager = /** @class */ (function () {
            function SizeManager() {
                this.RowsSize = {};
                this.ColsSize = {};
                this.LastRowOffset = null;
                this.LastColOffset = null;
                this.DefaultRowHeight = 0;
                this.DefaultColWidth = 0;
                this._rowsCount = 0;
                this._colsCount = 0;
            }
            SizeManager.prototype.Initialize = function (colsCount, rowsCount) {
                if (colsCount === void 0) { colsCount = 0; }
                if (rowsCount === void 0) { rowsCount = 0; }
                this._colsCount = colsCount;
                this._rowsCount = rowsCount;
                this.RowsSize = {};
                this.ColsSize = {};
                this.LastRowOffset = null;
                this.LastColOffset = null;
            };
            SizeManager.prototype.RowsCount = function (count) {
                if (count === void 0) { count = null; }
                if (count != null)
                    this._rowsCount = count;
                return this._rowsCount;
            };
            SizeManager.prototype.ColsCount = function (count) {
                if (count === void 0) { count = null; }
                if (count != null)
                    this._colsCount = count;
                return this._colsCount;
            };
            SizeManager.prototype.GetRowHeight = function (index) {
                return this.RowsSize[index] || this.DefaultRowHeight;
            };
            SizeManager.prototype.SetRowHeight = function (index, height) {
                if (index < this._rowsCount) {
                    this.LastRowOffset = null;
                    this.RowsSize[index] = height;
                }
            };
            SizeManager.prototype.GetColWidth = function (index) {
                return this.ColsSize[index] || this.DefaultColWidth;
            };
            SizeManager.prototype.SetColWidth = function (index, width) {
                if (index < this._colsCount) {
                    this.LastColOffset = null;
                    this.ColsSize[index] = width;
                }
            };
            SizeManager.prototype.GetRowTop = function (index) {
                var indices = Object.keys(this.RowsSize).map(Number);
                var top = this.DefaultRowHeight * index;
                for (var i = 0; i < indices.length; i++) {
                    if (index < indices[i])
                        break;
                    top = this.RowsSize[indices[i]] - this.DefaultRowHeight;
                }
                return top;
            };
            SizeManager.prototype.GetColLeft = function (index) {
                var indices = Object.keys(this.ColsSize).map(Number);
                var left = this.DefaultColWidth * index;
                for (var i = 0; i < indices.length; i++) {
                    if (index < indices[i])
                        break;
                    left = this.ColsSize[indices[i]] - this.DefaultColWidth;
                }
                return left;
            };
            SizeManager.prototype.GetVisibleRows = function (top, bottom) {
                var offset = 0;
                var topRow = null;
                var bottomRow = null;
                topRow = (top / this.DefaultRowHeight) | 0;
                bottomRow = (bottom / this.DefaultRowHeight) | 0 + 1;
                /*for (var i = 0; i < this._rowsCount; i++) {
                    
                    offset += this.GetRowHeight(i);
    
                    if (offset >= top && topRow == null) {
                        topRow = i;
                    }
                    if (topRow != null) {
                        bottomRow = i;
                    }
                    if (offset >= bottom) {
                        break;
                    }
                    
                }*/
                return [topRow, bottomRow];
            };
            SizeManager.prototype.GetVisibleCols = function (left, right) {
                var offset = 0;
                var leftCol = null;
                var rightCol = null;
                for (var i = 0; i < this._colsCount; i++) {
                    offset += this.GetColWidth(i);
                    if (offset >= left && leftCol == null) {
                        leftCol = i;
                    }
                    if (leftCol != null) {
                        rightCol = i;
                    }
                    if (offset >= right) {
                        break;
                    }
                }
                return [leftCol, rightCol];
            };
            SizeManager.prototype.GetTotalHeight = function () {
                var indices = Object.keys(this.RowsSize).map(Number);
                var height = this.DefaultRowHeight * this._rowsCount;
                for (var i = 0; i < indices.length; i++) {
                    height += this.RowsSize[indices[i]] - this.DefaultRowHeight;
                }
                return height;
            };
            SizeManager.prototype.GetTotalWidth = function () {
                var indices = Object.keys(this.ColsSize).map(Number);
                var width = this.DefaultColWidth * this._colsCount;
                for (var i = 0; i < indices.length; i++) {
                    width += this.ColsSize[indices[i]] - this.DefaultColWidth;
                }
                return width;
            };
            return SizeManager;
        }());
        UI.SizeManager = SizeManager;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=SizeManager.js.map
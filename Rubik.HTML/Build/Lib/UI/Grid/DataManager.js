var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var DataManager = /** @class */ (function () {
            function DataManager() {
            }
            DataManager.prototype.GetColsCount = function () {
                return 20;
            };
            DataManager.prototype.GetRowsCount = function () {
                return 100000;
            };
            DataManager.prototype.GetCellValue = function (col, row) {
                return col.toString() + "," + row.toString();
            };
            return DataManager;
        }());
        UI.DataManager = DataManager;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=DataManager.js.map
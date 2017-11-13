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
        var GridCell = /** @class */ (function (_super) {
            __extends(GridCell, _super);
            function GridCell() {
                var _this = _super.call(this) || this;
                _this._span = null;
                _this._rootElement.addClass("GridCell");
                _this._span = $("<span class=\"GridCell-content\">");
                _this._rootElement.append(_this._span);
                return _this;
            }
            GridCell.prototype.Text = function (text) {
                if (text === void 0) { text = null; }
                if (text != null) {
                    this._span.text(text);
                }
                return this._span.text();
            };
            return GridCell;
        }(UI.Control));
        UI.GridCell = GridCell;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=GridCell.js.map
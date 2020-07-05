var Rubik;
(function (Rubik) {
    var Common;
    (function (Common) {
        class Point {
            constructor(x = 0.0, y = 0.0) {
                this.x = x;
                this.y = y;
            }
            add(point) {
                return new Point(this.x + point.x, this.y + point.y);
            }
        }
        Common.Point = Point;
    })(Common = Rubik.Common || (Rubik.Common = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=Point.js.map
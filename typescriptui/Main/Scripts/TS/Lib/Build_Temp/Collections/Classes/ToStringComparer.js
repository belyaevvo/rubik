﻿var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/IComparer.d.ts" />
    (function (Collections) {
        /** A comparer which compares the results of calling ToString on the specified objects.*/
        var ToStringComparer = (function () {
            function ToStringComparer() {
            }
            /** Compares two objects by comparing the result of calling ToString on them.
            @param x The first object to be compared
            @param y The second object to be compared
            @returns the result of the comparison. -1 if x < y; 0 if x === y; 1 if x > y;
            */
            ToStringComparer.prototype.Compare = function (x, y) {
                return x.toString().localCompare(y.toString());
            };
            return ToStringComparer;
        })();
        Collections.ToStringComparer = ToStringComparer;
    })(TSUI.Collections || (TSUI.Collections = {}));
    var Collections = TSUI.Collections;
})(TSUI || (TSUI = {}));

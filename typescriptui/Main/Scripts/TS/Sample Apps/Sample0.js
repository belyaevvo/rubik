var TSUI;
(function (TSUI) {
    (function (Apps) {
        /// <reference path="../Lib/Build/IApp.d.ts" />
        /// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
        /// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
        /// <reference path="../Definitions/jquery.d.ts" />
        (function (Samples) {
            var Sample0App = (function () {
                function Sample0App() {
                    this.MainContainer = null;
                    this.StartArgs = null;
                }
                Sample0App.prototype.Run = function (args, container) {
                    if (typeof args === "undefined") { args = []; }
                    if (typeof container === "undefined") { container = $("body"); }
                    this.StartArgs = args;
                    this.MainContainer = container;

                    this.MainContainer.addClass("Sample0");

                    console.log("Sample 0 loaded.");
                };
                return Sample0App;
            })();
            Samples.Sample0App = Sample0App;
        })(Apps.Samples || (Apps.Samples = {}));
        var Samples = Apps.Samples;
    })(TSUI.Apps || (TSUI.Apps = {}));
    var Apps = TSUI.Apps;
})(TSUI || (TSUI = {}));

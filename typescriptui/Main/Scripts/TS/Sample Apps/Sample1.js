var TSUI;
(function (TSUI) {
    (function (Apps) {
        /// <reference path="../Lib/Build/IApp.d.ts" />
        /// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
        /// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
        /// <reference path="../Definitions/jquery.d.ts" />
        (function (Samples) {
            var Sample1App = (function () {
                function Sample1App() {
                    this.MainContainer = null;
                    this.StartArgs = null;
                }
                Sample1App.prototype.Run = function (args, container) {
                    if (typeof args === "undefined") { args = []; }
                    if (typeof container === "undefined") { container = $("body"); }
                    this.StartArgs = args;
                    this.MainContainer = container;

                    this.MainContainer.addClass("Sample1");

                    console.log("Sample 1 loaded.");

                    var newWindow = new TSUI.UI.Window();
                    newWindow.Title("Sample 1");
                    newWindow.ConstructDOM(this.MainContainer, function () {
                        newWindow.Show();
                    });
                };
                return Sample1App;
            })();
            Samples.Sample1App = Sample1App;
        })(Apps.Samples || (Apps.Samples = {}));
        var Samples = Apps.Samples;
    })(TSUI.Apps || (TSUI.Apps = {}));
    var Apps = TSUI.Apps;
})(TSUI || (TSUI = {}));

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    (function (Apps) {
        /// <reference path="../Lib/Build/IApp.d.ts" />
        /// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
        /// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
        /// <reference path="../Definitions/jquery.d.ts" />
        (function (Samples) {
            var Sample12App = (function () {
                function Sample12App() {
                    this.MainContainer = null;
                    this.StartArgs = null;
                }
                Sample12App.prototype.Run = function (args, container) {
                    if (typeof args === "undefined") { args = []; }
                    if (typeof container === "undefined") { container = $("body"); }
                    var _this = this;
                    this.StartArgs = args;
                    this.MainContainer = container;

                    this.MainContainer.addClass("Sample12");

                    console.log("Sample 12 loaded.");

                    this.theWindow = new TSUI.UI.Window();
                    this.theWindow.Title("Sample 12");
                    this.theWindow.ConstructDOM(this.MainContainer, function () {
                        var group = _this.theWindow.GetDefaultBindingGroup();
                        var accessor = new TSUI.Data.JSDataAccessor(_this.theWindow, {
                            URL: "Title",
                            Params: new TSUI.Collections.List(0)
                        });
                        _this.theWindow.AddBinding("Top", new TSUI.Collections.List(0), accessor, group, TSUI.Data.BindingDirections.U2S, new CSSNumberAdapter());

                        _this.theWindow.Show();
                    });
                };
                return Sample12App;
            })();
            Samples.Sample12App = Sample12App;

            var CSSNumberAdapter = (function (_super) {
                __extends(CSSNumberAdapter, _super);
                function CSSNumberAdapter() {
                    _super.apply(this, arguments);
                }
                CSSNumberAdapter.prototype.I2O = function (input) {
                    return TSUI.UI.CSSNumber.FromString(input);
                };
                CSSNumberAdapter.prototype.O2I = function (output) {
                    return output.toString();
                };
                return CSSNumberAdapter;
            })(TSUI.Data.DataAdapter);
        })(Apps.Samples || (Apps.Samples = {}));
        var Samples = Apps.Samples;
    })(TSUI.Apps || (TSUI.Apps = {}));
    var Apps = TSUI.Apps;
})(TSUI || (TSUI = {}));

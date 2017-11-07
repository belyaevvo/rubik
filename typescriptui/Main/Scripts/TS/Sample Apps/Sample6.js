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
            var isMobile = false;

            var Sample6App = (function () {
                function Sample6App() {
                    this.MainContainer = null;
                    this.StartArgs = null;
                }
                Sample6App.prototype.Run = function (args, container) {
                    if (typeof args === "undefined") { args = []; }
                    if (typeof container === "undefined") { container = $("body"); }
                    var _this = this;
                    this.StartArgs = args;
                    this.MainContainer = container;

                    this.MainContainer.addClass("Sample6");

                    isMobile = window.location.hash === "#mobile" && window.location.search !== "?mode=desktop";

                    TSUI.Animation.AppWindowAnimator.UseCanvasRenderIfSensible = false;

                    console.log("Sample 6 loaded.");

                    if (isMobile) {
                        this.TheStartupWindow = new MobileStartupWindow();
                    } else {
                        this.TheStartupWindow = new DesktopStartupWindow();
                    }
                    this.TheStartupWindow.Width(new TSUI.UI.CSSNumber(100, "%"));
                    this.TheStartupWindow.Height(new TSUI.UI.CSSNumber(100, "%"));
                    this.TheStartupWindow.ConstructDOM(this.MainContainer, function () {
                        _this.TheStartupWindow.Enabled(false);

                        _this.TheStartupWindow.Show(function () {
                            _this.TheStartupWindow.Width(new TSUI.UI.CSSNumber(100, "%"));
                            _this.TheStartupWindow.Height(new TSUI.UI.CSSNumber(100, "%"));

                            _this.TheStartupWindow.Enabled(true);
                        });
                    });
                };
                return Sample6App;
            })();
            Samples.Sample6App = Sample6App;

            var StartupWindowControls = (function () {
                function StartupWindowControls(MobileMode, AWindow) {
                    this.Window = AWindow;

                    this.Row1 = new TSUI.UI.StartupWindow_Row(MobileMode);
                    this.Window.Rows.Add(this.Row1);

                    this.Row1_Group1 = new TSUI.UI.StartupWindow_Group(MobileMode);
                    this.Row1.Groups.Add(this.Row1_Group1);

                    if (MobileMode) {
                        this.Tile1 = new TSUI.UI.Tile(TSUI.UI.TileSizes.Small, TSUI.UI.TileTypes.Flip);
                    } else {
                        this.Tile1 = new TSUI.UI.Tile(TSUI.UI.TileSizes.Medium, TSUI.UI.TileTypes.Flip);
                    }
                    this.Tile1.AddClass("Tile1");
                    this.Tile1.NameLabel.Text("Tile 1");
                    this.Tile1.TextLabel.Text("A description of Tile 1.");
                    this.Tile1.Counter.Text("1");
                    this.Tile1.OnClick.Attach(new TSUI.Events.ClickEventHandler(function (args) {
                        alert("You clicked Tile 1!");
                    }, this));
                    this.Tile1.RelativeLayoutOn();
                    this.Row1_Group1.Tiles.Add(this.Tile1);
                }
                return StartupWindowControls;
            })();
            var DesktopStartupWindow = (function (_super) {
                __extends(DesktopStartupWindow, _super);
                function DesktopStartupWindow() {
                    _super.call(this, "Sample 6");

                    this.WindowControls = new StartupWindowControls(false, this);
                }
                return DesktopStartupWindow;
            })(TSUI.UI.DesktopStartupWindow);
            var MobileStartupWindow = (function (_super) {
                __extends(MobileStartupWindow, _super);
                function MobileStartupWindow() {
                    _super.call(this, "Sample 6");

                    this.WindowControls = new StartupWindowControls(true, this);
                }
                return MobileStartupWindow;
            })(TSUI.UI.MobileStartupWindow);
        })(Apps.Samples || (Apps.Samples = {}));
        var Samples = Apps.Samples;
    })(TSUI.Apps || (TSUI.Apps = {}));
    var Apps = TSUI.Apps;
})(TSUI || (TSUI = {}));

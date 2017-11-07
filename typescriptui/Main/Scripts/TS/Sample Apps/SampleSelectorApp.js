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
            var sampleDescriptions = [
                "App without a UI which logs to console if library and app load sucessfully.",
                "App which uses the minimum required code to show an empty window.",
                "App with a simple startup window.",
                "App with a more complex startup window and about page.",
                "App with a more complex startup window, about page and splash screen.",
                "A simple calculator app.",
                "App with a simple startup window and mobile version.",
                "App with a more complex startup window, about page and mobile version.",
                "App with a more complex startup window, about page, splash screen and mobile version.",
                "A simple calculator app with mobile version.",
                "Custom file-upload control.",
                "Custom file-upload control with multiple children.",
                "App showing use of data binding to/from a global variable.",
                "App with a canvas element and basic animation.",
                "App with a canvas element and basic single-frame render.",
                "App with a canvas element, basic single-frame render and custom event which fires on render.",
                "Sample app 15 but using Static UI Description to generate the UI and attach events."
            ];

            var isMobile = false;

            var SampleSelectorApp = (function () {
                function SampleSelectorApp() {
                    this.MainContainer = null;
                    this.StartArgs = null;
                }
                SampleSelectorApp.prototype.Run = function (args, container) {
                    if (typeof args === "undefined") { args = []; }
                    if (typeof container === "undefined") { container = $("body"); }
                    this.StartArgs = args;
                    this.MainContainer = container;

                    this.MainContainer.addClass("SampleSelectorApp");

                    isMobile = window.location.hash === "#mobile" && window.location.search !== "?mode=desktop";

                    TSUI.Animation.AppWindowAnimator.UseCanvasRenderIfSensible = false;

                    //this.InitSplashScreen();
                    //#region Show
                    var _this = this;

                    if (!_this.Init(function () {
                        _this.TheStartupWindow.Enabled(false);

                        _this.TheStartupWindow.Width(new TSUI.UI.CSSNumber(100, "%"));
                        _this.TheStartupWindow.Height(new TSUI.UI.CSSNumber(100, "%"));

                        //_this.TheSplashScreen.Hide(function ()
                        //{
                        _this.TheStartupWindow.Show(function () {
                            _this.TheStartupWindow.Enabled(true);
                            //_this.TheSplashScreen.DestroyDOM();
                        }, new TSUI.Animation.FadeAnimator());
                        //});
                    })) {
                        alert("Failed to initialise properly!");
                    }
                    //});
                    //#endregion
                };

                SampleSelectorApp.prototype.InitSplashScreen = function () {
                    if (isMobile) {
                        this.TheSplashScreen = new TSUI.UI.MobileSplashScreen("Sample Selector");
                        this.TheSplashScreen.ConstructDOM(this.MainContainer);
                    } else {
                        this.TheSplashScreen = new TSUI.UI.DesktopSplashScreen("Sample Selector");
                        this.TheSplashScreen.ConstructDOM(this.MainContainer);
                        this.TheSplashScreen.Width(new TSUI.UI.CSSNumber(550));
                    }
                };
                SampleSelectorApp.prototype.ShowSplashScreen = function (callback) {
                    this.TheSplashScreen.Show(function () {
                        if (callback) {
                            callback();
                        }
                    }, new TSUI.Animation.Animator());
                };

                SampleSelectorApp.prototype.Init = function (callback) {
                    if (typeof callback === "undefined") { callback = null; }
                    this.InitStartupWindow(callback);
                    return true;
                };
                SampleSelectorApp.prototype.InitStartupWindow = function (callback) {
                    if (typeof callback === "undefined") { callback = null; }
                    if (isMobile) {
                        this.TheStartupWindow = new MobileStartupWindow();
                    } else {
                        this.TheStartupWindow = new DesktopStartupWindow();
                    }
                    this.TheStartupWindow.ConstructDOM(this.MainContainer, callback);
                };
                return SampleSelectorApp;
            })();
            Samples.SampleSelectorApp = SampleSelectorApp;

            var StartupWindowControls = (function () {
                function StartupWindowControls(MobileMode, AWindow) {
                    this.Window = AWindow;

                    var cRow = null;
                    var cGroup = null;
                    for (var i = 0; i < sampleDescriptions.length; i++) {
                        if (cRow === null) {
                            cRow = new TSUI.UI.StartupWindow_Row(MobileMode);
                            this.Window.Rows.Add(cRow);
                        }

                        if (cGroup === null || i % 1 == 0) {
                            cGroup = new TSUI.UI.StartupWindow_Group(MobileMode);
                            cRow.Groups.Add(cGroup);
                        }

                        var SampleTile = new TSUI.UI.Tile(TSUI.UI.TileSizes.Medium, TSUI.UI.TileTypes.Flip);
                        SampleTile.AddClass("SampleTile");
                        SampleTile.NameLabel.Text("Sample " + i.toString());
                        SampleTile.TextLabel.Text(sampleDescriptions[i]);
                        SampleTile.ShowCounter(false);
                        SampleTile.OnClick.Attach(new TSUI.Events.ClickEventHandler(function (args) {
                            window.open(args.Sender.NameLabel.Text().replace(" ", "") + ".html", "_self");
                        }, this));
                        SampleTile.RelativeLayoutOn();
                        cGroup.Tiles.Add(SampleTile);
                    }
                }
                return StartupWindowControls;
            })();
            var DesktopStartupWindow = (function (_super) {
                __extends(DesktopStartupWindow, _super);
                function DesktopStartupWindow() {
                    _super.call(this, "Sample Selector");

                    if (!this.WindowControls) {
                        this.WindowControls = new StartupWindowControls(false, this);
                    }

                    this.CloseButton.Visible(false);
                    this.ResizeEnabled(false);
                    this.DragEnabled(false);
                }
                return DesktopStartupWindow;
            })(TSUI.UI.DesktopStartupWindow);
            var MobileStartupWindow = (function (_super) {
                __extends(MobileStartupWindow, _super);
                function MobileStartupWindow() {
                    this.WindowControls = new StartupWindowControls(true, this);

                    _super.call(this);

                    this.AddClass("Mobile");
                }
                return MobileStartupWindow;
            })(DesktopStartupWindow);
        })(Apps.Samples || (Apps.Samples = {}));
        var Samples = Apps.Samples;
    })(TSUI.Apps || (TSUI.Apps = {}));
    var Apps = TSUI.Apps;
})(TSUI || (TSUI = {}));

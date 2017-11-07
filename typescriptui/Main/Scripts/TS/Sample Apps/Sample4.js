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
            var Sample4App = (function () {
                function Sample4App() {
                    this.MainContainer = null;
                    this.StartArgs = null;
                }
                Sample4App.prototype.Run = function (args, container) {
                    if (typeof args === "undefined") { args = []; }
                    if (typeof container === "undefined") { container = $("body"); }
                    var _this = this;
                    this.StartArgs = args;
                    this.MainContainer = container;

                    this.MainContainer.addClass("Sample4");

                    TSUI.Animation.AppWindowAnimator.UseCanvasRenderIfSensible = false;

                    console.log("Sample 4 loaded.");

                    this.InitSplashScreen();

                    var startLoadTime = Date.now();
                    this.ShowSplashScreen(function () {
                        if (!_this.Init(function () {
                            _this.TheStartupWindow.Enabled(false);

                            _this.TheStartupWindow.Width(new TSUI.UI.CSSNumber(100, "%"));
                            _this.TheStartupWindow.Height(new TSUI.UI.CSSNumber(100, "%"));
                            setTimeout(function () {
                                _this.TheSplashScreen.Hide(function () {
                                    _this.TheStartupWindow.Show(function () {
                                        _this.TheStartupWindow.Enabled(true);
                                        _this.TheSplashScreen.DestroyDOM();
                                    }, new TSUI.Animation.FadeAnimator());
                                });
                            }, 4000 - (startLoadTime - Date.now()));
                        })) {
                            alert("Failed to initialise properly!");
                        }
                    });
                };

                Sample4App.prototype.InitSplashScreen = function () {
                    this.TheSplashScreen = new TSUI.UI.DesktopSplashScreen("Sample 4");
                    this.TheSplashScreen.ConstructDOM(this.MainContainer);
                    this.TheSplashScreen.Width(new TSUI.UI.CSSNumber(550));
                };
                Sample4App.prototype.ShowSplashScreen = function (callback) {
                    this.TheSplashScreen.Show(function () {
                        if (callback) {
                            callback();
                        }
                    }, new TSUI.Animation.Animator());
                };

                Sample4App.prototype.Init = function (callback) {
                    if (typeof callback === "undefined") { callback = null; }
                    this.InitStartupWindow(callback);
                    return true;
                };
                Sample4App.prototype.InitStartupWindow = function (callback) {
                    if (typeof callback === "undefined") { callback = null; }
                    this.TheStartupWindow = new DesktopStartupWindow();
                    this.TheStartupWindow.ConstructDOM(this.MainContainer, callback);
                };
                return Sample4App;
            })();
            Samples.Sample4App = Sample4App;

            var DesktopStartupWindow = (function (_super) {
                __extends(DesktopStartupWindow, _super);
                function DesktopStartupWindow() {
                    var _this = this;
                    _super.call(this, "Sample 4");

                    this.CloseButton.Visible(false);
                    this.ResizeEnabled(false);
                    this.DragEnabled(false);

                    this.Row1 = new TSUI.UI.StartupWindow_Row(false);
                    this.Rows.Add(this.Row1);
                    this.Row2 = new TSUI.UI.StartupWindow_Row(false);
                    this.Rows.Add(this.Row2);

                    this.Row1_Group1 = new TSUI.UI.StartupWindow_Group(false);
                    this.Row1.Groups.Add(this.Row1_Group1);

                    this.Row1_Group2 = new TSUI.UI.StartupWindow_Group(false);
                    this.Row1.Groups.Add(this.Row1_Group2);

                    this.Row2_Group1 = new TSUI.UI.StartupWindow_Group(false);
                    this.Row2.Groups.Add(this.Row2_Group1);

                    this.Tile1 = new TSUI.UI.Tile(TSUI.UI.TileSizes.Medium, TSUI.UI.TileTypes.Flip);
                    this.Tile1.AddClass("Tile1");
                    this.Tile1.NameLabel.Text("Tile 1");
                    this.Tile1.TextLabel.Text("A description of Tile 1.");
                    this.Tile1.Counter.Text("1");
                    this.Tile1.OnClick.Attach(new TSUI.Events.ClickEventHandler(function (args) {
                        alert("You clicked Tile 1!");
                    }, this));
                    this.Tile1.RelativeLayoutOn();

                    this.Tile2 = new TSUI.UI.Tile(TSUI.UI.TileSizes.Medium, TSUI.UI.TileTypes.Flip);
                    this.Tile2.AddClass("Tile2");
                    this.Tile2.NameLabel.Text("Tile 2");
                    this.Tile2.TextLabel.Text("A description of Tile 2.");
                    this.Tile2.Counter.Text("2");
                    this.Tile2.OnClick.Attach(new TSUI.Events.ClickEventHandler(function (args) {
                        alert("You clicked Tile 2!");
                    }, this));
                    this.Tile2.RelativeLayoutOn();

                    this.Tile3 = new TSUI.UI.Tile(TSUI.UI.TileSizes.Medium, TSUI.UI.TileTypes.Flip);
                    this.Tile3.AddClass("Tile3");
                    this.Tile3.NameLabel.Text("Tile 3");
                    this.Tile3.TextLabel.Text("A description of Tile 3.");
                    this.Tile3.Counter.Text("3");
                    this.Tile3.OnClick.Attach(new TSUI.Events.ClickEventHandler(function (args) {
                        alert("You clicked Tile 3!");
                    }, this));
                    this.Tile3.RelativeLayoutOn();

                    this.Tile4 = new TSUI.UI.Tile(TSUI.UI.TileSizes.Medium, TSUI.UI.TileTypes.Flip);
                    this.Tile4.AddClass("Tile4");
                    this.Tile4.NameLabel.Text("Tile 4");
                    this.Tile4.TextLabel.Text("A description of Tile 4.");
                    this.Tile4.Counter.Text("4");
                    this.Tile4.OnClick.Attach(new TSUI.Events.ClickEventHandler(function (args) {
                        alert("You clicked Tile 4!");
                    }, this));
                    this.Tile4.RelativeLayoutOn();

                    this.AboutTile = new TSUI.UI.Tile(TSUI.UI.TileSizes.Large, TSUI.UI.TileTypes.Flip);
                    this.AboutTile.AddClass("AboutTile");
                    this.AboutTile.NameLabel.Text("About");
                    this.AboutTile.TextLabel.Text("About this sample app.");
                    this.AboutTile.ShowCounter(false);
                    this.AboutTile.OnClick.Attach(new TSUI.Events.ClickEventHandler(function (args) {
                        _this.AboutPage.PositionCenterWindow();
                        _this.AboutPage.Show();
                    }, this));
                    this.AboutTile.RelativeLayoutOn();

                    this.Row1_Group1.Tiles.Add(this.Tile1);
                    this.Row1_Group1.Tiles.Add(this.Tile2);
                    this.Row1_Group2.Tiles.Add(this.Tile3);
                    this.Row1_Group2.Tiles.Add(this.Tile4);
                    this.Row1_Group1.Tiles.Add(this.Tile1);
                    this.Row2_Group1.Tiles.Add(this.AboutTile);

                    this.AboutPage = new TSUI.UI.PageWindow();
                    this.AboutPage.ContentPanel.Children.Add(new TSUI.UI.Label("<div style=\"padding:10px;\"><h2>About</h2><p>Suitable content for an about page for this sample app.</p></div>"));
                }
                DesktopStartupWindow.prototype.ConstructDOM = function (parent, onComplete) {
                    var _this = this;
                    _super.prototype.ConstructDOM.call(this, parent, function () {
                        _this.AboutPage.ConstructDOM(parent);

                        if (onComplete) {
                            onComplete();
                        }
                    });
                };
                return DesktopStartupWindow;
            })(TSUI.UI.DesktopStartupWindow);
        })(Apps.Samples || (Apps.Samples = {}));
        var Samples = Apps.Samples;
    })(TSUI.Apps || (TSUI.Apps = {}));
    var Apps = TSUI.Apps;
})(TSUI || (TSUI = {}));

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra felis nec erat fermentum malesuada gravida odio pulvinar. Fusce elit massa, hendrerit sit amet vehicula vitae, porta in lorem. Suspendisse volutpat eros sed nibh elementum tincidunt. Nam nulla nibh, dapibus.";

var TSUI;
(function (TSUI) {
    (function (Apps) {
        (function (My) {
            var isMobile = false;

            var MyApp = (function () {
                function MyApp() {
                    this.MainContainer = null;
                    this.StartArgs = null;
                }
                MyApp.prototype.Run = function (args, container) {
                    if (typeof args === "undefined") { args = []; }
                    if (typeof container === "undefined") { container = $("body"); }
                    this.StartArgs = args;
                    this.MainContainer = container;

                    isMobile = window.location.hash === "#mobile" && window.location.search !== "?mode=desktop";

                    TSUI.Animation.AppWindowAnimator.UseCanvasRenderIfSensible = false;

                    this.InitSplashScreen();

                    var _this = this;
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

                MyApp.prototype.InitSplashScreen = function () {
                    if (isMobile) {
                        this.TheSplashScreen = new MobileSplashScreen();
                        this.TheSplashScreen.OptimiseConstructForGraphics = false;
                        this.TheSplashScreen.ConstructDOM(this.MainContainer);

                        var width = Math.min($(window).width(), 580);
                        this.TheSplashScreen.Width(new TSUI.UI.CSSNumber(width));
                        this.TheSplashScreen.Left(new TSUI.UI.CSSNumber(($(window).width() - width) / 2));
                        this.TheSplashScreen.Height(new TSUI.UI.CSSNumber($(window).height()));
                    } else {
                        this.TheSplashScreen = new DesktopSplashScreen();
                        this.TheSplashScreen.OptimiseConstructForGraphics = false;
                        this.TheSplashScreen.ConstructDOM(this.MainContainer);
                        var topPx = ($(window).height() - this.TheSplashScreen.Height().Value) / 2;
                        this.TheSplashScreen.Top(new TSUI.UI.CSSNumber((topPx / $(window).height()) * 100, "%"));
                        var leftPx = ($(window).width() - this.TheSplashScreen.Width().Value) / 2;
                        this.TheSplashScreen.Left(new TSUI.UI.CSSNumber((leftPx / $(window).width()) * 100, "%"));
                    }
                };
                MyApp.prototype.ShowSplashScreen = function (callback) {
                    this.TheSplashScreen.Show(function () {
                        if (callback) {
                            callback();
                        }
                    }, new TSUI.Animation.Animator());
                };

                MyApp.prototype.Init = function (callback) {
                    if (typeof callback === "undefined") { callback = null; }
                    this.InitStartupWindow(callback);
                    return true;
                };
                MyApp.prototype.InitStartupWindow = function (callback) {
                    if (typeof callback === "undefined") { callback = null; }
                    if (isMobile) {
                        this.TheStartupWindow = new MobileStartupWindow();
                    } else {
                        this.TheStartupWindow = new DesktopStartupWindow();
                    }
                    this.TheStartupWindow.ConstructDOM(this.MainContainer, callback);
                };
                return MyApp;
            })();
            My.MyApp = MyApp;

            var DesktopSplashScreen = (function (_super) {
                __extends(DesktopSplashScreen, _super);
                function DesktopSplashScreen() {
                    _super.call(this);

                    this.AddClass("SplashScreen");

                    this.MainTitleBar.Visible(false);
                    this.CloseButton.Visible(false);
                    this.ResizeEnabled(false);
                    this.DragEnabled(false);

                    this.Width(new TSUI.UI.CSSNumber(500));
                    this.Height(new TSUI.UI.CSSNumber(250));

                    var NameLabel = new TSUI.UI.Label();
                    NameLabel.AddClass("NameLabel");
                    NameLabel.Text("My App");
                    this.Children.Add(NameLabel);

                    var ProgressSpinner = new TSUI.UI.ProgressSpinner();
                    ProgressSpinner.AnimationDuration(2000);
                    this.Children.Add(ProgressSpinner);
                }
                return DesktopSplashScreen;
            })(TSUI.UI.Window);
            var MobileSplashScreen = (function (_super) {
                __extends(MobileSplashScreen, _super);
                function MobileSplashScreen() {
                    _super.call(this);

                    this.AddClass("Mobile");

                    this.Top(new TSUI.UI.CSSNumber(0));
                    this.Left(new TSUI.UI.CSSNumber(0));
                }
                return MobileSplashScreen;
            })(DesktopSplashScreen);

            var DesktopStartupWindow = (function (_super) {
                __extends(DesktopStartupWindow, _super);
                function DesktopStartupWindow() {
                    _super.call(this);

                    this.OptimiseConstructForGraphics = isMobile;

                    this.AddClass("StartupWindow");

                    this.Title("TypeScript UI");

                    this.CloseButton.Visible(false);
                    this.ResizeEnabled(false);
                    this.DragEnabled(false);

                    if (!this.LoginTile) {
                        this.LoginTile = new TSUI.UI.Tile(TSUI.UI.TileSizes.Medium, TSUI.UI.TileTypes.Iconic);
                    }

                    this.TilesStackPanel = new TSUI.UI.StackPanel();

                    this.TilesStackPanel_Row1 = new TSUI.UI.StackPanelRow();

                    this.TilesStackPanel_Row1.RelativeLayoutOn();

                    this.TSP_HorSP1 = new TSUI.UI.StackPanel();
                    this.TSP_HorSP1.Orientation(TSUI.UI.StackPanelOrientations.Horizontal);

                    this.TSP_HorSP1_Col1 = new TSUI.UI.StackPanelRow();

                    this.TSP_HorSP1_Col1.RelativeLayoutOn();

                    this.LoginTile.AddClass("LoginTile");
                    this.LoginTile.NameLabel.Text("Login");
                    this.LoginTile.IconBox.Source(TSUI.UI.TileIcons.About);
                    this.LoginTile.ShowCounter(false);
                    this.LoginTile.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.LoginTile_OnClick, this));
                    this.LoginTile.RelativeLayoutOn();

                    this.ContentPanel.Children.Add(this.TilesStackPanel);

                    this.TilesStackPanel.Rows.Add(this.TilesStackPanel_Row1);

                    this.TSP_HorSP1.Rows.Add(this.TSP_HorSP1_Col1);

                    this.TilesStackPanel_Row1.Children.Add(this.TSP_HorSP1);

                    this.TSP_HorSP1_Col1.Children.Add(this.LoginTile);

                    var _this = this;
                    setTimeout(function () {
                        _this.InitDesktopLoginWindow();
                        _this.InitMobileLoginWindow();
                    }, 150);

                    this.OnResize.Attach(new TSUI.Events.ResizeEventHandler(this._This_OnResize, this));
                }
                DesktopStartupWindow.prototype._This_OnResize = function (eventArgs) {
                    this.PositionDesktopLoginWindow();
                };

                DesktopStartupWindow.prototype.InitDesktopLoginWindow = function () {
                    if (!this.TheDesktopLoginWindow) {
                        this.TheDesktopLoginWindow = new DesktopLoginWindow();
                        this.TheDesktopLoginWindow.OnClose.Attach(new TSUI.Events.CloseEventHandler(function () {
                            this.Enabled(true);
                        }, this));
                        this.TheDesktopLoginWindow.ConstructDOM(this._rootElement.parent());
                        this.TheDesktopLoginWindow.DestroyDOMOnClose = false;
                    }
                };
                DesktopStartupWindow.prototype.InitMobileLoginWindow = function () {
                    if (!this.TheMobileLoginWindow) {
                        this.TheMobileLoginWindow = new MobileLoginWindow();
                        this.TheMobileLoginWindow.OnClose.Attach(new TSUI.Events.CloseEventHandler(function () {
                            this.Enabled(true);
                        }, this));
                        this.TheMobileLoginWindow.ConstructDOM(this._rootElement.parent());
                        this.TheMobileLoginWindow.DestroyDOMOnClose = false;
                    }
                };

                DesktopStartupWindow.prototype.PositionDesktopLoginWindow = function (overrideVisible) {
                    if (typeof overrideVisible === "undefined") { overrideVisible = false; }
                    if (!this.TheDesktopLoginWindow) {
                        return;
                    }
                    if (this.TheDesktopLoginWindow.Visible() || overrideVisible) {
                        var WantedWidthPerc = 0.5;
                        var WantedHeightPerc = 0.5;

                        this.TheDesktopLoginWindow.Width(new TSUI.UI.CSSNumber(WantedWidthPerc * 100, "%"));
                        this.TheDesktopLoginWindow.Height(new TSUI.UI.CSSNumber(WantedHeightPerc * 100, "%"));

                        var minWidth = 400;
                        var maxWidth = 400;
                        var minHeight = 230;
                        var maxHeight = 230;

                        this.TheDesktopLoginWindow.MinWidth(new TSUI.UI.CSSNumber(minWidth));
                        this.TheDesktopLoginWindow.MinHeight(new TSUI.UI.CSSNumber(minHeight));
                        this.TheDesktopLoginWindow.MaxWidth(new TSUI.UI.CSSNumber(maxWidth));
                        this.TheDesktopLoginWindow.MaxHeight(new TSUI.UI.CSSNumber(maxHeight));

                        var windowWidth = this._rootElement.parent().width();
                        var widthPx = Math.max(minWidth, Math.min(maxWidth, windowWidth * WantedWidthPerc));
                        var widthPerc = (widthPx / windowWidth) * 100;
                        var leftPerc = (100 - widthPerc) / 2;

                        var windowHeight = this._rootElement.parent().height();
                        var heightPx = Math.max(minHeight, Math.min(maxHeight, windowHeight * WantedHeightPerc));
                        var heightPerc = (heightPx / windowHeight) * 100;
                        var topPerc = (100 - heightPerc) / 2;

                        this.TheDesktopLoginWindow.Top(new TSUI.UI.CSSNumber(topPerc, "%"));
                        this.TheDesktopLoginWindow.Left(new TSUI.UI.CSSNumber(leftPerc, "%"));
                    }
                };
                DesktopStartupWindow.prototype.PositionMobileLoginWindow = function (overrideVisible) {
                    if (typeof overrideVisible === "undefined") { overrideVisible = false; }
                    if (!this.TheMobileLoginWindow) {
                        return;
                    }
                    if (this.TheMobileLoginWindow.Visible() || overrideVisible) {
                        this.TheMobileLoginWindow.Width(new TSUI.UI.CSSNumber(100, "%"));
                        this.TheMobileLoginWindow.Height(new TSUI.UI.CSSNumber(100, "%"));

                        this.TheMobileLoginWindow.MinWidth(new TSUI.UI.CSSNumber(235));
                        this.TheMobileLoginWindow.MinHeight(new TSUI.UI.CSSNumber(320));
                        this.TheMobileLoginWindow.MaxWidth(new TSUI.UI.CSSNumber(100, "%"));
                        this.TheMobileLoginWindow.MaxHeight(new TSUI.UI.CSSNumber(100, "%"));

                        this.TheMobileLoginWindow.Top(new TSUI.UI.CSSNumber(0, "%"));
                        this.TheMobileLoginWindow.Left(new TSUI.UI.CSSNumber(0, "%"));
                    }
                };

                DesktopStartupWindow.prototype.LoginTile_OnClick = function (eventArgs) {
                    var _this = this;
                    if (isMobile) {
                        this.PositionMobileLoginWindow(true);
                        this.TheMobileLoginWindow.Show(function () {
                            _this.Enabled(false);
                        });
                    } else {
                        this.PositionDesktopLoginWindow(true);
                        this.TheDesktopLoginWindow.Show(function () {
                            _this.Enabled(false);
                        });
                    }
                };
                return DesktopStartupWindow;
            })(TSUI.UI.Window);
            var MobileStartupWindow = (function (_super) {
                __extends(MobileStartupWindow, _super);
                function MobileStartupWindow() {
                    _super.call(this);

                    this.AddClass("Mobile");

                    this.LoginTile.Size(TSUI.UI.TileSizes.Small);
                }
                return MobileStartupWindow;
            })(DesktopStartupWindow);

            var DesktopLoginWindow = (function (_super) {
                __extends(DesktopLoginWindow, _super);
                function DesktopLoginWindow() {
                    _super.call(this);

                    this.OptimiseConstructForGraphics = isMobile;

                    this.AddClass("LoginWindow");

                    this.Title("Login");

                    this.ResizeEnabled(false);

                    this.CentralisingPanel = new TSUI.UI.Panel();
                    this.CentralisingPanel.AddClass("Centralise");
                    this.CentralisingPanel.RelativeLayoutOn();
                    this.ContentPanel.Children.Add(this.CentralisingPanel);

                    this.ControlsStackPanel = new TSUI.UI.StackPanel();
                    this.ControlsStackPanel.RelativeLayoutOn();
                    this.CentralisingPanel.Children.Add(this.ControlsStackPanel);

                    this.UsernameRow = new TSUI.UI.StackPanelRow();
                    this.ControlsStackPanel.Rows.Add(this.UsernameRow);
                    this.PasswordRow = new TSUI.UI.StackPanelRow();
                    this.ControlsStackPanel.Rows.Add(this.PasswordRow);
                    this.LoginRow = new TSUI.UI.StackPanelRow();
                    this.ControlsStackPanel.Rows.Add(this.LoginRow);

                    this.UsernameLabel = new TSUI.UI.Label("Username : ");
                    this.UsernameLabel.RelativeLayoutOn();
                    this.UsernameRow.Children.Add(this.UsernameLabel);

                    this.UsernameBox = new TSUI.UI.TextBox();
                    this.UsernameBox.RelativeLayoutOn();
                    this.UsernameRow.Children.Add(this.UsernameBox);

                    this.PasswordLabel = new TSUI.UI.Label("Password : ");
                    this.PasswordLabel.RelativeLayoutOn();
                    this.PasswordRow.Children.Add(this.PasswordLabel);

                    this.PasswordBox = new TSUI.UI.TextBox();
                    this.PasswordBox.Masked(true);
                    this.PasswordBox.RelativeLayoutOn();
                    this.PasswordRow.Children.Add(this.PasswordBox);

                    this.LoginButton = new TSUI.UI.Button();
                    this.LoginButton.Text("Login");
                    this.LoginButton.Width(new TSUI.UI.CSSNumber(197));
                    this.LoginButton.RelativeLayoutOn();
                    this.LoginRow.Children.Add(this.LoginButton);
                }
                return DesktopLoginWindow;
            })(TSUI.UI.Window);
            var MobileLoginWindow = (function (_super) {
                __extends(MobileLoginWindow, _super);
                function MobileLoginWindow() {
                    _super.call(this);

                    this.OptimiseConstructForGraphics = isMobile;

                    this.AddClass("Mobile");

                    this.Title("Mobile Login");
                }
                return MobileLoginWindow;
            })(DesktopLoginWindow);
        })(Apps.My || (Apps.My = {}));
        var My = Apps.My;
    })(TSUI.Apps || (TSUI.Apps = {}));
    var Apps = TSUI.Apps;
})(TSUI || (TSUI = {}));

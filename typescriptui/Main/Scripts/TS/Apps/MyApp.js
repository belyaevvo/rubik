﻿var __extends = this.__extends || function (d, b) {
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
        (function (My) {
            var LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra felis nec erat fermentum malesuada gravida odio pulvinar. Fusce elit massa, hendrerit sit amet vehicula vitae, porta in lorem. Suspendisse volutpat eros sed nibh elementum tincidunt. Nam nulla nibh, dapibus.";

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

                    this.MainContainer.addClass("MyApp");

                    isMobile = window.location.hash === "#mobile" && window.location.search !== "?mode=desktop";

                    TSUI.Animation.AppWindowAnimator.UseCanvasRenderIfSensible = false;

                    this.InitSplashScreen();

                    //#region Show
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
                    //#endregion
                };

                MyApp.prototype.InitSplashScreen = function () {
                    if (isMobile) {
                        this.TheSplashScreen = new TSUI.UI.MobileSplashScreen("My App");
                        this.TheSplashScreen.ConstructDOM(this.MainContainer);
                    } else {
                        this.TheSplashScreen = new TSUI.UI.DesktopSplashScreen("My App");
                        this.TheSplashScreen.ConstructDOM(this.MainContainer);
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

            var StartupWindowControls = (function () {
                function StartupWindowControls(MobileMode, AWindow) {
                    this.Window = AWindow;

                    if (!this.LoginTile) {
                        this.LoginTile = new TSUI.UI.Tile(TSUI.UI.TileSizes.Medium, TSUI.UI.TileTypes.Iconic);
                    }

                    this.Row1 = new TSUI.UI.StartupWindow_Row(MobileMode);

                    this.Row1_Group1 = new TSUI.UI.StartupWindow_Group(MobileMode);

                    this.LoginTile.AddClass("LoginTile");
                    this.LoginTile.NameLabel.Text("Login");
                    this.LoginTile.IconBox.Source(TSUI.UI.TileIcons.Secure);
                    this.LoginTile.ShowCounter(false);
                    this.LoginTile.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.LoginTile_OnClick, this));
                    this.LoginTile.RelativeLayoutOn();

                    this.Row1.Groups.Add(this.Row1_Group1);

                    this.Row1_Group1.Tiles.Add(this.LoginTile);

                    var _this = this;
                    setTimeout(function () {
                        _this.InitDesktopLoginWindow();
                        _this.InitMobileLoginWindow();
                    }, 1500);
                }
                StartupWindowControls.prototype._This_OnResize = function (eventArgs) {
                    this.PositionDesktopLoginWindow();
                };

                StartupWindowControls.prototype.InitDesktopLoginWindow = function () {
                    if (!this.TheDesktopLoginWindow) {
                        this.TheDesktopLoginWindow = new TSUI.UI.DesktopLoginWindow();
                        this.TheDesktopLoginWindow.OnClose.Attach(new TSUI.Events.CloseEventHandler(function () {
                            this.Window.Enabled(true);
                        }, this));
                        this.TheDesktopLoginWindow.ConstructDOM(this.Window._rootElement.parent());
                        this.TheDesktopLoginWindow.DestroyDOMOnClose = false;
                    }
                };
                StartupWindowControls.prototype.InitMobileLoginWindow = function () {
                    if (!this.TheMobileLoginWindow) {
                        this.TheMobileLoginWindow = new TSUI.UI.MobileLoginWindow();
                        this.TheMobileLoginWindow.OnClose.Attach(new TSUI.Events.CloseEventHandler(function () {
                            this.Window.Enabled(true);
                        }, this));
                        this.TheMobileLoginWindow.ConstructDOM(this.Window._rootElement.parent());
                        this.TheMobileLoginWindow.DestroyDOMOnClose = false;
                    }
                };

                StartupWindowControls.prototype.PositionDesktopLoginWindow = function (overrideVisible) {
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

                        var windowWidth = this.Window._rootElement.parent().width();
                        var widthPx = Math.max(minWidth, Math.min(maxWidth, windowWidth * WantedWidthPerc));
                        var widthPerc = (widthPx / windowWidth) * 100;
                        var leftPerc = (100 - widthPerc) / 2;

                        var windowHeight = this.Window._rootElement.parent().height();
                        var heightPx = Math.max(minHeight, Math.min(maxHeight, windowHeight * WantedHeightPerc));
                        var heightPerc = (heightPx / windowHeight) * 100;
                        var topPerc = (100 - heightPerc) / 2;

                        this.TheDesktopLoginWindow.Top(new TSUI.UI.CSSNumber(topPerc, "%"));
                        this.TheDesktopLoginWindow.Left(new TSUI.UI.CSSNumber(leftPerc, "%"));
                    }
                };
                StartupWindowControls.prototype.PositionMobileLoginWindow = function (overrideVisible) {
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

                StartupWindowControls.prototype.LoginTile_OnClick = function (eventArgs) {
                    var _this = this;
                    if (isMobile) {
                        this.PositionMobileLoginWindow(true);
                        this.TheMobileLoginWindow.Show(function () {
                            _this.Window.Enabled(false);
                        });
                    } else {
                        this.PositionDesktopLoginWindow(true);
                        this.TheDesktopLoginWindow.Show(function () {
                            _this.Window.Enabled(false);
                        });
                    }
                };
                return StartupWindowControls;
            })();
            var DesktopStartupWindow = (function (_super) {
                __extends(DesktopStartupWindow, _super);
                function DesktopStartupWindow() {
                    _super.call(this, "My App");

                    if (!this.WindowControls) {
                        this.WindowControls = new StartupWindowControls(false, this);
                    }

                    this.CloseButton.Visible(false);
                    this.ResizeEnabled(false);
                    this.DragEnabled(false);

                    this.Rows.Add(this.WindowControls.Row1);

                    this.OnResize.Attach(new TSUI.Events.ResizeEventHandler(this.WindowControls._This_OnResize, this.WindowControls));
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
        })(Apps.My || (Apps.My = {}));
        var My = Apps.My;
    })(TSUI.Apps || (TSUI.Apps = {}));
    var Apps = TSUI.Apps;
})(TSUI || (TSUI = {}));

var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    (function (Apps) {
        /*
        Copyright Edward Nutting 2013
        Author: Edward Nutting
        Date: Jul 8 18:31 2013
        
        URL: https://typescriptui.codeplex.com/
        Modifications:
        - 8/Jul/13 : Initial version.
        
        License: https://typescriptui.codeplex.com/license
        */
        /// <reference path="../Lib/Build/IApp.d.ts" />
        /// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
        /// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
        /// <reference path="../Definitions/jquery.d.ts" />
        (function (Demo) {
            var LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra felis nec erat fermentum malesuada gravida odio pulvinar. Fusce elit massa, hendrerit sit amet vehicula vitae, porta in lorem. Suspendisse volutpat eros sed nibh elementum tincidunt. Nam nulla nibh, dapibus.";

            var SMW_Url = "https://www.slidemyway.co.uk";
            var Download_Url = "https://typescriptui.codeplex.com/";
            var TypeScript_Url = "https://typescript.codeplex.com/";

            var isMobile = false;

            var DemoApp = (function () {
                function DemoApp() {
                    this.MainContainer = null;
                    this.StartArgs = null;
                }
                DemoApp.prototype.Run = function (args, container) {
                    if (typeof args === "undefined") { args = []; }
                    if (typeof container === "undefined") { container = $("body"); }
                    this.StartArgs = args;
                    this.MainContainer = container;

                    this.MainContainer.addClass("DemoApp");

                    isMobile = window.location.hash === "#mobile" && window.location.search !== "?mode=desktop";

                    TSUI.Animation.AppWindowAnimator.UseCanvasRenderIfSensible = false;

                    //#region Show
                    var _this = this;

                    if (isMobile) {
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
                    } else {
                        if (!_this.Init(function () {
                            _this.TheStartupWindow.Enabled(false);

                            _this.TheStartupWindow.Width(new TSUI.UI.CSSNumber(100, "%"));
                            _this.TheStartupWindow.Height(new TSUI.UI.CSSNumber(100, "%"));

                            _this.TheStartupWindow.Show(function () {
                                _this.TheStartupWindow.Enabled(true);
                            }, new TSUI.Animation.FadeAnimator());
                        })) {
                            alert("Failed to initialise properly!");
                        }
                    }
                    //#endregion
                };

                DemoApp.prototype.InitSplashScreen = function () {
                    if (isMobile) {
                        this.TheSplashScreen = new TSUI.UI.MobileSplashScreen("TypeScript UI");
                        this.TheSplashScreen.ConstructDOM(this.MainContainer);
                    } else {
                        this.TheSplashScreen = new TSUI.UI.DesktopSplashScreen("TypeScript UI");
                        this.TheSplashScreen.ConstructDOM(this.MainContainer);
                    }
                };
                DemoApp.prototype.ShowSplashScreen = function (callback) {
                    this.TheSplashScreen.Show(function () {
                        if (callback) {
                            callback();
                        }
                    }, new TSUI.Animation.Animator());
                };

                DemoApp.prototype.Init = function (callback) {
                    if (typeof callback === "undefined") { callback = null; }
                    try  {
                        this.InitStartupWindow(callback);
                        return true;
                    } catch (e) {
                    }
                    return false;
                };
                DemoApp.prototype.InitStartupWindow = function (callback) {
                    if (typeof callback === "undefined") { callback = null; }
                    if (isMobile) {
                        this.TheStartupWindow = new MobileStartupWindow();
                    } else {
                        this.TheStartupWindow = new DesktopStartupWindow();
                    }
                    this.TheStartupWindow.ConstructDOM(this.MainContainer, callback);
                };
                return DemoApp;
            })();
            Demo.DemoApp = DemoApp;

            var StartupWindowControls = (function () {
                function StartupWindowControls(MobileMode, AWindow) {
                    var _this = this;
                    this.ScreenshotsFolder_Url = "Images/Screenshots/420x200/";
                    this.Window = AWindow;

                    if (MobileMode) {
                        this.ScreenshotsFolder_Url = MobileStartupWindow.ScreenshotsFolder_Url;
                    }

                    if (!this.AboutTile) {
                        this.AboutTile = new TSUI.UI.Tile(TSUI.UI.TileSizes.Medium, TSUI.UI.TileTypes.Iconic);
                    }
                    if (!this.MobileDemoTile) {
                        this.MobileDemoTile = new TSUI.UI.Tile(TSUI.UI.TileSizes.Medium, TSUI.UI.TileTypes.Flip);
                    }
                    if (!this.SlideMyWayTile) {
                        this.SlideMyWayTile = new TSUI.UI.Tile(TSUI.UI.TileSizes.Medium, TSUI.UI.TileTypes.Iconic);
                    }
                    if (!this.DesktopDemoTile) {
                        this.DesktopDemoTile = new TSUI.UI.Tile(TSUI.UI.TileSizes.Medium, TSUI.UI.TileTypes.Flip);
                    }
                    if (!this.ScreenshotsTile) {
                        this.ScreenshotsTile = new TSUI.UI.Tile(TSUI.UI.TileSizes.Large, TSUI.UI.TileTypes.Cycle);
                    }
                    if (!this.DownloadTile) {
                        this.DownloadTile = new TSUI.UI.Tile(TSUI.UI.TileSizes.Medium, TSUI.UI.TileTypes.Iconic);
                    }
                    if (!this.TypeScriptTile) {
                        this.TypeScriptTile = new TSUI.UI.Tile(TSUI.UI.TileSizes.Medium, TSUI.UI.TileTypes.Flip);
                    }

                    this.Row1 = new TSUI.UI.StartupWindow_Row(MobileMode);
                    this.Row2 = new TSUI.UI.StartupWindow_Row(MobileMode);

                    this.Row1_Group1 = new TSUI.UI.StartupWindow_Group(MobileMode);
                    this.Row1_Group2 = new TSUI.UI.StartupWindow_Group(MobileMode);
                    this.Row2_Group1 = new TSUI.UI.StartupWindow_Group(MobileMode);
                    this.Row2_Group2 = new TSUI.UI.StartupWindow_Group(MobileMode);

                    this.AboutTile.AddClass("AboutTile");
                    this.AboutTile.NameLabel.Text("About");
                    this.AboutTile.IconBox.Source(TSUI.UI.TileIcons.About);
                    this.AboutTile.ShowCounter(false);
                    this.AboutTile.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.AboutTile_OnClick, this));
                    this.AboutTile.RelativeLayoutOn();

                    this.MobileDemoTile.AddClass("MobileDemoTile");
                    this.MobileDemoTile.NameLabel.Text("Mobile");
                    this.MobileDemoTile.Counter.Text("9+");
                    if (isMobile) {
                        this.MobileDemoTile.TextLabel.Text("View a mobile size demo...");
                    } else {
                        this.MobileDemoTile.TextLabel.Text("Disabled for desktop mode. Use #mobile");
                    }
                    this.MobileDemoTile.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.MobileDemoTile_OnClick, this));
                    this.MobileDemoTile.Backgrounds.Add(new TSUI.UI.TileBackground("Images/Tiles/Demo-Tile-Background.png"));
                    this.MobileDemoTile.RelativeLayoutOn();

                    this.SlideMyWayTile.AddClass("SlideMyWayTile");
                    this.SlideMyWayTile.NameLabel.Text("Slide My Way");
                    this.SlideMyWayTile.IconBox.Source(MobileStartupWindow.ScreenshotsFolder_Url + "SMW-Ad.png");
                    this.SlideMyWayTile.ShowCounter(false);
                    this.SlideMyWayTile.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.SlideMyWayTile_OnClick, this));
                    this.SlideMyWayTile.RelativeLayoutOn();

                    this.DesktopDemoTile.AddClass("DesktopDemoTile");
                    this.DesktopDemoTile.NameLabel.Text("Desktop");
                    this.DesktopDemoTile.Counter.Text("9+");
                    if (!isMobile) {
                        this.DesktopDemoTile.TextLabel.Text("View a desktop size demo...");
                    } else {
                        this.DesktopDemoTile.TextLabel.Text("Disabled on mobile. Use ?mode=desktop");
                    }
                    this.DesktopDemoTile.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.DesktopDemoTile_OnClick, this));
                    this.DesktopDemoTile.Backgrounds.Add(new TSUI.UI.TileBackground("Images/Tiles/Demo-Tile-Background.png"));
                    this.DesktopDemoTile.RelativeLayoutOn();

                    this.ScreenshotsTile.AddClass("ScreenshotsTile");
                    this.ScreenshotsTile.NameLabel.Text("Screenshots");
                    this.ScreenshotsTile.Backgrounds.Add(new TSUI.UI.TileBackground(this.ScreenshotsFolder_Url + "Buttons.png"));
                    this.ScreenshotsTile.Backgrounds.Add(new TSUI.UI.TileBackground(this.ScreenshotsFolder_Url + "Check-Boxes.png"));
                    this.ScreenshotsTile.Backgrounds.Add(new TSUI.UI.TileBackground(this.ScreenshotsFolder_Url + "Image-Box.png"));
                    this.ScreenshotsTile.Backgrounds.Add(new TSUI.UI.TileBackground(this.ScreenshotsFolder_Url + "Progress-Bars.png"));
                    this.ScreenshotsTile.Backgrounds.Add(new TSUI.UI.TileBackground(this.ScreenshotsFolder_Url + "Window-And-Tabs.png"));
                    this.ScreenshotsTile.Backgrounds.Add(new TSUI.UI.TileBackground(this.ScreenshotsFolder_Url + "SMW-Ad.png"));
                    this.ScreenshotsTile.NameLabel.ApplyStyle("color", "#000");
                    this.ScreenshotsTile.ShowCounter(false);
                    this.ScreenshotsTile.RelativeLayoutOn();

                    this.DownloadTile.AddClass("DownloadTile");
                    this.DownloadTile.NameLabel.Text("Download");
                    this.DownloadTile.ShowCounter(false);
                    this.DownloadTile.IconBox.Source(TSUI.UI.TileIcons.Download);
                    this.DownloadTile.TextLabel.Text("Try TypeScript UI today! It's free, open-source and easy.");
                    this.DownloadTile.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.DownloadTile_OnClick, this));
                    this.DownloadTile.RelativeLayoutOn();

                    this.TypeScriptTile.AddClass("TypeScriptTile");
                    this.TypeScriptTile.NameLabel.Text("What is TypeScript?");
                    this.TypeScriptTile.ShowCounter(false);
                    this.TypeScriptTile.IconBox.Source(TSUI.UI.TileIcons.About);
                    if (MobileMode) {
                        this.TypeScriptTile.TextLabel.Text("TypeScript is a language from Microsoft. Find out more...");
                    } else {
                        this.TypeScriptTile.TextLabel.Text("TypeScript is a web language from Microsoft which compiles to JavaScript. Find out more...");
                    }
                    this.TypeScriptTile.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.TypeScriptTile_OnClick, this));
                    this.TypeScriptTile.RelativeLayoutOn();

                    this.Row1.Groups.Add(this.Row1_Group1);
                    this.Row1.Groups.Add(this.Row1_Group2);
                    this.Row2.Groups.Add(this.Row2_Group1);
                    this.Row2.Groups.Add(this.Row2_Group2);

                    this.Row1_Group1.Tiles.Add(this.AboutTile);
                    this.Row1_Group1.Tiles.Add(this.MobileDemoTile);
                    this.Row1_Group2.Tiles.Add(this.SlideMyWayTile);
                    this.Row1_Group2.Tiles.Add(this.DesktopDemoTile);

                    this.Row2_Group1.Tiles.Add(this.ScreenshotsTile);
                    this.Row2_Group2.Tiles.Add(this.DownloadTile);
                    this.Row2_Group2.Tiles.Add(this.TypeScriptTile);

                    setTimeout(function () {
                        if (isMobile) {
                            _this.InitMobileDemoWindow();
                        } else {
                            _this.InitDesktopDemoWindow();
                        }
                    }, 500);
                }
                StartupWindowControls.prototype._This_OnResize = function (eventArgs) {
                    this.PositionDesktopDemoWindow();
                };

                StartupWindowControls.prototype.InitDesktopDemoWindow = function () {
                    if (!this.TheDesktopDemoWindow) {
                        this.TheDesktopDemoWindow = new DesktopDemoWindow();
                        this.TheDesktopDemoWindow.OnClose.Attach(new TSUI.Events.CloseEventHandler(function () {
                            this.Window.Enabled(true);
                        }, this));
                        this.TheDesktopDemoWindow.ConstructDOM(this.Window._rootElement.parent());
                        this.TheDesktopDemoWindow.DestroyDOMOnClose = false;
                    }
                };
                StartupWindowControls.prototype.InitMobileDemoWindow = function () {
                    if (!this.TheMobileDemoWindow) {
                        this.TheMobileDemoWindow = new MobileDemoWindow();
                        this.TheMobileDemoWindow.OnClose.Attach(new TSUI.Events.CloseEventHandler(function () {
                            this.Window.Enabled(true);
                        }, this));
                        this.TheMobileDemoWindow.ConstructDOM(this.Window._rootElement.parent());
                        this.TheMobileDemoWindow.DestroyDOMOnClose = false;
                    }
                };

                StartupWindowControls.prototype.PositionDesktopDemoWindow = function (overrideVisible) {
                    if (typeof overrideVisible === "undefined") { overrideVisible = false; }
                    if (!this.TheDesktopDemoWindow) {
                        return;
                    }
                    if (this.TheDesktopDemoWindow.Visible() || overrideVisible) {
                        var WantedWidthPerc = 0.8;
                        var WantedHeightPerc = 0.8;

                        this.TheDesktopDemoWindow.Width(new TSUI.UI.CSSNumber(WantedWidthPerc * 100, "%"));
                        this.TheDesktopDemoWindow.Height(new TSUI.UI.CSSNumber(WantedHeightPerc * 100, "%"));

                        var minWidth = 500;
                        var maxWidth = 1000;
                        var minHeight = 500;
                        var maxHeight = 900;

                        this.TheDesktopDemoWindow.MinWidth(new TSUI.UI.CSSNumber(minWidth));
                        this.TheDesktopDemoWindow.MinHeight(new TSUI.UI.CSSNumber(minHeight));
                        this.TheDesktopDemoWindow.MaxWidth(new TSUI.UI.CSSNumber(maxWidth));
                        this.TheDesktopDemoWindow.MaxHeight(new TSUI.UI.CSSNumber(maxHeight));

                        var windowWidth = this.Window._rootElement.parent().width();
                        var widthPx = Math.max(minWidth, Math.min(maxWidth, windowWidth * WantedWidthPerc));
                        var widthPerc = (widthPx / windowWidth) * 100;
                        var leftPerc = (100 - widthPerc) / 2;

                        var windowHeight = this.Window._rootElement.parent().height();
                        var heightPx = Math.max(minHeight, Math.min(maxHeight, windowHeight * WantedHeightPerc));
                        var heightPerc = (heightPx / windowHeight) * 100;
                        var topPerc = (100 - heightPerc) / 2;

                        this.TheDesktopDemoWindow.Top(new TSUI.UI.CSSNumber(topPerc, "%"));
                        this.TheDesktopDemoWindow.Left(new TSUI.UI.CSSNumber(leftPerc, "%"));
                    }
                };
                StartupWindowControls.prototype.PositionMobileDemoWindow = function (overrideVisible) {
                    if (typeof overrideVisible === "undefined") { overrideVisible = false; }
                    if (!this.TheMobileDemoWindow) {
                        return;
                    }
                    if (this.TheMobileDemoWindow.Visible() || overrideVisible) {
                        this.TheMobileDemoWindow.Width(new TSUI.UI.CSSNumber(100, "%"));
                        this.TheMobileDemoWindow.Height(new TSUI.UI.CSSNumber(100, "%"));

                        this.TheMobileDemoWindow.MinWidth(new TSUI.UI.CSSNumber(235));
                        this.TheMobileDemoWindow.MinHeight(new TSUI.UI.CSSNumber(320));
                        this.TheMobileDemoWindow.MaxWidth(new TSUI.UI.CSSNumber(100, "%"));
                        this.TheMobileDemoWindow.MaxHeight(new TSUI.UI.CSSNumber(100, "%"));

                        this.TheMobileDemoWindow.Top(new TSUI.UI.CSSNumber(0, "%"));
                        this.TheMobileDemoWindow.Left(new TSUI.UI.CSSNumber(0, "%"));
                    }
                };

                StartupWindowControls.prototype.AboutTile_OnClick = function (eventArgs) {
                    if (!this.AboutPageWindow) {
                        this.AboutPageWindow = new TSUI.UI.StaticPageWindow("Static/Pages/Demo%20App/About.html");
                        this.AboutPageWindow.ConstructDOM(this.Window._rootElement.parent());
                        this.AboutPageWindow.PositionCenterWindow();
                    }
                    this.AboutPageWindow.Show();
                };
                StartupWindowControls.prototype.MobileDemoTile_OnClick = function (eventArgs) {
                    var _this = this;
                    if (isMobile) {
                        this.PositionMobileDemoWindow(true);
                        this.TheMobileDemoWindow.Show(function () {
                            _this.Window.Enabled(false);
                        });
                    } else {
                        var notif = new TSUI.UI.Notification(this.Window.__UID, "Disabled for desktop version.");
                        notif.ConstructDOM(this.Window._rootElement, function () {
                            notif.ShowFor(5);
                        });
                    }
                };
                StartupWindowControls.prototype.SlideMyWayTile_OnClick = function (eventArgs) {
                    TSUI.OpenInNewWindow(SMW_Url);
                };
                StartupWindowControls.prototype.DesktopDemoTile_OnClick = function (eventArgs) {
                    if (!isMobile) {
                        var _this = this;
                        this.PositionDesktopDemoWindow(true);
                        this.TheDesktopDemoWindow.Show(function () {
                            _this.Window.Enabled(false);
                        });
                    } else {
                        var notif = new TSUI.UI.Notification(this.Window.__UID, "Disabled for mobile version.");
                        notif.ConstructDOM(this.Window._rootElement, function () {
                            notif.ShowFor(5);
                        });
                    }
                };
                StartupWindowControls.prototype.DownloadTile_OnClick = function (eventArgs) {
                    TSUI.OpenInNewWindow(Download_Url);
                };
                StartupWindowControls.prototype.TypeScriptTile_OnClick = function (eventArgs) {
                    TSUI.OpenInNewWindow(TypeScript_Url);
                };
                return StartupWindowControls;
            })();
            var DesktopStartupWindow = (function (_super) {
                __extends(DesktopStartupWindow, _super);
                function DesktopStartupWindow() {
                    _super.call(this, "TypeScript UI");

                    this.WindowControls = new StartupWindowControls(false, this);

                    this.CloseButton.Visible(false);
                    this.ResizeEnabled(false);
                    this.DragEnabled(false);

                    this.Rows.Add(this.WindowControls.Row1);
                    this.Rows.Add(this.WindowControls.Row2);

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

                    this.CloseButton.Visible(false);
                    this.ResizeEnabled(false);
                    this.DragEnabled(false);

                    this.Rows.Add(this.WindowControls.Row1);
                    this.Rows.Add(this.WindowControls.Row2);

                    this.OnResize.Attach(new TSUI.Events.ResizeEventHandler(this.WindowControls._This_OnResize, this.WindowControls));
                }
                MobileStartupWindow.ScreenshotsFolder_Url = "Images/Screenshots/200x200/";
                return MobileStartupWindow;
            })(TSUI.UI.MobileStartupWindow);

            var DesktopDemoWindow = (function (_super) {
                __extends(DesktopDemoWindow, _super);
                function DesktopDemoWindow() {
                    _super.call(this);

                    this.OptimiseConstructForGraphics = isMobile;

                    this.AddClass("DemoWindow");

                    this.Title("Desktop Demo");

                    this.MainTabControl = new TSUI.UI.TabControl();

                    this.TextTab = new TSUI.UI.Tab();
                    this.ButtonsTab = new TSUI.UI.Tab();
                    this.ChoicesTab = new TSUI.UI.Tab();
                    this.InputTab = new TSUI.UI.Tab();
                    this.MiscTab = new TSUI.UI.Tab();

                    this.TextTab.Name("Text & Containers");
                    this.ButtonsTab.Name("Buttons & Lists");
                    this.ChoicesTab.Name("Choices");
                    this.InputTab.Name("Input");
                    this.MiscTab.Name("Misc");

                    this.ContentPanel.Children.Add(this.MainTabControl);

                    this.MainTabControl.Tabs.Add(this.TextTab);
                    this.MainTabControl.Tabs.Add(this.ButtonsTab);
                    this.MainTabControl.Tabs.Add(this.ChoicesTab);
                    this.MainTabControl.Tabs.Add(this.InputTab);
                    this.MainTabControl.Tabs.Add(this.MiscTab);

                    var TextTab_StackPanel = new TSUI.UI.StackPanel();
                    TextTab_StackPanel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    for (var i = 0; i < 4; i++) {
                        var TextTab_NewRow = new TSUI.UI.StackPanelRow();

                        if (i == 0) {
                            var newLabel = new TSUI.UI.Label(LoremIpsum);
                            newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                            newLabel.HTML("Below are expandables containing:<br /><ol>" + "<li>A basic label.</li>" + "<li>A label with custom HTML.</li>" + "<li>A label with a link set using the Link method.</li>" + "</ol>");
                            TextTab_NewRow.Children.Add(newLabel);
                        } else {
                            var newExpandable = new TSUI.UI.Expandable();
                            newExpandable.Title("Expandable " + i.toString());
                            newExpandable.ContentPanel.RelativeLayoutOn();

                            var newLabel = new TSUI.UI.Label(LoremIpsum);
                            newLabel.RelativeLayoutOn();
                            if (i == 2) {
                                newLabel.HTML("<b>" + LoremIpsum.substring(0, 28) + "</b>" + "<a href=\"https://typescriptui.codeplex.com\" target=\"_blank\">" + LoremIpsum.substring(28, 39) + "</a>" + "<span>" + LoremIpsum.substring(39) + "</span>");
                            } else if (i == 3) {
                                newLabel.Link("https://typescriptui.codeplex.com");
                            }

                            newExpandable.ContentPanel.Children.Add(newLabel);
                            TextTab_NewRow.Children.Add(newExpandable);
                        }

                        TextTab_StackPanel.Rows.Add(TextTab_NewRow);
                    }

                    var ButtonsTab_StackPanel = new TSUI.UI.StackPanel();
                    ButtonsTab_StackPanel.Width(new TSUI.UI.CSSNumber(100, "%"));

                    var ButtonsTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are buttons which:<br /><ol>" + "<li>Does nothing</li>" + "<li>Opens a message box</li>" + "<li>Displays a notification</li>" + "</ol>");
                    ButtonsTab_NewRow.Children.Add(newLabel);
                    ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

                    ButtonsTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 3; j++) {
                        var newButton = new TSUI.UI.Button();
                        newButton.RelativeLayoutOn();
                        newButton.Text("Button " + (j + 1).toString());
                        if (j == 1) {
                            newButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(function (eventArgs) {
                                var newMsgBox = new TSUI.UI.MessageBox("A Message Box", "This is a sample message box! You clicked Button 2.");
                                newMsgBox.ConstructDOM(this._rootElement);
                                newMsgBox.PositionCenterParent(this);
                                newMsgBox.Show();
                            }, this));
                        } else if (j == 2) {
                            newButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(function (eventArgs) {
                                var newNotif = new TSUI.UI.Notification(this.__UID, "This is a sample notification! You clicked Button 3.");
                                newNotif.ConstructDOM(this._rootElement);
                                newNotif.ShowFor(4);
                            }, this));
                        }

                        ButtonsTab_NewRow.Children.Add(newButton);
                    }
                    ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

                    var ButtonsTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are drop down boxes which:<br /><ol>" + "<li>Contains 5 items</li>" + "<li>Contains 15 items</li>" + "<li>Is disabled</li>" + "</ol>");
                    ButtonsTab_NewRow.Children.Add(newLabel);
                    ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

                    ButtonsTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 3; j++) {
                        var newDropDown = new TSUI.UI.DropDownBox();
                        newDropDown.RelativeLayoutOn();
                        for (i = j * 5; i < 5 + (10 * j); i++) {
                            var newItem = new TSUI.UI.ListItem("Drop Item " + (i + 1).toString(), (i + 1).toString());
                            newDropDown.Items.Add(newItem);
                        }
                        if (j == 2) {
                            newDropDown.Enabled(false);
                        }

                        ButtonsTab_NewRow.Children.Add(newDropDown);
                    }
                    ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

                    var ButtonsTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are list boxes which:<br /><ol>" + "<li>Contains 5 items</li>" + "<li>Contains 15 items</li>" + "<li>Is disabled</li>" + "</ol>");
                    ButtonsTab_NewRow.Children.Add(newLabel);
                    ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

                    ButtonsTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 3; j++) {
                        var newList = new TSUI.UI.ListBox();
                        newList.RelativeLayoutOn();
                        for (i = j * 5; i < 5 + (10 * j); i++) {
                            var newItem = new TSUI.UI.ListItem("List Item " + (i + 1).toString(), (i + 1).toString());
                            newList.Items.Add(newItem);
                        }
                        if (j == 2) {
                            newList.Enabled(false);
                        }

                        ButtonsTab_NewRow.Children.Add(newList);
                    }
                    ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

                    var ChoicesTab_StackPanel = new TSUI.UI.StackPanel();
                    ChoicesTab_StackPanel.Width(new TSUI.UI.CSSNumber(100, "%"));

                    var ChoicesTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are check boxes which:<br /><ol>" + "<li>Has label on the right</li>" + "<li>Is checked; has label on the left</li>" + "<li>Is disabled</li>" + "</ol>");
                    ChoicesTab_NewRow.Children.Add(newLabel);
                    ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

                    ChoicesTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 3; j++) {
                        var newCheckBox = new TSUI.UI.CheckBox();
                        newCheckBox.RelativeLayoutOn();
                        newCheckBox.Text("Check box " + (j + 1).toString());
                        if (j == 1) {
                            newCheckBox.TextAlign(TSUI.UI.TextAlignments.Left);
                            newCheckBox.Checked(true);
                        } else if (j == 2) {
                            newCheckBox.Enabled(false);
                        }

                        ChoicesTab_NewRow.Children.Add(newCheckBox);
                    }
                    ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

                    var ChoicesTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are radio buttons which:<br /><ol>" + "<li>Has label on the right; grouped with 1-3</li>" + "<li>Is checked; has label on the left; grouped with 1-3</li>" + "<li>Is disabled; grouped with 1-3</li>" + "<li>Is ungrouped</li>" + "<li>Is ungrouped</li>" + "</ol>");
                    ChoicesTab_NewRow.Children.Add(newLabel);
                    ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

                    ChoicesTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 5; j++) {
                        var newRadioButton = new TSUI.UI.RadioButton();
                        newRadioButton.RelativeLayoutOn();
                        newRadioButton.Text("Radio button " + (j + 1).toString());
                        if (j < 3) {
                            newRadioButton.Group("ChoicesTab_DemoRadioButtons");
                        }
                        if (j == 1) {
                            newRadioButton.TextAlign(TSUI.UI.TextAlignments.Left);
                            newRadioButton.Checked(true);
                        } else if (j == 2) {
                            newRadioButton.Enabled(false);
                        }

                        ChoicesTab_NewRow.Children.Add(newRadioButton);
                    }
                    ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

                    var ChoicesTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are toggle buttons which:<br /><ol>" + "<li>Is unchecked</li>" + "<li>Is checked</li>" + "<li>Is disabled; has custom text</li>" + "</ol>");
                    ChoicesTab_NewRow.Children.Add(newLabel);
                    ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

                    ChoicesTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 3; j++) {
                        var newToggleButton = new TSUI.UI.ToggleButton();
                        newToggleButton.RelativeLayoutOn();
                        if (j == 1) {
                            newToggleButton.Checked(true);
                        } else if (j == 2) {
                            newToggleButton.Enabled(false);
                            newToggleButton.Text("Dis");
                        }

                        ChoicesTab_NewRow.Children.Add(newToggleButton);
                    }
                    ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

                    var InputTab_StackPanel = new TSUI.UI.StackPanel();
                    InputTab_StackPanel.Width(new TSUI.UI.CSSNumber(100, "%"));

                    var InputTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are text boxes which:<br /><ol>" + "<li>Is normal</li>" + "<li>Is in password mode</li>" + "<li>Is disabled; has custom text</li>" + "</ol>");
                    InputTab_NewRow.Children.Add(newLabel);
                    InputTab_StackPanel.Rows.Add(InputTab_NewRow);

                    InputTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 3; j++) {
                        var newTextBox = new TSUI.UI.TextBox();
                        newTextBox.RelativeLayoutOn();
                        newTextBox.Text("Text box " + (j + 1).toString());
                        if (j == 1) {
                            newTextBox.Masked(true);
                        } else if (j == 2) {
                            newTextBox.Enabled(false);
                        }

                        InputTab_NewRow.Children.Add(newTextBox);
                    }
                    InputTab_StackPanel.Rows.Add(InputTab_NewRow);

                    var InputTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are numeric up downs which:<br /><ol>" + "<li>Is unlimited; 2 d.p; increment of 0.1</li>" + "<li>Is limited from -100 to 100; 0 d.p.; increment of 5</li>" + "<li>Is disabled</li>" + "</ol>");
                    InputTab_NewRow.Children.Add(newLabel);
                    InputTab_StackPanel.Rows.Add(InputTab_NewRow);

                    InputTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 3; j++) {
                        var newNumericUpDown = new TSUI.UI.NumericUpDown();
                        newNumericUpDown.RelativeLayoutOn();
                        if (j == 0) {
                            newNumericUpDown.Min(null);
                            newNumericUpDown.Max(null);
                            newNumericUpDown.DecimalPlaces(2);
                            newNumericUpDown.Increment(0.1);
                        } else if (j == 1) {
                            newNumericUpDown.Min(-100);
                            newNumericUpDown.Max(100);
                            newNumericUpDown.DecimalPlaces(0);
                            newNumericUpDown.Increment(5);
                        } else if (j == 2) {
                            newNumericUpDown.Enabled(false);
                        }

                        InputTab_NewRow.Children.Add(newNumericUpDown);
                    }
                    InputTab_StackPanel.Rows.Add(InputTab_NewRow);

                    var InputTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are track bars which:<br /><ol>" + "<li>Has min to max of -20 to 100; is in discrete mode with 5 divisions</li>" + "<li>Has min to max of 0 to 100; is in continuous mode</li>" + "<li>Is disabled</li>" + "</ol>");
                    InputTab_NewRow.Children.Add(newLabel);
                    InputTab_StackPanel.Rows.Add(InputTab_NewRow);

                    InputTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 3; j++) {
                        var newTrackBar = new TSUI.UI.TrackBar();
                        newTrackBar.RelativeLayoutOn();
                        if (j == 0) {
                            newTrackBar.Min(-20);
                            newTrackBar.Max(100);
                            newTrackBar.Mode(TSUI.UI.TrackBarModes.Discrete);
                            newTrackBar.Divisions(5);
                        } else if (j == 1) {
                            newTrackBar.Min(0);
                            newTrackBar.Max(100);
                            newTrackBar.Mode(TSUI.UI.TrackBarModes.Continuous);
                            newTrackBar.Divisions(1);
                        } else if (j == 2) {
                            newTrackBar.Enabled(false);
                        }

                        InputTab_NewRow.Children.Add(newTrackBar);
                    }
                    InputTab_StackPanel.Rows.Add(InputTab_NewRow);

                    var MiscTab_StackPanel = new TSUI.UI.StackPanel();
                    MiscTab_StackPanel.Width(new TSUI.UI.CSSNumber(100, "%"));

                    var MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are image boxes which:<br /><ol>" + "<li>Is normal</li>" + "<li>Acts as an image link</li>" + "<li>Is disabled</li>" + "</ol>");
                    MiscTab_NewRow.Children.Add(newLabel);
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 3; j++) {
                        var newImageBox = new TSUI.UI.ImageBox("Images/Logo/TypeScriptUI.png", "Image box " + (j + 1).toString());
                        newImageBox.RelativeLayoutOn();
                        newImageBox.Width(new TSUI.UI.CSSNumber(213));
                        newImageBox.Height(new TSUI.UI.CSSNumber(50));
                        if (j == 1) {
                            newImageBox.NavigateToOnClick("https://typescriptui.codeplex.com");
                        } else if (j == 2) {
                            newImageBox.Enabled(false);
                        }

                        MiscTab_NewRow.Children.Add(newImageBox);
                    }
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    var MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are SVG boxes which:<br /><ol>" + "<li>Is normal</li>" + "<li>Acts as an image link</li>" + "<li>Is disabled</li>" + "</ol>");
                    MiscTab_NewRow.Children.Add(newLabel);
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 3; j++) {
                        var newSVGBox = new TSUI.UI.SVGBox("SVG/Circle.svg");
                        newSVGBox.RelativeLayoutOn();
                        newSVGBox.Width(new TSUI.UI.CSSNumber(200));
                        newSVGBox.Height(new TSUI.UI.CSSNumber(100));
                        if (j == 1) {
                            newSVGBox.NavigateToOnClick("https://typescriptui.codeplex.com");
                        } else if (j == 2) {
                            newSVGBox.Enabled(false);
                        }

                        MiscTab_NewRow.Children.Add(newSVGBox);
                    }
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    var MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are progress spinners which:<br /><ol>" + "<li>Is circular</li>" + "<li>Is horizontal</li>" + "<li>Is vertical</li>" + "</ol>");
                    MiscTab_NewRow.Children.Add(newLabel);
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 3; j++) {
                        var newProgressSpinner = new TSUI.UI.ProgressSpinner();
                        newProgressSpinner.RelativeLayoutOn();
                        if (j == 0) {
                            newProgressSpinner.Type(TSUI.UI.ProgressSpinnerTypes.Circular);
                        } else if (j == 1) {
                            newProgressSpinner.Type(TSUI.UI.ProgressSpinnerTypes.Horizontal);
                        } else if (j == 2) {
                            newProgressSpinner.Type(TSUI.UI.ProgressSpinnerTypes.Vertical);
                        }

                        MiscTab_NewRow.Children.Add(newProgressSpinner);
                    }
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    var MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are progress bars which:<br /><ol>" + "<li>Is circular</li>" + "<li>Is horizontal</li>" + "<li>Is vertical; is reversed (i.e. bottom to top)</li>" + "</ol>");
                    MiscTab_NewRow.Children.Add(newLabel);
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 3; j++) {
                        var newProgressBar = new TSUI.UI.ProgressBar();
                        newProgressBar.RelativeLayoutOn();
                        newProgressBar.Progress((j + 1) * (90 / 3));
                        if (j == 0) {
                            newProgressBar.Type(TSUI.UI.ProgressBarTypes.Circular);
                        } else if (j == 1) {
                            newProgressBar.Type(TSUI.UI.ProgressBarTypes.Horizontal);
                        } else if (j == 2) {
                            newProgressBar.Type(TSUI.UI.ProgressBarTypes.Vertical);
                            newProgressBar.Reverse(true);
                        }

                        MiscTab_NewRow.Children.Add(newProgressBar);
                    }
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    this.TextTab.Children.Add(TextTab_StackPanel);
                    this.ButtonsTab.Children.Add(ButtonsTab_StackPanel);
                    this.ChoicesTab.Children.Add(ChoicesTab_StackPanel);
                    this.InputTab.Children.Add(InputTab_StackPanel);
                    this.MiscTab.Children.Add(MiscTab_StackPanel);
                }
                return DesktopDemoWindow;
            })(TSUI.UI.Window);
            var MobileDemoWindow = (function (_super) {
                __extends(MobileDemoWindow, _super);
                function MobileDemoWindow() {
                    _super.call(this);

                    this.OptimiseConstructForGraphics = isMobile;

                    this.AddClass("DemoWindow");

                    this.Title("Mobile Demo");

                    this.MainTabControl = new TSUI.UI.TabControl();

                    this.TextTab = new TSUI.UI.Tab();
                    this.ButtonsTab = new TSUI.UI.Tab();
                    this.ChoicesTab = new TSUI.UI.Tab();
                    this.InputTab = new TSUI.UI.Tab();
                    this.MiscTab = new TSUI.UI.Tab();

                    this.TextTab.Name("Text & Containers");
                    this.ButtonsTab.Name("Buttons & Lists");
                    this.ChoicesTab.Name("Choices");
                    this.InputTab.Name("Input");
                    this.MiscTab.Name("Misc");

                    this.ContentPanel.Children.Add(this.MainTabControl);

                    this.MainTabControl.Tabs.Add(this.TextTab);
                    this.MainTabControl.Tabs.Add(this.ButtonsTab);
                    this.MainTabControl.Tabs.Add(this.ChoicesTab);
                    this.MainTabControl.Tabs.Add(this.InputTab);
                    this.MainTabControl.Tabs.Add(this.MiscTab);

                    var TextTab_StackPanel = new TSUI.UI.StackPanel();
                    TextTab_StackPanel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    for (var i = 0; i < 4; i++) {
                        var TextTab_NewRow = new TSUI.UI.StackPanelRow();

                        if (i == 0) {
                            var newLabel = new TSUI.UI.Label(LoremIpsum);
                            newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                            newLabel.HTML("Below are expandables containing:<br /><ol>" + "<li>A basic label.</li>" + "<li>A label with custom HTML.</li>" + "<li>A label with a link set using the Link method.</li>" + "</ol>");
                            TextTab_NewRow.Children.Add(newLabel);
                        } else {
                            var newExpandable = new TSUI.UI.Expandable();
                            newExpandable.Title("Expandable " + i.toString());
                            newExpandable.ContentPanel.RelativeLayoutOn();

                            var newLabel = new TSUI.UI.Label(LoremIpsum);
                            newLabel.RelativeLayoutOn();
                            if (i == 2) {
                                newLabel.HTML("<b>" + LoremIpsum.substring(0, 28) + "</b>" + "<a href=\"https://typescriptui.codeplex.com\" target=\"_blank\">" + LoremIpsum.substring(28, 39) + "</a>" + "<span>" + LoremIpsum.substring(39) + "</span>");
                            } else if (i == 3) {
                                newLabel.Link("https://typescriptui.codeplex.com");
                            }

                            newExpandable.ContentPanel.Children.Add(newLabel);
                            TextTab_NewRow.Children.Add(newExpandable);
                        }

                        TextTab_StackPanel.Rows.Add(TextTab_NewRow);
                    }

                    var ButtonsTab_StackPanel = new TSUI.UI.StackPanel();
                    ButtonsTab_StackPanel.Width(new TSUI.UI.CSSNumber(100, "%"));

                    var ButtonsTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are buttons which:<br /><ol>" + "<li>Does nothing</li>" + "<li>Opens a message box</li>" + "<li>Displays a notification</li>" + "</ol>");
                    ButtonsTab_NewRow.Children.Add(newLabel);
                    ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

                    ButtonsTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 3; j++) {
                        var newButton = new TSUI.UI.Button();
                        newButton.RelativeLayoutOn();
                        newButton.Text("Button " + (j + 1).toString());
                        if (j == 1) {
                            newButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(function (eventArgs) {
                                var newMsgBox = new TSUI.UI.MessageBox("A Message Box", "This is a sample message box! You clicked Button 2.");
                                newMsgBox.ConstructDOM(this._rootElement);
                                newMsgBox.PositionCenterParent(this);
                                newMsgBox.Show();
                            }, this));
                        } else if (j == 2) {
                            newButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(function (eventArgs) {
                                var newNotif = new TSUI.UI.Notification(this.__UID, "This is a sample notification! You clicked Button 3.");
                                newNotif.ConstructDOM(this._rootElement);
                                newNotif.ShowFor(4);
                            }, this));
                        }

                        ButtonsTab_NewRow.Children.Add(newButton);
                    }
                    ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

                    var ButtonsTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below is a drop down box which contains 5 items.");
                    ButtonsTab_NewRow.Children.Add(newLabel);
                    ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

                    ButtonsTab_NewRow = new TSUI.UI.StackPanelRow();
                    ButtonsTab_NewRow.ApplyStyle("text-align", "center");
                    var newDropDown = new TSUI.UI.DropDownBox();
                    newDropDown.RelativeLayoutOn();
                    for (i = 0; i < 5; i++) {
                        var newItem = new TSUI.UI.ListItem("Drop Item " + (i + 1).toString(), (i + 1).toString());
                        newDropDown.Items.Add(newItem);
                    }
                    ButtonsTab_NewRow.Children.Add(newDropDown);
                    ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

                    var ButtonsTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below is a list box which contains 15 items.");
                    ButtonsTab_NewRow.Children.Add(newLabel);
                    ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

                    ButtonsTab_NewRow = new TSUI.UI.StackPanelRow();
                    ButtonsTab_NewRow.ApplyStyle("text-align", "center");
                    var newList = new TSUI.UI.ListBox();
                    newList.RelativeLayoutOn();
                    for (i = 0; i < 15; i++) {
                        var newItem = new TSUI.UI.ListItem("List Item " + (i + 1).toString(), (i + 1).toString());
                        newList.Items.Add(newItem);
                    }
                    if (j == 2) {
                        newList.Enabled(false);
                    }

                    ButtonsTab_NewRow.Children.Add(newList);
                    ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

                    var ChoicesTab_StackPanel = new TSUI.UI.StackPanel();
                    ChoicesTab_StackPanel.Width(new TSUI.UI.CSSNumber(100, "%"));

                    var ChoicesTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are check boxes which:<br /><ol>" + "<li>Has label on the right</li>" + "<li>Is checked; has label on the left</li>" + "</ol>");
                    ChoicesTab_NewRow.Children.Add(newLabel);
                    ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

                    ChoicesTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 3; j++) {
                        var newCheckBox = new TSUI.UI.CheckBox();
                        newCheckBox.RelativeLayoutOn();
                        newCheckBox.Text("Check box " + (j + 1).toString());
                        if (j == 1) {
                            newCheckBox.TextAlign(TSUI.UI.TextAlignments.Left);
                            newCheckBox.Checked(true);
                        }

                        ChoicesTab_NewRow.Children.Add(newCheckBox);
                    }
                    ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

                    var ChoicesTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are radio buttons which:<br /><ol>" + "<li>Has label on the right; grouped with 1-3</li>" + "<li>Is checked; has label on the left; grouped with 1-3</li>" + "<li>Is disabled; grouped with 1-3</li>" + "<li>Is ungrouped</li>" + "<li>Is ungrouped</li>" + "</ol>");
                    ChoicesTab_NewRow.Children.Add(newLabel);
                    ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

                    ChoicesTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 5; j++) {
                        var newRadioButton = new TSUI.UI.RadioButton();
                        newRadioButton.RelativeLayoutOn();
                        newRadioButton.Text("Radio button " + (j + 1).toString());
                        if (j < 3) {
                            newRadioButton.Group("ChoicesTab_DemoRadioButtons");
                        }
                        if (j == 1) {
                            newRadioButton.TextAlign(TSUI.UI.TextAlignments.Left);
                            newRadioButton.Checked(true);
                        } else if (j == 2) {
                            newRadioButton.Enabled(false);
                        }

                        ChoicesTab_NewRow.Children.Add(newRadioButton);
                    }
                    ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

                    var ChoicesTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are toggle buttons which:<br /><ol>" + "<li>Is unchecked</li>" + "<li>Is checked</li>" + "<li>Is disabled; has custom text</li>" + "</ol>");
                    ChoicesTab_NewRow.Children.Add(newLabel);
                    ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

                    ChoicesTab_NewRow = new TSUI.UI.StackPanelRow();
                    for (var j = 0; j < 3; j++) {
                        var newToggleButton = new TSUI.UI.ToggleButton();
                        newToggleButton.RelativeLayoutOn();
                        if (j == 1) {
                            newToggleButton.Checked(true);
                        } else if (j == 2) {
                            newToggleButton.Enabled(false);
                            newToggleButton.Text("Dis");
                        }

                        ChoicesTab_NewRow.Children.Add(newToggleButton);
                    }
                    ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

                    var InputTab_StackPanel = new TSUI.UI.StackPanel();
                    InputTab_StackPanel.Width(new TSUI.UI.CSSNumber(100, "%"));

                    var InputTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are text boxes which:<br /><ol>" + "<li>Is normal</li>" + "<li>Is in password mode</li>" + "</ol>");
                    InputTab_NewRow.Children.Add(newLabel);
                    InputTab_StackPanel.Rows.Add(InputTab_NewRow);

                    InputTab_NewRow = new TSUI.UI.StackPanelRow();
                    InputTab_NewRow.ApplyStyle("text-align", "center");
                    for (var j = 0; j < 2; j++) {
                        var newTextBox = new TSUI.UI.TextBox();
                        newTextBox.RelativeLayoutOn();
                        newTextBox.Text("Text box " + (j + 1).toString());
                        if (j == 1) {
                            newTextBox.Masked(true);
                        }

                        InputTab_NewRow.Children.Add(newTextBox);
                    }
                    InputTab_StackPanel.Rows.Add(InputTab_NewRow);

                    var InputTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are numeric up downs which:<br /><ol>" + "<li>Is unlimited; 2 d.p; increment of 0.1</li>" + "<li>Is limited from -100 to 100; 0 d.p.; increment of 5</li>" + "</ol>");
                    InputTab_NewRow.Children.Add(newLabel);
                    InputTab_StackPanel.Rows.Add(InputTab_NewRow);

                    InputTab_NewRow = new TSUI.UI.StackPanelRow();
                    InputTab_NewRow.ApplyStyle("text-align", "center");
                    for (var j = 0; j < 2; j++) {
                        var newNumericUpDown = new TSUI.UI.NumericUpDown();
                        newNumericUpDown.RelativeLayoutOn();
                        if (j == 0) {
                            newNumericUpDown.Min(null);
                            newNumericUpDown.Max(null);
                            newNumericUpDown.DecimalPlaces(2);
                            newNumericUpDown.Increment(0.1);
                        } else if (j == 1) {
                            newNumericUpDown.Min(-100);
                            newNumericUpDown.Max(100);
                            newNumericUpDown.DecimalPlaces(0);
                            newNumericUpDown.Increment(5);
                        }

                        InputTab_NewRow.Children.Add(newNumericUpDown);
                    }
                    InputTab_StackPanel.Rows.Add(InputTab_NewRow);

                    var InputTab_NewRow = new TSUI.UI.StackPanelRow();
                    InputTab_NewRow.ApplyStyle("text-align", "center");
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are track bars which:<br /><ol>" + "<li>Has min to max of -20 to 100; is in discrete mode with 5 divisions</li>" + "<li>Has min to max of 0 to 100; is in continuous mode</li>" + "</ol>");
                    InputTab_NewRow.Children.Add(newLabel);
                    InputTab_StackPanel.Rows.Add(InputTab_NewRow);

                    InputTab_NewRow = new TSUI.UI.StackPanelRow();
                    InputTab_NewRow.ApplyStyle("text-align", "center");
                    for (var j = 0; j < 2; j++) {
                        var newTrackBar = new TSUI.UI.TrackBar();
                        newTrackBar.RelativeLayoutOn();
                        if (j == 0) {
                            newTrackBar.Min(-20);
                            newTrackBar.Max(100);
                            newTrackBar.Mode(TSUI.UI.TrackBarModes.Discrete);
                            newTrackBar.Divisions(5);
                        } else if (j == 1) {
                            newTrackBar.Min(0);
                            newTrackBar.Max(100);
                            newTrackBar.Mode(TSUI.UI.TrackBarModes.Continuous);
                            newTrackBar.Divisions(1);
                        }

                        InputTab_NewRow.Children.Add(newTrackBar);
                    }
                    InputTab_StackPanel.Rows.Add(InputTab_NewRow);

                    var MiscTab_StackPanel = new TSUI.UI.StackPanel();
                    MiscTab_StackPanel.Width(new TSUI.UI.CSSNumber(100, "%"));

                    var MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below is an image box which acts as an image link.");
                    MiscTab_NewRow.Children.Add(newLabel);
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    MiscTab_NewRow.ApplyStyle("text-align", "center");
                    var newImageBox = new TSUI.UI.ImageBox("Images/Logo/TypeScriptUI.png", "Image box " + (j + 1).toString());
                    newImageBox.RelativeLayoutOn();
                    newImageBox.Width(new TSUI.UI.CSSNumber(213));
                    newImageBox.Height(new TSUI.UI.CSSNumber(50));
                    newImageBox.NavigateToOnClick("https://typescriptui.codeplex.com");
                    MiscTab_NewRow.Children.Add(newImageBox);
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    var MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below is an SVG box which is normal.");
                    MiscTab_NewRow.Children.Add(newLabel);
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    MiscTab_NewRow.ApplyStyle("text-align", "center");
                    var newSVGBox = new TSUI.UI.SVGBox("SVG/Circle.svg");
                    newSVGBox.RelativeLayoutOn();
                    newSVGBox.Width(new TSUI.UI.CSSNumber(200));
                    newSVGBox.Height(new TSUI.UI.CSSNumber(100));
                    MiscTab_NewRow.Children.Add(newSVGBox);
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    var MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below is a horizontal progress spinner.");
                    MiscTab_NewRow.Children.Add(newLabel);
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newProgressSpinner = new TSUI.UI.ProgressSpinner();
                    newProgressSpinner.RelativeLayoutOn();
                    newProgressSpinner.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newProgressSpinner.Type(TSUI.UI.ProgressSpinnerTypes.Horizontal);
                    MiscTab_NewRow.Children.Add(newProgressSpinner);
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    var MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    var newLabel = new TSUI.UI.Label(LoremIpsum);
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are progress bars which:<br /><ol>" + "<li>Is circular</li>" + "<li>Is horizontal</li>" + "<li>Is vertical; is reversed (i.e. bottom to top)</li>" + "</ol>");
                    MiscTab_NewRow.Children.Add(newLabel);
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    MiscTab_NewRow = new TSUI.UI.StackPanelRow();
                    MiscTab_NewRow.ApplyStyle("text-align", "center");
                    for (var j = 0; j < 3; j++) {
                        var newProgressBar = new TSUI.UI.ProgressBar();
                        newProgressBar.RelativeLayoutOn();
                        newProgressBar.Progress((j + 1) * (90 / 3));
                        if (j == 0) {
                            newProgressBar.Type(TSUI.UI.ProgressBarTypes.Circular);
                        } else if (j == 1) {
                            newProgressBar.Type(TSUI.UI.ProgressBarTypes.Horizontal);
                        } else if (j == 2) {
                            newProgressBar.Type(TSUI.UI.ProgressBarTypes.Vertical);
                            newProgressBar.Reverse(true);
                        }

                        MiscTab_NewRow.Children.Add(newProgressBar);
                    }
                    MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

                    this.TextTab.Children.Add(TextTab_StackPanel);
                    this.ButtonsTab.Children.Add(ButtonsTab_StackPanel);
                    this.ChoicesTab.Children.Add(ChoicesTab_StackPanel);
                    this.InputTab.Children.Add(InputTab_StackPanel);
                    this.MiscTab.Children.Add(MiscTab_StackPanel);
                }
                MobileDemoWindow.prototype.Show = function (callback, animator) {
                    if (typeof callback === "undefined") { callback = null; }
                    if (typeof animator === "undefined") { animator = new TSUI.Animation.Animator(); }
                    _super.prototype.Show.call(this, callback, animator);
                };
                MobileDemoWindow.prototype.Hide = function (callback, animator) {
                    if (typeof callback === "undefined") { callback = null; }
                    if (typeof animator === "undefined") { animator = new TSUI.Animation.Animator(); }
                    _super.prototype.Hide.call(this, callback, animator);
                };
                return MobileDemoWindow;
            })(TSUI.UI.Window);
        })(Apps.Demo || (Apps.Demo = {}));
        var Demo = Apps.Demo;
    })(TSUI.Apps || (TSUI.Apps = {}));
    var Apps = TSUI.Apps;
})(TSUI || (TSUI = {}));

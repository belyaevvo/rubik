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

module TSUI.Apps.Demo
{
    var LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra felis nec erat fermentum malesuada gravida odio pulvinar. Fusce elit massa, hendrerit sit amet vehicula vitae, porta in lorem. Suspendisse volutpat eros sed nibh elementum tincidunt. Nam nulla nibh, dapibus.";
 
    var SMW_Url = "https://www.slidemyway.co.uk";
    var Download_Url = "https://typescriptui.codeplex.com/";
    var TypeScript_Url = "https://typescript.codeplex.com/";

    var isMobile: boolean = false;
    
    export class DemoApp implements IApp
    { 
        private MainContainer: JQuery = null;
        private StartArgs: string[] = null;
        
        private TheSplashScreen: UI.ISplashScreen;
        private TheStartupWindow: IStartupWindow;
        
        Run(args: string[] = [], container: JQuery = $("body")): void
        {
            this.StartArgs = args;
            this.MainContainer = container;
            
            this.MainContainer.addClass("DemoApp"); 

            isMobile = window.location.hash === "#mobile" && window.location.search !== "?mode=desktop";

            Animation.AppWindowAnimator.UseCanvasRenderIfSensible = false;

            //#region Show

            var _this = this;
                
            if (isMobile)
            {
                this.InitSplashScreen();

                var startLoadTime = Date.now();
                this.ShowSplashScreen(function ()
                {
                    if (!_this.Init(function ()
                    {
                        _this.TheStartupWindow.Enabled(false);

                        _this.TheStartupWindow.Width(new UI.CSSNumber(100, "%"));
                        _this.TheStartupWindow.Height(new UI.CSSNumber(100, "%"));

                        setTimeout(function ()
                        {
                            _this.TheSplashScreen.Hide(function ()
                            {
                                _this.TheStartupWindow.Show(function ()
                                {
                                    _this.TheStartupWindow.Enabled(true);
                                    _this.TheSplashScreen.DestroyDOM();
                                }, new Animation.FadeAnimator());
                            });
                        }, 4000 - (startLoadTime - Date.now()));
                    }))
                    {
                        alert("Failed to initialise properly!");
                    }
                });
            }
            else
            {
                if (!_this.Init(function ()
                {
                    _this.TheStartupWindow.Enabled(false);

                    _this.TheStartupWindow.Width(new UI.CSSNumber(100, "%"));
                    _this.TheStartupWindow.Height(new UI.CSSNumber(100, "%"));

                    _this.TheStartupWindow.Show(function ()
                    {
                        _this.TheStartupWindow.Enabled(true);
                    }, new Animation.FadeAnimator());
                }))
                {
                    alert("Failed to initialise properly!");
                }
            }

            //#endregion
        }

        InitSplashScreen()
        {
            if (isMobile)
            {
                this.TheSplashScreen = new UI.MobileSplashScreen("TypeScript UI");
                this.TheSplashScreen.ConstructDOM(this.MainContainer);
            }
            else
            {
                this.TheSplashScreen = new UI.DesktopSplashScreen("TypeScript UI");
                this.TheSplashScreen.ConstructDOM(this.MainContainer);
            }
        }
        ShowSplashScreen(callback?: () => void )
        {
            this.TheSplashScreen.Show(function ()
            {
                if (callback)
                {
                    callback();
                }
            }, new Animation.Animator());
        }

        Init(callback: ()=>void = null): boolean
        {
            try
            {
                this.InitStartupWindow(callback);
                return true;
            }
            catch (e)
            {
            }
            return false;
        }
        InitStartupWindow(callback: ()=>void = null)
        {
            if (isMobile)
            {
                this.TheStartupWindow = new MobileStartupWindow();
            }
            else
            {
                this.TheStartupWindow = new DesktopStartupWindow();
            }
            this.TheStartupWindow.ConstructDOM(this.MainContainer, callback);
        }
    }
    
    interface IStartupWindow extends UI.IStartupWindow
    {
        WindowControls: StartupWindowControls;
    }
    class StartupWindowControls
    {
        AboutTile: UI.ITile;
        MobileDemoTile: UI.ITile;
        DesktopDemoTile: UI.ITile;
        SlideMyWayTile: UI.ITile;

        DownloadTile: UI.ITile;
        ScreenshotsTile: UI.ITile;
        TypeScriptTile: UI.ITile;
        
        ScreenshotsFolder_Url = "Images/Screenshots/420x200/";

        AboutPageWindow: UI.IStaticPageWindow;

        TheDesktopDemoWindow: DesktopDemoWindow;
        TheMobileDemoWindow: MobileDemoWindow;

        Row1: UI.IStartupWindow_Row;
        Row2: UI.IStartupWindow_Row;
        
        Row1_Group1: UI.IStartupWindow_Group;
        Row1_Group2: UI.IStartupWindow_Group;
        Row2_Group1: UI.IStartupWindow_Group;
        Row2_Group2: UI.IStartupWindow_Group;
        
        Window: UI.IStartupWindow;

        constructor(MobileMode: boolean, AWindow: IStartupWindow)
        {
            this.Window = AWindow;

            if (MobileMode)
            {
                this.ScreenshotsFolder_Url = MobileStartupWindow.ScreenshotsFolder_Url;
            }
            
            if (!this.AboutTile)
            {
                this.AboutTile = new UI.Tile(UI.TileSizes.Medium, UI.TileTypes.Iconic);
            }
            if (!this.MobileDemoTile)
            {
                this.MobileDemoTile = new UI.Tile(UI.TileSizes.Medium, UI.TileTypes.Flip);
            }
            if (!this.SlideMyWayTile)
            {
                this.SlideMyWayTile = new UI.Tile(UI.TileSizes.Medium, UI.TileTypes.Iconic);
            }
            if (!this.DesktopDemoTile)
            {
                this.DesktopDemoTile = new UI.Tile(UI.TileSizes.Medium, UI.TileTypes.Flip);
            }
            if (!this.ScreenshotsTile)
            {
                this.ScreenshotsTile = new UI.Tile(UI.TileSizes.Large, UI.TileTypes.Cycle);
            }
            if (!this.DownloadTile)
            {
                this.DownloadTile = new UI.Tile(UI.TileSizes.Medium, UI.TileTypes.Iconic);
            }
            if (!this.TypeScriptTile)
            {
                this.TypeScriptTile = new UI.Tile(UI.TileSizes.Medium, UI.TileTypes.Flip);
            }

            this.Row1 = new UI.StartupWindow_Row(MobileMode);
            this.Row2 = new UI.StartupWindow_Row(MobileMode);
            
            this.Row1_Group1 = new UI.StartupWindow_Group(MobileMode);
            this.Row1_Group2 = new UI.StartupWindow_Group(MobileMode);
            this.Row2_Group1 = new UI.StartupWindow_Group(MobileMode);
            this.Row2_Group2 = new UI.StartupWindow_Group(MobileMode);
            
            this.AboutTile.AddClass("AboutTile");
            this.AboutTile.NameLabel.Text("About");
            this.AboutTile.IconBox.Source(UI.TileIcons.About);
            this.AboutTile.ShowCounter(false);
            this.AboutTile.OnClick.Attach(new Events.ClickEventHandler(this.AboutTile_OnClick, this));
            this.AboutTile.RelativeLayoutOn();

            this.MobileDemoTile.AddClass("MobileDemoTile");
            this.MobileDemoTile.NameLabel.Text("Mobile");
            this.MobileDemoTile.Counter.Text("9+");
            if (isMobile)
            {
                this.MobileDemoTile.TextLabel.Text("View a mobile size demo...");
            }
            else
            {
                this.MobileDemoTile.TextLabel.Text("Disabled for desktop mode. Use #mobile");
            }
            this.MobileDemoTile.OnClick.Attach(new Events.ClickEventHandler(this.MobileDemoTile_OnClick, this));
            this.MobileDemoTile.Backgrounds.Add(new UI.TileBackground("Images/Tiles/Demo-Tile-Background.png"));
            this.MobileDemoTile.RelativeLayoutOn();

            this.SlideMyWayTile.AddClass("SlideMyWayTile");
            this.SlideMyWayTile.NameLabel.Text("Slide My Way");
            this.SlideMyWayTile.IconBox.Source(MobileStartupWindow.ScreenshotsFolder_Url + "SMW-Ad.png");
            this.SlideMyWayTile.ShowCounter(false);
            this.SlideMyWayTile.OnClick.Attach(new Events.ClickEventHandler(this.SlideMyWayTile_OnClick, this));
            this.SlideMyWayTile.RelativeLayoutOn();

            this.DesktopDemoTile.AddClass("DesktopDemoTile");
            this.DesktopDemoTile.NameLabel.Text("Desktop");
            this.DesktopDemoTile.Counter.Text("9+");
            if (!isMobile)
            {
                this.DesktopDemoTile.TextLabel.Text("View a desktop size demo...");
            }
            else
            {
                this.DesktopDemoTile.TextLabel.Text("Disabled on mobile. Use ?mode=desktop");
            }
            this.DesktopDemoTile.OnClick.Attach(new Events.ClickEventHandler(this.DesktopDemoTile_OnClick, this));
            this.DesktopDemoTile.Backgrounds.Add(new UI.TileBackground("Images/Tiles/Demo-Tile-Background.png"));
            this.DesktopDemoTile.RelativeLayoutOn();

            this.ScreenshotsTile.AddClass("ScreenshotsTile");
            this.ScreenshotsTile.NameLabel.Text("Screenshots");
            this.ScreenshotsTile.Backgrounds.Add(new UI.TileBackground(this.ScreenshotsFolder_Url + "Buttons.png"));
            this.ScreenshotsTile.Backgrounds.Add(new UI.TileBackground(this.ScreenshotsFolder_Url + "Check-Boxes.png"));
            this.ScreenshotsTile.Backgrounds.Add(new UI.TileBackground(this.ScreenshotsFolder_Url + "Image-Box.png"));
            this.ScreenshotsTile.Backgrounds.Add(new UI.TileBackground(this.ScreenshotsFolder_Url + "Progress-Bars.png"));
            this.ScreenshotsTile.Backgrounds.Add(new UI.TileBackground(this.ScreenshotsFolder_Url + "Window-And-Tabs.png"));
            this.ScreenshotsTile.Backgrounds.Add(new UI.TileBackground(this.ScreenshotsFolder_Url + "SMW-Ad.png"));
            this.ScreenshotsTile.NameLabel.ApplyStyle("color", "#000");
            this.ScreenshotsTile.ShowCounter(false);
            this.ScreenshotsTile.RelativeLayoutOn();

            this.DownloadTile.AddClass("DownloadTile");
            this.DownloadTile.NameLabel.Text("Download");
            this.DownloadTile.ShowCounter(false);
            this.DownloadTile.IconBox.Source(UI.TileIcons.Download);
            this.DownloadTile.TextLabel.Text("Try TypeScript UI today! It's free, open-source and easy.");
            this.DownloadTile.OnClick.Attach(new Events.ClickEventHandler(this.DownloadTile_OnClick, this));
            this.DownloadTile.RelativeLayoutOn();

            this.TypeScriptTile.AddClass("TypeScriptTile");
            this.TypeScriptTile.NameLabel.Text("What is TypeScript?");
            this.TypeScriptTile.ShowCounter(false);
            this.TypeScriptTile.IconBox.Source(UI.TileIcons.About);
            if (MobileMode)
            {
                this.TypeScriptTile.TextLabel.Text("TypeScript is a language from Microsoft. Find out more...");
            }
            else
            {
                this.TypeScriptTile.TextLabel.Text("TypeScript is a web language from Microsoft which compiles to JavaScript. Find out more...");
            }
            this.TypeScriptTile.OnClick.Attach(new Events.ClickEventHandler(this.TypeScriptTile_OnClick, this));
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

            setTimeout(()=>
            {
                if (isMobile)
                {
                    this.InitMobileDemoWindow();
                }
                else
                {
                    this.InitDesktopDemoWindow();
                }
            }, 500);
        }

        _This_OnResize(eventArgs: Events.ResizeEventArgs)
        {
            this.PositionDesktopDemoWindow();
        }

        InitDesktopDemoWindow()
        {
            if (!this.TheDesktopDemoWindow)
            {
                this.TheDesktopDemoWindow = new DesktopDemoWindow();
                this.TheDesktopDemoWindow.OnClose.Attach(new Events.CloseEventHandler(function ()
                {
                    this.Window.Enabled(true); 
                }, this));
                this.TheDesktopDemoWindow.ConstructDOM(this.Window._rootElement.parent());
                this.TheDesktopDemoWindow.DestroyDOMOnClose = false;
            }
        }
        InitMobileDemoWindow()
        {
            if (!this.TheMobileDemoWindow)
            {
                this.TheMobileDemoWindow = new MobileDemoWindow();
                this.TheMobileDemoWindow.OnClose.Attach(new Events.CloseEventHandler(function ()
                {
                    this.Window.Enabled(true); 
                }, this));
                this.TheMobileDemoWindow.ConstructDOM(this.Window._rootElement.parent());
                this.TheMobileDemoWindow.DestroyDOMOnClose = false;
            }
        }

        PositionDesktopDemoWindow(overrideVisible: boolean = false)
        {
            if (!this.TheDesktopDemoWindow)
            {
                return;
            }
            if (this.TheDesktopDemoWindow.Visible() || overrideVisible)
            {                
                var WantedWidthPerc = 0.8;
                var WantedHeightPerc = 0.8;

                this.TheDesktopDemoWindow.Width(new UI.CSSNumber(WantedWidthPerc * 100, "%"));
                this.TheDesktopDemoWindow.Height(new UI.CSSNumber(WantedHeightPerc * 100, "%"));
                
                var minWidth = 500;
                var maxWidth = 1000;
                var minHeight = 500;
                var maxHeight = 900;

                this.TheDesktopDemoWindow.MinWidth(new UI.CSSNumber(minWidth));
                this.TheDesktopDemoWindow.MinHeight(new UI.CSSNumber(minHeight));
                this.TheDesktopDemoWindow.MaxWidth(new UI.CSSNumber(maxWidth));
                this.TheDesktopDemoWindow.MaxHeight(new UI.CSSNumber(maxHeight));

                var windowWidth = this.Window._rootElement.parent().width();
                var widthPx = Math.max(minWidth, Math.min(maxWidth, windowWidth * WantedWidthPerc));
                var widthPerc = (widthPx / windowWidth) * 100;
                var leftPerc = (100 - widthPerc) / 2;

                var windowHeight = this.Window._rootElement.parent().height();
                var heightPx = Math.max(minHeight, Math.min(maxHeight, windowHeight * WantedHeightPerc));
                var heightPerc = (heightPx / windowHeight) * 100;
                var topPerc = (100 - heightPerc) / 2;

                this.TheDesktopDemoWindow.Top(new UI.CSSNumber(topPerc, "%"));
                this.TheDesktopDemoWindow.Left(new UI.CSSNumber(leftPerc, "%"));
            }
        }
        PositionMobileDemoWindow(overrideVisible: boolean = false)
        {
            if (!this.TheMobileDemoWindow)
            {
                return;
            }
            if (this.TheMobileDemoWindow.Visible() || overrideVisible)
            {   
                this.TheMobileDemoWindow.Width(new UI.CSSNumber(100, "%"));
                this.TheMobileDemoWindow.Height(new UI.CSSNumber(100, "%"));

                this.TheMobileDemoWindow.MinWidth(new UI.CSSNumber(235));
                this.TheMobileDemoWindow.MinHeight(new UI.CSSNumber(320));
                this.TheMobileDemoWindow.MaxWidth(new UI.CSSNumber(100, "%"));
                this.TheMobileDemoWindow.MaxHeight(new UI.CSSNumber(100, "%"));

                this.TheMobileDemoWindow.Top(new UI.CSSNumber(0, "%"));
                this.TheMobileDemoWindow.Left(new UI.CSSNumber(0, "%"));
            }
        }

        AboutTile_OnClick(eventArgs: Events.ClickEventArgs)
        {
            if (!this.AboutPageWindow)
            {
                this.AboutPageWindow = new UI.StaticPageWindow("Static/Pages/Demo%20App/About.html");
                this.AboutPageWindow.ConstructDOM(this.Window._rootElement.parent());
                this.AboutPageWindow.PositionCenterWindow();
            }
            this.AboutPageWindow.Show();
        }
        MobileDemoTile_OnClick(eventArgs: Events.ClickEventArgs)
        {  
            if (isMobile)
            {
                this.PositionMobileDemoWindow(true);
                this.TheMobileDemoWindow.Show(() =>
                {
                    this.Window.Enabled(false);
                });
            }
            else
            {
                var notif = new UI.Notification(this.Window.__UID, "Disabled for desktop version.");
                notif.ConstructDOM(this.Window._rootElement, () =>
                {
                    notif.ShowFor(5);
                });
            }
        }
        SlideMyWayTile_OnClick(eventArgs: Events.ClickEventArgs)
        {
            OpenInNewWindow(SMW_Url);
        }
        DesktopDemoTile_OnClick(eventArgs: Events.ClickEventArgs)
        {   
            if (!isMobile)
            {
                var _this = this;
                this.PositionDesktopDemoWindow(true);
                this.TheDesktopDemoWindow.Show(function ()
                {
                    _this.Window.Enabled(false);
                });
            }
            else
            {
                var notif = new UI.Notification(this.Window.__UID, "Disabled for mobile version.");
                notif.ConstructDOM(this.Window._rootElement, () =>
                {
                    notif.ShowFor(5);
                });
            }
        }
        DownloadTile_OnClick(eventArgs: Events.ClickEventArgs)
        {
            OpenInNewWindow(Download_Url);
        }
        TypeScriptTile_OnClick(eventArgs: Events.ClickEventArgs)
        {
            OpenInNewWindow(TypeScript_Url);
        }
    } 
    class DesktopStartupWindow extends UI.DesktopStartupWindow implements IStartupWindow
    {
        public WindowControls: StartupWindowControls
        
        constructor()
        {
            super("TypeScript UI");
         
            this.WindowControls = new StartupWindowControls(false, this);
   
            this.CloseButton.Visible(false);
            this.ResizeEnabled(false);
            this.DragEnabled(false);
            
            this.Rows.Add(this.WindowControls.Row1);
            this.Rows.Add(this.WindowControls.Row2);

            this.OnResize.Attach(new Events.ResizeEventHandler(this.WindowControls._This_OnResize, this.WindowControls));
        }

    }
    class MobileStartupWindow extends UI.MobileStartupWindow implements IStartupWindow
    {
        public WindowControls: StartupWindowControls;
        
        static ScreenshotsFolder_Url = "Images/Screenshots/200x200/";

        constructor()
        {
            this.WindowControls = new StartupWindowControls(true, this);

            super();

            this.AddClass("Mobile");

            this.CloseButton.Visible(false);
            this.ResizeEnabled(false);
            this.DragEnabled(false);
            
            this.Rows.Add(this.WindowControls.Row1);
            this.Rows.Add(this.WindowControls.Row2);

            this.OnResize.Attach(new Events.ResizeEventHandler(this.WindowControls._This_OnResize, this.WindowControls));
        }
    }

    interface IDemoWindow extends UI.IWindow
    {
    }
    class DesktopDemoWindow extends UI.Window implements IDemoWindow
    {
        MainTabControl: UI.ITabControl;

        TextTab: UI.ITab;
        ButtonsTab: UI.ITab;
        ChoicesTab: UI.ITab;
        InputTab: UI.ITab;
        MiscTab: UI.ITab;

        constructor()
        {
            super();

            this.OptimiseConstructForGraphics = isMobile;

            this.AddClass("DemoWindow");

            this.Title("Desktop Demo");

            this.MainTabControl = new UI.TabControl();

            this.TextTab = new UI.Tab();
            this.ButtonsTab = new UI.Tab();
            this.ChoicesTab = new UI.Tab();
            this.InputTab = new UI.Tab();
            this.MiscTab = new UI.Tab();

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


            var TextTab_StackPanel = new UI.StackPanel();
            TextTab_StackPanel.Width(new UI.CSSNumber(100, "%"));
            for (var i = 0; i < 4; i++)
            {
                var TextTab_NewRow = new UI.StackPanelRow();
                
                if (i == 0)
                {
                    var newLabel = new UI.Label(LoremIpsum);
                    newLabel.Width(new UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are expandables containing:<br /><ol>" + 
                                      "<li>A basic label.</li>" +
                                      "<li>A label with custom HTML.</li>" + 
                                      "<li>A label with a link set using the Link method.</li>" +
                                  "</ol>");
                    TextTab_NewRow.Children.Add(newLabel);
                }
                else
                {
                    var newExpandable = new UI.Expandable();
                    newExpandable.Title("Expandable " + i.toString());
                    newExpandable.ContentPanel.RelativeLayoutOn();

                    var newLabel = new UI.Label(LoremIpsum);
                    newLabel.RelativeLayoutOn();
                    if (i == 2)
                    {
                        newLabel.HTML("<b>" + LoremIpsum.substring(0, 28) + "</b>" +
                                      "<a href=\"https://typescriptui.codeplex.com\" target=\"_blank\">" + LoremIpsum.substring(28, 39) + "</a>" +
                                      "<span>" + LoremIpsum.substring(39) + "</span>");
                    }
                    else if (i == 3)
                    {
                        newLabel.Link("https://typescriptui.codeplex.com");
                    }

                    newExpandable.ContentPanel.Children.Add(newLabel);
                    TextTab_NewRow.Children.Add(newExpandable);
                }

                TextTab_StackPanel.Rows.Add(TextTab_NewRow);
            }

            var ButtonsTab_StackPanel = new UI.StackPanel();
            ButtonsTab_StackPanel.Width(new UI.CSSNumber(100, "%"));
            
            var ButtonsTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are buttons which:<br /><ol>" + 
                              "<li>Does nothing</li>" +
                              "<li>Opens a message box</li>" + 
                              "<li>Displays a notification</li>" +
                          "</ol>");
            ButtonsTab_NewRow.Children.Add(newLabel);            
            ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);


            ButtonsTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 3; j++)
            {
                var newButton = new UI.Button();
                newButton.RelativeLayoutOn();
                newButton.Text("Button " + (j + 1).toString());
                if (j == 1)
                {
                    newButton.OnClick.Attach(new Events.ClickEventHandler(function (eventArgs: Events.ClickEventArgs)
                    {
                        var newMsgBox = new UI.MessageBox("A Message Box", "This is a sample message box! You clicked Button 2.");
                        newMsgBox.ConstructDOM(this._rootElement);
                        newMsgBox.PositionCenterParent(this);
                        newMsgBox.Show();
                    }, this));
                }
                else if (j == 2)
                {
                    newButton.OnClick.Attach(new Events.ClickEventHandler(function (eventArgs: Events.ClickEventArgs)
                    {
                        var newNotif = new UI.Notification(this.__UID, "This is a sample notification! You clicked Button 3.");
                        newNotif.ConstructDOM(this._rootElement);
                        newNotif.ShowFor(4);
                    }, this));
                }

                ButtonsTab_NewRow.Children.Add(newButton);
            }
            ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

            var ButtonsTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are drop down boxes which:<br /><ol>" + 
                              "<li>Contains 5 items</li>" +
                              "<li>Contains 15 items</li>" + 
                              "<li>Is disabled</li>" +
                          "</ol>");
            ButtonsTab_NewRow.Children.Add(newLabel);            
            ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

            ButtonsTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 3; j++)
            {
                var newDropDown = new UI.DropDownBox<string>();
                newDropDown.RelativeLayoutOn();
                for (i = j * 5; i < 5 + (10 * j); i++)
                {
                    var newItem = new UI.ListItem("Drop Item " + (i + 1).toString(), (i + 1).toString());
                    newDropDown.Items.Add(newItem);
                }
                if (j == 2)
                {
                    newDropDown.Enabled(false);
                }

                ButtonsTab_NewRow.Children.Add(newDropDown);
            }
            ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);
            
            var ButtonsTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are list boxes which:<br /><ol>" + 
                              "<li>Contains 5 items</li>" +
                              "<li>Contains 15 items</li>" + 
                              "<li>Is disabled</li>" +
                          "</ol>");
            ButtonsTab_NewRow.Children.Add(newLabel);            
            ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

            ButtonsTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 3; j++)
            {
                var newList = new UI.ListBox<string>();
                newList.RelativeLayoutOn();
                for (i = j * 5; i < 5 + (10 * j); i++)
                {
                    var newItem = new UI.ListItem("List Item " + (i + 1).toString(), (i + 1).toString());
                    newList.Items.Add(newItem);
                }
                if (j == 2)
                {
                    newList.Enabled(false);
                }

                ButtonsTab_NewRow.Children.Add(newList);
            }
            ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

            var ChoicesTab_StackPanel = new UI.StackPanel();
            ChoicesTab_StackPanel.Width(new UI.CSSNumber(100, "%"));
            
            var ChoicesTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are check boxes which:<br /><ol>" + 
                              "<li>Has label on the right</li>" +
                              "<li>Is checked; has label on the left</li>" + 
                              "<li>Is disabled</li>" +
                          "</ol>");
            ChoicesTab_NewRow.Children.Add(newLabel);            
            ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

            ChoicesTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 3; j++)
            {
                var newCheckBox = new UI.CheckBox();
                newCheckBox.RelativeLayoutOn();
                newCheckBox.Text("Check box " + (j + 1).toString());
                if (j == 1)
                {
                    newCheckBox.TextAlign(UI.TextAlignments.Left);
                    newCheckBox.Checked(true);
                }
                else if (j == 2)
                {
                    newCheckBox.Enabled(false);
                }

                ChoicesTab_NewRow.Children.Add(newCheckBox);
            }
            ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

            var ChoicesTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are radio buttons which:<br /><ol>" + 
                              "<li>Has label on the right; grouped with 1-3</li>" +
                              "<li>Is checked; has label on the left; grouped with 1-3</li>" + 
                              "<li>Is disabled; grouped with 1-3</li>" +
                              "<li>Is ungrouped</li>" +
                              "<li>Is ungrouped</li>" +
                          "</ol>");
            ChoicesTab_NewRow.Children.Add(newLabel);            
            ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

            ChoicesTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 5; j++)
            {
                var newRadioButton = new UI.RadioButton();
                newRadioButton.RelativeLayoutOn();
                newRadioButton.Text("Radio button " + (j + 1).toString());
                if (j < 3)
                {
                    newRadioButton.Group("ChoicesTab_DemoRadioButtons");
                }
                if (j == 1)
                {
                    newRadioButton.TextAlign(UI.TextAlignments.Left);
                    newRadioButton.Checked(true);
                }
                else if (j == 2)
                {
                    newRadioButton.Enabled(false);
                }

                ChoicesTab_NewRow.Children.Add(newRadioButton);
            }
            ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

            var ChoicesTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are toggle buttons which:<br /><ol>" + 
                              "<li>Is unchecked</li>" +
                              "<li>Is checked</li>" + 
                              "<li>Is disabled; has custom text</li>" +
                          "</ol>");
            ChoicesTab_NewRow.Children.Add(newLabel);            
            ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

            ChoicesTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 3; j++)
            {
                var newToggleButton = new UI.ToggleButton();
                newToggleButton.RelativeLayoutOn();
                if (j == 1)
                {
                    newToggleButton.Checked(true);
                }
                else if (j == 2)
                {
                    newToggleButton.Enabled(false);
                    newToggleButton.Text("Dis");
                }

                ChoicesTab_NewRow.Children.Add(newToggleButton);
            }
            ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);
            
            var InputTab_StackPanel = new UI.StackPanel();
            InputTab_StackPanel.Width(new UI.CSSNumber(100, "%"));
            
            var InputTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are text boxes which:<br /><ol>" + 
                              "<li>Is normal</li>" +
                              "<li>Is in password mode</li>" + 
                              "<li>Is disabled; has custom text</li>" +
                          "</ol>");
            InputTab_NewRow.Children.Add(newLabel);            
            InputTab_StackPanel.Rows.Add(InputTab_NewRow);

            InputTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 3; j++)
            {
                var newTextBox = new UI.TextBox();
                newTextBox.RelativeLayoutOn();
                newTextBox.Text("Text box " + (j + 1).toString());
                if (j == 1)
                {
                    newTextBox.Masked(true);
                }
                else if (j == 2)
                {
                    newTextBox.Enabled(false);
                }

                InputTab_NewRow.Children.Add(newTextBox);
            }
            InputTab_StackPanel.Rows.Add(InputTab_NewRow);

            var InputTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are numeric up downs which:<br /><ol>" + 
                              "<li>Is unlimited; 2 d.p; increment of 0.1</li>" +
                              "<li>Is limited from -100 to 100; 0 d.p.; increment of 5</li>" + 
                              "<li>Is disabled</li>" +
                          "</ol>");
            InputTab_NewRow.Children.Add(newLabel);            
            InputTab_StackPanel.Rows.Add(InputTab_NewRow);

            InputTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 3; j++)
            {
                var newNumericUpDown = new UI.NumericUpDown();
                newNumericUpDown.RelativeLayoutOn();
                if (j == 0)
                {
                    newNumericUpDown.Min(null);
                    newNumericUpDown.Max(null);
                    newNumericUpDown.DecimalPlaces(2);
                    newNumericUpDown.Increment(0.1);
                }
                else if (j == 1)
                {
                    newNumericUpDown.Min(-100);
                    newNumericUpDown.Max(100);
                    newNumericUpDown.DecimalPlaces(0);
                    newNumericUpDown.Increment(5);
                }
                else if (j == 2)
                {
                    newNumericUpDown.Enabled(false);
                }

                InputTab_NewRow.Children.Add(newNumericUpDown);
            }
            InputTab_StackPanel.Rows.Add(InputTab_NewRow);

            var InputTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are track bars which:<br /><ol>" + 
                              "<li>Has min to max of -20 to 100; is in discrete mode with 5 divisions</li>" +
                              "<li>Has min to max of 0 to 100; is in continuous mode</li>" + 
                              "<li>Is disabled</li>" +
                          "</ol>");
            InputTab_NewRow.Children.Add(newLabel);            
            InputTab_StackPanel.Rows.Add(InputTab_NewRow);

            InputTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 3; j++)
            {
                var newTrackBar = new UI.TrackBar();
                newTrackBar.RelativeLayoutOn();
                if (j == 0)
                {
                    newTrackBar.Min(-20);
                    newTrackBar.Max(100);
                    newTrackBar.Mode(UI.TrackBarModes.Discrete);
                    newTrackBar.Divisions(5);
                }
                else if (j == 1)
                {
                    newTrackBar.Min(0);
                    newTrackBar.Max(100);
                    newTrackBar.Mode(UI.TrackBarModes.Continuous);
                    newTrackBar.Divisions(1);
                }
                else if (j == 2)
                {
                    newTrackBar.Enabled(false);
                }

                InputTab_NewRow.Children.Add(newTrackBar);
            }
            InputTab_StackPanel.Rows.Add(InputTab_NewRow);
            

            var MiscTab_StackPanel = new UI.StackPanel();
            MiscTab_StackPanel.Width(new UI.CSSNumber(100, "%"));
            
            var MiscTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are image boxes which:<br /><ol>" + 
                              "<li>Is normal</li>" +
                              "<li>Acts as an image link</li>" + 
                              "<li>Is disabled</li>" +
                          "</ol>");
            MiscTab_NewRow.Children.Add(newLabel);            
            MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

            MiscTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 3; j++)
            {
                var newImageBox = new UI.ImageBox("Images/Logo/TypeScriptUI.png", "Image box " + (j + 1).toString());
                newImageBox.RelativeLayoutOn();
                newImageBox.Width(new UI.CSSNumber(213));
                newImageBox.Height(new UI.CSSNumber(50));
                if (j == 1)
                {
                    newImageBox.NavigateToOnClick("https://typescriptui.codeplex.com");
                }
                else if (j == 2)
                {
                    newImageBox.Enabled(false);
                }

                MiscTab_NewRow.Children.Add(newImageBox);
            }
            MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

            var MiscTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are SVG boxes which:<br /><ol>" + 
                              "<li>Is normal</li>" +
                              "<li>Acts as an image link</li>" + 
                              "<li>Is disabled</li>" +
                          "</ol>");
            MiscTab_NewRow.Children.Add(newLabel);            
            MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

            MiscTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 3; j++)
            {
                var newSVGBox = new UI.SVGBox("SVG/Circle.svg");
                newSVGBox.RelativeLayoutOn();
                newSVGBox.Width(new UI.CSSNumber(200));
                newSVGBox.Height(new UI.CSSNumber(100));
                if (j == 1)
                {
                    newSVGBox.NavigateToOnClick("https://typescriptui.codeplex.com");
                }
                else if (j == 2)
                {
                    newSVGBox.Enabled(false);
                }

                MiscTab_NewRow.Children.Add(newSVGBox);
            }
            MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

            var MiscTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are progress spinners which:<br /><ol>" + 
                              "<li>Is circular</li>" +
                              "<li>Is horizontal</li>" + 
                              "<li>Is vertical</li>" +
                          "</ol>");
            MiscTab_NewRow.Children.Add(newLabel);            
            MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

            MiscTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 3; j++)
            {
                var newProgressSpinner = new UI.ProgressSpinner();
                newProgressSpinner.RelativeLayoutOn();
                if (j == 0)
                {
                    newProgressSpinner.Type(UI.ProgressSpinnerTypes.Circular);
                }
                else if (j == 1)
                {
                    newProgressSpinner.Type(UI.ProgressSpinnerTypes.Horizontal);
                }
                else if (j == 2)
                {
                    newProgressSpinner.Type(UI.ProgressSpinnerTypes.Vertical);
                }

                MiscTab_NewRow.Children.Add(newProgressSpinner);
            }
            MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

            var MiscTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are progress bars which:<br /><ol>" + 
                              "<li>Is circular</li>" +
                              "<li>Is horizontal</li>" + 
                              "<li>Is vertical; is reversed (i.e. bottom to top)</li>" +
                          "</ol>");
            MiscTab_NewRow.Children.Add(newLabel);            
            MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

            MiscTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 3; j++)
            {
                var newProgressBar = new UI.ProgressBar();
                newProgressBar.RelativeLayoutOn();
                newProgressBar.Progress((j + 1) * (90 / 3));
                if (j == 0)
                {
                    newProgressBar.Type(UI.ProgressBarTypes.Circular);
                }
                else if (j == 1)
                {
                    newProgressBar.Type(UI.ProgressBarTypes.Horizontal);
                }
                else if (j == 2)
                {
                    newProgressBar.Type(UI.ProgressBarTypes.Vertical);
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
    }
    class MobileDemoWindow extends UI.Window implements IDemoWindow
    {
        MainTabControl: UI.ITabControl;

        TextTab: UI.ITab;
        ButtonsTab: UI.ITab;
        ChoicesTab: UI.ITab;
        InputTab: UI.ITab;
        MiscTab: UI.ITab;

        constructor()
        {
            super();

            this.OptimiseConstructForGraphics = isMobile;

            this.AddClass("DemoWindow");

            this.Title("Mobile Demo");

            this.MainTabControl = new UI.TabControl();

            this.TextTab = new UI.Tab();
            this.ButtonsTab = new UI.Tab();
            this.ChoicesTab = new UI.Tab();
            this.InputTab = new UI.Tab();
            this.MiscTab = new UI.Tab();

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


            var TextTab_StackPanel = new UI.StackPanel();
            TextTab_StackPanel.Width(new UI.CSSNumber(100, "%"));
            for (var i = 0; i < 4; i++)
            {
                var TextTab_NewRow = new UI.StackPanelRow();
                
                if (i == 0)
                {
                    var newLabel = new UI.Label(LoremIpsum);
                    newLabel.Width(new UI.CSSNumber(100, "%"));
                    newLabel.HTML("Below are expandables containing:<br /><ol>" + 
                                      "<li>A basic label.</li>" +
                                      "<li>A label with custom HTML.</li>" + 
                                      "<li>A label with a link set using the Link method.</li>" +
                                  "</ol>");
                    TextTab_NewRow.Children.Add(newLabel);
                }
                else
                {
                    var newExpandable = new UI.Expandable();
                    newExpandable.Title("Expandable " + i.toString());
                    newExpandable.ContentPanel.RelativeLayoutOn();

                    var newLabel = new UI.Label(LoremIpsum);
                    newLabel.RelativeLayoutOn();
                    if (i == 2)
                    {
                        newLabel.HTML("<b>" + LoremIpsum.substring(0, 28) + "</b>" +
                                      "<a href=\"https://typescriptui.codeplex.com\" target=\"_blank\">" + LoremIpsum.substring(28, 39) + "</a>" +
                                      "<span>" + LoremIpsum.substring(39) + "</span>");
                    }
                    else if (i == 3)
                    {
                        newLabel.Link("https://typescriptui.codeplex.com");
                    }

                    newExpandable.ContentPanel.Children.Add(newLabel);
                    TextTab_NewRow.Children.Add(newExpandable);
                }

                TextTab_StackPanel.Rows.Add(TextTab_NewRow);
            }

            var ButtonsTab_StackPanel = new UI.StackPanel();
            ButtonsTab_StackPanel.Width(new UI.CSSNumber(100, "%"));
            
            var ButtonsTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are buttons which:<br /><ol>" + 
                              "<li>Does nothing</li>" +
                              "<li>Opens a message box</li>" + 
                              "<li>Displays a notification</li>" +
                          "</ol>");
            ButtonsTab_NewRow.Children.Add(newLabel);            
            ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);


            ButtonsTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 3; j++)
            {
                var newButton = new UI.Button();
                newButton.RelativeLayoutOn();
                newButton.Text("Button " + (j + 1).toString());
                if (j == 1)
                {
                    newButton.OnClick.Attach(new Events.ClickEventHandler(function (eventArgs: Events.ClickEventArgs)
                    {
                        var newMsgBox = new UI.MessageBox("A Message Box", "This is a sample message box! You clicked Button 2.");
                        newMsgBox.ConstructDOM(this._rootElement);
                        newMsgBox.PositionCenterParent(this);
                        newMsgBox.Show();
                    }, this));
                }
                else if (j == 2)
                {
                    newButton.OnClick.Attach(new Events.ClickEventHandler(function (eventArgs: Events.ClickEventArgs)
                    {
                        var newNotif = new UI.Notification(this.__UID, "This is a sample notification! You clicked Button 3.");
                        newNotif.ConstructDOM(this._rootElement);
                        newNotif.ShowFor(4);
                    }, this));
                }

                ButtonsTab_NewRow.Children.Add(newButton);
            }
            ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

            var ButtonsTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below is a drop down box which contains 5 items.");
            ButtonsTab_NewRow.Children.Add(newLabel);            
            ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

            ButtonsTab_NewRow = new UI.StackPanelRow();
            ButtonsTab_NewRow.ApplyStyle("text-align", "center");
            var newDropDown = new UI.DropDownBox<string>();
            newDropDown.RelativeLayoutOn();
            for (i = 0; i < 5; i++)
            {
                var newItem = new UI.ListItem("Drop Item " + (i + 1).toString(), (i + 1).toString());
                newDropDown.Items.Add(newItem);
            }
            ButtonsTab_NewRow.Children.Add(newDropDown);            
            ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);
            
            var ButtonsTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below is a list box which contains 15 items.");
            ButtonsTab_NewRow.Children.Add(newLabel);            
            ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

            ButtonsTab_NewRow = new UI.StackPanelRow();
            ButtonsTab_NewRow.ApplyStyle("text-align", "center");
            var newList = new UI.ListBox<string>();
            newList.RelativeLayoutOn();
            for (i = 0; i < 15; i++)
            {
                var newItem = new UI.ListItem("List Item " + (i + 1).toString(), (i + 1).toString());
                newList.Items.Add(newItem);
            }
            if (j == 2)
            {
                newList.Enabled(false);
            }

            ButtonsTab_NewRow.Children.Add(newList);            
            ButtonsTab_StackPanel.Rows.Add(ButtonsTab_NewRow);

            var ChoicesTab_StackPanel = new UI.StackPanel();
            ChoicesTab_StackPanel.Width(new UI.CSSNumber(100, "%"));
            
            var ChoicesTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are check boxes which:<br /><ol>" + 
                              "<li>Has label on the right</li>" +
                              "<li>Is checked; has label on the left</li>" + 
                          "</ol>");
            ChoicesTab_NewRow.Children.Add(newLabel);            
            ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

            ChoicesTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 3; j++)
            {
                var newCheckBox = new UI.CheckBox();
                newCheckBox.RelativeLayoutOn();
                newCheckBox.Text("Check box " + (j + 1).toString());
                if (j == 1)
                {
                    newCheckBox.TextAlign(UI.TextAlignments.Left);
                    newCheckBox.Checked(true);
                }

                ChoicesTab_NewRow.Children.Add(newCheckBox);
            }
            ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

            var ChoicesTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are radio buttons which:<br /><ol>" + 
                              "<li>Has label on the right; grouped with 1-3</li>" +
                              "<li>Is checked; has label on the left; grouped with 1-3</li>" + 
                              "<li>Is disabled; grouped with 1-3</li>" +
                              "<li>Is ungrouped</li>" +
                              "<li>Is ungrouped</li>" +
                          "</ol>");
            ChoicesTab_NewRow.Children.Add(newLabel);            
            ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

            ChoicesTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 5; j++)
            {
                var newRadioButton = new UI.RadioButton();
                newRadioButton.RelativeLayoutOn();
                newRadioButton.Text("Radio button " + (j + 1).toString());
                if (j < 3)
                {
                    newRadioButton.Group("ChoicesTab_DemoRadioButtons");
                }
                if (j == 1)
                {
                    newRadioButton.TextAlign(UI.TextAlignments.Left);
                    newRadioButton.Checked(true);
                }
                else if (j == 2)
                {
                    newRadioButton.Enabled(false);
                }

                ChoicesTab_NewRow.Children.Add(newRadioButton);
            }
            ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

            var ChoicesTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are toggle buttons which:<br /><ol>" + 
                              "<li>Is unchecked</li>" +
                              "<li>Is checked</li>" + 
                              "<li>Is disabled; has custom text</li>" +
                          "</ol>");
            ChoicesTab_NewRow.Children.Add(newLabel);            
            ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);

            ChoicesTab_NewRow = new UI.StackPanelRow();
            for (var j = 0; j < 3; j++)
            {
                var newToggleButton = new UI.ToggleButton();
                newToggleButton.RelativeLayoutOn();
                if (j == 1)
                {
                    newToggleButton.Checked(true);
                }
                else if (j == 2)
                {
                    newToggleButton.Enabled(false);
                    newToggleButton.Text("Dis");
                }

                ChoicesTab_NewRow.Children.Add(newToggleButton);
            }
            ChoicesTab_StackPanel.Rows.Add(ChoicesTab_NewRow);
            
            var InputTab_StackPanel = new UI.StackPanel();
            InputTab_StackPanel.Width(new UI.CSSNumber(100, "%"));
            
            var InputTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are text boxes which:<br /><ol>" + 
                              "<li>Is normal</li>" +
                              "<li>Is in password mode</li>" + 
                          "</ol>");
            InputTab_NewRow.Children.Add(newLabel);            
            InputTab_StackPanel.Rows.Add(InputTab_NewRow);

            InputTab_NewRow = new UI.StackPanelRow();
            InputTab_NewRow.ApplyStyle("text-align", "center");
            for (var j = 0; j < 2; j++)
            {
                var newTextBox = new UI.TextBox();
                newTextBox.RelativeLayoutOn();
                newTextBox.Text("Text box " + (j + 1).toString());
                if (j == 1)
                {
                    newTextBox.Masked(true);
                }

                InputTab_NewRow.Children.Add(newTextBox);
            }
            InputTab_StackPanel.Rows.Add(InputTab_NewRow);

            var InputTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are numeric up downs which:<br /><ol>" + 
                              "<li>Is unlimited; 2 d.p; increment of 0.1</li>" +
                              "<li>Is limited from -100 to 100; 0 d.p.; increment of 5</li>" + 
                          "</ol>");
            InputTab_NewRow.Children.Add(newLabel);            
            InputTab_StackPanel.Rows.Add(InputTab_NewRow);

            InputTab_NewRow = new UI.StackPanelRow();
            InputTab_NewRow.ApplyStyle("text-align", "center");
            for (var j = 0; j < 2; j++)
            {
                var newNumericUpDown = new UI.NumericUpDown();
                newNumericUpDown.RelativeLayoutOn();
                if (j == 0)
                {
                    newNumericUpDown.Min(null);
                    newNumericUpDown.Max(null);
                    newNumericUpDown.DecimalPlaces(2);
                    newNumericUpDown.Increment(0.1);
                }
                else if (j == 1)
                {
                    newNumericUpDown.Min(-100);
                    newNumericUpDown.Max(100);
                    newNumericUpDown.DecimalPlaces(0);
                    newNumericUpDown.Increment(5);
                }

                InputTab_NewRow.Children.Add(newNumericUpDown);
            }
            InputTab_StackPanel.Rows.Add(InputTab_NewRow);

            var InputTab_NewRow = new UI.StackPanelRow();
            InputTab_NewRow.ApplyStyle("text-align", "center");
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are track bars which:<br /><ol>" + 
                              "<li>Has min to max of -20 to 100; is in discrete mode with 5 divisions</li>" +
                              "<li>Has min to max of 0 to 100; is in continuous mode</li>" + 
                          "</ol>");
            InputTab_NewRow.Children.Add(newLabel);            
            InputTab_StackPanel.Rows.Add(InputTab_NewRow);

            InputTab_NewRow = new UI.StackPanelRow();
            InputTab_NewRow.ApplyStyle("text-align", "center");
            for (var j = 0; j < 2; j++)
            {
                var newTrackBar = new UI.TrackBar();
                newTrackBar.RelativeLayoutOn();
                if (j == 0)
                {
                    newTrackBar.Min(-20);
                    newTrackBar.Max(100);
                    newTrackBar.Mode(UI.TrackBarModes.Discrete);
                    newTrackBar.Divisions(5);
                }
                else if (j == 1)
                {
                    newTrackBar.Min(0);
                    newTrackBar.Max(100);
                    newTrackBar.Mode(UI.TrackBarModes.Continuous);
                    newTrackBar.Divisions(1);
                }

                InputTab_NewRow.Children.Add(newTrackBar);
            }
            InputTab_StackPanel.Rows.Add(InputTab_NewRow);
            

            var MiscTab_StackPanel = new UI.StackPanel();
            MiscTab_StackPanel.Width(new UI.CSSNumber(100, "%"));
            
            var MiscTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below is an image box which acts as an image link.");
            MiscTab_NewRow.Children.Add(newLabel);            
            MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

            MiscTab_NewRow = new UI.StackPanelRow();
            MiscTab_NewRow.ApplyStyle("text-align", "center");
            var newImageBox = new UI.ImageBox("Images/Logo/TypeScriptUI.png", "Image box " + (j + 1).toString());
            newImageBox.RelativeLayoutOn();
            newImageBox.Width(new UI.CSSNumber(213));
            newImageBox.Height(new UI.CSSNumber(50));
            newImageBox.NavigateToOnClick("https://typescriptui.codeplex.com");
            MiscTab_NewRow.Children.Add(newImageBox);
            MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

            var MiscTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below is an SVG box which is normal.");
            MiscTab_NewRow.Children.Add(newLabel);            
            MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

            MiscTab_NewRow = new UI.StackPanelRow();
            MiscTab_NewRow.ApplyStyle("text-align", "center");
            var newSVGBox = new UI.SVGBox("SVG/Circle.svg");
            newSVGBox.RelativeLayoutOn();
            newSVGBox.Width(new UI.CSSNumber(200));
            newSVGBox.Height(new UI.CSSNumber(100));
            MiscTab_NewRow.Children.Add(newSVGBox);
            MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

            var MiscTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below is a horizontal progress spinner.");
            MiscTab_NewRow.Children.Add(newLabel);            
            MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

            MiscTab_NewRow = new UI.StackPanelRow();
            var newProgressSpinner = new UI.ProgressSpinner();
            newProgressSpinner.RelativeLayoutOn();
            newProgressSpinner.Width(new UI.CSSNumber(100, "%"));
            newProgressSpinner.Type(UI.ProgressSpinnerTypes.Horizontal);
            MiscTab_NewRow.Children.Add(newProgressSpinner);
            MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

            var MiscTab_NewRow = new UI.StackPanelRow();
            var newLabel = new UI.Label(LoremIpsum);
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newLabel.HTML("Below are progress bars which:<br /><ol>" + 
                              "<li>Is circular</li>" +
                              "<li>Is horizontal</li>" + 
                              "<li>Is vertical; is reversed (i.e. bottom to top)</li>" +
                          "</ol>");
            MiscTab_NewRow.Children.Add(newLabel);            
            MiscTab_StackPanel.Rows.Add(MiscTab_NewRow);

            MiscTab_NewRow = new UI.StackPanelRow();
            MiscTab_NewRow.ApplyStyle("text-align", "center");
            for (var j = 0; j < 3; j++)
            {
                var newProgressBar = new UI.ProgressBar();
                newProgressBar.RelativeLayoutOn();
                newProgressBar.Progress((j + 1) * (90 / 3));
                if (j == 0)
                {
                    newProgressBar.Type(UI.ProgressBarTypes.Circular);
                }
                else if (j == 1)
                {
                    newProgressBar.Type(UI.ProgressBarTypes.Horizontal);
                }
                else if (j == 2)
                {
                    newProgressBar.Type(UI.ProgressBarTypes.Vertical);
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

        Show(callback: () => void = null, animator: Animation.IAnimator = new Animation.Animator()): void
        {
            super.Show(callback, animator);
        }
        Hide(callback: () => void = null, animator: Animation.IAnimator = new Animation.Animator()): void
        {
            super.Hide(callback, animator);
        }
    }
}
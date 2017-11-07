/// <reference path="../Lib/Build/IApp.d.ts" />
/// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
/// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
/// <reference path="../Definitions/jquery.d.ts" />

module TSUI.Apps.My
{
    var LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra felis nec erat fermentum malesuada gravida odio pulvinar. Fusce elit massa, hendrerit sit amet vehicula vitae, porta in lorem. Suspendisse volutpat eros sed nibh elementum tincidunt. Nam nulla nibh, dapibus.";
    
    var isMobile: boolean = false;

    export class MyApp implements IApp
    {
        private MainContainer: JQuery = null;
        private StartArgs: string[] = null;
        

        private TheSplashScreen: UI.ISplashScreen;
        private TheStartupWindow: IStartupWindow;

        Run(args: string[] = [], container: JQuery = $("body")): void
        {
            this.StartArgs = args;
            this.MainContainer = container;
            
            this.MainContainer.addClass("MyApp");

            isMobile = window.location.hash === "#mobile" && window.location.search !== "?mode=desktop";

            Animation.AppWindowAnimator.UseCanvasRenderIfSensible = false;

            this.InitSplashScreen();

            //#region Show

            var _this = this;
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

            //#endregion
        }

        InitSplashScreen()
        {
            if (isMobile)
            {
                this.TheSplashScreen = new UI.MobileSplashScreen("My App");
                this.TheSplashScreen.ConstructDOM(this.MainContainer);
            }
            else
            {
                this.TheSplashScreen = new UI.DesktopSplashScreen("My App");
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
            this.InitStartupWindow(callback);
            return true;
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
        LoginTile: UI.ITile;

        TheDesktopLoginWindow: UI.DesktopLoginWindow;
        TheMobileLoginWindow: UI.MobileLoginWindow;

        Row1: UI.IStartupWindow_Row; 
        
        Row1_Group1: UI.IStartupWindow_Group;
        
        Window: UI.IStartupWindow;

        constructor(MobileMode: boolean, AWindow: IStartupWindow)
        {
            this.Window = AWindow;
            
            if (!this.LoginTile)
            {
                this.LoginTile = new UI.Tile(UI.TileSizes.Medium, UI.TileTypes.Iconic);
            }


            this.Row1 = new UI.StartupWindow_Row(MobileMode);
            
            this.Row1_Group1 = new UI.StartupWindow_Group(MobileMode);
            
            this.LoginTile.AddClass("LoginTile");
            this.LoginTile.NameLabel.Text("Login");
            this.LoginTile.IconBox.Source(UI.TileIcons.Secure);
            this.LoginTile.ShowCounter(false);
            this.LoginTile.OnClick.Attach(new Events.ClickEventHandler(this.LoginTile_OnClick, this));
            this.LoginTile.RelativeLayoutOn();

            this.Row1.Groups.Add(this.Row1_Group1);
            
            this.Row1_Group1.Tiles.Add(this.LoginTile);


            var _this = this;
            setTimeout(function ()
            {
                _this.InitDesktopLoginWindow();
                _this.InitMobileLoginWindow();
            }, 1500);
        }

        
        _This_OnResize(eventArgs: Events.ResizeEventArgs)
        {
            this.PositionDesktopLoginWindow();
        }

        InitDesktopLoginWindow()
        {
            if (!this.TheDesktopLoginWindow)
            {
                this.TheDesktopLoginWindow = new UI.DesktopLoginWindow();
                this.TheDesktopLoginWindow.OnClose.Attach(new Events.CloseEventHandler(function ()
                {
                    this.Window.Enabled(true);
                }, this));
                this.TheDesktopLoginWindow.ConstructDOM(this.Window._rootElement.parent());
                this.TheDesktopLoginWindow.DestroyDOMOnClose = false;
            }
        }
        InitMobileLoginWindow()
        {
            if (!this.TheMobileLoginWindow)
            {
                this.TheMobileLoginWindow = new UI.MobileLoginWindow();
                this.TheMobileLoginWindow.OnClose.Attach(new Events.CloseEventHandler(function ()
                {
                    this.Window.Enabled(true);
                }, this));
                this.TheMobileLoginWindow.ConstructDOM(this.Window._rootElement.parent());
                this.TheMobileLoginWindow.DestroyDOMOnClose = false;
            }
        }

        PositionDesktopLoginWindow(overrideVisible: boolean = false)
        {
            if (!this.TheDesktopLoginWindow)
            {
                return;
            }
            if (this.TheDesktopLoginWindow.Visible() || overrideVisible)
            {                
                var WantedWidthPerc = 0.5;
                var WantedHeightPerc = 0.5;

                this.TheDesktopLoginWindow.Width(new UI.CSSNumber(WantedWidthPerc * 100, "%"));
                this.TheDesktopLoginWindow.Height(new UI.CSSNumber(WantedHeightPerc * 100, "%"));
                
                var minWidth = 400;
                var maxWidth = 400;
                var minHeight = 230;
                var maxHeight = 230;

                this.TheDesktopLoginWindow.MinWidth(new UI.CSSNumber(minWidth));
                this.TheDesktopLoginWindow.MinHeight(new UI.CSSNumber(minHeight));
                this.TheDesktopLoginWindow.MaxWidth(new UI.CSSNumber(maxWidth));
                this.TheDesktopLoginWindow.MaxHeight(new UI.CSSNumber(maxHeight));

                var windowWidth = this.Window._rootElement.parent().width();
                var widthPx = Math.max(minWidth, Math.min(maxWidth, windowWidth * WantedWidthPerc));
                var widthPerc = (widthPx / windowWidth) * 100;
                var leftPerc = (100 - widthPerc) / 2;

                var windowHeight = this.Window._rootElement.parent().height();
                var heightPx = Math.max(minHeight, Math.min(maxHeight, windowHeight * WantedHeightPerc));
                var heightPerc = (heightPx / windowHeight) * 100;
                var topPerc = (100 - heightPerc) / 2;

                this.TheDesktopLoginWindow.Top(new UI.CSSNumber(topPerc, "%"));
                this.TheDesktopLoginWindow.Left(new UI.CSSNumber(leftPerc, "%"));
            }
        }
        PositionMobileLoginWindow(overrideVisible: boolean = false)
        {
            if (!this.TheMobileLoginWindow)
            {
                return;
            }
            if (this.TheMobileLoginWindow.Visible() || overrideVisible)
            {   
                this.TheMobileLoginWindow.Width(new UI.CSSNumber(100, "%"));
                this.TheMobileLoginWindow.Height(new UI.CSSNumber(100, "%"));

                this.TheMobileLoginWindow.MinWidth(new UI.CSSNumber(235));
                this.TheMobileLoginWindow.MinHeight(new UI.CSSNumber(320));
                this.TheMobileLoginWindow.MaxWidth(new UI.CSSNumber(100, "%"));
                this.TheMobileLoginWindow.MaxHeight(new UI.CSSNumber(100, "%"));

                this.TheMobileLoginWindow.Top(new UI.CSSNumber(0, "%"));
                this.TheMobileLoginWindow.Left(new UI.CSSNumber(0, "%"));
            }
        }

        LoginTile_OnClick(eventArgs: Events.ClickEventArgs)
        {   
            var _this = this;
            if(isMobile)
            {
                this.PositionMobileLoginWindow(true);
                this.TheMobileLoginWindow.Show(function ()
                {
                    _this.Window.Enabled(false);
                });
            }
            else
            {
                this.PositionDesktopLoginWindow(true);
                this.TheDesktopLoginWindow.Show(function ()
                {
                    _this.Window.Enabled(false);
                });
            }
        }
    } 
    class DesktopStartupWindow extends UI.DesktopStartupWindow implements IStartupWindow
    {
        public WindowControls: StartupWindowControls
        
        constructor()
        {
            super("My App");
            
            if (!this.WindowControls)
            {
                this.WindowControls = new StartupWindowControls(false, this);
            }

            this.CloseButton.Visible(false);
            this.ResizeEnabled(false);
            this.DragEnabled(false);
            
            this.Rows.Add(this.WindowControls.Row1);
            
            this.OnResize.Attach(new Events.ResizeEventHandler(this.WindowControls._This_OnResize, this.WindowControls));
        }

    }
    class MobileStartupWindow extends DesktopStartupWindow
    {
        public WindowControls: StartupWindowControls;
        
        constructor()
        {
            this.WindowControls = new StartupWindowControls(true, this);

            super();

            this.AddClass("Mobile");
        }
    }

}
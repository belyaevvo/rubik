/// <reference path="../Lib/IApp.d.ts" />
/// <reference path="../Lib/Animation/AnimationRefs.d.ts" />
/// <reference path="../Lib/UI/UIRefs.d.ts" />
/// <reference path="../Definitions/jquery.d.ts" />

var LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra felis nec erat fermentum malesuada gravida odio pulvinar. Fusce elit massa, hendrerit sit amet vehicula vitae, porta in lorem. Suspendisse volutpat eros sed nibh elementum tincidunt. Nam nulla nibh, dapibus.";

module TSUI.Apps.My
{
    var isMobile: bool = false;

    export class MyApp implements IApp
    {
        private MainContainer: JQuery = null;
        private StartArgs: string[] = null;
        

        private TheSplashScreen: ISplashScreen;
        private TheStartupWindow: IStartupWindow;

        Run(args: string[] = [], container: JQuery = $("body")): void
        {
            this.StartArgs = args;
            this.MainContainer = container;

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
                this.TheSplashScreen = new MobileSplashScreen();
                this.TheSplashScreen.OptimiseConstructForGraphics = false;
                this.TheSplashScreen.ConstructDOM(this.MainContainer);

                var width = Math.min($(window).width(), 580);
                this.TheSplashScreen.Width(new UI.CSSNumber(width));
                this.TheSplashScreen.Left(new UI.CSSNumber(($(window).width() - width) / 2));
                this.TheSplashScreen.Height(new UI.CSSNumber($(window).height()));
            }
            else
            {
                this.TheSplashScreen = new DesktopSplashScreen();
                this.TheSplashScreen.OptimiseConstructForGraphics = false;
                this.TheSplashScreen.ConstructDOM(this.MainContainer);
                var topPx = ($(window).height() - this.TheSplashScreen.Height().Value) / 2;
                this.TheSplashScreen.Top(new UI.CSSNumber((topPx / $(window).height()) * 100, "%"));
                var leftPx = ($(window).width() - this.TheSplashScreen.Width().Value) / 2;
                this.TheSplashScreen.Left(new UI.CSSNumber((leftPx / $(window).width()) * 100, "%"));
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

        Init(callback: ()=>void = null): bool
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

    interface ISplashScreen extends UI.IWindow
    {
    }
    class DesktopSplashScreen extends UI.Window implements ISplashScreen
    {
        constructor()
        {
            super();

            this.AddClass("SplashScreen");

            this.MainTitleBar.Visible(false);
            this.CloseButton.Visible(false);
            this.ResizeEnabled(false);
            this.DragEnabled(false);

            this.Width(new UI.CSSNumber(500));
            this.Height(new UI.CSSNumber(250));

            var NameLabel = new UI.Label();
            NameLabel.AddClass("NameLabel");
            NameLabel.Text("My App");
            this.Children.Add(NameLabel);

            var ProgressSpinner = new UI.ProgressSpinner();
            ProgressSpinner.AnimationDuration(2000);
            this.Children.Add(ProgressSpinner);
        }
    }
    class MobileSplashScreen extends DesktopSplashScreen implements ISplashScreen
    {
        constructor()
        {
            super();

            this.AddClass("Mobile");

            this.Top(new UI.CSSNumber(0));
            this.Left(new UI.CSSNumber(0));
        }
    }

    interface IStartupWindow extends UI.IWindow
    {
        LoginTile: UI.ITile;
    }
    class DesktopStartupWindow extends UI.Window implements IStartupWindow
    {
        LoginTile: UI.ITile;
        
        TilesStackPanel: UI.IStackPanel;
        TilesStackPanel_Row1: UI.IStackPanelRow;
        
        TSP_HorSP1: UI.IStackPanel;
        TSP_HorSP1_Col1: UI.IStackPanelRow;
        
        TheDesktopLoginWindow: DesktopLoginWindow;
        TheMobileLoginWindow: MobileLoginWindow;

        constructor()
        {
            super();

            this.OptimiseConstructForGraphics = isMobile;

            this.AddClass("StartupWindow");

            this.Title("TypeScript UI");

            this.CloseButton.Visible(false);
            this.ResizeEnabled(false);
            this.DragEnabled(false);

            if (!this.LoginTile)
            {
                this.LoginTile = new UI.Tile(UI.TileSizes.Medium, UI.TileTypes.Iconic);
            }
            
            this.TilesStackPanel = new UI.StackPanel();

            this.TilesStackPanel_Row1 = new UI.StackPanelRow();
            
            this.TilesStackPanel_Row1.RelativeLayoutOn();
            
            this.TSP_HorSP1 = new UI.StackPanel();
            this.TSP_HorSP1.Orientation(UI.StackPanelOrientations.Horizontal);
            
            this.TSP_HorSP1_Col1 = new UI.StackPanelRow();
            
            this.TSP_HorSP1_Col1.RelativeLayoutOn();
            
            this.LoginTile.AddClass("LoginTile");
            this.LoginTile.NameLabel.Text("Login");
            this.LoginTile.IconBox.Source(UI.TileIcons.About);
            this.LoginTile.ShowCounter(false);
            this.LoginTile.OnClick.Attach(new Events.ClickEventHandler(this.LoginTile_OnClick, this));
            this.LoginTile.RelativeLayoutOn();

            this.ContentPanel.Children.Add(this.TilesStackPanel);

            this.TilesStackPanel.Rows.Add(this.TilesStackPanel_Row1);
            
            this.TSP_HorSP1.Rows.Add(this.TSP_HorSP1_Col1);
            
            this.TilesStackPanel_Row1.Children.Add(this.TSP_HorSP1);
            
            this.TSP_HorSP1_Col1.Children.Add(this.LoginTile);
            
            var _this = this;
            setTimeout(function ()
            {
                _this.InitDesktopLoginWindow();
                _this.InitMobileLoginWindow();
            }, 150);

            this.OnResize.Attach(new Events.ResizeEventHandler(this._This_OnResize, this));
        }

        _This_OnResize(eventArgs: Events.ResizeEventArgs)
        {
            this.PositionDesktopLoginWindow();
        }

        InitDesktopLoginWindow()
        {
            if (!this.TheDesktopLoginWindow)
            {
                this.TheDesktopLoginWindow = new DesktopLoginWindow();
                this.TheDesktopLoginWindow.OnClose.Attach(new Events.CloseEventHandler(function ()
                {
                    this.Enabled(true);
                }, this));
                this.TheDesktopLoginWindow.ConstructDOM(this._rootElement.parent());
                this.TheDesktopLoginWindow.DestroyDOMOnClose = false;
            }
        }
        InitMobileLoginWindow()
        {
            if (!this.TheMobileLoginWindow)
            {
                this.TheMobileLoginWindow = new MobileLoginWindow();
                this.TheMobileLoginWindow.OnClose.Attach(new Events.CloseEventHandler(function ()
                {
                    this.Enabled(true);
                }, this));
                this.TheMobileLoginWindow.ConstructDOM(this._rootElement.parent());
                this.TheMobileLoginWindow.DestroyDOMOnClose = false;
            }
        }

        PositionDesktopLoginWindow(overrideVisible: bool = false)
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

                var windowWidth = this._rootElement.parent().width();
                var widthPx = Math.max(minWidth, Math.min(maxWidth, windowWidth * WantedWidthPerc));
                var widthPerc = (widthPx / windowWidth) * 100;
                var leftPerc = (100 - widthPerc) / 2;

                var windowHeight = this._rootElement.parent().height();
                var heightPx = Math.max(minHeight, Math.min(maxHeight, windowHeight * WantedHeightPerc));
                var heightPerc = (heightPx / windowHeight) * 100;
                var topPerc = (100 - heightPerc) / 2;

                this.TheDesktopLoginWindow.Top(new UI.CSSNumber(topPerc, "%"));
                this.TheDesktopLoginWindow.Left(new UI.CSSNumber(leftPerc, "%"));
            }
        }
        PositionMobileLoginWindow(overrideVisible: bool = false)
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
                    _this.Enabled(false);
                });
            }
            else
            {
                this.PositionDesktopLoginWindow(true);
                this.TheDesktopLoginWindow.Show(function ()
                {
                    _this.Enabled(false);
                });
            }
        }
    }
    class MobileStartupWindow extends DesktopStartupWindow implements IStartupWindow
    {
        constructor()
        {
            super();

            this.AddClass("Mobile");

            this.LoginTile.Size(UI.TileSizes.Small);
        }
    }

    interface ILoginWindow extends UI.IWindow
    {
    }
    class DesktopLoginWindow extends UI.Window implements ILoginWindow
    {
        CentralisingPanel: UI.IPanel;
        
        ControlsStackPanel: UI.IStackPanel;
        UsernameRow: UI.IStackPanelRow;
        PasswordRow: UI.IStackPanelRow;
        LoginRow: UI.IStackPanelRow;

        UsernameLabel: UI.ILabel;
        UsernameBox: UI.ITextBox;
        PasswordLabel: UI.ILabel;
        PasswordBox: UI.ITextBox;
        LoginButton: UI.IButton;

        constructor()
        {
            super();

            this.OptimiseConstructForGraphics = isMobile;

            this.AddClass("LoginWindow");

            this.Title("Login");

            this.ResizeEnabled(false);

            this.CentralisingPanel = new UI.Panel()
            this.CentralisingPanel.AddClass("Centralise");
            this.CentralisingPanel.RelativeLayoutOn();
            this.ContentPanel.Children.Add(this.CentralisingPanel);

            this.ControlsStackPanel = new UI.StackPanel();
            this.ControlsStackPanel.RelativeLayoutOn();
            this.CentralisingPanel.Children.Add(this.ControlsStackPanel);

            this.UsernameRow = new UI.StackPanelRow();
            this.ControlsStackPanel.Rows.Add(this.UsernameRow);
            this.PasswordRow = new UI.StackPanelRow();
            this.ControlsStackPanel.Rows.Add(this.PasswordRow);
            this.LoginRow = new UI.StackPanelRow();
            this.ControlsStackPanel.Rows.Add(this.LoginRow);

            this.UsernameLabel = new UI.Label("Username : ");
            this.UsernameLabel.RelativeLayoutOn();
            this.UsernameRow.Children.Add(this.UsernameLabel);
            
            this.UsernameBox = new UI.TextBox();
            this.UsernameBox.RelativeLayoutOn();
            this.UsernameRow.Children.Add(this.UsernameBox);

            this.PasswordLabel = new UI.Label("Password : ");
            this.PasswordLabel.RelativeLayoutOn();
            this.PasswordRow.Children.Add(this.PasswordLabel);
            
            this.PasswordBox = new UI.TextBox();
            this.PasswordBox.Masked(true);
            this.PasswordBox.RelativeLayoutOn();
            this.PasswordRow.Children.Add(this.PasswordBox);

            this.LoginButton = new UI.Button();
            this.LoginButton.Text("Login");
            this.LoginButton.Width(new UI.CSSNumber(197));
            this.LoginButton.RelativeLayoutOn();
            this.LoginRow.Children.Add(this.LoginButton);
        }
    }
    class MobileLoginWindow extends DesktopLoginWindow implements ILoginWindow
    {
        constructor()
        {
            super();

            this.OptimiseConstructForGraphics = isMobile;

            this.AddClass("Mobile");

            this.Title("Mobile Login");
       }
    }
}
/// <reference path="../Lib/Build/IApp.d.ts" />
/// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
/// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
/// <reference path="../Definitions/jquery.d.ts" />

module TSUI.Apps.Samples
{
    var sampleDescriptions: string[] = [
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

    var isMobile: boolean = false;

    export class SampleSelectorApp implements IApp
    {
        private MainContainer: JQuery = null;
        private StartArgs: string[] = null;


        private TheSplashScreen: UI.ISplashScreen;
        private TheStartupWindow: IStartupWindow;

        Run(args: string[]= [], container: JQuery = $("body")): void
        {
            this.StartArgs = args;
            this.MainContainer = container;

            this.MainContainer.addClass("SampleSelectorApp");

            isMobile = window.location.hash === "#mobile" && window.location.search !== "?mode=desktop";
            
            Animation.AppWindowAnimator.UseCanvasRenderIfSensible = false;

            //this.InitSplashScreen();

            //#region Show

            var _this = this;
            //var startLoadTime = Date.now();
            //this.ShowSplashScreen(function ()
            //{
                if (!_this.Init(function ()
                {
                    _this.TheStartupWindow.Enabled(false);

                    _this.TheStartupWindow.Width(new UI.CSSNumber(100, "%"));
                    _this.TheStartupWindow.Height(new UI.CSSNumber(100, "%"));
                    //_this.TheSplashScreen.Hide(function ()
                    //{
                        _this.TheStartupWindow.Show(function ()
                        {
                            _this.TheStartupWindow.Enabled(true);
                            //_this.TheSplashScreen.DestroyDOM();
                        }, new Animation.FadeAnimator());
                    //});
                }))
                {
                    alert("Failed to initialise properly!");
                }
            //});

            //#endregion
        }

        InitSplashScreen()
        {
            if (isMobile)
            {
                this.TheSplashScreen = new UI.MobileSplashScreen("Sample Selector");
                this.TheSplashScreen.ConstructDOM(this.MainContainer);
            }
            else
            {
                this.TheSplashScreen = new UI.DesktopSplashScreen("Sample Selector");
                this.TheSplashScreen.ConstructDOM(this.MainContainer);
                this.TheSplashScreen.Width(new UI.CSSNumber(550));
            }
        }
        ShowSplashScreen(callback?: () => void)
        {
            this.TheSplashScreen.Show(function ()
            {
                if (callback)
                {
                    callback();
                }
            }, new Animation.Animator());
        }

        Init(callback: () => void = null): boolean
        {
            this.InitStartupWindow(callback);
            return true;
        }
        InitStartupWindow(callback: () => void = null)
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
        Window: UI.IStartupWindow;

        constructor(MobileMode: boolean, AWindow: IStartupWindow)
        {
            this.Window = AWindow;

            var cRow: UI.StartupWindow_Row = null;
            var cGroup: UI.IStartupWindow_Group = null;
            for (var i = 0; i < sampleDescriptions.length; i++)
            {
                if (cRow === null)
                {
                    cRow = new UI.StartupWindow_Row(MobileMode);
                    this.Window.Rows.Add(cRow);
                }

                if (cGroup === null || i % 1 == 0)
                {
                    cGroup = new UI.StartupWindow_Group(MobileMode);
                    cRow.Groups.Add(cGroup);
                }

                var SampleTile = new UI.Tile(UI.TileSizes.Medium, UI.TileTypes.Flip);
                SampleTile.AddClass("SampleTile");
                SampleTile.NameLabel.Text("Sample " + i.toString());
                SampleTile.TextLabel.Text(sampleDescriptions[i]);
                SampleTile.ShowCounter(false);
                SampleTile.OnClick.Attach(new Events.ClickEventHandler((args: Events.ClickEventArgs) =>
                {
                    window.open((<UI.ITile>args.Sender).NameLabel.Text().replace(" ", "") + ".html", "_self");
                }, this));
                SampleTile.RelativeLayoutOn();
                cGroup.Tiles.Add(SampleTile);
            }
        }
    }
    class DesktopStartupWindow extends UI.DesktopStartupWindow implements IStartupWindow
    {
        public WindowControls: StartupWindowControls

        constructor()
        {
            super("Sample Selector");

            if (!this.WindowControls)
            {
                this.WindowControls = new StartupWindowControls(false, this);
            }

            this.CloseButton.Visible(false);
            this.ResizeEnabled(false);
            this.DragEnabled(false);
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
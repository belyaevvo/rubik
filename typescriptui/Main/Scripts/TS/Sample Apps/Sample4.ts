/// <reference path="../Lib/Build/IApp.d.ts" />
/// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
/// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
/// <reference path="../Definitions/jquery.d.ts" />

module TSUI.Apps.Samples
{
    export class Sample4App implements IApp
    {
        private MainContainer: JQuery = null;
        private StartArgs: string[] = null;

        private TheSplashScreen: UI.ISplashScreen;
        private TheStartupWindow: DesktopStartupWindow;

        Run(args: string[]= [], container: JQuery = $("body")): void
        {
            this.StartArgs = args;
            this.MainContainer = container;

            this.MainContainer.addClass("Sample4");

            Animation.AppWindowAnimator.UseCanvasRenderIfSensible = false;

            console.log("Sample 4 loaded.");

            this.InitSplashScreen();

            var startLoadTime = Date.now();
            this.ShowSplashScreen(() =>
            {
                if (!this.Init(() =>
                {
                    this.TheStartupWindow.Enabled(false);

                    this.TheStartupWindow.Width(new UI.CSSNumber(100, "%"));
                    this.TheStartupWindow.Height(new UI.CSSNumber(100, "%"));
                    setTimeout(() =>
                    {
                        this.TheSplashScreen.Hide(() =>
                        {
                            this.TheStartupWindow.Show(() =>
                            {
                                this.TheStartupWindow.Enabled(true);
                                this.TheSplashScreen.DestroyDOM();
                            }, new Animation.FadeAnimator());
                        });
                    }, 4000 - (startLoadTime - Date.now()));
                }))
                {
                    alert("Failed to initialise properly!");
                }
            });
        }

        InitSplashScreen()
        {
            this.TheSplashScreen = new UI.DesktopSplashScreen("Sample 4");
            this.TheSplashScreen.ConstructDOM(this.MainContainer);
            this.TheSplashScreen.Width(new UI.CSSNumber(550));
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
            this.TheStartupWindow = new DesktopStartupWindow();
            this.TheStartupWindow.ConstructDOM(this.MainContainer, callback);
        }
    }

    class DesktopStartupWindow extends UI.DesktopStartupWindow
    {
        private Row1: UI.StartupWindow_Row;
        private Row2: UI.StartupWindow_Row;
        private Row1_Group1: UI.StartupWindow_Group;
        private Row1_Group2: UI.StartupWindow_Group;
        private Row2_Group1: UI.StartupWindow_Group;

        private Tile1: UI.ITile;
        private Tile2: UI.ITile;
        private Tile3: UI.ITile;
        private Tile4: UI.ITile;
        private AboutTile: UI.ITile;

        private AboutPage: UI.PageWindow;

        constructor()
        {
            super("Sample 4");
            
            this.CloseButton.Visible(false);
            this.ResizeEnabled(false);
            this.DragEnabled(false);

            this.Row1 = new UI.StartupWindow_Row(false);
            this.Rows.Add(this.Row1);
            this.Row2 = new UI.StartupWindow_Row(false);
            this.Rows.Add(this.Row2);

            this.Row1_Group1 = new UI.StartupWindow_Group(false);
            this.Row1.Groups.Add(this.Row1_Group1);
            
            this.Row1_Group2 = new UI.StartupWindow_Group(false);
            this.Row1.Groups.Add(this.Row1_Group2);

            this.Row2_Group1 = new UI.StartupWindow_Group(false);
            this.Row2.Groups.Add(this.Row2_Group1);
            
            this.Tile1 = new UI.Tile(UI.TileSizes.Medium, UI.TileTypes.Flip);
            this.Tile1.AddClass("Tile1");
            this.Tile1.NameLabel.Text("Tile 1");
            this.Tile1.TextLabel.Text("A description of Tile 1.");
            this.Tile1.Counter.Text("1");
            this.Tile1.OnClick.Attach(new Events.ClickEventHandler((args: Events.ClickEventArgs) =>
            {
                alert("You clicked Tile 1!");
            }, this));
            this.Tile1.RelativeLayoutOn();

            this.Tile2 = new UI.Tile(UI.TileSizes.Medium, UI.TileTypes.Flip);
            this.Tile2.AddClass("Tile2");
            this.Tile2.NameLabel.Text("Tile 2");
            this.Tile2.TextLabel.Text("A description of Tile 2.");
            this.Tile2.Counter.Text("2");
            this.Tile2.OnClick.Attach(new Events.ClickEventHandler((args: Events.ClickEventArgs) =>
            {
                alert("You clicked Tile 2!");
            }, this));
            this.Tile2.RelativeLayoutOn();

            this.Tile3 = new UI.Tile(UI.TileSizes.Medium, UI.TileTypes.Flip);
            this.Tile3.AddClass("Tile3");
            this.Tile3.NameLabel.Text("Tile 3");
            this.Tile3.TextLabel.Text("A description of Tile 3.");
            this.Tile3.Counter.Text("3");
            this.Tile3.OnClick.Attach(new Events.ClickEventHandler((args: Events.ClickEventArgs) =>
            {
                alert("You clicked Tile 3!");
            }, this));
            this.Tile3.RelativeLayoutOn();

            this.Tile4 = new UI.Tile(UI.TileSizes.Medium, UI.TileTypes.Flip);
            this.Tile4.AddClass("Tile4");
            this.Tile4.NameLabel.Text("Tile 4");
            this.Tile4.TextLabel.Text("A description of Tile 4.");
            this.Tile4.Counter.Text("4");
            this.Tile4.OnClick.Attach(new Events.ClickEventHandler((args: Events.ClickEventArgs) =>
            {
                alert("You clicked Tile 4!");
            }, this));
            this.Tile4.RelativeLayoutOn();

            this.AboutTile = new UI.Tile(UI.TileSizes.Large, UI.TileTypes.Flip);
            this.AboutTile.AddClass("AboutTile");
            this.AboutTile.NameLabel.Text("About");
            this.AboutTile.TextLabel.Text("About this sample app.");
            this.AboutTile.ShowCounter(false);
            this.AboutTile.OnClick.Attach(new Events.ClickEventHandler((args: Events.ClickEventArgs) =>
            {
                this.AboutPage.PositionCenterWindow();
                this.AboutPage.Show();
            }, this));
            this.AboutTile.RelativeLayoutOn();

            this.Row1_Group1.Tiles.Add(this.Tile1);
            this.Row1_Group1.Tiles.Add(this.Tile2);
            this.Row1_Group2.Tiles.Add(this.Tile3);
            this.Row1_Group2.Tiles.Add(this.Tile4);
            this.Row1_Group1.Tiles.Add(this.Tile1);
            this.Row2_Group1.Tiles.Add(this.AboutTile);


            this.AboutPage = new UI.PageWindow();
            this.AboutPage.ContentPanel.Children.Add(new UI.Label("<div style=\"padding:10px;\"><h2>About</h2><p>Suitable content for an about page for this sample app.</p></div>"));
        }

        ConstructDOM(parent: JQuery, onComplete?: ()=>void): void
        {
            super.ConstructDOM(parent, () =>
            {
                this.AboutPage.ConstructDOM(parent);

                if (onComplete)
                {
                    onComplete();
                }
            });
        }
    }
}
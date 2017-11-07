/// <reference path="../Lib/Build/IApp.d.ts" />
/// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
/// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
/// <reference path="../Definitions/jquery.d.ts" />

module TSUI.Apps.Samples
{
    var isMobile: boolean = false;

    export class Sample7App implements IApp
    {
        private MainContainer: JQuery = null;
        private StartArgs: string[] = null;

        private TheStartupWindow: DesktopStartupWindow;

        Run(args: string[]= [], container: JQuery = $("body")): void
        {
            this.StartArgs = args;
            this.MainContainer = container;

            this.MainContainer.addClass("Sample7");

            isMobile = window.location.hash === "#mobile" && window.location.search !== "?mode=desktop";

            Animation.AppWindowAnimator.UseCanvasRenderIfSensible = false;

            console.log("Sample 7 loaded.");

            if (isMobile)
            {
                this.TheStartupWindow = new MobileStartupWindow();
            }
            else
            {
                this.TheStartupWindow = new DesktopStartupWindow();
            }
            this.TheStartupWindow.Width(new UI.CSSNumber(100, "%"));
            this.TheStartupWindow.Height(new UI.CSSNumber(100, "%"));
            this.TheStartupWindow.ConstructDOM(this.MainContainer, () =>
            {
                this.TheStartupWindow.Enabled(false);

                this.TheStartupWindow.Show(() =>
                {
                    this.TheStartupWindow.Width(new UI.CSSNumber(100, "%"));
                    this.TheStartupWindow.Height(new UI.CSSNumber(100, "%"));

                    this.TheStartupWindow.Enabled(true);
                });
            });
        }
    }

    interface IStartupWindow extends UI.IStartupWindow
    {
        WindowControls: StartupWindowControls;
    }
    class StartupWindowControls
    {
        Window: UI.IStartupWindow;

        Row1: UI.StartupWindow_Row;
        Row2: UI.StartupWindow_Row;
        Row1_Group1: UI.StartupWindow_Group;
        Row1_Group2: UI.StartupWindow_Group;
        Row2_Group1: UI.StartupWindow_Group;

        Tile1: UI.ITile;
        Tile2: UI.ITile;
        Tile3: UI.ITile;
        Tile4: UI.ITile;
        AboutTile: UI.ITile;

        AboutPage: UI.PageWindow;

        constructor(MobileMode: boolean, AWindow: IStartupWindow)
        {
            this.Window = AWindow;

            this.Row1 = new UI.StartupWindow_Row(false);
            this.Window.Rows.Add(this.Row1);
            this.Row2 = new UI.StartupWindow_Row(false);
            this.Window.Rows.Add(this.Row2);

            this.Row1_Group1 = new UI.StartupWindow_Group(false);
            this.Row1.Groups.Add(this.Row1_Group1);

            this.Row1_Group2 = new UI.StartupWindow_Group(false);
            this.Row1.Groups.Add(this.Row1_Group2);

            this.Row2_Group1 = new UI.StartupWindow_Group(false);
            this.Row2.Groups.Add(this.Row2_Group1);

            this.Tile1 = new UI.Tile(MobileMode ? UI.TileSizes.Small : UI.TileSizes.Medium, UI.TileTypes.Flip);
            this.Tile1.AddClass("Tile1");
            this.Tile1.NameLabel.Text("Tile 1");
            this.Tile1.TextLabel.Text("A description of Tile 1.");
            this.Tile1.Counter.Text("1");
            this.Tile1.OnClick.Attach(new Events.ClickEventHandler((args: Events.ClickEventArgs) =>
            {
                alert("You clicked Tile 1!");
            }, this));
            this.Tile1.RelativeLayoutOn();

            this.Tile2 = new UI.Tile(MobileMode ? UI.TileSizes.Small : UI.TileSizes.Medium, UI.TileTypes.Flip);
            this.Tile2.AddClass("Tile2");
            this.Tile2.NameLabel.Text("Tile 2");
            this.Tile2.TextLabel.Text("A description of Tile 2.");
            this.Tile2.Counter.Text("2");
            this.Tile2.OnClick.Attach(new Events.ClickEventHandler((args: Events.ClickEventArgs) =>
            {
                alert("You clicked Tile 2!");
            }, this));
            this.Tile2.RelativeLayoutOn();

            this.Tile3 = new UI.Tile(MobileMode ? UI.TileSizes.Small : UI.TileSizes.Medium, UI.TileTypes.Flip);
            this.Tile3.AddClass("Tile3");
            this.Tile3.NameLabel.Text("Tile 3");
            this.Tile3.TextLabel.Text("A description of Tile 3.");
            this.Tile3.Counter.Text("3");
            this.Tile3.OnClick.Attach(new Events.ClickEventHandler((args: Events.ClickEventArgs) =>
            {
                alert("You clicked Tile 3!");
            }, this));
            this.Tile3.RelativeLayoutOn();

            this.Tile4 = new UI.Tile(MobileMode ? UI.TileSizes.Small : UI.TileSizes.Medium, UI.TileTypes.Flip);
            this.Tile4.AddClass("Tile4");
            this.Tile4.NameLabel.Text("Tile 4");
            this.Tile4.TextLabel.Text("A description of Tile 4.");
            this.Tile4.Counter.Text("4");
            this.Tile4.OnClick.Attach(new Events.ClickEventHandler((args: Events.ClickEventArgs) =>
            {
                alert("You clicked Tile 4!");
            }, this));
            this.Tile4.RelativeLayoutOn();

            this.AboutTile = new UI.Tile(MobileMode ? UI.TileSizes.Medium : UI.TileSizes.Large, UI.TileTypes.Flip);
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
    }
    class DesktopStartupWindow extends UI.DesktopStartupWindow implements IStartupWindow
    {
        WindowControls: StartupWindowControls;

        constructor()
        {
            super("Sample 7");

            this.WindowControls = new StartupWindowControls(false, this);
        }

        ConstructDOM(parent: JQuery, onComplete?: () => void): void
        {
            super.ConstructDOM(parent, () =>
            {
                this.WindowControls.AboutPage.ConstructDOM(parent);

                if (onComplete)
                {
                    onComplete();
                }
            });
        }
    }
    class MobileStartupWindow extends UI.MobileStartupWindow implements IStartupWindow
    {
        WindowControls: StartupWindowControls;

        constructor()
        {
            super("Sample 7");

            this.WindowControls = new StartupWindowControls(true, this);
        }

        ConstructDOM(parent: JQuery, onComplete?: () => void): void
        {
            super.ConstructDOM(parent, () =>
            {
                this.WindowControls.AboutPage.ConstructDOM(parent);

                if (onComplete)
                {
                    onComplete();
                }
            });
        }
    }
}
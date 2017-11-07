/// <reference path="../Lib/Build/IApp.d.ts" />
/// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
/// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
/// <reference path="../Definitions/jquery.d.ts" />

module TSUI.Apps.Samples
{
    var isMobile: boolean = false;

    export class Sample6App implements IApp
    {
        private MainContainer: JQuery = null;
        private StartArgs: string[] = null;

        private TheStartupWindow: IStartupWindow;

        Run(args: string[]= [], container: JQuery = $("body")): void
        {
            this.StartArgs = args;
            this.MainContainer = container;

            this.MainContainer.addClass("Sample6");

            isMobile = window.location.hash === "#mobile" && window.location.search !== "?mode=desktop";

            Animation.AppWindowAnimator.UseCanvasRenderIfSensible = false;

            console.log("Sample 6 loaded.");

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
        Row1_Group1: UI.StartupWindow_Group;
        Tile1: UI.ITile;

        constructor(MobileMode: boolean, AWindow: IStartupWindow)
        {
            this.Window = AWindow;

            this.Row1 = new UI.StartupWindow_Row(MobileMode);
            this.Window.Rows.Add(this.Row1);

            this.Row1_Group1 = new UI.StartupWindow_Group(MobileMode);
            this.Row1.Groups.Add(this.Row1_Group1);

            if (MobileMode)
            {
                this.Tile1 = new UI.Tile(UI.TileSizes.Small, UI.TileTypes.Flip);
            }
            else
            {
                this.Tile1 = new UI.Tile(UI.TileSizes.Medium, UI.TileTypes.Flip);
            }
            this.Tile1.AddClass("Tile1");
            this.Tile1.NameLabel.Text("Tile 1");
            this.Tile1.TextLabel.Text("A description of Tile 1.");
            this.Tile1.Counter.Text("1");
            this.Tile1.OnClick.Attach(new Events.ClickEventHandler((args: Events.ClickEventArgs) =>
            {
                alert("You clicked Tile 1!");
            }, this));
            this.Tile1.RelativeLayoutOn();
            this.Row1_Group1.Tiles.Add(this.Tile1);
        }
    }
    class DesktopStartupWindow extends UI.DesktopStartupWindow implements IStartupWindow
    {
        WindowControls: StartupWindowControls;
    
        constructor()
        {
            super("Sample 6");
            
            this.WindowControls = new StartupWindowControls(false, this);
        }
    }
    class MobileStartupWindow extends UI.MobileStartupWindow implements IStartupWindow
    {
        WindowControls: StartupWindowControls;

        constructor()
        {
            super("Sample 6");

            this.WindowControls = new StartupWindowControls(true, this);
        }
    }
}
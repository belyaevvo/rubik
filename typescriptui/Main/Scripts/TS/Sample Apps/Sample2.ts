/// <reference path="../Lib/Build/IApp.d.ts" />
/// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
/// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
/// <reference path="../Definitions/jquery.d.ts" />

module TSUI.Apps.Samples
{
    export class Sample2App implements IApp
    {
        private MainContainer: JQuery = null;
        private StartArgs: string[] = null;

        private TheStartupWindow: DesktopStartupWindow;

        Run(args: string[]= [], container: JQuery = $("body")): void
        {
            this.StartArgs = args;
            this.MainContainer = container;

            this.MainContainer.addClass("Sample2");

            Animation.AppWindowAnimator.UseCanvasRenderIfSensible = false;

            console.log("Sample 2 loaded.");

            this.TheStartupWindow = new DesktopStartupWindow();
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

    class DesktopStartupWindow extends UI.DesktopStartupWindow
    {
        private Row1: UI.StartupWindow_Row;
        private Row1_Group1: UI.StartupWindow_Group;
        private Tile1: UI.ITile;

        constructor()
        {
            super("Sample 2");
            
            this.CloseButton.Visible(false);
            this.ResizeEnabled(false);
            this.DragEnabled(false);

            this.Row1 = new UI.StartupWindow_Row(false);
            this.Rows.Add(this.Row1);

            this.Row1_Group1 = new UI.StartupWindow_Group(false);
            this.Row1.Groups.Add(this.Row1_Group1);
            
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
            this.Row1_Group1.Tiles.Add(this.Tile1);
        }
    }
}
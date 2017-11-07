/// <reference path="../Lib/Build/IApp.d.ts" />
/// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
/// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
/// <reference path="../Definitions/jquery.d.ts" />

module TSUI.Apps.Samples
{
    export class Sample11App implements IApp
    {
        private MainContainer: JQuery = null;
        private StartArgs: string[] = null;

        Run(args: string[]= [], container: JQuery = $("body")): void
        {
            this.StartArgs = args;
            this.MainContainer = container;

            this.MainContainer.addClass("Sample11");

            console.log("Sample 11 loaded.");

            var newWindow = new DesktopWindow();
            newWindow.ConstructDOM(this.MainContainer, function ()
            {
                newWindow.Show();
            });
        }
    }

    class DesktopWindow extends UI.Window
    {
        constructor()
        {
            super();

            this.Title("Sample 11");

            this.CloseButton.Visible(false);
            this.ResizeEnabled(false);

            this.Width(new UI.CSSNumber(300));
            this.Height(new UI.CSSNumber(350));

            var upload = new FileUpload();
            upload.Multiple(true);
            this.ContentPanel.Children.Add(upload);
        }
    }

    class FileUpload extends UI.Control
    {
        _UnderlyingUpload: JQuery;

        constructor()
        {
            super();

            this.AddClass("FileUpload");

            this._UnderlyingUpload = $("<input type=\"file\">");

            var multButton = new UI.Button();
            multButton.Text("Multiple");
            multButton.OnClick.Attach(new Events.ClickEventHandler((args: Events.ClickEventArgs)=>
            {
                this.Multiple(!this.Multiple());
            }, this));
            this.Children.Add(multButton);
        }

        ConstructDOM(parent: JQuery, onComplete?: () => void)
        {
            super.ConstructDOM(parent, ()=>
            {
                this._rootElement.append(this._UnderlyingUpload);

                if (onComplete)
                {
                    onComplete();
                }
            });
        }
        DestroyDOM(): void
        {
            this._UnderlyingUpload.remove();

            super.DestroyDOM();
        }

        Multiple(value: boolean = null): boolean
        {
            if (value !== null)
            {
                if (value)
                {
                    this._UnderlyingUpload.attr("multiple", "multiple");
                }
                else
                {
                    this._UnderlyingUpload.removeAttr("multiple");
                }
            }
            return this._UnderlyingUpload.attr("multiple") === "multiple";
        }
    }
}
/// <reference path="../Lib/Build/IApp.d.ts" />
/// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
/// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
/// <reference path="../Definitions/jquery.d.ts" />

module TSUI.Apps.Samples
{
    export class Sample1App implements IApp
    {
        private MainContainer: JQuery = null;
        private StartArgs: string[] = null;

        Run(args: string[]= [], container: JQuery = $("body")): void
        {
            this.StartArgs = args;
            this.MainContainer = container;

            this.MainContainer.addClass("Sample1");

            console.log("Sample 1 loaded.");

            var newWindow = new UI.Window();
            newWindow.Title("Sample 1");
            newWindow.ConstructDOM(this.MainContainer, function ()
            {
                newWindow.Show();
            });
        }
    }
}
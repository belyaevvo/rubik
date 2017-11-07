/// <reference path="../Lib/Build/IApp.d.ts" />
/// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
/// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
/// <reference path="../Definitions/jquery.d.ts" />

module TSUI.Apps.Samples
{
    export class Sample0App implements IApp
    {
        private MainContainer: JQuery = null;
        private StartArgs: string[] = null;

        Run(args: string[] = [], container: JQuery = $("body")): void
        {
            this.StartArgs = args;
            this.MainContainer = container;

            this.MainContainer.addClass("Sample0");

            console.log("Sample 0 loaded.");
        }
    }
}
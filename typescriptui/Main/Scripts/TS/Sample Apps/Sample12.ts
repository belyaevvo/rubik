/// <reference path="../Lib/Build/IApp.d.ts" />
/// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
/// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
/// <reference path="../Definitions/jquery.d.ts" />

module TSUI.Apps.Samples
{
    export class Sample12App implements IApp
    {
        private MainContainer: JQuery = null;
        private StartArgs: string[] = null;

        theWindow: UI.IWindow;

        Run(args: string[]= [], container: JQuery = $("body")): void
        {
            this.StartArgs = args;
            this.MainContainer = container;

            this.MainContainer.addClass("Sample12");

            console.log("Sample 12 loaded.");

            this.theWindow = new UI.Window();
            this.theWindow.Title("Sample 12");
            this.theWindow.ConstructDOM(this.MainContainer, ()=>
            {
                var group = this.theWindow.GetDefaultBindingGroup();
                var accessor = new Data.JSDataAccessor<string>(this.theWindow, {
                    URL: "Title",
                    Params: new Collections.List<string>(0)
                });
                this.theWindow.AddBinding("Top", new Collections.List<string>(0), accessor, group, Data.BindingDirections.U2S, <any>new CSSNumberAdapter());
                
                this.theWindow.Show();
            });
        }
    }

    class CSSNumberAdapter extends Data.DataAdapter<string, UI.CSSNumber>
    {
        public I2O(input: string): UI.CSSNumber
        {
            return UI.CSSNumber.FromString(input);
        }
        public O2I(output: UI.CSSNumber): string
        {
            return output.toString();
        }
    }
}
/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Label.ts" />
/// <reference path="../../Interfaces/Windows/IStaticPageWindow.d.ts" />
/// <reference path="PageWindow.ts" />

module TSUI.UI
{
    export class StaticPageWindow extends PageWindow implements IStaticPageWindow
    {
        ContentLabel: ILabel;

        constructor(url: string)
        {
            super();

            this._rootElement.addClass("StaticPageWindow");

            this.ContentLabel = new Label();
            this.ContentLabel.AddClass("ContentLabel");
            this.ContentPanel.Children.Add(this.ContentLabel);

            this.LoadContent(url);
        }

        LoadContent(url: string, data?: any): void
        {
            var _this = this;
            $.get(url, data, function (data)
            {
                _this.ContentLabel.HTML(data);
            }).fail(function ()
            {
                _this.ContentLabel.HTML("<i>Failed to load content.</i>");
            });
        }
    }
}
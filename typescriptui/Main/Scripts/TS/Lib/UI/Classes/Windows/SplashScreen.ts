/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 10 00:13 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 10/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../ProgressSpinner.ts" />
/// <reference path="../../Interfaces/Windows/ISplashScreen.d.ts" />
/// <reference path="Window.ts" />

module TSUI.UI
{
    export class DesktopSplashScreen extends Window implements ISplashScreen
    {
        NameLabel: ILabel;

        constructor(title: string = "")
        {
            super();
            
            this.OptimiseConstructForGraphics = false;

            this.AddClass("SplashScreen");

            this.MainTitleBar.Visible(false);
            this.CloseButton.Visible(false);
            this.ResizeEnabled(false);
            this.DragEnabled(false);

            this.Width(new CSSNumber(500));
            this.Height(new CSSNumber(250));

            this.NameLabel = new Label();
            this.NameLabel.AddClass("NameLabel");
            this.Children.Add(this.NameLabel);

            var TheProgressSpinner = new ProgressSpinner();
            TheProgressSpinner.AnimationDuration(2000);
            this.Children.Add(TheProgressSpinner);

            this.Title(title);
        }
        
        ConstructDOM(parent: JQuery): void
        {
            super.ConstructDOM(parent);
            
            var topPx = ($(window).height() - this.Height().Value) / 2;
            this.Top(new UI.CSSNumber((topPx / $(window).height()) * 100, "%"));
            var leftPx = ($(window).width() - this.Width().Value) / 2;
            this.Left(new UI.CSSNumber((leftPx / $(window).width()) * 100, "%"));
        }

        Title(value: string = null): string
        {
            return this.NameLabel.Text(value);
        }
    }
    export class MobileSplashScreen extends DesktopSplashScreen implements ISplashScreen
    {
        constructor(title?: string)
        {
            super(title);

            this.AddClass("Mobile");

            this.Top(new UI.CSSNumber(0));
            this.Left(new UI.CSSNumber(0));
        }

        ConstructDOM(parent: JQuery): void
        {
            super.ConstructDOM(parent);
            
            var width = Math.min($(window).width(), 280);
            this.Width(new UI.CSSNumber(width));
            this.Left(new UI.CSSNumber(($(window).width() - width) / 2));
            this.Height(new UI.CSSNumber($(window).height()));
            this.Top(new UI.CSSNumber(0));
        }
    }
}
/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../../Animation/AppWindowAnimator.ts" />
/// <reference path="../../../Animation/PageWindowAnimator.ts" />
/// <reference path="../../Interfaces/Windows/IPageWindow.d.ts" />
/// <reference path="Window.ts" />

module TSUI.UI
{
    export class PageWindow extends Window implements IPageWindow
    {
        constructor()
        {
            super();

            this.DestroyDOMOnClose = false;

            this._rootElement.addClass("PageWindow");

            this.MainTitleBar.Visible(false);
            this.MainResizeGrip.Visible(false);
            this.DragEnabled(false);
            this.ResizeEnabled(false);

            this.ContentPanel.Top(new CSSNumber(24));
            this.ContentPanel.Bottom(new CSSNumber(0));
            this.ContentPanel.Left(new CSSNumber(0));
            this.ContentPanel.Width(new CSSNumber(100, "%"));
            this.ContentPanel.Height(new CSSNumber(100, "%", true));
            
            var bodyElem = $("body");
            if (bodyElem.find(".PageWindow_DisableOverlay").length === 0)
            {
                bodyElem.append($("<div class=\"PageWindow_DisableOverlay\">"));
            }

            this.Visible(false);
        }

        PositionCenterWindow(): void
        {
            var height = $(window).height();
            var width = $(window).width();

            var visiblity = this.GetStyle("visibility");
            var display = this.GetStyle("display");
            var zIndex = this.GetStyle("z-index");

            this.ApplyStyle("z-index", "-1");
            this.ApplyStyle("visibility", "hidden");
            this.ApplyStyle("display", "block");

            this.Width(new CSSNumber((Math.max(width / 2, Math.min(400, width - 50)) / width) * 100, "%"));
            this.Height(new CSSNumber(Math.max(height / 2, Math.min(500, height - 50)) + 29));

            this.Top(new CSSNumber((((height - this.ActualHeight()) / 2) / height) * 100, "%"));
            this.Left(new CSSNumber((((width - this.ActualWidth()) / 2) / width) * 100, "%"));
            
            this.ApplyStyle("z-index", zIndex);
            this.ApplyStyle("visibility", visiblity);
            this.ApplyStyle("display", display);
        }
        
        Show(callback: ()=>void = null, animator: Animation.IAnimator = new Animation.PageWindowAnimator()): void
        {
            if (this.ContentPanel.Children.Count() > 0)
            {
                super.Show(callback, animator);
            }
            else
            {
                if (callback)
                {
                    callback();
                }
            }
        }
        Hide(callback: ()=>void = null, animator: Animation.IAnimator = new Animation.PageWindowAnimator()): void
        {
            super.Hide(callback, animator);
        }
    

        Height(value: CSSNumber = null): CSSNumber
        {
            var result = super.Height(value);
            if (value !== null)
            {
                this.ContentPanel.Height(new CSSNumber(100, "%", true));
            }
            return result;
        }
    }
}
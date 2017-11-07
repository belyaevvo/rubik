/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../../Animation/SelectionWindowAnimator.ts" />
/// <reference path="../../Interfaces/Windows/ISelectionWindow.d.ts" />
/// <reference path="../ListBox.ts" />
/// <reference path="Window.ts" />

module TSUI.UI
{
    export class SelectionWindow<T> extends Window implements ISelectionWindow<T>
    {
        ContentPanel: IListBox<T>;

        constructor()
        {
            super();

            this.DestroyDOMOnClose = false;

            this._rootElement.addClass("SelectionWindow");

            this.MainTitleBar.Visible(false);
            this.MainResizeGrip.Visible(false);
            this.DragEnabled(false);
            this.ResizeEnabled(false);

            this.Children.Remove(this.ContentPanel);
            this.ContentPanel = new ListBox<T>();
            this.ContentPanel.Top(new CSSNumber(24));
            this.ContentPanel.Bottom(new CSSNumber(0));
            this.ContentPanel.Left(new CSSNumber(0));
            this.ContentPanel.Width(new CSSNumber(100, "%"));
            this.ContentPanel.Height(new CSSNumber(100, "%", true));
            this.Children.Add(this.ContentPanel);
            
            var bodyElem = $("body");
            if (bodyElem.find(".SelectionWindow_DisableOverlay").length === 0)
            {
                bodyElem.append($("<div class=\"SelectionWindow_DisableOverlay\">"));
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

            var itemsHeight = this.ContentPanel.Items.Count() > 0 ? this.ContentPanel.Items.Count() * this.ContentPanel.Children.ElementAt(0).ActualHeight() : 0;
            
            this.Width(new CSSNumber((Math.max(Math.min(width / 2, 300), 200) / width) * 100, "%"));
            this.Height(new CSSNumber(Math.max(Math.min(itemsHeight, 300), 100) + 29));

            this.Top(new CSSNumber((((height - this.ActualHeight()) / 2) / height) * 100, "%"));
            this.Left(new CSSNumber((((width - this.ActualWidth()) / 2) / width) * 100, "%"));
            
            this.ApplyStyle("z-index", zIndex);
            this.ApplyStyle("visibility", visiblity);
            this.ApplyStyle("display", display);
        }
        
        Show(callback: ()=>void = null, animator: Animation.IAnimator = new Animation.SelectionWindowAnimator()): void
        {
            if (this.ContentPanel.Children.Count() > 0)
            {
                var _this = this;
                super.Show(function ()
                {
                    _this.ContentPanel.Children.ElementAt(_this.ContentPanel.SelectedIndex() > -1 ? _this.ContentPanel.SelectedIndex() : 0).Focus();

                    if (callback)
                    {
                        callback();
                    }
                }, animator);
            }
            else
            {
                if (callback)
                {
                    callback();
                }
            }
        }
        Hide(callback: ()=>void = null, animator: Animation.IAnimator = new Animation.SelectionWindowAnimator()): void
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
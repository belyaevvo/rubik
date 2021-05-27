/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IImageBox.d.ts" />
/// <reference path="Control.ts" />

module Rubik.UI
{
    export class ImageBox extends Control implements IImageBox
    {
        _ImageElement: JQuery;

        constructor(src: string = "", alt: string = "")
        {
            super();

            this._rootElement.addClass("ImageBox");

            this._ImageElement = $("<img>");

            this.Source(src);
            if (alt !== "")
            {
                this.AlternateText(alt);
            }

            this.OnClick.Attach(new Events.ClickEventHandler(this._This_OnClick_NavigateHandler, this));
        }
        
        _This_OnClick_NavigateHandler(eventArgs: Events.ClickEventArgs)
        {
            if (this.ActuallyEnabled())
            {
                if (this._NavigateToOnClick !== "")
                {
                    OpenInNewWindow(this._NavigateToOnClick);
                }
            }
        }

        ConstructDOM(parent: JQuery, onComplete:()=>void = null): void
        {
            var self = this;
            super.ConstructDOM(parent, function ()
            {
                self._rootElement.append(self._ImageElement);
                if (onComplete)
                {
                    onComplete();
                }
            });
        }
        DestroyDOM(): void
        {
            this._ImageElement.remove();

            super.DestroyDOM();
        }

        AlternateText(value: string = null): string
        {
            if (value !== null)
            {
                this._ImageElement.attr("alt", value);
            }
            return this._ImageElement.attr("alt");
        }
        Source(value: string = null): string
        {
            if (value !== null)
            {
                this._ImageElement.attr("src", value);
                if (value === "")
                {
                    this._rootElement.addClass("NoSource");
                }
                else
                {
                    this._rootElement.removeClass("NoSource");
                }
            }
            return this._ImageElement.attr("src");
        }
        _NavigateToOnClick: string = "";
        _Focusable_AddedByLink: boolean = false;
        NavigateToOnClick(value: string = null): string
        {
            if (value !== null)
            {
                this._NavigateToOnClick = value;
                if (value !== "")
                {
                    this.AddClass("Clickable");
                    if (!this._Focusable_AddedByLink)
                    {
                        this.Focusable(true);
                        this._Focusable_AddedByLink = true;
                    }
                }
                else
                {
                    this.RemoveClass("Clickable");
                    if (this._Focusable_AddedByLink)
                    {
                        this.Focusable(false);
                    }
                }
            }
            return this._NavigateToOnClick;
        }
        
        Focusable(value: boolean = null): boolean
        {
            var result = super.Focusable(value);
            if (value !== null)
            {
                this._Focusable_AddedByLink = false;
            }
            return result;
        }

        InvokeDefaultAction(): void
        {
            this._ImageElement.click();
        }
    }
}
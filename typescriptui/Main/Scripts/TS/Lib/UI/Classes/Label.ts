/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Interfaces/ILabel.d.ts" />
/// <reference path="Control.ts" />

module TSUI.UI
{
    export class Label extends Control implements ILabel
    {
        constructor(text: string = null)
        {
            super();

            this._rootElement.addClass("Label");
            
            this.Text(text || " ");

            this.OnClick.Attach(new Events.ClickEventHandler(this._This_Clicked, this));
        }
        
        _This_Clicked(eventArgs: Events.ClickEventArgs)
        {
            if (this.Focusable())
            {
                this.Focus();
            }
        }

        Text(value: string = null): string
        {
            if (value !== null)
            {
                value = value.replace("\n", "<br />");
                this._rootElement.html(value);
            }
            return this._rootElement.text();
        }
        HTML(value: string = null): string
        {
            if (value !== null)
            {
                this._rootElement.html(value);
            }
            return this._rootElement.html();
        }
        _Focusable_AddedByLink: boolean = false;
        Link(value: string = null): string
        {
            if (value !== null)
            {
                if (value === "")
                {
                    //Removes any inner <a> tags
                    this.Text(this.Text());

                    if (this._Focusable && this._Focusable_AddedByLink)
                    {
                        this.Focusable(false);
                    }
                }
                else
                {
                    var text = this.Text();
                    var newHTML = "<a href=\"" + value + "\" target=\"_blank\">" + text + "</a>";
                    this.HTML(newHTML);

                    if (!this._Focusable)
                    {
                        this.Focusable(true);
                        this._Focusable_AddedByLink = true;
                    }
                }
            }
            var elem = this._rootElement.find("a");
            var retVal = null;
            if (elem.length > 0)
            {
                retVal = elem.first().attr("href");
            }
            return retVal;
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
            var link = this.Link();
            if (link !== null)
            {
                OpenInNewWindow(link);
            }
            else
            {
                this._rootElement.click();
            }
        }
    }
}
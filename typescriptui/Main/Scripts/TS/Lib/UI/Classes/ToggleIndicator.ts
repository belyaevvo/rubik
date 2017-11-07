/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Interfaces/IToggleIndicator.d.ts" />
/// <reference path="Label.ts" />

module TSUI.UI
{
    export class ToggleIndicatorLabel extends Label implements IToggleIndicator
    {
        constructor(public _OffVal: string = "<", public _OnVal: string = "<")
        {
            super();

            this._rootElement.addClass("ToggleIndicatorLabel");

            this.Focusable(true);
        }

        SetIndicatorToOn(): void
        {
            this.RemoveClass("Off");
            this.AddClass("On");
            this.Text(this._OnVal);
        }
        SetIndicatorToOff(): void
        {
            this.RemoveClass("On");
            this.AddClass("Off");
            this.Text(this._OffVal);
        }
        IsOn(): boolean
        {
            return this.HasClass("On");
        }
        InvokeDefaultAction(): void
        {
            this._rootElement.click();
        }
    }
    export class ToggleIndicatorBox extends Control implements IToggleIndicator
    {
        _InnerDivElement: JQuery;

        constructor()
        {
            super();

            this._rootElement.addClass("ToggleIndicatorBox");

            this._InnerDivElement = $("<div>");
            
            this.Focusable(true);
        }

        ConstructDOM(parent: JQuery, onComplete:()=>void = null): void
        {
            var _this = this;
            super.ConstructDOM(parent, function ()
            {
                _this._rootElement.append(_this._InnerDivElement);

                if (onComplete)
                {
                    onComplete();
                }
            });
        }
        DestroyDOM(): void
        {
            this._InnerDivElement.remove();

            super.DestroyDOM();
        }
        
        SetIndicatorToOn(): void
        {
            this.RemoveClass("Off");
            this.AddClass("On");
        }
        SetIndicatorToOff(): void
        {
            this.RemoveClass("On");
            this.AddClass("Off");
        }
        IsOn(): boolean
        {
            return this.HasClass("On");
        }

        InvokeDefaultAction(): void
        {
            this._rootElement.click();
        }
    }
}
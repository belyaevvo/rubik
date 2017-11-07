/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Animation/IAnimator.d.ts" />
/// <reference path="../../Animation/FadeAnimator.ts" />
/// <reference path="../Interfaces/ITab.d.ts" />
/// <reference path="Panel.ts" />
/// <reference path="Control.ts" />

module TSUI.UI
{
    export class Tab extends Panel implements ITab
    {
        OnNameChange: Events.NameChangeEvent = new Events.NameChangeEvent();

        constructor()
        {
            super();

            this._rootElement.addClass("Tab");

            this.ApplyStyle("display", "none");
        }

        _Name: string = "A Tab";
        Name(value: string = null): string
        {
            if (value !== null)
            {
                var oldVal = this._Name;
                this._Name = value;
                if (oldVal !== value)
                {
                    this.OnNameChange.Invoke(new Events.NameChangeEventArgs(this, oldVal));
                }
            }
            return this._Name;
        }

        Hide(callback?: () => void, animator: Animation.IAnimator = new Animation.FadeAnimator())
        {
            var _this = this;
            super.Hide(function ()
            {
                _this.AnimationElement().css({
                    display: "none"
                });
                if (callback)
                {
                    callback();
                }
            }, animator);
        }
    }
}
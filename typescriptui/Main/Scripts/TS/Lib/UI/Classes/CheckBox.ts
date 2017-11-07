/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="Label.ts" />
/// <reference path="ToggleIndicator.ts" />
/// <reference path="../Interfaces/ICheckBox.d.ts" />
/// <reference path="../Enums/TextAlignments.ts" />
/// <reference path="Control.ts" />

module TSUI.UI
{
    export class CheckBox extends Control implements ICheckBox
    {
        OnCheckedChange: Events.CheckedChangeEvent;

        TextLabel: ILabel;
        MainIndicator: IToggleIndicator;

        constructor(checked: boolean = false)
        {
            super();
            
            this._rootElement.addClass("CheckBox");

            this.OnCheckedChange = new Events.CheckedChangeEvent();

            this.Focusable(true);

            this.MainIndicator = new ToggleIndicatorBox();
            this.MainIndicator.RelativeLayoutOn();
            this.MainIndicator.Focusable(false);
            this.Children.Add(this.MainIndicator);

            this.TextLabel = new Label();
            this.TextLabel.RelativeLayoutOn();
            this.Children.Add(this.TextLabel);

            this.OnClick.Attach(new Events.ClickEventHandler(this._This_OnClick, this));
            
            this.Checked(checked);
        }
        
        ConstructDOM(parent: JQuery, onComplete:()=>void = null): void
        {
            var _this = this;
            super.ConstructDOM(parent, function ()
            {
                _this.TextAlign(_this.TextAlign());
                if (onComplete)
                {
                    onComplete();
                }
            });
        }

        _This_OnClick(eventArgs: Events.ClickEventArgs)
        {
            if (this.ActuallyEnabled())
            {
                this.Checked(!this.Checked());
            }
        }

        _TextAlign: TextAlignments;
        TextAlign(value: TextAlignments = null): TextAlignments
        {
            if (value !== null)
            {
                var oldVal = this._TextAlign;
                this._TextAlign = value;
                if (this.DOMConstructed)
                {
                    this.MainIndicator.DestroyDOM();
                    this.TextLabel.DestroyDOM();

                    if (this._TextAlign === TextAlignments.Left)
                    {
                        this.TextLabel.ConstructDOM(this._rootElement);
                        this.MainIndicator.ConstructDOM(this._rootElement);
                        this.AddClass("LeftAlign");
                    }
                    else if (this._TextAlign === TextAlignments.Right)
                    {
                        this.MainIndicator.ConstructDOM(this._rootElement);
                        this.TextLabel.ConstructDOM(this._rootElement);
                        this.AddClass("RightAlign");
                    }
                }
            }
            return this._TextAlign;
        }

        Text(value: string = null): string
        {
            return this.TextLabel.Text(value);
        }
        Checked(value: boolean = null): boolean
        {
            if (value !== null)
            {
                if (value)
                {
                    this.MainIndicator.SetIndicatorToOn();
                }
                else
                {
                    this.MainIndicator.SetIndicatorToOff();
                }
                this.OnCheckedChange.Invoke(new Events.CheckedChangeEventArgs(this));
            }
            return this.MainIndicator.IsOn();
        }

        InvokeDefaultAction(): void
        {
            this._rootElement.click();
        }
    }
}
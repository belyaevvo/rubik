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
/// <reference path="../Interfaces/IRadioButton.d.ts" />
/// <reference path="../Enums/TextAlignments.ts" />
/// <reference path="Control.ts" />

module TSUI.UI
{
    export var RadioButtonGroups = [];

    export class RadioButton extends Control implements IRadioButton
    {
        OnCheckedChange: Events.CheckedChangeEvent;

        TextLabel: ILabel;
        MainIndicator: IToggleIndicator;

        constructor(checked: boolean = false)
        {
            super();
            
            this._rootElement.addClass("RadioButton");

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
                if (!this.Group())
                {
                    this.Checked(!this.Checked());
                }
                else
                {
                    this.Checked(true);
                }
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
                var oldVal = this.Checked();

                if (value)
                {
                    this.MainIndicator.SetIndicatorToOn();

                    if (this._Group !== "")
                    {
                        for (var i = 0; i < RadioButtonGroups[this._Group].length; i++)
                        {
                            var el = RadioButtonGroups[this._Group][i];
                            if (el != this)
                            {
                                el.Checked(false);
                            }
                        }
                    }
                }
                else
                {
                    this.MainIndicator.SetIndicatorToOff();
                }
                if (value !== oldVal)
                {
                    this.OnCheckedChange.Invoke(new Events.CheckedChangeEventArgs(this));
                }
            }
            return this.MainIndicator.IsOn();
        }

        InvokeDefaultAction(): void
        {
            this._rootElement.click();
        }

        _Group: string = "";
        Group(value: string = null): string
        {
            if (value !== null)
            {
                if (this._Group !== "")
                {
                    RadioButtonGroups[this._Group].splice(RadioButtonGroups[this._Group].indexOf(this), 1);
                }
                this._Group = value;
                
                if (this._Group !== "")
                {
                    if (RadioButtonGroups[this._Group] === undefined)
                    {
                        RadioButtonGroups[this._Group] = [];
                    }
                    RadioButtonGroups[this._Group].push(this);

                    this.Checked(this.Checked());
                }
            }
            return this._Group;
        }
    }
}
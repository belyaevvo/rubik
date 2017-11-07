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
/// <reference path="Panel.ts" />
/// <reference path="../Interfaces/IToggleButton.d.ts" />
/// <reference path="Control.ts" />

module TSUI.UI
{
    export class ToggleButton extends Control implements IToggleButton
    {
        OnCheckedChange: Events.CheckedChangeEvent;

        TogglePanel: IPanel;
        TogglePanelInner: IPanel;
        GripBox: IPanel;
        WhitePanel: IPanel;
        BluePanel: IPanel;
        TextLabel: ILabel;

        constructor(checked: boolean = false)
        {
            super();
            
            this._rootElement.addClass("ToggleButton");

            this.OnCheckedChange = new Events.CheckedChangeEvent();

            this.Focusable(true);
            
            this.TogglePanel = new Panel();
            this.TogglePanel.AddClass("TogglePanel");
            this.Children.Add(this.TogglePanel);
            this.TogglePanelInner = new Panel();
            this.TogglePanelInner.AddClass("TogglePanelInner");
            this.TogglePanel.Children.Add(this.TogglePanelInner);

            this.WhitePanel = new Panel();
            this.WhitePanel.AddClass("White");
            this.TogglePanelInner.Children.Add(this.WhitePanel);
            this.BluePanel = new Panel();
            this.BluePanel.AddClass("Blue");
            this.TogglePanelInner.Children.Add(this.BluePanel);
            this.GripBox = new Panel();
            this.GripBox.AddClass("Grip");
            this.Children.Add(this.GripBox);
            
            this.TextLabel = new Label("Off");
            this.Children.Add(this.TextLabel);

            this.OnClick.Attach(new Events.ClickEventHandler(this._This_OnClick, this));
            
            this.Checked(checked);
        }
        
        _This_OnClick(eventArgs: Events.ClickEventArgs)
        {
            if (this.ActuallyEnabled())
            {
                this.Checked(!this.Checked());
            }
        }

        Checked(value: boolean = null): boolean
        {
            if (value !== null)
            {
                var oldVal = this.Checked();

                if (value)
                {
                    this._rootElement.addClass("On");
                    this.Text("On");
                }
                else
                {
                    this._rootElement.removeClass("On");
                    this.Text("Off");
                }
                if (value !== oldVal)
                {
                    this.OnCheckedChange.Invoke(new Events.CheckedChangeEventArgs(this));
                }
            }
            return this._rootElement.hasClass("On");
        }
        
        Text(value: string = null): string
        {
            return this.TextLabel.Text(value);
        }

        InvokeDefaultAction(): void
        {
            this._rootElement.click();
        }

    }
}
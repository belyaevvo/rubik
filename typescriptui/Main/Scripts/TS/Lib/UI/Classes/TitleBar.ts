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
/// <reference path="../Interfaces/ITitleBar.d.ts" />
/// <reference path="Control.ts" />

module TSUI.UI
{
    export class TitleBar extends Control implements ITitleBar
    {
        _TitleLabel: ILabel;

        _Draggable: boolean;

        constructor()
        {
            super();

            this._rootElement.addClass("TitleBar");

            this._TitleLabel = new Label(); 
            this._TitleLabel.AddClass("Title");
            this.Children.Add(this._TitleLabel);
        }
        
        WindowMinSuitableWidth(): number
        {
            //+50 for close button
            return this._TitleLabel.ActualWidth() + 50;
        }

        Title(value: string = null): string
        {
            if (value !== null)
            {
                this._TitleLabel.Text(value);
            }
            return this._TitleLabel.Text();
        }
        
        Draggable(value: boolean = null): boolean
        {
            if (value !== null)
            {
                this._Draggable = value;

                if (this._Draggable)
                {
                    this._rootElement.removeClass("Undraggable");
                }
                else
                {
                    this._rootElement.addClass("Undraggable");
                }
            }
            return this._Draggable;
        }
    }
}
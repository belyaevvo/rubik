/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Interfaces/Windows/IMessageBox.d.ts" />
/// <reference path="../Label.ts" />
/// <reference path="Window.ts" />

module TSUI.UI
{
    export class MessageBox extends Window implements IMessageBox
    {
        TextLabel: ILabel;
        
        constructor(title: string, text: string)
        {
            super();

            this._rootElement.addClass("MessageBox");

            this.ContentPanel.ApplyStyles({
                padding: "15px"
            });

            this.TextLabel = new Label();
            this.TextLabel.ApplyStyles({
                position: "relative",
            });
            this.ContentPanel.Children.Add(this.TextLabel);

            this.EnableSelection();
            this.ContentPanel.EnableSelection();
            this.TextLabel.EnableSelection();
            
            this.Title(title);
            this.Text(text);
        }

        ConstructDOM(parent: JQuery, onComplete:()=>void = null): void
        {
            var _this = this;
            super.ConstructDOM(parent, function ()
            {
                _this.Width(new CSSNumber($(window).width()));
                _this.Height(new CSSNumber($(window).height()));

                _this.ContentPanel.Width(new CSSNumber(0, "", true));
                _this.ContentPanel.Height(new CSSNumber(0, "", true));
                _this.ContentPanel.Right(new CSSNumber(0, "", true));
                _this.ContentPanel.Bottom(new CSSNumber(0, "", true));

                _this.Width(new CSSNumber(Math.max(_this.ContentPanel.ActualWidth() + 10, _this.MainTitleBar.WindowMinSuitableWidth() + 10)));
                _this.Height(new CSSNumber(_this.TextLabel.ActualHeight() + _this.MainTitleBar.ActualHeight() + 35));

                _this.ContentPanel.MaxWidth(new CSSNumber(100, "%"));
                _this.TextLabel.Width(new CSSNumber(100, "%"));
                _this.TextLabel.Height(new CSSNumber(0, "", true));

                if (onComplete)
                {
                    onComplete();
                }
            });
        }

        PositionCenterParent(parent: IControl): void
        {
            this.Top(new CSSNumber((((parent.ActualHeight() - this.ActualHeight()) / 2) / parent.ActualHeight()) * 100, "%"));
            this.Left(new CSSNumber((((parent.ActualWidth() - this.ActualWidth()) / 2) / parent.ActualWidth()) * 100, "%"));
        }

        Text(value?: string): string
        {
            return this.TextLabel.Text(value);
        }

        Width(value: CSSNumber = null): CSSNumber
        {
            var result = super.Width(value);
            if (value !== null)
            {
                //Margin around the text
                this.ContentPanel.Width(new CSSNumber(this.ActualWidth() - 30));
            }
            return result;
        }

    }
}
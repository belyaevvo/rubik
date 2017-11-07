/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="TextBox.ts" />
/// <reference path="../Interfaces/INumericTextBox.d.ts" />
/// <reference path="Control.ts" />

module TSUI.UI
{
    export class NumericTextBox extends TextBox implements INumericTextBox
    {
        OnValueChange: Events.ValueChangeEvent;

        _NumericPrevSeenValue: number = null;

        constructor()
        {
            super();

            this._rootElement.addClass("Numeric");
            
            this.OnValueChange = new Events.ValueChangeEvent();
            
            this._TextInput.attr("type", "numeric");
            this._TextInput.numeric({
                decimal: ".",
                negative: true,
                decimalPlaces: 2
            });

            this.OnTextChange.Attach(new Events.TextChangeEventHandler(this._This_OnTextChange_ValueChange, this));
        }

        _This_OnTextChange_ValueChange(eventArgs: Events.TextChangeEventArgs)
        {
            var value = this.Value();
            if (this._NumericPrevSeenValue !== value)
            {
                this._NumericPrevSeenValue = value;
                this.OnValueChange.Invoke(new Events.ValueChangeEventArgs(this));
            }
        }

        AllowNegatives(value: boolean = null): boolean
        {
            return this._TextInput.numeric_AllowNegatives(value);
        }
        AllowDecimals(value: boolean = null): boolean
        {
            return this._TextInput.numeric_DecimalSeparator(value) !== "";
        }

        DecimalPlaces(value: number = null): number
        {
            return this._TextInput.numeric_DecimalPlaces(value);
        }
        DecimalSeparator(value: string = null): string
        {
            return this._TextInput.numeric_DecimalSeparator(value);
        }

        Min(value: number = null): number
        {
            return this._TextInput.numeric_Min(value);
        }
        Max(value: number = null): number
        {
            return this._TextInput.numeric_Max(value);
        }
        
        Value(value: number = null): number
        {
            if (value !== null)
            {
                var dp = this.DecimalPlaces();
                if (dp > -1)
                {
                    value = parseFloat(value.toFixed(dp));
                }
                var min = this.Min();
                if(min !== null)
                {
                    value = Math.max(value, min);
                }
                var max = this.Max();
                if(max !== null)
                {
                    value = Math.min(value, max);
                }
                this._TextInput.val(dp > -1 ? value.toFixed(dp) : value.toString());

                if (this._NumericPrevSeenValue !== value)
                {
                    this._NumericPrevSeenValue = value;
                    this.OnValueChange.Invoke(new Events.ValueChangeEventArgs(this));
                }
            }
            var result = parseFloat(this._TextInput.val());
            if (isNaN(result))
            {
                result = 0;
            }
            return result;
        }
    }
}
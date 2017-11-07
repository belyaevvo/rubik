/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="NumericTextBox.ts" />
/// <reference path="Button.ts" />
/// <reference path="../Interfaces/INumericUpDown.d.ts" />
/// <reference path="Control.ts" />

module TSUI.UI
{
    export class NumericUpDown extends Control implements INumericUpDown
    {
        OnValueChange: Events.ValueChangeEvent;

        _UnderlyingTextBox: NumericTextBox;
        _UpButton: IButton;
        _DownButton: IButton;

        _PrevSeenValue: number = null;
        
        constructor()
        {
            super();

            this._rootElement.addClass("NumericUpDown");

            this._UnderlyingTextBox = new NumericTextBox();
            this._UnderlyingTextBox.OnFocus.Attach(new Events.FocusEventHandler(this._UnderlyingControl_OnFocus, this));
            this._UnderlyingTextBox.OnBlur.Attach(new Events.BlurEventHandler(this._UnderlyingControl_OnBlur, this));
            this.Children.Add(this._UnderlyingTextBox);

            this._UpButton = new Button();
            this._UpButton.AddClass("Up");
            this._UpButton.Text("^");
            this._UpButton.OnClick.Attach(new Events.ClickEventHandler(this._UpButton_OnClick, this));
            this._UpButton.OnFocus.Attach(new Events.FocusEventHandler(this._UnderlyingControl_OnFocus, this));
            this._UpButton.OnBlur.Attach(new Events.BlurEventHandler(this._UnderlyingControl_OnBlur, this));
            this.Children.Add(this._UpButton);
            
            this._DownButton = new Button();
            this._DownButton.AddClass("Down");
            this._DownButton.Text("^");
            this._DownButton.OnClick.Attach(new Events.ClickEventHandler(this._DownButton_OnClick, this));
            this._DownButton.OnFocus.Attach(new Events.FocusEventHandler(this._UnderlyingControl_OnFocus, this));
            this._DownButton.OnBlur.Attach(new Events.BlurEventHandler(this._UnderlyingControl_OnBlur, this));
            this.Children.Add(this._DownButton);

            this.OnKeyDown.Attach(new Events.KeyDownEventHandler(this._This_OnKeyDown_IncrementHandler, this));
            this.OnKeyUp.Attach(new Events.KeyUpEventHandler(this._This_OnKeyUp_IncrementHandler, this));
            
            this.OnValueChange = new Events.ValueChangeEvent();

            this.Focusable(true);
        }
        
        _UnderlyingControl_OnFocus(eventArgs: Events.FocusEventArgs)
        {
            this._OnFocus(eventArgs.jqEvent);
        }
        _UnderlyingControl_OnBlur(eventArgs: Events.BlurEventArgs)
        {
            this._OnBlur(eventArgs.jqEvent);
        }

        _This_OnKeyDown_IncrementHandler(eventArgs: Events.KeyDownEventArgs)
        {
            if (this.ActuallyEnabled())
            {
                if (eventArgs.jqEvent.keyCode === 38)
                {
                    this.Value(this.Value() + this._Increment);
                    StopEvent(eventArgs.jqEvent);
                }
                else if (eventArgs.jqEvent.keyCode === 40)
                {
                    this.Value(this.Value() - this._Increment);
                    StopEvent(eventArgs.jqEvent);
                }
            }
        }
        _This_OnKeyUp_IncrementHandler(eventArgs: Events.KeyUpEventArgs)
        {
            var result = this.Value();
            if (this._PrevSeenValue !== result)
            {
                this._PrevSeenValue = result;
                this.OnValueChange.Invoke(new Events.ValueChangeEventArgs(this));
            }
        }

        _UpButton_OnClick(eventArgs: Events.ClickEventArgs)
        {
            this.Value(this.Value() + this._Increment);
        }
        _DownButton_OnClick(eventArgs: Events.ClickEventArgs)
        {
            this.Value(this.Value() - this._Increment);
        }

        AllowNegatives(value?: boolean): boolean
        {
            return this._UnderlyingTextBox.AllowNegatives(value);
        }
        AllowDecimals(value?: boolean): boolean
        {
            return this._UnderlyingTextBox.AllowDecimals(value);
        }
        
        DecimalPlaces(value?: number): number
        {
            return this._UnderlyingTextBox.DecimalPlaces(value);
        }
        DecimalSeparator(value?: string): string
        {
            return this._UnderlyingTextBox.DecimalSeparator(value);
        }

        Min(value?: number): number
        {
            return this._UnderlyingTextBox.Min(value);
        }
        Max(value?: number): number
        {
            return this._UnderlyingTextBox.Max(value);
        }

        _Increment: number = 1;
        Increment(value: number = null): number
        {
            if (value !== null)
            {
                this._Increment = value;
            }
            return this._Increment;
        }

        Value(value: number = null): number
        {
            var result = this._UnderlyingTextBox.Value(value);
            if (value !== null)
            {
                if (this._PrevSeenValue !== result)
                {
                    this._PrevSeenValue = result;
                    this.OnValueChange.Invoke(new Events.ValueChangeEventArgs(this));
                }
            }
            return result;
        }

        _HandleFocusableSet(focusable: boolean)
        {
            this._rootElement.removeAttr("tabindex");
        }

        Focus(): void
        {
            this._UnderlyingTextBox.Focus();
        }
        Blur(): void
        {
            this._UnderlyingTextBox.Blur();
            this._UpButton.Blur();
            this._DownButton.Blur();
        }

    }
}
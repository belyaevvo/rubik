﻿/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IMultilineTextBox.d.ts" />
/// <reference path="TextBox.ts" />

module Rubik.UI
{
    export class MultilineTextBox extends Control implements IMultilineTextBox
    {
        _TextInput: JQuery;
        TextInput(): JQuery
        {
            return this._TextInput;
        }

        OnTextChange: Events.JQueryEvent;

        _PrevSeenValue: string = null;

        constructor()
        {
            super();

            this.AddClass("TextBox Multiline");

            this.OnTextChange = new Events.JQueryEvent();

            this._TextInput = $("<textarea tabindex=\"" + this._TabIndex.toString() + "\"/>");

            this.EnableSelection();
                       
            this.Focusable(true);

            this.OnClick.Attach(new Events.ClickEventHandler(this._This_OnClick_FocusBugFix, this));
        }
        
        //Layout bug fix : Can't focus input elemnts when they are inside absolute elements.
        //Noticed using: FireFox and Opera 
        //Example of issue: Focus not given on mouse click
        _This_OnClick_FocusBugFix(eventArgs: Events.ClickEventArgs)
        {
            if (this.ActuallyEnabled() && !this._TextInput.is(":focus"))
            {
                this._TextInput.focus();
            }
        }
        
        _HandleFocusableSet(focusable: boolean)
        {
            this._rootElement.removeAttr("tabindex");
            
            if (focusable && !this.HasClass("Disabled"))
            {
                this._TextInput.attr("tabindex", this._TabIndex.toString());

                if (this._TextInput.is(":focus") && !this.HasClass("Focused"))
                {
                    this.Focus();
                }
            }
            else
            {
                this._TextInput.removeAttr("tabindex");
            }
            
            if (!this._Focusable && this._TextInput.is(":focus"))
            {
                this.Blur();
            }
        }
        
        _TextInput_OnFocus(event: JQueryEventObject)
        {
            if (this.ActuallyEnabled())
            {
                this._OnFocus(event);
            }
            else
            {
                this._TextInput.blur();
            }
        }
        _TextInput_OnBlur(event: JQueryEventObject)
        {
            StopEvent(event);
            this._OnBlur(event);
        }
        _TextInput_OnChange(event: JQueryEventObject)
        {
            if (this.ActuallyEnabled())
            {
                if (this._PrevSeenValue !== this.Text())
                {
                    this._PrevSeenValue = this.Text();
                    this.OnTextChange.Invoke(new Events.TextChangeEventArgs(this, event));
                }                
            }
            else if(event.keyCode !== 9 && event.keyCode !== 116)
            {
                StopEvent(event);
            }
        }

        ConstructDOM(parent: JQuery, onComplete:()=>void = null): void
        {            
            super.ConstructDOM(parent, function ()
            {
                this._rootElement.append(this._TextInput);

                var __this = this;
                
                this._TextInput.on("focus", function (event: JQueryEventObject)
                {
                    __this._TextInput_OnFocus(event);
                });
                this._TextInput.on("blur", function (event: JQueryEventObject)
                {
                    __this._TextInput_OnBlur(event);
                });
                this._TextInput.on("change, keyup", function (event: JQueryEventObject)
                {
                    __this._TextInput_OnChange(event);
                });

                if (onComplete)
                {
                    onComplete();
                }
            }.bind(this));
        }
        DestroyDOM(): void
        {
            this._TextInput.remove();

            super.DestroyDOM();
        }

        Text(value: string = null): string
        {
            if (value !== null)
            {
                this._TextInput.val(value);
                
                if (this._PrevSeenValue !== value)
                {
                    this._PrevSeenValue = value;
                    this.OnTextChange.Invoke(new Events.JQueryEventArgs(this, null));
                }
            }
            return this._TextInput.val();
        }
        Masked(value: boolean = false): boolean
        {
            return false;
        }

        MaxLength(value: number = null): number
        {
            if (value !== null)
            {
                this._TextInput.attr("maxlength", value.toString());
            }
            var retVal = parseInt(this._TextInput.attr("maxlength"), 10);
            if (isNaN(retVal))
            {
                retVal = -1;
            }
            return retVal;
        }

        Enabled(value: boolean = null): boolean
        {
            if (value !== null)
            {
                if (!value && this.HasClass("Focused"))
                {
                    this.RemoveClass("Focused");
                    this._TextInput.blur();
                }
                else if(this._TextInput.is(":focus") && !this.HasClass("Focused"))
                {
                    this.AddClass("Focused");
                }
            }
            return super.Enabled(value);
        }

        Focus(): void
        {
            this._TextInput.focus();
        }
        Blur(): void
        {
            this._TextInput.blur();
        }
        
        _TabIndex: number = 0;
        TabIndex(value: number = null): number
        {
            if (value !== null)
            {
                this._TabIndex = value;
                if (value === -2)
                {
                    this._TextInput.removeAttr("tabindex");
                }
                else
                {
                    this._TextInput.attr("tabindex", value.toString());
                }
            }
            var retVal = parseInt(this._TextInput.attr("tabindex"), 10);
            if (isNaN(retVal))
            {
                retVal = -2;
            }
            return retVal;
        }
    }
}
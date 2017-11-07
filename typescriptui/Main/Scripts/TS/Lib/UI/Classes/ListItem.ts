/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Interfaces/IListItem.d.ts" />

module TSUI.UI
{
    export class ListItem<T> implements IListItem<T>
    {
        OnTextChange: Events.ListItem_TextChangeEvent<T> = new Events.ListItem_TextChangeEvent<T>();

        constructor(text: string, value: T)
        {
            this._Value = value;
            this._Text = text;
        }
        
        Index: number = -1;

        _Value: T = null;
        Value(value: T = null): T
        {
            if (value !== null)
            {
                this._Value = value;
            }
            return this._Value;
        }
        _Text: string = "";
        Text(value: string = null): string
        {
            if (value !== null)
            {
                this._Text = value;
                this.OnTextChange.Invoke(new Events.ListItem_TextChangeEventArgs(this));
            }
            return this._Text;
        }
    }
}
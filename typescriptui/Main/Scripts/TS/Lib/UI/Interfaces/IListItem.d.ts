/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.
 - 6/Sep/13 : Added inline documentation.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    /** Defines a ListItem control. 
        T: The type of the value of the list item.
    */
    export interface IListItem<T>
    {
        /** Fired when the text of the list item is changed. */
        OnTextChange: Events.ListItem_TextChangeEvent<T>;

        /** Gets ro sets the value of the list item. 
            @param The value to set to.
            @returns The actual value of the list item.
        */
        Value(value?: T): T;
        /** Gets or sets the text of the list item.
            @param value The value to set the list item's text to.
            @returns The actual text of the list item.
        */
        Text(value?: string): string;
        /** The index of the item in the list. Set internally, do not modify. */
        Index: number;
    }
}
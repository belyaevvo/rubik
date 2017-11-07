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
    /** Defines a ListBox control.
        T: The type of the value of the list items in the list.
    */
    export interface IListBox<T> extends IControl
    {
        /** Fired when the list box selection is changed. */
        OnSelectionMade: Events.SelectionMadeEvent;
        /** Fired when the list box selected index is changed. */
        OnSelectedIndexChange: Events.SelectedIndexChangeEvent;

        /** The items in the list. */
        Items: Collections.IList<IListItem<T>>;

        /** Gets or set the selected index of the list box.
            @param value The value to set the selected index to.
            @returns The actual selected index.
        */
        SelectedIndex(value?: number): number;
    }
}
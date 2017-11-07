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
    /** Defines a drop down box.
        T: The type of item in the list.
    */
    export interface IDropDownBox<T> extends IControl
    {
        /** Fired when the selected index changes. */
        OnSelectedIndexChange: Events.SelectedIndexChangeEvent;
        
        /** The items in the drop down box. */
        Items: Collections.IList<IListItem<T>>;

        /** Gets or sets the selected index in the list.
            @param value The value to set the selected index to.
            @returns The actual value of the selected index.
        */
        SelectedIndex(value?: number): number;
    }
}
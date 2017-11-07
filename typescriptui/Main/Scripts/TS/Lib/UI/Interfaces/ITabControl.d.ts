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

/// <reference path="ITab.d.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    /** Defines a TabControl. */
    export interface ITabControl extends IControl
    {
        /** Fired when the selected tab index changes. */
        OnSelectedIndexChange: Events.SelectedIndexChangeEvent;

        /** The tabs in the control. */
        Tabs: Collections.IList<ITab>;

        /** Gets or sets the selected tab index.
            @param value The value to set the selected index to.
            @returns The actual selected tab index.
        */
        SelectedIndex(value?: number): number;
    }
}
/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 11 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 11/Jul/13 : Initial version.
 - 6/Sep/13 : Added inline documentation.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IWindow.d.ts" />
/// <reference path="../ITile.d.ts" />

declare module TSUI.UI
{
    /** Defines a generic startup window. */
    export interface IStartupWindow extends UI.IWindow
    {
        /** The startup window rows (rows of tiles) for this startup window. */
        Rows: Collections.IList<IStartupWindow_Row>;
    }
    /** Defines a row of tiles in a startup window. */
    export interface IStartupWindow_Row extends IStackPanelRow
    {
        /** Whether the row is in a mobile mode it not. 
            If it is, the row automatically reduces the size of child tiles by one level. 
        */
        MobileMode: boolean;

        /** The groups of tiles in the row. */
        Groups: Collections.IList<IStartupWindow_Group>;
    }
    /** Defines a group of tiles in a startup window. */
    export interface IStartupWindow_Group extends IStackPanelRow
    {
        /** Whether the group is in a mobile mode it not. 
            If it is, the group automatically reduces the size of child tiles by one level.
        */
        MobileMode: boolean;

        /** The tiles in the group. */
        Tiles: Collections.IList<ITile>;
    }
}
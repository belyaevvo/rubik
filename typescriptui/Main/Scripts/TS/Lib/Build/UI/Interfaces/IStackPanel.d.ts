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

/// <reference path="IStackPanelRow.d.ts" />
/// <reference path="../Enums/StackPanelOrientations.d.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    /** Defines a StackPanel control. */
    export interface IStackPanel extends IControl
    {
        /** The stack panel rows in this stack panel (or columns depending on orientation). */
        Rows: Collections.IList<IStackPanelRow>;
        /** Gets or sets the Stack Panel orientation.
            @param value The value to set the orientation to.
            @returns The actual stack panel orientation.
        */
        Orientation(value?: StackPanelOrientations): StackPanelOrientations;
    }
}
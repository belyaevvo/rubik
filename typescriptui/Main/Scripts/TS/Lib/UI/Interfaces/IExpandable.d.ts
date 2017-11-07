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

/// <reference path="ITitleBar.d.ts" />
/// <reference path="IPanel.d.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    /** Defines an Expandable control. */
    export interface IExpandable extends IControl
    {
        /** The main title bar for the expandable. */
        MainTitleBar: ITitleBar;
        /** The content panel for the expandable which children should be added to. */
        ContentPanel: IPanel;
        /** The main toggle indicator for the expandable. */
        MainToggleIndiciator: IControl;

        /** Gets or sets the title of the expandable.
            @param value The value to set the title to.
            @returns The actual value of the expandable's title.
        */
        Title(value?: string): string;

        /** Whether the expandable is expanded or not.
            @returns Whether the expandable is expanded or not.
        */
        Expanded(): boolean;

        /** Toggles the expandable. If it is open it closes, if it is closed it opens. */
        Toggle(): void;
        /** Expands the expandable or does nothing if it is already open. */
        Expand(): void;
        /** Collapses the expandable or does nothing if it is already closed. */
        Collapse(): void;
    }
}
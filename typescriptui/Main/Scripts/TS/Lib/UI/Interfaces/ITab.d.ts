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

/// <reference path="IPanel.d.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    /** Defines a Tab page control. */
    export interface ITab extends IPanel
    {
        /** Fired when the name of the tab changes. */
        OnNameChange: Events.NameChangeEvent;

        /** Gets or sets the name of the tab displayed in the tab selector bar.
            @param value The value to set the name to.
            @returns The actual name of the tab.
        */
        Name(value?: string): string;
    }
}
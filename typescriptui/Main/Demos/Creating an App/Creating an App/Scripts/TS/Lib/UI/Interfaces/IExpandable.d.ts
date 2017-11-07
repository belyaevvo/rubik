/*
Copyright � Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="ITitleBar.d.ts" />
/// <reference path="IPanel.d.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    export interface IExpandable extends IControl
    {
        MainTitleBar: ITitleBar;
        ContentPanel: IPanel;
        MainToggleIndiciator: IControl;

        Title(value?: string): string;

        Expanded(): bool;

        Toggle(): void;
        Expand(): void;
        Collapse(): void;
    }
}
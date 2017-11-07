/*
Copyright � Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IResizeGrip.d.ts" />
/// <reference path="ITitleBar.d.ts" />
/// <reference path="IButton.d.ts" />
/// <reference path="IPanel.d.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    export interface IWindow extends IControl
    {
        ContentPanel: IPanel;
        CloseButton: IButton;

        DestroyDOMOnClose: bool;

        OnClose: Events.CloseEvent;

        Title(): string;
        Title(value: string): void;

        MainTitleBar: ITitleBar;
        MainResizeGrip: IResizeGrip;

        DragEnabled(value?: bool): bool;
        ResizeEnabled(value?: bool): bool;

    }
}
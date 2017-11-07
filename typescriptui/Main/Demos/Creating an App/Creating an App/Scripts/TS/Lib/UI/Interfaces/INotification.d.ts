/*
Copyright � Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IControl.d.ts" />
/// <reference path="IButton.d.ts" />

declare module TSUI.UI
{
    export interface INotification extends IControl
    {
        CloseButton: IButton;

        OnClose: Events.CloseEvent;

        Text(value?: string): string;

        ShowFor(seconds: number, callback?: () => void, animator?: Animation.IAnimator): void;
        
        _Restack(): void;
    }
}
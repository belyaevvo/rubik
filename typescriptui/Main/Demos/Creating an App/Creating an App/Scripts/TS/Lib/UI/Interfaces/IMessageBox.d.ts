﻿/*
Copyright � Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IWindow.d.ts" />

declare module TSUI.UI
{
    export interface IMessageBox extends IWindow
    {
        Text(value?: string): string;

        PositionCenterParent(parent: IControl): void;
    }
}
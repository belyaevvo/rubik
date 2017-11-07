/*
Copyright � Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Enums/ProgressBarTypes.d.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    export interface IProgressBar extends IControl
    {
        Reverse(value?: bool): bool;
        Progress(value?: number): number;
        ShowText(value?: bool): bool;
    }
}
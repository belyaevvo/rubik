/*
Copyright � Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Enums/ProgressSpinnerTypes.d.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    export interface IProgressSpinner extends IControl
    {
        AnimationDuration(value?: number): number;
        Reverse(value?: bool): bool;
    }
}
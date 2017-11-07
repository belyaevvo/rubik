/*
Copyright � Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Enums/TextAlignments.d.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    export interface ICheckBox extends IControl
    {
        OnCheckedChange: Events.CheckedChangeEvent;

        Text(value?: string): string;
        Checked(value?: bool): bool;
        TextAlign(value?: TextAlignments): TextAlignments;
    }
}
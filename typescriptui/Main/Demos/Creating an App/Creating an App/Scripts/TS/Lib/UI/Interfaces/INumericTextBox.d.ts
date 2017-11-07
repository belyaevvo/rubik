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

declare module TSUI.UI
{
    export interface INumericTextBox extends IControl
    {
        OnValueChange: Events.ValueChangeEvent;

        AllowNegatives(value?: bool): bool;
        AllowDecimals(value?: bool): bool;
        
        DecimalPlaces(value?: number): number;
        DecimalSeparator(value?: string): string;

        Min(value?: number): number;
        Max(value?: number): number;

        Value(value?: number): number;
    }
}
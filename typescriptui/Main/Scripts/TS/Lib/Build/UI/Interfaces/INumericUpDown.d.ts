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

/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    /** Defines a NumericUpDown control. */
    export interface INumericUpDown extends IControl
    {
        /** Fired when the value of the control changes. */
        OnValueChange: Events.ValueChangeEvent;

        /** Gets or sets whether the numeric up down should allow negative values.
            @param value Whether or not to allow negatives.
            @retruns The actual state of whether negatives are allowed or not.
        */
        AllowNegatives(value?: boolean): boolean;
        /** Gets or sets whether the numeric up down should allow decimal values.
            @param value Whether or not to allow decimals.
            @retruns The actual state of whether decimals are allowed or not.
        */
        AllowDecimals(value?: boolean): boolean;
        
        /** Gets or sets the number of decimal places to allow.
            @param value The value to set the number of decimal places to allow.
            @returns The actual number of allowed decimal places.
        */
        DecimalPlaces(value?: number): number;
        /** Gets or sets the character used as the decimal spearator.
            @param value The value to set the decimal place separator to.
            @returns The actual value of the decimal separator.
        */
        DecimalSeparator(value?: string): string;

        /** Gets or sets the minimum value. 
            @param value The value to set the minimum to.
            @returns The actual minimum value.
        */
        Min(value?: number): number;
        /** Gets or sets the maximum value. 
            @param value The value to set the maximum to.
            @returns The actual maximum value.
        */
        Max(value?: number): number;

        /** Gets or sets the increment added or subtracted when the up/down arrows/keys are pressed.
            @param value The value to set the increment to.
            @returns The actual value of the increment.
        */
        Increment(value?: number): number;

        /** Gets or sets the value of the control.
            @param value The value to set to.
            @returns The actual value of the control.
        */
        Value(value?: number): number;
    }
}
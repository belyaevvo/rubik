﻿/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

module TSUI.UI
{
    /** Represents a CSS number value e.g. 10px, 10% or 'auto'.
        Also provides static methods for converting from CSS string to CSSNumber.
    */
    export class CSSNumber
    {
        /** Creates a new CSSNumber with specified value and units.
            @param Value The value of the number (irrelevant if auto is set - see auto param)
            @param Units OPTIONAL The units of the CSS number - px, % or em. Default: px. (Irrelevant if auto is set - see auto param)
            @param Auto OPTIONAL Whether the number has value of "auto"  - other parameters are ignored if set. Default: false
        */
        constructor(public Value: number, public Units: string = "px", public Auto: boolean = false)
        {
        }

        /** Converts a CSS string representation of a CSS Number to a CSS Number.
            @param value The CSS string representation of the number.
            @returns the new CSS Number.
        */
        static FromString(value: string): CSSNumber
        {
            if (value === "auto")
            {
                return new CSSNumber(0, "", true);
            }
            else if (value === null || value.trim() === "")
            {
                return new CSSNumber(0, "", true);
            }
            else
            {
                var Value = parseInt(value, 10);
                var Units = value.indexOf("%") > -1 ? "%" : (value.indexOf("em") > -1 ? "em" : "px");
                return new CSSNumber(Value, Units);
            }
        }

        /** Returns value to ToString method. */
        toString(): string
        {
            return this.ToString();
        }
        /** Returns the CSS string representation of the CSS number e.g. 10px, 10% or auto*/
        ToString(): string
        {
            return this.Auto ? "auto" : this.Value.toString() + this.Units;
        }
    }
}
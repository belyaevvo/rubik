/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Aug 3 12:51 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 3/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../DataAdapter.ts" />

module TSUI.Data
{
    /** Number Data Adapter converts a raw input string to a number or vice-versa.*/
    export class NumberDataAdapter extends DataAdapter<string,number>
    {
        /** Converts raw data to JavaScript object data. 
            Note: This implementation does not check for a valid number with the exception that it does handle NaN, null and undefined.
            Note: This implementation uses parseFloat.
            @param input The raw string data.
            @returns The (float) number data or null or undefined or NaN.
        */
        public I2O(input: string): number
        {
            if (input === "null" || input === null)
            {
                return null;
            }
            else if (input === "undefined" || input === undefined)
            {
                return undefined;
            }
            else if (input === "NaN")
            {
                return NaN;
            }

            return parseFloat(input);
        }
        /** Converts JavaScript object data to raw data.
            Note: This implementation does handle NaN, null and undefined.
            Note: This implementation uses .toString() with radix: 10
            @param input The number data.
            @returns The raw string data.
        */
        public O2I(output: number): string
        {
            if (output === null)
            {
                return "null";
            }
            else if (output === undefined)
            {
                return "undefined";
            }
            else if (isNaN(output))
            {
                return "NaN";
            }

            return output.toString(10);
        }
    }
}
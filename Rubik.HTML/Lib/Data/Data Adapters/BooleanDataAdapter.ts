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

module Rubik.Data
{
    /** Boolean Data Adapter converts a raw input string to a boolean or vice-versa.*/
    export class BooleanDataAdapter extends DataAdapter<string,boolean>
    {
        /** Converts raw data to JavaScript object data. 
            Note: This implementation does not check for a valid boolean with the exception that it does handle null and undefined.
            Note: This implementation tests for equality with "true", "1", "yes", "on" (case-insensitive).
            @param input The raw string data.
            @returns The boolean data or null or undefined.
        */
        public I2O(input: string): boolean
        {
            if (input === "null" || input === null)
            {
                return null;
            }
            else if (input === "undefined" || input === undefined)
            {
                return undefined;
            }

            var testInput = input.toLowerCase();
            return testInput === "true" || testInput === "1" || testInput === "yes" || testInput === "on";
        }
        /** Converts JavaScript object data to raw data.
            Note: This implementation does handle null and undefined.
            @param input The boolean data.
            @returns The raw string data.
        */
        public O2I(output: boolean): string
        {
            if (output === null)
            {
                return "null";
            }
            else if (output === undefined)
            {
                return "undefined";
            }

            return output ? "true" : "false";
        }
    }
}
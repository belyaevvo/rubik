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
    /** String Data Adapter is a string pass-through adapter - it doesn't actually do anything. Use this as a fill-in adapter.*/
    export class StringDataAdapter extends DataAdapter<string,string>
    {
        /** Converts raw data to JavaScript object data. 
            Note: This implementation always returns the input unless the input is "undefined" or "null" in which case it returns undefined or null respectively.
            @param input The raw string data.
            @returns The processed string data or undefined or null.
        */
        public I2O(input: string): string
        {
            return input;
        }
        /** Converts JavaScript object data to raw data.
            Note: This implementation always returns the output unless the output is undefined or null in which case it returns "undefined" or "null" respectively.
            @param input The processed string data.
            @returns The raw string data.
        */
        public O2I(output: string): string
        {
            return output;
        }
    }
}
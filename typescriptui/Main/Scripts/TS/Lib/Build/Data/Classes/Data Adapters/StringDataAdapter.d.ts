/// <reference path="../DataAdapter.d.ts" />
declare module TSUI.Data {
    /** String Data Adapter is a string pass-through adapter - it doesn't actually do anything. Use this as a fill-in adapter.*/
    class StringDataAdapter extends Data.DataAdapter<string, string> {
        /** Converts raw data to JavaScript object data.
        Note: This implementation always returns the input unless the input is "undefined" or "null" in which case it returns undefined or null respectively.
        @param input The raw string data.
        @returns The processed string data or undefined or null.
        */
        public I2O(input: string): string;
        /** Converts JavaScript object data to raw data.
        Note: This implementation always returns the output unless the output is undefined or null in which case it returns "undefined" or "null" respectively.
        @param input The processed string data.
        @returns The raw string data.
        */
        public O2I(output: string): string;
    }
}

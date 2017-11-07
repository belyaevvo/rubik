/// <reference path="../DataAdapter.d.ts" />
declare module TSUI.Data {
    /** Boolean Data Adapter converts a raw input string to a boolean or vice-versa.*/
    class BooleanDataAdapter extends Data.DataAdapter<string, boolean> {
        /** Converts raw data to JavaScript object data.
        Note: This implementation does not check for a valid boolean with the exception that it does handle null and undefined.
        Note: This implementation tests for equality with "true", "1", "yes", "on" (case-insensitive).
        @param input The raw string data.
        @returns The boolean data or null or undefined.
        */
        public I2O(input: string): boolean;
        /** Converts JavaScript object data to raw data.
        Note: This implementation does handle null and undefined.
        @param input The boolean data.
        @returns The raw string data.
        */
        public O2I(output: boolean): string;
    }
}

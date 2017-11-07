/// <reference path="../DataAdapter.d.ts" />
declare module TSUI.Data {
    /** Number Data Adapter converts a raw input string to a number or vice-versa.*/
    class NumberDataAdapter extends Data.DataAdapter<string, number> {
        /** Converts raw data to JavaScript object data.
        Note: This implementation does not check for a valid number with the exception that it does handle NaN, null and undefined.
        Note: This implementation uses parseFloat.
        @param input The raw string data.
        @returns The (float) number data or null or undefined or NaN.
        */
        public I2O(input: string): number;
        /** Converts JavaScript object data to raw data.
        Note: This implementation does handle NaN, null and undefined.
        Note: This implementation uses .toString() with radix: 10
        @param input The number data.
        @returns The raw string data.
        */
        public O2I(output: number): string;
    }
}

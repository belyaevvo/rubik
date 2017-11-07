/// <reference path="../DataAdapter.d.ts" />
declare module TSUI.Data {
    /** JSON Data Adapter converts a raw input string to a JavaScript object or vice-versa. Use JSONDataAdapter to handle JSON-formatted arrays/objects.
    O: The output type of the adapter.
    */
    class JSONDataAdapter<O> extends Data.DataAdapter<string, O> {
        /** Converts raw data to JavaScript object data.
        Note: This implementation does handle null and undefined.
        Note: This implementation uses JSON.parse()
        @param input The raw JSON string.
        @returns The object data or null or undefined.
        */
        public I2O(input: string): O;
        /** Converts JavaScript object data to raw data.
        Note: This implementation does handle null and undefined.
        Note: This implementation uses JSON.stringify()
        @param input The object data.
        @returns The raw JSON string.
        */
        public O2I(output: O): string;
    }
}

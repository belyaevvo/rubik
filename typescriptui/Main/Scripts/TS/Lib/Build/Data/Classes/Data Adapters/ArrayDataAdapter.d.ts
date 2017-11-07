/// <reference path="../DataAdapter.d.ts" />
declare module TSUI.Data {
    /** Array Data Adapter converts a raw input string to an array or vice-versa. Use JSONDataAdapter to handle JSON-formatted arrays/objects.
    O: The type of the items in the output array
    */
    class ArrayDataAdapter<O> extends Data.DataAdapter<string, O[]> {
        public ItemAdapter: Data.IDataAdapter<string, O>;
        public Delimiter: string;
        /** Creates a new ArrayDataAdapter<O>
        @param ItemAdapter The data adapter to use for converting array item strings into actual item objects.
        @param Delimiter The delimiter to use for splitting the input string into seperate items. Default: ","
        */
        constructor(ItemAdapter: Data.IDataAdapter<string, O>, Delimiter?: string);
        /** Converts raw data to JavaScript object data.
        Note: This implementation does not check for a valid array with the exception that it does handle null and undefined.
        Note: This implementation splits by the specified delimiter then uses the item adapter to convert each item individually.
        @param input The raw string data.
        @returns The array data or null or undefined.
        */
        public I2O(input: string): O[];
        /** Converts JavaScript object data to raw data.
        Note: This implementation does handle null and undefined.
        @param input The array data.
        @returns The raw string.
        */
        public O2I(output: O[]): string;
    }
}

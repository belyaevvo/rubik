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
    /** Array Data Adapter converts a raw input string to an array or vice-versa. Use JSONDataAdapter to handle JSON-formatted arrays/objects.
        O: The type of the items in the output array
    */
    export class ArrayDataAdapter<O> extends DataAdapter<string,O[]>
    {
        /** Creates a new ArrayDataAdapter<O>
            @param ItemAdapter The data adapter to use for converting array item strings into actual item objects.
            @param Delimiter The delimiter to use for splitting the input string into seperate items. Default: ","
         */
        constructor(public ItemAdapter: IDataAdapter<string, O>, public Delimiter: string = ",")
        {
            super();
        }

        /** Converts raw data to JavaScript object data. 
            Note: This implementation does not check for a valid array with the exception that it does handle null and undefined.
            Note: This implementation splits by the specified delimiter then uses the item adapter to convert each item individually.
            @param input The raw string data.
            @returns The array data or null or undefined.
        */
        public I2O(input: string): O[]
        {
            if (input === "null" || input === null)
            {
                return null;
            }
            else if (input === "undefined" || input === undefined)
            {
                return undefined;
            }

            var items = input.split(this.Delimiter);
            var result = new Array<O>(items.length);
            for (var i = 0; i < items.length; i++)
            {
                result[i] = this.ItemAdapter.I2O(items[i]);
            }

            return result;
        }
        /** Converts JavaScript object data to raw data.
            Note: This implementation does handle null and undefined.
            @param input The array data.
            @returns The raw string.
        */
        public O2I(output: O[]): string
        {
            if (output === null)
            {
                return "null";
            }
            else if (output === undefined)
            {
                return "undefined";
            }

            var result = "";
            for (var i = 0; i < output.length; i++)
            {
                result += this.ItemAdapter.O2I(output[i]);
                if (i < output.length - 1)
                {
                    result += this.Delimiter;
                }
            }

            return result;
        }
    }
}
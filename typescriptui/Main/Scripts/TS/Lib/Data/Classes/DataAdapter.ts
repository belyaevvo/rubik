/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Aug 3 12:51 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 3/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Interfaces/IDataAdapter.d.ts" />

module TSUI.Data
{
    /** Defines the structure for data adapters. Data adapters convert raw input data to JavaScript objects or vice-versa.
        I: Specifies the type of the input data.
        O: Specifies the type of the output data.
    */
    export class DataAdapter<I,O> implements IDataAdapter<I,O>
    {
        /** Converts raw data to JavaScript object data. 
            Note: This implementation always returns null.
            @param input The raw data.
            @returns The JavaScript object data.
        */
        public I2O(input: I): O
        {
            return null;
        }
        /** Converts JavaScript object data to raw data.
            Note: This implementation always returns null.
            @param input The JavaScript object data.
            @returns The raw data.
        */
        public O2I(output: O): I
        {
            return null;
        }
    }
}
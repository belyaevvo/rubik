/// <reference path="../../Data/Interfaces/IDataAdapter.d.ts" />
declare module TSUI.Data {
    /** Defines the structure for data adapters. Data adapters convert raw input data to JavaScript objects or vice-versa.
    I: Specifies the type of the input data.
    O: Specifies the type of the output data.
    */
    class DataAdapter<I, O> implements Data.IDataAdapter<I, O> {
        /** Converts raw data to JavaScript object data.
        Note: This implementation always returns null.
        @param input The raw data.
        @returns The JavaScript object data.
        */
        public I2O(input: I): O;
        /** Converts JavaScript object data to raw data.
        Note: This implementation always returns null.
        @param input The JavaScript object data.
        @returns The raw data.
        */
        public O2I(output: O): I;
    }
}

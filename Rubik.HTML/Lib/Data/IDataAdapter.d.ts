/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Aug 3 12:51 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 3/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
declare module Rubik.Data
{
    /** Defines the structure for data adapters. Data adapters convert raw input data to JavaScript objects or vice-versa.
        I: Specifies the type of the input data.
        O: Specifies the type of the output data.
    */
    export interface IDataAdapter<I,O>
    {
        /** Converts raw data to JavaScript object data. 
            @param input The raw data.
            @returns The JavaScript object data.
        */
        I2O(input: I): O;
        /** Converts JavaScript object data to raw data.
            @param input The JavaScript object data.
            @returns The raw data.
        */
        O2I(output: O): I;
    }
}
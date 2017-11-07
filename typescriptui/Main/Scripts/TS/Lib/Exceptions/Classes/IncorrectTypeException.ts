/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="Exception.ts" />
module TSUI.Exceptions
{
    /** An incorrect type exception. Automatically adds descriptive information in the constructor. */
    export class IncorrectTypeException extends Exception
    {
        /** Creates a new ArgumentException instance with specified information. Automatically adds descriptive information about this particular
        type of exception.
            @param GivenType The name of the type which was given.
            @param ExpectedType The name of the type which was expected.
            @param Trace The origin of the exception
            @param InnerException The inner exception which lead to this exception, if any.
            Note: Also automatically logs the exception in the browser log.
        */
        constructor(public GivenType: string = "",
                    public ExpectedType: string = "", 
                    public Trace: string = "", 
                    public InnerException: IException = null)
        {
            super("Incorrect type! Expected type " + ExpectedType + " got " + GivenType, Trace, InnerException);
        }
    }
}
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
    /** An argument exception. Automatically adds descriptive information in the constructor. */
    export class ArgumentException extends Exception
    {
        /** Creates a new ArgumentException instance with specified information. Automatically adds descriptive information about this particular
        type of exception.
            @param ArgumentName The name of the invalid argument.
            @param Trace The origin of the exception
            @param InnerException The inner exception which lead to this exception, if any.
            Note: Also automatically logs the exception in the browser log.
        */
        constructor(public ArgumentName: string = "", 
                    public Trace: string = "", 
                    public InnerException: IException = null)
        {
            super("Invalid argument! Name: " + ArgumentName, Trace, InnerException);
        }
    }
}
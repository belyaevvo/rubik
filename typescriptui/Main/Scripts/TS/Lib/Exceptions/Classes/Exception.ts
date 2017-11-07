/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Interfaces/IException.d.ts" />
module TSUI.Exceptions
{
    /** A generic exception implementation. All exception implementations should derive from this. */
    export class Exception implements IException
    {
        /** Creates a new Exception instance with specified information.
            @param Message The message to describe the exception.
            @param Trace The origin of the exception
            @param InnerException The inner exception which lead to this exception, if any.
            Note: Also automatically logs the exception in the browser log.
        */
        constructor(public Message: string = "", public Trace: string = "", 
                    public InnerException: IException = null)
        {
            console.log(this.toString());
        }

        /** Converts the exception to a human-readable string representation. */
        toString(): string
        {
            return typeof (this) + ": " + this.Message + "\n" + this.Trace + 
                (this.InnerException === null ? "" : "\nInner exception:\n" + this.InnerException.toString());
        }
    }
}
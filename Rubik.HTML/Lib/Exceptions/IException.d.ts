/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

declare module Rubik.Exceptions
{
    /** Defines an exception. */
    export interface IException
    {
        /** The message to describe the exception. */
        Message: string;
        /** The origin of the exception. */
        Trace: string;
        /** The inner exception which lead to this exception, if any. */
        InnerException: IException;

        /** Converts the exception to a human-readable string representation. */
        toString(): string;
    }
}
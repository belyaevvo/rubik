/// <reference path="Exception.d.ts" />
declare module TSUI.Exceptions {
    /** An argument exception. Automatically adds descriptive information in the constructor. */
    class ArgumentException extends Exceptions.Exception {
        public ArgumentName: string;
        public Trace: string;
        public InnerException: Exceptions.IException;
        /** Creates a new ArgumentException instance with specified information. Automatically adds descriptive information about this particular
        type of exception.
        @param ArgumentName The name of the invalid argument.
        @param Trace The origin of the exception
        @param InnerException The inner exception which lead to this exception, if any.
        Note: Also automatically logs the exception in the browser log.
        */
        constructor(ArgumentName?: string, Trace?: string, InnerException?: Exceptions.IException);
    }
}

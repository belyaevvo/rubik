/// <reference path="Exception.d.ts" />
declare module TSUI.Exceptions {
    /** An incorrect type exception. Automatically adds descriptive information in the constructor. */
    class IncorrectTypeException extends Exceptions.Exception {
        public GivenType: string;
        public ExpectedType: string;
        public Trace: string;
        public InnerException: Exceptions.IException;
        /** Creates a new ArgumentException instance with specified information. Automatically adds descriptive information about this particular
        type of exception.
        @param GivenType The name of the type which was given.
        @param ExpectedType The name of the type which was expected.
        @param Trace The origin of the exception
        @param InnerException The inner exception which lead to this exception, if any.
        Note: Also automatically logs the exception in the browser log.
        */
        constructor(GivenType?: string, ExpectedType?: string, Trace?: string, InnerException?: Exceptions.IException);
    }
}

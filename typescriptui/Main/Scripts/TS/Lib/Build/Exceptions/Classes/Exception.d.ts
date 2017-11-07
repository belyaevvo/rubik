/// <reference path="../../Exceptions/Interfaces/IException.d.ts" />
declare module TSUI.Exceptions {
    /** A generic exception implementation. All exception implementations should derive from this. */
    class Exception implements Exceptions.IException {
        public Message: string;
        public Trace: string;
        public InnerException: Exceptions.IException;
        /** Creates a new Exception instance with specified information.
        @param Message The message to describe the exception.
        @param Trace The origin of the exception
        @param InnerException The inner exception which lead to this exception, if any.
        Note: Also automatically logs the exception in the browser log.
        */
        constructor(Message?: string, Trace?: string, InnerException?: Exceptions.IException);
        /** Converts the exception to a human-readable string representation. */
        public toString(): string;
    }
}

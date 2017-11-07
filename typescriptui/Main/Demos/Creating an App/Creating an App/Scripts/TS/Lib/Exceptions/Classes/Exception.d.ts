/// <reference path="../Interfaces/IException.d.ts" />
declare module TSUI.Exceptions {
    class Exception implements Exceptions.IException {
        public Message: string;
        public Trace: string;
        public InnerException: Exceptions.IException;
        constructor(Message?: string, Trace?: string, InnerException?: Exceptions.IException);
        public toString(): string;
    }
}

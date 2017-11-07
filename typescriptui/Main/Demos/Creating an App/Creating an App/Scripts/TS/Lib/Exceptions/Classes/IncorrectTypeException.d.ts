/// <reference path="Exception.d.ts" />
declare module TSUI.Exceptions {
    class IncorrectTypeException extends Exceptions.Exception {
        public GivenType: string;
        public ExpectedType: string;
        public Trace: string;
        public InnerException: Exceptions.IException;
        constructor(GivenType?: string, ExpectedType?: string, Trace?: string, InnerException?: Exceptions.IException);
    }
}

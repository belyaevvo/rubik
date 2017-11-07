/// <reference path="Exception.d.ts" />
declare module TSUI.Exceptions {
    class ArgumentException extends Exceptions.Exception {
        public ArgumentName: string;
        public Trace: string;
        public InnerException: Exceptions.IException;
        constructor(ArgumentName?: string, Trace?: string, InnerException?: Exceptions.IException);
    }
}

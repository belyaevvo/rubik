/// <reference path="../Interfaces/IComparer.d.ts" />
declare module TSUI.Collections {
    class ToStringComparer implements Collections.IComparer {
        public Compare(x: any, y: any): number;
    }
}

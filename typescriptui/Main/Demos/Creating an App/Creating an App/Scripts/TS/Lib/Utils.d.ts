/// <reference path="../Definitions/jquery_all.d.ts" />
declare module TSUI {
    var getType: (x: any) => string;
    var isNumber: (x: any) => boolean;
    var isString: (x: any) => boolean;
    var isDate: (x: any) => boolean;
    var isFunction: (x: any) => boolean;
    var isArray: (x: any) => boolean;
    var StopEvent: (jqEvent: JQueryEventObject) => void;
    var GetPosition: (control: any) => {
        top: number;
        left: number;
    };
    var GetSize: (control: any) => {
        width: number;
        height: number;
    };
    var OpenInNewWindow: (url: string) => void;
    var roundTo: (x: number, multiple: number) => number;
    var standardiseEvent: (jqEvent: any) => JQueryEventObject;
}

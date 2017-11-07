/// <reference path="../../Definitions/jquery_all.d.ts" />
declare module TSUI {
    /** @returns the string name of the type of the object (using Object.prototype.toString.call approach) */
    var getType: (x: any) => string;
    /** @returns true if the object is a number */
    var isNumber: (x: any) => boolean;
    /** @returns true if the object is a string */
    var isString: (x: any) => boolean;
    /** @returns true if the object is a date */
    var isDate: (x: any) => boolean;
    /** @returns true if the object is a function */
    var isFunction: (x: any) => boolean;
    /** @returns true if the object is an array */
    var isArray: (x: any) => boolean;
    /** Stops a jQuery event from bubbling and prevents default browser behaviour.
    Ignores certain events based on keyboard conditions to ensure F5 and other such buttons still work.
    */
    var StopEvent: (jqEvent: JQueryEventObject) => void;
    /** Determines the abosolute px position of a control's animation element relative to its parent.
    @param control The UI.Control to determine the position of.
    @returns an object with top and left px position.
    */
    var GetPosition: (control: any) => {
        top: number;
        left: number;
    };
    /** Determines the abosolute px size of a control's animation element.
    @param control The UI.Control to determine the size of.
    @returns an object with width and height px size.
    */
    var GetSize: (control: any) => {
        width: number;
        height: number;
    };
    /** Opens the specified URL in a new window.
    @param url The URL to open.
    */
    var OpenInNewWindow: (url: string) => void;
    /** Rounds a number to the nearest multiple of another.
    @param x The number to be rounded.
    @param multiple The base number (x is rounded to nearest multiple of this)
    */
    var roundTo: (x: number, multiple: number) => number;
    /** Standardises a jQuery [touch/mouse] event.
    Uses only the first touch as the mouse position.
    @param jqEvent The event to standardise
    @returns the standardised event.
    */
    var standardiseEvent: (jqEvent: any) => JQueryEventObject;
    /** Converts an enum flags value into a semi-colon delimited string representation. */
    var getFlagsString: (enumType: any, status: number) => string;
    /** Pads a string with the field string.
    @param str The string to pad.
    @param field The string to pad with (i.e. the default field value)
    @returns The padded string.
    */
    var pad: (str: any, field: any) => string;
}

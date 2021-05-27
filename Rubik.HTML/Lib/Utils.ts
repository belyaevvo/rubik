/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />

module Rubik
{
    /** @returns the string name of the type of the object (using Object.prototype.toString.call approach) */
    export var getType = function (x: any): string
    {
        return Object.prototype.toString.call(x);
    };
    /** @returns true if the object is a number */
    export var isNumber = function (x: any): boolean
    {
        return getType(x) === "[object Number]";
    };
    /** @returns true if the object is a string */
    export var isString = function (x: any): boolean
    {
        return getType(x) === "[object String]";
    };
    /** @returns true if the object is a date */
    export var isDate = function (x: any): boolean
    {
        return getType(x) === "[object Date]";
    };
    /** @returns true if the object is a function */
    export var isFunction = function (x: any): boolean
    {
        return getType(x) === "[object Function]";
    };
    /** @returns true if the object is an array */
    export var isArray = function (x: any): boolean
    {
        return getType(x) === "[object Array]";
    };

    
    export function _isBool(arg) {
        return typeof (arg) === "boolean";
    }

    export function _isUnd(arg) {
        return typeof (arg) === "undefined";
    }

    export function _isArr(arg) {
        return arg && arg.constructor === Array;
    }

    export function _isNum(arg) {
        return typeof (arg) === "number";
    }

    export function _isFun(arg) {
        return typeof (arg) === "function";
    }

    export function _isStr(arg) {
        return typeof (arg) === "string";
    }

    export function _isObj(arg) {
        return arg && typeof (arg) === "object";
    }


    export function isEmpty(val) {
        return (val === undefined || val == null || val.length <= 0) ? true : false;
    }

    export function _extend(object, properties, overwrite?: boolean) {
        if (properties && (!object)) {
            object = {};
        }
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                if (overwrite || !object[property]) {
                    object[property] = properties[property];
                }
            }
        }
        return object;
    }
    

    /** @returns true if the object is an array */
    export var exists = function (x: JQuery): boolean {        
        return x && x.length !== 0;
    };

    /** @returns true if the object is an array */
    export var asArray = function (x: any): any[] {
        if (x) {
            if (isArray(x)) {
                return x;
            }
            else {
                return [x];
            }
        }
        return null;
    };
    
    

    /** Stops a jQuery event from bubbling and prevents default browser behaviour.
        Ignores certain events based on keyboard conditions to ensure F5 and other such buttons still work.
    */
    export var StopEvent = function (jqEvent: JQueryEventObject)
    {
        if (!jqEvent.keyCode || jqEvent.keyCode === 13 || jqEvent.keyCode === 8 || (jqEvent.keyCode >= 17 && jqEvent.keyCode <= 90) || (jqEvent.keyCode >= 96 && jqEvent.keyCode <= 111) || (jqEvent.keyCode >= 186 && jqEvent.keyCode <= 222))
        {
            jqEvent.stopPropagation();
            jqEvent.stopImmediatePropagation();
            jqEvent.preventDefault();
        }
    }
    /** Determines the abosolute px position of a control's animation element relative to its parent. 
        @param control The UI.Control to determine the position of.
        @returns an object with top and left px position.
    */
    export var GetPosition = function (control: any): { top: number;  left: number; }
    {
        var element = control.AnimationElement();

        var startPosObj = {
            top: control.Top(),
            left: control.Left()
        };            
        var startPos = {
            top: 0,
            left: 0
        };
        if (startPosObj.left.Units === "%")
        {
            var parentWidth = element.parent().width();
            var leftPerc = startPosObj.left.Value;
            startPos.left = (leftPerc / 100) * parentWidth;
        }
        else
        {
            startPos.left = startPosObj.left.Value;
        }
        if (startPosObj.top.Units === "%")
        {
            var parentHeight = element.parent().height();
            var topPerc = startPosObj.top.Value;
            startPos.top = (topPerc / 100) * parentHeight;
        }
        else
        {
            startPos.top = startPosObj.top.Value;
        }

        return startPos;
    }
    /** Determines the abosolute px size of a control's animation element.
        @param control The UI.Control to determine the size of.
        @returns an object with width and height px size.
    */
    export var GetSize = function (control: any): { width: number;  height: number; }
    {
        var element = control.AnimationElement();

        var startPosObj = {
            width: control.Width(),
            height: control.Height()
        };            
        var startPos = {
            width: 0,
            height: 0
        };
        if (startPosObj.width.Units === "%")
        {
            var parentWidth = element.parent().width();
            var leftPerc = startPosObj.width.Value;
            startPos.width = (leftPerc / 100) * parentWidth;
        }
        else
        {
            startPos.width = startPosObj.width.Value;
        }
        if (startPosObj.height.Units === "%")
        {
            var parentHeight = element.parent().height();
            var topPerc = startPosObj.height.Value;
            startPos.height = (topPerc / 100) * parentHeight;
        }
        else
        {
            startPos.height = startPosObj.height.Value;
        }

        return startPos;
    }
    /** Opens the specified URL in a new window. 
        @param url The URL to open.
    */
    export var OpenInNewWindow = function (url: string)
    {
        var win = window.open(url, '_blank');
        win.focus();
    };
    
    /** Rounds a number to the nearest multiple of another.
        @param x The number to be rounded.
        @param multiple The base number (x is rounded to nearest multiple of this)
    */
    export var roundTo = function(x:number, multiple: number) {
        var neg = x < 0 ? -1 : 1;
        x = Math.abs(x);
        var resto = x%multiple;
        if (resto <= (multiple/2)) { 
            return (x-resto) * neg;
        } else {
            return (x+multiple-resto) * neg;
        }
    }

    /** Standardises a jQuery [touch/mouse] event.
        Uses only the first touch as the mouse position.
        @param jqEvent The event to standardise
        @returns the standardised event.
    */
    export var standardiseEvent = function (jqEvent: any): JQueryEventObject
    {
        if (jqEvent)
        {
            if (jqEvent.originalEvent)
            {
                if (jqEvent.originalEvent.touches)
                {
                    if (jqEvent.originalEvent.touches.length > 0)
                    {
                        jqEvent.pageX = jqEvent.originalEvent.touches[0].pageX;
                        jqEvent.pageY = jqEvent.originalEvent.touches[0].pageY;
                    }
                }
            }
        }
        return jqEvent;
    }
    /** Converts an enum flags value into a semi-colon delimited string representation. */
    export var getFlagsString = function (enumType: any, status: number)
    {
        var statuses = "";
        if (status == 0)
        {
            statuses = enumType[status];
        }
        else
        {
            for (var i = 1; ; i *= 2)
            {
                if (!enumType[i])
                {
                    break;
                }
                else
                {
                    if ((status & i) > 0)
                    {
                        statuses += enumType[i] + "; ";
                    }
                }
            }
        }

        return statuses;
    };

    /** Pads a string with the field string.
        @param str The string to pad.
        @param field The string to pad with (i.e. the default field value)
        @returns The padded string.
    */
    export var pad = function (str, field)
    {
        var n = '' + str;
        var w = n.length;
        var l = field.length;
        var pad = w < l ? l - w : 0;
        return n + field.substr(0, pad);
    };

    export var repeat = function (str:string, n:number) {
        n = n || 1;        
        return Array(n + 1).join(str);
    };

    /*(<any>String.prototype).repeat = (<any>String.prototype).repeat || function (n) {
        n = n || 1;
        return Array(n + 1).join(this);
    };*/


    (<any>Function.prototype).trace = function ()
    {
        var trace = [];
        var current = this;
        while (current)
        {
            trace.push(current.signature());
            current = current.caller;
        }
        return trace;
    };
    (<any>Function.prototype).signature = function ()
    {
        var signature = {
            name: this.getName(),
            params: [],
            toString: function ()
            {
                var params = this.params.length > 0 ?
                    "'" + this.params.join("', '") + "'" : "";
		        return this.name + "(" + params + ")"
	        }
        }
        if (this.arguments)
        {
            for (var x = 0; x < this.arguments.length; x++)
                signature.params.push(this.arguments[x]);
        }
        return signature;
    };
    (<any>Function.prototype).getName = function ()
    {
        if (this.name)
            return this.name;
        var definition = this.toString().split("\n")[0];
        var exp = /^function ([^\s(]+).+/;
        if (exp.test(definition))
            return definition.split("\n")[0].replace(exp, "$1") || "anonymous";
        return "anonymous";
    };
}



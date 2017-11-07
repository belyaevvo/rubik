/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
- 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="../Definitions/jquery_all.d.ts" />
var TSUI;
(function (TSUI) {
    /** @returns the string name of the type of the object (using Object.prototype.toString.call approach) */
    TSUI.getType = function (x) {
        return Object.prototype.toString.call(x);
    };

    /** @returns true if the object is a number */
    TSUI.isNumber = function (x) {
        return TSUI.getType(x) === "[object Number]";
    };

    /** @returns true if the object is a string */
    TSUI.isString = function (x) {
        return TSUI.getType(x) === "[object String]";
    };

    /** @returns true if the object is a date */
    TSUI.isDate = function (x) {
        return TSUI.getType(x) === "[object Date]";
    };

    /** @returns true if the object is a function */
    TSUI.isFunction = function (x) {
        return TSUI.getType(x) === "[object Function]";
    };

    /** @returns true if the object is an array */
    TSUI.isArray = function (x) {
        return TSUI.getType(x) === "[object Array]";
    };

    /** Stops a jQuery event from bubbling and prevents default browser behaviour.
    Ignores certain events based on keyboard conditions to ensure F5 and other such buttons still work.
    */
    TSUI.StopEvent = function (jqEvent) {
        if (!jqEvent.keyCode || jqEvent.keyCode === 13 || jqEvent.keyCode === 8 || (jqEvent.keyCode >= 17 && jqEvent.keyCode <= 90) || (jqEvent.keyCode >= 96 && jqEvent.keyCode <= 111) || (jqEvent.keyCode >= 186 && jqEvent.keyCode <= 222)) {
            jqEvent.stopPropagation();
            jqEvent.stopImmediatePropagation();
            jqEvent.preventDefault();
        }
    };

    /** Determines the abosolute px position of a control's animation element relative to its parent.
    @param control The UI.Control to determine the position of.
    @returns an object with top and left px position.
    */
    TSUI.GetPosition = function (control) {
        var element = control.AnimationElement();

        var startPosObj = {
            top: control.Top(),
            left: control.Left()
        };
        var startPos = {
            top: 0,
            left: 0
        };
        if (startPosObj.left.Units === "%") {
            var parentWidth = element.parent().width();
            var leftPerc = startPosObj.left.Value;
            startPos.left = (leftPerc / 100) * parentWidth;
        } else {
            startPos.left = startPosObj.left.Value;
        }
        if (startPosObj.top.Units === "%") {
            var parentHeight = element.parent().height();
            var topPerc = startPosObj.top.Value;
            startPos.top = (topPerc / 100) * parentHeight;
        } else {
            startPos.top = startPosObj.top.Value;
        }

        return startPos;
    };

    /** Determines the abosolute px size of a control's animation element.
    @param control The UI.Control to determine the size of.
    @returns an object with width and height px size.
    */
    TSUI.GetSize = function (control) {
        var element = control.AnimationElement();

        var startPosObj = {
            width: control.Width(),
            height: control.Height()
        };
        var startPos = {
            width: 0,
            height: 0
        };
        if (startPosObj.width.Units === "%") {
            var parentWidth = element.parent().width();
            var leftPerc = startPosObj.width.Value;
            startPos.width = (leftPerc / 100) * parentWidth;
        } else {
            startPos.width = startPosObj.width.Value;
        }
        if (startPosObj.height.Units === "%") {
            var parentHeight = element.parent().height();
            var topPerc = startPosObj.height.Value;
            startPos.height = (topPerc / 100) * parentHeight;
        } else {
            startPos.height = startPosObj.height.Value;
        }

        return startPos;
    };

    /** Opens the specified URL in a new window.
    @param url The URL to open.
    */
    TSUI.OpenInNewWindow = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };

    /** Rounds a number to the nearest multiple of another.
    @param x The number to be rounded.
    @param multiple The base number (x is rounded to nearest multiple of this)
    */
    TSUI.roundTo = function (x, multiple) {
        var neg = x < 0 ? -1 : 1;
        x = Math.abs(x);
        var resto = x % multiple;
        if (resto <= (multiple / 2)) {
            return (x - resto) * neg;
        } else {
            return (x + multiple - resto) * neg;
        }
    };

    /** Standardises a jQuery [touch/mouse] event.
    Uses only the first touch as the mouse position.
    @param jqEvent The event to standardise
    @returns the standardised event.
    */
    TSUI.standardiseEvent = function (jqEvent) {
        if (jqEvent) {
            if (jqEvent.originalEvent) {
                if (jqEvent.originalEvent.touches) {
                    if (jqEvent.originalEvent.touches.length > 0) {
                        jqEvent.pageX = jqEvent.originalEvent.touches[0].pageX;
                        jqEvent.pageY = jqEvent.originalEvent.touches[0].pageY;
                    }
                }
            }
        }
        return jqEvent;
    };

    /** Converts an enum flags value into a semi-colon delimited string representation. */
    TSUI.getFlagsString = function (enumType, status) {
        var statuses = "";
        if (status == 0) {
            statuses = enumType[status];
        } else {
            for (var i = 1; ; i *= 2) {
                if (!enumType[i]) {
                    break;
                } else {
                    if ((status & i) > 0) {
                        statuses += enumType[i] + "; ";
                    }
                }
            }
        }

        return statuses;
    };
})(TSUI || (TSUI = {}));

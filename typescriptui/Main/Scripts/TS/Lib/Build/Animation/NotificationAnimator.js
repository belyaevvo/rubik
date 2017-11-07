var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="IAnimator.d.ts" />
    (function (Animation) {
        /** Animator for a Notification. */
        var NotificationAnimator = (function () {
            function NotificationAnimator() {
            }
            /** Slides the notification in from the right - does not set "top". Clears CSS 'visibility' and 'display' values.
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            NotificationAnimator.prototype.Show = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                var element = control.AnimationElement();
                element.stop(true, true);
                var startRight = element.css("right");
                element.css({
                    right: -element.outerWidth(),
                    visibility: "",
                    display: ""
                }).animate({
                    right: startRight
                }, NotificationAnimator.AnimationTime, NotificationAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };

            /** Slides the notification off to the right - does not set "top". Sets CSS 'visibility:hidden' and 'display:none'; Restores CSS 'right'.
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            NotificationAnimator.prototype.Hide = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                var element = control.AnimationElement();
                element.stop(true, true);
                var startRight = element.css("right");
                element.animate({
                    right: -element.outerWidth()
                }, NotificationAnimator.AnimationTime, NotificationAnimator.AnimationEasing, function () {
                    element.css({
                        visibility: "hidden",
                        display: "none",
                        right: startRight
                    });

                    if (callback !== null) {
                        callback();
                    }
                });
            };
            NotificationAnimator.AnimationTime = 1000;

            NotificationAnimator.AnimationEasing = "linear";
            return NotificationAnimator;
        })();
        Animation.NotificationAnimator = NotificationAnimator;
    })(TSUI.Animation || (TSUI.Animation = {}));
    var Animation = TSUI.Animation;
})(TSUI || (TSUI = {}));

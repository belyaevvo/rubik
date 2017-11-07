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
        /** Animator for animating restack of notifications.
        Note: Show/Hide are empty methods.
        */
        var NotificationRestackAnimator = (function () {
            function NotificationRestackAnimator() {
            }
            /** This method is empty. */
            NotificationRestackAnimator.prototype.Show = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
            };

            /** This method is empty. */
            NotificationRestackAnimator.prototype.Hide = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
            };

            /** Animates the control to slide it up/down to new bottom (i.e. animates restack).
            @param control The control to animate.
            @param newBottom The new CSS 'bottom' value.
            @param callback The callback to invoke after animation has completed.
            */
            NotificationRestackAnimator.prototype.AnimateRestack = function (control, newBottom, callback) {
                if (typeof callback === "undefined") { callback = null; }
                var element = control.AnimationElement();
                element.animate({
                    bottom: newBottom
                }, NotificationRestackAnimator.AnimationTime, NotificationRestackAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            NotificationRestackAnimator.AnimationTime = 1000;

            NotificationRestackAnimator.AnimationEasing = "easeInCubic";
            return NotificationRestackAnimator;
        })();
        Animation.NotificationRestackAnimator = NotificationRestackAnimator;
    })(TSUI.Animation || (TSUI.Animation = {}));
    var Animation = TSUI.Animation;
})(TSUI || (TSUI = {}));

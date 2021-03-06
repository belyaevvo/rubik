﻿var TSUI;
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
        /** Generic fade animator for any control.
        Note: Not guaranteed to work in all situations. Does not force visibility if style sheet specifies hidden.
        */
        var FadeAnimator = (function () {
            function FadeAnimator() {
            }
            /** Fades the control in. Clears CSS 'display' and 'visibility' (does not force show).
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            FadeAnimator.prototype.Show = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                control.AnimationElement().stop(true, true).css({
                    display: "",
                    visibility: "",
                    opacity: 0
                });
                control.AnimationElement().animate({
                    opacity: 1
                }, FadeAnimator.AnimationTime, FadeAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };

            /** Fades the control out. Sets CSS 'visibility:hidden' and 'opacity:1' after animation is complete (does not force set 'display:none').
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            FadeAnimator.prototype.Hide = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                control.AnimationElement().stop(true, true);
                control.AnimationElement().animate({
                    opacity: 0
                }, FadeAnimator.AnimationTime, FadeAnimator.AnimationEasing, function () {
                    $(this).css({
                        visibility: "hidden",
                        opacity: 1
                    });

                    if (callback !== null) {
                        callback();
                    }
                });
            };
            FadeAnimator.AnimationTime = 300;

            FadeAnimator.AnimationEasing = "swing";
            return FadeAnimator;
        })();
        Animation.FadeAnimator = FadeAnimator;
    })(TSUI.Animation || (TSUI.Animation = {}));
    var Animation = TSUI.Animation;
})(TSUI || (TSUI = {}));

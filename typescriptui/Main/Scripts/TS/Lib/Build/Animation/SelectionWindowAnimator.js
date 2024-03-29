﻿var TSUI;
(function (TSUI) {
    /*
    Copyright © Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../UI/UI Static.ts" />
    /// <reference path="IAnimator.d.ts" />
    (function (Animation) {
        /** Animator for a SelectionWindow. */
        var SelectionWindowAnimator = (function () {
            function SelectionWindowAnimator() {
            }
            /** Fades in the selection window and the SelectionWindow_DisableOverlay. Clears CSS 'display' and 'visibility'
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            SelectionWindowAnimator.prototype.Show = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                $(".SelectionWindow_DisableOverlay").css({
                    display: "block",
                    opacity: 0,
                    zIndex: (TSUI.UI.OpenWindows * 10) - 1
                }).animate({
                    opacity: 0.6
                }, 200, "swing", function () {
                });

                var oldOpacity = control.GetStyle("opacity");
                control.AnimationElement().stop(true, true);
                control.AnimationElement().css({
                    opacity: 0,
                    visibility: "",
                    display: ""
                }).animate({
                    opacity: oldOpacity
                }, SelectionWindowAnimator.AnimationTime, SelectionWindowAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };

            /** Fades out the selection window and the SelectionWindow_DisableOverlay. Sets CSS 'display:none' and 'visibility:hidden'
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            SelectionWindowAnimator.prototype.Hide = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                $(".SelectionWindow_DisableOverlay").animate({
                    opacity: 0
                }, 200, "swing", function () {
                    $(this).css({
                        display: ""
                    });
                });

                control.AnimationElement().stop(true, true);
                control.AnimationElement().animate({
                    opacity: 0
                }, SelectionWindowAnimator.AnimationTime, SelectionWindowAnimator.AnimationEasing, function () {
                    control.AnimationElement().css({
                        visibility: "hidden",
                        opacity: 1,
                        display: "none"
                    });
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            SelectionWindowAnimator.AnimationTime = 250;

            SelectionWindowAnimator.AnimationEasing = "easeOutQuad";
            return SelectionWindowAnimator;
        })();
        Animation.SelectionWindowAnimator = SelectionWindowAnimator;
    })(TSUI.Animation || (TSUI.Animation = {}));
    var Animation = TSUI.Animation;
})(TSUI || (TSUI = {}));

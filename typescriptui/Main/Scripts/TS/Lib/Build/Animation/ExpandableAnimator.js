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
    /// <reference path="../UI/Interfaces/IExpandable.d.ts" />
    /// <reference path="IAnimator.d.ts" />
    (function (Animation) {
        /** Animator for an Expandable. */
        var ExpandableAnimator = (function () {
            function ExpandableAnimator() {
            }
            /** Expands the main body of the expandable to the correct (calculated) height.
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            ExpandableAnimator.prototype.Show = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                var height = control.ContentPanel.Top().Value + control.ContentPanel.Height().Value + 20;

                control.AnimationElement().stop(true, false);
                control.AnimationElement().animate({
                    height: height
                }, ExpandableAnimator.AnimationTime, ExpandableAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };

            /** Collapses the main body of the expandable to the correct (calculated) height i.e. just the title bar showing.
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
            */
            ExpandableAnimator.prototype.Hide = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                control.AnimationElement().animate({
                    height: control.MainTitleBar.ActualHeight()
                }, ExpandableAnimator.AnimationTime, ExpandableAnimator.AnimationEasing, function () {
                    if (callback !== null) {
                        callback();
                    }
                });
            };
            ExpandableAnimator.AnimationTime = 450;

            ExpandableAnimator.AnimationEasing = "easeOutQuad";
            return ExpandableAnimator;
        })();
        Animation.ExpandableAnimator = ExpandableAnimator;
    })(TSUI.Animation || (TSUI.Animation = {}));
    var Animation = TSUI.Animation;
})(TSUI || (TSUI = {}));

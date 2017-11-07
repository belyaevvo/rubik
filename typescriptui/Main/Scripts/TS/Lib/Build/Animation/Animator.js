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
        /** Basic implementation of an IAnimator. */
        var Animator = (function () {
            function Animator() {
            }
            /** Clears the values of 'visibility' and 'display' - does not force them to 'visible'.
            This implementation restores the control to its stylesheet state of visibility.
            @param control The control to show.
            @param callback The function to call when showing is complete.
            */
            Animator.prototype.Show = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                control.AnimationElement().css({
                    visibility: "",
                    display: ""
                });
                if (callback !== null) {
                    callback();
                }
            };

            /** Sets the value of 'visibility' to 'hidden' and clears the value of 'display' - does not set 'display:none'.
            This implementation does a basic hide of a control.
            @param control The control to hide.
            @param callback The function to call when hiding is complete.
            */
            Animator.prototype.Hide = function (control, callback) {
                if (typeof callback === "undefined") { callback = null; }
                control.AnimationElement().css({
                    visibility: "hidden",
                    display: ""
                });
                if (callback !== null) {
                    callback();
                }
            };
            return Animator;
        })();
        Animation.Animator = Animator;
    })(TSUI.Animation || (TSUI.Animation = {}));
    var Animation = TSUI.Animation;
})(TSUI || (TSUI = {}));

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

module Rubik.Animation
{
    /** Animator for a SelectionWindow. */
    export class SelectionWindowAnimator implements IAnimator
    {
        /** The length of time (milliseconds) to spend animating the window.
            Default: 250ms
        */
        static AnimationTime: number = 250;
        /** The jQuery animation easing to use
            Default: easeOutQuad
        */
        static AnimationEasing: string = "easeOutQuad";
        
        /** Fades in the selection window and the SelectionWindow_DisableOverlay. Clears CSS 'display' and 'visibility'
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
        */
        Show(control: UI.IControl, callback: () => void = null): void
        {
            $(".SelectionWindow_DisableOverlay")
                .css({
                    display: "block",
                    opacity: 0,
                    zIndex: (UI.OpenWindows * 10) - 1
                })
                .animate({
                    opacity: 0.6
                }, 200, "swing", function ()
                {
                });

            var oldOpacity = control.GetStyle("opacity");
            control.AnimationElement().stop(true, true);
            control.AnimationElement().css({
                opacity: 0,
                visibility: "",
                display: ""
            }).animate({
                opacity: oldOpacity,
            },
            SelectionWindowAnimator.AnimationTime,
            SelectionWindowAnimator.AnimationEasing,
            function ()
            {
                if (callback !== null)
                {
                    callback();
                }
            });
        }
        /** Fades out the selection window and the SelectionWindow_DisableOverlay. Sets CSS 'display:none' and 'visibility:hidden'
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
        */
        Hide(control: UI.IControl, callback: () => void = null): void
        {
            $(".SelectionWindow_DisableOverlay")
                .animate({
                    opacity: 0
                }, 200, "swing", function ()
                {
                    $(this).css({
                        display: ""
                    });
                });

            control.AnimationElement().stop(true, true);
            control.AnimationElement().animate({
                opacity: 0
            },
            SelectionWindowAnimator.AnimationTime,
            SelectionWindowAnimator.AnimationEasing,
            function ()
            {
                control.AnimationElement().css({
                    visibility: "hidden",
                    opacity: 1,
                    display: "none"
                });
                if (callback !== null)
                {
                    callback();
                }
            });
        }
    }
}
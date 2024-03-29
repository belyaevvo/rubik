﻿/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IAnimator.d.ts" />

module Rubik.Animation
{
    /** Generic fade animator for any control. 
        Note: Not guaranteed to work in all situations. Does not force visibility if style sheet specifies hidden.
    */
    export class FadeAnimator implements IAnimator
    {
        /** The length of time (milliseconds) to spend fading.
            Default: 300ms
        */
        static AnimationTime: number = 300;
        /** The jQuery animation easing to use
            Default: swing
        */
        static AnimationEasing: string = "swing";
        
        /** Fades the control in. Clears CSS 'display' and 'visibility' (does not force show).
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
        */
        Show(control: UI.IControl, callback: ()=>void = null): void
        {
            control.AnimationElement().stop(true, true).css({
                display: "",
                visibility: "",
                opacity: 0
            });
            control.AnimationElement().animate({
                opacity: 1
            }, FadeAnimator.AnimationTime, FadeAnimator.AnimationEasing, function ()
            {
                if (callback !== null)
                {
                    callback();
                }
            });
        }
        /** Fades the control out. Sets CSS 'visibility:hidden' and 'opacity:1' after animation is complete (does not force set 'display:none').
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
        */
        Hide(control: UI.IControl, callback: ()=>void = null): void
        {
            control.AnimationElement().stop(true, true);
            control.AnimationElement().animate({
                opacity: 0
            }, FadeAnimator.AnimationTime, FadeAnimator.AnimationEasing, function ()
            {
                $(this).css({
                    visibility: "hidden",
                    opacity: 1
                });

                if (callback !== null)
                {
                    callback();
                }
            });
        }
    }
}
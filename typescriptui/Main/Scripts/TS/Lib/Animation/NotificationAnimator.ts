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

module TSUI.Animation
{
    /** Animator for a Notification. */
    export class NotificationAnimator implements IAnimator
    {
        /** The length of time (milliseconds) to spend animating the notification.
            Default: 1000ms
        */
        static AnimationTime: number = 1000;
        /** The jQuery animation easing to use
            Default: linear
        */
        static AnimationEasing: string = "linear";
        
        /** Slides the notification in from the right - does not set "top". Clears CSS 'visibility' and 'display' values.
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
        */
        Show(control: UI.IControl, callback: () => void = null): void
        {
            var element = control.AnimationElement();
            element.stop(true, true);
            var startRight = element.css("right");
            element.css({
                right: -element.outerWidth(),
                visibility: "",
                display: ""
            }).animate({
                right: startRight
            },
            NotificationAnimator.AnimationTime,
            NotificationAnimator.AnimationEasing,
            function ()
            {
                if (callback !== null)
                {
                    callback();
                }
            });
        }
        /** Slides the notification off to the right - does not set "top". Sets CSS 'visibility:hidden' and 'display:none'; Restores CSS 'right'.
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
        */
        Hide(control: UI.IControl, callback: () => void = null): void
        {
            var element = control.AnimationElement();
            element.stop(true, true);
            var startRight = element.css("right");
            element.animate({
                right: -element.outerWidth()
            },
            NotificationAnimator.AnimationTime,
            NotificationAnimator.AnimationEasing,
            function ()
            {
                element.css({
                    visibility: "hidden",
                    display: "none",
                    right: startRight
                });

                if (callback !== null)
                {
                    callback();
                }
            });
        }
    }
}
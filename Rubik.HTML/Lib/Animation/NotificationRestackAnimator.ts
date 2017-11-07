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

module Rubik.Animation
{
    /** Animator for animating restack of notifications. 
        Note: Show/Hide are empty methods.
    */
    export class NotificationRestackAnimator implements IAnimator
    {
        /** The length of time (milliseconds) to spend restacking.
            Default: 1000ms
        */
        static AnimationTime: number = 1000;
        /** The jQuery animation easing to use
            Default: easeInCubic
        */
        static AnimationEasing: string = "easeInCubic";
        
        /** This method is empty. */
        Show(control: UI.IControl, callback: () => void = null): void
        {
        }
        /** This method is empty. */
        Hide(control: UI.IControl, callback: () => void = null): void
        {
        }

        /** Animates the control to slide it up/down to new bottom (i.e. animates restack). 
            @param control The control to animate.
            @param newBottom The new CSS 'bottom' value.
            @param callback The callback to invoke after animation has completed.
        */
        AnimateRestack(control: UI.IControl, newBottom: number, callback: () => void = null)
        {
            var element = control.AnimationElement();
            element.animate({
                bottom: newBottom
            },
            NotificationRestackAnimator.AnimationTime,
            NotificationRestackAnimator.AnimationEasing,
            function ()
            {
                if (callback !== null)
                {
                    callback();
                }
            });
        }
    }
}
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

module TSUI.Animation
{
    /** Animator for an Expandable. */
    export class ExpandableAnimator implements IAnimator
    {
        /** The length of time (milliseconds) to spend expanding the expandable.
            Default: 450ms
        */
        static AnimationTime: number = 450;
        /** The jQuery animation easing to use
            Default: easeOutQuad
        */
        static AnimationEasing: string = "easeOutQuad";

        /** Expands the main body of the expandable to the correct (calculated) height. 
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
        */
        Show(control: UI.IExpandable, callback: () => void = null): void
        {
            var height = control.ContentPanel.Top().Value + control.ContentPanel.Height().Value + 20;
            
            control.AnimationElement().stop(true, false);
            control.AnimationElement().animate({
                height: height
            },
            ExpandableAnimator.AnimationTime,
            ExpandableAnimator.AnimationEasing,
            function ()
            {
                if (callback !== null)
                {
                    callback();
                }
            });
        }
        /** Collapses the main body of the expandable to the correct (calculated) height i.e. just the title bar showing. 
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
        */
        Hide(control: UI.IExpandable, callback: () => void = null): void
        {
            control.AnimationElement().animate({
                height: control.MainTitleBar.ActualHeight()
            },
            ExpandableAnimator.AnimationTime,
            ExpandableAnimator.AnimationEasing,
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
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
    /** Basic implementation of an IAnimator. */
    export class Animator implements IAnimator
    {
        /** Clears the values of 'visibility' and 'display' - does not force them to 'visible'.
            This implementation restores the control to its stylesheet state of visibility.
            @param control The control to show.
            @param callback The function to call when showing is complete.
        */
        Show(control: UI.IControl, callback: ()=>void = null): void
        {
            control.AnimationElement().css({
                visibility: "",
                display: ""
            });
            if (callback !== null)
            {
                callback();
            }
        }
        /** Sets the value of 'visibility' to 'hidden' and clears the value of 'display' - does not set 'display:none'.
            This implementation does a basic hide of a control.
            @param control The control to hide.
            @param callback The function to call when hiding is complete.
        */
        Hide(control: UI.IControl, callback: ()=>void = null): void
        {
            control.AnimationElement().css({
                visibility: "hidden",
                display: ""
            });
            if (callback !== null)
            {
                callback();
            }
        }
    }
}
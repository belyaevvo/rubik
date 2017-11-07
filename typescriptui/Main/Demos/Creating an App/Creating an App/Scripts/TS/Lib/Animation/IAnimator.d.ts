/*
Copyright � Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../UI/Interfaces/IControl.d.ts" />

declare module TSUI.Animation
{
    /** Defines an animator. Animates a control to show/hide it or other animations. */
    export interface IAnimator
    {
        /** Shows the control and invokes the callback (context not restored) after the animation is completed. 
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
        */
        Show(control: UI.IControl, callback?: () => void ): void;
        /** Hides the control and invokes the callback (context not restored) after the animation is completed. 
            @param control The control to animate.
            @param callback The callback to invoke after animation has completed.
        */
        Hide(control: UI.IControl, callback?: () => void ): void;
    }
}
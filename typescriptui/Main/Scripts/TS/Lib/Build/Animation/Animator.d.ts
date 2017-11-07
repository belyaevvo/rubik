/// <reference path="../Animation/IAnimator.d.ts" />
declare module TSUI.Animation {
    /** Basic implementation of an IAnimator. */
    class Animator implements Animation.IAnimator {
        /** Clears the values of 'visibility' and 'display' - does not force them to 'visible'.
        This implementation restores the control to its stylesheet state of visibility.
        @param control The control to show.
        @param callback The function to call when showing is complete.
        */
        public Show(control: TSUI.UI.IControl, callback?: () => void): void;
        /** Sets the value of 'visibility' to 'hidden' and clears the value of 'display' - does not set 'display:none'.
        This implementation does a basic hide of a control.
        @param control The control to hide.
        @param callback The function to call when hiding is complete.
        */
        public Hide(control: TSUI.UI.IControl, callback?: () => void): void;
    }
}

/// <reference path="../Collections/CollectionsRefs.d.ts" />
/// <reference path="../../../Definitions/jquery.d.ts" />
/// <reference path="../../../Definitions/html2canvas.d.ts" />
declare module TSUI.Animation {
    /** A callback for animation rendering when requestAnimationFrame is answered. */
    class AnimationCallback {
        public callback: (TotalElapsedTime: number) => void;
        public context: any;
        public single: boolean;
        /** The time at which animation began i.e. the time at which the first invoke of the callback occurred. */
        public AnimationStartTime: number;
        /** Creates a new Animation Callback.
        @param callback The function to call when requestAnimationFrame is answered.
        @param context The context to use when calling callback (sets the value of "this" in callback).
        @param single Indicates whether the callback should occur once or should repeat.
        */
        constructor(callback: (TotalElapsedTime: number) => void, context: any, single?: boolean);
    }
    /** Adds an animation callback to the list of animation callbacks. */
    var RegisterAnimationCallback: (obj: AnimationCallback) => AnimationCallback;
    /** Adds an animation callback to the list of animation callbacks to be invoked only once. */
    var RegisterAnimationForSingleCallback: (obj: AnimationCallback) => AnimationCallback;
    /** Removes an animation callback to the list of animation callbacks. */
    var UnregisterAnimationCallback: (obj: AnimationCallback) => AnimationCallback;
    /** Provides functions for animation including preparing and destroying canvases for HTML2Canvas animation. */
    class AnimationHelper {
        /** Takes an jQuery element (must be contained within the actual page DOM) and prepares it for HTML2Cnavas animation.
        It does not overlay the canvas on top of the original element but does attempt to position it so it can be faded in.
        Calls the callback once the canvas has been generated.
        @param elem The element to generate an image of.
        @param callback The callback to invoke once the canvas has been generated. Context is not retained.
        */
        static PrepareHTML2CanvasForAnimation(elem: JQuery, callback: (canvas: JQuery) => void): void;
        /** Restores the original element after HTML2Canvas is no longer required.
        Fades in the element over the top of the canvas then quickly fades out the canvas from underneath.
        Canvas is then destroyed.
        @param elem The element (JQuery reference) to restore.
        @param canvas The canvas (JQuery reference) that is an image of the element. Must already be positioned on top of the element.
        */
        static RestoreAfterAnimationHTML2Canvas(elem: JQuery, canvas: JQuery): void;
    }
}

/*
Copyright © Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.
 - 5/Sep/13 : Bug fix: requestAnimationFrame was defined in Android browser when cancelAnimationFrame wasn't causing fatal error.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Collections/Collections_BuildRefs.d.ts" />
/// <reference path="../../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../Scripts/typings/html2canvas/html2canvas.d.ts" />

/* Standardises requestAnimationFrame and cancelAnimationFrame */
/*(function ()
{
    var requestAnimationFrame = (<any>window).requestAnimationFrame || (<any>window).mozRequestAnimationFrame ||
                                (<any>window).webkitRequestAnimationFrame || window.msRequestAnimationFrame || (<any>window).oRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
    
    var cancelAnimationFrame = (<any>window).cancelAnimationFrame || (<any>window).mozCancelAnimationFrame ||
                                (<any>window).webkitCancelAnimationFrame || window.msCancelRequestAnimationFrame || (<any>window).oCancelRequestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;

    if (!window.requestAnimationFrame || !window.cancelAnimationFrame)
    {
        window.requestAnimationFrame = undefined;
        window.cancelAnimationFrame = undefined;
    }
})();*/

module Rubik.Animation
{    
    /** A callback for animation rendering when requestAnimationFrame is answered. */
    export class AnimationCallback
    {
        /** The time at which animation began i.e. the time at which the first invoke of the callback occurred. */
        public AnimationStartTime: number = -1;

        /** Creates a new Animation Callback.
            @param callback The function to call when requestAnimationFrame is answered.
            @param context The context to use when calling callback (sets the value of "this" in callback).
            @param single Indicates whether the callback should occur once or should repeat.
        */
        constructor(public callback: (TotalElapsedTime: number)=>void,
                    public context: any,
                    public single: boolean = false)
        {
        }
    }

    /** The interval reference used when simulating request animation frame. */
    var AnimationIntervalRef: number = -1;
    /** The list of animation callbacks to invoke when requestAnimationFrame is answered. */
    var AnimationCallbacks: Collections.IList<AnimationCallback> = new Collections.List<AnimationCallback>();
    
    /** Adds an animation callback to the list of animation callbacks. */
    export var RegisterAnimationCallback = function (obj: AnimationCallback)
    {
        AnimationCallbacks.Add(obj);
        return obj;
    };
    /** Adds an animation callback to the list of animation callbacks to be invoked only once. */
    export var RegisterAnimationForSingleCallback = function (obj: AnimationCallback)
    {
        obj.single = true;
        AnimationCallbacks.Add(obj);
        return obj;
    };
    /** Removes an animation callback to the list of animation callbacks. */
    export var UnregisterAnimationCallback = function (obj: AnimationCallback)
    {
        AnimationCallbacks.Remove(obj);
        return obj;
    };
    /** Called when the list of animation callbacks is modified. */
    var AnimationCallbacks_Modified = function (eventArgs: Collections.CollectionModifiedEventArgs<AnimationCallback>)
    {
        if (AnimationCallbacks.Count() === 0)
        {
            if (AnimationIntervalRef !== -1)
            {
                if (window.requestAnimationFrame && window.cancelAnimationFrame)
                {
                    window.cancelAnimationFrame(AnimationIntervalRef);
                    AnimationIntervalRef = -1;
                }
                else
                {
                    clearInterval(AnimationIntervalRef);
                    AnimationIntervalRef = -1;
                }
            }
        }
        else
        {
            if (AnimationIntervalRef === -1)
            {
                if (window.requestAnimationFrame && window.cancelAnimationFrame)
                {
                    AnimationIntervalRef = window.requestAnimationFrame(AnimationIntervaFunc);
                }
                else
                {
                    AnimationIntervalRef = setInterval(AnimationIntervaFunc, 150);
                }
            }
        }
    };
    /** Called when requestAnimationFrame (or its simulation) is answered. */
    var AnimationIntervaFunc = function ()
    {
        var elems = AnimationCallbacks.ToArray();
        var elapsedTime = -1;
        var removeElems = new Collections.List<AnimationCallback>();
        var doRemove = false;
        for (var i = 0; i < elems.length; i++)
        {
            var callback = elems[i];
            if (callback.AnimationStartTime === -1)
            {
                callback.AnimationStartTime = Date.now();
            }
            elapsedTime = Date.now() - callback.AnimationStartTime;
            callback.callback.call(elems[i].context, elapsedTime);
            if (callback.single)
            {
                removeElems.Add(elems[i]);
                doRemove = true;
            }
        }
        if (doRemove)
        {
            AnimationCallbacks.RemoveAll(removeElems);
        }

        if (window.requestAnimationFrame)
        {
            AnimationIntervalRef = window.requestAnimationFrame(AnimationIntervaFunc);
        }
        else
        {
            $("body").css({ zIndex: $("body").css("z-index") === "1" ? 0 : 1 });
        }
    };
    AnimationCallbacks.OnModified.Attach(new Collections.CollectionModifiedEventHandler<AnimationCallback>(AnimationCallbacks_Modified, AnimationCallbacks));
    
    /** Provides functions for animation including preparing and destroying canvases for HTML2Canvas animation. */
    export class AnimationHelper
    {
        /** Takes an jQuery element (must be contained within the actual page DOM) and prepares it for HTML2Cnavas animation. 
            It does not overlay the canvas on top of the original element but does attempt to position it so it can be faded in.
            Calls the callback once the canvas has been generated.
            @param elem The element to generate an image of.
            @param callback The callback to invoke once the canvas has been generated. Context is not retained.
        */
        static PrepareHTML2CanvasForAnimation(elem: JQuery, callback: (canvas: JQuery)=>void): void
        {
            var elems = elem.find("*").not(".Hidden");
            elem.attr("data-html2canvas-visible", "");
            elems.attr("data-html2canvas-visible", "");

            html2canvas(elem.get(0)).then( 
                function (canvas: HTMLCanvasElement)
                {
                    var newCanvas = $(canvas);
                    
                    newCanvas.css({
                        position: "absolute",
                        top: elem.offset().top,
                        left: elem.offset().left,
                        zIndex: elem.css("z-index"),
                        display: "none"
                    });
            
                    $("body").append(newCanvas);
                    elem.removeAttr("data-html2canvas-visible");
                    elems.removeAttr("data-html2canvas-visible");


                    callback(newCanvas);
                }
            );
        }
        /** Restores the original element after HTML2Canvas is no longer required.
            Fades in the element over the top of the canvas then quickly fades out the canvas from underneath.
            Canvas is then destroyed.
            @param elem The element (JQuery reference) to restore.
            @param canvas The canvas (JQuery reference) that is an image of the element. Must already be positioned on top of the element.
        */
        static RestoreAfterAnimationHTML2Canvas(elem: JQuery, canvas: JQuery): void
        {
            var zIndex = parseInt(canvas.css("z-index"), 10);
            canvas.css({ opacity: 1, zIndex: zIndex });
            elem.css({
                display: "",
                opacity: 0,
                visibility: "visible",
                zIndex: zIndex + 2
            })
            .animate({
                opacity: 1
            }, 500, "swing", function ()
            {
                elem.css({
                    opacity: 1
                });
                canvas.animate({
                    opacity: 0
                }, 500, "swing", function ()
                {
                    canvas.css("display", "none");
                    canvas.remove();
                    elem.css({
                        zIndex: zIndex
                    });
                });
            });
        }
    }
}
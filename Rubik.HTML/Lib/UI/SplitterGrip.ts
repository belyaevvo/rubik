/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="ISplitterGrip.d.ts" />
/// <reference path="Control.ts" />

module Rubik.UI
{
    export class SplitterGrip extends Control implements ISplitterGrip
    {
        OnSplitterMove: Events.SplitterMoveEvent;
        OnOrientationChanged: Events.OrientationChangedEvent;
        
        constructor()
        {
            super();

            this._rootElement.addClass("SplitterGrip");
            
            this.OnSplitterMove = new Events.SplitterMoveEvent();
            this.OnOrientationChanged = new Events.OrientationChangedEvent();
        }
        
        ConstructDOM(parent: JQuery, onComplete:()=>void = null): void
        {
            var __this = this;
            super.ConstructDOM(parent, function ()
            {
                __this._rootElement.text("&nbsp;");

                if (onComplete)
                {
                    onComplete();
                }
            });
        }
        
        MaxDistance(): number
        {
            return 99.5;
        }

        _Orientation: SplitterGrip_Orientations = SplitterGrip_Orientations.Vertical;
        Orientation(value: SplitterGrip_Orientations = null): SplitterGrip_Orientations
        {
            if (value !== null)
            {
                this._Orientation = value;
                
                var orientation = this.Orientation();
                this._rootElement.css({
                    height: (orientation === SplitterGrip_Orientations.Horizontal) ? value.toString() + "%" : "100%",
                    width: (orientation === SplitterGrip_Orientations.Vertical) ? value.toString() + "%" : "100%",
                    top: (orientation === SplitterGrip_Orientations.Horizontal) ? value.toString() + "%" : "0px",
                    left: (orientation === SplitterGrip_Orientations.Vertical) ? value.toString() + "%" : "0px"
                });

                if (orientation === SplitterGrip_Orientations.Horizontal)
                {
                    this._rootElement.removeClass("Vertical");
                    this._rootElement.addClass("Horizontal");
                }
                else
                {
                    this._rootElement.removeClass("Horizontal");
                    this._rootElement.addClass("Vertical");
                }
                this.OnOrientationChanged.Invoke(new Events.OrientationChangedEventArgs(this));
            }
            return this._Orientation;
        }
        _SplitterDistance: number = 50;
        SplitterDistance(value: number = null): number
        {
            if (value !== null)
            {
                var max = this.MaxDistance();
                value = value < 0 ? 0 : (value > max ? max : value);
                this._SplitterDistance = value;

                var orientation = this.Orientation();
                this._rootElement.css({
                    top: (orientation === SplitterGrip_Orientations.Horizontal) ? value.toString() + "%" : "0px",
                    left: (orientation === SplitterGrip_Orientations.Vertical) ? value.toString() + "%" : "0px"
                });

                this.OnSplitterMove.Invoke(new Events.SplitterMoveEventArgs(this));
            }
            return this._SplitterDistance;
        }
        _SplitterWidth: number = 15;
        SplitterWidth(value: number = null): number
        {
            if (value !== null)
            {
                this._SplitterWidth = value;

                var orientation = this.Orientation();
                this._rootElement.css({
                    height: (orientation === SplitterGrip_Orientations.Horizontal) ? value.toString() + "px" : "100%",
                    width: (orientation === SplitterGrip_Orientations.Vertical) ? value.toString() + "px" : "100%"
                });
            }
            return this._SplitterWidth;
        }
    }
}
/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Animation/Animation_BuildRefs.d.ts" />
/// <reference path="../../../Definitions/modernizr.d.ts" />
/// <reference path="TileBackground.ts" />
/// <reference path="../Interfaces/ITile.d.ts" />
/// <reference path="Label.ts" />
/// <reference path="TileIcon.ts" />
/// <reference path="TileCounter.ts" />
/// <reference path="Control.ts" />

module TSUI.UI
{
    export class Tile extends Control implements ITile
    {
        Counter: ITileCounter;
        NameLabel: ILabel;
        TextLabel: ILabel;
        IconBox: ITileIcon;

        Backgrounds: Collections.IList<ITileBackground> = new Collections.List<ITileBackground>();

        constructor(size: TileSizes = TileSizes.Large, type: TileTypes = TileTypes.Flip)
        {
            super();

            this._rootElement.addClass("Tile");

            this.Focusable(true);

            this.NameLabel = new Label();
            this.NameLabel.AddClass("Name");
            this.Children.Add(this.NameLabel);
            
            this.TextLabel = new Label();
            this.TextLabel.AddClass("Text");
            this.Children.Add(this.TextLabel);
            
            this.IconBox = new TileIcon();
            this.Children.Add(this.IconBox);

            this.Counter = new TileCounter();
            this.Children.Add(this.Counter);

            this.Size(size);
            this.Type(type);

            this.Backgrounds.OnModified.Attach(new Events.CollectionModifiedEventHandler<ITileBackground>(this._Backgrounds_Modified, this));
        }
        
        ConstructDOM(parent: JQuery, onComplete:()=>void = null): void
        {
            super.ConstructDOM(parent, onComplete);

            this.StartCycle();
        }

        _Backgrounds_Modified(eventArgs: Events.CollectionModifiedEventArgs<ITileBackground>)
        {
            switch (eventArgs.Modification)
            {
                case Events.CollectionModifications.Add:
                    for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++)
                    {
                        var elem = eventArgs.ModifiedElements.ElementAt(i);
                        this._ConstructBackground(elem);
                    }
                    if (this._CurrBgIndex === -1)
                    {
                        this.ShowBackground(0);
                    }
                    break;
                case Events.CollectionModifications.Remove:
                    for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++)
                    {
                        var elem = eventArgs.ModifiedElements.ElementAt(i);
                        elem.DestroyDOM();
                    }
                    break;
                case Events.CollectionModifications.Reorder:
                    //Do nothing
                    break;
            }
        }
        _ConstructBackground(bg: ITileBackground)
        {
            bg.SetPosition(TileBackgroundPositions.OffTop);
            this.Children.Add(bg);
        }

        _Size: TileSizes = null;
        Size(value: TileSizes = null): TileSizes
        {
            if (value !== null)
            {
                this._Size = value;

                this.RemoveClass("LargeSquare");
                this.RemoveClass("Large");
                this.RemoveClass("Medium");
                this.RemoveClass("Small");
                switch (value)
                {
                    case TileSizes.Small:
                        this.AddClass("Small");
                        break;
                    case TileSizes.Medium:
                        this.AddClass("Medium");
                        break;
                    case TileSizes.Large:
                        this.AddClass("Large");
                        break;
                    case TileSizes.LargeSquare:
                        this.AddClass("LargeSquare");
                        break;
                }
            }
            return this._Size;
        }
        _Type: TileTypes = null;
        Type(value: TileTypes = null): TileTypes
        {
            if (value !== null)
            {
                this._Type = value;

                this.RemoveClass("Flip");
                this.RemoveClass("Iconic");
                this.RemoveClass("Cycle");
                switch (value)
                {
                    case TileTypes.Flip:
                        this.AddClass("Flip");
                        this.StartCycle();
                        break;
                    case TileTypes.Iconic:
                        this.AddClass("Iconic");
                        this.StopCycle();
                        this.HideBackground();
                        break;
                    case TileTypes.Cycle:
                        this.AddClass("Cycle");
                        this.StartCycle();
                        break;
                }
            }
            return this._Type;
        }

        ShowCounter(value: boolean = null): boolean
        {
            if (value !== null)
            {
                if (value && !this.ShowCounter())
                {
                    this.RemoveClass("NoCounter");
                }
                else if(!value && this.ShowCounter())
                {
                    this.AddClass("NoCounter");
                }
            }
            return !this.HasClass("NoCounter");
        }

        MaxTime: number = 12000;
        MinTime: number = 6000;
        
        ShouldCycle: boolean = true;
        _CycleCallback: Animation.AnimationCallback = null;
        _CycleRef: number = -1;
        _CycleTime: number = -1;
        StartCycle(): void
        {
            if (this._CycleCallback === null && this.ShouldCycle && this.DOMConstructed)
            {
                var _this = this;
                this._CycleTime = (Math.random() * (_this.MaxTime - _this.MinTime)) + _this.MinTime;
                this._CycleCallback = new Animation.AnimationCallback(this._OnCycle, this);
                this._SetupCycleTimeout();
            }
        }
        StopCycle(): void
        {
            if (this._CycleCallback !== null)
            {
                Animation.UnregisterAnimationCallback(this._CycleCallback);
                this._CycleCallback = null;
            }
            if (this._CycleRef !== -1)
            {
                clearTimeout(this._CycleRef);
                this._CycleRef = -1;
            }
        }

        _SetupCycleTimeout()
        {
            if (this._CycleCallback !== null)
            {
                var _this = this;
                this._CycleRef = setTimeout(function ()
                {
                    Animation.RegisterAnimationForSingleCallback(_this._CycleCallback);
                }, this._CycleTime);
            }
        }
        doCycle: boolean = true;
        _OnCycle(TotalElapsedTime: number)
        {
            if (this.ActuallyEnabled())
            {
                if (this.Type() === TileTypes.Flip)
                {
                    this.Flip();
                }
                else if (this.Type() === TileTypes.Cycle)
                {
                    this.CycleBackground();
                }
            }
            this._SetupCycleTimeout();
        }

        Flip()
        {
            this.Flipped(!this.Flipped());
        }
        Flipped(value: boolean = null): boolean
        {
            if (value !== null && this.ActuallyVisible() && this.ActuallyEnabled())
            {
                if (value && !this.Flipped())
                {
                    if (Modernizr.csstransitions || this.Size() === TileSizes.Small)
                    {
                        this.AddClass("Flipped");
                    }
                    else
                    {
                        var _this = this;
                        _this.TextLabel.ApplyStyles({
                            display: "inline-block",
                            visiblity: "visible",
                            opacity: 0
                        });
                        _this.Counter.ApplyStyles({
                            opacity: 1
                        });
                        _this.Counter.AnimationElement().animate({
                            opacity: 0
                        }, 500, "linear", function ()
                        {
                            _this.TextLabel.AnimationElement().animate({
                                opacity: 1
                            }, 500, "linear", function ()
                            {
                                _this.AddClass("Flipped");
                                _this.TextLabel.ApplyStyles({
                                    display: "",
                                    visiblity: "",
                                    opacity: 1
                                });
                                _this.Counter.ApplyStyles({
                                    opacity: 0
                                });
                            });
                        });
                        if (_this._CurrBgIndex !== -1)
                        {
                            _this.Backgrounds.ElementAt(_this._CurrBgIndex).AnimationElement().animate({
                                opacity: 0
                            }, 500, "linear");
                        }
                        _this.IconBox.AnimationElement().animate({
                            opacity: 0
                        }, 500, "linear");
                    }
                }
                else if (!value && this.Flipped())
                {
                    if (Modernizr.csstransitions || this.Size() === TileSizes.Small)
                    {
                        this.RemoveClass("Flipped");
                    }
                    else
                    {
                        var _this = this;
                        _this.TextLabel.ApplyStyles({
                            display: "",
                            visiblity: "",
                            opacity: 1
                        });
                        _this.Counter.ApplyStyles({
                            opacity: 0
                        });
                        _this.TextLabel.AnimationElement().animate({
                            opacity: 0
                        }, 500, "linear", function ()
                        {
                            _this.Counter.AnimationElement().animate({
                                opacity: 1
                            }, 500, "linear", function ()
                            {
                                _this.RemoveClass("Flipped");
                                _this.TextLabel.ApplyStyles({
                                    display: "",
                                    visiblity: "",
                                    opacity: 0
                                });
                                _this.Counter.ApplyStyles({
                                    opacity: 1
                                });
                            });
                            
                            if (_this._CurrBgIndex !== -1)
                            {
                                _this.Backgrounds.ElementAt(_this._CurrBgIndex).AnimationElement().animate({
                                    opacity: 1
                                }, 500, "linear");
                            }
                            _this.IconBox.AnimationElement().animate({
                                opacity: 1
                            }, 500, "linear");
                        });
                    }
                }
            }
            return this.HasClass("Flipped");
        }

        CycleBackground()
        {
            if (this.Backgrounds.Count() > 0  && this.ActuallyVisible() && this.ActuallyEnabled())
            {
                this.ShowBackground(this._CurrBgIndex + 1 == this.Backgrounds.Count() ? 0 : this._CurrBgIndex + 1);
            }
        }
        _CurrBgIndex: number = -1;
        _ShowingBg: boolean = false;
        ShowBackground(index: number)
        {
            if (!this._ShowingBg && index !== this._CurrBgIndex && index > -1 && index < this.Backgrounds.Count())
            {
                this._ShowingBg = true;
                
                var bg = this.Backgrounds.ElementAt(index);
                bg.SetPosition(TileBackgroundPositions.OffTop);
                
                var _this = this;
                    
                if (Modernizr.csstransitions)
                {
                    setTimeout(function ()
                    {
                        bg.SetPosition(TileBackgroundPositions.In);
                        _this.HideBackground(function ()
                        {
                            _this._CurrBgIndex = index;
                            _this._ShowingBg = false;
                        });
                    }, 2000);
                }
                else
                {
                    var animElem = bg.AnimationElement();
                    
                    this.HideBackground(function ()
                    {
                        _this._CurrBgIndex = index;
                    });

                    animElem.animate({
                        top: 0
                    }, 1000, "linear", function ()
                    {
                        bg.ApplyStyle("top", "");
                        bg.SetPosition(TileBackgroundPositions.In);
                        
                        _this._CurrBgIndex = index;
                        _this._ShowingBg = false;
                    });
                }
            }
        }
        _HidingBg: boolean = false;
        HideBackground(callback?: ()=>void)
        {

            if (!this._HidingBg && this._CurrBgIndex != -1 && this._CurrBgIndex < this.Backgrounds.Count())
            {
                this._HidingBg = true;
                var bg = this.Backgrounds.ElementAt(this._CurrBgIndex);
                var _this = this;

                if (Modernizr.csstransitions)
                {
                    bg.SetPosition(TileBackgroundPositions.OffBottom);

                    setTimeout(function ()
                    {
                        _this._HidingBg = false;
                        
                        _this._CurrBgIndex = -1;
                        if (callback)
                        {
                            callback();
                        }
                    }, 2000);
                }
                else
                {
                    var animElem = bg.AnimationElement();

                    animElem.animate({
                        top: "100%"
                    }, 1000, "linear", function ()
                    {
                        bg.ApplyStyle("top", "");
                        bg.SetPosition(TileBackgroundPositions.OffBottom);
                        
                        _this._CurrBgIndex = -1;
                        _this._HidingBg = false;

                        if (callback)
                        {
                            callback();
                        }
                    });
                }
            }
            else if (callback)
            {
                callback();
            }
        }

        InvokeDefaultAction(): void
        {
            this._rootElement.click();
        }
    }
}
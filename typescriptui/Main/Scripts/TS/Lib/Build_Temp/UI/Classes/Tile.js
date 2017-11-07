var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
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
    (function (UI) {
        var Tile = (function (_super) {
            __extends(Tile, _super);
            function Tile(size, type) {
                if (typeof size === "undefined") { size = UI.TileSizes.Large; }
                if (typeof type === "undefined") { type = UI.TileTypes.Flip; }
                _super.call(this);
                this.Backgrounds = new TSUI.Collections.List();
                this._Size = null;
                this._Type = null;
                this.MaxTime = 12000;
                this.MinTime = 6000;
                this.ShouldCycle = true;
                this._CycleCallback = null;
                this._CycleRef = -1;
                this._CycleTime = -1;
                this.doCycle = true;
                this._CurrBgIndex = -1;
                this._ShowingBg = false;
                this._HidingBg = false;

                this._rootElement.addClass("Tile");

                this.Focusable(true);

                this.NameLabel = new UI.Label();
                this.NameLabel.AddClass("Name");
                this.Children.Add(this.NameLabel);

                this.TextLabel = new UI.Label();
                this.TextLabel.AddClass("Text");
                this.Children.Add(this.TextLabel);

                this.IconBox = new UI.TileIcon();
                this.Children.Add(this.IconBox);

                this.Counter = new UI.TileCounter();
                this.Children.Add(this.Counter);

                this.Size(size);
                this.Type(type);

                this.Backgrounds.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._Backgrounds_Modified, this));
            }
            Tile.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                _super.prototype.ConstructDOM.call(this, parent, onComplete);

                this.StartCycle();
            };

            Tile.prototype._Backgrounds_Modified = function (eventArgs) {
                switch (eventArgs.Modification) {
                    case TSUI.Events.CollectionModifications.Add:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            this._ConstructBackground(elem);
                        }
                        if (this._CurrBgIndex === -1) {
                            this.ShowBackground(0);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Remove:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            elem.DestroyDOM();
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        break;
                }
            };
            Tile.prototype._ConstructBackground = function (bg) {
                bg.SetPosition(UI.TileBackgroundPositions.OffTop);
                this.Children.Add(bg);
            };

            Tile.prototype.Size = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Size = value;

                    this.RemoveClass("LargeSquare");
                    this.RemoveClass("Large");
                    this.RemoveClass("Medium");
                    this.RemoveClass("Small");
                    switch (value) {
                        case UI.TileSizes.Small:
                            this.AddClass("Small");
                            break;
                        case UI.TileSizes.Medium:
                            this.AddClass("Medium");
                            break;
                        case UI.TileSizes.Large:
                            this.AddClass("Large");
                            break;
                        case UI.TileSizes.LargeSquare:
                            this.AddClass("LargeSquare");
                            break;
                    }
                }
                return this._Size;
            };

            Tile.prototype.Type = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Type = value;

                    this.RemoveClass("Flip");
                    this.RemoveClass("Iconic");
                    this.RemoveClass("Cycle");
                    switch (value) {
                        case UI.TileTypes.Flip:
                            this.AddClass("Flip");
                            this.StartCycle();
                            break;
                        case UI.TileTypes.Iconic:
                            this.AddClass("Iconic");
                            this.StopCycle();
                            this.HideBackground();
                            break;
                        case UI.TileTypes.Cycle:
                            this.AddClass("Cycle");
                            this.StartCycle();
                            break;
                    }
                }
                return this._Type;
            };

            Tile.prototype.ShowCounter = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (value && !this.ShowCounter()) {
                        this.RemoveClass("NoCounter");
                    } else if (!value && this.ShowCounter()) {
                        this.AddClass("NoCounter");
                    }
                }
                return !this.HasClass("NoCounter");
            };

            Tile.prototype.StartCycle = function () {
                if (this._CycleCallback === null && this.ShouldCycle && this.DOMConstructed) {
                    var _this = this;
                    this._CycleTime = (Math.random() * (_this.MaxTime - _this.MinTime)) + _this.MinTime;
                    this._CycleCallback = new TSUI.Animation.AnimationCallback(this._OnCycle, this);
                    this._SetupCycleTimeout();
                }
            };
            Tile.prototype.StopCycle = function () {
                if (this._CycleCallback !== null) {
                    TSUI.Animation.UnregisterAnimationCallback(this._CycleCallback);
                    this._CycleCallback = null;
                }
                if (this._CycleRef !== -1) {
                    clearTimeout(this._CycleRef);
                    this._CycleRef = -1;
                }
            };

            Tile.prototype._SetupCycleTimeout = function () {
                if (this._CycleCallback !== null) {
                    var _this = this;
                    this._CycleRef = setTimeout(function () {
                        TSUI.Animation.RegisterAnimationForSingleCallback(_this._CycleCallback);
                    }, this._CycleTime);
                }
            };

            Tile.prototype._OnCycle = function (TotalElapsedTime) {
                if (this.ActuallyEnabled()) {
                    if (this.Type() === UI.TileTypes.Flip) {
                        this.Flip();
                    } else if (this.Type() === UI.TileTypes.Cycle) {
                        this.CycleBackground();
                    }
                }
                this._SetupCycleTimeout();
            };

            Tile.prototype.Flip = function () {
                this.Flipped(!this.Flipped());
            };
            Tile.prototype.Flipped = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null && this.ActuallyVisible() && this.ActuallyEnabled()) {
                    if (value && !this.Flipped()) {
                        if (Modernizr.csstransitions || this.Size() === UI.TileSizes.Small) {
                            this.AddClass("Flipped");
                        } else {
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
                            }, 500, "linear", function () {
                                _this.TextLabel.AnimationElement().animate({
                                    opacity: 1
                                }, 500, "linear", function () {
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
                            if (_this._CurrBgIndex !== -1) {
                                _this.Backgrounds.ElementAt(_this._CurrBgIndex).AnimationElement().animate({
                                    opacity: 0
                                }, 500, "linear");
                            }
                            _this.IconBox.AnimationElement().animate({
                                opacity: 0
                            }, 500, "linear");
                        }
                    } else if (!value && this.Flipped()) {
                        if (Modernizr.csstransitions || this.Size() === UI.TileSizes.Small) {
                            this.RemoveClass("Flipped");
                        } else {
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
                            }, 500, "linear", function () {
                                _this.Counter.AnimationElement().animate({
                                    opacity: 1
                                }, 500, "linear", function () {
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

                                if (_this._CurrBgIndex !== -1) {
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
            };

            Tile.prototype.CycleBackground = function () {
                if (this.Backgrounds.Count() > 0 && this.ActuallyVisible() && this.ActuallyEnabled()) {
                    this.ShowBackground(this._CurrBgIndex + 1 == this.Backgrounds.Count() ? 0 : this._CurrBgIndex + 1);
                }
            };

            Tile.prototype.ShowBackground = function (index) {
                if (!this._ShowingBg && index !== this._CurrBgIndex && index > -1 && index < this.Backgrounds.Count()) {
                    this._ShowingBg = true;

                    var bg = this.Backgrounds.ElementAt(index);
                    bg.SetPosition(UI.TileBackgroundPositions.OffTop);

                    var _this = this;

                    if (Modernizr.csstransitions) {
                        setTimeout(function () {
                            bg.SetPosition(UI.TileBackgroundPositions.In);
                            _this.HideBackground(function () {
                                _this._CurrBgIndex = index;
                                _this._ShowingBg = false;
                            });
                        }, 2000);
                    } else {
                        var animElem = bg.AnimationElement();

                        this.HideBackground(function () {
                            _this._CurrBgIndex = index;
                        });

                        animElem.animate({
                            top: 0
                        }, 1000, "linear", function () {
                            bg.ApplyStyle("top", "");
                            bg.SetPosition(UI.TileBackgroundPositions.In);

                            _this._CurrBgIndex = index;
                            _this._ShowingBg = false;
                        });
                    }
                }
            };

            Tile.prototype.HideBackground = function (callback) {
                if (!this._HidingBg && this._CurrBgIndex != -1 && this._CurrBgIndex < this.Backgrounds.Count()) {
                    this._HidingBg = true;
                    var bg = this.Backgrounds.ElementAt(this._CurrBgIndex);
                    var _this = this;

                    if (Modernizr.csstransitions) {
                        bg.SetPosition(UI.TileBackgroundPositions.OffBottom);

                        setTimeout(function () {
                            _this._HidingBg = false;

                            _this._CurrBgIndex = -1;
                            if (callback) {
                                callback();
                            }
                        }, 2000);
                    } else {
                        var animElem = bg.AnimationElement();

                        animElem.animate({
                            top: "100%"
                        }, 1000, "linear", function () {
                            bg.ApplyStyle("top", "");
                            bg.SetPosition(UI.TileBackgroundPositions.OffBottom);

                            _this._CurrBgIndex = -1;
                            _this._HidingBg = false;

                            if (callback) {
                                callback();
                            }
                        });
                    }
                } else if (callback) {
                    callback();
                }
            };

            Tile.prototype.InvokeDefaultAction = function () {
                this._rootElement.click();
            };
            return Tile;
        })(UI.Control);
        UI.Tile = Tile;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

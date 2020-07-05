///<reference path="IControl.d.ts"/>
///<reference path="Control.ts"/>
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        class ContentControl extends UI.Control {
            constructor() {
                super();
                this.Children = new Rubik.Collections.List();
                this._This_Resized_ChainHandler_Timeout = -1;
                this._This_Moved_ChainHandler_Timeout = -1;
                this.OnResize.Attach(new Rubik.Events.ResizeEventHandler(this._This_Resized_ChainHandler, this));
                this.OnMove.Attach(new Rubik.Events.MoveEventHandler(this._This_Moved_ChainHandler, this));
                this.Children.OnModified.Attach(new Rubik.Collections.CollectionModifiedEventHandler(this.OnChildrenModified, this));
            }
            ConstructDOM(parent, onComplete = null) {
                super.ConstructDOM(parent, onComplete);
                if (!this.OptimiseConstructForGraphics) {
                    for (var i = 0; i < this.Children.Count(); i++) {
                        var child = this.Children.ElementAt(i);
                        child.ConstructDOM(this._rootElement);
                    }
                    if (onComplete) {
                        onComplete();
                    }
                }
                else if (this.Children.Count() > 0) {
                    var i = 0;
                    var __this = this;
                    var func = function () {
                        var child = __this.Children.ElementAt(i);
                        if (!!child) {
                            child.OptimiseConstructForGraphics = true;
                            child.ConstructDOM(__this._rootElement, function () {
                                i++;
                                if (i < __this.Children.Count()) {
                                    setTimeout(func, UI.Control.OptimiseConstructForGraphics_DelayTime);
                                }
                                else if (onComplete) {
                                    onComplete();
                                }
                            });
                        }
                        else {
                            i++;
                            if (i < __this.Children.Count()) {
                                setTimeout(func, UI.Control.OptimiseConstructForGraphics_DelayTime);
                            }
                            else if (onComplete) {
                                onComplete();
                            }
                        }
                    };
                    func();
                }
                else if (onComplete) {
                    onComplete();
                }
            }
            DestroyDOM() {
                super.DestroyDOM();
                for (var i = 0; i < this.Children.Count(); i++) {
                    this.Children.ElementAt(i).DestroyDOM();
                }
            }
            SetParentVisible(value) {
                super.SetParentVisible(value);
                var len = this.Children.Count();
                for (var i = 0; i < len; i++) {
                    this.Children.ElementAt(i).SetParentVisible(value);
                }
            }
            Visible(value = null) {
                super.Visible(value);
                if (value !== null) {
                    var len = this.Children.Count();
                    for (var i = 0; i < len; i++) {
                        this.Children.ElementAt(i).SetParentVisible(value);
                    }
                }
                return this._rootElement.css("visibility") !== "hidden" && this._rootElement.css("display") !== "none";
            }
            EnableByParent() {
                super.EnableByParent();
                if (this._Enabled) {
                    for (var i = 0; i < this.Children.Count(); i++) {
                        var elem = this.Children.ElementAt(i);
                        if (elem) {
                            elem.EnableByParent();
                        }
                    }
                }
            }
            DisableByParent() {
                super.DisableByParent();
                for (var i = 0; i < this.Children.Count(); i++) {
                    var elem = this.Children.ElementAt(i);
                    if (elem) {
                        elem.DisableByParent();
                    }
                }
            }
            Enabled(value = null) {
                if (value !== null) {
                    this._Enabled = value;
                    for (var i = 0; i < this.Children.Count(); i++) {
                        var elem = this.Children.ElementAt(i);
                        if (elem) {
                            if (this._Enabled) {
                                elem.EnableByParent();
                            }
                            else {
                                elem.DisableByParent();
                            }
                        }
                    }
                    this._HandleEnableSet(this._Enabled);
                }
                return this._Enabled;
            }
            _This_Resized_ChainHandler(eventArgs) {
                if (this._HandleChainEvents && this._This_Resized_ChainHandler_Timeout === -1) {
                    var __this = this;
                    this._This_Resized_ChainHandler_Timeout = setTimeout(function () {
                        for (var i = 0; i < __this.Children.Count(); i++) {
                            var elem = __this.Children.ElementAt(i);
                            if (elem) {
                                elem.OnResize.Invoke(eventArgs);
                            }
                        }
                        __this._This_Resized_ChainHandler_Timeout = -1;
                    }, 100);
                }
            }
            _This_Moved_ChainHandler(eventArgs) {
                if (this._HandleChainEvents && this._This_Moved_ChainHandler_Timeout === -1) {
                    var __this = this;
                    this._This_Moved_ChainHandler_Timeout = setTimeout(function () {
                        for (var i = 0; i < __this.Children.Count(); i++) {
                            var elem = __this.Children.ElementAt(i);
                            if (elem) {
                                elem.OnMove.Invoke(eventArgs);
                            }
                        }
                        __this._This_Moved_ChainHandler_Timeout = -1;
                    }, 100);
                }
            }
        }
        UI.ContentControl = ContentControl;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=ContentControl.js.map
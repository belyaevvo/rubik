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
    /// <reference path="../../Animation/IAnimator.d.ts" />
    /// <reference path="../../Animation/FadeAnimator.ts" />
    /// <reference path="../Interfaces/ITab.d.ts" />
    /// <reference path="Panel.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var Tab = (function (_super) {
            __extends(Tab, _super);
            function Tab() {
                _super.call(this);
                this.OnNameChange = new TSUI.Events.NameChangeEvent();
                this._Name = "A Tab";

                this._rootElement.addClass("Tab");

                this.ApplyStyle("display", "none");
            }
            Tab.prototype.Name = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    var oldVal = this._Name;
                    this._Name = value;
                    if (oldVal !== value) {
                        this.OnNameChange.Invoke(new TSUI.Events.NameChangeEventArgs(this, oldVal));
                    }
                }
                return this._Name;
            };

            Tab.prototype.Hide = function (callback, animator) {
                if (typeof animator === "undefined") { animator = new TSUI.Animation.FadeAnimator(); }
                var _this = this;
                _super.prototype.Hide.call(this, function () {
                    _this.AnimationElement().css({
                        display: "none"
                    });
                    if (callback) {
                        callback();
                    }
                }, animator);
            };
            return Tab;
        })(UI.Panel);
        UI.Tab = Tab;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

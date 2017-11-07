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
    /// <reference path="../Interfaces/IButton.d.ts" />
    /// <reference path="Label.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        /** A basic button control implementation. */
        var Button = (function (_super) {
            __extends(Button, _super);
            /** Creates a new Button control. */
            function Button() {
                _super.call(this);

                this._rootElement.addClass("Button");

                this.TextLabel = new UI.Label();
                this.Children.Add(this.TextLabel);

                this.Focusable(true);
            }
            /** Gets or sets the button text.
            @param value (Optional) The value to set the text to.
            @returns the value of the button's text.
            */
            Button.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.TextLabel.Text(value);
            };

            /** Invokes the button's click event. */
            Button.prototype.InvokeDefaultAction = function () {
                this._rootElement.click();
            };
            return Button;
        })(UI.Control);
        UI.Button = Button;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

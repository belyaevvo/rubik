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
    /// <reference path="Label.ts" />
    /// <reference path="Panel.ts" />
    /// <reference path="../Interfaces/IToggleButton.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var ToggleButton = (function (_super) {
            __extends(ToggleButton, _super);
            function ToggleButton(checked) {
                if (typeof checked === "undefined") { checked = false; }
                _super.call(this);

                this._rootElement.addClass("ToggleButton");

                this.OnCheckedChange = new TSUI.Events.CheckedChangeEvent();

                this.Focusable(true);

                this.TogglePanel = new UI.Panel();
                this.TogglePanel.AddClass("TogglePanel");
                this.Children.Add(this.TogglePanel);
                this.TogglePanelInner = new UI.Panel();
                this.TogglePanelInner.AddClass("TogglePanelInner");
                this.TogglePanel.Children.Add(this.TogglePanelInner);

                this.WhitePanel = new UI.Panel();
                this.WhitePanel.AddClass("White");
                this.TogglePanelInner.Children.Add(this.WhitePanel);
                this.BluePanel = new UI.Panel();
                this.BluePanel.AddClass("Blue");
                this.TogglePanelInner.Children.Add(this.BluePanel);
                this.GripBox = new UI.Panel();
                this.GripBox.AddClass("Grip");
                this.Children.Add(this.GripBox);

                this.TextLabel = new UI.Label("Off");
                this.Children.Add(this.TextLabel);

                this.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._This_OnClick, this));

                this.Checked(checked);
            }
            ToggleButton.prototype._This_OnClick = function (eventArgs) {
                if (this.ActuallyEnabled()) {
                    this.Checked(!this.Checked());
                }
            };

            ToggleButton.prototype.Checked = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    var oldVal = this.Checked();

                    if (value) {
                        this._rootElement.addClass("On");
                        this.Text("On");
                    } else {
                        this._rootElement.removeClass("On");
                        this.Text("Off");
                    }
                    if (value !== oldVal) {
                        this.OnCheckedChange.Invoke(new TSUI.Events.CheckedChangeEventArgs(this));
                    }
                }
                return this._rootElement.hasClass("On");
            };

            ToggleButton.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this.TextLabel.Text(value);
            };

            ToggleButton.prototype.InvokeDefaultAction = function () {
                this._rootElement.click();
            };
            return ToggleButton;
        })(UI.Control);
        UI.ToggleButton = ToggleButton;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

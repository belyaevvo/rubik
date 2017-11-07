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
    /// <reference path="../../Interfaces/Windows/ILoginWindow.d.ts" />
    /// <reference path="Window.ts" />
    /// <reference path="../TextBox.ts" />
    /// <reference path="../StackPanel.ts" />
    /// <reference path="../StackPanelRow.ts" />
    (function (UI) {
        var DesktopLoginWindow = (function (_super) {
            __extends(DesktopLoginWindow, _super);
            function DesktopLoginWindow() {
                _super.call(this);

                this.AddClass("LoginWindow");

                this.Title("Login");

                this.ResizeEnabled(false);

                this.CentralisingPanel = new TSUI.UI.Panel();
                this.CentralisingPanel.AddClass("Centralise");
                this.CentralisingPanel.RelativeLayoutOn();
                this.ContentPanel.Children.Add(this.CentralisingPanel);

                this.ControlsStackPanel = new TSUI.UI.StackPanel();
                this.ControlsStackPanel.RelativeLayoutOn();
                this.CentralisingPanel.Children.Add(this.ControlsStackPanel);

                this.UsernameRow = new TSUI.UI.StackPanelRow();
                this.ControlsStackPanel.Rows.Add(this.UsernameRow);
                this.PasswordRow = new TSUI.UI.StackPanelRow();
                this.ControlsStackPanel.Rows.Add(this.PasswordRow);
                this.LoginRow = new TSUI.UI.StackPanelRow();
                this.ControlsStackPanel.Rows.Add(this.LoginRow);

                this.UsernameLabel = new TSUI.UI.Label("Username : ");
                this.UsernameLabel.RelativeLayoutOn();
                this.UsernameRow.Children.Add(this.UsernameLabel);

                this.UsernameBox = new TSUI.UI.TextBox();
                this.UsernameBox.RelativeLayoutOn();
                this.UsernameRow.Children.Add(this.UsernameBox);

                this.PasswordLabel = new TSUI.UI.Label("Password : ");
                this.PasswordLabel.RelativeLayoutOn();
                this.PasswordRow.Children.Add(this.PasswordLabel);

                this.PasswordBox = new TSUI.UI.TextBox();
                this.PasswordBox.Masked(true);
                this.PasswordBox.RelativeLayoutOn();
                this.PasswordRow.Children.Add(this.PasswordBox);

                this.LoginButton = new TSUI.UI.Button();
                this.LoginButton.Text("Login");
                this.LoginButton.Width(new TSUI.UI.CSSNumber(197));
                this.LoginButton.RelativeLayoutOn();
                this.LoginRow.Children.Add(this.LoginButton);
            }
            return DesktopLoginWindow;
        })(TSUI.UI.Window);
        UI.DesktopLoginWindow = DesktopLoginWindow;
        var MobileLoginWindow = (function (_super) {
            __extends(MobileLoginWindow, _super);
            function MobileLoginWindow() {
                _super.call(this);

                this.AddClass("Mobile");

                this.Title("Mobile Login");
            }
            return MobileLoginWindow;
        })(DesktopLoginWindow);
        UI.MobileLoginWindow = MobileLoginWindow;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

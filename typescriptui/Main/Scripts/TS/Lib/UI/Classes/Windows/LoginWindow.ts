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

module TSUI.UI
{
    export class DesktopLoginWindow extends UI.Window implements ILoginWindow
    {
        CentralisingPanel: UI.IPanel;
        
        ControlsStackPanel: UI.IStackPanel;
        UsernameRow: UI.IStackPanelRow;
        PasswordRow: UI.IStackPanelRow;
        LoginRow: UI.IStackPanelRow;

        public UsernameLabel: UI.ILabel;
        public UsernameBox: UI.ITextBox;
        public PasswordLabel: UI.ILabel;
        public PasswordBox: UI.ITextBox;
        public LoginButton: UI.IButton;

        constructor()
        {
            super();

            this.AddClass("LoginWindow");

            this.Title("Login");

            this.ResizeEnabled(false);

            this.CentralisingPanel = new UI.Panel()
            this.CentralisingPanel.AddClass("Centralise");
            this.CentralisingPanel.RelativeLayoutOn();
            this.ContentPanel.Children.Add(this.CentralisingPanel);

            this.ControlsStackPanel = new UI.StackPanel();
            this.ControlsStackPanel.RelativeLayoutOn();
            this.CentralisingPanel.Children.Add(this.ControlsStackPanel);

            this.UsernameRow = new UI.StackPanelRow();
            this.ControlsStackPanel.Rows.Add(this.UsernameRow);
            this.PasswordRow = new UI.StackPanelRow();
            this.ControlsStackPanel.Rows.Add(this.PasswordRow);
            this.LoginRow = new UI.StackPanelRow();
            this.ControlsStackPanel.Rows.Add(this.LoginRow);

            this.UsernameLabel = new UI.Label("Username : ");
            this.UsernameLabel.RelativeLayoutOn();
            this.UsernameRow.Children.Add(this.UsernameLabel);
            
            this.UsernameBox = new UI.TextBox();
            this.UsernameBox.RelativeLayoutOn();
            this.UsernameRow.Children.Add(this.UsernameBox);

            this.PasswordLabel = new UI.Label("Password : ");
            this.PasswordLabel.RelativeLayoutOn();
            this.PasswordRow.Children.Add(this.PasswordLabel);
            
            this.PasswordBox = new UI.TextBox();
            this.PasswordBox.Masked(true);
            this.PasswordBox.RelativeLayoutOn();
            this.PasswordRow.Children.Add(this.PasswordBox);

            this.LoginButton = new UI.Button();
            this.LoginButton.Text("Login");
            this.LoginButton.Width(new UI.CSSNumber(197));
            this.LoginButton.RelativeLayoutOn();
            this.LoginRow.Children.Add(this.LoginButton);
        }
    }
    export class MobileLoginWindow extends DesktopLoginWindow implements ILoginWindow
    {
        constructor()
        {
            super();

            this.AddClass("Mobile");

            this.Title("Mobile Login");
       }
    }
}
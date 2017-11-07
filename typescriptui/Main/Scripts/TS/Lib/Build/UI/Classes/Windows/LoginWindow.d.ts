/// <reference path="../../../UI/Interfaces/Windows/ILoginWindow.d.ts" />
/// <reference path="Window.d.ts" />
/// <reference path="../TextBox.d.ts" />
/// <reference path="../StackPanel.d.ts" />
/// <reference path="../StackPanelRow.d.ts" />
declare module TSUI.UI {
    class DesktopLoginWindow extends UI.Window implements UI.ILoginWindow {
        public CentralisingPanel: UI.IPanel;
        public ControlsStackPanel: UI.IStackPanel;
        public UsernameRow: UI.IStackPanelRow;
        public PasswordRow: UI.IStackPanelRow;
        public LoginRow: UI.IStackPanelRow;
        public UsernameLabel: UI.ILabel;
        public UsernameBox: UI.ITextBox;
        public PasswordLabel: UI.ILabel;
        public PasswordBox: UI.ITextBox;
        public LoginButton: UI.IButton;
        constructor();
    }
    class MobileLoginWindow extends DesktopLoginWindow implements UI.ILoginWindow {
        constructor();
    }
}

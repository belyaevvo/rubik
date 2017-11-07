/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IWindow.d.ts" />

declare module TSUI.UI
{
    /** Defines a basic login window. Includes the fundamental controls required by most login windows. */
    export interface ILoginWindow extends IWindow
    {
        /** The label  */
        UsernameLabel: UI.ILabel;
        /** See LoginWindow class for more details. */
        UsernameBox: UI.ITextBox;
        /** See LoginWindow class for more details. */
        PasswordLabel: UI.ILabel;
        /** See LoginWindow class for more details. */
        PasswordBox: UI.ITextBox;
        /** See LoginWindow class for more details. */
        LoginButton: UI.IButton;
    }
}
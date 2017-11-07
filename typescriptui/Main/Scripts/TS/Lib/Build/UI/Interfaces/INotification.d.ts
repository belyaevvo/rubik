/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.
 - 6/Sep/13 : Added inline documentation.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IControl.d.ts" />
/// <reference path="IButton.d.ts" />

declare module TSUI.UI
{
    /** Defines a Notification control. */
    export interface INotification extends IControl
    {
        /** The notification's close button. */
        CloseButton: IButton;

        /** Fired when the notification is closed. */
        OnClose: Events.CloseEvent;

        /** Gets or sets the text of the notification.
            @param value The value to set the text to.
            @returns The actual value of the text.
        */
        Text(value?: string): string;

        /** Shows the notification for the specified amount of time using the specified animator to show/hide. 
            @param seconds The number of seconds to show the notification for.
            @param callback The callback to call when the notification is shown.
            @returns Void.
        */
        ShowFor(seconds: number, callback?: () => void, animator?: Animation.IAnimator): void;
        
        /** Internal method for restacking notifications when one or more closes. Do not use externally. */
        _Restack(): void;
    }
}
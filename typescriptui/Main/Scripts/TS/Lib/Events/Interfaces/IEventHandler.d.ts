/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IEventArgs.d.ts" />

declare module TSUI.Events
{
    /** Defines an EventHandler. See EventHandler class.*/
    export interface IEventHandler
    {
        /** See EventHandler class for more details. */
        Callback: (args: IEventArgs) => void;
        /** See EventHandler class for more details. */
        Context: any;
        /** See EventHandler class for more details. */
        Invoke(args: IEventArgs): void;
    }
}
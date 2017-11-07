/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IEventHandler.d.ts" />
/// <reference path="IEventArgs.d.ts" />

declare module TSUI.Events
{
    /** Defines an Event. See Event class. */
    export interface IEvent
    {
        /** See Event class for more details. */
        Handlers: IEventHandler[];
        /** See Event class for more details. */
        OnHandlerAttached: () => void;
        /** See Event class for more details. */
        OnHandlerAttachedContext: any;
        /** See Event class for more details. */
        OnHandlerDettached: () => void;
        /** See Event class for more details. */
        OnHandlerDettachedContext: any;
        
        /** See Event class for more details. */
        Attach(handler: IEventHandler): void;
        /** See Event class for more details. */
        Detach(handler: IEventHandler): void;
        
        /** See Event class for more details. */
        IsAttached(handler: IEventHandler): boolean;
        
        /** See Event class for more details. */
        Invoke(args: IEventArgs);
    }
}
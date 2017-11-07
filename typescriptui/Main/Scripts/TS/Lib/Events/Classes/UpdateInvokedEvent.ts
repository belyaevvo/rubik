/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Data/Interfaces/IDataUpdater.d.ts" />
/// <reference path="Event.ts" />
/// <reference path="../Interfaces/IEventHandler.d.ts" />
/// <reference path="../Interfaces/IEventArgs.d.ts" />
/// <reference path="../Interfaces/IEvent.d.ts" />

module TSUI.Events
{        
    //#region Update Invoked Event
    
    /** See Event for more details. */
    export class UpdateInvokedEvent extends Event
    {
        Handlers: UpdateInvokedEventHandler[] = [];

        Attach(handler: UpdateInvokedEventHandler): void
        {
            super.Attach(handler);
        }
        Detach(handler: UpdateInvokedEventHandler): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: UpdateInvokedEventHandler): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.UpdateInvokedEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class UpdateInvokedEventHandler extends EventHandler
    {
        constructor(public Callback: (args: UpdateInvokedEventArgs) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: UpdateInvokedEventArgs)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details.*/
    export class UpdateInvokedEventArgs extends EventArgs
    {
        constructor(public Sender: Data.IDataUpdater)
        {
            super(Sender);
        }
    }

    //#endregion
}
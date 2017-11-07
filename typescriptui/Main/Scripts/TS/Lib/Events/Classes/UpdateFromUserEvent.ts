/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.
 - 28/Aug/13 : Corrected IDataBindng.d.ts to IDataBinding.d.ts (in the reference)

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Data/Enums/DataAccessStatuses.ts" />
/// <reference path="../../Data/Interfaces/IDataBinding.d.ts" />
/// <reference path="Event.ts" />
/// <reference path="../Interfaces/IEventHandler.d.ts" />
/// <reference path="../Interfaces/IEventArgs.d.ts" />
/// <reference path="../Interfaces/IEvent.d.ts" />

module TSUI.Events
{        
    //#region Update From User Event
    
    /** See Event for more details. */
    export class UpdateFromUserEvent<I, O> extends Event
    {
        Handlers: UpdateFromUserEventHandler<I, O>[] = [];

        Attach(handler: UpdateFromUserEventHandler<I, O>): void
        {
            super.Attach(handler);
        }
        Detach(handler: UpdateFromUserEventHandler<I, O>): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: UpdateFromUserEventHandler<I, O>): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.UpdateFromUserEventArgs<I, O>)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class UpdateFromUserEventHandler<I, O> extends EventHandler
    {
        constructor(public Callback: (args: UpdateFromUserEventArgs<I, O>) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: UpdateFromUserEventArgs<I, O>)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details.*/
    export class UpdateFromUserEventArgs<I, O> extends EventArgs
    {
        constructor(public Sender: Data.IDataBinding<I, O>, public Status: Data.DataAccessStatuses)
        {
            super(Sender);
        }
    }

    //#endregion
}
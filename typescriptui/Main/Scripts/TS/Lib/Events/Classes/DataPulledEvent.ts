/// <reference path="../../Data/Interfaces/IDataAccessResult.d.ts" />
/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Data/Enums/DataAccessStatuses.ts" />
/// <reference path="../../Data/Interfaces/IDataAccessor.d.ts" />
/// <reference path="Event.ts" />
/// <reference path="../Interfaces/IEventHandler.d.ts" />
/// <reference path="../Interfaces/IEventArgs.d.ts" />
/// <reference path="../Interfaces/IEvent.d.ts" />

module TSUI.Events
{        
    //#region Data Pulled Event
    
    /** See Event for more details. */
    export class DataPulledEvent<T> extends Event
    {
        Handlers: DataPulledEventHandler<T>[] = [];

        Attach(handler: DataPulledEventHandler<T>): void
        {
            super.Attach(handler);
        }
        Detach(handler: DataPulledEventHandler<T>): void
        {
            super.Detach(handler);
        }

        IsAttached(handler: DataPulledEventHandler<T>): boolean
        {
            return super.IsAttached(handler);
        }

        Invoke(args: Events.DataPulledEventArgs<T>)
        {
            super.Invoke(args);
        }
    }
    /** See EventHandler for more details. */
    export class DataPulledEventHandler<T> extends EventHandler
    {
        constructor(public Callback: (args: DataPulledEventArgs<T>) => void , public Context: any)
        {
            super(Callback, Context);
        }

        Invoke(args: DataPulledEventArgs<T>)
        {
            super.Invoke(args);
        }
    }
    /** See EventArgs for more details.*/
    export class DataPulledEventArgs<T> extends EventArgs
    {
        constructor(public Sender: Data.IDataAccessor<T>, public Result: Data.IDataAccessResult<T>)
        {
            super(Sender);
        }
    }

    //#endregion
}
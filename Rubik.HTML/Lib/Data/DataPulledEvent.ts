/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="DataAccessStatuses.ts" />
/// <reference path="IDataAccessor.d.ts" />
/// <reference path="../Events/Event.ts" />
/// <reference path="../Events/IEventHandler.d.ts" />
/// <reference path="../Events/IEventArgs.d.ts" />
/// <reference path="../Events/IEvent.d.ts" />

module Rubik.Data
{        
    //#region Data Pulled Event
    
    /** See Event for more details. */
    export class DataPulledEvent<T> extends Events.Event<DataPulledEventArgs<T>> {}
    /** See EventHandler for more details. */
    export class DataPulledEventHandler<T> extends Events.EventHandler<DataPulledEventArgs<T>> { }
    
    /** See EventArgs for more details.*/
    export class DataPulledEventArgs<T> extends Events.EventArgs
    {
        constructor(public Sender: IDataAccessor<T>, public Result: IDataAccessResult<T>)
        {
            super(Sender);
        }
    }

    //#endregion
}
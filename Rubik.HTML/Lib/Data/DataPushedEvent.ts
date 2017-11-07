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

module Rubik.Data {
    /** See Event for more details. */
    export class DataPushedEvent<T> extends Events.Event<DataPushedEventArgs<T>> { }

    /** See EventHandler for more details. */
    export class DataPushedEventHandler<T> extends Events.EventHandler<DataPushedEventArgs<T>> { }

    /** See EventArgs for more details.
        Note: Success paramter indicates whether the push was successful.
    */
    export class DataPushedEventArgs<T> extends Events.EventArgs {
        constructor(public Sender: IDataAccessor<T>, public Result: IDataAccessResult<T>) {
            super(Sender);
        }
    }
}
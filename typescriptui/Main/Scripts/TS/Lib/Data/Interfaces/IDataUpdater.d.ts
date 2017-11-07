/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13  : Initial version.
 - 24/Aug/13 : Fleshed out interface to the specification.
 - 25/Aug/13 : - Updated UpdateBindings method so it makes more sense - added the params.
               - Added GetBindings delegate property.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Events/Classes/UpdateInvokedEvent.ts" />
/// <reference path="../../Events/Classes/UpdateEndEvent.ts" />
/// <reference path="../../Events/Classes/UpdateBeginEvent.ts" />
/// <reference path="../../Collections/Classes/List.ts" />
/// <reference path="IDataBinding.d.ts" />

declare module TSUI.Data
{
    /** Defines the structure for a data updater. Data updaters can be used to call updates on all the bindings in a binding group either manually or at a regular interval. */
    export interface IDataUpdater
    {
        /** 
            Updates all the bindings in the specified collection. May abort updating any remaining bindings if a binding fails to update.
            @param bindings The collection of bindings to update.
            @param abortOnFailure Whether to abort updating bindings if a binding fails to update.
            @returns The number of bindings which failed to update.
        */
        UpdateBindings(abortOnFailure?: boolean, bindings?: Collections.IList<IDataBinding<any, any>>): number;
        /** Set this delegate to a method which returns the data bindings to be updated when UpdateBindings is called (must be set for updaters which user intervals). */
        GetBindings: () => Collections.IList<IDataBinding<any, any>>;
        /** Gets or sets the interval with which to update the bindings. Set to -1 to disable periodic updating.
            @param value The interval (time in seconds) to wait between updates.
            @returns The interval time (in seconds) or -1 (indicates no interval)
        */
        Interval(value?: number): number;
        /** Fired when an update is invoked (either from timer or externally using UpdateBindings). This occurs before OnUpdateBegin. Some invokes may be ignored and in those cases OnUpdateBegin/OnUpdateEnd will not be fired. */
        OnUpdateInvoked: Events.UpdateInvokedEvent;
        /** Fired when update of a data bindings begins. This should be attached to for detecting when an update actually begins. */
        OnUpdateBegin: Events.UpdateBeginEvent;
        /** Fired when update of a data bindings ends. This should be attached to for detecting when an update ends and the status on that update. */
        OnUpdateEnd: Events.UpdateEndEvent;
    }
}
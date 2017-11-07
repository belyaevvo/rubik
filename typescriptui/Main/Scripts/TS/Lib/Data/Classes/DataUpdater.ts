/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Aug 28 21:05 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 28/Aug/13  : Initial version.
 
License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Events/Classes/UpdateInvokedEvent.ts" />
/// <reference path="../../Events/Classes/UpdateEndEvent.ts" />
/// <reference path="../../Events/Classes/UpdateBeginEvent.ts" />
/// <reference path="../../Collections/Classes/List.ts" />
/// <reference path="../Interfaces/IDataBinding.d.ts" />
/// <reference path="../Interfaces/IDataUpdater.d.ts" />

module TSUI.Data
{
    /** Defines the structure for a data updater. Data updaters can be used to call updates on all the bindings in a binding group either manually or at a regular interval. */
    export class DataUpdater implements IDataUpdater
    {
        /** Creates a new DataUpdater. 
            @returns A new data updater.
        */
        constructor();
        /** Creates a new DataUpdater.
            @param getBindings A function which returns the list of data bindings to update.
            @returns A new data updater.
        */
        constructor(getBindings: () => Collections.IList<IDataBinding<any, any>>);
        /** Creates a new DataUpdater.
            @param getBindings A function which returns the list of data bindings to update.
            @param interval The interval with which to update the bindings.
            @returns A new data updater.
        */
        constructor(getBindings: () => Collections.IList<IDataBinding<any, any>>, interval: number);

        /** Creates a new DataUpdater.
            @param getBindings A function which returns the list of data bindings to update. Default: null meaning automatic updates will not work.
            @param interval The interval with which to update the bindings. Default: -1 indicating no automatic udpates.
            @returns A new data updater.
        */
        constructor(getBindings: () => Collections.IList<IDataBinding<any, any>> = null, interval: number = -1)
        {
            this.GetBindings = getBindings;
            this.Interval(interval);
        }

        /** Updates all the bindings in the specified collection. May abort updating any remaining bindings if a binding fails to update.
            @param bindings The collection of bindings to update.
            @param abortOnFailure Whether to abort updating bindings if a binding fails to update.
            @returns The number of bindings which failed to update (or start to update if accessors are asynchronous).
        */
        UpdateBindings(abortOnFailure: boolean = false, bindings: Collections.IList<IDataBinding<any, any>> = null): number
        {
            this.OnUpdateInvoked.Invoke(new Events.UpdateInvokedEventArgs(this));

            if (bindings === null)
            {
                if (this.GetBindings !== null)
                {
                    bindings = this.GetBindings();
                }
                else
                {
                    throw "No bindings to update! bindings = null.";
                }
            }

            var numFailed = 0;

            if (bindings !== null && bindings.Count() > 0)
            {
                this.OnUpdateBegin.Invoke(new Events.UpdateBeginEventArgs(this));

                var len = bindings.Count();
                for (var i = 0; i < len; i++)
                {
                    var aBinding = bindings.ElementAt(i);
                    if (!aBinding.Update())
                    {
                        if (abortOnFailure)
                        {
                            numFailed = len - i;
                            break;
                        }
                        else
                        {
                            numFailed++;
                        }
                    }
                }

                this.OnUpdateEnd.Invoke(new Events.UpdateEndEventArgs(this, numFailed));
            }

            return numFailed;
        }
        /** Set this delegate to a method which returns the data bindings to be updated when UpdateBindings is called (must be set for updaters which user intervals). */
        GetBindings: () => Collections.IList<IDataBinding<any, any>> = null;

        /** The underlying interval value. */
        private _interval: number = -1;
        /** The setInterval reference number. */
        private intervalRef: number = null;
        /** Gets or sets the interval with which to update the bindings. Set to -1 to disable periodic updating.
            @param value The interval (time in seconds) to wait between updates.
            @returns The interval time (in seconds) or -1 (indicates no interval)
        */
        Interval(value?: number): number
        {
            if (value !== undefined)
            {
                this._interval = value;
                if (this.intervalRef !== null)
                {
                    clearInterval(this.intervalRef);
                    this.intervalRef = null;
                }
                if (this._interval > -1)
                {
                    setInterval(() =>
                    {
                        this.UpdateBindings();
                    }, this._interval);
                }
            }
            return this._interval;
        }
        /** Fired when an update is invoked (either from timer or externally using UpdateBindings). This occurs before OnUpdateBegin. Some invokes may be ignored and in those cases OnUpdateBegin/OnUpdateEnd will not be fired. */
        OnUpdateInvoked: Events.UpdateInvokedEvent = new Events.UpdateInvokedEvent();
        /** Fired when update of a data bindings begins. This should be attached to for detecting when an update actually begins. */
        OnUpdateBegin: Events.UpdateBeginEvent = new Events.UpdateBeginEvent();
        /** Fired when update of a data bindings ends. This should be attached to for detecting when an update ends and the status on that update. */
        OnUpdateEnd: Events.UpdateEndEvent = new Events.UpdateEndEvent();
    }
}
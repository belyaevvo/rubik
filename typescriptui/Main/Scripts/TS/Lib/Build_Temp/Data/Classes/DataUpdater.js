var TSUI;
(function (TSUI) {
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
    (function (Data) {
        /** Defines the structure for a data updater. Data updaters can be used to call updates on all the bindings in a binding group either manually or at a regular interval. */
        var DataUpdater = (function () {
            /** Creates a new DataUpdater.
            @param getBindings A function which returns the list of data bindings to update. Default: null meaning automatic updates will not work.
            @param interval The interval with which to update the bindings. Default: -1 indicating no automatic udpates.
            @returns A new data updater.
            */
            function DataUpdater(getBindings, interval) {
                if (typeof getBindings === "undefined") { getBindings = null; }
                if (typeof interval === "undefined") { interval = -1; }
                /** Set this delegate to a method which returns the data bindings to be updated when UpdateBindings is called (must be set for updaters which user intervals). */
                this.GetBindings = null;
                /** The underlying interval value. */
                this._interval = -1;
                /** The setInterval reference number. */
                this.intervalRef = null;
                /** Fired when an update is invoked (either from timer or externally using UpdateBindings). This occurs before OnUpdateBegin. Some invokes may be ignored and in those cases OnUpdateBegin/OnUpdateEnd will not be fired. */
                this.OnUpdateInvoked = new TSUI.Events.UpdateInvokedEvent();
                /** Fired when update of a data bindings begins. This should be attached to for detecting when an update actually begins. */
                this.OnUpdateBegin = new TSUI.Events.UpdateBeginEvent();
                /** Fired when update of a data bindings ends. This should be attached to for detecting when an update ends and the status on that update. */
                this.OnUpdateEnd = new TSUI.Events.UpdateEndEvent();
                this.GetBindings = getBindings;
                this.Interval(interval);
            }
            /** Updates all the bindings in the specified collection. May abort updating any remaining bindings if a binding fails to update.
            @param bindings The collection of bindings to update.
            @param abortOnFailure Whether to abort updating bindings if a binding fails to update.
            @returns The number of bindings which failed to update (or start to update if accessors are asynchronous).
            */
            DataUpdater.prototype.UpdateBindings = function (abortOnFailure, bindings) {
                if (typeof abortOnFailure === "undefined") { abortOnFailure = false; }
                if (typeof bindings === "undefined") { bindings = null; }
                this.OnUpdateInvoked.Invoke(new TSUI.Events.UpdateInvokedEventArgs(this));

                if (bindings === null) {
                    if (this.GetBindings !== null) {
                        bindings = this.GetBindings();
                    } else {
                        throw "No bindings to update! bindings = null.";
                    }
                }

                var numFailed = 0;

                if (bindings !== null && bindings.Count() > 0) {
                    this.OnUpdateBegin.Invoke(new TSUI.Events.UpdateBeginEventArgs(this));

                    var len = bindings.Count();
                    for (var i = 0; i < len; i++) {
                        var aBinding = bindings.ElementAt(i);
                        if (!aBinding.Update()) {
                            if (abortOnFailure) {
                                numFailed = len - i;
                                break;
                            } else {
                                numFailed++;
                            }
                        }
                    }

                    this.OnUpdateEnd.Invoke(new TSUI.Events.UpdateEndEventArgs(this, numFailed));
                }

                return numFailed;
            };

            /** Gets or sets the interval with which to update the bindings. Set to -1 to disable periodic updating.
            @param value The interval (time in seconds) to wait between updates.
            @returns The interval time (in seconds) or -1 (indicates no interval)
            */
            DataUpdater.prototype.Interval = function (value) {
                var _this = this;
                if (value !== undefined) {
                    this._interval = value;
                    if (this.intervalRef !== null) {
                        clearInterval(this.intervalRef);
                        this.intervalRef = null;
                    }
                    if (this._interval > -1) {
                        setInterval(function () {
                            _this.UpdateBindings();
                        }, this._interval);
                    }
                }
                return this._interval;
            };
            return DataUpdater;
        })();
        Data.DataUpdater = DataUpdater;
    })(TSUI.Data || (TSUI.Data = {}));
    var Data = TSUI.Data;
})(TSUI || (TSUI = {}));

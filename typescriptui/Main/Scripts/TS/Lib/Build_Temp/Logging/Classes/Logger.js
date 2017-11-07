var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Sep 5 13:47 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 5/Sep/13 : Initial version.
    - 6/Sep/13 : Added documentation and global logger.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/ILogger.d.ts" />
    /// <reference path="../../Events/Classes/Events.ts" />
    (function (Logging) {
        /** Main implementation of an ILogger for TypeScript UI. Outputs logs to the browser's console. */
        var Logger = (function () {
            function Logger() {
                /** Whether the logger is enabled or not. */
                this.Enabled = true;
                /** The array of logs for this logger. */
                this.Logs = [];
                /** The types of log to actually output to the console. Turn these on/off to filter logs. */
                this.TraceTypesToShow = [
                    Logging.TraceTypes[Logging.TraceTypes.LOG],
                    Logging.TraceTypes[Logging.TraceTypes.COMMON],
                    Logging.TraceTypes[Logging.TraceTypes.DATA_TRACE],
                    Logging.TraceTypes[Logging.TraceTypes.ERROR_TRACE],
                    Logging.TraceTypes[Logging.TraceTypes.LOGIC_TRACE]
                ];
                /** Text changed event for when a log is added. Sender object is the added log (not a control). */
                this.OnLog = new TSUI.Events.TextChangeEvent();
            }
            /** Add the specified log to this logger and outputs it to the console. */
            Logger.prototype.Log = function (log) {
                if (this.Enabled) {
                    this.Logs.push(log);

                    if (this.TraceTypesToShow.indexOf(log.TraceType) > -1) {
                        var text = this._buildLog(log);
                        if (log.ErrorTrace) {
                            console.error(text);
                        } else if (log.DataTrace) {
                            console.debug(text);
                        } else {
                            console.log(text);
                        }
                    }

                    this.OnLog.Invoke(new TSUI.Events.TextChangeEventArgs(log, null));
                }
            };

            /** Gets the text for all the logs in the logger. */
            Logger.prototype.GetFullLog = function () {
                var result = "";

                for (var i = this.Logs.length - 1; i > -1; i--) {
                    var log = this.Logs[i];
                    if (this.TraceTypesToShow.indexOf(log.TraceType) > -1) {
                        result += this._buildLog(log);
                    }
                }

                return result;
            };

            /** Builds the text for the specified log. */
            Logger.prototype._buildLog = function (log) {
                //Log format:
                /*
                TRACE_TYPE      : MESSAGE_LINE_1
                MESSAGE_LINE_2
                
                ERROR_TYPE      : MESSAGE_LINE_1
                MESSAGE_LINE_2
                
                RECOVERY_MODE   : INFO_LINE_1
                INFO_LINE_2
                
                DATA_TYPE       : DATA_VALUE
                STACK TRACE     :
                ... ... ... ... ... ...
                ... ... ... ... ... ...
                ... ... ... ... ... ...
                
                --------------------------------------------
                */
                var tracePad = "                ";

                var logText = "\n";

                logText += TSUI.pad(log.TraceType, tracePad) + " : ";
                var lines = log.Message.split('\n');
                logText += lines[0] + "\n";
                for (var lineNum = 1; lineNum < lines.length; lineNum++) {
                    logText += tracePad + "   " + lines[lineNum].trim() + "\n";
                }

                if (log.ErrorTrace) {
                    logText += "\n";

                    logText += TSUI.pad(log.ErrorTrace.Type, tracePad) + " : ";
                    var lines = log.ErrorTrace.Message.split('\n');
                    logText += lines[0] + "\n";
                    for (var lineNum = 1; lineNum < lines.length; lineNum++) {
                        logText += tracePad + "   " + lines[lineNum] + "\n";
                    }

                    if (log.ErrorTrace.RecoveryInfo) {
                        logText += "\n";

                        logText += TSUI.pad(Logging.RecoveryModes[log.ErrorTrace.RecoveryInfo.Mode], tracePad) + " : ";
                        var lines = log.ErrorTrace.RecoveryInfo.Info.split('\n');
                        logText += lines[0] + "\n";
                        for (var lineNum = 1; lineNum < lines.length; lineNum++) {
                            logText += tracePad + "   " + lines[lineNum] + "\n";
                        }
                    }
                }

                if (log.DataTrace) {
                    logText += "\n";

                    logText += TSUI.pad(log.DataTrace.Type, tracePad) + " : ";
                    var lines = (log.DataTrace.Value + '').split('\n');
                    logText += lines[0] + "\n";
                    for (var lineNum = 1; lineNum < lines.length; lineNum++) {
                        logText += tracePad + "   " + lines[lineNum] + "\n";
                    }
                }

                if (log.StackTrace) {
                    logText += "\n";
                    logText += TSUI.pad("STACK TRACE", tracePad) + " : \n";
                    logText += log.StackTrace.trim();
                    logText += "\n";
                }

                logText += "\n";
                logText += "-------------------------------------------\n";

                return logText;
            };

            /** Writes a line to the console and adds a text-only log. */
            Logger.prototype.WriteLine = function (text) {
                console.log(text);
                this.Log({
                    Message: text,
                    TraceType: Logging.TraceTypes[Logging.TraceTypes.LOG]
                });
            };
            return Logger;
        })();
        Logging.Logger = Logger;

        /** The global logger for TypeScript UI. */
        var tsui_logger = new TSUI.Logging.Logger();
    })(TSUI.Logging || (TSUI.Logging = {}));
    var Logging = TSUI.Logging;
})(TSUI || (TSUI = {}));

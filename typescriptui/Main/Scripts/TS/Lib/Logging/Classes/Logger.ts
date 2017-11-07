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

module TSUI.Logging
{
    /** Main implementation of an ILogger for TypeScript UI. Outputs logs to the browser's console. */
    export class Logger implements ILogger
    {
        /** Whether the logger is enabled or not. */
        Enabled: boolean = true;

        /** The array of logs for this logger. */
        Logs: ILog[] = [];

        /** The types of log to actually output to the console. Turn these on/off to filter logs. */
        TraceTypesToShow: string[] = [
            TraceTypes[TraceTypes.LOG],
            TraceTypes[TraceTypes.COMMON],

            TraceTypes[TraceTypes.DATA_TRACE],
            TraceTypes[TraceTypes.ERROR_TRACE],
            TraceTypes[TraceTypes.LOGIC_TRACE]
        ];

        /** Add the specified log to this logger and outputs it to the console. */
        Log(log: ILog): void
        {
            if (this.Enabled)
            {
                this.Logs.push(log);

                if (this.TraceTypesToShow.indexOf(log.TraceType) > -1)
                {
                    var text = this._buildLog(log);
                    if (log.ErrorTrace)
                    {
                        console.error(text);
                    }
                    else if (log.DataTrace)
                    {
                        console.debug(text);
                    }
                    else 
                    {
                        console.log(text);
                    }
                }

                this.OnLog.Invoke(new Events.TextChangeEventArgs(<any>log, null));
            }
        }

        /** Gets the text for all the logs in the logger. */
        GetFullLog(): string
        {
            var result = "";

            //Most recent log should appear first
            for (var i = this.Logs.length - 1; i > -1; i--)
            {
                var log = this.Logs[i];
                if (this.TraceTypesToShow.indexOf(log.TraceType) > -1)
                {
                    result += this._buildLog(log);
                }
            }

            return result;
        }
        /** Builds the text for the specified log. */
        _buildLog(log: ILog): string
        {
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

            logText += pad(log.TraceType, tracePad) + " : ";
            var lines = log.Message.split('\n');
            logText += lines[0] + "\n";
            for (var lineNum = 1; lineNum < lines.length; lineNum++)
            {
                logText += tracePad + "   " + lines[lineNum].trim() + "\n";
            }

            if (log.ErrorTrace)
            {
                logText += "\n";

                logText += pad(log.ErrorTrace.Type, tracePad) + " : ";
                var lines = log.ErrorTrace.Message.split('\n');
                logText += lines[0] + "\n";
                for (var lineNum = 1; lineNum < lines.length; lineNum++)
                {
                    logText += tracePad + "   " + lines[lineNum] + "\n";
                }

                if (log.ErrorTrace.RecoveryInfo)
                {
                    logText += "\n";

                    logText += pad(RecoveryModes[log.ErrorTrace.RecoveryInfo.Mode], tracePad) + " : ";
                    var lines = log.ErrorTrace.RecoveryInfo.Info.split('\n');
                    logText += lines[0] + "\n";
                    for (var lineNum = 1; lineNum < lines.length; lineNum++)
                    {
                        logText += tracePad + "   " + lines[lineNum] + "\n";
                    }
                }
            }

            if (log.DataTrace)
            {
                logText += "\n";

                logText += pad(log.DataTrace.Type, tracePad) + " : ";
                var lines = (log.DataTrace.Value + '').split('\n');
                logText += lines[0] + "\n";
                for (var lineNum = 1; lineNum < lines.length; lineNum++)
                {
                    logText += tracePad + "   " + lines[lineNum] + "\n";
                }
            }

            if (log.StackTrace)
            {
                logText += "\n";
                logText += pad("STACK TRACE", tracePad) + " : \n";
                logText += log.StackTrace.trim();
                logText += "\n";
            }

            logText += "\n";
            logText += "-------------------------------------------\n";

            return logText;
        }

        /** Writes a line to the console and adds a text-only log. */
        WriteLine(text: string)
        {
            console.log(text);
            this.Log({
                Message: text,
                TraceType: TraceTypes[TraceTypes.LOG]
            });
        }

        /** Text changed event for when a log is added. Sender object is the added log (not a control). */
        OnLog: Events.TextChangeEvent = new Events.TextChangeEvent();
    }

    /** The global logger for TypeScript UI. */
    var tsui_logger = new TSUI.Logging.Logger();
}
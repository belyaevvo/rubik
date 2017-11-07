/// <reference path="../../Logging/Interfaces/ILogger.d.ts" />
/// <reference path="../../Events/Classes/Events.d.ts" />
declare module TSUI.Logging {
    /** Main implementation of an ILogger for TypeScript UI. Outputs logs to the browser's console. */
    class Logger implements Logging.ILogger {
        /** Whether the logger is enabled or not. */
        public Enabled: boolean;
        /** The array of logs for this logger. */
        public Logs: Logging.ILog[];
        /** The types of log to actually output to the console. Turn these on/off to filter logs. */
        public TraceTypesToShow: string[];
        /** Add the specified log to this logger and outputs it to the console. */
        public Log(log: Logging.ILog): void;
        /** Gets the text for all the logs in the logger. */
        public GetFullLog(): string;
        /** Builds the text for the specified log. */
        public _buildLog(log: Logging.ILog): string;
        /** Writes a line to the console and adds a text-only log. */
        public WriteLine(text: string): void;
        /** Text changed event for when a log is added. Sender object is the added log (not a control). */
        public OnLog: TSUI.Events.TextChangeEvent;
    }
}

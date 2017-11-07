/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Sep 5 13:47 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 5/Sep/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="ILog.d.ts" />
/// <reference path="../../Events/Classes/Events.d.ts" />

declare module TSUI.Logging
{
    /** Defines the structure for a logger. Loggers are used to record trace information. */
    export interface ILogger
    {
        /** Whether the logger is enabled or not. */
        Enabled: boolean;

        /** The types of trace to output logs for. */
        TraceTypesToShow: string[];

        /** Adds a log to the logger. */
        Log(log: ILog): void;

        /** Gets the text for all the logs in the logger. */
        GetFullLog(): string;

        /** Writes a line to the console and adds a text-only log. */
        WriteLine(text: string);
        
        /** Text changed event for when a log is added. Sender object is the added log (not a control). */
        OnLog: Events.TextChangeEvent;
    }
}
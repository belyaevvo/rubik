/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Sep 5 13:47 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 5/Sep/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Enums/RecoveryModes.d.ts" />

declare module TSUI.Logging
{
    /** Defines the structure of a log. */
    export interface ILog
    {
        /** The message for the log. */
        Message: string;
        /** The type of the log. */
        TraceType: string;

        /** The stack trace string for this log. */
        StackTrace?: string;
        /** The data trace for this log. */
        DataTrace?: {
            /** The data value. */
            Value: any;
            /** The data type. */
            Type: string;
        };
        /** The error trace for this log. */
        ErrorTrace?: {
            /** The raw exception object. */
            RawError: any;
            /** The processed exception message. */
            Message: string;
            /** The error type. */
            Type: string;
            /** The recovery info for the error. */
            RecoveryInfo: {
                /** The mode used to recover from the error. */
                Mode: RecoveryModes;
                /** Any information about the recovery. */
                Info?: string
            };
        };
    }
}
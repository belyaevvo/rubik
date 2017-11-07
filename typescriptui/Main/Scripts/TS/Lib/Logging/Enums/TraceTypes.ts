/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Sep 5 13:47 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 5/Sep/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

module TSUI.Logging
{
    /** The internal list of trace types for logs. */
    export enum TraceTypes
    {
        LOG,
        COMMON,

        LOGIC_TRACE,
        DATA_TRACE,
        ERROR_TRACE
    }
}
/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Aug 3 12:15 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 3/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
module Rubik.Data
{
    /** FLAGS: The statuses that a data push or data pull request can have. */
    export enum DataAccessStatuses
    {
        /** Indicates the status of the request is not known. */
        Unkown = 0,
        /** Indicates that the request is pending completion. */
        Pending = 1,
        /** Indicates that the request has completed succesffuly. */
        Complete = 2,
        /** Indicates that the request has completed but failed. */
        Failed = 4,
        /** Indicates that an error occurred other than request failure. */
        Error = 8
    }
}
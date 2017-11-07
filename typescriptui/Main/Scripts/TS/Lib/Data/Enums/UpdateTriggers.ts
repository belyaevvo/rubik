/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Aug 27 22:00 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 27/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
module TSUI.Data
{
    /** FLAGS: The statuses that a data push or data pull request can have. */
    export enum UpdateTriggers
    {
        /** Indicates the trigger of the update request is unknown. */
        Unkown = 0,
        /** Indicates the trigger of the update request is the source. */
        Source = 1,
        /** Indicates the trigger of the update request is the user. */
        User = 2,
        /** Indicates the trigger of the update request is the data binding. */
        Binding = 4
    }
}
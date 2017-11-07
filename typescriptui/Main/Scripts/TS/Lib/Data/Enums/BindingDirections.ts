/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Aug 24 22:15 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 24/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
module TSUI.Data
{
    /** The directions of data flow that control the data binding. */
    export enum BindingDirections
    {
        /** Indicates the data flow is from source to user. */
        S2U,
        /** Indicates the data flow is from user to source. */
        U2S,
        /** Indicates the data flow is in both directions with default direction as source to user. */
        BOTH_S2UDefault,
        /** Indicates the data flow is in both directions with default direction as user to source. */
        BOTH_U2SDefault
    }
}
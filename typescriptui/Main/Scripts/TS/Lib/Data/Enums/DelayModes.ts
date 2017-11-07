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
    /** The delay modes a data binding can use. */
    export enum DelayModes
    {
        /** Indicates the data binding should delay the first call to update and ignore subsequent calls until the update has completed (or failed). */
        First,
        /** Indicates the data binding should cancel previous calls to update and delay the latest call. */
        Last
    }
}
/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

module TSUI.UI
{
    /** The types of progress bars. 
        Note: To reverse direction, see IProgressBar.Reverse
    */
    export enum ProgressBarTypes
    {
        /** A circular, clockwise progress bar */
        Circular,
        /** A horizontal, left-to-right progress bar */
        Horizontal,
        /** A vertical, top-to-bottom progress bar */
        Vertical
    }
}
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
    /** The types of progress spinners. 
        Note: To reverse direction, see IProgressSpinner.Reverse
    */
    export enum ProgressSpinnerTypes
    {
        /** A circular, clockwise progress spinner */
        Circular,
        /** A horizontal, left-to-right progress spinner */
        Horizontal,
        /** A vertical, top-to-bottom progress spinner */
        Vertical
    }
}
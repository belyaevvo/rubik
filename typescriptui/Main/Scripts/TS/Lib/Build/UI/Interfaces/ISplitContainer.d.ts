/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.
 - 6/Sep/13 : Added inline documentation.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="ISplitterGrip.d.ts" />
/// <reference path="IPanel.d.ts" />

declare module TSUI.UI
{
    /** Defines a SplitContainer control. */
    export interface ISplitContainer extends IControl
    {
        /** The top or left panel of the split container. */
        Panel1: IPanel;
        /** The bottom or right panel of the split container. */
        Panel2: IPanel;

        /** The main splitter grip for the control. */
        MainSplitterGrip: ISplitterGrip;
        
        /** Gets or sets the splitter orientation.
            @param value The value to set the splitter grip orientation to.
            @returns The actual value of the splitter grip orientation.
        */
        Orientation(value?: SplitterGrip_Orientations): SplitterGrip_Orientations;
    }
}
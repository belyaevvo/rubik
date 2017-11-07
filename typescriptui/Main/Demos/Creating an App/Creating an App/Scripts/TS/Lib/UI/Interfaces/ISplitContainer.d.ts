/*
Copyright � Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="ISplitterGrip.d.ts" />
/// <reference path="IPanel.d.ts" />

declare module TSUI.UI
{
    export interface ISplitContainer extends IControl
    {
        Panel1: IPanel;
        Panel2: IPanel;

        MainSplitterGrip: ISplitterGrip;
        
        Orientation(value?: SplitterGrip_Orientations): SplitterGrip_Orientations;
    }
}
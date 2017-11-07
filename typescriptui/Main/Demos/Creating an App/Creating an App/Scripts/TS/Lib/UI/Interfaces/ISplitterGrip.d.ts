/*
Copyright � Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Enums/SplitterGrip_Orientations.d.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    export interface ISplitterGrip extends IControl
    {
        OnSplitterMove: Events.SplitterMoveEvent;
        OnOrientationChanged: Events.OrientationChangedEvent;

        MaxDistance(): number;

        Orientation(value?: SplitterGrip_Orientations): SplitterGrip_Orientations;
        SplitterDistance(value?: number): number;
        SplitterWidth(value?: number): number;
    }
}
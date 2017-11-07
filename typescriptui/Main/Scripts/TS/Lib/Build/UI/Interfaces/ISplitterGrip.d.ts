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

/// <reference path="../Enums/SplitterGrip_Orientations.d.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    /** Defines a SplitterGrip control. */
    export interface ISplitterGrip extends IControl
    {
        /** Fired when the splitter is moved. */
        OnSplitterMove: Events.SplitterMoveEvent;
        /** Fired when the splitter orientation is changed. */
        OnOrientationChanged: Events.OrientationChangedEvent;

        /** Gets the maximum distance the splitter can move. */
        MaxDistance(): number;

        /** Gets or sets the splitter orientation.
            @param value The value to set the splitter grip orientation to.
            @returns The actual value of the splitter grip orientation.
        */
        Orientation(value?: SplitterGrip_Orientations): SplitterGrip_Orientations;
        /** Gets or sets the splitter distance from the left or top edge.
            @param value The value to set the distance to.
            @returns The actual value of the splitter distance.
        */
        SplitterDistance(value?: number): number;
        /** Gets or sets the splitter width.
            @param value The value to set the width to.
            @returns The actual value of the splitter width.
        */
        SplitterWidth(value?: number): number;
    }
}
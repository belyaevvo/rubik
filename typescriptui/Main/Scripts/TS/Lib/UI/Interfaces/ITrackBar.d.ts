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

/// <reference path="../Enums/TrackBarModes.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    /** Defines a TrackBar control. */
    export interface ITrackBar extends IControl
    {
        /** Gets or sets the track bar mode. 
            @param value The value to set the track bar mode to.
            @returns The actual value of the track bar mode.
        */
        Mode(value?: TrackBarModes): TrackBarModes;
        /** Gets or sets the track bar max value. 
            @param value The value to set the track bar max to.
            @returns The actual value of the track bar max.
        */
        Max(value?: number): number;
        /** Gets or sets the track bar min value. 
            @param value The value to set the track bar min to.
            @returns The actual value of the track bar min.
        */
        Min(value?: number): number;
        /** Gets or sets the number of track bar divisions. 
            @param value The value to set the number of track bar divisions to.
            @returns The actual value of the number of track bar divisions.
        */
        Divisions(value?: number): number;
        /** Gets or sets the track bar value. 
            @param value The value to set to.
            @returns The actual value of the track bar.
        */
        Value(value?: number): number;
    }
}
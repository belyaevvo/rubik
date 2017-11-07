var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    (function (UI) {
        /** The different modes of track bars. */
        (function (TrackBarModes) {
            /** Discrete mode i.e. snap the handle to discrete values (see ITrackBar.Min, ITrackBar.Max, ITrackBar.Divisions) */
            TrackBarModes[TrackBarModes["Discrete"] = 0] = "Discrete";

            /** Continuous mode i.e. allow the handle to be dragged to any value (inc. decimals) between min and max values.*/
            TrackBarModes[TrackBarModes["Continuous"] = 1] = "Continuous";
        })(UI.TrackBarModes || (UI.TrackBarModes = {}));
        var TrackBarModes = UI.TrackBarModes;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

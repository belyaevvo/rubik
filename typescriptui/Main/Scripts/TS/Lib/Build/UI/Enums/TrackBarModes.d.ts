declare module TSUI.UI {
    /** The different modes of track bars. */
    enum TrackBarModes {
        /** Discrete mode i.e. snap the handle to discrete values (see ITrackBar.Min, ITrackBar.Max, ITrackBar.Divisions) */
        Discrete,
        /** Continuous mode i.e. allow the handle to be dragged to any value (inc. decimals) between min and max values.*/
        Continuous,
    }
}

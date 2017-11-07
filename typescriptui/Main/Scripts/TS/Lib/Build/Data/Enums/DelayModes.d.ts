declare module TSUI.Data {
    /** The delay modes a data binding can use. */
    enum DelayModes {
        /** Indicates the data binding should delay the first call to update and ignore subsequent calls until the update has completed (or failed). */
        First,
        /** Indicates the data binding should cancel previous calls to update and delay the latest call. */
        Last,
    }
}

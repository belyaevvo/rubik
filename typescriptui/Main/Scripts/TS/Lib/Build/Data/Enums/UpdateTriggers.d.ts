declare module TSUI.Data {
    /** FLAGS: The statuses that a data push or data pull request can have. */
    enum UpdateTriggers {
        /** Indicates the trigger of the update request is unknown. */
        Unkown = 0,
        /** Indicates the trigger of the update request is the source. */
        Source = 1,
        /** Indicates the trigger of the update request is the user. */
        User = 2,
        /** Indicates the trigger of the update request is the data binding. */
        Binding = 4,
    }
}

declare module TSUI.Data {
    /** The directions of data flow that control the data binding. */
    enum BindingDirections {
        /** Indicates the data flow is from source to user. */
        S2U,
        /** Indicates the data flow is from user to source. */
        U2S,
        /** Indicates the data flow is in both directions with default direction as source to user. */
        BOTH_S2UDefault,
        /** Indicates the data flow is in both directions with default direction as user to source. */
        BOTH_U2SDefault,
    }
}

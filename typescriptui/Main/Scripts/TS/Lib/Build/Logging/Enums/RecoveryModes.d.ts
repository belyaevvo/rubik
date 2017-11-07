declare module TSUI.Logging {
    /** The list of modes used when recovering from an error. */
    enum RecoveryModes {
        Abort,
        Retry,
        Continue,
        Continue_SkipSection,
    }
}

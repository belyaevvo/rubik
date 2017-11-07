declare module TSUI.Data {
    /** FLAGS: The statuses that a data push or data pull request can have. */
    enum DataAccessStatuses {
        /** Indicates the status of the request is not known. */
        Unkown = 0,
        /** Indicates that the request is pending completion. */
        Pending = 1,
        /** Indicates that the request has completed succesffuly. */
        Complete = 2,
        /** Indicates that the request has completed but failed. */
        Failed = 4,
        /** Indicates that an error occurred other than request failure. */
        Error = 8,
    }
}

declare module TSUI.Events {
    /** The list of different modifications (changes) which can be made to a list which will cause the Modified event to fire. */
    enum CollectionModifications {
        /** Indicates that no change has been made. */
        None,
        /** Indicates that one or more items have been added to the collection. */
        Add,
        /** Indicates that one or more items have been removed from the collection. */
        Remove,
        /** Indicates that two or more items have been re-ordered within the collection. */
        Reorder,
    }
}

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
    (function (Events) {
        /** The list of different modifications (changes) which can be made to a list which will cause the Modified event to fire. */
        (function (CollectionModifications) {
            /** Indicates that no change has been made. */
            CollectionModifications[CollectionModifications["None"] = 0] = "None";

            /** Indicates that one or more items have been added to the collection. */
            CollectionModifications[CollectionModifications["Add"] = 1] = "Add";

            /** Indicates that one or more items have been removed from the collection. */
            CollectionModifications[CollectionModifications["Remove"] = 2] = "Remove";

            /** Indicates that two or more items have been re-ordered within the collection. */
            CollectionModifications[CollectionModifications["Reorder"] = 3] = "Reorder";
        })(Events.CollectionModifications || (Events.CollectionModifications = {}));
        var CollectionModifications = Events.CollectionModifications;
    })(TSUI.Events || (TSUI.Events = {}));
    var Events = TSUI.Events;
})(TSUI || (TSUI = {}));

/*
Copyright Edward Nutting 2013
Author: Edward Nutting
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/
/// <reference path="CollectionModifications.ts" />
/// <reference path="../Events/Event.ts" />
/// <reference path="../Events/IEventHandler.d.ts" />
/// <reference path="../Events/IEventArgs.d.ts" />
/// <reference path="../Events/IEvent.d.ts" />
var Rubik;
(function (Rubik) {
    var Collections;
    (function (Collections) {
        /** Event to be fired when a collection (e.g. IList) is modified e.g. added to, removed from, re-ordered.
            Note: This event has been put into a separate class ro prevent reference loops with Collections namespace that result in compiler failures/errors.
         */
        class CollectionModifiedEvent extends Rubik.Events.Event {
            constructor() {
                super(...arguments);
                this.Handlers = [];
            }
            Attach(handler) {
                super.Attach(handler);
            }
            Detach(handler) {
                super.Detach(handler);
            }
            IsAttached(handler) {
                return super.IsAttached(handler);
            }
            Invoke(args) {
                super.Invoke(args);
            }
        }
        Collections.CollectionModifiedEvent = CollectionModifiedEvent;
        class CollectionModifiedEventHandler extends Rubik.Events.EventHandler {
            constructor(Callback, Context) {
                super(Callback, Context);
                this.Callback = Callback;
                this.Context = Context;
            }
            Invoke(args) {
                super.Invoke(args);
            }
        }
        Collections.CollectionModifiedEventHandler = CollectionModifiedEventHandler;
        class CollectionModifiedEventArgs extends Rubik.Events.EventArgs {
            constructor(Sender, Modification, ModifiedElements) {
                super(Sender);
                this.Sender = Sender;
                this.Modification = Modification;
                this.ModifiedElements = ModifiedElements;
            }
        }
        Collections.CollectionModifiedEventArgs = CollectionModifiedEventArgs;
    })(Collections = Rubik.Collections || (Rubik.Collections = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=CollectionModifiedEvent.js.map
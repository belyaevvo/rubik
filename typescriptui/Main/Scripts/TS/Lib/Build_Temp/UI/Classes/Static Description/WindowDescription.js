var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Sep 4 14:59 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 9/Sep/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../../Interfaces/IControl.d.ts" />
    (function (UI) {
        var ControlDescriptionLoader = (function () {
            function ControlDescriptionLoader() {
            }
            /** Loads the specified description.
            @param descrip The control description to load.
            @param eventHanldersObj The object which has all the event handler methods on it (including methods for all child controls).
            @param parent The parent control to add the created control to.
            @param control The existing control to use as the root control of the description.
            @returns True if the description is completely, successfully loaded.
            */
            ControlDescriptionLoader.LoadDescription = function (descrip, eventHandlersObj, parent, control) {
                var loaded = true;

                try  {
                    if (!control) {
                        //Create root control
                        control = new descrip.Type();
                    }
                    if (parent) {
                        //Add control to parent
                        parent[descrip.Name] = control;
                        if (parent.ContentPanel) {
                            //Special case where parent is a window
                            parent.ContentPanel.Children.Add(control);
                        } else {
                            parent.Children.Add(control);
                        }
                    }

                    if (descrip.Properties) {
                        for (var i = 0; i < descrip.Properties.length; i++) {
                            var prop = descrip.Properties[i];
                            control[prop.Name].apply(control, prop.Values);
                        }
                    }

                    if (descrip.Events) {
                        for (var i = 0; i < descrip.Events.length; i++) {
                            var event = descrip.Events[i];
                            control[event.Name].Attach(new event.HandlerType(eventHandlersObj[event.HandlerName], eventHandlersObj));
                        }
                    }

                    if (descrip.Children) {
                        for (var i = 0; i < descrip.Children.length; i++) {
                            try  {
                                var childDescrip = descrip.Children[i];
                                loaded = ControlDescriptionLoader.LoadDescription(childDescrip, eventHandlersObj, control) && loaded;
                            } catch (e) {
                                console.error("Error loading child[" + i + "]! Message: " + e, e, descrip.Children[i]);
                            }
                        }
                    }
                } catch (e) {
                    loaded = false;
                    console.error(e);
                }

                return loaded;
            };
            return ControlDescriptionLoader;
        })();
        UI.ControlDescriptionLoader = ControlDescriptionLoader;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

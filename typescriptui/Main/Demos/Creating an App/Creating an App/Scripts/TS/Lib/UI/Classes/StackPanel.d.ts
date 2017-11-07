/// <reference path="../Interfaces/IStackPanel.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    class StackPanel extends UI.Control implements UI.IStackPanel {
        public Rows: TSUI.Collections.IList<UI.IStackPanelRow>;
        constructor();
        public _OnRows_Modified(eventArgs: TSUI.Events.CollectionModifiedEventArgs<UI.IStackPanelRow>): void;
        public Orientation(value?: UI.StackPanelOrientations): UI.StackPanelOrientations;
    }
}

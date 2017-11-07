/// <reference path="../../UI/Interfaces/IButton.d.ts" />
/// <reference path="Label.d.ts" />
/// <reference path="Control.d.ts" />
declare module TSUI.UI {
    /** A basic button control implementation. */
    class Button extends UI.Control implements UI.IButton {
        /** The label control which is the button's text. */
        public TextLabel: UI.ILabel;
        /** Creates a new Button control. */
        constructor();
        /** Gets or sets the button text.
        @param value (Optional) The value to set the text to.
        @returns the value of the button's text.
        */
        public Text(value?: string): string;
        /** Invokes the button's click event. */
        public InvokeDefaultAction(): void;
    }
}

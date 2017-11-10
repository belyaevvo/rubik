module Rubik.UI {
    export class GridCell extends Control
    {
        _span: JQuery = null;

        constructor() {
            super();
            this._rootElement.addClass("Cell");
            this._span = $("<span class=\"Cell-content\">");
            this._rootElement.add(this._span);            
            
        }

        Text(text: string | number | boolean = null): string {
            if (text != null) {
                this._span.text(text);
            }
            return this._span.text();            
        }
    }
}
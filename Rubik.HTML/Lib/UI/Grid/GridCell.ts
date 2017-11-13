module Rubik.UI {
    export class GridCell extends Control
    {
        _span: JQuery = null;

        constructor() {
            super();
            this._rootElement.addClass("GridCell");
            this._span = $("<span class=\"GridCell-content\">");
            this._rootElement.append(this._span);            
            
        }

        Text(text: string | number | boolean = null): string {
            if (text != null) {
                this._span.text(text);
            }
            return this._span.text();            
        }
    }
}
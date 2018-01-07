module Rubik.UI {
    export class GridCell extends Control
    {
        _span: JQuery = null;

        constructor() {
            super();
            this._rootElement.addClass("GridCell");
            //this._span = $("<span class=\"GridCell-content\">");            
            this._span = $(document.createElement('span'));
            this._span.addClass("GridCell-content");
            this._rootElement.append(this._span);
            this.AttachEvents = false;
            this._HandleChainEvents = false;
        }

        Text(text: string | number | boolean = null): string {
            if (text != null) {
                this._span.text(text);
            }
            return this._span.text();            
        }
    }

    export class GridCellA {

        _span: JQuery = null;
        _rootElement: JQuery = null;

        constructor() {
            this._rootElement = $(document.createElement('div'));
            this._rootElement.addClass("Control");            
            this._rootElement.addClass("GridCell");
            this._span = $(document.createElement('span'));
            this._span.addClass("GridCell-content");
            this._rootElement.append(this._span);            
        }

        CSSNumberStyle(style: string, value: CSSNumber = null): CSSNumber {
            if (value !== null) {
                this._rootElement.css(style, value.ToString());
            }
            return CSSNumber.FromString(this._rootElement.css(style));
        }

        Width(value: CSSNumber = null): CSSNumber {
            var result = this.CSSNumberStyle("width", value);           
            return result;
        }
        Height(value: CSSNumber = null): CSSNumber {
            var result = this.CSSNumberStyle("height", value);            
            return result;
        }

        ActualWidth(): number {
            return this._rootElement.outerWidth();
        }
        ActualHeight(): number {
            return this._rootElement.outerHeight();
        }

        Top(value: CSSNumber = null): CSSNumber {
            var result = this.CSSNumberStyle("top", value);            
            return result;
        }
        Bottom(value: CSSNumber = null): CSSNumber {
            return this.CSSNumberStyle("bottom", value);
        }
        Left(value: CSSNumber = null): CSSNumber {
            var result = this.CSSNumberStyle("left", value);            
            return result;
        }
        Right(value: CSSNumber = null): CSSNumber {
            return this.CSSNumberStyle("right", value);
        }

        MarginTop(value: CSSNumber = null): CSSNumber {
            return this.CSSNumberStyle("margin-top", value);
        }

        MarginLeft(value: CSSNumber = null): CSSNumber {
            return this.CSSNumberStyle("margin-left", value);
        }

        MarginBottom(value: CSSNumber = null): CSSNumber {
            return this.CSSNumberStyle("margin-bottom", value);
        }

        MarginRight(value: CSSNumber = null): CSSNumber {
            return this.CSSNumberStyle("margin-right", value);
        }

        Text(text: string | number | boolean = null): string {
            if (text != null) {
                this._span.text(text);
            }
            return this._span.text();
        }

    } 
}
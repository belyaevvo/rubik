module Rubik.UI {

    export class GridHeaderCell extends Control {
        _div: JQuery = null;
        _span: JQuery = null;
        _level: number = 0;
        _icon: string;
        _expanded: boolean = false;
        _hasChildren: boolean = false;
        _col: number;
        _row: number;

        constructor() {
            super();
            this._rootElement.addClass("GridHeaderCell");
            //this._span = $("<span class=\"GridCell-content\">");                        
            this._div = $(document.createElement('div'));
            this._div.addClass("GridHeaderCell-content");
            this._span = $(document.createElement('span'));
            this._span.addClass("GridHeaderCell-text");
            this._div.append(this._span);
            this._rootElement.append(this._div);
            this.AttachEvents = false;
            this._HandleChainEvents = false;
        }

        SetDataColRow(col: number, row: number): void {
            this._rootElement.attr("data-col", col);
            this._rootElement.attr("data-row", row);
        }

        set Expanded(expanded: boolean) {

            this._span.remove(".GridHeaderCell-expandstate");                
            if (expanded == null) {
                this._hasChildren = false;
                this._expanded = false;
            }
            else {
                this._hasChildren = true;
                this._expanded = expanded;
                var span = $(document.createElement('span'));
                span.addClass("GridHeaderCell-expandstate");
                span.addClass("fa");
                span.addClass(expanded ? "fa-caret-down" : "fa-caret-right");                
                this._span.prepend(span);                                
            }
        }

        get Expanded() {
            return this._expanded;
        }

        Icon(icon: string): string {
            if (icon != null) {
                this._rootElement.remove(".GridHeaderCell-icon");                
                var img = $(document.createElement('img'));
                img.addClass("GridHeaderCell-icon");                
                this._span.append(img);                
            }
            return this._icon;
        }        

        Level(level: number): number {
            if (level != null) {
                this._rootElement.remove(".GridHeaderCell-indent");
                for (var i = 0; i < level; i++) {
                    var div = $(document.createElement('div'));
                    div.addClass("GridHeaderCell-indent");
                    this._div.before(div);
                }
            }
            return this._level;
        }

        Text(text: string | number | boolean = null): string {
            if (text != null) {
                this._span.text(text);
            }
            return this._span.text();
        }
    }

    export class GridCell extends Control
    {
        _div: JQuery = null;        
        _span: JQuery = null;                

        constructor() {
            super();
            this._rootElement.addClass("GridCell");
            //this._span = $("<span class=\"GridCell-content\">");                        
            this._div = $(document.createElement('div'));
            this._div.addClass("GridCell-content");
            this._span = $(document.createElement('span'));
            this._span.addClass("GridCell-text");
            this._div.append(this._span);
            this._rootElement.append(this._div);
            this.AttachEvents = false;
            this._HandleChainEvents = false;
        }

        SetDataColRow(col: number, row: number): void {
            this._rootElement.attr("data-col", col);
            this._rootElement.attr("data-row", row);
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
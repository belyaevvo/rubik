module Rubik.UI {

    var __UIDGenerator = 0;
    export class FrameworkElement implements IFrameworkElement {
        __UID: number = __UIDGenerator++;

        _rootElement: JQuery = null;       
        
        Children: Collections.IList<IControl> = new Collections.List<IControl>();

        _Enabled: boolean = true;
        
        constructor() {                    
            this._rootElement = $(document.createElement('div'));
            this._rootElement.addClass("FrameworkElement");            
            this.DisableSelection();

            //this.Children.OnModified.Attach(new Collections.CollectionModifiedEventHandler<IControl>(this._OnChildren_Modified, this));
        }
        
        DOMConstructed: boolean = false;
        ConstructDOM(parent: JQuery, onComplete: () => void = null): void {
            if (!this.DOMConstructed) {
                parent.append(this._rootElement);
                this.DOMConstructed = true;        
            }
            
            for (var i = 0; i < this.Children.Count(); i++) {
                var child = this.Children.ElementAt(i);
                child.ConstructDOM(this._rootElement);
            }

            if (onComplete) {
                onComplete();
            }
        }
        DestroyDOM(): void {
            if (this.DOMConstructed) {
                this._rootElement.remove();
                this._rootElement.off();            
                this.DOMConstructed = false;                
            }

            for (var i = 0; i < this.Children.Count(); i++) {
                this.Children.ElementAt(i).DestroyDOM();
            }
        }

        ID(value: string = null): string {
            if (value !== null) {
                this._rootElement.attr("id", value);
            }
            return this._rootElement.attr("id");
        }

        GetStyle(name: string): string {
            return this._rootElement.css(name);
        }
        ApplyStyle(name: string, value: string): void {
            this._rootElement.css(name, value);
        }
        ApplyStyles(cssProps: any): void {
            this._rootElement.css(cssProps);
        }
        AddClass(name: string): void {
            if (!this.HasClass(name)) {
                this._rootElement.addClass(name);
            }
        }
        RemoveClass(name: string): void {
            this._rootElement.removeClass(name);
        }
        HasClass(name: string): boolean {
            return this._rootElement.hasClass(name);
        }

        BackColor(color: string = null): string {
            if (color !== null) {
                this._rootElement.css("background-color", color);
            }
            return this._rootElement.css("background-color");
        }
        ForeColor(color?: string): string {
            if (color !== null) {
                this._rootElement.css("color", color);
            }
            return this._rootElement.css("color");
        }
        

        Width(value?: string | number): number | void {
            if (value !== null) {
                this._rootElement.width(value);                
            }
            else {
                return this._rootElement.width();
            }
        }
       

        Height(value?: string | number): number | void {
            if (value !== null) {
                this._rootElement.height(value);
            }
            else {
                return this._rootElement.height();
            }
        }

        ActualWidth(): number {
            return this._rootElement.outerWidth();
        }
        ActualHeight(): number {
            return this._rootElement.outerHeight();
        }

        Top(value?: number): number | void {            
            if (value !== null) {
                this._rootElement.css("top", value);                
            }
            else {
                return this._rootElement.position().top;
            }            
        }
        Bottom(value?: string | number): number | void {
            if (value !== null) {
                this._rootElement.css("bottom", value);
            }
            else {
                return this._rootElement.position().top + this._rootElement.outerHeight(true);
            }    
        }
        Left(value?: string | number): number | void {
            if (value !== null) {
                this._rootElement.css("left", value);
            }
            else {
                return this._rootElement.position().left;
            }            
        }
        Right(value?: string | number): number | void {
            if (value !== null) {
                this._rootElement.css("right", value);
            }
            else {
                return this._rootElement.position().left + this._rootElement.outerWidth(true);
            }    
        }

        MarginTop(value?: string | number): number | void {
            if (value !== null) {
                this._rootElement.css("margin-top", value);
            }
            else {
                return this._rootElement.offset().top;
            }  
        }

        MarginLeft(value?: string | number): number | void {
            if (value !== null) {
                this._rootElement.css("margin-left", value);
            }
            else {
                return this._rootElement.offset().left;
            }  
        }

        MarginBottom(value?: string | number): number | void {
            if (value !== null) {
                this._rootElement.css("margin-bottom", value);
            }
            else {
                return parseFloat(this._rootElement.css("margin-bottom"));
            }  
        }

        MarginRight(value?: string | number): number | void {
            if (value !== null) {
                this._rootElement.css("margin-right", value);
            }
            else {
                return parseFloat(this._rootElement.css("margin-right"));
            }  
        }

        
        MinWidth(value?: string | number): number | void {
            if (value !== null) {
                this._rootElement.css("min-width", value);
            }
            else {
                return parseFloat(this._rootElement.css("margin-right"));
            }             
        }
        MinHeight(value?: string | number): number | void {
            if (value !== null) {
                this._rootElement.css("min-height", value);
            }
            else {
                return parseFloat(this._rootElement.css("margin-right"));
            }             
        }
        MaxWidth(value?: string | number): number | void {
            if (value !== null) {
                this._rootElement.css("max-width", value);
            }
            else {
                return parseFloat(this._rootElement.css("margin-right"));
            }             
        }
        MaxHeight(value?: string | number): number | void {
            if (value !== null) {
                this._rootElement.css("max-height", value);
            }
            else {
                return parseFloat(this._rootElement.css("margin-right"));
            }             
        }

        _parentVisible: boolean = true;
        SetParentVisible(value: boolean): void {
            this._parentVisible = value;

            var len = this.Children.Count();
            for (var i = 0; i < len; i++) {
                this.Children.ElementAt(i).SetParentVisible(value);
            }
        }
        ActuallyVisible(): boolean {
            return this._parentVisible && this.Visible();
        }
        Visible(value: boolean = null): boolean {
            if (value !== null) {
                this._rootElement.css({
                    visibility: value ? "" : "hidden",
                    display: ""
                });

                var len = this.Children.Count();
                for (var i = 0; i < len; i++) {
                    this.Children.ElementAt(i).SetParentVisible(value);
                }
            }
            return this._rootElement.css("visibility") !== "hidden" && this._rootElement.css("display") !== "none";
        }
        EnableByParent(): void {
            this._HandleEnableSet(this._Enabled);
            if (this._Enabled) {
                for (var i = 0; i < this.Children.Count(); i++) {
                    this.Children.ElementAt(i).EnableByParent();
                }
            }
        }
        DisableByParent(): void {
            this._HandleEnableSet(false);
            for (var i = 0; i < this.Children.Count(); i++) {
                this.Children.ElementAt(i).DisableByParent();
            }
        }
        _WasSelectionEnabled: boolean = false;
        Enabled(value: boolean = null): boolean {
            if (value !== null) {
                this._Enabled = value;

                for (var i = 0; i < this.Children.Count(); i++) {
                    var elem = this.Children.ElementAt(i);
                    if (this._Enabled) {
                        elem.EnableByParent();
                    }
                    else {
                        elem.DisableByParent();
                    }
                }

                this._HandleEnableSet(this._Enabled);
            }
            return this._Enabled;
        }
        ActuallyEnabled(): boolean {
            return !this.HasClass("Disabled");
        }
        _HandleEnableSet(enabled: boolean) {
            if (enabled) {
                this._rootElement.removeClass("Disabled");
                if (this._WasSelectionEnabled) {
                    this.EnableSelection();
                }
            }
            else {
                this._rootElement.addClass("Disabled");
                this._WasSelectionEnabled = this._SelectionEnabled;
                this.DisableSelection();
            }

            this._HandleFocusableSet(this.Focusable());
        }
        _HandleFocusableSet(focusable: boolean) {
            if (focusable && !this.HasClass("Disabled")) {
                this._rootElement.attr("tabindex", this._TabIndex.toString());

                if (this._rootElement.is(":focus") && !this.HasClass("Focused")) {
                    this.Focus();
                }
            }
            else {
                this._rootElement.removeAttr("tabindex");
            }

            if (!this._Focusable && this._rootElement.is(":focus")) {
                this.Blur();
            }
        }
        _Focusable: boolean = false;
        Focusable(value: boolean = null): boolean {
            if (value !== null) {
                this._Focusable = value;
                if (this._TabIndex === 0) {
                    this._TabIndex = ++_currTabIndex;
                }

                this._HandleFocusableSet(value);
            }
            return this._Focusable;
        }
       

        _SelectionEnabled: boolean = false;
        EnableSelection(): void {
            this._rootElement.enableSelection();
            this._SelectionEnabled = true;
        }
        DisableSelection(): void {
            this._rootElement.disableSelection();
            this._SelectionEnabled = false;
        }

        Focus(): void {
            this._rootElement.focus();
        }
        Blur(): void {
            this._rootElement.blur();
        }

        InvokeDefaultAction(): void {
        }

        IsRelativeLayout(): boolean {
            return this._rootElement.hasClass("RelativeLayout");
        }
        RelativeLayoutOn(): void {
            this.AddClass("RelativeLayout");
        }
        RelativeLayoutOff(): void {
            this.RemoveClass("RelativeLayout");
        }

        _TabIndex: number = 0;
        TabIndex(value: number = null): number {
            if (value !== null) {
                this._TabIndex = value;
                if (value === -2) {
                    this._rootElement.removeAttr("tabindex");
                }
                else {
                    this._rootElement.attr("tabindex", value.toString());
                }
            }
            var retVal = parseInt(this._rootElement.attr("tabindex"), 10);
            if (isNaN(retVal)) {
                retVal = -2;
            }
            return retVal;
        }
       
    }
}
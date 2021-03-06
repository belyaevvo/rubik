﻿module Rubik.UI {

    var __UIDGenerator = 0;
    export var Elements: object = {};

    export class FrameworkElement implements IFrameworkElement {
        __UID: number = __UIDGenerator++;

        _rootElement: JQuery = null;       
                
        _Enabled: boolean = true;

       

        constructor() {
            this._rootElement = $(document.createElement('div'));
            this._rootElement.addClass("FrameworkElement");
        }
        

        ID(value: string = null): string {
            if (value !== null) {
                var oldid = this._rootElement.attr("id");
                if (oldid !== null) {
                    delete Elements[oldid];
                }
                this._rootElement.attr("id", value);
                Elements[value] = this;
            }
            return this._rootElement.attr("id");
        }

        Element(): JQuery {
            return this._rootElement;
        }

        Empty(): void {
            this._rootElement.empty();            
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
        

        CSSNumberStyle(style: string, value: CSSNumber = null): CSSNumber {
            if (value !== null) {
                this._rootElement.css(style, value.ToString());
                //If we call only to set style value, we must avoid get value back
                return value;
            }
            return CSSNumber.FromString(this._rootElement.css(style));
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

        ClientWidth(): number {
            return this._rootElement.get(0).clientWidth;
        }
        ClientHeight(): number {
            return this._rootElement.get(0).clientHeight;
        }

        Top(value?: string | number): number | void {            
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

        MarginTop(value?: string | number): number | string | void {
            if (value) {
                this._rootElement.css("margin-top", value);
            }
            else if (value === "") {
                return this._rootElement.css("margin-top");
            }
            else {
                return this._rootElement.css("margin-top");
            }   
        }

        MarginLeft(value?: string | number): number | string | void {
            if (value) {
                this._rootElement.css("margin-left", value);
            }
            else if (value === "") {
                return this._rootElement.css("margin-left");
            }
            else {
                return this._rootElement.css("margin-left");
            }     
        }

        MarginBottom(value?: string | number): number | string | void {
            if (value) {
                this._rootElement.css("margin-bottom", value);
            }
            else if (value === "") {
                return this._rootElement.css("margin-bottom");
            }
            else {
                return this._rootElement.css("margin-bottom");
            }    
        }

        MarginRight(value?: string | number): number | string | void {
            if (value) {
                this._rootElement.css("margin-right", value);
            }
            else if (value === "") {
                return this._rootElement.css("margin-right");
            }
            else {
                return this._rootElement.css("margin-right");
            }    
        }

        
        MinWidth(value?: string | number): number | string | void {
            if (value) {
                this._rootElement.css("min-width", value);
            }
            else if (value === "") {
                return this._rootElement.css("min-width");
            }
            else {
                return this._rootElement.css("min-width");
            }             
        }
        MinHeight(value?: string | number): number | string | void {
            if (value) {
                this._rootElement.css("min-height", value);
            }
            else if (value === "") {
                return this._rootElement.css("min-height");
            }
            else {
                return this._rootElement.css("min-height");
            }             
        }
        MaxWidth(value?: string | number): number | string | void {
            if (value) {
                this._rootElement.css("max-width", value);
            }
            else if (value === "") {
                return this._rootElement.css("max-width");
            }
            else {
                return parseFloat(this._rootElement.css("max-width"));
            }             
        }
        MaxHeight(value?: string | number): number | string | void {
            if (value) {
                this._rootElement.css("max-height", value);
            }
            else if (value === "") {
                return this._rootElement.css("max-height");
            }
            else {
                return parseFloat(this._rootElement.css("max-height"));
            }             
        }

        _parentVisible: boolean = true;
        SetParentVisible(value: boolean): void {
            this._parentVisible = value;
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
            }
            return this._rootElement.css("visibility") !== "hidden" && this._rootElement.css("display") !== "none";
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
       
       
    }
}
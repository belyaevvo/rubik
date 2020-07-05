var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        var __UIDGenerator = 0;
        UI.Elements = {};
        class FrameworkElement {
            constructor() {
                this.__UID = __UIDGenerator++;
                this._rootElement = null;
                this._Enabled = true;
                this._parentVisible = true;
                this._rootElement = $(document.createElement('div'));
                this._rootElement.addClass("FrameworkElement");
            }
            ID(value = null) {
                if (value !== null) {
                    this._rootElement.attr("id", value);
                    UI.Elements[value] = this;
                }
                return this._rootElement.attr("id");
            }
            Element() {
                return this._rootElement;
            }
            Empty() {
                this._rootElement.empty();
            }
            GetStyle(name) {
                return this._rootElement.css(name);
            }
            ApplyStyle(name, value) {
                this._rootElement.css(name, value);
            }
            ApplyStyles(cssProps) {
                this._rootElement.css(cssProps);
            }
            AddClass(name) {
                if (!this.HasClass(name)) {
                    this._rootElement.addClass(name);
                }
            }
            RemoveClass(name) {
                this._rootElement.removeClass(name);
            }
            HasClass(name) {
                return this._rootElement.hasClass(name);
            }
            BackColor(color = null) {
                if (color !== null) {
                    this._rootElement.css("background-color", color);
                }
                return this._rootElement.css("background-color");
            }
            ForeColor(color) {
                if (color !== null) {
                    this._rootElement.css("color", color);
                }
                return this._rootElement.css("color");
            }
            CSSNumberStyle(style, value = null) {
                if (value !== null) {
                    this._rootElement.css(style, value.ToString());
                    //If we call only to set style value, we must avoid get value back
                    return value;
                }
                return UI.CSSNumber.FromString(this._rootElement.css(style));
            }
            Width(value) {
                if (value !== null) {
                    this._rootElement.width(value);
                }
                else {
                    return this._rootElement.width();
                }
            }
            Height(value) {
                if (value !== null) {
                    this._rootElement.height(value);
                }
                else {
                    return this._rootElement.height();
                }
            }
            ActualWidth() {
                return this._rootElement.outerWidth();
            }
            ActualHeight() {
                return this._rootElement.outerHeight();
            }
            Top(value) {
                if (value !== null) {
                    this._rootElement.css("top", value);
                }
                else {
                    return this._rootElement.position().top;
                }
            }
            Bottom(value) {
                if (value !== null) {
                    this._rootElement.css("bottom", value);
                }
                else {
                    return this._rootElement.position().top + this._rootElement.outerHeight(true);
                }
            }
            Left(value) {
                if (value !== null) {
                    this._rootElement.css("left", value);
                }
                else {
                    return this._rootElement.position().left;
                }
            }
            Right(value) {
                if (value !== null) {
                    this._rootElement.css("right", value);
                }
                else {
                    return this._rootElement.position().left + this._rootElement.outerWidth(true);
                }
            }
            MarginTop(value) {
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
            MarginLeft(value) {
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
            MarginBottom(value) {
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
            MarginRight(value) {
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
            MinWidth(value) {
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
            MinHeight(value) {
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
            MaxWidth(value) {
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
            MaxHeight(value) {
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
            SetParentVisible(value) {
                this._parentVisible = value;
            }
            ActuallyVisible() {
                return this._parentVisible && this.Visible();
            }
            Visible(value = null) {
                if (value !== null) {
                    this._rootElement.css({
                        visibility: value ? "" : "hidden",
                        display: ""
                    });
                }
                return this._rootElement.css("visibility") !== "hidden" && this._rootElement.css("display") !== "none";
            }
            InvokeDefaultAction() {
            }
            IsRelativeLayout() {
                return this._rootElement.hasClass("RelativeLayout");
            }
            RelativeLayoutOn() {
                this.AddClass("RelativeLayout");
            }
            RelativeLayoutOff() {
                this.RemoveClass("RelativeLayout");
            }
        }
        UI.FrameworkElement = FrameworkElement;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=FrameworkElement.js.map
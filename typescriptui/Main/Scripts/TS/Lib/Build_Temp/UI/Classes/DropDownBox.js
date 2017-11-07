var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="Windows/SelectionWindow.ts" />
    /// <reference path="ToggleIndicator.ts" />
    /// <reference path="Label.ts" />
    /// <reference path="Panel.ts" />
    /// <reference path="../Interfaces/IDropDownBox.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var DropDownBox = (function (_super) {
            __extends(DropDownBox, _super);
            //_SelectionWindow: ISelectionWindow<T>;
            function DropDownBox() {
                _super.call(this);
                this.OnSelectedIndexChange = new TSUI.Events.SelectedIndexChangeEvent();
                this.Items = new TSUI.Collections.List();

                this._rootElement.addClass("DropDownBox");

                //this._InputContentPanel = new Panel();
                //this.Children.Add(this._InputContentPanel);
                this._UnderlyingSelectBox = $("<select>");

                //this._UnderlyingTextBox = new Label();
                //this._UnderlyingTextBox.Focusable(true);
                //this._UnderlyingTextBox.OnFocus.Attach(new Events.FocusEventHandler(this._UnderlyingControl_OnFocus, this));
                //this._UnderlyingTextBox.OnBlur.Attach(new Events.BlurEventHandler(this._UnderlyingControl_OnBlur, this));
                //this._InputContentPanel.Children.Add(this._UnderlyingTextBox);
                //this._DropDownToggle = new ToggleIndicatorLabel();
                //this._DropDownToggle.SetIndicatorToOff();
                //this._DropDownToggle.Focusable(false);
                //this._DropDownToggle.OnClick.Attach(new Events.ClickEventHandler(this._DropDownToggle_OnClick, this));
                //this._InputContentPanel.Children.Add(this._DropDownToggle);
                this.Focusable(true);

                //this._SelectionWindow = new SelectionWindow();
                //this._SelectionWindow.ContentPanel.OnSelectionMade.Attach(new Events.SelectionMadeEventHandler(this.SelectionWindow_OnSelectionMade, this));
                //this._SelectionWindow.ContentPanel.OnSelectedIndexChange.Attach(new Events.SelectedIndexChangeEventHandler(this.SelectionWindow_OnSelectedIndexChanged, this));
                //this._SelectionWindow.OnClose.Attach(new Events.CloseEventHandler(this.SelectionWindow_Close, this));
                //this.Items = this._SelectionWindow.ContentPanel.Items;
                //this._SelectionWindow.ConstructDOM($("body"));
                this.Items.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._Items_OnModified, this));
            }
            DropDownBox.prototype._Items_OnModified = function (eventArgs) {
                switch (eventArgs.Modification) {
                    case TSUI.Events.CollectionModifications.Add:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            this._AddRowForItem(elem);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Remove:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            var index = elem.Index;
                            $(this._UnderlyingSelectBox.children()[index]).remove();
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        this._ClearRows();
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            this._AddRowForItem(elem);
                        }
                        break;
                }
            };
            DropDownBox.prototype._ClearRows = function () {
                this._UnderlyingSelectBox.html("");
            };
            DropDownBox.prototype._AddRowForItem = function (elem) {
                var newRow = this._CreateRow(elem);
                elem.Index = this._UnderlyingSelectBox.children().length;
                this._UnderlyingSelectBox.append(newRow);
            };
            DropDownBox.prototype._CreateRow = function (elem) {
                var newRow = $("<option>");
                newRow.text(elem.Text());
                newRow.attr("value", elem.Value());
                return newRow;
            };

            DropDownBox.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    _this._rootElement.append(_this._UnderlyingSelectBox);

                    _this._UnderlyingSelectBox.on("focus", function (event) {
                        _this._UnderlyingControl_OnFocus(new TSUI.Events.FocusEventArgs(_this, event));
                    });
                    _this._UnderlyingSelectBox.on("blur", function (event) {
                        _this._UnderlyingControl_OnBlur(new TSUI.Events.BlurEventArgs(_this, event));
                    });

                    if (onComplete) {
                        onComplete();
                    }
                });
            };
            DropDownBox.prototype.DestroyDOM = function () {
                this._UnderlyingSelectBox.remove();

                _super.prototype.DestroyDOM.call(this);
            };

            DropDownBox.prototype._HandleFocusableSet = function (focusable) {
                if (focusable && !this.HasClass("Disabled")) {
                    this._UnderlyingSelectBox.attr("tabindex", this._TabIndex.toString());

                    if (this._UnderlyingSelectBox.is(":focus") && !this.HasClass("Focused")) {
                        this.Focus();
                    }
                } else {
                    this._UnderlyingSelectBox.removeAttr("tabindex");
                }

                if (!this._Focusable && this._UnderlyingSelectBox.is(":focus")) {
                    this.Blur();
                }
            };

            DropDownBox.prototype.SelectedIndex = function (value) {
                if (typeof value === "undefined") { value = null; }
                return this._UnderlyingSelectBox[0].selectedIndex;
            };

            DropDownBox.prototype._OnFocus = function (event) {
                _super.prototype._OnFocus.call(this, event);
                if (this.ActuallyEnabled()) {
                    this.AddClass("Focused");
                    if (UI.JustUsedTabKeyTime + 50 > Date.now()) {
                        this.AddClass("TabFocused");
                    }
                }
            };
            DropDownBox.prototype._OnBlur = function (event) {
                _super.prototype._OnBlur.call(this, event);
                this.RemoveClass("Focused");
                this.RemoveClass("TabFocused");
            };

            DropDownBox.prototype._UnderlyingControl_OnFocus = function (eventArgs) {
                this._OnFocus(eventArgs.jqEvent);
            };
            DropDownBox.prototype._UnderlyingControl_OnBlur = function (eventArgs) {
                this._OnBlur(eventArgs.jqEvent);
            };

            DropDownBox.prototype.Focus = function () {
                this._UnderlyingSelectBox.focus();
            };
            DropDownBox.prototype.Blur = function () {
                this._UnderlyingSelectBox.blur();
            };

            DropDownBox.prototype.Enabled = function (value) {
                var result = _super.prototype.Enabled.call(this, value);
                if (result) {
                    this._UnderlyingSelectBox.removeAttr("disabled");
                } else {
                    this._UnderlyingSelectBox.attr("disabled", "disabled");
                }
                return result;
            };
            return DropDownBox;
        })(UI.Control);
        UI.DropDownBox = DropDownBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

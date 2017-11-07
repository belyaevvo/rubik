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
    /// <reference path="StackPanelRow.ts" />
    /// <reference path="Label.ts" />
    /// <reference path="../Interfaces/IListBox.d.ts" />
    /// <reference path="StackPanel.ts" />
    (function (UI) {
        var ListBox = (function (_super) {
            __extends(ListBox, _super);
            function ListBox() {
                _super.call(this);
                this.OnSelectionMade = new TSUI.Events.SelectionMadeEvent();
                this.OnSelectedIndexChange = new TSUI.Events.SelectedIndexChangeEvent();
                this.Items = new TSUI.Collections.List();
                this._FocusIndex = -1;
                this._GetElementWithHighestSequentialTabIndex_Cache = null;
                this._SelectedIndex = -1;
                this._SelectedRow = null;

                this._rootElement.addClass("ListBox");

                this.Items.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._Items_OnModified, this));

                this.Focusable(true);
            }
            ListBox.prototype._Items_OnModified = function (eventArgs) {
                this._GetElementWithHighestSequentialTabIndex_Cache = null;

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
                            this.Rows.RemoveAt(index);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        this.Rows.Clear();
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            this._AddRowForItem(elem);
                        }
                        break;
                }
            };
            ListBox.prototype._AddRowForItem = function (elem) {
                var newRow = this._CreateRow(elem);
                elem.Index = this.Rows.Count();
                this.Rows.Add(newRow);
            };
            ListBox.prototype._CreateRow = function (elem) {
                var newRow = new UI.StackPanelRow();
                var newLabel = new UI.Label(elem.Text());
                newLabel.RelativeLayoutOn();
                newRow.Children.Add(newLabel);
                newRow.Focusable(true);
                newRow.OnFocus.Attach(new TSUI.Events.FocusEventHandler(this._UnderlyingControl_OnFocus, this));
                newRow.OnBlur.Attach(new TSUI.Events.BlurEventHandler(this._UnderlyingControl_OnBlur, this));
                newRow.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._StackPanelRow_Clicked, this));
                newRow.OnKeyDown.Attach(new TSUI.Events.KeyDownEventHandler(this._UnderlyingControl_KeyDown, this));
                newRow.InvokeDefaultAction = function () {
                    this._rootElement.click();
                };
                return newRow;
            };

            ListBox.prototype._HandleFocusableSet = function (focusable) {
                this._rootElement.removeAttr("tabindex");
            };

            ListBox.prototype._OnFocus = function (event) {
                _super.prototype._OnFocus.call(this, event);
                UI.preventTabKey = true;
                if (this.ActuallyEnabled()) {
                    this.AddClass("Focused");
                    if (UI.JustUsedTabKeyTime + 50 > Date.now()) {
                        this.AddClass("TabFocused");
                    }
                }
            };
            ListBox.prototype._OnBlur = function (event) {
                _super.prototype._OnBlur.call(this, event);
                UI.preventTabKey = false;
                this.RemoveClass("Focused");
                this.RemoveClass("TabFocused");
            };

            ListBox.prototype._UnderlyingControl_KeyDown = function (eventArgs) {
                if (this.ActuallyEnabled()) {
                    if (eventArgs.jqEvent.keyCode === 38) {
                        if (this._FocusIndex > 0) {
                            if (this._FocusIndex > -1) {
                                this.Rows.ElementAt(this._FocusIndex).Blur();
                            }
                            this._FocusIndex--;
                            this.Rows.ElementAt(this._FocusIndex).Focus();
                        }
                        TSUI.StopEvent(eventArgs.jqEvent);
                    } else if (eventArgs.jqEvent.keyCode === 40) {
                        if (this._FocusIndex < this.Items.Count() - 1) {
                            if (this._FocusIndex > -1) {
                                this.Rows.ElementAt(this._FocusIndex).Blur();
                            }
                            this._FocusIndex++;
                            this.Rows.ElementAt(this._FocusIndex).Focus();
                        }
                        TSUI.StopEvent(eventArgs.jqEvent);
                    } else if (eventArgs.jqEvent.keyCode === 9) {
                        if (eventArgs.jqEvent.shiftKey) {
                            if (this._FocusIndex > 0) {
                                UI.preventTabKey = true;
                                this.Rows.ElementAt(this._FocusIndex).Blur();
                                this._FocusIndex--;
                                this.Rows.ElementAt(this._FocusIndex).Focus();
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else if (this._FocusIndex === -1) {
                                this._FocusIndex = this.Rows.Count() - 1;
                                this.Rows.ElementAt(this._FocusIndex).Blur();
                                UI.preventTabKey = true;
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else {
                                this._FocusIndex = -1;
                                UI.preventTabKey = false;
                            }
                        } else {
                            if (this._FocusIndex === -1 && this.Items.Count() > 0) {
                                UI.preventTabKey = true;
                                this._FocusIndex++;
                                this.Rows.ElementAt(this._FocusIndex).Focus();
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else if (this._FocusIndex < this.Items.Count() - 1) {
                                UI.preventTabKey = true;
                                this.Rows.ElementAt(this._FocusIndex).Blur();
                                this._FocusIndex++;
                                this.Rows.ElementAt(this._FocusIndex).Focus();
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else {
                                if (this._FocusIndex !== -1) {
                                    this.Rows.ElementAt(this._FocusIndex).Blur();
                                }
                                this._GetElementWithHighestSequentialTabIndex().Focus();
                                UI.preventTabKey = false;
                                this._FocusIndex = -1;
                            }
                        }
                    }
                } else {
                    TSUI.StopEvent(eventArgs.jqEvent);
                }
            };

            ListBox.prototype._GetElementWithHighestSequentialTabIndex = function () {
                if (this._GetElementWithHighestSequentialTabIndex_Cache === null) {
                    var result = this.Rows.ElementAt(0).TabIndex();
                    var resultElem = this.Rows.ElementAt(0);
                    var highest = 0;
                    var excludeTBs = [];
                    var elems = [];
                    for (var i = 0; i < this.Rows.Count(); i++) {
                        var elem = this.Rows.ElementAt(i);
                        var tb = elem.TabIndex();
                        excludeTBs.push(tb);
                        if (tb > highest) {
                            highest = tb;
                            elems[tb] = elem;
                        }
                    }
                    for (var i = result + 1; i <= highest; i++) {
                        if (excludeTBs.indexOf(i) === -1) {
                            var el = $("*[tabindex=\"" + i.toString(10) + "\"]");
                            if (el.length > 0) {
                                break;
                            }
                        } else {
                            result = i;
                            resultElem = elems[i];
                        }
                    }

                    this._GetElementWithHighestSequentialTabIndex_Cache = resultElem;
                }

                return this._GetElementWithHighestSequentialTabIndex_Cache;
            };

            ListBox.prototype._UnderlyingControl_OnFocus = function (eventArgs) {
                if (eventArgs.Sender instanceof UI.StackPanelRow) {
                    var oldIndex = this._FocusIndex;
                    this._FocusIndex = this.Rows.IndexOf(eventArgs.Sender);
                    if (this._FocusIndex !== 0 && oldIndex === -1 && UI.JustUsedTabKeyTime + 50 > Date.now()) {
                        this._FocusIndex = this.Rows.Count() - 1;
                        this.Rows.ElementAt(this._FocusIndex).Focus();
                    }
                } else {
                    this._FocusIndex = -1;
                }
                this._OnFocus(eventArgs.jqEvent);
            };
            ListBox.prototype._UnderlyingControl_OnBlur = function (eventArgs) {
                this._OnBlur(eventArgs.jqEvent);
            };

            ListBox.prototype._StackPanelRow_Clicked = function (eventArgs) {
                TSUI.StopEvent(eventArgs.jqEvent);
                var itemNum = this.Rows.IndexOf(eventArgs.Sender);
                eventArgs.Sender.Focus();
                this.SelectedIndex(itemNum);
            };

            ListBox.prototype.SelectedIndex = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (value < -1 || value > this.Items.Count()) {
                        throw new TSUI.Exceptions.ArgumentException("SelectedIndex");
                    }

                    var oldIndex = this._SelectedIndex;
                    this._SelectedIndex = value;

                    if (value === -1) {
                        if (this._SelectedRow !== null) {
                            this._SelectedRow.RemoveClass("Selected");
                        }
                    } else {
                        if (this._SelectedRow !== null) {
                            this._SelectedRow.RemoveClass("Selected");
                        }

                        this._SelectedRow = this.Rows.ElementAt(value);
                        this._SelectedRow.AddClass("Selected");
                    }

                    this.OnSelectionMade.Invoke(new TSUI.Events.SelectionMadeEventArgs(this));
                    if (oldIndex !== this._SelectedIndex) {
                        this.OnSelectedIndexChange.Invoke(new TSUI.Events.SelectedIndexChangeEventArgs(this));
                    }
                }
                return this._SelectedIndex;
            };

            ListBox.prototype.Focus = function () {
                this.Rows.ElementAt(0).Focus();
                this._FocusIndex = 0;
            };
            ListBox.prototype.Blur = function () {
                if (this._FocusIndex > -1) {
                    this.Rows.ElementAt(this._FocusIndex).Blur();
                    this._FocusIndex = -1;
                }
            };
            return ListBox;
        })(UI.StackPanel);
        UI.ListBox = ListBox;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

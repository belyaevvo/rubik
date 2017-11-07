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
    /// <reference path="../Interfaces/ITab.d.ts" />
    /// <reference path="Button.ts" />
    /// <reference path="Panel.ts" />
    /// <reference path="../Interfaces/ITabControl.d.ts" />
    /// <reference path="Control.ts" />
    (function (UI) {
        var TabControl = (function (_super) {
            __extends(TabControl, _super);
            function TabControl() {
                _super.call(this);
                this.OnSelectedIndexChange = new TSUI.Events.SelectedIndexChangeEvent();
                this.Tabs = new TSUI.Collections.List();
                this._TabButtons = [];
                this._FocusIndex = -1;
                this._GetElementWithHighestSequentialTabIndex_Cache = null;
                this._SelectedIndex = -1;

                this._rootElement.addClass("TabControl");

                this._TabButtonsPanel = new UI.Panel();
                this._TabButtonsPanel.AddClass("TabButtons");
                this.Children.Add(this._TabButtonsPanel);

                this._TabButtonsInnerPanel = new UI.Panel();
                this._TabButtonsInnerPanel.RelativeLayoutOn();
                this._TabButtonsPanel.Children.Add(this._TabButtonsInnerPanel);

                this._TabsContainer = new UI.Panel();
                this._TabsContainer.AddClass("TabsContainer");
                this.Children.Add(this._TabsContainer);

                this._SelectedTabBar = new UI.Panel();
                this._SelectedTabBar.AddClass("SelectedTabBar");
                this._TabButtonsInnerPanel.Children.Add(this._SelectedTabBar);

                this.Tabs.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._Tabs_OnModified, this));
            }
            TabControl.prototype.ConstructDOM = function (parent, onComplete) {
                if (typeof onComplete === "undefined") { onComplete = null; }
                var _this = this;
                _super.prototype.ConstructDOM.call(this, parent, function () {
                    if (_this.Tabs.Count() > 0) {
                        var tab = _this.Tabs.ElementAt(0);
                        var tabButton = _this._TabButtons[tab.Name()];

                        tabButton.AddClass("Selected");
                        tab.Visible(true);
                        _this._SelectedIndex = 0;

                        var tabButtonLeft = tabButton.AnimationElement().position().left;
                        var tabButtonWidth = tabButton.ActualWidth();
                        _this._SelectedTabBar.AnimationElement().css({
                            left: tabButtonLeft,
                            width: tabButtonWidth
                        });

                        var totalButtonWidth = 0;
                        for (var i = 0; i < _this.Tabs.Count(); i++) {
                            var tab = _this.Tabs.ElementAt(i);
                            var tabButton = _this._TabButtons[tab.Name()];
                            totalButtonWidth += tabButton.ActualWidth();
                        }
                        _this._TabButtonsInnerPanel.Width(new UI.CSSNumber(totalButtonWidth + 10));
                    }

                    if (onComplete) {
                        onComplete();
                    }
                });
            };

            TabControl.prototype._UnderlyingControl_KeyDown = function (eventArgs) {
                if (this.ActuallyEnabled()) {
                    if (eventArgs.jqEvent.keyCode === 38) {
                        if (this._FocusIndex > 0) {
                            if (this._FocusIndex > -1) {
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                            }
                            this._FocusIndex--;
                            this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Focus();
                        }
                        TSUI.StopEvent(eventArgs.jqEvent);
                    } else if (eventArgs.jqEvent.keyCode === 40) {
                        if (this._FocusIndex < this.Tabs.Count() - 1) {
                            if (this._FocusIndex > -1) {
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                            }
                            this._FocusIndex++;
                            this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Focus();
                        }
                        TSUI.StopEvent(eventArgs.jqEvent);
                    } else if (eventArgs.jqEvent.keyCode === 9) {
                        if (eventArgs.jqEvent.shiftKey) {
                            if (this._FocusIndex > 0) {
                                UI.preventTabKey = true;
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                                this._FocusIndex--;
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Focus();
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else if (this._FocusIndex === -1) {
                                this._FocusIndex = this.Tabs.Count() - 1;
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                                UI.preventTabKey = true;
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else {
                                this._FocusIndex = -1;
                                UI.preventTabKey = false;
                            }
                        } else {
                            if (this._FocusIndex === -1 && this.Tabs.Count() > 0) {
                                UI.preventTabKey = true;
                                this._FocusIndex++;
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Focus();
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else if (this._FocusIndex < this.Tabs.Count() - 1) {
                                UI.preventTabKey = true;
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                                this._FocusIndex++;
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Focus();
                                TSUI.StopEvent(eventArgs.jqEvent);
                            } else {
                                if (this._FocusIndex !== -1) {
                                    this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
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

            TabControl.prototype._GetElementWithHighestSequentialTabIndex = function () {
                if (this._GetElementWithHighestSequentialTabIndex_Cache === null) {
                    var result = this._TabButtons[this.Tabs.ElementAt(0).Name()].TabIndex();
                    var resultElem = this._TabButtons[this.Tabs.ElementAt(0).Name()];
                    var highest = 0;
                    var excludeTBs = [];
                    var elems = [];
                    for (var i = 0; i < this.Tabs.Count(); i++) {
                        var elem = this._TabButtons[this.Tabs.ElementAt(i).Name()];
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

            TabControl.prototype._Tabs_OnModified = function (eventArgs) {
                switch (eventArgs.Modification) {
                    case TSUI.Events.CollectionModifications.Add:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            this._ConstructTab(elem);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Remove:
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            this._DestroyTab(elem);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        this._TabButtonsInnerPanel.Children.Clear();
                        this._TabsContainer.Children.Clear();
                        this._TabButtons = [];
                        for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++) {
                            var elem = eventArgs.ModifiedElements.ElementAt(i);
                            this._ConstructTab(elem);
                        }
                        break;
                }
            };
            TabControl.prototype._ConstructTab = function (tab) {
                this._TabsContainer.Children.Add(tab);

                var newTabButton = new UI.Button();
                newTabButton.AddClass("TabButton");
                newTabButton.Text(tab.Name());
                newTabButton.RelativeLayoutOn();
                newTabButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._TabButton_Clicked, this));
                newTabButton.OnKeyDown.Attach(new TSUI.Events.KeyDownEventHandler(this._UnderlyingControl_KeyDown, this));
                this._TabButtonsInnerPanel.Children.Add(newTabButton);

                this._TabButtons[tab.Name()] = newTabButton;

                if (this.DOMConstructed) {
                    var totalButtonWidth = 0;
                    for (var i = 0; i < this.Tabs.Count(); i++) {
                        var tab = this.Tabs.ElementAt(i);
                        var tabButton = this._TabButtons[tab.Name()];
                        totalButtonWidth += tabButton.ActualWidth();
                    }
                    this._TabButtonsInnerPanel.Width(new UI.CSSNumber(totalButtonWidth + 10));
                }
            };
            TabControl.prototype._DestroyTab = function (tab) {
                this._TabsContainer.Children.Remove(tab);

                var name = tab.Name();
                var tabButton = this._TabButtons[name];
                this._TabButtonsInnerPanel.Children.Remove(tabButton);
                this._TabButtons[name] = undefined;
            };

            TabControl.prototype._Tab_NameChanged = function (eventArgs) {
                var tabButton = this._TabButtons[eventArgs.oldName];
                var newName = eventArgs.Sender.Name();
                tabButton.Text(newName);
                this._TabButtons[eventArgs.oldName] = undefined;
                this._TabButtons[newName] = tabButton;
            };
            TabControl.prototype._TabButton_Clicked = function (eventArgs) {
                var index = this._TabButtonsInnerPanel.Children.IndexOf(eventArgs.Sender) - 1;
                this.SelectedIndex(index);
            };

            TabControl.prototype.SelectedIndex = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    if (value > -1 && value < this.Tabs.Count()) {
                        var oldVal = this._SelectedIndex;
                        this._SelectedIndex = value;

                        if (oldVal !== value) {
                            this.OnSelectedIndexChange.Invoke(new TSUI.Events.SelectedIndexChangeEventArgs(this));

                            var _this = this;
                            var wasEnabled = this.Enabled();
                            _this.Enabled(false);
                            if (oldVal !== -1) {
                                this._HideTab(oldVal);
                            }
                            this._ShowTab(value, function () {
                                _this.Enabled(wasEnabled);
                            });
                        }
                    }
                }
                return this._SelectedIndex;
            };

            TabControl.prototype._ShowTab = function (index, callback) {
                if (typeof callback === "undefined") { callback = null; }
                var tab = this.Tabs.ElementAt(index);
                var tabButton = this._TabButtons[tab.Name()];

                var tabButtonLeft = tabButton.AnimationElement().position().left;
                var tabButtonWidth = tabButton.ActualWidth();
                this._SelectedTabBar.AnimationElement().animate({
                    left: tabButtonLeft,
                    width: tabButtonWidth
                }, 350, "swing");

                tabButton.AddClass("Selected");
                tab.ApplyStyle("z-index", "2");
                tab.Show(callback);
            };
            TabControl.prototype._HideTab = function (index, callback) {
                if (typeof callback === "undefined") { callback = null; }
                var tab = this.Tabs.ElementAt(index);
                var tabButton = this._TabButtons[tab.Name()];

                tabButton.RemoveClass("Selected");
                tab.ApplyStyle("z-index", "1");
                tab.Hide(callback);
            };
            return TabControl;
        })(UI.Control);
        UI.TabControl = TabControl;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

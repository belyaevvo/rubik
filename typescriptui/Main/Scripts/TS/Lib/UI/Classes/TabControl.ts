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

module TSUI.UI
{
    export class TabControl extends Control implements ITabControl
    {
        OnSelectedIndexChange: Events.SelectedIndexChangeEvent = new Events.SelectedIndexChangeEvent();

        Tabs: Collections.IList<ITab> = new Collections.List<ITab>();

        _TabButtonsPanel: IPanel;
        _TabButtonsInnerPanel: IPanel;
        _TabsContainer: IPanel;

        _SelectedTabBar: IPanel;

        _TabButtons: any[] = [];

        _FocusIndex: number = -1;

        constructor()
        {
            super();

            this._rootElement.addClass("TabControl");

            this._TabButtonsPanel = new Panel();
            this._TabButtonsPanel.AddClass("TabButtons");
            this.Children.Add(this._TabButtonsPanel);
            
            this._TabButtonsInnerPanel = new Panel();
            this._TabButtonsInnerPanel.RelativeLayoutOn();
            this._TabButtonsPanel.Children.Add(this._TabButtonsInnerPanel);
            
            this._TabsContainer = new Panel();
            this._TabsContainer.AddClass("TabsContainer");
            this.Children.Add(this._TabsContainer);

            this._SelectedTabBar = new Panel();
            this._SelectedTabBar.AddClass("SelectedTabBar");
            this._TabButtonsInnerPanel.Children.Add(this._SelectedTabBar);

            this.Tabs.OnModified.Attach(new Events.CollectionModifiedEventHandler<ITab>(this._Tabs_OnModified, this));
        }

        ConstructDOM(parent: JQuery, onComplete:()=>void = null): void
        {
            var _this = this;
            super.ConstructDOM(parent, function ()
            {
                if (_this.Tabs.Count() > 0)
                {
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
                    for (var i = 0; i < _this.Tabs.Count(); i++)
                    {
                        var tab = _this.Tabs.ElementAt(i);
                        var tabButton = _this._TabButtons[tab.Name()];
                        totalButtonWidth += tabButton.ActualWidth();
                    }
                    _this._TabButtonsInnerPanel.Width(new CSSNumber(totalButtonWidth + 10));
                }

                if (onComplete)
                {
                    onComplete();
                }
            });
        }

        _UnderlyingControl_KeyDown(eventArgs: Events.KeyDownEventArgs)
        {
            if (this.ActuallyEnabled())
            {
                if (eventArgs.jqEvent.keyCode === 38)
                {
                    if (this._FocusIndex > 0)
                    {
                        if (this._FocusIndex > -1)
                        {
                            this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                        }
                        this._FocusIndex--;
                        this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Focus();
                    }
                    StopEvent(eventArgs.jqEvent);
                }
                else if (eventArgs.jqEvent.keyCode === 40)
                {
                    if (this._FocusIndex < this.Tabs.Count() - 1)
                    {
                        if (this._FocusIndex > -1)
                        {
                            this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                        }
                        this._FocusIndex++;
                        this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Focus();
                    }
                    StopEvent(eventArgs.jqEvent);
                }
                else if (eventArgs.jqEvent.keyCode === 9)
                {
                    if (eventArgs.jqEvent.shiftKey)
                    {   
                        if (this._FocusIndex > 0)
                        {
                            preventTabKey = true;
                            this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                            this._FocusIndex--;
                            this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Focus();
                            StopEvent(eventArgs.jqEvent);
                        }
                        else if (this._FocusIndex === -1)
                        {
                            this._FocusIndex = this.Tabs.Count() - 1;
                            this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                            preventTabKey = true;
                            StopEvent(eventArgs.jqEvent);
                        }
                        else
                        {
                            this._FocusIndex = -1;
                            preventTabKey = false;
                        }
                    }
                    else
                    {
                        if (this._FocusIndex === -1 && this.Tabs.Count() > 0)
                        {
                            preventTabKey = true;
                            this._FocusIndex++;
                            this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Focus();
                            StopEvent(eventArgs.jqEvent);
                        }
                        else if (this._FocusIndex < this.Tabs.Count() - 1)
                        {
                            preventTabKey = true;
                            this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                            this._FocusIndex++;
                            this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Focus();
                            StopEvent(eventArgs.jqEvent);
                        }
                        else
                        {
                            if (this._FocusIndex !== -1)
                            {
                                this._TabButtons[this.Tabs.ElementAt(this._FocusIndex).Name()].Blur();
                            }
                            this._GetElementWithHighestSequentialTabIndex().Focus();
                            preventTabKey = false;
                            this._FocusIndex = -1;
                        }
                    }
                }
            }
            else
            {
                StopEvent(eventArgs.jqEvent);
            }
        }
        
        _GetElementWithHighestSequentialTabIndex_Cache: IControl = null;
        _GetElementWithHighestSequentialTabIndex(): IControl
        {
            if (this._GetElementWithHighestSequentialTabIndex_Cache === null)
            {
                var result = <number>this._TabButtons[this.Tabs.ElementAt(0).Name()].TabIndex();
                var resultElem = this._TabButtons[this.Tabs.ElementAt(0).Name()];
                var highest = 0;
                var excludeTBs = [];
                var elems = [];
                for (var i = 0; i < this.Tabs.Count(); i++)
                {
                    var elem = this._TabButtons[this.Tabs.ElementAt(i).Name()];
                    var tb: number = elem.TabIndex();
                    excludeTBs.push(tb);
                    if (tb > highest)
                    {
                        highest = tb;
                        elems[tb] = elem;
                    }
                }
                for (var i = result + 1; i <= highest; i++)
                {
                    if (excludeTBs.indexOf(i) === -1)
                    {
                        var el = $("*[tabindex=\"" + i.toString(10) + "\"]");
                        if (el.length > 0)
                        {
                            break;
                        }
                    }
                    else
                    {
                        result = i;
                        resultElem = elems[i];
                    }
                }

                this._GetElementWithHighestSequentialTabIndex_Cache = resultElem;
            }
            
            return this._GetElementWithHighestSequentialTabIndex_Cache;
        }

        _Tabs_OnModified(eventArgs: Events.CollectionModifiedEventArgs<ITab>)
        {
            switch (eventArgs.Modification)
            {
                case Events.CollectionModifications.Add:
                    for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++)
                    {
                        var elem = eventArgs.ModifiedElements.ElementAt(i);
                        this._ConstructTab(elem);
                    }
                    break;
                case Events.CollectionModifications.Remove:
                    for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++)
                    {
                        var elem = eventArgs.ModifiedElements.ElementAt(i);
                        this._DestroyTab(elem);
                    }
                    break;
                case Events.CollectionModifications.Reorder:
                    this._TabButtonsInnerPanel.Children.Clear();
                    this._TabsContainer.Children.Clear();
                    this._TabButtons = [];
                    for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++)
                    {
                        var elem = eventArgs.ModifiedElements.ElementAt(i);
                        this._ConstructTab(elem);
                    }
                    break;
            }
        }
        _ConstructTab(tab: ITab): void
        {
            this._TabsContainer.Children.Add(tab);

            var newTabButton = new Button();
            newTabButton.AddClass("TabButton");
            newTabButton.Text(tab.Name());
            newTabButton.RelativeLayoutOn();
            newTabButton.OnClick.Attach(new Events.ClickEventHandler(this._TabButton_Clicked, this));
            newTabButton.OnKeyDown.Attach(new Events.KeyDownEventHandler(this._UnderlyingControl_KeyDown, this));
            this._TabButtonsInnerPanel.Children.Add(newTabButton);

            this._TabButtons[tab.Name()] = newTabButton;

            if (this.DOMConstructed)
            {
                var totalButtonWidth = 0;
                for (var i = 0; i < this.Tabs.Count(); i++)
                {
                    var tab = this.Tabs.ElementAt(i);
                    var tabButton = this._TabButtons[tab.Name()];
                    totalButtonWidth += tabButton.ActualWidth();
                }
                this._TabButtonsInnerPanel.Width(new CSSNumber(totalButtonWidth + 10));
            }
        }
        _DestroyTab(tab: ITab): void
        {
            this._TabsContainer.Children.Remove(tab);
            
            var name = tab.Name();
            var tabButton = this._TabButtons[name];
            this._TabButtonsInnerPanel.Children.Remove(tabButton);
            this._TabButtons[name] = undefined;
        }

        _Tab_NameChanged(eventArgs: Events.NameChangeEventArgs)
        {
            var tabButton = this._TabButtons[eventArgs.oldName];
            var newName = (<ITab>eventArgs.Sender).Name();
            tabButton.Text(newName);
            this._TabButtons[eventArgs.oldName] = undefined;
            this._TabButtons[newName] = tabButton;
        }
        _TabButton_Clicked(eventArgs: Events.ClickEventArgs)
        {
            var index = this._TabButtonsInnerPanel.Children.IndexOf(eventArgs.Sender) - 1;
            this.SelectedIndex(index);
        }

        _SelectedIndex: number = -1;
        SelectedIndex(value: number = null): number
        {
            if (value !== null)
            {
                if (value > -1 && value < this.Tabs.Count())
                {
                    var oldVal = this._SelectedIndex;
                    this._SelectedIndex = value;

                    if (oldVal !== value)
                    {
                        this.OnSelectedIndexChange.Invoke(new Events.SelectedIndexChangeEventArgs(this));

                        var _this = this;
                        var wasEnabled = this.Enabled();
                        _this.Enabled(false);
                        if (oldVal !== -1)
                        {
                            this._HideTab(oldVal);
                        }
                        this._ShowTab(value, function ()
                        {
                            _this.Enabled(wasEnabled);
                        });
                    }
                }
            }
            return this._SelectedIndex;
        }

        _ShowTab(index: number, callback: ()=>void = null): void
        {
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
        }
        _HideTab(index: number, callback: ()=>void = null): void
        {
            var tab = this.Tabs.ElementAt(index);
            var tabButton = this._TabButtons[tab.Name()];

            tabButton.RemoveClass("Selected");
            tab.ApplyStyle("z-index", "1");
            tab.Hide(callback);
        }
    }
}
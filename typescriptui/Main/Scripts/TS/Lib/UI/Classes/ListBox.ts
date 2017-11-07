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

module TSUI.UI
{
    export class ListBox<T> extends StackPanel implements IListBox<T>
    {
        OnSelectionMade: Events.SelectionMadeEvent = new Events.SelectionMadeEvent();
        OnSelectedIndexChange: Events.SelectedIndexChangeEvent = new Events.SelectedIndexChangeEvent();
        
        Items: Collections.List<IListItem<T>> = new Collections.List<IListItem<T>>();

        constructor()
        {
            super();

            this._rootElement.addClass("ListBox");

            this.Items.OnModified.Attach(new Events.CollectionModifiedEventHandler<IListItem>(this._Items_OnModified, this));

            this.Focusable(true);
        }

        _Items_OnModified(eventArgs: Events.CollectionModifiedEventArgs<IListItem<T>>)
        {
            this._GetElementWithHighestSequentialTabIndex_Cache = null;

            switch (eventArgs.Modification)
            {
                case Events.CollectionModifications.Add:
                    for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++)
                    {
                        var elem = eventArgs.ModifiedElements.ElementAt(i);
                        this._AddRowForItem(elem);
                    }
                    break;
                case Events.CollectionModifications.Remove:
                    for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++)
                    {
                        var elem = eventArgs.ModifiedElements.ElementAt(i);
                        var index = elem.Index;
                        this.Rows.RemoveAt(index);
                    }
                    break;
                case Events.CollectionModifications.Reorder:
                    this.Rows.Clear();
                    for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++)
                    {
                        var elem = eventArgs.ModifiedElements.ElementAt(i);
                        this._AddRowForItem(elem);
                    }
                    break;
            }
        }
        _AddRowForItem(elem: IListItem<T>): void
        {
            var newRow = this._CreateRow(elem);
            elem.Index = this.Rows.Count();
            this.Rows.Add(newRow);
        }
        _CreateRow(elem: IListItem<T>): IStackPanelRow
        {
            var newRow = new StackPanelRow();
            var newLabel = new Label(elem.Text());
            newLabel.RelativeLayoutOn();
            newRow.Children.Add(newLabel);
            newRow.Focusable(true);
            newRow.OnFocus.Attach(new Events.FocusEventHandler(this._UnderlyingControl_OnFocus, this));
            newRow.OnBlur.Attach(new Events.BlurEventHandler(this._UnderlyingControl_OnBlur, this));
            newRow.OnClick.Attach(new Events.ClickEventHandler(this._StackPanelRow_Clicked, this));
            newRow.OnKeyDown.Attach(new Events.KeyDownEventHandler(this._UnderlyingControl_KeyDown, this));
            newRow.InvokeDefaultAction = function ()
            {
                this._rootElement.click();
            };
            return newRow;
        }

        _HandleFocusableSet(focusable: boolean)
        {
            this._rootElement.removeAttr("tabindex");
        }

        _OnFocus(event: JQueryEventObject): void
        {
            super._OnFocus(event);
            preventTabKey = true;
            if (this.ActuallyEnabled())
            {
                this.AddClass("Focused");
                if (JustUsedTabKeyTime + 50 > Date.now())
                {
                    this.AddClass("TabFocused");
                }
            }
        }
        _OnBlur(event: JQueryEventObject): void
        {
            super._OnBlur(event);
            preventTabKey = false;
            this.RemoveClass("Focused");
            this.RemoveClass("TabFocused");
        }

        _FocusIndex: number = -1;

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
                            this.Rows.ElementAt(this._FocusIndex).Blur();
                        }
                        this._FocusIndex--;
                        this.Rows.ElementAt(this._FocusIndex).Focus();
                    }
                    StopEvent(eventArgs.jqEvent);
                }
                else if (eventArgs.jqEvent.keyCode === 40)
                {
                    if (this._FocusIndex < this.Items.Count() - 1)
                    {
                        if (this._FocusIndex > -1)
                        {
                            this.Rows.ElementAt(this._FocusIndex).Blur();
                        }
                        this._FocusIndex++;
                        this.Rows.ElementAt(this._FocusIndex).Focus();
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
                            this.Rows.ElementAt(this._FocusIndex).Blur();
                            this._FocusIndex--;
                            this.Rows.ElementAt(this._FocusIndex).Focus();
                            StopEvent(eventArgs.jqEvent);
                        }
                        else if (this._FocusIndex === -1)
                        {
                            this._FocusIndex = this.Rows.Count() - 1;
                            this.Rows.ElementAt(this._FocusIndex).Blur();
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
                        if (this._FocusIndex === -1 && this.Items.Count() > 0)
                        {
                            preventTabKey = true;
                            this._FocusIndex++;
                            this.Rows.ElementAt(this._FocusIndex).Focus();
                            StopEvent(eventArgs.jqEvent);
                        }
                        else if (this._FocusIndex < this.Items.Count() - 1)
                        {
                            preventTabKey = true;
                            this.Rows.ElementAt(this._FocusIndex).Blur();
                            this._FocusIndex++;
                            this.Rows.ElementAt(this._FocusIndex).Focus();
                            StopEvent(eventArgs.jqEvent);
                        }
                        else
                        {
                            if (this._FocusIndex !== -1)
                            {
                                this.Rows.ElementAt(this._FocusIndex).Blur();
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
                var result = this.Rows.ElementAt(0).TabIndex();
                var resultElem = this.Rows.ElementAt(0);
                var highest = 0;
                var excludeTBs = [];
                var elems = [];
                for (var i = 0; i < this.Rows.Count(); i++)
                {
                    var elem = this.Rows.ElementAt(i);
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

        _UnderlyingControl_OnFocus(eventArgs: Events.FocusEventArgs): void
        {
            if (eventArgs.Sender instanceof StackPanelRow)
            {
                var oldIndex = this._FocusIndex;
                this._FocusIndex = this.Rows.IndexOf(eventArgs.Sender);
                if (this._FocusIndex !== 0 && oldIndex === -1 && JustUsedTabKeyTime + 50 > Date.now())
                {
                    this._FocusIndex = this.Rows.Count() - 1;
                    this.Rows.ElementAt(this._FocusIndex).Focus();
                }
            }
            else
            {
                this._FocusIndex = -1;
            }
            this._OnFocus(eventArgs.jqEvent);
        }
        _UnderlyingControl_OnBlur(eventArgs: Events.BlurEventArgs): void
        {
            this._OnBlur(eventArgs.jqEvent);
        }

        _StackPanelRow_Clicked(eventArgs: Events.ClickEventArgs): void
        {
            StopEvent(eventArgs.jqEvent);
            var itemNum: number = this.Rows.IndexOf(eventArgs.Sender);
            eventArgs.Sender.Focus();
            this.SelectedIndex(itemNum);
        }

        _SelectedIndex: number = -1;
        _SelectedRow: IStackPanelRow = null;
        SelectedIndex(value: number = null): number
        {
            if (value !== null)
            {
                if (value < -1 || value > this.Items.Count())
                {
                    throw new Exceptions.ArgumentException("SelectedIndex");
                }

                var oldIndex = this._SelectedIndex;
                this._SelectedIndex = value;

                if (value === -1)
                {
                    if (this._SelectedRow !== null)
                    {
                        this._SelectedRow.RemoveClass("Selected");
                    }
                }
                else
                {
                    if (this._SelectedRow !== null)
                    {
                        this._SelectedRow.RemoveClass("Selected");
                    }

                    this._SelectedRow = (<IStackPanelRow>this.Rows.ElementAt(value));
                    this._SelectedRow.AddClass("Selected");
                }
                
                this.OnSelectionMade.Invoke(new Events.SelectionMadeEventArgs(this));
                if (oldIndex !== this._SelectedIndex)
                {
                    this.OnSelectedIndexChange.Invoke(new Events.SelectedIndexChangeEventArgs(this));
                }
            }
            return this._SelectedIndex;
        }
        
        Focus(): void
        {
            this.Rows.ElementAt(0).Focus();
            this._FocusIndex = 0;
        }
        Blur(): void
        {
            if (this._FocusIndex > -1)
            {
                this.Rows.ElementAt(this._FocusIndex).Blur();
                this._FocusIndex = -1;
            }
        }        
    }
}
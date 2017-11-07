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

module TSUI.UI
{
    export class DropDownBox<T> extends Control implements IDropDownBox<T>
    {
        OnSelectedIndexChange: Events.SelectedIndexChangeEvent = new Events.SelectedIndexChangeEvent();
        
        //_InputContentPanel: IPanel;
        //_UnderlyingTextBox: ILabel;
        //_DropDownToggle: IToggleIndicator;

        _UnderlyingSelectBox: JQuery;

        Items: Collections.IList<IListItem<T>> = new Collections.List<IListItem<T>>();

        //_SelectionWindow: ISelectionWindow<T>;

        constructor()
        {
            super();

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

            this.Items.OnModified.Attach(new Events.CollectionModifiedEventHandler<IListItem>(this._Items_OnModified, this));
        }

        _Items_OnModified(eventArgs: Events.CollectionModifiedEventArgs<IListItem<T>>)
        {
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
                        $(this._UnderlyingSelectBox.children()[index]).remove();
                    }
                    break;
                case Events.CollectionModifications.Reorder:
                    this._ClearRows();
                    for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++)
                    {
                        var elem = eventArgs.ModifiedElements.ElementAt(i);
                        this._AddRowForItem(elem);
                    }
                    break;
            }
        }
        _ClearRows(): void
        {
            this._UnderlyingSelectBox.html("");
        }
        _AddRowForItem(elem: IListItem<T>): void
        {
            var newRow = this._CreateRow(elem);
            elem.Index = this._UnderlyingSelectBox.children().length;
            this._UnderlyingSelectBox.append(newRow);
        }
        _CreateRow(elem: IListItem<T>): JQuery
        {
            var newRow = $("<option>");
            newRow.text(elem.Text());
            newRow.attr("value", elem.Value());
            return newRow;
        }

        ConstructDOM(parent: JQuery, onComplete: () => void = null): void
        {
            super.ConstructDOM(parent, ()=>
            {
                this._rootElement.append(this._UnderlyingSelectBox);

                this._UnderlyingSelectBox.on("focus", (event: JQueryEventObject) =>
                {
                    this._UnderlyingControl_OnFocus(new Events.FocusEventArgs(this, event));
                });
                this._UnderlyingSelectBox.on("blur", (event: JQueryEventObject) =>
                {
                    this._UnderlyingControl_OnBlur(new Events.BlurEventArgs(this, event));
                });

                if (onComplete)
                {
                    onComplete();
                }
            });
        }
        DestroyDOM(): void
        {
            this._UnderlyingSelectBox.remove();

            super.DestroyDOM();
        }

        _HandleFocusableSet(focusable: boolean)
        {
            if (focusable && !this.HasClass("Disabled"))
            {
                this._UnderlyingSelectBox.attr("tabindex", this._TabIndex.toString());

                if (this._UnderlyingSelectBox.is(":focus") && !this.HasClass("Focused"))
                {
                    this.Focus();
                }
            }
            else
            {
                this._UnderlyingSelectBox.removeAttr("tabindex");
            }

            if (!this._Focusable && this._UnderlyingSelectBox.is(":focus"))
            {
                this.Blur();
            }
        }

        SelectedIndex(value: number = null): number
        {
            return (<HTMLSelectElement>this._UnderlyingSelectBox[0]).selectedIndex;
        }

        _OnFocus(event: JQueryEventObject): void
        {
            super._OnFocus(event);
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
            this.RemoveClass("Focused");
            this.RemoveClass("TabFocused");
        }
        
        _UnderlyingControl_OnFocus(eventArgs: Events.FocusEventArgs): void
        {
            this._OnFocus(eventArgs.jqEvent);
        }
        _UnderlyingControl_OnBlur(eventArgs: Events.BlurEventArgs): void
        {
            this._OnBlur(eventArgs.jqEvent);
        }

        Focus(): void
        {
            this._UnderlyingSelectBox.focus();
        }
        Blur(): void
        {
            this._UnderlyingSelectBox.blur();
        }
        
        Enabled(value?: boolean): boolean
        {
            var result = super.Enabled(value);
            if (result)
            {
                this._UnderlyingSelectBox.removeAttr("disabled");
            }
            else
            {
                this._UnderlyingSelectBox.attr("disabled", "disabled");
            }
            return result;
        }
    }
}
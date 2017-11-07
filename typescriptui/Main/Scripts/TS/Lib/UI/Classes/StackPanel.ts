/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Interfaces/IStackPanel.d.ts" />
/// <reference path="Control.ts" />

module TSUI.UI
{
    export class StackPanel extends Control implements IStackPanel
    {
        Rows: Collections.IList<IStackPanelRow> = new Collections.List<IStackPanelRow>();

        constructor()
        {
            super();
        
            this._rootElement.addClass("StackPanel");

            this.Rows.OnModified.Attach(new Events.CollectionModifiedEventHandler<IStackPanelRow>(this._OnRows_Modified, this));

            this.Orientation(StackPanelOrientations.Vertical);
        }

        _OnRows_Modified(eventArgs: Events.CollectionModifiedEventArgs<IStackPanelRow>): void
        {
            switch (eventArgs.Modification)
            {
                case Events.CollectionModifications.Add:
                    for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++)
                    {
                        this.Children.Add(eventArgs.ModifiedElements.ElementAt(i));
                    }
                    break;
                case Events.CollectionModifications.Remove:
                    for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++)
                    {
                        this.Children.Remove(eventArgs.ModifiedElements.ElementAt(i));
                    }
                    break;
                case Events.CollectionModifications.Reorder:
                    this.Children.Clear();
                    for (var i = 0; i < eventArgs.ModifiedElements.Count(); i++)
                    {
                        this.Children.Add(eventArgs.ModifiedElements.ElementAt(i));
                    }
                    break;
            }
        }

        Orientation(value: StackPanelOrientations = null): StackPanelOrientations
        {
            if (value !== null)
            {
                if (value === StackPanelOrientations.Horizontal)
                {
                    this.RemoveClass("Vertical");
                    this.AddClass("Horizontal");
                }
                else
                {
                    this.RemoveClass("Horizontal");
                    this.AddClass("Vertical");
                }
            }
            return this.HasClass("Horizontal") ? StackPanelOrientations.Horizontal : StackPanelOrientations.Vertical;
        }
    }
}
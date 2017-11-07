/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 11 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 11/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Interfaces/Windows/IStartupWindow.d.ts" />
/// <reference path="Window.ts" />
/// <reference path="../TextBox.ts" />
/// <reference path="../StackPanel.ts" />
/// <reference path="../StackPanelRow.ts" />
/// <reference path="../Tile.ts" />

module TSUI.UI
{
    export class StartupWindow extends UI.Window implements IStartupWindow
    {
        Rows: Collections.IList<IStartupWindow_Row> = new Collections.List<IStartupWindow_Row>();

        _InnerStackPanel: UI.IStackPanel;
        
        constructor(title?: string)
        {
            super();

            this.AddClass("StartupWindow");

            this.Title(title);

            this.CloseButton.Visible(false);
            this.ResizeEnabled(false);
            this.DragEnabled(false);

            this.Rows.OnModified.Attach(new Events.CollectionModifiedEventHandler<IStartupWindow_Row>(this._This_OnRowsChanged, this));
            
            this._InnerStackPanel = new UI.StackPanel();
            this.ContentPanel.Children.Add(this._InnerStackPanel);
        }

        _This_OnRowsChanged(eventArgs: Events.CollectionModifiedEventArgs<IStartupWindow_Row>)
        {
            switch(eventArgs.Modification)
            {
                case Events.CollectionModifications.Add:
                    var count = eventArgs.ModifiedElements.Count();
                    for (var i = 0; i < count; i++)
                    {
                        var ARow = eventArgs.ModifiedElements.ElementAt(i);
                        ARow.RelativeLayoutOn();
                        this._InnerStackPanel.Rows.Add(ARow);
                    }
                    break;
                case Events.CollectionModifications.Remove:
                    var count = eventArgs.ModifiedElements.Count();
                    for (var i = 0; i < count; i++)
                    {
                        var ARow = eventArgs.ModifiedElements.ElementAt(i);
                        this._InnerStackPanel.Rows.Remove(ARow);
                    }
                    break;
                case Events.CollectionModifications.Reorder:
                    var count = eventArgs.ModifiedElements.Count();
                    for (var i = 0; i < count; i++)
                    {
                        var ARow = eventArgs.ModifiedElements.ElementAt(i);
                        this._InnerStackPanel.Rows.Remove(ARow);
                        this._InnerStackPanel.Rows.Add(ARow);
                    }
                    break;
            }
        }
    }
    export class DesktopStartupWindow extends StartupWindow implements IStartupWindow
    {
        constructor(title?: string)
        {
            super(title);
        }
    }
    export class MobileStartupWindow extends DesktopStartupWindow implements IStartupWindow
    {
        constructor(title?: string)
        {
            super(title);

            this.OptimiseConstructForGraphics = true;

            this.AddClass("Mobile");
        }

        Show(callback: () => void = null, animator: Animation.IAnimator = new Animation.Animator()): void
        {
            super.Show(callback, animator);
        }
        Hide(callback: () => void = null, animator: Animation.IAnimator = new Animation.Animator()): void
        {
            super.Hide(callback, animator);
        }
    }

    export class StartupWindow_Row extends StackPanelRow implements IStartupWindow_Row
    {
        _InnerStackPanel: UI.IStackPanel;

        Groups: Collections.IList<IStartupWindow_Group> = new Collections.List<IStartupWindow_Group>();

        constructor(public MobileMode: boolean = false)
        {
            super();

            this.RelativeLayoutOn();

            this._InnerStackPanel = new UI.StackPanel();
            this._InnerStackPanel.Orientation(StackPanelOrientations.Horizontal);
            this._InnerStackPanel.RelativeLayoutOn();
            this.Children.Add(this._InnerStackPanel);

            this.Groups.OnModified.Attach(new Events.CollectionModifiedEventHandler<IStartupWindow_Group>(this._This_OnGroupsChanged, this));
        }
        
        _This_OnGroupsChanged(eventArgs: Events.CollectionModifiedEventArgs<IStartupWindow_Group>)
        {
            switch(eventArgs.Modification)
            {
                case Events.CollectionModifications.Add:
                    var count = eventArgs.ModifiedElements.Count();
                    for (var i = 0; i < count; i++)
                    {
                        var AGroup = eventArgs.ModifiedElements.ElementAt(i);
                        AGroup.RelativeLayoutOn();
                        this._InnerStackPanel.Rows.Add(AGroup);
                    }
                    break;
                case Events.CollectionModifications.Remove:
                    var count = eventArgs.ModifiedElements.Count();
                    for (var i = 0; i < count; i++)
                    {
                        var AGroup = eventArgs.ModifiedElements.ElementAt(i);
                        this._InnerStackPanel.Rows.Remove(AGroup);
                    }
                    break;
                case Events.CollectionModifications.Reorder:
                    var count = eventArgs.ModifiedElements.Count();
                    for (var i = 0; i < count; i++)
                    {
                        var AGroup = eventArgs.ModifiedElements.ElementAt(i);
                        this._InnerStackPanel.Rows.Remove(AGroup);
                        this._InnerStackPanel.Rows.Add(AGroup);
                    }
                    break;
            }
        }
    }
    export class StartupWindow_Group extends StackPanelRow implements IStartupWindow_Group
    {
        Tiles: Collections.IList<ITile>  = new Collections.List<ITile>();

        constructor(public MobileMode: boolean = false)
        {
            super();

            this.Tiles.OnModified.Attach(new Events.CollectionModifiedEventHandler<ITile>(this._This_OnTilesChanged, this));
        }
        
        _This_OnTilesChanged(eventArgs: Events.CollectionModifiedEventArgs<ITile>)
        {
            switch(eventArgs.Modification)
            {
                case Events.CollectionModifications.Add:
                    var count = eventArgs.ModifiedElements.Count();
                    for (var i = 0; i < count; i++)
                    {
                        var ATile = eventArgs.ModifiedElements.ElementAt(i);
                        if (this.MobileMode)
                        {
                            switch(ATile.Size())
                            {
                                case TileSizes.LargeSquare:
                                    ATile.Size(TileSizes.Medium);
                                    break;
                                case TileSizes.Large:
                                    ATile.Size(TileSizes.Medium);
                                    break;
                                case TileSizes.Medium:
                                    ATile.Size(TileSizes.Small);
                                    break;
                                case TileSizes.Small:
                                    //Can't go any smaller...
                                    break;
                            }
                        }
                        ATile.RelativeLayoutOn();
                        this.Children.Add(ATile);
                    }
                    break;
                case Events.CollectionModifications.Remove:
                    var count = eventArgs.ModifiedElements.Count();
                    for (var i = 0; i < count; i++)
                    {
                        var ATile = eventArgs.ModifiedElements.ElementAt(i);
                        this.Children.Remove(ATile);
                    }
                    break;
                case Events.CollectionModifications.Reorder:
                    var count = eventArgs.ModifiedElements.Count();
                    for (var i = 0; i < count; i++)
                    {
                        var ATile = eventArgs.ModifiedElements.ElementAt(i);
                        this.Children.Remove(ATile);
                        this.Children.Add(ATile);
                    }
                    break;
            }
        }
    }
}
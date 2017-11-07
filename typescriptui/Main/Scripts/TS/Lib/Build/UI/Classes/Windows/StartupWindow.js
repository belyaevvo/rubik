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
    (function (UI) {
        var StartupWindow = (function (_super) {
            __extends(StartupWindow, _super);
            function StartupWindow(title) {
                _super.call(this);
                this.Rows = new TSUI.Collections.List();

                this.AddClass("StartupWindow");

                this.Title(title);

                this.CloseButton.Visible(false);
                this.ResizeEnabled(false);
                this.DragEnabled(false);

                this.Rows.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._This_OnRowsChanged, this));

                this._InnerStackPanel = new TSUI.UI.StackPanel();
                this.ContentPanel.Children.Add(this._InnerStackPanel);
            }
            StartupWindow.prototype._This_OnRowsChanged = function (eventArgs) {
                switch (eventArgs.Modification) {
                    case TSUI.Events.CollectionModifications.Add:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var ARow = eventArgs.ModifiedElements.ElementAt(i);
                            ARow.RelativeLayoutOn();
                            this._InnerStackPanel.Rows.Add(ARow);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Remove:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var ARow = eventArgs.ModifiedElements.ElementAt(i);
                            this._InnerStackPanel.Rows.Remove(ARow);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var ARow = eventArgs.ModifiedElements.ElementAt(i);
                            this._InnerStackPanel.Rows.Remove(ARow);
                            this._InnerStackPanel.Rows.Add(ARow);
                        }
                        break;
                }
            };
            return StartupWindow;
        })(TSUI.UI.Window);
        UI.StartupWindow = StartupWindow;
        var DesktopStartupWindow = (function (_super) {
            __extends(DesktopStartupWindow, _super);
            function DesktopStartupWindow(title) {
                _super.call(this, title);
            }
            return DesktopStartupWindow;
        })(StartupWindow);
        UI.DesktopStartupWindow = DesktopStartupWindow;
        var MobileStartupWindow = (function (_super) {
            __extends(MobileStartupWindow, _super);
            function MobileStartupWindow(title) {
                _super.call(this, title);

                this.OptimiseConstructForGraphics = true;

                this.AddClass("Mobile");
            }
            MobileStartupWindow.prototype.Show = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.Animator(); }
                _super.prototype.Show.call(this, callback, animator);
            };
            MobileStartupWindow.prototype.Hide = function (callback, animator) {
                if (typeof callback === "undefined") { callback = null; }
                if (typeof animator === "undefined") { animator = new TSUI.Animation.Animator(); }
                _super.prototype.Hide.call(this, callback, animator);
            };
            return MobileStartupWindow;
        })(DesktopStartupWindow);
        UI.MobileStartupWindow = MobileStartupWindow;

        var StartupWindow_Row = (function (_super) {
            __extends(StartupWindow_Row, _super);
            function StartupWindow_Row(MobileMode) {
                if (typeof MobileMode === "undefined") { MobileMode = false; }
                _super.call(this);
                this.MobileMode = MobileMode;
                this.Groups = new TSUI.Collections.List();

                this.RelativeLayoutOn();

                this._InnerStackPanel = new TSUI.UI.StackPanel();
                this._InnerStackPanel.Orientation(UI.StackPanelOrientations.Horizontal);
                this._InnerStackPanel.RelativeLayoutOn();
                this.Children.Add(this._InnerStackPanel);

                this.Groups.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._This_OnGroupsChanged, this));
            }
            StartupWindow_Row.prototype._This_OnGroupsChanged = function (eventArgs) {
                switch (eventArgs.Modification) {
                    case TSUI.Events.CollectionModifications.Add:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var AGroup = eventArgs.ModifiedElements.ElementAt(i);
                            AGroup.RelativeLayoutOn();
                            this._InnerStackPanel.Rows.Add(AGroup);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Remove:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var AGroup = eventArgs.ModifiedElements.ElementAt(i);
                            this._InnerStackPanel.Rows.Remove(AGroup);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var AGroup = eventArgs.ModifiedElements.ElementAt(i);
                            this._InnerStackPanel.Rows.Remove(AGroup);
                            this._InnerStackPanel.Rows.Add(AGroup);
                        }
                        break;
                }
            };
            return StartupWindow_Row;
        })(UI.StackPanelRow);
        UI.StartupWindow_Row = StartupWindow_Row;
        var StartupWindow_Group = (function (_super) {
            __extends(StartupWindow_Group, _super);
            function StartupWindow_Group(MobileMode) {
                if (typeof MobileMode === "undefined") { MobileMode = false; }
                _super.call(this);
                this.MobileMode = MobileMode;
                this.Tiles = new TSUI.Collections.List();

                this.Tiles.OnModified.Attach(new TSUI.Events.CollectionModifiedEventHandler(this._This_OnTilesChanged, this));
            }
            StartupWindow_Group.prototype._This_OnTilesChanged = function (eventArgs) {
                switch (eventArgs.Modification) {
                    case TSUI.Events.CollectionModifications.Add:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var ATile = eventArgs.ModifiedElements.ElementAt(i);
                            if (this.MobileMode) {
                                switch (ATile.Size()) {
                                    case UI.TileSizes.LargeSquare:
                                        ATile.Size(UI.TileSizes.Medium);
                                        break;
                                    case UI.TileSizes.Large:
                                        ATile.Size(UI.TileSizes.Medium);
                                        break;
                                    case UI.TileSizes.Medium:
                                        ATile.Size(UI.TileSizes.Small);
                                        break;
                                    case UI.TileSizes.Small:
                                        break;
                                }
                            }
                            ATile.RelativeLayoutOn();
                            this.Children.Add(ATile);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Remove:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var ATile = eventArgs.ModifiedElements.ElementAt(i);
                            this.Children.Remove(ATile);
                        }
                        break;
                    case TSUI.Events.CollectionModifications.Reorder:
                        var count = eventArgs.ModifiedElements.Count();
                        for (var i = 0; i < count; i++) {
                            var ATile = eventArgs.ModifiedElements.ElementAt(i);
                            this.Children.Remove(ATile);
                            this.Children.Add(ATile);
                        }
                        break;
                }
            };
            return StartupWindow_Group;
        })(UI.StackPanelRow);
        UI.StartupWindow_Group = StartupWindow_Group;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

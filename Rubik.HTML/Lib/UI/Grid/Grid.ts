/// <reference path="../Control.ts" />
/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts" />

module Rubik.UI
{
    export class Grid extends Control {

        PanelRows: IPanel;
        PanelCols: IPanel;
        ScrollPanel: IPanel;

        constructor() {
            super();
            this._rootElement.addClass("Grid");

            this.PanelCols = new Panel();
            this.PanelRows = new Panel();
            this.ScrollPanel = new Panel();
            
            
            //this.PanelRows.AddClass("Panel1");
            //this.PanelCols.AddClass("Panel2");

            this.PanelCols.Height(new CSSNumber(30));
            this.PanelRows.Width(new CSSNumber(30));
            

            this.Children.Add(this.PanelRows);
            this.Children.Add(this.PanelCols);            
            this.Children.Add(this.ScrollPanel);            
            

            this.OnResize.Attach(new Events.ResizeEventHandler(this._This_Resized, this));
        }

        _This_Resized(eventArgs: Events.ResizeEventArgs) {
            this.PanelRows.Height(new CSSNumber(this.ActualHeight()));
            this.PanelCols.MarginLeft(new CSSNumber(this.PanelRows.ActualWidth()))
            this.PanelCols.Width(new CSSNumber(this.ActualWidth() - this.PanelRows.ActualWidth()));
            this.ScrollPanel.MarginTop(new CSSNumber(this.PanelCols.ActualHeight()))
            this.ScrollPanel.MarginLeft(new CSSNumber(this.PanelRows.ActualWidth()))
            this.ScrollPanel.Height(new CSSNumber(this.ActualHeight() - this.PanelCols.ActualHeight()));
            this.ScrollPanel.Width(new CSSNumber(this.ActualWidth() - this.PanelRows.ActualWidth()));
        }
    }
}
/// <reference path="../Control.ts" />
/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts" />

module Rubik.UI
{
    export class Grid extends Control {

        PanelRows: IPanel;
        PanelCols: IPanel;

        constructor() {
            super();
            this._rootElement.addClass("Grid");

            this.PanelRows = new Panel();
            this.PanelCols = new Panel();
            
            //this.PanelRows.AddClass("Panel1");
            //this.PanelCols.AddClass("Panel2");

            this.Children.Add(this.PanelRows);
            this.Children.Add(this.PanelCols);
        }
    }
}
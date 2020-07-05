///<reference path='PivotControl.ts'/>
/// <reference path="../StackPanel.ts" />
/// <reference path="../../Resources/localization.ts"/>

module Rubik.UI.Pivot {
    export class PivotArea extends PivotControl {
        _areapanel_OnDraggedEnter(arg0: any): any {
            throw new Error("Method not implemented.");
        }
        private areapanel: Rubik.UI.StackPanel;
        private labelpanel: Rubik.UI.Panel;
        private role: PivotAreaRoleEnum;
        _div: JQuery = null;
        _span: JQuery = null;
        _img: JQuery = null;

        Grid: Grid = new Grid();
        Label: Label = new Label();

        constructor() {
            super();
            this._rootElement.addClass("PivotArea");               
            this.labelpanel = new Rubik.UI.Panel();
            this.labelpanel.AddClass("PivotArea-header");
            this.labelpanel.AddClass("NoIndent");
            this.areapanel = new Rubik.UI.StackPanel();
            this.areapanel.AddClass("PivotArea-content");
            this.areapanel.AddClass("NoIndent");
            this.areapanel.AllowDrop();
            this.areapanel.OnDraggedEnter.Attach(new DraggedEnterEventHandler(this.areapanel_OnDraggedEnter,this));
            this._div = $(document.createElement('div'));
            this._img = $(document.createElement('img'));            
            this._div.append(this._img);
            this._span = $(document.createElement('span'));
            this._div.append(this._span);
            this.labelpanel._rootElement.append(this._div);

            this.Grid.ExpandLastColumn = true;
            //this.areapanel.Children.Add(this.Grid);
            this.areapanel.MarginTop(30);
            this.Children.Add(this.labelpanel);
            this.Children.Add(this.areapanel);
            this.Grid.Height("100%");
            this.Grid.Width("100%");
        }

        get Role(): PivotAreaRoleEnum {
            return this.role;
        }

        set Role(role: PivotAreaRoleEnum) {            
             this.role = role;
            switch (role) {
                case PivotAreaRoleEnum.Filters:
                    this._img.attr("src", "/Content/icons/mppivotcontrols_axis_filter.png");
                    this._span.text(Rubik.Resources.Localization.getString("pivotAreaFilters"));
                    break;
                case PivotAreaRoleEnum.Cols:
                    this._img.attr("src", "/Content/icons/mppivotcontrols_axis_col.png");
                    this._span.text(Rubik.Resources.Localization.getString("pivotAreaCols"));
                    break;
                case PivotAreaRoleEnum.Rows:
                    this._img.attr("src", "/Content/icons/mppivotcontrols_axis_row.png");
                    this._span.text(Rubik.Resources.Localization.getString("pivotAreaRows"));
                    break;
                case PivotAreaRoleEnum.Data:
                    this._img.attr("src", "/Content/icons/mppivotcontrols_sum.png");
                    this._span.text(Rubik.Resources.Localization.getString("pivotAreaData"));
                    break;
            }
        }

        areapanel_OnDraggedEnter(args: DraggedEnterEventArgs) {
            args.EnableDrop = true;
        }
        
    }

    export class PivotAreaItem extends Control {
    }

    export enum PivotAreaRoleEnum {        
        Filters = -1,
        Cols = 0,
        Rows = 1,
        Data = 2
    }
}
///<reference path='PivotControl.ts'/>
/// <reference path="PivotArea.ts"/>

module Rubik.UI.Pivot {
    export class PivotLayout extends PivotControl {
        FiltersArea: PivotArea;
        DataArea: PivotArea;
        ColsArea: PivotArea;
        RowsArea: PivotArea;
        panel: Rubik.UI.GridPanel;

        constructor() {
            super();
            this._rootElement.addClass("PivotLayout");
            var panel = new Rubik.UI.GridPanel();            
            panel.Columns = 2;
            this.FiltersArea = new PivotArea();
            this.FiltersArea.Role = PivotAreaRoleEnum.Filters;            
            this.FiltersArea.Height("100%");
            this.FiltersArea.Width("100%");
            this.ColsArea = new PivotArea();
            this.ColsArea.Role = PivotAreaRoleEnum.Cols;
            this.ColsArea.Height("100%");
            this.ColsArea.Width("100%");
            this.RowsArea = new PivotArea();
            this.RowsArea.Role = PivotAreaRoleEnum.Rows;
            this.RowsArea.Height("100%");
            this.RowsArea.Width("100%");
            this.DataArea = new PivotArea();
            this.DataArea.Role = PivotAreaRoleEnum.Data;
            this.DataArea.Height("100%");
            this.DataArea.Width("100%");

            panel.Children.Add(this.FiltersArea);    
            panel.Children.Add(this.ColsArea);    
            panel.Children.Add(this.RowsArea);    
            panel.Children.Add(this.DataArea);    

            this.Children.Add(panel);
            
        }


        set PivotDataManager(pm: Rubik.Data.PivotDataManager) {
            this.pivotDataManager = pm;
            this.FiltersArea.PivotDataManager = pm;
            this.ColsArea.PivotDataManager = pm;
            this.RowsArea.PivotDataManager = pm;
            this.DataArea.PivotDataManager = pm;
        }
    }
}
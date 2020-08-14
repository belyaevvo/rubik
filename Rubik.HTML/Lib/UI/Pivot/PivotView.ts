module Rubik.UI.Pivot {
    export class PivotView extends PivotControl {

        Grid: Rubik.UI.Grid;
        LoadingPanel: LoadingPanel;

        get PivotDataManager(): Rubik.DataHub.PivotDataManager {
            return this.pivotDataManager;
        }

        set PivotDataManager(pm: Rubik.DataHub.PivotDataManager) {
            this.pivotDataManager = pm;
            this.Grid.DataSource = pm.DataSource;
            pm.CommandStarted.Attach(new Events.EventHandler((args) => {
                this.LoadingPanel.Visible(true); 
            }, this));
            pm.CommandComplete.Attach(new Events.EventHandler((args) => {
                this.LoadingPanel.Visible(false); 
            }, this));
        }

        constructor() {
            super();
            this._rootElement.addClass("PivotView");
            this.Grid = new Rubik.UI.Grid();
            this.Grid.Height(new Rubik.UI.CSSNumber(100, "%").ToString());
            this.Grid.Width(new Rubik.UI.CSSNumber(100, "%").ToString());
            this.LoadingPanel = new LoadingPanel();
            this.LoadingPanel.Height(new Rubik.UI.CSSNumber(100, "%").ToString());
            this.LoadingPanel.Width(new Rubik.UI.CSSNumber(100, "%").ToString());            
            this.Children.Add(this.Grid);                        
            this.Children.Add(this.LoadingPanel);  
        }
    }

   
}
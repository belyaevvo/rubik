module Rubik.UI.Pivot {
    export class PivotAplication extends PivotControl {

        private mainsplitter: Rubik.UI.SplitContainer;
        private dimpanel: Rubik.UI.Panel;
        private gridpanel: Rubik.UI.Panel;
        private dimsplitter: Rubik.UI.SplitContainer;
        PivotView: Rubik.UI.Pivot.PivotView;
        MetaDataBrowser: Rubik.UI.Pivot.MetaDataBrowser;
        PivotLayout: Rubik.UI.Pivot.PivotLayout;

        get PivotDataManager(): Rubik.DataHub.PivotDataManager {
            return this.pivotDataManager;
        }

        set PivotDataManager(pm: Rubik.DataHub.PivotDataManager) {
            this.pivotDataManager = pm;
            this.MetaDataBrowser.PivotDataManager = pm;
            this.PivotLayout.PivotDataManager = pm;
            this.PivotView.PivotDataManager = pm;
        }

        constructor() {
            super();
            this._rootElement.addClass("PivotApplication");      

            this.mainsplitter = new Rubik.UI.SplitContainer();
            this.dimsplitter = new Rubik.UI.SplitContainer();
            this.dimpanel = new Rubik.UI.Panel();
            this.gridpanel = new Rubik.UI.Panel();                        
            this.MetaDataBrowser = new Rubik.UI.Pivot.MetaDataBrowser();
            this.PivotLayout = new Rubik.UI.Pivot.PivotLayout();
            this.PivotView = new Rubik.UI.Pivot.PivotView();  

            this.dimsplitter.Orientation(Rubik.UI.SplitterGrip_Orientations.Horizontal);                        
            
            this.PivotView.Height(new Rubik.UI.CSSNumber(100, "%").ToString());
            this.PivotView.Width(new Rubik.UI.CSSNumber(100, "%").ToString());
                                                
            this.MetaDataBrowser.Height(new Rubik.UI.CSSNumber(100, "%").ToString());
            this.MetaDataBrowser.Width(new Rubik.UI.CSSNumber(100, "%").ToString());
                        
            this.PivotLayout.Height(new Rubik.UI.CSSNumber(100, "%").ToString());
            this.PivotLayout.Width(new Rubik.UI.CSSNumber(100, "%").ToString());

            this.mainsplitter.Height(new Rubik.UI.CSSNumber(100, "%").ToString());
            this.mainsplitter.Width(new Rubik.UI.CSSNumber(100, "%").ToString());
            this.mainsplitter.MainSplitterGrip.SplitterDistance(30);

            this.gridpanel.Children.Add(this.PivotView);

            this.dimsplitter.Panel1.Children.Add(this.MetaDataBrowser);
            this.dimsplitter.Panel2.Children.Add(this.PivotLayout);

            this.mainsplitter.Panel1.Children.Add(this.dimsplitter);
            this.mainsplitter.Panel2.Children.Add(this.gridpanel);

            //mainsplitter.Panel1.Children.Add(dimpanel);
            
            this.Children.Add(this.mainsplitter);
            
        }
    }
}
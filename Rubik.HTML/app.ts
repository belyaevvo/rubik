/// <reference path="Lib/IApp.d.ts" />
/// <reference path="Lib/Events/Events.ts"/>
/// <reference path="Lib/UI/Panel.ts"/>
/// <reference path="Lib/Data/Grid/MDDataSource.ts"/>
/// <reference path="Lib/Data/PivotDataManager.ts"/>
/// <reference path="Lib/Data/Grid/ArtificialDataSource.ts"/>
/// <reference path="Lib/UI/SplitContainer.ts"/>
/// <reference path="Lib/UI/Grid/Grid.ts"/>
/// <reference path="Lib/UI/MultilineTextBox.ts"/>
/// <reference path="Lib/UI/Button.ts"/>
/// <reference path="Lib/UI/Pivot/MetaDataBrowser.ts"/>
/// <reference path="Scripts/typings/jquery/jquery.d.ts"/>

class MyApp implements Rubik.Apps.IApp {
    private MainContainer: JQuery = null;
    private StartArgs: string[] = null;

   
    
    Run(args: string[] = [], container: JQuery = $("body")): void {
        this.StartArgs = args;
        this.MainContainer = container;
        
        var mainsplitter = new Rubik.UI.SplitContainer();
        var dimpanel = new Rubik.UI.Panel();        
        var gridpanel = new Rubik.UI.Panel();
        var dimsplitter = new Rubik.UI.SplitContainer();
        dimsplitter.Orientation(Rubik.UI.SplitterGrip_Orientations.Horizontal);        

        mainsplitter.Panel1.Children.Add(dimsplitter);        

        var pivotManager = new Rubik.Data.PivotDataManager();
        pivotManager.Url = "api/mdx";
        pivotManager.DataMember = "Adventure Works";
        

        var grid = new Rubik.UI.Grid();        
        //var dataSource = new Rubik.Data.MDDataSource();        
        grid.DataSource = pivotManager.DataSource;
        grid.Height(new Rubik.UI.CSSNumber(100, "%").ToString());
        grid.Width(new Rubik.UI.CSSNumber(100, "%").ToString());
        gridpanel.Children.Add(grid);

        var metadatabrowser = new Rubik.UI.Pivot.MetaDataBrowser();
        metadatabrowser.PivotDataManager = pivotManager;        
        metadatabrowser.Height(new Rubik.UI.CSSNumber(100, "%").ToString());
        metadatabrowser.Width(new Rubik.UI.CSSNumber(100, "%").ToString());
        dimsplitter.Panel1.Children.Add(metadatabrowser);

        //mainsplitter.Panel1.Children.Add(dimpanel);
        mainsplitter.Panel2.Children.Add(gridpanel);
        mainsplitter.ConstructDOM(container);        
        
        
        pivotManager.Command = "SELECT NON EMPTY { [Measures].[Internet Sales Amount] } ON 0, HIERARCHIZE ( [Geography].[City].AllMembers ) ON 1 FROM [Adventure Works]";        
        metadatabrowser.MetaDataSource.View.Populate(0);
        
        //this.element.innerHTML += "The time is: ";
        //this.span = document.createElement('span');
        //this.element.appendChild(this.span);
        //this.span.innerText = new Date().toUTCString();
    }

}


var TheApp = null;
$(function () {
    TheApp = new MyApp();
    TheApp.Run([],$("#content"));
});


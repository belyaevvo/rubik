/// <reference path="IApp.d.ts" />
/// <reference path="Events/Events.ts"/>
/// <reference path="UI/Panel.ts"/>
/// <reference path="Data/Grid/MDDataSource.ts"/>
/// <reference path="Data/PivotDataManager.ts"/>
/// <reference path="Data/Grid/ArtificialDataSource.ts"/>
/// <reference path="UI/SplitContainer.ts"/>
/// <reference path="UI/Grid/Grid.ts"/>
/// <reference path="UI/MultilineTextBox.ts"/>
/// <reference path="UI/Button.ts"/>
/// <reference path="UI/Pivot/MetaDataBrowser.ts"/>
/// <reference path="UI/Pivot/PivotLayout.ts"/>
/// <reference path="../Scripts/typings/jquery/jquery.d.ts"/>

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
        pivotManager.DataMember = "Сбыт";
        

        var grid = new Rubik.UI.Grid();        
        //var dataSource = new Rubik.Data.MDDataSource();        
        grid.DataSource = pivotManager.DataSource;
        grid.Height(new Rubik.UI.CSSNumber(100, "%").ToString());
        grid.Width(new Rubik.UI.CSSNumber(100, "%").ToString());
        gridpanel.Children.Add(grid);

        var metadatabrowser = new Rubik.UI.Pivot.MetaDataBrowser();
        metadatabrowser.ID("metadatabrowser");
        metadatabrowser.PivotDataManager = pivotManager;        
        metadatabrowser.Height(new Rubik.UI.CSSNumber(100, "%").ToString());
        metadatabrowser.Width(new Rubik.UI.CSSNumber(100, "%").ToString());
        dimsplitter.Panel1.Children.Add(metadatabrowser);

        var pivotlayout = new Rubik.UI.Pivot.PivotLayout();
        pivotlayout.ID("pivotlayout");
        pivotlayout.PivotDataManager = pivotManager;  
        pivotlayout.Height(new Rubik.UI.CSSNumber(100, "%").ToString());
        pivotlayout.Width(new Rubik.UI.CSSNumber(100, "%").ToString()); 
        dimsplitter.Panel2.Children.Add(pivotlayout);

        //mainsplitter.Panel1.Children.Add(dimpanel);
        mainsplitter.Panel2.Children.Add(gridpanel);
        mainsplitter.ConstructDOM(container);        

        Rubik.UI.DragDrop.Initialize();
        
        pivotManager.Command = "SELECT NON EMPTY { [Measures].[Вес] } ON 0, NON EMPTY [Объект учета].[Объект учета].AllMembers ON 1 FROM [Сбыт] WHERE ([Дата].[Год].[2020])";        
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


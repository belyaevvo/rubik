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
        var txt = new Rubik.UI.MultilineTextBox();
        txt.Text("SELECT NON EMPTY { [Measures].[Internet Sales Amount] } ON 0, HIERARCHIZE ( [Geography].[City].AllMembers ) ON 1 FROM [Adventure Works]");
        txt.Height(new Rubik.UI.CSSNumber(80, "%"));
        txt.Width(new Rubik.UI.CSSNumber(100, "%"));        
        var btn = new Rubik.UI.Button();
        btn.Text("Выполнить");
        btn.MarginTop(new Rubik.UI.CSSNumber(80, "%"));
        
        btn.OnClick.Attach(new Rubik.Events.ClickEventHandler(function (args: Rubik.Events.ClickEventArgs) {            
            pivotManager.Command = txt.Text();
        }.bind(this), this));

        dimsplitter.Panel2.Children.Add(txt);
        dimsplitter.Panel2.Children.Add(btn);

        mainsplitter.Panel1.Children.Add(dimsplitter);        

        var pivotManager = new Rubik.Data.PivotDataManager();
        pivotManager.Url = "api/mdx";

        var grid = new Rubik.UI.Grid();        
        //var dataSource = new Rubik.Data.MDDataSource();        
        grid.DataSource = pivotManager.DataSource;        
        grid.Height(new Rubik.UI.CSSNumber(100, "%"));
        grid.Width(new Rubik.UI.CSSNumber(100, "%"));
        gridpanel.Children.Add(grid);

        var metadatagrid = new Rubik.UI.Grid();
        metadatagrid.AddClass("GridNoBorder");
        metadatagrid.ExpandLastColumn = true;
        metadatagrid.DataSource = pivotManager.MetaDataSource;
        metadatagrid.Height(new Rubik.UI.CSSNumber(100, "%"));
        metadatagrid.Width(new Rubik.UI.CSSNumber(100, "%"));
        dimsplitter.Panel1.Children.Add(metadatagrid);

        //mainsplitter.Panel1.Children.Add(dimpanel);
        mainsplitter.Panel2.Children.Add(gridpanel);
        mainsplitter.ConstructDOM(container);
        pivotManager.DataMember = "Adventure Works";
        pivotManager.Command = txt.Text();
        pivotManager.MetaDataSource.View.VirtualMode = true;
        pivotManager.MetaDataSource.View.Populate(0);
        
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


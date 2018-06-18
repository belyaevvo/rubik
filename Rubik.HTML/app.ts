/// <reference path="Lib/IApp.d.ts" />
/// <reference path="Lib/Events/Events.ts"/>
/// <reference path="Lib/UI/Panel.ts"/>
/// <reference path="Lib/Data/Grid/MDDataSource.ts"/>
/// <reference path="Lib/Data/Grid/PivotDataManager.ts"/>
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
        
        var splitter = new Rubik.UI.SplitContainer();
        var panel1 = new Rubik.UI.Panel();        
        var panel2 = new Rubik.UI.Panel();
        var txt = new Rubik.UI.MultilineTextBox();
        txt.Text("SELECT NON EMPTY { [Measures].[Internet Sales Amount] } ON 0, HIERARCHIZE ( [Geography].[City].AllMembers ) ON 1 FROM [Adventure Works]");
        txt.Height(new Rubik.UI.CSSNumber(80, "%"));
        txt.Width(new Rubik.UI.CSSNumber(100, "%"));        
        var btn = new Rubik.UI.Button();
        btn.Text("Выполнить");
        btn.MarginTop(new Rubik.UI.CSSNumber(80, "%"));
        
        btn.OnClick.Attach(new Rubik.Events.ClickEventHandler(function (args: Rubik.Events.ClickEventArgs) {            
            dataSource.GetData(txt.Text());
        }.bind(this), this));
        panel1.Children.Add(txt);
        panel1.Children.Add(btn);

        var grid = new Rubik.UI.Grid();
        var dataSource = new Rubik.Data.MDDataSource();
        dataSource.Url = "api/mdx";
        grid.DataSource = dataSource;        
        grid.Height(new Rubik.UI.CSSNumber(100, "%"));
        grid.Width(new Rubik.UI.CSSNumber(100, "%"));
        panel2.Children.Add(grid);
        splitter.Panel1.Children.Add(panel1);
        splitter.Panel2.Children.Add(panel2);
        splitter.ConstructDOM(container);
        dataSource.GetData(txt.Text());
        
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


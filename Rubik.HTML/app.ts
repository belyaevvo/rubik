/// <reference path="Lib/IApp.d.ts" />
/// <reference path="Lib/UI/Panel.ts"/>
/// <reference path="Lib/UI/SplitContainer.ts"/>
/// <reference path="Lib/UI/Grid/Grid.ts"/>
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
        var grid = new Rubik.UI.Grid();
        panel2.Children.Add(grid);
        splitter.Panel1.Children.Add(panel1);
        splitter.Panel2.Children.Add(panel2);
        splitter.ConstructDOM(container);
        
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


/// <reference path="IApp.d.ts" />
/// <reference path="Events/Events.ts"/>
/// <reference path="UI/Panel.ts"/>
/// <reference path="Data/Grid/MDDataSource.ts"/>
/// <reference path="DataHub/PivotDataManager.ts"/>
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

        this.Test2();
        
        

        var app = new Rubik.UI.Pivot.PivotAplication();
        app.Height("100%");
        app.Width("100%");

        var portalConnection = new Rubik.DataHub.PortalConnection();        
        portalConnection.Url = "api/mdx";
        portalConnection.Database = "Сбыт";

        var xmlaConnection = new Rubik.DataHub.XmlaConnection();
        xmlaConnection.Url = "http://ptrolapapp.srv.lukoil.com/msolaptst/msmdpump.dll";
        xmlaConnection.Database = "Сбыт";
        

        //var pivotManager = new Rubik.DataHub.PivotDataManager(xmlaConnection);       
        var pivotManager = new Rubik.DataHub.PivotDataManager(portalConnection);
        pivotManager.DataMember = "Сбыт";

        app.PivotDataManager = pivotManager;

       
        app.ConstructDOM(container);  

        Rubik.UI.DragDrop.Initialize();

        //pivotManager.Command = "SELECT NON EMPTY { [Measures].[Вес] } ON 0, NON EMPTY [Объект учета].[Объект учета].AllMembers ON 1 FROM [Сбыт] WHERE ([Дата].[Год].[2020])";
        pivotManager.Command = "SELECT { [Measures].[Вес] } ON 0, NON EMPTY [Объект учета].[Объект учета].Members ON 1 FROM [Сбыт] CELL PROPERTIES VALUE,FORMATTED_VALUE,FORMAT_STRING,UPDATEABLE ";

        /*
        var mainsplitter = new Rubik.UI.SplitContainer();
        var dimpanel = new Rubik.UI.Panel();        
        var gridpanel = new Rubik.UI.Panel();
        var dimsplitter = new Rubik.UI.SplitContainer();
        dimsplitter.Orientation(Rubik.UI.SplitterGrip_Orientations.Horizontal);        

        mainsplitter.Panel1.Children.Add(dimsplitter);        

        var pivotManager = new Rubik.DataHub.PivotDataManager();
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
        metadatabrowser.MetaDataSource.View.Populate(0);*/
        
        //this.element.innerHTML += "The time is: ";
        //this.span = document.createElement('span');
        //this.element.appendChild(this.span);
        //this.span.innerText = new Date().toUTCString();
        
    }

    Test(): void {        

        var xmla = new Xmla({async:true});        
        xmla.addListener({
            events: Xmla.EVENT_DISCOVER_SUCCESS,
            handler: function (eventName, eventData) {
                var requestType = eventData.requestType;                
                switch (requestType) {
                    case Xmla.DISCOVER_DATASOURCES:                        
                        break;
                    case Xmla.DBSCHEMA_CATALOGS:                        
                        break;
                    case Xmla.MDSCHEMA_CUBES:                        
                        break;
                    case Xmla.MDSCHEMA_HIERARCHIES:                        
                        break;
                    case Xmla.MDSCHEMA_MEASURES:
                        break;
                }
            }            
        });        
        xmla.discoverDBCatalogs({ url: "http://ptrolapapp.srv.lukoil.com/msolaptst/msmdpump.dll", withCredentials: true, restrictions: restrictions, tag: "UUID" } as Xmla.DiscoverOptions);
        var restrictions = {};
        restrictions["CATALOG_NAME"] = "Сбыт";
        restrictions["CUBE_NAME"] = "Сбыт";
        xmla.discoverMDDimensions({ url: "http://ptrolapapp.srv.lukoil.com/msolaptst/msmdpump.dll", withCredentials: true, restrictions: restrictions,  tag: "UUID2" } as Xmla.DiscoverOptions);
        
    }

    Test2(): void {

        var portalConnection = new Rubik.DataHub.PortalConnection();
        portalConnection.Url = "api/mdx";
        portalConnection.Database = "Сбыт";
        
        portalConnection.BeginSession((sessionId) => {
            portalConnection.GetDataSet("SELECT { [Measures].[Вес] } ON 0, NON EMPTY [Объект учета].[Объект учета].Members*[Товар].[Товар].Members ON 1 FROM [Сбыт] CELL PROPERTIES VALUE,FORMATTED_VALUE,FORMAT_STRING,UPDATEABLE ",
                (data) => {
                    portalConnection.EndSession(() => { }, (err) => { alert(err)});
                },
                (err) => { }
            );
            /*var restrictions = {};
            restrictions["CATALOG_NAME"] = "Сбыт";
            restrictions["CUBE_NAME"] = "Сбыт";
            portalConnection.GetMetaData("MDSCHEMA_CUBES", restrictions, (data) => {
                alert('success GetMetaData')
            },
                (err) => { alert('error GetMetaData')});*/

            portalConnection.Execute("<Cancel xmlns='http://schemas.microsoft.com/analysisservices/2003/engine'></Cancel>", (data) => {
                alert('success Cancel')
            },
                (err) => { alert('error Cancel') });
            
        }, (err) => { alert(err); });
        
           
    }

    asPromise(context: any, callbackFunction: (...params) => void, ...args): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            args.push((data) => {
                resolve(data);
            });
            args.push((err) => {
                reject(err);
            });
            
            if (context) {
                callbackFunction.call(context, ...args);
            } else {
                callbackFunction(...args);
            }
    });
}

}


var TheApp = null;
$(function () {
    TheApp = new MyApp();    
    TheApp.Run([],$("#content"));
});


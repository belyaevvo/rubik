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

        this.Test6();
        
        

        var app = new Rubik.UI.Pivot.PivotAplication();
        app.Height("100%");
        app.Width("100%");

        var portalConnection = new Rubik.DataHub.PortalConnection();        
        portalConnection.Url = "api/mdx";
        portalConnection.Database = "Сбыт";

        var xmlaConnection = new Rubik.DataHub.XmlaConnection();
        xmlaConnection.Url = "http://ptrolapapp.srv.lukoil.com/msolaptst/msmdpump.dll";        
        xmlaConnection.Database = "Сбыт";
        

        var pivotManager = new Rubik.DataHub.PivotDataManager(xmlaConnection);       
        //var pivotManager = new Rubik.DataHub.PivotDataManager(portalConnection);
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
        xmla.discoverDBCatalogs({ url: "http://ptrolapapp.srv.lukoil.com/msolaptst/msmdpump.dll", restrictions: restrictions, tag: "UUID" } as Xmla.DiscoverOptions);
        var restrictions = {};
        restrictions["CATALOG_NAME"] = "Сбыт";
        restrictions["CUBE_NAME"] = "Сбыт";
        xmla.discoverMDDimensions({ url: "http://ptrolapapp.srv.lukoil.com/msolaptst/msmdpump.dll", restrictions: restrictions,  tag: "UUID2" } as Xmla.DiscoverOptions);
        
    }

    Test2(): void {

        //var portalConnection = new Rubik.DataHub.PortalConnection();
        //portalConnection.Url = "api/mdx";
        //portalConnection.Database = "Сбыт";

        var xmlaConnection = new Rubik.DataHub.XmlaConnection();
        xmlaConnection.Url = "http://ptrolapapp.srv.lukoil.com/msolaptst/msmdpump.dll";
        xmlaConnection.Database = "Сбыт";


        xmlaConnection.GetDataSet("select  non empty {[Дата].[Календарь]} * descendants([Дата].[Месяц], 1) on columns, non empty descendants([Объект учета].[Объекты учета], 1)  on rows  from [Сбыт] CELL PROPERTIES VALUE, FORMATTED_VALUE ",
            (data) => {
                alert('test');
            }, (error) => {
                alert('error');
            });
        
                   
    }

    Test3(): void {       
        
         
        var handler = function (e) {                        
                // Responses beyond a certain size blow up the memory limits in Chrome                
                //xhr.abort();
                //throw 'Outsize response - throw it away'
                //return            
            switch (xhr.readyState) {
                case 0:                    
                    break;
                case 4:
                    //See https://www.w3.org/TR/cors/#cross-origin-request-with-preflight-0 
                    //Preflight request is acceptable if the HTTP status code is in the 2xx range
                    //Specifically, Windows IIS may return a 204 rather than a 200 code to the OPTIONS request
                    if (xhr.status >= 200 && xhr.status <= 299) {
                        var parser: DOMParser = new DOMParser();
                        parser.parseFromString(xhr.response, "text/xml");                        
                    }
                    else {                        
                    }
                    break;
            }
        };


        var msg="<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\" SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\">" + 
            "<SOAP-ENV:Header></SOAP-ENV:Header>" +
                    "<SOAP-ENV:Body>" +
                        "<Execute xmlns=\"urn:schemas-microsoft-com:xml-analysis\" SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\">" +
                            "<Command>" +
                            //"<Statement>select  non empty { [Дата].[Календарь] } * descendants([Дата].[Месяц], 1) on columns, non empty descendants([Объект учета].[Объекты учета], 1) * descendants([Объект учета].[Объект учета], 1) * descendants([Товар].[Товар], 1) on rows  from[Сбыт] CELL PROPERTIES VALUE, FORMATTED_VALUE </Statement>" +
                            "<Statement>select  non empty { [Дата].[Календарь] } * descendants([Дата].[Месяц], 1) on columns, non empty descendants([Объект учета].[Объекты учета], 1) * descendants([Объект учета].[Объект учета], 1) on rows  from[Сбыт] CELL PROPERTIES VALUE, FORMATTED_VALUE </Statement>" +
                                "</Command>" +
                                "<Properties>" +
                                "<PropertyList>" +
                                "<Catalog>Сбыт</Catalog>" +
                                "<Format>Multidimensional</Format>" +
                                "<Content>SchemaData</Content>" +
                                "<Timeout>3600</Timeout>" +
                                "<BeginRange>0</BeginRange>" +
                                "<EndRange>1</EndRange>" + 
                                "</PropertyList>" +
                                "</Properties>" +
                                "</Execute>" +
                                "</SOAP-ENV:Body>" +
                                "</SOAP-ENV:Envelope>" 
            ;
        var xhr = new (<any>window).XMLHttpRequest();

        var args = ["POST", "http://ptrolapapp.srv.lukoil.com/msolaptst/msmdpump.dll", true];        
        
        xhr.open.apply(xhr, args);
        xhr.responseType = "blob";

        xhr.withCredentials = true;

        xhr.onreadystatechange = handler;
        xhr.setRequestHeader("Accept", "text/xml, application/xml, application/soap+xml");
        xhr.setRequestHeader("Content-Type", "text/xml");
        xhr.send(msg);
    }
    

    Test4(): void {

        let receivedLength = 0; // количество байт, полученных на данный момент
        let chunks = []; // массив полученных двоичных фрагментов (составляющих тело ответа)

        (async () => {

            

            var msg = "<SOAP-ENV:Envelope xmlns:SOAP-ENV=\"http://schemas.xmlsoap.org/soap/envelope/\" SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\">" +
                "<SOAP-ENV:Header></SOAP-ENV:Header>" +
                "<SOAP-ENV:Body>" +
                "<Execute xmlns=\"urn:schemas-microsoft-com:xml-analysis\" SOAP-ENV:encodingStyle=\"http://schemas.xmlsoap.org/soap/encoding/\">" +
                "<Command>" +
                //"<Statement>select  non empty { [Дата].[Календарь] } * descendants([Дата].[Месяц], 1) on columns, non empty descendants([Объект учета].[Объекты учета], 1) * descendants([Объект учета].[Объект учета], 1) * descendants([Товар].[Товар], 1) on rows  from[Сбыт] CELL PROPERTIES VALUE, FORMATTED_VALUE </Statement>" +
                "<Statement>select  non empty { [Дата].[Календарь] } * descendants([Дата].[Месяц], 1) on columns, non empty descendants([Объект учета].[Объекты учета], 1)  on rows  from[Сбыт] CELL PROPERTIES VALUE, FORMATTED_VALUE </Statement>" +
                "</Command>" +
                "<Properties>" +
                "<PropertyList>" +
                "<Catalog>Сбыт</Catalog>" +
                "<Format>Multidimensional</Format>" +
                "<Content>SchemaData</Content>" +
                "<Timeout>3600</Timeout>" +              
                "</PropertyList>" +
                "</Properties>" +
                "</Execute>" +
                "</SOAP-ENV:Body>" +
                "</SOAP-ENV:Envelope>"
                ;

            const headers = new Headers();
            headers.append("Content-Type", "text/xml");

            var response = await fetch("http://ptrolapapp.srv.lukoil.com/msolaptst/msmdpump.dll", {
                method: "POST",
                mode: "cors",
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "include", // include, *same-origin, omit
                headers: headers,
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                body: msg
            });

            if (response.status == 200) {
                var reader = response.body.getReader();


                const contentLength = +response.headers.get('Content-Length');

                var parser: Rubik.DataHub.XmlaParser = new Rubik.DataHub.XmlaParser();


                // Шаг 3: считываем данные:            
                while (true) {
                    const { done, value } = await reader.read();

                    if (done) {
                        parser.parser.close();
                        break;
                    }

                    chunks.push(value);
                    receivedLength += value.length;
                    var result = this.Utf8ArrayToStr(value);
                    parser.parser.write(result);

                    console.log(`Получено ${receivedLength} из ${contentLength}`);
                    //console.log(result);
                }
            }

        })();
    }


    Test5(): void {

        //var portalConnection = new Rubik.DataHub.PortalConnection();
        //portalConnection.Url = "api/mdx";
        //portalConnection.Database = "Сбыт";

        var portalConnection = new Rubik.DataHub.PortalConnection();
        portalConnection.Url = "api/mdx";
        portalConnection.Database = "Сбыт";

        var sess: Rubik.DataHub.IPivotSession;
        portalConnection.BeginSession((session) => {
            portalConnection.GetDataSet("SELECT { [Measures].[Вес] } ON 0, NON EMPTY [Объект учета].[Объект учета].Members*[Товар].[Товар].Members ON 1 FROM [Сбыт] CELL PROPERTIES VALUE,FORMATTED_VALUE,FORMAT_STRING,UPDATEABLE ",
                (data) => {
                    portalConnection.EndSession(session, () => { }, (err) => { alert(err); });
                },
                (err) => { alert(err); },
                session
            );

            session.Cancel(() => { }, (err) => { });
            /*var restrictions = {};
            restrictions["CATALOG_NAME"] = "Сбыт";
            restrictions["CUBE_NAME"] = "Сбыт";
            portalConnection.GetMetaData("MDSCHEMA_CUBES", restrictions, (data) => {
                alert('success GetMetaData')
            },
                (err) => { alert('error GetMetaData')});*/


            /*portalConnection.Execute("<Cancel xmlns='http://schemas.microsoft.com/analysisservices/2003/engine'></Cancel>", (data) => {
                alert('success Cancel')
            },
                (err) => { alert('error Cancel') });*/

        }, (err) => { alert(err); });

    }


    Test6(): void {

        var xmlaClient: Rubik.DataHub.XmlaClient = new Rubik.DataHub.XmlaClient();

        var properties = {}
        properties[Xmla.PROP_CATALOG] = "Сбыт";
        //var command = "select  non empty { [Дата].[Календарь] } * descendants([Дата].[Месяц], 1) on columns, non empty descendants([Объект учета].[Объекты учета], 1)  on rows  from[Сбыт] CELL PROPERTIES VALUE, FORMATTED_VALUE";
        //xmlaClient.executeMultiDimensional({ url: "http://ptrolapapp.srv.lukoil.com/msolaptst/msmdpump.dll", statement: command, properties: properties } as Xmla.ExecuteOptions);               

        var restrictions = {};
        restrictions["CATALOG_NAME"] = "Сбыт";
        restrictions["CUBE_NAME"] = "Сбыт";
        xmlaClient.discoverMDCubes({ url: "http://ptrolapapp.srv.lukoil.com/msolaptst/msmdpump.dll", restrictions: restrictions, properties: properties } as Xmla.DiscoverOptions);

        
    }



    Utf8ArrayToStr(array): string {
    var out, i, len, c;
    var char2, char3;

    out = "";
    len = array.length;
    i = 0;
    while (i < len) {
        c = array[i++];
        switch (c >> 4) {
            case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                // 0xxxxxxx
                out += String.fromCharCode(c);
                break;
            case 12: case 13:
                // 110x xxxx   10xx xxxx
                char2 = array[i++];
                out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                break;
            case 14:
                // 1110 xxxx  10xx xxxx  10xx xxxx
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode(((c & 0x0F) << 12) |
                    ((char2 & 0x3F) << 6) |
                    ((char3 & 0x3F) << 0));
                break;
        }
    }

    return out;
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


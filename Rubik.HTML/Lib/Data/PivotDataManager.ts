/// <reference path="Grid/IGridDataSource.d.ts" />
/// <reference path="Grid/MDDataSource.ts" />
/// <reference path="Grid/TreeNodeDataSource.ts" />
/// <reference path="../Schema/Schema.ts" />

module Rubik.Data {    

    export class PivotDataManager {
        Url: string = null;

        SessionId: string;

        DataMember: string = null;

        DataSource: MDDataSource = new MDDataSource();

        Schema: Rubik.Server.Schema.Schema = new Rubik.Server.Schema.Schema();

        CubeChanged: Events.Event<Events.EventArgs> = new Events.Event<Events.EventArgs>();
        DataChanged: Events.Event<Events.EventArgs> = new Events.Event<Events.EventArgs>();        
        SchemaChanged: Events.Event<Events.EventArgs> = new Events.Event<Events.EventArgs>();
        

        set Command(command: string) {
            this.GetData(command,
                function (data) {
                    this.DataSource._isPopulated = true;     
                    this.DataSource.Data = data;                    
                }.bind(this),
                function (error) {
                    this.DataSource._isPopulated = false;    
                    alert(error.responseText);                     
                }.bind(this));
        }

        constructor()
        {            
        }

                

        GetData(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void): void {
            if (this.Url != null) {                
                $.ajax({
                    url: this.Url + '/execute',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { sessionId: this.SessionId, query: command },
                    dataType: 'json',
                    success: function (data) {
                        if (onsuccess)
                            onsuccess(data);
                    },
                    error: function (error) {
                        if (onerror) {
                            onerror(error);
                        }
                        else {
                            alert(error.responseText);
                        }
                    }
                });
            }
        }

        GetMetaData(schema: string, restrictions: any[], onsuccess: (data: any) => void, onerror: (error: any) => void): void {
            if (this.Url != null) {
                restrictions.splice(0, 0, { Key: "CUBE_NAME", Value: this.DataMember });                
                $.ajax({
                    url: this.Url + '/getmetadata',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: {
                        sessionId: this.SessionId, schema: schema, restrictions: restrictions
                    },
                    dataType: 'json',
                    success: function (data) {
                        if (onsuccess)
                            onsuccess(data);                        
                    },
                    error: function (error) {
                        if (onerror) {
                            onerror(error);
                        }
                        else   {
                            alert(error.responseText); 
                        }
                    }
                });
            }
        }
    }
}

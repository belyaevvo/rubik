module Rubik.DataHub {

    export class PortalConnection implements IPivotConnection{
        

        Url: string;

        SessionId: string;

        Database: string;

        BeginSession(onsuccess: (sessionId: string) => void, onerror: (error: any) => void): void {
            var self = this;
            if (this.Url != null) {
                $.ajax({
                    url: this.Url + '/BeginSession',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { database: self.Database },
                    dataType: 'json',
                    success: function (data) {
                        self.SessionId = data.SessionId;                     
                        if (onsuccess)
                            onsuccess(data.SessionId);
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

        EndSession(onsuccess: () => void, onerror: (error: any) => void): void {
            var self = this;
            if (this.Url != null) {
                $.ajax({
                    url: this.Url + '/EndSession',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { sessionId: self.SessionId },
                    dataType: 'json',
                    success: function (data) {                        
                        if (onsuccess)
                            onsuccess();
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
       
        GetDataSet(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void): void {
            if (this.Url != null) {
                $.ajax({
                    url: this.Url + '/executecellset',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { sessionId: this.SessionId, database: this.Database, command: command },
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

        GetRowSet(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void): void {
            if (this.Url != null) {
                $.ajax({
                    url: this.Url + '/execute',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { sessionId: this.SessionId, database: this.Database, command: command },
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

        GetMetaData(schema: string, restrictions: object, onsuccess: (data: any) => void, onerror: (error: any) => void): void {
            if (this.Url != null) {
                if (!restrictions) restrictions = {};                
                var restarr = Object.keys(restrictions).map((key) => ({ Key: key, Value: restrictions[key] })); 
                $.ajax({
                    url: this.Url + '/getmetadata',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: {
                        sessionId: this.SessionId, database: this.Database, schema: schema, restrictions: restarr
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
                        else {
                            alert(error.responseText);
                        }
                    }
                });
            }
        }

        Execute(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void): void {
            if (this.Url != null) {
                $.ajax({
                    url: this.Url + '/executenonquery',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { sessionId: this.SessionId, database: this.Database, command: command },
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
        
    }
}
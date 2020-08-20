module Rubik.DataHub {

    export class PortalConnection implements IPivotConnection{
        

        Url: string;

        SessionId: string;

        Database: string;

        BeginSession(onsuccess: (session: PortalSession) => void, onerror: (error: any) => void): void {
            var self = this;
            if (this.Url != null) {
                $.ajax({
                    url: this.Url + '/BeginSession',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { database: self.Database },
                    dataType: 'json',
                    success: function (data) {                        
                        var session = new PortalSession();
                        session.connection = self;
                        session.sessionId = data.SessionId;                        
                        if (onsuccess)
                            onsuccess(session);
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

        EndSession(session: PortalSession, onsuccess: () => void, onerror: (error: any) => void): void {
            var self = this;
            if (this.Url != null) {
                $.ajax({
                    url: this.Url + '/EndSession',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { sessionId: session.sessionId },
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
       
        GetDataSet(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void, session?: PortalSession): void {
            if (this.Url != null) {
                $.ajax({
                    url: this.Url + '/executecellset',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { sessionId: session ? session.sessionId : null, database: this.Database, command: command },
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

        

        GetRowSet(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void, session?: PortalSession): void {
            if (this.Url != null) {
                $.ajax({
                    url: this.Url + '/execute',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { sessionId: session ? session.sessionId : null, database: this.Database, command: command },
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

        GetMetaData(schema: string, restrictions: object, onsuccess: (data: any) => void, onerror: (error: any) => void, session?: PortalSession): void {
            if (this.Url != null) {
                if (!restrictions) restrictions = {};                
                var restarr = Object.keys(restrictions).map((key) => ({ Key: key, Value: restrictions[key] })); 
                $.ajax({
                    url: this.Url + '/getmetadata',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: {
                        sessionId: session ? session.sessionId : null, database: this.Database, schema: schema, restrictions: restarr
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

        Execute(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void, session?: PortalSession): void {
            if (this.Url != null) {
                $.ajax({
                    url: this.Url + '/executenonquery',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { sessionId: session ? session.sessionId:null, database: this.Database, command: command },
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

        Cancel(session: PortalSession, onsuccess: (data: any) => void, onerror: (error: any) => void): void {
            if (this.Url != null) {
                $.ajax({
                    url: this.Url + '/cancel',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { sessionId: session.sessionId, database: this.Database },
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

    export class PortalSession implements IPivotSession {
        connection: PortalConnection = null;
        sessionId: string = null;
        cancelled: boolean = false;
        Cancel(onsuccess: () => void, onerror: (error: any) => void): void {
            if (this.connection && this.sessionId) {
                this.cancelled = true; 
                this.connection.Cancel(this,
                    (data) => { onsuccess(); },
                    (err) => { onerror(err) }
                );
            }
        }
        Cancelled(): boolean {
            var cancelled = this.cancelled;
            this.cancelled = false;
            return cancelled;
        }
    }
}
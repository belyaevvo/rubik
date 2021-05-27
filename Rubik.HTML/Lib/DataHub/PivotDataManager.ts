/// <reference path="../Data/Grid/IGridDataSource.d.ts" />
/// <reference path="../Data/Grid/MDDataSource.ts" />
/// <reference path="../Data/Grid/TreeNodeDataSource.ts" />
/// <reference path="../DataHub/Schema/Schema.ts" />

module Rubik.DataHub {    

    export class PivotDataManager {    

        private objects: {};   
        private datamember: string = null;
        private _connection: IPivotConnection;
        private _session: IPivotSession = null;
        private _cmdCount: number = 0;

        DeferUpdate: boolean;
        SessionId: string;
        Name: string = "pivotDataManager";

        DataSource: Rubik.Data.MDDataSource = new Rubik.Data.MDDataSource();

        DataInfo: OlapInfoObjectFactory;

        QueryGenerator: IQueryGenerator;

        Schema: Rubik.DataHub.Schema;

        //CubeInfo: CubeInfo = null;
        
        CubeInfo: Promise<CubeInfo> = null;


        CubeChanged: Events.Event<Events.EventArgs> = new Events.Event<Events.EventArgs>();
        DataChanged: Events.Event<Events.EventArgs> = new Events.Event<Events.EventArgs>();
        SchemaChanged: Events.Event<Events.EventArgs> = new Events.Event<Events.EventArgs>();

        CommandStarted: Events.Event<Events.EventArgs> = new Events.Event<Events.EventArgs>();
        CommandComplete: Events.Event<Events.EventArgs> = new Events.Event<Events.EventArgs>();
        CommandCancel: Events.Event<Events.EventArgs> = new Events.Event<Events.EventArgs>();
        
        get DataMember(): string {
            return this.datamember;
        }

        set DataMember(datamember: string) {
            this.datamember = datamember;
            this.DataInfo.DataMember = datamember;
            (this.CubeInfo = this.DataInfo.GetInfoObject({ UniqueName: datamember, ObjectType: ObjectTypeEnum.Cube } as TypedSchemaObject) as Promise<CubeInfo>).then(cube => {
                //this.CubeInfo = cube as CubeInfo;                                
            });            
            this.CubeChanged.Invoke(new Events.EventArgs(this));
        }
       

        set Connection(connection: IPivotConnection) {
            this._connection = connection;
            this.DataInfo = new OlapInfoObjectFactory(connection);
        }   

        get Connection(): IPivotConnection {
            return this._connection
        }

        get IsRunning(): boolean {
            return this._cmdCount > 0;
        }
        
       
        set Command(command: string) {

            var startCommand = () => {
                this._cmdCount++;
                this.CommandStarted.Invoke(new Events.EventArgs(this));
                this.GetDataSet(command,
                    (data, session) => {
                        this._cmdCount--;
                        this.CommandComplete.Invoke(new Events.EventArgs(this));
                        this.DataSource.Data = data;
                    },
                    (error, session) => {                        
                        //this.DataSource.Data = null;
                        if (session && !session.Cancelled()) {
                            this._cmdCount--;
                            this.CommandComplete.Invoke(new Events.EventArgs(this));
                            alert(error.responseText);
                        }
                    });
            };

            if (this._session) {
                this.Cancel(() => {}, (error) => { alert(error.responseText); });
                startCommand();
            }
            else {
                startCommand();
            }

            
        }

       
        constructor(connection: IPivotConnection) {
            this.Connection = connection;
            this.Schema = new Rubik.DataHub.Schema(this);
            this.QueryGenerator = new MDXQueryGenerator();
            this.Schema.SchemaChanged.Attach(new Events.SimpleEventHandler((args: Events.EventArgs) => {
                sessionStorage.setItem(this.Name, this.Schema.jsonData);
                this.SchemaChanged.Invoke(args);
                if (!this.DeferUpdate) {
                    this.Command = this.QueryGenerator.GetQueryString(this.Schema);
                }
            }, this));
        }

        Load(config: any): void {
            var schema = JSON.parse(sessionStorage.getItem(this.Name)) || config;            
            this.Schema.Load(schema);
        }

        Cancel(onsuccess: () => void, onerror: (error: any) => void): void {
            if (this._session) {                            
                this._session.Cancel(() => {                    
                    onsuccess();
                }, onerror);
                this._cmdCount--;
                this.CommandCancel.Invoke(new Events.EventArgs(this));
                this.CommandComplete.Invoke(new Events.EventArgs(this));   
            }
            else {
                onsuccess();
            }
        }

        Update() {
            this.Command = this.QueryGenerator.GetQueryString(this.Schema);
        }

        GetDataSet(command: string, onsuccess: (data: any, session: IPivotSession) => void, onerror: (error: any, session: IPivotSession) => void): void {
            this.Connection.BeginSession((session) => {
                this._session = session;
                this.Connection.GetDataSet(command, (data) => {
                    onsuccess(data, session);
                    this.Connection.EndSession(session, () => { if (this._session == session) this._session = null; }, (error) => { });
                }, (error) => {
                    onerror(error, session);
                    this.Connection.EndSession(session, () => { if (this._session == session) this._session = null; }, (error) => { });
                }, session);
            }, (error) => {
                onerror(error, null);
            });            
        }

        GetMetaData(schema: string, restrictions: object, onsuccess: (data: any) => void, onerror: (error: any) => void): void {
            if (!restrictions) restrictions = {};
            restrictions["CUBE_NAME"] = this.DataMember;
            this.Connection.GetMetaData(schema, restrictions, onsuccess, onerror);
        }

        GetInfoObject(schemaobject: TypedSchemaObject): Promise<InfoObject> {
            return this.DataInfo.GetInfoObject(schemaobject);
        }

        GetInfoObjectCollection(objtype: Rubik.DataHub.ObjectTypeEnum, parent?: InfoObject, treeop?: Rubik.DataHub.TreeOpEnum): Promise<InfoObject[]> {
            return this.DataInfo.GetInfoObjectCollection(objtype, parent, treeop);
        }
        
    }
}

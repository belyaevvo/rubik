/// <reference path="../Data/Grid/IGridDataSource.d.ts" />
/// <reference path="../Data/Grid/MDDataSource.ts" />
/// <reference path="../Data/Grid/TreeNodeDataSource.ts" />
/// <reference path="../DataHub/Schema/Schema.ts" />

module Rubik.DataHub {    

    export class PivotDataManager {    

        private objects: {};   
        private datamember: string = null;
        private _connection: IPivotConnection

        SessionId: string;

        DataSource: Rubik.Data.MDDataSource = new Rubik.Data.MDDataSource();

        DataInfo: OlapInfoObjectFactory;

        QueryGenerator: IQueryGenerator;

        Schema: Rubik.DataHub.Schema;

        CubeInfo: CubeInfo = null;

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
            this.DataInfo.GetInfoObject({ UniqueName: datamember, ObjectType: ObjectTypeEnum.Cube } as TypedSchemaObject).then(cube => {
                this.CubeInfo = cube as CubeInfo;
                this.CubeChanged.Invoke(new Events.EventArgs(this));
            });            
        }
       

        set Connection(connection: IPivotConnection) {
            this._connection = connection;
            this.DataInfo = new OlapInfoObjectFactory(connection);
        }   

        get Connection(): IPivotConnection {
            return this._connection
        }
        
       
        set Command(command: string) {
            this.CommandStarted.Invoke(new Events.EventArgs(this));
            this.GetDataSet(command,
                function (data) {
                    this.CommandComplete.Invoke(new Events.EventArgs(this));
                    this.DataSource._isPopulated = true;     
                    this.DataSource.Data = data;                    
                }.bind(this),
                function (error) {
                    this.CommandCancel.Invoke(new Events.EventArgs(this));
                    this.CommandComplete.Invoke(new Events.EventArgs(this));
                    this.DataSource._isPopulated = false;    
                    alert(error.responseText);                     
                }.bind(this));
        }

       
        constructor(connection: IPivotConnection) {
            this.Connection = connection;
            this.Schema = new Rubik.DataHub.Schema(this);
            this.QueryGenerator = new MDXQueryGenerator();
            this.Schema.SchemaChanged.Attach(new Events.SimpleEventHandler((args: Events.EventArgs) => {
                this.SchemaChanged.Invoke(args);
                this.Command = this.QueryGenerator.GetQueryString(this.Schema);
            }, this));
        }
                
        GetDataSet(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void): void {            
            this.Connection.GetDataSet(command, onsuccess, onerror);
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


module Rubik.DataHub {

    export class OlapInfoObjectFactory implements IInfoObjectFactory {

        private objects: object = {};   
        private connection: IPivotConnection;
        private initialized: boolean = false;
        private resolved: boolean = false;
        private datamember: string = null;
        private defaultHierarchies: object = {};

        get DataMember(): string {
            return this.datamember;
        }

        set DataMember(datamember: string) {
            this.datamember = datamember;
            this.init = this.Initialize();
            //this.Initialize();
        }
        

        constructor(connection: IPivotConnection) {
            this.connection = connection;
        }

        async Initialize() {
            if (this.DataMember) {
                if (!this.initialized) {
                    this.initialized = true;
                    var restrictions = {};
                    restrictions["CUBE_NAME"] = this.DataMember;
                    var data = await this.getMetaData(this.getSchema(ObjectTypeEnum.Cube), restrictions);
                    if (data.rowsetTable[0]["PREFERRED_QUERY_PATTERNS"] == 0) {
                        //Multidimensional
                        var action = { ObjectType: ObjectTypeEnum.Action, UniqueName: "MPAnnotations" } as TypedSchemaObject
                        var rs = await this.getMetaData(this.getSchema(action.ObjectType), this.getRestrictions(action, { CoordinateType: CoordinateTypeEnum.Cube, Coordinate: this.DataMember, Invocation: InvocationEnum.All } as ActionCoordinate));
                        if (rs.rowsetTable.length > 0) {
                            this.defaultHierarchies = {};
                            var content: string = rs.rowsetTable[0]["CONTENT"];
                            for (var item of content.split("~")) {
                                var match = item.match(/(.*).DEFAULT_HIERARCHY=(.*)/i);
                                if (match) {
                                    this.defaultHierarchies[match[1]] = match[2];
                                }
                            }
                        }
                        this.resolved = true;
                    }
                    else {
                        //Tabular
                        var rs = await this.getRowSet("SELECT [Parameter] as par, [Value] as val FROM [" + data.rowsetTable[0]["CATALOG_NAME"] + "].[$_GlobalSettings] WHERE [Category]='Default Tuple' AND [Parameter]='Tuple_" + this.DataMember + "'");
                        this.resolved = true;
                    }
                }
            }
        }

        private init: Promise<void>;
      
       

        async GetInfoObject(schemaobject: TypedSchemaObject): Promise<InfoObject> {
            var self = this;            
            await self.init;
              
            var info = self.getInfoObject(schemaobject);
            if (info) {
                return info;
            }
            else {
                var data = await self.getMetaData(this.getSchema(schemaobject.ObjectType), self.getRestrictions(schemaobject));
                for (var row of data.rowsetTable) {
                    return self.createInfoObject(row, schemaobject.ObjectType);
                }
            }
            return null;

           /* , (data) => {
                        for (var row of data.rowsetTable) {
                            return resolve(self.createInfoObject(row, schemaobject.ObjectType));                            
                        }
                        return reject();
                    }
                        , reject);
                    }
                });
            });                        */
        }

        async GetInfoObjectCollection(objtype: ObjectTypeEnum, parent?: InfoObject, parameter?: any): Promise<InfoObject[]> {            
            var self = this;            
            await self.init;
            if (parent && parent.ObjectType == ObjectTypeEnum.Member && objtype == ObjectTypeEnum.Member && (parent as MemberInfo).ChildCount==0) {
                return [];
            }
            var nested = self.getNestedInfoObjectCollection(objtype, parent, parameter);
            if (nested) {
                return nested;
            }
            else {
                var data = await self.getMetaData(self.getSchema(objtype), self.getRestrictions(parent, parameter))
                var infos = [];
                for (var row of data.rowsetTable) {
                    var info = self.getInfoObject(self.getSchemaObject(row, objtype));
                    if (info) {
                        infos.push(info);
                    }
                    else {
                        infos.push(self.createInfoObject(row, objtype));
                    }
                }
                self.setNestedInfoObjectCollection(objtype, parent, infos, parameter);
                return infos;
                    /*, (data) => {
                    var infos = [];
                    for (var row of data.rowsetTable) {
                        var info = self.getInfoObject(self.getSchemaObject(row, objtype));
                        if (info) {
                            infos.push(info);
                        }
                        else {
                            infos.push(self.createInfoObject(row, objtype));
                        }
                    }
                    self.setNestedInfoObjectCollection(objtype, parent, infos, treeop);
                    return resolve(infos);
                }
                    , reject);
                }
            });
            });*/
            }                       
        }

        async GetAncestorInfo(objtype: ObjectTypeEnum, obj: InfoObject): Promise<InfoObject> {
            return this.GetInfoObject(this.getSchemaObject(obj.row, objtype));
        }

        Reset(): void {
        }

        private getMetaData(schema: string, restrictions: object): Promise<any> {
            var self = this;
            return new Promise<any>(function (resolve, reject) {
                self.connection.GetMetaData(schema, restrictions, resolve, reject);
            });
        }

        private getRowSet(command: string): Promise<any> {
            var self = this;
            return new Promise<any>(function (resolve, reject) {
                self.connection.GetRowSet(command, resolve, reject);
            });
        }

        private getDataSet(command: string): Promise<any> {
            var self = this;
            return new Promise<any>(function (resolve, reject) {
                self.connection.GetDataSet(command, resolve, reject);
            });
        }

        private getSchema(objectType: ObjectTypeEnum): string {
            switch (objectType) {
                case ObjectTypeEnum.Cube:
                    return "MDSCHEMA_CUBES";
                case ObjectTypeEnum.Dimension:
                    return "MDSCHEMA_DIMENSIONS";
                case ObjectTypeEnum.Hierarchy:
                    return "MDSCHEMA_HIERARCHIES";
                case ObjectTypeEnum.Level:
                    return "MDSCHEMA_LEVELS";
                case ObjectTypeEnum.Measure:
                    return "MDSCHEMA_MEASURES";
                case ObjectTypeEnum.Member:
                    return "MDSCHEMA_MEMBERS";
                case ObjectTypeEnum.Property:
                    return "MDSCHEMA_PROPERTIES";
                case ObjectTypeEnum.Action:
                    return "MDSCHEMA_ACTIONS";
            }
        }

        private getRestrictions(schemaobject: TypedSchemaObject, parameter?: any): object {
            var restrictions = {};
            switch (schemaobject.ObjectType) {
                case ObjectTypeEnum.Cube:
                    restrictions["CUBE_NAME"] = schemaobject.UniqueName;
                    break;
                case ObjectTypeEnum.Dimension:
                    if (this.DataMember) restrictions["CUBE_NAME"] = this.DataMember;
                    restrictions["DIMENSION_UNIQUE_NAME"] = schemaobject.UniqueName;                    
                    break;
                case ObjectTypeEnum.Hierarchy:
                    if (this.DataMember) restrictions["CUBE_NAME"] = this.DataMember;
                    restrictions["HIERARCHY_UNIQUE_NAME"] = schemaobject.UniqueName;                    
                    break;
                case ObjectTypeEnum.Level:
                    if (this.DataMember) restrictions["CUBE_NAME"] = this.DataMember;
                    restrictions["LEVEL_UNIQUE_NAME"] = schemaobject.UniqueName;                                    
                    break;
                case ObjectTypeEnum.Member:
                    if (this.DataMember) restrictions["CUBE_NAME"] = this.DataMember;
                    restrictions["MEMBER_UNIQUE_NAME"] = schemaobject.UniqueName;
                    var treeop = parameter as TreeOpEnum;
                    if (treeop) {
                        restrictions["TREE_OP"] = treeop.valueOf();
                    }
                    break;
                case ObjectTypeEnum.Action:
                    if (this.DataMember) restrictions["CUBE_NAME"] = this.DataMember;
                    restrictions["ACTION_NAME"] = schemaobject.UniqueName;
                    var coordinate = parameter as ActionCoordinate;
                    if (coordinate) {
                        restrictions["COORDINATE_TYPE"] = coordinate.CoordinateType.valueOf();
                        restrictions["COORDINATE"] = coordinate.Coordinate;
                        restrictions["INVOCATION"] = coordinate.Invocation.valueOf();
                    }
                    break;                                   
            }
            return restrictions;
        }
        

        private getSchemaObject(row: object, objectType: ObjectTypeEnum): TypedSchemaObject {
            var schemaobject = new TypedSchemaObject();
            schemaobject.ObjectType = objectType;
            switch (objectType) {
                case ObjectTypeEnum.Cube:                    
                    schemaobject.UniqueName = row["CUBE_NAME"];                    
                    break;
                case ObjectTypeEnum.Dimension:                    
                    schemaobject.UniqueName = row["DIMENSION_UNIQUE_NAME"];                    
                    break;
                case ObjectTypeEnum.Measure:                    
                    schemaobject.UniqueName = row["MEASURE_UNIQUE_NAME"];                    
                    break;
                case ObjectTypeEnum.Hierarchy:               
                    schemaobject.UniqueName = row["HIERARCHY_UNIQUE_NAME"];                    
                    break;
                case ObjectTypeEnum.Level:                    
                    schemaobject.UniqueName = row["LEVEL_UNIQUE_NAME"];                    
                    break;
                case ObjectTypeEnum.Member:                   
                    schemaobject.UniqueName = row["MEMBER_UNIQUE_NAME"];                    
                    break;
            }
            return schemaobject;
        }

        private createInfoObject(row: object, objtype: ObjectTypeEnum): InfoObject {
            var obj: InfoObject = null;
            switch (objtype) {
                case ObjectTypeEnum.Cube:
                    var cube = new CubeInfo(this);
                    cube.Name = row["CUBE_NAME"];
                    cube.UniqueName = row["CUBE_NAME"];
                    cube.Description = row["DESCRIPTION"];                                       
                    obj = cube;
                    break;
                case ObjectTypeEnum.Dimension:
                    var dim = new DimensionInfo(this);                    
                    dim.Name = row["DIMENSION_CAPTION"];
                    dim.UniqueName = row["DIMENSION_UNIQUE_NAME"];                                   
                    dim.Cube_UniqueName = row["CUBE_NAME"];
                    dim.DefaultHierarchy = this.defaultHierarchies[dim.UniqueName] ? this.defaultHierarchies[dim.UniqueName] : row["DEFAULT_HIERARCHY"];
                    dim.Description = row["DESCRIPTION"];     
                    obj = dim;
                    break;
                case ObjectTypeEnum.Measure:
                    var msr = new MeasureInfo(this);                    
                    msr.Name = row["MEASURE_CAPTION"];
                    msr.UniqueName = row["MEASURE_UNIQUE_NAME"];
                    msr.Cube_UniqueName = row["CUBE_NAME"];
                    obj = msr;
                    break;
                case ObjectTypeEnum.Hierarchy:
                    var hier = new HierarchyInfo(this);
                    hier.Name = row["HIERARCHY_CAPTION"]
                    hier.UniqueName = row["HIERARCHY_UNIQUE_NAME"];                    
                    hier.Cube_UniqueName = row["CUBE_NAME"];
                    hier.Dimension_UniqueName = row["DIMENSION_UNIQUE_NAME"];
                    hier.AllMember = row["ALL_MEMBER"];
                    hier.DefaultMember = row["DEFAULT_MEMBER"];
                    hier.Description = row["DESCRIPTION"];     
                    obj = hier;
                    break;
                case ObjectTypeEnum.Level:
                    var lvl = new LevelInfo(this);
                    lvl.Name = row["LEVEL_CAPTION"]
                    lvl.UniqueName = row["LEVEL_UNIQUE_NAME"];                    
                    lvl.Cube_UniqueName = row["CUBE_NAME"];
                    lvl.Dimension_UniqueName = row["DIMENSION_UNIQUE_NAME"];
                    lvl.Hierarchy_UniqueName = row["HIERARCHY_UNIQUE_NAME"];
                    lvl.Description = row["DESCRIPTION"];     
                    obj = lvl;
                    break;
                case ObjectTypeEnum.Member:
                    var mbr = new MemberInfo(this);
                    mbr.Name = row["MEMBER_CAPTION"];
                    mbr.UniqueName = row["MEMBER_UNIQUE_NAME"];
                    mbr.ChildCount = row["CHILDREN_CARDINALITY"];           
                    mbr.Cube_UniqueName = row["CUBE_NAME"];
                    mbr.Dimension_UniqueName = row["DIMENSION_UNIQUE_NAME"];
                    mbr.Hierarchy_UniqueName = row["HIERARCHY_UNIQUE_NAME"];
                    mbr.Level_UniqueName = row["LEVEL_UNIQUE_NAME"];
                    mbr.Parent_UniqueName = row["PARENT_UNIQUE_NAME"];
                    obj = mbr;
                    break;
            }
            obj.row = row;            
            this.registerInfoObject(obj);
            return obj;
        }

        private registerInfoObject(obj: InfoObject) {
            this.objects[this.getInfoObjectKey(obj)] = obj;
        }

        private getInfoObject(schemaobject: TypedSchemaObject): InfoObject {
            return this.objects[this.getInfoObjectKey(schemaobject)];
        }

        private getInfoObjectKey(schemaobject: TypedSchemaObject): string {
            if (schemaobject.ObjectType == ObjectTypeEnum.Cube) return "CUBE." + schemaobject.UniqueName;
            if (schemaobject.ObjectType == ObjectTypeEnum.Database) return "DATABASE." + schemaobject.UniqueName;
            return schemaobject.UniqueName;
        }

        private getNestedInfoObjectCollectionKey(objtype: ObjectTypeEnum, treeop?: TreeOpEnum): string {
            var key = ObjectTypeEnum[objtype] + 's';
            if (treeop && objtype == ObjectTypeEnum.Member) key = TreeOpEnum[treeop] + key;
            return key;
        }

        private getNestedInfoObjectCollection(objtype: ObjectTypeEnum, parent: InfoObject, treeop?: TreeOpEnum): InfoObject[] {
            return parent.nestedObjects[this.getNestedInfoObjectCollectionKey(objtype, treeop)];
        }

        private setNestedInfoObjectCollection(objtype: ObjectTypeEnum, parent: InfoObject, collection: InfoObject[], treeop?: TreeOpEnum): void {
            parent.nestedObjects[this.getNestedInfoObjectCollectionKey(objtype, treeop)] = collection;
        }
    }

    
}
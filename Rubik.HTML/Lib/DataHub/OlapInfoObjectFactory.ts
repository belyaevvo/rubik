
module Rubik.DataHub {

    export class OlapInfoObjectFactory implements IInfoObjectFactory {

        private objects: object = {};   
        private connection: IPivotConnection;

        DataMember: string = null;

        constructor(connection: IPivotConnection) {
            this.connection = connection;
        }

        GetInfoObject(schemaobject: TypedSchemaObject): Promise<InfoObject> {
            var self = this;
            return new Promise<InfoObject>(function (resolve, reject) {
                var info = self.getInfoObject(schemaobject);
                if (info) {
                    resolve(info);
                }
                else {
                    self.connection.GetMetaData(self.getSchema(schemaobject.ObjectType), self.getRestrictions(schemaobject), (data) => {
                        for (var row of data.rowsetTable) {
                            return resolve(self.createInfoObject(row, schemaobject.ObjectType));                            
                        }
                        return reject();
                    }
                        , reject);
                }
            });                        
        }

        GetInfoObjectCollection(objtype: ObjectTypeEnum, parent?: InfoObject, treeop?: TreeOpEnum): Promise<InfoObject[]> {            
            var self = this;
            return new Promise<InfoObject[]>(function (resolve, reject) {
                if (parent && parent.ObjectType == ObjectTypeEnum.Member && objtype == ObjectTypeEnum.Member && (parent as MemberInfo).ChildCount==0) {
                    return resolve([]);
                }
                var nested = self.getNestedInfoObjectCollection(objtype, parent, treeop);
                if (nested) {
                    return resolve(nested);
                }
                else {
                    self.connection.GetMetaData(self.getSchema(objtype), self.getRestrictions(parent, treeop), (data) => {
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
        }

        GetAncestorInfo(objtype: ObjectTypeEnum, obj: InfoObject): Promise<InfoObject> {
            return this.GetInfoObject(this.getSchemaObject(obj.row, objtype));
        }

        Reset(): void {
        }

        getSchema(objectType: ObjectTypeEnum): string {
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
            }
        }

        getRestrictions(schemaobject: TypedSchemaObject, treeop?: TreeOpEnum): object {
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
                    if (treeop) {
                        restrictions["TREE_OP"] = treeop.valueOf();
                    }
                    break;                                    
            }
            return restrictions;
        }

        getSchemaObject(row: object, objectType: ObjectTypeEnum): TypedSchemaObject {
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

        createInfoObject(row: object, objtype: ObjectTypeEnum): InfoObject {
            var obj: InfoObject = null;
            switch (objtype) {
                case ObjectTypeEnum.Cube:
                    var cube = new CubeInfo(this);
                    cube.Name = row["CUBE_NAME"];
                    cube.UniqueName = row["CUBE_NAME"];                                        
                    obj = cube;
                    break;
                case ObjectTypeEnum.Dimension:
                    var dim = new DimensionInfo(this);                    
                    dim.Name = row["DIMENSION_CAPTION"];
                    dim.UniqueName = row["DIMENSION_UNIQUE_NAME"];                                   
                    dim.Cube_UniqueName = row["CUBE_NAME"];
                    dim.DefaultHierarchy = row["DEFAULT_HIERARCHY"];
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
                    obj = hier;
                    break;
                case ObjectTypeEnum.Level:
                    var lvl = new LevelInfo(this);
                    lvl.Name = row["LEVEL_CAPTION"]
                    lvl.UniqueName = row["LEVEL_UNIQUE_NAME"];                    
                    lvl.Cube_UniqueName = row["CUBE_NAME"];
                    lvl.Dimension_UniqueName = row["DIMENSION_UNIQUE_NAME"];
                    lvl.Hierarchy_UniqueName = row["HIERARCHY_UNIQUE_NAME"];
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
                    obj = mbr;
                    break;
            }
            obj.row = row;
            this.registerInfoObject(obj);
            return obj;
        }

        registerInfoObject(obj: InfoObject) {
            this.objects[this.getInfoObjectKey(obj)] = obj;
        }

        getInfoObject(schemaobject: TypedSchemaObject): InfoObject {
            return this.objects[this.getInfoObjectKey(schemaobject)];
        }

        getInfoObjectKey(schemaobject: TypedSchemaObject): string {
            if (schemaobject.ObjectType == ObjectTypeEnum.Cube) return "CUBE." + schemaobject.UniqueName;
            if (schemaobject.ObjectType == ObjectTypeEnum.Database) return "DATABASE." + schemaobject.UniqueName;
            return schemaobject.UniqueName;
        }

        getNestedInfoObjectCollectionKey(objtype: ObjectTypeEnum, treeop?: TreeOpEnum): string {
            var key = ObjectTypeEnum[objtype] + 's';
            if (treeop && objtype == ObjectTypeEnum.Member) key = TreeOpEnum[treeop] + key;
            return key;
        }

        getNestedInfoObjectCollection(objtype: ObjectTypeEnum, parent: InfoObject, treeop?: TreeOpEnum): InfoObject[] {
            return parent.nestedObjects[this.getNestedInfoObjectCollectionKey(objtype, treeop)];
        }

        setNestedInfoObjectCollection(objtype: ObjectTypeEnum, parent: InfoObject, collection: InfoObject[], treeop?: TreeOpEnum): void {
            parent.nestedObjects[this.getNestedInfoObjectCollectionKey(objtype, treeop)] = collection;
        }
    }
}
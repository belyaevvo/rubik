module Rubik.DataHub {
    export class TypedSchemaObject extends SchemaObject{
        protected objectType: ObjectTypeEnum;

        get ObjectType(): ObjectTypeEnum { return this.objectType; }

        set ObjectType(objectType: ObjectTypeEnum)  { 
            this.objectType=objectType; 
        }

        static Create(objtype: ObjectTypeEnum, uniquename: string): TypedSchemaObject {
            var obj = new TypedSchemaObject();
            obj.objectType = objtype;
            obj.UniqueName = uniquename;
            return obj;
        }
    }

    export enum ObjectTypeEnum {
        Database,
        Cube,
        Dimension,
        Measure,
        Hierarchy,
        Level,
        Member,
        Property,
        Action
    }
    
}
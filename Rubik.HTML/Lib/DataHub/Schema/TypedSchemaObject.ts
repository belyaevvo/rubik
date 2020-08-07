module Rubik.DataHub {
    export class TypedSchemaObject extends SchemaObject{
        ObjectType: ObjectTypeEnum;

        static Create(objtype: ObjectTypeEnum, uniquename: string): TypedSchemaObject {
            var obj = new TypedSchemaObject();
            obj.ObjectType = objtype;
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
/// <reference path="../../Collections/List.ts" />
/// <reference path="MemberSelectionEnum.ts" />


module Rubik.DataHub {

    export type List<T> = Rubik.Collections.List<T>;

    export interface ISchemaObject {
        UniqueName: string;
    }

    export interface IInfoObject extends ISchemaObject {
        Name: string;
    }

    export interface ISchema {
        Columns: IAxis;
        Rows: IAxis;
        Filters: IAxis;
        Data: IAxis;
        CalculatedMembers: List<ICalculatedMember>;
        CalculatedSets: List<ICalculatedSet>;
        CubeName: string;
    }

    export interface IAxis {
        Role: AxisRoleEnum;
    }

    export interface IHierarchySet {
        HierarchyName: string;
        LevelName: string;
        SelectedMembers: List<ISelectedMember>;
        Properties: List<string>;
    }

    export interface ISelectedMember extends ISchemaObject {
        SelectionType: MemberSelectionEnum;
    }

    export interface IMeasure  {

    }

    export interface IMeasureInfo extends IInfoObject {

    }

    export interface ICalculatedMember extends ISchemaObject {

    }

    export interface ICalculatedSet extends ISchemaObject {

    }



    export interface IInfoObjectFactory {
        
        GetAncestorInfo(objtype: Rubik.DataHub.ObjectTypeEnum, obj: InfoObject): Promise<InfoObject>;

        GetInfoObject(schemaobject: TypedSchemaObject): Promise<InfoObject>;

        GetInfoObjectCollection(objtype: Rubik.DataHub.ObjectTypeEnum, parent?: InfoObject, treeop?: Rubik.DataHub.TreeOpEnum): Promise<InfoObject[]>;
        
    }
}
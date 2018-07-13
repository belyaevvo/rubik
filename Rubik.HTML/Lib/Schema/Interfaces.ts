/// <reference path="../Collections/List.ts" />
/// <reference path="MemberSelectionEnum.ts" />


module Rubik.Server.Schema {

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
        Data: List<IMeasureInfo>;
        CalculatedMembers: List<ICalculatedMember>;
        CalculatedSets: List<ICalculatedSet>;
        CubeName: string;
    }

    export interface IAxis {
        Sets: List<IHierarchySet>;
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

    export interface IMeasureInfo extends IInfoObject {

    }

    export interface ICalculatedMember extends ISchemaObject {

    }

    export interface ICalculatedSet extends ISchemaObject {

    }
}
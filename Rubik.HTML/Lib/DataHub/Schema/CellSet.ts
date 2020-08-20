module Rubik.DataHub {
    export interface ICellSet {
        cells: Rubik.Collections.IObjectDictionary<ICell>;
        columns: IResultAxis;
        rows: IResultAxis;
        filters: IResultAxis;
    }

    export interface IResultAxis {
        hierarchies: IResultHierarchy[];
        positions: IPosition[];
    }

    export interface ICell {
        value: any;
        fmtValue: string;
    }

    export interface IPosition {
        ordinal: number;
        members: IResultMember[];
    }

    export interface IResultMember {
        caption: string;
        uniqueName: string;
        childCount: number;
        levelName: string;
        levelDepth: number;
        drilledDown: boolean;
        parentSameAsPrevious: boolean;
        properties: IMemberProperty[];
    }

    export interface IResultHierarchy {        
        uniqueName: string;        
        index: number;      
        properties: IHierarchyProperty[];
    }

    export interface IHierarchyProperty {
        name: string;
        uniqueName: string;        
    }
    export interface IMemberProperty {
        name: string;
        uniqueName: string;
        value: any;
    }
}
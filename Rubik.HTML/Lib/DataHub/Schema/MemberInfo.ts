module Rubik.DataHub {
    export class MemberInfo extends InfoObject {
        get ObjectType(): ObjectTypeEnum { return ObjectTypeEnum.Member; }        
        
        Cube_UniqueName: string;
        Dimension_UniqueName: string;
        Hierarchy_UniqueName: string;
        Level_UniqueName: string;
        Parent_UniqueName: string;
        ChildCount: number;

        get Cube(): Promise<CubeInfo> {
            return this.factory.GetAncestorInfo(Rubik.DataHub.ObjectTypeEnum.Cube, this) as Promise<CubeInfo>;
        }
        get Dimension(): Promise<DimensionInfo> {
            return this.factory.GetAncestorInfo(Rubik.DataHub.ObjectTypeEnum.Dimension, this) as Promise<DimensionInfo>;
        }
        get Hierarchy(): Promise<HierarchyInfo> {
            return this.factory.GetAncestorInfo(Rubik.DataHub.ObjectTypeEnum.Hierarchy, this) as Promise<HierarchyInfo>;
        }
        get Level(): Promise<LevelInfo> {
            return this.factory.GetAncestorInfo(Rubik.DataHub.ObjectTypeEnum.Level, this) as Promise<LevelInfo>;
        }
        
        get Children(): Promise<MemberInfo[]> {
            return this.factory.GetInfoObjectCollection(Rubik.DataHub.ObjectTypeEnum.Member, this, TreeOpEnum.Children) as Promise<MemberInfo[]>; 
        }

        get Siblings(): Promise<MemberInfo[]> {
            return this.factory.GetInfoObjectCollection(Rubik.DataHub.ObjectTypeEnum.Member, this, TreeOpEnum.Siblings) as Promise<MemberInfo[]>;
        }

        get Descendants(): Promise<MemberInfo[]> {
            return this.factory.GetInfoObjectCollection(Rubik.DataHub.ObjectTypeEnum.Member, this, TreeOpEnum.Descendants) as Promise<MemberInfo[]>;
        }

        get Ancestors(): Promise<MemberInfo[]> {
            return this.factory.GetInfoObjectCollection(Rubik.DataHub.ObjectTypeEnum.Member, this, TreeOpEnum.Ancestors) as Promise<MemberInfo[]>;
        }

        /*get Properties: Promise<MemberProperty[]> {
            return null;
        }*/
    }
}
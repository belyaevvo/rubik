module Rubik.DataHub {
    export class LevelInfo extends InfoObject {
        get ObjectType(): ObjectTypeEnum { return ObjectTypeEnum.Level; }

        Cube_UniqueName: string;
        Dimension_UniqueName: string;
        Hierarchy_UniqueName: string;        

        get Hierarchy(): Promise<HierarchyInfo> {
            return this.factory.GetAncestorInfo(Rubik.DataHub.ObjectTypeEnum.Hierarchy, this) as Promise<HierarchyInfo>;
        }
        get Dimension(): Promise<DimensionInfo> {
            return this.factory.GetAncestorInfo(Rubik.DataHub.ObjectTypeEnum.Dimension, this) as Promise<DimensionInfo>;
        }
        get Cube(): Promise<CubeInfo> {
            return this.factory.GetAncestorInfo(Rubik.DataHub.ObjectTypeEnum.Cube, this) as Promise<CubeInfo>;                    
        }
        get Members(): Promise<MemberInfo[]> {
            return this.factory.GetInfoObjectCollection(Rubik.DataHub.ObjectTypeEnum.Member, this) as Promise<MemberInfo[]>; 
        }
    }
}
module Rubik.DataHub {
    export class DimensionInfo extends InfoObject {
        get ObjectType(): ObjectTypeEnum { return ObjectTypeEnum.Dimension; }

        Cube_UniqueName: string;
        DefaultHierarchy: string;
        
        get Hierarchies(): Promise<HierarchyInfo[]> {
            return this.factory.GetInfoObjectCollection(Rubik.DataHub.ObjectTypeEnum.Hierarchy, this) as Promise<HierarchyInfo[]>;  
        }
        get Cube(): Promise<CubeInfo> {
            return this.factory.GetAncestorInfo(Rubik.DataHub.ObjectTypeEnum.Cube, this) as Promise<CubeInfo>;                    
        }
    }
}
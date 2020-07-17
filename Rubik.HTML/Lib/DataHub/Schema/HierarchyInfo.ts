module Rubik.DataHub {
    export class HierarchyInfo extends InfoObject {
        get ObjectType(): ObjectTypeEnum { return ObjectTypeEnum.Hierarchy; }

        Cube_UniqueName: string;
        Dimension_UniqueName: string;
        

        get Dimension(): Promise<DimensionInfo> {
            return this.factory.GetAncestorInfo(Rubik.DataHub.ObjectTypeEnum.Dimension, this) as Promise<DimensionInfo>;
        }                
        get Cube(): Promise<CubeInfo> {
            return this.factory.GetAncestorInfo(Rubik.DataHub.ObjectTypeEnum.Cube, this) as Promise<CubeInfo>;            
        }
        get Levels(): Promise<LevelInfo[]> {
            return this.factory.GetInfoObjectCollection(Rubik.DataHub.ObjectTypeEnum.Level, this) as Promise<LevelInfo[]>; 
        }
        get Members(): Promise<MemberInfo[]>{
            return this.factory.GetInfoObjectCollection(Rubik.DataHub.ObjectTypeEnum.Member, this) as Promise<MemberInfo[]>; 
        }
    }
}
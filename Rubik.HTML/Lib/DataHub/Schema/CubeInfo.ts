module Rubik.DataHub {
    export class CubeInfo extends InfoObject {
        get ObjectType(): ObjectTypeEnum { return ObjectTypeEnum.Cube; }

        get Dimensions(): Promise<DimensionInfo[]> {
            return this.factory.GetInfoObjectCollection(Rubik.DataHub.ObjectTypeEnum.Dimension, this) as Promise<DimensionInfo[]>;
        }
        get Hierarchies(): Promise<HierarchyInfo[]> {
            return this.factory.GetInfoObjectCollection(Rubik.DataHub.ObjectTypeEnum.Hierarchy, this) as Promise<HierarchyInfo[]>;
        }
        get Measures(): Promise<MeasureInfo[]> {
            return this.factory.GetInfoObjectCollection(Rubik.DataHub.ObjectTypeEnum.Measure, this) as Promise<MeasureInfo[]>;                    
        }
    }
}
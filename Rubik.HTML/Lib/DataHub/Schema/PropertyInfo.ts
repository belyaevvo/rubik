module Rubik.DataHub {
    export class PropertyInfo extends InfoObject {
        get ObjectType(): ObjectTypeEnum {
            return ObjectTypeEnum.Property;
        }

        Hierarchy: HierarchyInfo;
        Dimension: DimensionInfo;
        Cube: CubeInfo;
    }
}
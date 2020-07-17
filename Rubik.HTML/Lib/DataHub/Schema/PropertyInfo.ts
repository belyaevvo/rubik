module Rubik.DataHub {
    export class PropertyInfo extends InfoObject {
        ObjectType: ObjectTypeEnum = ObjectTypeEnum.Property;
        Hierarchy: HierarchyInfo;
        Dimension: DimensionInfo;
        Cube: CubeInfo;
    }
}
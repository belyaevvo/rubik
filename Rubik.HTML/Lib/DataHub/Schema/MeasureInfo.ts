/// <reference path="Interfaces.ts" />
/// <reference path="InfoObject.ts" />

module Rubik.DataHub {

    export class MeasureInfo extends InfoObject {
        get ObjectType(): ObjectTypeEnum { return ObjectTypeEnum.Measure; }

        Cube_UniqueName: string;

        get Cube(): Promise<CubeInfo> {
            return this.factory.GetAncestorInfo(Rubik.DataHub.ObjectTypeEnum.Cube, this) as Promise<CubeInfo>;                    
        }
    }
}

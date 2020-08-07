module Rubik.DataHub {
    export class ActionCoordinate {
        CoordinateType: CoordinateTypeEnum;
        Coordinate: string;
        Invocation: InvocationEnum = InvocationEnum.Interactive;
    }

    export enum CoordinateTypeEnum {
        Cube = 1,
        Dimension = 2,
        Level = 3,
        Member = 4,
        Set = 5,
        Cell = 6
    }

    export enum InvocationEnum {
        All = 0,
        Interactive = 1,
        OnOpen = 2,
        Batch = 4                
    }
}
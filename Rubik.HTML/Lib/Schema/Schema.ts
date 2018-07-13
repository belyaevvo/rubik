/// <reference path="Interfaces.ts" />
/// <reference path="Axis.ts" />
/// <reference path="MeasureInfo.ts" />
/// <reference path="CalculatedMember.ts" />
/// <reference path="CalculatedSet.ts" />



module Rubik.Server.Schema {
    export class Schema implements ISchema {
        public Columns: Axis;
        public Rows: Axis;
        public Filters: Axis;
        public Data: List<MeasureInfo>;
        public CalculatedMembers: Rubik.Collections.List<CalculatedMember>;
        public CalculatedSets: Rubik.Collections.List<CalculatedSet>;
        public CubeName: string;
    }
}

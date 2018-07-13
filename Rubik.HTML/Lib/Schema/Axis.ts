/// <reference path="Interfaces.ts" />
/// <reference path="HierarchySet.ts" />

module Rubik.Server.Schema {
    export class Axis implements IAxis {
        public Sets: List<HierarchySet>;
    }
}


/// <reference path="Interfaces.ts" />
/// <reference path="SelectedMember.ts" />

module Rubik.Server.Schema {
    export class HierarchySet implements IHierarchySet {
        public HierarchyName: string;
        public LevelName: string;
        public SelectedMembers: List<SelectedMember>;
        public Properties: List<string>;
    }
}
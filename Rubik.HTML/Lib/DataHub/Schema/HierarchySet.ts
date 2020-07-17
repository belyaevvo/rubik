/// <reference path="Interfaces.ts" />
/// <reference path="SelectedMember.ts" />

module Rubik.DataHub {
    export class HierarchySet implements IHierarchySet {
        public HierarchyName: string;
        public LevelName: string;
        public SelectedMembers: List<SelectedMember>;
        public Properties: List<string>;
        public Info: HierarchyInfo = null;
    }
}
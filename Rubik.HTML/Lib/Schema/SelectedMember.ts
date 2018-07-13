/// <reference path="Interfaces.ts" />
/// <reference path="SchemaObject.ts" />

module Rubik.Server.Schema {
    export class SelectedMember extends SchemaObject implements ISelectedMember {
        public SelectionType: MemberSelectionEnum;
    }
}
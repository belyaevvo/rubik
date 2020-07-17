/// <reference path="Interfaces.ts" />
/// <reference path="SchemaObject.ts" />

module Rubik.DataHub {
    export class SelectedMember extends SchemaObject implements ISelectedMember {
        public SelectionType: MemberSelectionEnum;
    }
}
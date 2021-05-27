/// <reference path="Interfaces.ts" />
/// <reference path="SchemaObject.ts" />

module Rubik.DataHub {
    export class SelectedMember extends SchemaObject implements ISelectedMember {
        public SelectionType: MemberSelectionEnum = MemberSelectionEnum.Self;

        constructor(uniquename: string, selectionType: MemberSelectionEnum = MemberSelectionEnum.Self) {
            super(uniquename);
            this.SelectionType = selectionType;
        }

        public toJSON(): any {
            if (this.SelectionType == MemberSelectionEnum.Self) {
                return this.UniqueName;
            }
            return {
                SelectionType: this.SelectionType,
                UniqueName: this.UniqueName
            };
        }
        
    }
}
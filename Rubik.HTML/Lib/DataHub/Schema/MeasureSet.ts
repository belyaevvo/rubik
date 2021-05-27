/// <reference path="Interfaces.ts" />
/// <reference path="SelectedMember.ts" />

module Rubik.DataHub {
    export class MeasureSet extends HierarchySet {
        get SelectedMembers(): List<SelectedMember> {            
            return new Rubik.Collections.List<SelectedMember>(this.schema.Data.Measures.ToArray().map((value, idx, arr) => {                
                return new SelectedMember(value.MeasureName);
            }));            
        }

        get Caption(): string {            
            return Rubik.Resources.Localization.getString("measuresCaption");
        }

        public SelectMembers(members: string | SelectedMember | string[] | SelectedMember[] = null) {
            if (!members && this.schema.Data.Measures.Count() > 1) {
                this.schema.Data.Measures.Clear();
                this.schema.InvokeSchemaChanged();      
            }
        }

        public toJSON(): any {            
            return {
                HierarchyName: this.HierarchyName,
                SelectedMembers: this.SelectedMembers.ToArray()
            };            
        }
    }
}
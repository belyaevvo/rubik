/// <reference path="Interfaces.ts" />
/// <reference path="SelectedMember.ts" />

module Rubik.DataHub {
    export class HierarchySet implements IHierarchySet {
        protected schema: Schema;
        public HierarchyName: string;
        public LevelName: string;
        public SelectedMembers: List<SelectedMember> = new Rubik.Collections.List<SelectedMember>();
        public Properties: List<string> = new Rubik.Collections.List<string>();
        public Info: HierarchyInfo = null;
        
        constructor(schema: Schema = null) {
            this.schema = schema;
        }

        get Schema(): Schema {
            return this.schema;
        }

        get Caption(): string {
            if (this.Info) {
                return this.Info.Caption;
            }
            return this.HierarchyName;
        }

        get IsMeasures(): boolean {
            return this.HierarchyName=="[Measures]";
        }

        public SelectMembers(members: string | SelectedMember | string[] | SelectedMember[] = null) {
            this.SelectedMembers.Clear();
            if (members) {
                if (typeof members === "string") {
                    members = members.split(',');
                }
                if (members instanceof SelectedMember) {
                    members = [members];
                }
                if (Array.isArray(members) && (members as string[]).every((item) => typeof item === "string")) {
                    members = (members as string[]).map(item => new SelectedMember(item));
                }
                if (Array.isArray(members) && members as SelectedMember[]) {
                    (members as SelectedMember[]).forEach(item => this.SelectedMembers.Add(new SelectedMember(item.UniqueName, item.SelectionType)));
                }
            }
            this.schema.InvokeSchemaChanged();      
        }

        public SelectProperties(properties: string | string[] = null) {
            this.Properties.Clear();
            if (properties) {
                if (typeof properties === "string") {
                    properties = properties.split(',');
                }                
                if (Array.isArray(properties) && (properties as string[]).every((item) => typeof item === "string")) {
                    properties.forEach(item => this.Properties.Add(item));
                }                
            }
            this.schema.InvokeSchemaChanged();
        }

        public toJSON(): object {            
            return {
                HierarchyName: this.HierarchyName,
                LevelName: this.LevelName,
                SelectedMembers: this.SelectedMembers.ToArray(),
                Properties: this.Properties.ToArray()
            };
        }
    }
}
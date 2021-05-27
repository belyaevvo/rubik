/// <reference path="Interfaces.ts" />
/// <reference path="HierarchySet.ts" />

module Rubik.DataHub {
    export class Axis implements IAxis {
        protected schema: Schema;
        Role: AxisRoleEnum;

        constructor(schema: Schema = null) {
            this.schema = schema;
        }

        get Schema(): Schema {
            return this.schema;
        }

        public toJSON(): any {
            return this.Role;                            
        }
        
    }
}


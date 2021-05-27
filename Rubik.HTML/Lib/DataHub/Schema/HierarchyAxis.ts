module Rubik.DataHub {
    export class HierarchyAxis extends Axis {
        public NonEmpty: boolean = true;
        public Sets: List<HierarchySet> = new Collections.List<HierarchySet>();

        constructor(role: AxisRoleEnum, schema: Schema = null) {
            super(schema);
            this.Role = role;
        }

        public toJSON(): any {
            if (this.NonEmpty) return this.Sets.ToArray();           
            return {
                NonEmpty: this.NonEmpty,                
                Sets: this.Sets.ToArray()
            };
        }
    }
}
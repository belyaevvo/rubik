module Rubik.DataHub {
    export class HierarchyAxis extends Axis {
        public NonEmpty: boolean = true;
        public Sets: List<HierarchySet> = new Collections.List<HierarchySet>();

        constructor(role: AxisRoleEnum) {
            super();
            this.Role = role;
        }
    }
}
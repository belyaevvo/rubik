﻿module Rubik.DataHub {
    export class DataAxis extends Axis {
        Role: AxisRoleEnum = AxisRoleEnum.Data;
        public Measures: List<Measure> = new Collections.List<Measure>();
    }
}
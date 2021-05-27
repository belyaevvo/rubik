/// <reference path="Interfaces.ts" />
/// <reference path="SchemaObject.ts" />

module Rubik.DataHub {
    export class CustomMember extends SchemaObject implements ICustomMember {
        Expression: string;

        constructor(uniquename: string = null, expression: string = null) {
            super(uniquename);
            this.Expression = expression;
        }

        public get IsMeasure(): boolean {
            return this.UniqueName.indexOf("[Measures]") >= 0;
        }

        public toJSON() {
            return {
                UniqueName: this.UniqueName,
                Expression: this.Expression
            };
        }
    }
}

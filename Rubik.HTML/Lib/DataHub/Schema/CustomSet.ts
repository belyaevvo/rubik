/// <reference path="Interfaces.ts" />
/// <reference path="SchemaObject.ts" />

module Rubik.DataHub {
    export class CustomSet extends SchemaObject implements ICustomSet {
        Expression: string;

        constructor(uniquename: string = null, expression: string = null) {
            super(uniquename);
            this.Expression = expression;
        }

        public toJSON() {
            return {
                UniqueName: this.UniqueName,
                Expression: this.Expression
            };
        }
    }
}

/// <reference path="Interfaces.ts" />
/// <reference path="SchemaObject.ts" />

module Rubik.DataHub {
    export class CustomMember extends SchemaObject implements ICustomMember {
        Expression: string;
    }
}

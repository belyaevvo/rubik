/// <reference path="Interfaces.ts" />
/// <reference path="SchemaObject.ts" />

module Rubik.Server.Schema {
    export class InfoObject extends SchemaObject implements IInfoObject {
        public Name: string;
    }
}

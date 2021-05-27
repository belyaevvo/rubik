/// <reference path="Interfaces.ts" />

module Rubik.DataHub {
    export class SchemaObject implements ISchemaObject{
        public UniqueName: string;

        constructor(uniquename: string = null) {
            this.UniqueName = uniquename; 
        }

        public toJSON(): any {
            return this.UniqueName;
        }
    }
}




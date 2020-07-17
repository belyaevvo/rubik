/// <reference path="Interfaces.ts" />
/// <reference path="TypedSchemaObject.ts" />

module Rubik.DataHub {
    export class InfoObject extends TypedSchemaObject implements IInfoObject {  
        nestedObjects: object = {};                
        row: object;        
        protected caption: string;
        protected factory: IInfoObjectFactory;

        public Name: string;        

        public get Caption(): string {
            return this.caption || this.Name;            
        }        

        public set Caption(caption: string) {
            this.caption = caption;
        }        


        constructor(factory: IInfoObjectFactory) {
            super();
            this.factory = factory;
        }

    }

    export enum TreeOpEnum {
        Ancestors = 0x20,
        Children = 0x01,
        Siblings = 0x02,
        Parent = 0x04,
        Self = 0x08,
        Descendants = 0x10
    }    
}

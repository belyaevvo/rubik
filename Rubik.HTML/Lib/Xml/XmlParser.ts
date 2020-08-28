module Rubik.Xml {

    export class XmlParser {
        public Result: any;
        public soap: any;
        public schema: any;
        public schemaPrefix: string;
        public parser: sax.SAXParser;
        private xsd: XsdParser;
        private objs: object[] = [];
        private types: object = {};
        private contentType: string = null;


        get currentProperty(): any {
            if (this.parentObject)
                return this.parentObject[this.currentTag.name];
            return null;
        }

        set currentProperty(value: any) {
            if (this.parentObject) {
                this.parentObject[this.currentTag.name] = value;
                this.objs.pop();
                this.objs.push(value);
            }
        }

        get parentObject(): object {
            if (this.objs.length <= 1) return null;
            return this.objs[this.objs.length - 2];
        }

        get currentObject(): object {
            if (this.objs.length == 0) return null;
            return this.objs[this.objs.length - 1];
        }

        get currentTag(): any {
            return this.parser.tag;
        }



        constructor() {
            this.parser = new sax.SAXParser(true);
            this.parser.onopentag = (tag) => {
                this.startobject(tag);
                this.setobjectProperties(tag.attributes);
            };
            this.parser.ontext = (text) => {
                this.setobjectText(text);
            };
            this.parser.onclosetag = (tag) => {
                this.endobject(tag);
            };
        }

        write(chunk: any): void {
            this.parser.write(chunk);
        }

        close(): void {
            this.parser.close();
        }

        

        private startobject(tag: any) {
            var obj = this.createobject(tag.name);            
            if (this.currentObject) {
                if (tag.name in this.currentObject) {
                    if (isArray(this.currentObject[tag.name])) {
                        this.currentObject[tag.name].push(obj);
                    }
                    else {
                        var pobj = this.currentObject[tag.name];
                        this.currentObject[tag.name] = [];
                        this.currentObject[tag.name].push(pobj, obj);
                    }
                } else if (tag.name.match(/.*:schema$/i)) {
                    this.schema = obj;
                    this.schemaPrefix = tag.name.substr(0, tag.name.indexOf(':'));                 
                } else if (tag.name == "return") {
                    this.Result = obj;
                } else {
                    this.currentObject[tag.name] = obj;
                }
            }
            else {
                this.soap = obj;
            }
            this.objs.push(obj);
        }

        private endobject(tag: any) {
            var props = Object.getOwnPropertyNames(this.currentObject);
            if (props.length == 1) {
                var prop = props[0];
                //if (isArray(this.currentObject[prop]) || prop == "#text") {
                if (prop == "#text") {
                    var value = this.currentObject[props[0]];
                    this.objs.pop();
                    this.currentObject[tag] = value;
                    return;
                }
            }
            this.objs.pop();
        }

        private createobject(tag: any): object {
            var obj = {};
            switch (tag) {
                case this.schemaPrefix + ":schema":
                    obj = { [this.schemaPrefix + ":complexType"]: [], [this.schemaPrefix + ":simpleType"]: [], [this.schemaPrefix + ":group"]: [], [this.schemaPrefix + ":element"] : [] };
                    break;
                case this.schemaPrefix + ":sequence":
                    obj = { [this.schemaPrefix + ":element"]: [], [this.schemaPrefix + ":group"]: [], [this.schemaPrefix + ":choiсe"]: [], [this.schemaPrefix + ":sequence"]: [] };
                    break;
                case this.schemaPrefix + ":choiсe":
                    obj = { [this.schemaPrefix + ":element"]: [], [this.schemaPrefix + ":group"]: [], [this.schemaPrefix + ":choiсe"]: [], [this.schemaPrefix + ":sequence"]: [] };
                    break;
            }
            return obj;
        }

        private setobjectProperties(properties: object) {
            var props = Object.getOwnPropertyNames(properties);
            for (var prop of props) {
                if (prop.indexOf("xsi:") == 0) {
                    this.contentType = properties[prop];
                }
                else if (prop.indexOf("xmlns") != 0) {
                    this.currentObject[prop] = properties[prop];
                }
            }
        }

        private setobjectText(text: string) {
            if (this.currentObject) {
                switch (this.contentType) {
                    case "xsd:double":
                        this.currentObject["#text"] = parseFloat(text);
                        break;
                    case "xsd:int":
                        this.currentObject["#text"] = +text;
                        break;
                    default:
                        this.currentObject["#text"] = text;
                        break;
                }
            }
            this.contentType = null;
        }
    }
}
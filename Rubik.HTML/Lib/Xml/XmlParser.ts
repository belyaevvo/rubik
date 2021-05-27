module Rubik.Xml {

    const SchemaNS = "http://www.w3.org/2001/XMLSchema";
    const SchemaInstanceNS = "http://www.w3.org/2001/XMLSchema-instance";

    function xmldecode(toDecode: string): string {
        if (toDecode) {            
            //return decodeURIComponent(toDecode.replace(/_x/g, "\\u").replace(/_/g, ""));
            return toDecode.replace(/_x[0-9A-F]{4}_/g, function (match) {
                return String.fromCharCode(parseInt(match.substr(2,4), 16));
            });
        }
        else {
            return null;
        }        
    }



    export class XmlParser {
        public Result: any;
        public dictionary: object = {};
        public soap: any;
        public schema: any;
        public schemaPrefix: string;        
        public parser: sax.SAXParser;
        private tagName: string;
        private xsd: XsdParser;
        private objs: object[] = [];
        private types: object[] = [];
        private namespaces: object[] = [];
        private type: any;        
        private attributePrefix: string = "@";
        private isArrayDefault: boolean = false;


        get currentProperty(): any {
            if (this.parentObject)
                return this.parentObject[this.tagName];
            return null;
        }

        set currentProperty(value: any) {
            if (this.parentObject) {
                this.parentObject[this.tagName] = value;
                this.objs.pop();
                this.objs.push(value);
            }
        }

        get currentNamespaces(): object {
            if (this.namespaces.length == 0) return null;
            return this.namespaces[this.namespaces.length - 1];
        }

        set currentNamespaces(namespaces: object) {
            if (namespaces) {
                this.namespaces.push(namespaces);
            } else if (this.namespaces.length != 0 && this.namespaces.length >= this.objs.length) {
                this.namespaces.pop();
            }
        }
        
        get currentObject(): object {
            if (this.objs.length == 0) return null;
            return this.objs[this.objs.length - 1];
        }

        set currentObject(obj: object) {
            if (obj) {
                this.objs.push(obj);
            } else if (this.objs.length != 0) {
                this.objs.pop();
            }
        }

        get currentType(): any {
            if (this.types.length == 0) return null;
            return this.types[this.types.length - 1];
        }

        set currentType(type: any) {
            if (type) {
                this.types.push(type);
            } else if (this.types.length != 0) {
                this.types.pop();
            }
        }

        get currentTag(): any {
            if (this.parser.tag)
                return this.parser.tag;
            return this.parser.tags[this.parser.tags.length - 1];
        }

        get parentObject(): object {
            if (this.objs.length <= 1) return null;
            return this.objs[this.objs.length - 2];
        }

        get parentTag(): any {
            if (this.parser.tags.length <= 1) return null;
            return this.parser.tags[this.parser.tags.length - 2];
        }



        constructor() {
            this.parser = new sax.SAXParser(true);
            this.parser.onopentag = (tag) => {
                this.tagName = xmldecode(tag.name);
                this.startobject(tag);
                this.setobjectAttributes(tag.attributes);
                //this.objs.push(tag.name);
            };            
            this.parser.ontext = (text) => {
                this.setobjectText(text);

                //this.objs.push(text.slice());                                
                /*var str: string = "";
                str.toString();
                str.slice();*/
                //this.dictionary[text] = 1;
            };
            this.parser.onclosetag = (tag) => {
                this.endobject(tag);
            };
            this.parser.onopennamespace = (ns) => {

            };
            this.parser.onclosenamespace = (ns) => {

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
                if (this.tagName in this.currentObject) {
                    if (isArray(this.currentObject[this.tagName])) {
                        this.currentObject[this.tagName].push(obj);
                    }
                    else {
                        var pobj = this.currentObject[this.tagName];
                        if (pobj) {
                            this.currentObject[this.tagName] = [pobj, obj];
                        } else {
                            this.currentObject[this.tagName] = obj;
                        }

                    }
                } else if (this.tagName.match(/.*:schema$/i)) {                    
                    this.schemaPrefix = this.tagName.substr(0, this.tagName.indexOf(':'));
                    this.xsd = new XsdParser();                    
                    obj = this.createobject(this.tagName);
                    this.schema = {};
                    this.schema[this.tagName] = obj;
                } else if (this.tagName == "return") {
                    this.Result = obj;
                } else {
                    if (this.currentType && this.currentType.type == "array" || !this.currentType && this.isArrayDefault) {
                        this.currentObject[this.tagName] = [obj];
                    }
                    else {
                        this.currentObject[this.tagName] = obj;
                    }
                }
            }
            else {
                this.soap = obj;
            }
            this.currentObject = obj;            
        }

        private endobject(tag: any) {
            var props = Object.getOwnPropertyNames(this.currentObject);
            if (props.length == 1) {
                var prop = props[0];
                //if (isArray(this.currentObject[prop]) || prop == "#text") {
                if (prop == "#text") {
                    //var value = this.currentObject[prop];
                    //this.objs.pop();
                    this.parentObject[this.tagName] = this.currentObject[prop]
                    //return;
                }
            }            
            if (this.tagName.match(/.*:schema$/i)) {
                var start = new Date().getTime();
                this.xsd.parseSchema(this.schema, this.schemaPrefix);
                this.type = this.xsd.type;                
                var end = new Date().getTime();                
                console.log("Call to parseSchema took " + (end - start) + " milliseconds.")
            }
            this.currentObject = null;
            this.currentType = null;
            this.currentNamespaces = null;
        }

        private createobject(tag: any): object {            
            var obj = {};
            if (this.type) {
                if (!this.currentType) {
                    this.currentType = this.type.properties[this.parentTag.name];                    
                }                               
                var basetype = this.currentType.type == "array" ? this.currentType.items : this.currentType;
                if (basetype.properties && basetype.properties[tag]) {
                    this.currentType = this.xsd.getType(basetype.properties[tag]);
                }
                else if (basetype.additionalProperties) {
                    this.currentType = { type:"any" };
                }
                else {
                    this.currentType = basetype;
                }
            }
            else {
                switch (tag) {
                    case this.schemaPrefix + ":schema":
                        obj = { [this.schemaPrefix + ":complexType"]: [], [this.schemaPrefix + ":simpleType"]: [], [this.schemaPrefix + ":group"]: [], [this.schemaPrefix + ":element"]: [] };
                        break;
                    case this.schemaPrefix + ":sequence":
                        obj = { [this.schemaPrefix + ":element"]: [], [this.schemaPrefix + ":group"]: [], [this.schemaPrefix + ":choiсe"]: [], [this.schemaPrefix + ":sequence"]: [] };
                        break;
                    case this.schemaPrefix + ":choiсe":
                        obj = { [this.schemaPrefix + ":element"]: [], [this.schemaPrefix + ":group"]: [], [this.schemaPrefix + ":choiсe"]: [], [this.schemaPrefix + ":sequence"]: [] };
                        break;
                }
            }
            return obj;
        }

        private setobjectAttributes(attributes: object) {
            var props = Object.getOwnPropertyNames(attributes);            
            var namespaces = {};
            var containsNS: boolean = false;
            for (var prop of props) {
                if (prop.indexOf("xmlns") == 0) {
                    var prefix = prop.substr(prop.indexOf(':') + 1);
                    namespaces[prefix] = attributes[prop];
                    containsNS = true;
                }
                
                    //this.contentType = attributes[prop];
                if (this.currentType && this.currentType.type === "any") {
                    if (this.getAttributeNamespace(prop) == SchemaInstanceNS && this.getAttributeName(prop) == "type") {
                        this.currentType = null;
                        this.currentType = this.xsd.getType(attributes[prop], this.getAttributePrefix(attributes[prop]));
                    }
                }                
                else {
                    this.currentObject[this.attributePrefix + prop] = attributes[prop];
                }
            }
            if (containsNS) {
                this.registerNamespaces(namespaces);
            }
        }

        private setobjectText(text: string) {
            var type: string = null;
            if (this.currentObject) {
                type = this.currentType ? this.currentType.type : null;                                 
                switch (type) {
                    case "number":
                        this.parentObject[this.tagName] = parseFloat(text);
                        break;
                    case "integer":
                        this.parentObject[this.tagName] = parseInt(text);
                        break;
                    default:
                        this.parentObject[this.tagName] = text;
                        break;
                }                                
            }            
        }

        private getAttributeNamespace(attribute: string) {            
            if (this.currentNamespaces)
                return this.currentNamespaces[this.getAttributePrefix(attribute) || "xmlns"];
            return null;
        }

        private getAttributePrefix(attribute: string) {
            var index = attribute.indexOf(':');
            var prefix = index < 0 ? null : attribute.substr(0, index);
            return prefix;
        }

        private getAttributeName(attribute: string) {            
            return attribute.substr(attribute.indexOf(':') + 1);
        }

        private registerNamespaces(namespaces: object) {
            var newNamespaces = {};
            _extend(newNamespaces, this.currentNamespaces || {});
            _extend(newNamespaces, namespaces, true);
            this.currentNamespaces = newNamespaces;
        }
        
    }    
}
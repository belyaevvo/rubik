module Rubik.DataHub {

    var _soap = "http://schemas.xmlsoap.org/soap/",
        _xmlnsSOAPenvelope = _soap + "envelope/",
        _xmlnsSOAPenvelopePrefix = "SOAP-ENV",
        _xmlnsIsSOAPenvelope = "xmlns:" + _xmlnsSOAPenvelopePrefix + "=\"" + _xmlnsSOAPenvelope + "\"",
        _SOAPencodingStyle = _xmlnsSOAPenvelopePrefix + ":encodingStyle=\"" + _soap + "encoding/\"",
        _ms = "urn:schemas-microsoft-com:",
        _xmlnsXmla = _ms + "xml-analysis",
        _xmlnsIsXmla = "xmlns=\"" + _xmlnsXmla + "\"",
        _xmlnsSQLPrefix = "sql",
        _xmlnsSQL = _ms + "xml-sql",
        _xmlnsSchema = "http://www.w3.org/2001/XMLSchema",
        _xmlnsSchemaPrefix = "xsd",
        _xmlnsSchemaInstance = "http://www.w3.org/2001/XMLSchema-instance",
        _xmlnsSchemaInstancePrefix = "xsi",
        _xmlnsRowset = _xmlnsXmla + ":rowset",
        _xmlnsDataset = _xmlnsXmla + ":mddataset",
        _xmlnsEngine = "http://schemas.microsoft.com/analysisservices/2003/engine",
        _xmlnsIsEngine = "xmlns=\"" + _xmlnsEngine + "\"";

    var _xmlRequestType = "RequestType";

    var _xmlaDISCOVER = "DISCOVER_";
    var _xmlaMDSCHEMA = "MDSCHEMA_";
    var _xmlaDBSCHEMA = "DBSCHEMA_";

    function _applyProps(object, properties, overwrite) {
        if (properties && (!object)) {
            object = {};
        }
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                if (overwrite || _isUnd(object[property])) {
                    object[property] = properties[property];
                }
            }
        }
        return object;
    };

    function getXmlaSoapMessage(options: any) {
        var method = options.method;
        var header = "";

        if (options.methodheader || options.sessionId) {
            header = "\n <" + _xmlnsSOAPenvelopePrefix + ":Header>";
            if (options.methodheader) {
                if (options.methodheader == XmlaClient.HEADER_BEGIN_SESSION) {
                    header += "\n <" + XmlaClient.HEADER_BEGIN_SESSION + " " + _xmlnsIsXmla + " />";
                }
                else if (options.methodheader == XmlaClient.HEADER_END_SESSION) {
                    header += "\n <" + XmlaClient.HEADER_END_SESSION + " " + _xmlnsIsXmla + " " + XmlaClient.HEADER_SESSION_ID + "=\"" + options.sessionId + "\" />";
                }
                else if (options.methodheader == XmlaClient.HEADER_PROTOCOL_CAPABILITIES) {
                    header += "\n <" + XmlaClient.HEADER_PROTOCOL_CAPABILITIES + " " + _xmlnsIsEngine + " >";
                    for (var prop in options.protocolCapabilities) {
                        header += "\n <" + XmlaClient.HEADER_CAPABILITY + " >" + options.protocolCapabilities[prop] + "</" + XmlaClient.HEADER_CAPABILITY + " >";
                    }
                    header += "\n </" + XmlaClient.HEADER_PROTOCOL_CAPABILITIES + " >";
                }
            }
            else if (options.sessionId) {
                header += "\n <" + XmlaClient.HEADER_SESSION + " " + _xmlnsIsXmla + " " + XmlaClient.HEADER_SESSION_ID + "=\"" + options.sessionId + "\" />";
            }
            header += "\n </" + _xmlnsSOAPenvelopePrefix + ":Header>";
        }

        var msg = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
            "\n<" + _xmlnsSOAPenvelopePrefix + ":Envelope" +
            " " + _xmlnsIsSOAPenvelope +
            " " + _SOAPencodingStyle + ">" +
            header +
            "\n <" + _xmlnsSOAPenvelopePrefix + ":Body>" +
            "\n  <" + method + " " + _xmlnsIsXmla + " " + _SOAPencodingStyle + ">"
            ;
        switch (method) {
            case XmlaClient.METHOD_DISCOVER:
                if (!options.requestType) {
                    /*Xmla.Exception._newError(
                        "MISSING_REQUEST_TYPE",
                        "Xmla._getXmlaSoapMessage",
                        options
                    )._throw();*/
                }
                msg += "\n   <" + _xmlRequestType + ">" + options.requestType + "</" + _xmlRequestType + ">" +
                    _getXmlaSoapList("Restrictions", "RestrictionList", options.restrictions, "   ") +
                    _getXmlaSoapList("Properties", "PropertyList", options.properties, "   ");
                break;
            case XmlaClient.METHOD_EXECUTE:
                msg += "\n   <Command>";
                if (options.statement.length > 0 && options.statement.charAt(0) == '<') {
                    msg += "\n" + options.statement;
                }
                else if (options.statement != null) {
                    msg += "\n    <Statement>" + _xmlEncode(options.statement) + "</Statement>";
                }
                msg += "\n   </Command>";
                msg += _getXmlaSoapList("Properties", "PropertyList", options.properties, "   ");
                break;
            default:
            //we used to throw an exception here,
            //but this would make it impossible
            //to execute service or provider specific methods.
        }
        msg += "\n  </" + method + ">" +
            "\n </" + _xmlnsSOAPenvelopePrefix + ":Body>" +
            "\n</" + _xmlnsSOAPenvelopePrefix + ":Envelope>"
            ;
        return msg;
    };    

    function _getXmlaSoapList(container, listType, items, indent) {
        if (!indent) indent = "";
        var n, i, entry, property, item, msg = "\n" + indent + "<" + container + ">";
        if (items) {
            msg += "\n" + indent + " <" + listType + ">";
            for (property in items) {
                if (items.hasOwnProperty(property)) {
                    item = items[property];
                    msg += "\n" + indent + "  <" + property + ">";
                    if (_isArr(item)) {
                        n = item.length;
                        for (i = 0; i < n; i++) {
                            entry = item[i];
                            msg += "<Value>" + _xmlEncode(entry) + "</Value>";
                        }
                    } else {
                        msg += _xmlEncode(item);
                    }
                    msg += "</" + property + ">";
                }
            }
            msg += "\n" + indent + " </" + listType + ">";
        }
        msg += "\n" + indent + "</" + container + ">";
        return msg;
    };

    function _xmlEncode(value) {
        var value;
        switch (typeof (value)) {
            case "string":
                value = value.replace(/\&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                break;
            case "undefined":
                value = "";
                break;
            case "object":
                if (value === null) {
                    value = "";
                }
        }
        return value;
    };

    function _isUnd(arg) {
        return typeof (arg) === "undefined";
    };
    function _isArr(arg) {
        return arg && arg.constructor === Array;
    };
    function _isNum(arg) {
        return typeof (arg) === "number";
    };
    function _isFun(arg) {
        return typeof (arg) === "function";
    };
    function _isStr(arg) {
        return typeof (arg) === "string";
    };
    function _isObj(arg) {
        return arg && typeof (arg) === "object";
    };

    function Utf8ArrayToStr(array): string {
        var out, i, len, c;
        var char2, char3;

        out = "";
        len = array.length;
        i = 0;
        while (i < len) {
            c = array[i++];
            switch (c >> 4) {
                case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
                    // 0xxxxxxx
                    out += String.fromCharCode(c);
                    break;
                case 12: case 13:
                    // 110x xxxx   10xx xxxx
                    char2 = array[i++];
                    out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
                    break;
                case 14:
                    // 1110 xxxx  10xx xxxx  10xx xxxx
                    char2 = array[i++];
                    char3 = array[i++];
                    out += String.fromCharCode(((c & 0x0F) << 12) |
                        ((char2 & 0x3F) << 6) |
                        ((char3 & 0x3F) << 0));
                    break;
            }
        }

        return out;
    }

    export class XmlaClient {
        static METHOD_DISCOVER = "Discover";
        static METHOD_EXECUTE = "Execute";   

        static DISCOVER_DATASOURCES = _xmlaDISCOVER + "DATASOURCES";
        static DISCOVER_PROPERTIES = _xmlaDISCOVER + "PROPERTIES";
        static DISCOVER_SCHEMA_ROWSETS = _xmlaDISCOVER + "SCHEMA_ROWSETS";
        static DISCOVER_ENUMERATORS = _xmlaDISCOVER + "ENUMERATORS";
        static DISCOVER_KEYWORDS = _xmlaDISCOVER + "KEYWORDS";
        static DISCOVER_LITERALS = _xmlaDISCOVER + "LITERALS";
        static DBSCHEMA_CATALOGS = _xmlaDBSCHEMA + "CATALOGS";
        static DBSCHEMA_COLUMNS = _xmlaDBSCHEMA + "COLUMNS";
        static DBSCHEMA_PROVIDER_TYPES = _xmlaDBSCHEMA + "PROVIDER_TYPES";
        static DBSCHEMA_SCHEMATA = _xmlaDBSCHEMA + "SCHEMATA";
        static DBSCHEMA_TABLES = _xmlaDBSCHEMA + "TABLES";
        static DBSCHEMA_TABLES_INFO = _xmlaDBSCHEMA + "TABLES_INFO";
        static MDSCHEMA_ACTIONS = _xmlaMDSCHEMA + "ACTIONS";
        static MDSCHEMA_CUBES = _xmlaMDSCHEMA + "CUBES";
        static MDSCHEMA_DIMENSIONS = _xmlaMDSCHEMA + "DIMENSIONS";
        static MDSCHEMA_FUNCTIONS = _xmlaMDSCHEMA + "FUNCTIONS";
        static MDSCHEMA_HIERARCHIES = _xmlaMDSCHEMA + "HIERARCHIES";
        static MDSCHEMA_LEVELS = _xmlaMDSCHEMA + "LEVELS";
        static MDSCHEMA_MEASURES = _xmlaMDSCHEMA + "MEASURES";
        static MDSCHEMA_MEMBERS = _xmlaMDSCHEMA + "MEMBERS";
        static MDSCHEMA_PROPERTIES = _xmlaMDSCHEMA + "PROPERTIES";
        static MDSCHEMA_SETS = _xmlaMDSCHEMA + "SETS";

        static EVENT_REQUEST = "request";
        static EVENT_SUCCESS = "success";
        static EVENT_ERROR = "error";
        static EVENT_EXECUTE = "execute";
        static EVENT_EXECUTE_SUCCESS = "executesuccess";
        static EVENT_EXECUTE_ERROR = "executeerror";
        static EVENT_DISCOVER = "discover";
        static EVENT_DISCOVER_SUCCESS = "discoversuccess";
        static EVENT_DISCOVER_ERROR = "discovererror";
        static EVENT_GENERAL = [
            XmlaClient.EVENT_REQUEST,
            XmlaClient.EVENT_SUCCESS,
            XmlaClient.EVENT_ERROR
        ];
        static EVENT_DISCOVER_ALL = [
            XmlaClient.EVENT_DISCOVER,
            XmlaClient.EVENT_DISCOVER_SUCCESS,
            XmlaClient.EVENT_DISCOVER_ERROR
        ];
        static EVENT_EXECUTE_ALL = [
            XmlaClient.EVENT_EXECUTE,
            XmlaClient.EVENT_EXECUTE_SUCCESS,
            XmlaClient.EVENT_EXECUTE_ERROR
        ];

        static EVENT_ALL = [].concat(
            XmlaClient.EVENT_GENERAL,
            XmlaClient.EVENT_DISCOVER_ALL,
            XmlaClient.EVENT_EXECUTE_ALL
        );

        static PROP_DATASOURCEINFO = "DataSourceInfo";
        static PROP_CATALOG = "Catalog";
        static PROP_CUBE = "Cube";
        static PROP_FORMAT = "Format";
        static PROP_FORMAT_TABULAR = "Tabular";
        static PROP_FORMAT_MULTIDIMENSIONAL = "Multidimensional";
        static PROP_AXISFORMAT = "AxisFormat";
        static PROP_AXISFORMAT_TUPLE = "TupleFormat";
        static PROP_AXISFORMAT_CLUSTER = "ClusterFormat";
        static PROP_AXISFORMAT_CUSTOM = "CustomFormat";
        static PROP_CONTENT = "Content";
        static PROP_CONTENT_DATA = "Data";
        static PROP_CONTENT_NONE = "None";
        static PROP_CONTENT_SCHEMA = "Schema";
        static PROP_CONTENT_SCHEMADATA = "SchemaData";
       
        static HEADER_SESSION = "Session";
        static HEADER_BEGIN_SESSION = "BeginSession";
        static HEADER_END_SESSION = "EndSession";
        static HEADER_PROTOCOL_CAPABILITIES = "ProtocolCapabilities";
        static HEADER_CAPABILITY = "Capability";
        static HEADER_SESSION_ID = "SessionId";

                        
        constructor(options?: object) {
            if (options) {
                this.options = options;
            }
            else {
                this.options = {};
            }
        }
        

        listeners: object;
        options: any;

        setOptions(options: object) {
        }
        addListener(...args: any[]) {
        }

        execute(options: any): object {
            var properties = options.properties;
            if (!properties) {
                properties = {};
                options.properties = properties;
            }
            _applyProps(properties, this.options.properties, false)
            if (!properties[XmlaClient.PROP_CONTENT]) {
                properties[XmlaClient.PROP_CONTENT] = XmlaClient.PROP_CONTENT_SCHEMADATA;
            }
            /*if (!properties[XmlaClient.PROP_FORMAT]) {
              options.properties[XmlaClient.PROP_FORMAT] = XmlaClient.PROP_FORMAT_MULTIDIMENSIONAL;
            }*/
            var request = _applyProps(options, {
                method: XmlaClient.METHOD_EXECUTE
            }, true);

            return this.request(request);
        }

        executeTabular(options: any): object {
            if (!options.properties) {
                options.properties = {};
            }
            options.properties[Xmla.PROP_FORMAT] = Xmla.PROP_FORMAT_TABULAR;
            return this.execute(options);
        }
        executeMultiDimensional(options: any): object {
            if (!options.properties) {
                options.properties = {};
            }
            options.properties[Xmla.PROP_FORMAT] = Xmla.PROP_FORMAT_MULTIDIMENSIONAL;
            return this.execute(options);
        }

        discover(options: Xmla.Options): object {
            var request = _applyProps(options, {
                method: XmlaClient.METHOD_DISCOVER
            }, true);
            if (!request.requestType) {
                request.requestType = this.options.requestType;
            }
            if (!request.properties) {
                request.properties = {};
            }
            request.properties[XmlaClient.PROP_FORMAT] = XmlaClient.PROP_FORMAT_TABULAR;
            return this.request(request);
        }
        discoverDataSources(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.DISCOVER_DATASOURCES
            }, true);
            return this.discover(request);
        }
        discoverProperties(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.DISCOVER_PROPERTIES
            }, true);
            return this.discover(request);
        }
        discoverSchemaRowsets(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.DISCOVER_SCHEMA_ROWSETS
            }, true);
            return this.discover(request);
        }
        discoverEnumerators(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.DISCOVER_ENUMERATORS
            }, true);
            return this.discover(request);
        }
        discoverKeywords(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.DISCOVER_KEYWORDS
            }, true);
            return this.discover(request);
        }
        discoverLiterals(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.DISCOVER_LITERALS
            }, true);
            return this.discover(request);
        }
        discoverDBCatalogs(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.DBSCHEMA_CATALOGS
            }, true);
            return this.discover(request);
        }
        discoverDBColumns(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.DBSCHEMA_COLUMNS
            }, true);
            return this.discover(request);
        }
        discoverDBProviderTypes(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.DBSCHEMA_PROVIDER_TYPES
            }, true);
            return this.discover(request);
        }
        discoverDBSchemata(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.DBSCHEMA_SCHEMATA
            }, true);
            return this.discover(request);
        }
        discoverDBTables(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.DBSCHEMA_TABLES
            }, true);
            return this.discover(request);
        }
        discoverDBTablesInfo(options: Xmla.Options): object {
            var request = _applyProps(
                options,
                {
                    requestType: XmlaClient.DBSCHEMA_TABLES_INFO
                },
                true
            );
            return this.discover(request);
        }
        discoverMDActions(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.MDSCHEMA_ACTIONS
            }, true);
            return this.discover(request);
        }
        discoverMDCubes(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.MDSCHEMA_CUBES
            }, true);
            return this.discover(request);
        }
        discoverMDDimensions(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.MDSCHEMA_DIMENSIONS
            }, true);
            return this.discover(request);
        }
        discoverMDFunctions(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.MDSCHEMA_FUNCTIONS
            }, true);
            return this.discover(request);
        }
        discoverMDHierarchies(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.MDSCHEMA_HIERARCHIES
            }, true);
            return this.discover(request);
        }
        discoverMDLevels(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.MDSCHEMA_LEVELS
            }, true);
            return this.discover(request);
        }
        discoverMDMeasures(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.MDSCHEMA_MEASURES
            }, true);
            return this.discover(request);
        }
        discoverMDMembers(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.MDSCHEMA_MEMBERS
            }, true);
            return this.discover(request);
        }
        discoverMDProperties(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.MDSCHEMA_PROPERTIES
            }, true);
            return this.discover(request);
        }
        discoverMDSets(options: Xmla.Options): object {
            var request = _applyProps(options, {
                requestType: XmlaClient.MDSCHEMA_SETS
            }, true);
            return this.discover(request);
        }  

        request(options: any): Promise<void | Response> {
            options = _applyProps(options, this.options, false);
            if (!options.url) {
                /*ex = Xmla.Exception._newError(
                    "MISSING_URL",
                    "Xmla.request",
                    options
                );
                ex._throw();*/
            }
            options.properties = _applyProps(options.properties, this.options.properties, false);
            options.restrictions = _applyProps(options.restrictions, this.options.restrictions, false);
            delete options.exception;

            var soapMessage = getXmlaSoapMessage(options);

            const headers = new Headers();
            headers.append("Accept", "text/xml, application/xml, application/soap+xml");
            headers.append("Content-Type", "text/xml");
            if (options.headers) {
                for (var header in options.headers) {
                    headers.append(header, headers[header]);
                }
            }

            var fecthOptions: RequestInit = {
                method: "POST",
                mode: "cors",
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "include", // include, *same-origin, omit
                headers: headers,
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                body: soapMessage
            };

            return fetch(options.url, fecthOptions).then(async (response) => {
                if (response.status >= 200 && response.status <= 299) {
                    var reader = response.body.getReader();

                    var parser: Rubik.Xml.XmlParser = new Rubik.Xml.XmlParser();

                    while (true) {
                        const { done, value } = await reader.read();

                        if (done) {
                            parser.close();
                            break;
                        }

                        var result = Utf8ArrayToStr(value);
                        parser.write(result);

                    }
                }
            }).catch((reason) => {

            });
        }                         
    }

}
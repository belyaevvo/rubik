
export = Xmla;
export as namespace Xmla;

declare class Xmla {
    static METHOD_DISCOVER: string;
    static METHOD_EXECUTE: string;

    static HEADER_BEGIN_SESSION: string;
    static HEADER_END_SESSION: string;
    static HEADER_PROTOCOL_CAPABILITIES: string;

    static EVENT_REQUEST: string;
    static EVENT_SUCCESS: string;
    static EVENT_ERROR: string;
    static EVENT_EXECUTE: string;
    static EVENT_EXECUTE_SUCCESS: string;
    static EVENT_EXECUTE_ERROR: string;
    static EVENT_DISCOVER: string;
    static EVENT_DISCOVER_SUCCESS: string;
    static EVENT_DISCOVER_ERROR: string;
    static EVENT_GENERAL: string[];
    static EVENT_DISCOVER_ALL: string[];
    static EVENT_EXECUTE_ALL: string[];
    static EVENT_ALL: string[];

    static DISCOVER_DATASOURCES: string;
    static DISCOVER_PROPERTIES: string;
    static DISCOVER_SCHEMA_ROWSETS: string;
    static DISCOVER_ENUMERATORS: string;
    static DISCOVER_KEYWORDS: string;
    static DISCOVER_LITERALS: string;
    static DBSCHEMA_CATALOGS: string;
    static DBSCHEMA_COLUMNS: string;
    static DBSCHEMA_PROVIDER_TYPES: string;
    static DBSCHEMA_SCHEMATA: string;
    static DBSCHEMA_TABLES: string;
    static DBSCHEMA_TABLES_INFO: string;
    static MDSCHEMA_ACTIONS: string;
    static MDSCHEMA_CUBES: string;
    static MDSCHEMA_DIMENSIONS: string;
    static MDSCHEMA_FUNCTIONS: string;
    static MDSCHEMA_HIERARCHIES: string;
    static MDSCHEMA_LEVELS: string;
    static MDSCHEMA_MEASURES: string;
    static MDSCHEMA_MEMBERS: string;
    static MDSCHEMA_PROPERTIES: string;
    static MDSCHEMA_SETS: string;

    static PROP_CATALOG: string;
    static PROP_CUBE: string;
    static PROP_FORMAT: string;
    static PROP_FORMAT_TABULAR: string;
    static PROP_FORMAT_MULTIDIMENSIONAL: string;
    static PROP_AXISFORMAT: string;
    static PROP_AXISFORMAT_TUPLE: string;
    static PROP_AXISFORMAT_CLUSTER: string;
    static PROP_AXISFORMAT_CUSTOM: string;
    static PROP_CONTENT: string;
    static PROP_CONTENT_DATA: string;
    static PROP_CONTENT_NONE: string;
    static PROP_CONTENT_SCHEMA: string;
    static PROP_CONTENT_SCHEMADATA: string;

    constructor(options: object);
    constructor();
    
    listeners: object;    
    options: object;
        
    setOptions(options: object);
    addListener(...args: any[]);     

    execute(options: object): object;
    executeTabular(options: object): object;
    executeMultiDimensional(options: object): object;

    discover(options: Xmla.Options): object;
    discoverDataSources(options: Xmla.Options): object;
    discoverProperties(options: Xmla.Options): object;
    discoverSchemaRowsets(options: Xmla.Options): object;
    discoverEnumerators(options: Xmla.Options): object;
    discoverKeywords(options: Xmla.Options): object;
    discoverLiterals(options: Xmla.Options): object;
    discoverDBCatalogs(options: Xmla.Options): object;
    discoverDBColumns(options: Xmla.Options): object;
    discoverDBProviderTypes(options: Xmla.Options): object;
    discoverDBSchemata(options: Xmla.Options): object;
    discoverDBTables(options: Xmla.Options): object;
    discoverDBTablesInfo(options: Xmla.Options): object;
    discoverMDActions(options: Xmla.Options): object;
    discoverMDCubes(options: Xmla.Options): object;
    discoverMDDimensions(options: Xmla.Options): object;
    discoverMDFunctions(options: Xmla.Options): object;
    discoverMDHierarchies(options: Xmla.Options): object;
    discoverMDLevels(options: Xmla.Options): object;
    discoverMDMeasures(options: Xmla.Options): object;
    discoverMDMembers(options: Xmla.Options): object;
    discoverMDProperties(options: Xmla.Options): object;
    discoverMDSets(options: Xmla.Options): object;        
}

declare namespace Xmla {
    export interface Rowset {
        numRows: number;
        fieldOrder: string[];
        fields: object;
        getType(): any;
        getFields(): any[];
        getFieldNames(): string[];
        hasMoreRows(): boolean;
        nextRow(): number;
        next(): number;
        eachRow(rowCallback, scope, args);
        currRow(): number;
        rowCount(): number;
        reset();
        fieldDef(name: string): object;
        fieldIndex(name: string): number;
        fieldVal(name: string): any;
        fieldCount(): number;
        close();        
        fetchAllAsObject(array?: object[]): object[];
        fetchAllAsArray(array?: object[]): object[];
        fetchAsArray(array?: object[]): object[];
        fetchAsObject(array?: object[]): object[];
    }

    export interface Dataset {
        axisCount(): number;
        hasColumnAxis(): boolean;
        getColumnAxis(): Xmla.Dataset.Axis;
        hasRowAxis(): boolean
        getRowAxis(): Xmla.Dataset.Axis;
        hasSlicerAxis(): boolean;
        getSlicerAxis(): Xmla.Dataset.Axis;
        getCellset(): Xmla.Dataset.CellSet;
        fetchAsObject(): string;
    }

    export interface Options {
        url: string;
        username: string;
        password: string;        
        withCredentials: boolean;
        methodheader: string;
        sessionId: string;
        protocolCapabilities: object;
        properties: object; 
        tag: any;       
    }

    export interface DiscoverOptions extends Options {  
        requestType: string;      
        restrictions: object;        
    }

    export interface ExecuteOptions extends Options {
        statement: string;
    }

    export interface AdvancedOptions extends Options {
        async: boolean;
        requestTimeout: number;
        requestType: string;
        method: string;
        statement: string;
        restrictions: object;        
    }

    export interface DiscoverData extends AdvancedOptions {
        rowset: Xmla.Rowset;
    }

    export interface ExecuteData extends AdvancedOptions {
        resultset: Xmla.Rowset;
        dataset: Xmla.Dataset;
    }

    export interface Listener {
        events: string | string[];
        handler: (eventName: string, eventData: AdvancedOptions) => void;
        scope: object;
    }
    
}


declare namespace Xmla.Dataset {
    export interface Axis {
        numTuples: number;
        numHierarchies: number;
        hierarchy(index?: number | string): Hierarchy;
        getTuple(): any;
        nextTuple(): void;
        nextHierarchy(): void;
        hasMoreTuples(): boolean;
        hasMoreHierarchies(): boolean;
        tupleIndex(): number;
        tupleCount(): number;               
    }

    export interface Hierarchy {
        index: number;
        name: string;
        properties: object;
    }

    export interface CellSet {
        cellCount(): number;
        hasMoreCells(): boolean;
        nextCell(): void;
        readCell(): any;
        cellOrdinal(): number;
    }
}
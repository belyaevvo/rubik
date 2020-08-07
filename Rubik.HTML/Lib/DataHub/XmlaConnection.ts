module Rubik.DataHub {

    export class XmlaConnection implements IPivotConnection {

        xmla: Xmla = new Xmla({ async: true });
        

        Url: string;

        SessionId: string;

        Database: string;
        

        constructor() {
            this.xmla.addListener({
                events: Xmla.EVENT_ALL,
                handler: function (eventName, eventData) {
                    var requestType = eventData.requestType;
                    if (eventData.tag) {
                        var handler = eventData.tag as XmlaEventHandler;
                        if (handler) {
                            switch (eventName) {
                                case Xmla.EVENT_DISCOVER_SUCCESS:
                                    if (handler.onsuccess) {
                                        handler.onsuccess({rowsetTable:(<Xmla.DiscoverData>eventData).rowset.fetchAllAsObject()});
                                    }
                                    break;
                                case Xmla.EVENT_DISCOVER_ERROR:
                                    if (handler.onerror) {
                                        handler.onerror("");
                                    }
                                    break;
                                case Xmla.EVENT_EXECUTE_SUCCESS:
                                    if (handler.onsuccess) {
                                        //handler.onsuccess(XmlaConnection.fetchCellSet((<Xmla.ExecuteData>eventData).dataset));
                                        
                                        //var cst = XmlaConnection.fetchCellSet((<Xmla.ExecuteData>eventData).dataset);
                                        var data = (<Xmla.ExecuteData>eventData).dataset;
                                        var str = data.fetchAsObject();                                            
                                        var cst = XmlaConnection.fetchCellSet((<Xmla.ExecuteData>eventData).dataset);
                                        
                                        handler.onsuccess(cst);
                                    }
                                    break;
                                case Xmla.EVENT_EXECUTE_ERROR:
                                    if (handler.onerror) {
                                        handler.onerror("");
                                    }
                                    break;
                            }
                        }
                    }                  
                }
            } as Xmla.Listener);
        }

        GetDataSet(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void): void {
            if (this.Url != null) {
                var handler = { onsuccess: onsuccess, onerror: onerror } as XmlaEventHandler;
                var properties = {}
                properties[Xmla.PROP_CATALOG] = this.Database;
                this.xmla.executeMultiDimensional({ url: this.Url, withCredentials: true, statement: command, properties: properties, tag: handler } as Xmla.ExecuteOptions);               
            }
        }

        GetRowSet(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void): void {
            if (this.Url != null) {
                var handler = { onsuccess: onsuccess, onerror: onerror } as XmlaEventHandler;
                var properties = {}
                properties[Xmla.PROP_CATALOG] = this.Database;
                this.xmla.executeTabular({ url: this.Url, withCredentials: true, statement: command, properties: properties, tag: handler } as Xmla.ExecuteOptions);
            }
        }

        GetMetaData(schema: string, restrictions: object, onsuccess: (data: any) => void, onerror: (error: any) => void): void {
            if (this.Url != null) {
                if (!restrictions) restrictions = {};
                var properties = {}
                properties[Xmla.PROP_CATALOG] = this.Database;
                var handler = { onsuccess: onsuccess, onerror: onerror } as XmlaEventHandler;
                this.xmla.discover({ url: this.Url, withCredentials: true, requestType: schema, restrictions: restrictions, properties: properties, tag: handler } as Xmla.DiscoverOptions);                               
            }
        }
       
        Execute(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void): void {
            if (this.Url != null) {
                var handler = { onsuccess: onsuccess, onerror: onerror } as XmlaEventHandler;
                var properties = {}
                properties[Xmla.PROP_CATALOG] = this.Database;
                this.xmla.execute({ url: this.Url, withCredentials: true, statement: command, properties: properties, tag: handler } as Xmla.ExecuteOptions);
            }
        }

        private static fetchCellSet(dataset: Xmla.Dataset): ICellSet {
            var cst: ICellSet;
            cst = { cells: [] } as ICellSet;
                        
            cst.columns = this.fetchAxis(dataset.getColumnAxis());
            cst.rows = this.fetchAxis(dataset.getRowAxis());
            cst.filters = this.fetchAxis(dataset.getSlicerAxis());
            cst.cells = this.fetchCells(dataset.getCellset());

            return cst;
        }

        private static fetchAxis(axis: Xmla.Dataset.Axis): IResultAxis {
            var ax: IResultAxis;
            ax = { hierarchies: [], positions: [] } as IResultAxis;
            ax.hierarchies = this.fetchAxisHierarchies(axis);
            ax.positions = this.fetchAxisPositions(axis);
            return ax;
        }

        private static fetchAxisHierarchies(axis: Xmla.Dataset.Axis): IResultHierarchy[] {
            var hierarchies = [] as IResultHierarchy[];

            while (axis.hasMoreHierarchies()) {
                var hr = axis.hierarchy();
                var hier = { uniqueName: hr.name, index: hr.index } as IResultHierarchy;
                hier.properties = this.fetchProperties<IHierarchyProperty>(hr, (key, value) => { return { uniqueName: this.decodeXMLValue(key) } as IHierarchyProperty });                
                hierarchies.push(hier);
                axis.nextHierarchy();
            }
            return hierarchies;
        }

        private static fetchAxisPositions(axis: Xmla.Dataset.Axis): IPosition[] {
            var positions = [] as IPosition[];
        
            while (axis.hasMoreTuples()) {
                var pos = { members:[] } as IPosition;
                pos.ordinal = axis.tupleIndex();
                var tuple = axis.getTuple();
                for (var i = 0; i < axis.numHierarchies; i++) {
                    var mbr = {} as IResultMember;
                    var mem = tuple.members[i];
                    mbr.caption = mem.Caption;
                    mbr.levelName = mem.LName;
                    mbr.levelDepth = mem.LNum;                    
                    mbr.uniqueName = mem.UName;
                    mbr.childCount = mem.DisplayInfo & 0xFF;
                    mbr.drilledDown = (mem.DisplayInfo & (1 << 16)) !=0;
                    mbr.parentSameAsPrevious = (mem.DisplayInfo & (1 << 17)) != 0;
                    mbr.properties = this.fetchProperties<IMemberProperty>(mem, (key, value) => { return { uniqueName: this.decodeXMLValue(key), value: value } as IMemberProperty });                
                    /*Object.getOwnPropertyNames(mem).forEach((value, index, array) => {
                        switch (value) {
                            case "Caption": break;
                            case "LName": break;
                            case "LNum": break;
                            case "UName": break;
                            case "DisplayInfo": break;
                            case "index": break;
                            case "hierarchy": break;
                            default:
                                var prop = { uniqueName: this.decodeXMLValue(value), value: mem[value] } as IMemberProperty;
                                mbr.properties.push(prop);
                                break;
                        }
                    });*/
                    pos.members.push(mbr);                    
                }
                positions.push(pos);
                axis.nextTuple();
            }
            return positions;
        }

        private static decodeXMLValue(value: string): string {
            return value.replace(/_x005B_/g, "[").replace(/_x005D_/g, "]").replace(/_x0020_/g, " ");
        }

        private static fetchProperties<T>(obj: object, fetch: (key: string, value: object) => T): T[] {
            var properties: T[] = []; 
            Object.getOwnPropertyNames(obj).forEach((value, index, array) => {
                switch (value) {
                    case "Caption": break;
                    case "LName": break;
                    case "LNum": break;
                    case "UName": break;
                    case "DisplayInfo": break;
                    case "name": break;
                    case "index": break;
                    case "hierarchy": break;
                    default:
                        properties.push(fetch(value, obj[value]));                        
                        break;
                }
            });
            return properties;
        }

        private static fetchCells(cs: Xmla.Dataset.CellSet): ICell[] {
            var cells = [] as ICell[];
            while (cs.hasMoreCells()) {
                var cell = {} as ICell;
                var cl = cs.readCell();
                cell.formattedValue = cl.FmtValue;
                cell.value = cl.Value;
                cells.push(cell);
                cs.nextCell();
            }
            return cells;
        }
    }

    interface XmlaEventHandler {
        onsuccess: (data:any) => void;
        onerror: (error:any) => void;
    }
}
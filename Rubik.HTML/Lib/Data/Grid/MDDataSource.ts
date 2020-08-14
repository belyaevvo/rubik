/// <reference path="IGridDataSource.d.ts" />

module Rubik.Data {

    export class MDDataSource implements IGridDataSource {        

        data: any = null;
        colIndexer: Indexer;
        rowIndexer: Indexer;

        set Data(data: any) {
            this.data = data;
            if (data.columns) {
                this.colIndexer = new Indexer(data.columns.hierarchies);
            }
            else {
                this.colIndexer = new Indexer([]);
            }
            if (data.rows) {
                this.rowIndexer = new Indexer(data.rows.hierarchies);
            }
            else {
                this.rowIndexer = new Indexer([]);
            }
            this.DataChanged.Invoke(new Events.EventArgs(this));
        }

        get Data(): any {
            return this.data;
        }

        DataChanged: Events.Event<Events.EventArgs> = new Events.Event<Events.EventArgs>();

        protected command: string = null;
        protected _isPopulated: boolean = false;

        getColsCount(): number {
            try {
                return this.Data.columns.positions.length;
            }
            catch{
                return 0;
            }
        }

        getRowsCount(): number {
            try {
                return this.Data.rows.positions.length;
            }
            catch{
                return 0;
            }
        }

        getFixedColsCount(): number {
            try {
                return this.rowIndexer.getCount();
                //return this.Data.rows.positions[0].members.length;
            }
            catch{
                return 0;
            }
        }

        getFixedRowsCount(): number {
            try {
                return this.colIndexer.getCount();
                //return this.Data.columns.positions[0].members.length;
            }
            catch{
                return 0;
            }
        }


        getColMember(col: number, row: number): IGridDataMember {
            try {
                return this.colIndexer.getDataMember(this.Data.columns.positions[col].members,row);
                //return new MDDataMember().initialize(this.Data.columns.positions[col].members[row]);
            }
            catch{
                return null;
            }
        }

        getRowMember(col: number, row: number): IGridDataMember {
            try {
                return this.rowIndexer.getDataMember(this.Data.rows.positions[row].members, col);
                //return new MDDataMember().initialize(this.Data.rows.positions[row].members[col]);
            }
            catch{
                return null;
            }
        }


        getColKey(col: number, row: number): any {
            var key: string = "";
            for (var r = 0; r <= row; r++) {
                var mbr = this.getColMember(col, r);
                if (mbr) {
                    if (key != "") key += "_";
                    key += mbr.Key;
                }
            }
            return key == "" ? null : key;
        }

        getRowKey(col: number, row: number): any {
            var key: string = "";
            for (var c = 0; c <= col; c++) {
                var mbr = this.getRowMember(c, row);
                if (mbr) {
                    if (key != "") key += "_";
                    key += mbr.Key;
                }                
            }
            return key == "" ? null : key;
        }

        getCellValue(col: number, row: number): any {
            if (this.Data != null) {
                var index: number = col * this.getRowsCount() + row;
                return this.Data.cells[index].value;
            }
            return null;
            //return col.toString() + "," + row.toString();
        }

        getCellFormattedValue(col: number, row: number): string {
            if (this.Data != null) {
                var index: number = row * this.getColsCount() + col;
                return this.Data.cells[index].formattedValue;
            }
            return null;
            //return col.toString() + "," + row.toString();
        }

        expand(col: number, row: number): void {
        }

        collapse(col: number, row: number): void {
        }

        isPopulated(): boolean {
            return this._isPopulated;
        }
        
       
    }

    export class MDDataMember implements IGridDataMember {
        Key: string;
        Caption: string;
        Icon: string;        
        HasChildren: boolean = false;
        Level: number = 0;
        Expanded: boolean = false;
        Populated: boolean = false;

        initialize(data: Rubik.DataHub.IResultMember | Rubik.DataHub.IMemberProperty | Rubik.DataHub.IHierarchyProperty): MDDataMember {
            var member: Rubik.DataHub.IResultMember = data as Rubik.DataHub.IResultMember;
            var property: Rubik.DataHub.IMemberProperty = data as Rubik.DataHub.IMemberProperty;
            var hprop: Rubik.DataHub.IHierarchyProperty = data as Rubik.DataHub.IHierarchyProperty;

            if (data == null) {
                this.Key = "";
                this.Caption = "";
                this.Expanded = false;
                this.HasChildren = false;
                this.Level = 0;
                this.Populated = true;
            }
            else if ('value' in data) {
                this.Key = property.uniqueName;
                this.Caption = (property.value || "").toString();
                this.Expanded = false;
                this.HasChildren = false;
                this.Level = 0;
                this.Populated = true;
            }
            else if ('caption' in data) {
                this.Key = member.uniqueName;
                this.Caption = member.caption;
                this.Expanded = member.drilledDown;
                this.HasChildren = member.childCount > 0;
                this.Level = member.levelDepth;
                this.Populated = this.HasChildren ? member.drilledDown : true;
            }
            else {
                this.Key = hprop.uniqueName;
                this.Caption = "";
                this.Expanded = false;
                this.HasChildren = false;
                this.Level = 0;
                this.Populated = true;
            }
            return this;
        }         
    }

    class Indexer {
        hierarchyIdx: IHierarchyIdx[];
        hierarchies: Rubik.DataHub.IResultHierarchy[];

        constructor(hierarchies: Rubik.DataHub.IResultHierarchy[]) {
            this.hierarchyIdx = [];
            this.hierarchies = hierarchies;
            var index = 0;
            for (var i = 0; i < hierarchies.length; i++) {
                var hr = hierarchies[i];
                this.hierarchyIdx.push({ hierarchyIndex: i, propertyIndex: -1 } as IHierarchyIdx)
                for (var j = 0; j < hr.properties.length; j++) {
                    this.hierarchyIdx.push({ hierarchyIndex: i, propertyIndex: j } as IHierarchyIdx)
                }                
            }
        }

        getDataMember(members: Rubik.DataHub.IResultMember[], index: number): MDDataMember {
            if (index >= this.getCount() || index < 0) {
                return null;
            }
            var idx = this.hierarchyIdx[index];
            var mbr: MDDataMember = null;
            try {
                if (idx.propertyIndex >= 0) {
                    mbr = new MDDataMember().initialize(members[idx.hierarchyIndex].properties[idx.propertyIndex] || this.hierarchies[idx.hierarchyIndex].properties[idx.propertyIndex]);
                }
                else {
                    mbr = new MDDataMember().initialize(members[idx.hierarchyIndex]);
                }
            }
            catch (exception) {
            }
            return mbr;
        }

        getCount(): number {
            return this.hierarchyIdx.length;
        }
        
    }

    interface IHierarchyIdx {
        hierarchyIndex: number;
        propertyIndex: number;
    }

}

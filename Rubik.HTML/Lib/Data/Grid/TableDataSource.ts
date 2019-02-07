/// <reference path="IGridDataSource.d.ts" />
/// <reference path="IGridDataMember.d.ts" />
/// <reference path="GridDataTable.ts" />
/// <reference path="GridDataRow.ts" />
/// <reference path="../../Collections/List.ts" />


module Rubik.Data {

    export class TableDataSource implements IGridDataSource {    

        Data: GridDataTable = new GridDataTable();

        DataChanged: Events.Event<Events.EventArgs> = new Events.Event<Events.EventArgs>();

        constructor() {
            this.Data.TableModified.Attach(new Events.EventHandler<TableModifiedEventArgs>(this.OnTableModified, this));
        }
            
        getColsCount(): number {
            return this.Data.Columns.Count();
        }
        getRowsCount(): number {
            return this.Data.Rows.Count();
        }
        getFixedColsCount(): number {
            return 0;
        }
        getFixedRowsCount(): number {
            return 0;
        }
        //getDataRow(row: number): any[];
        getColMember(col: number, row: number): IGridDataMember {
            return null;
        }
        getRowMember(col: number, row: number): IGridDataMember {
            return null;
        }
        getColKey(col: number, row: number): any {
            return this.Data.Columns.ElementAt(col).Key;
        }
        getRowKey(col: number, row: number): any {
            return this.Data.Rows.ElementAt(row).Values[col].Key;
        }
        getCellValue(col: number, row: number): any {
            return this.Data.Rows.ElementAt(row).Values[col];
        }
        getCellFormattedValue(col: number, row: number): string {
            return null;
        }

        expand(col: number, row: number): void {
        }
        collapse(col: number, row: number): void {
        }
        isPopulated(): boolean {
            return true;
        }

        private OnTableModified(args: TableModifiedEventArgs) {
            this.DataChanged.Invoke(new Events.EventArgs(this));
        }
    }
}
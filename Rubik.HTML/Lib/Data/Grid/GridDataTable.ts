/// <reference path="IGridDataMember.d.ts" />
/// <reference path="GridDataRow.ts" />
/// <reference path="../../Collections/List.ts" />


module Rubik.Data {

    export class GridDataTable {
        Columns: Collections.List<IGridDataMember> = new Collections.List<IGridDataMember>();
        Rows: Collections.List<GridDataRow> = new Collections.List<GridDataRow>();

        TableModified: Events.Event<TableModifiedEventArgs> = new Events.Event<TableModifiedEventArgs>();

        constructor() {
            this.Columns.OnModified.Attach(new Collections.CollectionModifiedEventHandler<IGridDataMember>(this.OnColumnsModified, this));
            this.Rows.OnModified.Attach(new Collections.CollectionModifiedEventHandler<GridDataRow>(this.OnRowsModified,this));
        }

        private OnColumnsModified(args: Collections.CollectionModifiedEventArgs<IGridDataMember>) {
            this.Rows.Clear();
        }        

        private OnRowsModified(args: Collections.CollectionModifiedEventArgs<GridDataRow>) {
            this.TableModified.Invoke(new TableModifiedEventArgs(this));
        }        

        
    }

    export class TableModifiedEventArgs extends Rubik.Events.EventArgs {        
    }
}
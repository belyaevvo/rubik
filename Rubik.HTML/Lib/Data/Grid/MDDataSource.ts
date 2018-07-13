/// <reference path="IGridDataSource.d.ts" />

module Rubik.Data {

    export class MDDataSource implements IGridDataSource {
        Url: string = null;

        data: any = null;

        set Data(data: any) {
            this.data = data;
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
                return this.Data.rows.positions[0].members.length;
            }
            catch{
                return 0;
            }
        }

        getFixedRowsCount(): number {
            try {
                return this.Data.columns.positions[0].members.length;
            }
            catch{
                return 0;
            }
        }


        getColMember(col: number, row: number): IGridDataMember {
            try {

                return new MDDataMember().initialize(this.Data.columns.positions[col].members[row]);
            }
            catch{
                return null;
            }
        }

        getRowMember(col: number, row: number): IGridDataMember {
            try {
                return new MDDataMember().initialize(this.Data.rows.positions[row].members[col]);
            }
            catch{
                return null;
            }
        }


        getColKey(col: number, row: number): any {
            var key: string = "";
            for (var r = 0; r <= row; r++) {
                key += this.getColMember(col, r).Key;
            }
            return key;
        }

        getRowKey(col: number, row: number): any {
            var key: string = "";
            for (var c = 0; c <= col; c++) {
                if (key != "") key += "_";
                key += this.getRowMember(c, row).Key;
            }
            return key;
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
        
        /*
        GetData(command: string): void {
            if (this.Url != null) {
                $.ajax({
                    url: this.Url + '/execute',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { sessionId: 'aaa', query: command },
                    dataType: 'json',
                    success: function (data) {
                        this.Data = data;
                        this._isPopulated = true;
                        this.DataChanged.Invoke(new Events.EventArgs(this));
                    }.bind(this),
                    error: function (error) {
                        this._isPopulated = false;
                        alert(error.responseText); //or whatever
                    }
                });
            }
        }*/
    }

    export class MDDataMember implements IGridDataMember {
        Key: string;
        Caption: string;
        Icon: string;        
        HasChildren: boolean = false;
        Level: number = 0;
        Expanded: boolean = false;            

        initialize(member: any): MDDataMember {
            this.Key = member.uniqueName;
            this.Caption = member.caption;
            this.Expanded = member.drilledDown;
            this.HasChildren = member.childCount > 0;
            this.Level = member.levelDepth;
            return this;
        }         
    }
}

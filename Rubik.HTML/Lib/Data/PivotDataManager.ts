/// <reference path="../Events/Event.ts" />

module Rubik.Data {
    export interface IPivotDataManager {
        DataChanged: Events.Event<Events.EventArgs>;
        getColsCount(): number;  
        getRowsCount(): number;     
        getFixedColsCount(): number;
        getFixedRowsCount(): number; 
        //getDataRow(row: number): any[];
        getColMember(col: number, row: number): any;
        getRowMember(col: number, row: number): any;
        getCellValue(col: number, row: number): any;
        getCellFormattedValue(col: number, row: number): string;
        isPopulated(): boolean;
    }

    export class PivotDataManager implements IPivotDataManager {
        Url: string = null;

        Data: any = null;

        DataChanged: Events.Event<Events.EventArgs> = new Events.Event<Events.EventArgs>();

        private command: string = null;        
        private _isPopulated: boolean = false;        

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


        getColMember(col: number, row: number): any {
            try {
                return this.Data.columns.positions[col].members[row];
            }
            catch{
                return null;
            }
        }

        getRowMember(col: number, row: number): any {
            try {
                return this.Data.rows.positions[row].members[col];
            }
            catch{
                return null;
            }
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
                var index: number = col * this.getRowsCount() + row;
                return this.Data.cells[index].formattedValue;
            }
            return null;
            //return col.toString() + "," + row.toString();
        }

        isPopulated(): boolean {
            return this._isPopulated;
        }

        GetData(command: string): void {
            if (this.Url != null) {
                $.ajax({
                    url: this.Url + '/execute',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { sessionId:'aaa', query:command },
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
        }
    }
}

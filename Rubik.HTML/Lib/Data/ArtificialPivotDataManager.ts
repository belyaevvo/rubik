/// <reference path="../Events/Event.ts" />
/// <reference path="PivotDataManager.ts" />

module Rubik.Data {
    

    export class ArtificialPivotDataManager extends PivotDataManager {
        Url: string = null;
        
        

        getColsCount(): number {            
            return this.isPopulated()?2000:0;
        }

        getRowsCount(): number {
            return this.isPopulated() ? 100000 : 0;
        }

        getFixedColsCount(): number {
            return this.isPopulated() ? 1 : 0;
        }

        getFixedRowsCount(): number {
            return this.isPopulated() ? 1 : 0;
        }


        getColMember(col: number, row: number): any {
            return col.toString();
        }

        getRowMember(col: number, row: number): any {
            return row.toString();
        }

        getCellValue(col: number, row: number): any {
            return col.toString() + "," + row.toString();
        }

        getCellFormattedValue(col: number, row: number): string {
            return col.toString() + "," + row.toString();
        }
        

        GetData(command: string): void {
            setTimeout(function () {
                this._isPopulated = true;
                this.DataChanged.Invoke(new Events.EventArgs(this));
            }.bind(this), 1000);            
        }
    }
}

module Rubik.UI {
    export class DataManager {
        GetColsCount(): number {
            return 20;
        }
        GetRowsCount(): number {
            return 100000;
        }
        GetCellValue(col: number, row: number): string {
            return col.toString() + "," + row.toString();
        }
    }
}

module Rubik.UI {
    export class DataManager {
        GetColsCount(): number {
            return 1;
        }
        GetRowsCount(): number {
            return 256;
        }
        GetCellValue(col: number, row: number): string {
            return col.toString() + "," + row.toString();
        }
    }
}

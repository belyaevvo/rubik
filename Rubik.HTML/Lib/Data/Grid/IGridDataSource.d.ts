/// <reference path="../../Events/Event.ts" />

declare module Rubik.Data {
    export interface IGridDataSource {
        DataChanged: Events.Event<Events.EventArgs>;
        getColsCount(): number;
        getRowsCount(): number;
        getFixedColsCount(): number;
        getFixedRowsCount(): number;
        //getDataRow(row: number): any[];
        getColMember(col: number, row: number): any;
        getRowMember(col: number, row: number): any;
        getColKey(col: number, row: number): any;
        getRowKey(col: number, row: number): any;
        getCellValue(col: number, row: number): any;
        getCellFormattedValue(col: number, row: number): string;
        expand(col: number, row: number): void;
        collapse(col: number, row: number): void;
        isPopulated(): boolean;
    }
}
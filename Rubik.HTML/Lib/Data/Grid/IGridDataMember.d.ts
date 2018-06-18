declare module Rubik.Data {

    export interface  IGridDataMember {
        Key: string;
        Caption: string;        
        Icon: string;
        HasChildren: boolean;
        Level: number;
        Expanded: boolean;               
    }
}
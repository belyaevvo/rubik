module Rubik.DataHub {

    export interface IPivotConnection {
        Url: string;

        SessionId: string;

        Database: string;
        
        GetDataSet(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void): void;

        GetRowSet(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void): void;

        GetMetaData(schema: string, restrictions: object, onsuccess: (data: any) => void, onerror: (error: any) => void): void;

        Execute(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void): void;

                
    }
}
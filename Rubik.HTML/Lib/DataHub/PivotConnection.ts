module Rubik.DataHub {

    export interface IPivotConnection {
        Url: string;

        SessionId: string;

        Database: string;
        
        GetData(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void): void;

        GetMetaData(schema: string, restrictions: object, onsuccess: (data: any) => void, onerror: (error: any) => void): void;

                
    }
}
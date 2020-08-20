module Rubik.DataHub {

    export interface IPivotConnection {
        Url: string;

        SessionId: string;

        Database: string;   

        BeginSession(onsuccess: (session: IPivotSession) => void, onerror: (error: any) => void): void;

        EndSession(session: IPivotSession, onsuccess: () => void, onerror: (error: any) => void): void;

        GetDataSet(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void, session?: IPivotSession): void;

        GetRowSet(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void, session?: IPivotSession): void;

        GetMetaData(schema: string, restrictions: object, onsuccess: (data: any) => void, onerror: (error: any) => void, session?: IPivotSession): void;

        Execute(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void, session?: IPivotSession): void;

                
    }

    export interface IPivotSession {
        Cancel(onsuccess: () => void, onerror: (error: any) => void): void;
        Cancelled(): boolean;
    }
}
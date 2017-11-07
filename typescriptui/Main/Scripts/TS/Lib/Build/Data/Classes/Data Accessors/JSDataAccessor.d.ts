/// <reference path="../DataAccessor.d.ts" />
/// <reference path="../../../../../Definitions/jquery.d.ts" />
declare module TSUI.Data {
    /** A basic data accessor which can use a JS global variable as its source for pull/push. Can also use a property method e.g. function(value: Val_Type): Val_Type
    Data accessors push or pull data to/from a data source such as a page on a web server. */
    class JSDataAccessor<I> extends Data.DataAccessor<I> {
        /** The context object to use when accessing the object. */
        public Context: any;
        /** Creates a new DataAccessor. */
        constructor(aContext: any);
        /** Creates a new DataAccessor with specified BaseAccessInfo.
        Set the URL value of the access info to the name of the global variable.
        Set Params to sub-propeties of the global variable.
        */
        constructor(aContext: any, baseAccessInfo: Data.IAccessInfo);
        /** HTTP request implementation of PushData.
        @param data The data to push to the source variable.
        @param accessInfo The AccessInfo to use for the data source. See constructor for more info on how to set this.
        @returns Will return an initially empty result with status Error and no data or Complete and the data.
        */
        public PushData(data: I, accessInfo?: Data.IAccessInfo): Data.IDataAccessResult<I>;
        /** HTTP request implementation of PullData.
        @param accessInfo The AccessInfo to use for the data source.
        @returns Will return an initially empty result with status Error and no data or Complete and the data.
        */
        public PullData(accessInfo?: Data.IAccessInfo): Data.IDataAccessResult<I>;
        public getVal(accessInfo: Data.IAccessInfo): I;
        public setVal(accessInfo: Data.IAccessInfo, data: I): I;
    }
}

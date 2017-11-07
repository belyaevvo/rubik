/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: 1 Sep 23:16 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 1/Sep/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../DataAccessor.ts" />
/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts" />

module Rubik.Data
{
    /** A basic data accessor which can use a JS global variable as its source for pull/push. Can also use a property method e.g. function(value: Val_Type): Val_Type    
        Data accessors push or pull data to/from a data source such as a page on a web server. */
    export class JSDataAccessor<I> extends DataAccessor<I>
    {
        /** The context object to use when accessing the object. */
        Context: any = window;

        /** Creates a new DataAccessor. */
        constructor(aContext: any);
        /** Creates a new DataAccessor with specified BaseAccessInfo.
            Set the URL value of the access info to the name of the global variable.
            Set Params to sub-propeties of the global variable.
        */
        constructor(aContext: any, baseAccessInfo: IAccessInfo);

        constructor(aContext: any, baseAccessInfo: IAccessInfo = null)
        {
            super(baseAccessInfo);

            this.Context = aContext;
        }

        /** HTTP request implementation of PushData.
            @param data The data to push to the source variable. 
            @param accessInfo The AccessInfo to use for the data source. See constructor for more info on how to set this. 
            @returns Will return an initially empty result with status Error and no data or Complete and the data.
        */
        PushData(data: I, accessInfo?: IAccessInfo): IDataAccessResult<I>
        { 
            var result = new DataAccessResult<I>(DataAccessStatuses.Pending, null);

            if (accessInfo === undefined)
            {
                accessInfo = this.BaseAccessInfo;
            }

            var resData = this.setVal(accessInfo, data);
            if (resData !== null)
            {
                result.Status = DataAccessStatuses.Complete;
            }
            else
            {
                result.Status = DataAccessStatuses.Error;
            }
            result.Result = resData;

            this.OnDataPushed.Invoke(new DataPushedEventArgs(this, result));

            return result;
        }

        /** HTTP request implementation of PullData.
            @param accessInfo The AccessInfo to use for the data source.
            @returns Will return an initially empty result with status Error and no data or Complete and the data.
        */
        PullData(accessInfo?: IAccessInfo): IDataAccessResult<I>
        {
            var result = new DataAccessResult<I>(DataAccessStatuses.Error, null);

            if (accessInfo === undefined)
            {
                accessInfo = this.BaseAccessInfo;
            }

            var resData = this.getVal(accessInfo);
            if (resData !== null)
            {
                result.Status = DataAccessStatuses.Complete;
            }
            else
            {
                result.Status = DataAccessStatuses.Error;
            }
            result.Result = resData;
            
            this.OnDataPulled.Invoke(new DataPulledEventArgs(this, result));

            return result;
        }

        getVal(accessInfo: IAccessInfo): I
        {
            var result: I = null;

            if (this.Context[accessInfo.URL] !== undefined)
            {
                var obj = this.Context[accessInfo.URL];

                var len = accessInfo.Params.Count();
                for (var i = 0; i < len; i++)
                {
                    obj = obj[accessInfo.Params.ElementAt(i)];
                }

                if (isFunction(obj))
                {
                    result = obj.call(this.Context);
                }
                else
                {
                    result = obj;
                }
            }

            return result;
        }
        setVal(accessInfo: IAccessInfo, data: I): I
        {
            var result: I = null;

            if (this.Context[accessInfo.URL] !== undefined)
            {
                var obj = this.Context[accessInfo.URL];
                var lastParent = null;

                var len = accessInfo.Params.Count();
                for (var i = 0; i < len; i++)
                {
                    lastParent = obj;
                    obj = obj[accessInfo.Params.ElementAt(i)];
                }

                if (isFunction(obj))
                {
                    result = obj.call(this.Context, data);
                }
                else
                {
                    if (accessInfo.Params.Count() === 0)
                    {
                        result = this.Context[accessInfo.URL] = obj = data;
                    }
                    else
                    {
                        lastParent[accessInfo.Params.Count() - 1] = data;
                        result = obj = data;
                    }
                }
            }

            return result;
        }
    }
}
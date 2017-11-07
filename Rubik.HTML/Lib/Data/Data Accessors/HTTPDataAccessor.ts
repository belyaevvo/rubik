/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: 25 Aug 19:32 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 25/Aug/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../DataAccessor.ts" />
/// <reference path="../DataPushedEvent.ts" />
/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts" />

module Rubik.Data
{
    /** A basic data accessor which can send HTTP GET/POST requests for pul/push. Data accessors push or pull data to/from a data source such as a page on a web server. */
    export class HTTPDataAccessor extends DataAccessor<string>
    {
        /** Creates a new DataAccessor. */
        constructor();
        /** Creates a new DataAccessor with specified BaseAccessInfo. */
        constructor(baseAccessInfo: IAccessInfo);

        constructor(baseAccessInfo: IAccessInfo = null)
        {
            super(baseAccessInfo);
        }

        /** HTTP request implementation of PushData.
            @param data The data to push to the server. 
            @param accessInfo The AccessInfo to use for the data source.   
            @returns The result of the request. Will return an initially empty result with status Pending. 
        */
        PushData(data: string, accessInfo?: IAccessInfo): IDataAccessResult<string>
        { 
            var result = new DataAccessResult<string>(DataAccessStatuses.Pending, null);

            if (accessInfo === undefined)
            {
                accessInfo = this.BaseAccessInfo;
            }

            var url = this.BuildFullURL(accessInfo);

            var request = $.post(url, data, (resultData: string, status: string, xhr: JQueryXHR): void =>
            {
                //Success
                
                result.Status = DataAccessStatuses.Complete;
                result.Result = resultData;

                this.OnDataPushed.Invoke(new DataPushedEventArgs<string>(this, result));
            }, "text");

            request.fail((xhr: JQueryXHR, status: string, error: string): void =>
            {
                //Fail

                result.Status = DataAccessStatuses.Error | DataAccessStatuses.Failed;
                result.Result = error;

                this.OnDataPushed.Invoke(new DataPushedEventArgs<string>(this, result));
            });

            return result;
        }

        /** HTTP request implementation of PullData.
            @param accessInfo The AccessInfo to use for the data source.
            @returns The status of the request. Will return an initially empty result with status Pending. 
        */
        PullData(accessInfo?: IAccessInfo): IDataAccessResult<string>
        {
            var result = new DataAccessResult<string>(DataAccessStatuses.Pending, null);

            if (accessInfo === undefined)
            {
                accessInfo = this.BaseAccessInfo;
            }

            var url = this.BuildFullURL(accessInfo);

            var request = $.get(url, "", (resultData: string, status: string, xhr: JQueryXHR): void =>
            {
                //Success

                result.Status = DataAccessStatuses.Complete;
                result.Result = resultData;

                this.OnDataPulled.Invoke(new DataPushedEventArgs<string>(this, result));
            }, "text");

            request.fail((xhr: JQueryXHR, status: string, error: string): void =>
            {
                //Fail

                result.Status = DataAccessStatuses.Error | DataAccessStatuses.Failed;
                result.Result = error;

                this.OnDataPulled.Invoke(new DataPushedEventArgs<string>(this, result));
            });

            return result;
        }

        /** Builds the full HTTP requestable URL from the access info. 
            @param accessInfo The access info to build the URL for.
            @returns The URL
        */
        public BuildFullURL(accessInfo: IAccessInfo): string
        {
            var result = "";

            result = accessInfo.URL;
            result += "?";
            var count = accessInfo.Params.Count();
            for (var i = 0; i < count; i++)
            {
                result += accessInfo.Params.ElementAt(i);
                if (i < count - 1)
                {
                    result += "&";
                }
            }

            return result;
        }
    }
}
/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.
 - 6/Sep/13 : Added inline documentation.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="IPageWindow.d.ts" />

declare module TSUI.UI
{
    /** Defines a basic static page window - loads static HTML from a url. */
    export interface IStaticPageWindow extends IPageWindow
    {
        /** Loads content from the specified url using a GET request with the specified data.
            @param url The url to load data from.
            @param data The data to send with the request.
            @retruns Void.
        */
        LoadContent(url: string, data?: any): void;
    }
}
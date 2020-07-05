/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Scripts/typings/jquery/jquery.d.ts" />
              
declare namespace Rubik.Apps
{
    /** Defines an Application */
    export interface IApp
    {
        /** Starts the app running */
        Run(): void;
        /** Starts the app running with the specified arguments.
            @param args The array of arguments to pass to the app.
        */
        Run(args: string[]): void;
        /** Starts the app running with the specified arguments and the element to use as the container for the app.
            @param args The array of arguments to pass to the app.
            @param container The JQuery element the app should use to contain all Windows etc.
        */
        Run(args: string[], container: JQuery): void;
    }
}
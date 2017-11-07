/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../DemoApp.ts" />
/// <reference path="../MyApp.ts" />
/// <reference path="../Test App.ts" />
/// <reference path="../../Definitions/jquery.d.ts" />

var TheApp = null;
$(function ()
{
    if (confirm("Start Demo app?"))
    { 
        TheApp = new TSUI.Apps.Demo.DemoApp();
    }
    //else if (confirm("Start Test app?"))
    //{
    //    TheApp = new TSUI.Apps.Testing.TestApp();
    //}
    else if (confirm("Start My App?"))
    {
        TheApp = new TSUI.Apps.My.MyApp();
    }
    TheApp.Run();
}); 
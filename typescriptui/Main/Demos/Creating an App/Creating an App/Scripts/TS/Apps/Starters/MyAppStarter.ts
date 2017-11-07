/// <reference path="../MyApp.ts" />
/// <reference path="../../Definitions/jquery.d.ts" />

var TheApp = null;
$(function ()
{
    TheApp = new TSUI.Apps.My.MyApp();
    TheApp.Run();
});
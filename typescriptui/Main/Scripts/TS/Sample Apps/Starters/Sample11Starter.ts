/// <reference path="../Sample11.ts" />
/// <reference path="../../Definitions/jquery.d.ts" />

var TheApp = null;
$(function ()
{
    TheApp = new TSUI.Apps.Samples.Sample11App();
    TheApp.Run();
});
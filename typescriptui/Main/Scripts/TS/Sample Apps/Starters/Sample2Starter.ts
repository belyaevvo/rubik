/// <reference path="../Sample2.ts" />
/// <reference path="../../Definitions/jquery.d.ts" />

var TheApp = null;
$(function ()
{
    TheApp = new TSUI.Apps.Samples.Sample2App();
    TheApp.Run();
});
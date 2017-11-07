/// <reference path="../Sample4.ts" />
/// <reference path="../../Definitions/jquery.d.ts" />

var TheApp = null;
$(function ()
{
    TheApp = new TSUI.Apps.Samples.Sample4App();
    TheApp.Run();
});
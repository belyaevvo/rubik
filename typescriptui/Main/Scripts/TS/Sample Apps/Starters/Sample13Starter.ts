/// <reference path="../Sample13.ts" />
/// <reference path="../../Definitions/jquery.d.ts" />

var TheApp = null;
$(function ()
{
    TheApp = new TSUI.Apps.Samples.Sample13App();
    TheApp.Run();
});
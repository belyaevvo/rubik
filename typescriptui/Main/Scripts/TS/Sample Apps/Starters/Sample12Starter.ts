/// <reference path="../Sample12.ts" />
/// <reference path="../../Definitions/jquery.d.ts" />

var TheApp = null;
$(function ()
{
    TheApp = new TSUI.Apps.Samples.Sample12App();
    TheApp.Run();
});
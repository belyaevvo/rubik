/// <reference path="../SampleSelectorApp.ts" />
/// <reference path="../../Definitions/jquery.d.ts" />
var TheApp = null;
$(function () {
    TheApp = new TSUI.Apps.Samples.SampleSelectorApp();
    TheApp.Run();
});

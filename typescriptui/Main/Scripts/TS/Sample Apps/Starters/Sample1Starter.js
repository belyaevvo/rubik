/// <reference path="../Sample1.ts" />
/// <reference path="../../Definitions/jquery.d.ts" />
var TheApp = null;
$(function () {
    TheApp = new TSUI.Apps.Samples.Sample1App();
    TheApp.Run();
});

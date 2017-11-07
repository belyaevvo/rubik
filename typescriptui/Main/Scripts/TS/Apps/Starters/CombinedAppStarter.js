var TheApp = null;
$(function () {
    if (confirm("Start Demo app?")) {
        TheApp = new TSUI.Apps.Demo.DemoApp();
    } else if (confirm("Start My App?")) {
        TheApp = new TSUI.Apps.My.MyApp();
    }
    TheApp.Run();
});

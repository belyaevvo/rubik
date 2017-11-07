/// <reference path="Lib/IApp.d.ts" />
/// <reference path="Lib/UI/Panel.ts"/>
/// <reference path="Lib/UI/SplitContainer.ts"/>
/// <reference path="Lib/UI/Grid/Grid.ts"/>
/// <reference path="Scripts/typings/jquery/jquery.d.ts"/>
var MyApp = (function () {
    function MyApp() {
        this.MainContainer = null;
        this.StartArgs = null;
    }
    MyApp.prototype.Run = function (args, container) {
        if (args === void 0) { args = []; }
        if (container === void 0) { container = $("body"); }
        this.StartArgs = args;
        this.MainContainer = container;
        var splitter = new Rubik.UI.SplitContainer();
        var panel1 = new Rubik.UI.Panel();
        var panel2 = new Rubik.UI.Panel();
        var grid = new Rubik.UI.Grid();
        panel2.Children.Add(grid);
        splitter.Panel1.Children.Add(panel1);
        splitter.Panel2.Children.Add(panel2);
        splitter.ConstructDOM(container);
        //this.element.innerHTML += "The time is: ";
        //this.span = document.createElement('span');
        //this.element.appendChild(this.span);
        //this.span.innerText = new Date().toUTCString();
    };
    return MyApp;
}());
var TheApp = null;
$(function () {
    TheApp = new MyApp();
    TheApp.Run([], $("#content"));
});
//# sourceMappingURL=app.js.map
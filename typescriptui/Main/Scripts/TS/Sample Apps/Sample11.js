var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    (function (Apps) {
        /// <reference path="../Lib/Build/IApp.d.ts" />
        /// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
        /// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
        /// <reference path="../Definitions/jquery.d.ts" />
        (function (Samples) {
            var Sample11App = (function () {
                function Sample11App() {
                    this.MainContainer = null;
                    this.StartArgs = null;
                }
                Sample11App.prototype.Run = function (args, container) {
                    if (typeof args === "undefined") { args = []; }
                    if (typeof container === "undefined") { container = $("body"); }
                    this.StartArgs = args;
                    this.MainContainer = container;

                    this.MainContainer.addClass("Sample11");

                    console.log("Sample 11 loaded.");

                    var newWindow = new DesktopWindow();
                    newWindow.ConstructDOM(this.MainContainer, function () {
                        newWindow.Show();
                    });
                };
                return Sample11App;
            })();
            Samples.Sample11App = Sample11App;

            var DesktopWindow = (function (_super) {
                __extends(DesktopWindow, _super);
                function DesktopWindow() {
                    _super.call(this);

                    this.Title("Sample 11");

                    this.CloseButton.Visible(false);
                    this.ResizeEnabled(false);

                    this.Width(new TSUI.UI.CSSNumber(300));
                    this.Height(new TSUI.UI.CSSNumber(350));

                    var upload = new FileUpload();
                    upload.Multiple(true);
                    this.ContentPanel.Children.Add(upload);
                }
                return DesktopWindow;
            })(TSUI.UI.Window);

            var FileUpload = (function (_super) {
                __extends(FileUpload, _super);
                function FileUpload() {
                    var _this = this;
                    _super.call(this);

                    this.AddClass("FileUpload");

                    this._UnderlyingUpload = $("<input type=\"file\">");

                    var multButton = new TSUI.UI.Button();
                    multButton.Text("Multiple");
                    multButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(function (args) {
                        _this.Multiple(!_this.Multiple());
                    }, this));
                    this.Children.Add(multButton);
                }
                FileUpload.prototype.ConstructDOM = function (parent, onComplete) {
                    var _this = this;
                    _super.prototype.ConstructDOM.call(this, parent, function () {
                        _this._rootElement.append(_this._UnderlyingUpload);

                        if (onComplete) {
                            onComplete();
                        }
                    });
                };
                FileUpload.prototype.DestroyDOM = function () {
                    this._UnderlyingUpload.remove();

                    _super.prototype.DestroyDOM.call(this);
                };

                FileUpload.prototype.Multiple = function (value) {
                    if (typeof value === "undefined") { value = null; }
                    if (value !== null) {
                        if (value) {
                            this._UnderlyingUpload.attr("multiple", "multiple");
                        } else {
                            this._UnderlyingUpload.removeAttr("multiple");
                        }
                    }
                    return this._UnderlyingUpload.attr("multiple") === "multiple";
                };
                return FileUpload;
            })(TSUI.UI.Control);
        })(Apps.Samples || (Apps.Samples = {}));
        var Samples = Apps.Samples;
    })(TSUI.Apps || (TSUI.Apps = {}));
    var Apps = TSUI.Apps;
})(TSUI || (TSUI = {}));

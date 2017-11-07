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
            var Sample5App = (function () {
                function Sample5App() {
                    this.MainContainer = null;
                    this.StartArgs = null;
                }
                Sample5App.prototype.Run = function (args, container) {
                    if (typeof args === "undefined") { args = []; }
                    if (typeof container === "undefined") { container = $("body"); }
                    var _this = this;
                    this.StartArgs = args;
                    this.MainContainer = container;

                    this.MainContainer.addClass("Sample5");

                    TSUI.Animation.AppWindowAnimator.UseCanvasRenderIfSensible = false;

                    console.log("Sample 5 loaded.");

                    this.TheCalcWindow = new CalculatorWindow();
                    this.TheCalcWindow.ConstructDOM(this.MainContainer, function () {
                        _this.TheCalcWindow.Enabled(false);

                        _this.TheCalcWindow.Top(new TSUI.UI.CSSNumber(($(_this.MainContainer).height() - _this.TheCalcWindow.ActualHeight()) / 2));
                        _this.TheCalcWindow.Left(new TSUI.UI.CSSNumber(($(_this.MainContainer).width() - _this.TheCalcWindow.ActualWidth()) / 2));

                        _this.TheCalcWindow.Show(function () {
                            _this.TheCalcWindow.Enabled(true);
                        });
                    });
                };
                return Sample5App;
            })();
            Samples.Sample5App = Sample5App;

            var CalculatorWindow = (function (_super) {
                __extends(CalculatorWindow, _super);
                function CalculatorWindow() {
                    var _this = this;
                    _super.call(this);
                    this.Value1Str = null;
                    this.Value2Str = null;
                    this.Operation = null;
                    this._Window_KeyPress_Handler = function (event) {
                        _this._Window_KeyPress(new TSUI.Events.KeyPressEventArgs(_this, event));
                    };

                    this.AddClass("CalculatorWindow");

                    this.Title("Calculator");

                    this.CloseButton.Visible(false);
                    this.ResizeEnabled(false);

                    this.CalculationBox = new TSUI.UI.TextBox();
                    this.CalculationBox.AddClass("CalculationBox");
                    this.ContentPanel.Children.Add(this.CalculationBox);

                    this.KeysStackPanel = new TSUI.UI.StackPanel();
                    this.KeysStackPanel.AddClass("Keys");
                    this.CmdsStackPanel = new TSUI.UI.StackPanel();
                    this.CmdsStackPanel.AddClass("Cmds");

                    this.KeysRow1 = new TSUI.UI.StackPanelRow();
                    this.KeysRow2 = new TSUI.UI.StackPanelRow();
                    this.KeysRow3 = new TSUI.UI.StackPanelRow();
                    this.KeysRow4 = new TSUI.UI.StackPanelRow();

                    this.CmdsRow1 = new TSUI.UI.StackPanelRow();
                    this.CmdsRow2 = new TSUI.UI.StackPanelRow();
                    this.CmdsRow3 = new TSUI.UI.StackPanelRow();

                    this.ContentPanel.Children.Add(this.KeysStackPanel);
                    this.KeysStackPanel.Rows.Add(this.KeysRow1);
                    this.KeysStackPanel.Rows.Add(this.KeysRow2);
                    this.KeysStackPanel.Rows.Add(this.KeysRow3);
                    this.KeysStackPanel.Rows.Add(this.KeysRow4);

                    this.ContentPanel.Children.Add(this.CmdsStackPanel);
                    this.CmdsStackPanel.Rows.Add(this.CmdsRow1);
                    this.CmdsStackPanel.Rows.Add(this.CmdsRow2);
                    this.CmdsStackPanel.Rows.Add(this.CmdsRow3);

                    this.Key7 = new TSUI.UI.Button();
                    this.Key7.RelativeLayoutOn();
                    this.Key7.AddClass("Key");
                    this.Key7.AddClass("Key7");
                    this.Key7.Text("7");
                    this.Key7.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._Key7_Clicked, this));
                    this.KeysRow1.Children.Add(this.Key7);

                    this.Key4 = new TSUI.UI.Button();
                    this.Key4.RelativeLayoutOn();
                    this.Key4.AddClass("Key");
                    this.Key4.AddClass("Key4");
                    this.Key4.Text("4");
                    this.Key4.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._Key4_Clicked, this));
                    this.KeysRow2.Children.Add(this.Key4);

                    this.Key1 = new TSUI.UI.Button();
                    this.Key1.RelativeLayoutOn();
                    this.Key1.AddClass("Key");
                    this.Key1.AddClass("Key1");
                    this.Key1.Text("1");
                    this.Key1.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._Key1_Clicked, this));
                    this.KeysRow3.Children.Add(this.Key1);

                    this.Key0 = new TSUI.UI.Button();
                    this.Key0.RelativeLayoutOn();
                    this.Key0.AddClass("Key");
                    this.Key0.AddClass("Key0");
                    this.Key0.Text("0");
                    this.Key0.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._Key0_Clicked, this));
                    this.KeysRow4.Children.Add(this.Key0);

                    this.Key8 = new TSUI.UI.Button();
                    this.Key8.RelativeLayoutOn();
                    this.Key8.AddClass("Key");
                    this.Key8.AddClass("Key8");
                    this.Key8.Text("8");
                    this.Key8.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._Key8_Clicked, this));
                    this.KeysRow1.Children.Add(this.Key8);

                    this.Key5 = new TSUI.UI.Button();
                    this.Key5.RelativeLayoutOn();
                    this.Key5.AddClass("Key");
                    this.Key5.AddClass("Key5");
                    this.Key5.Text("5");
                    this.Key5.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._Key5_Clicked, this));
                    this.KeysRow2.Children.Add(this.Key5);

                    this.Key2 = new TSUI.UI.Button();
                    this.Key2.RelativeLayoutOn();
                    this.Key2.AddClass("Key");
                    this.Key2.AddClass("Key2");
                    this.Key2.Text("2");
                    this.Key2.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._Key2_Clicked, this));
                    this.KeysRow3.Children.Add(this.Key2);

                    this.KeyDot = new TSUI.UI.Button();
                    this.KeyDot.RelativeLayoutOn();
                    this.KeyDot.AddClass("Key");
                    this.KeyDot.AddClass("KeyDot");
                    this.KeyDot.Text(".");
                    this.KeyDot.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._KeyDot_Clicked, this));
                    this.KeysRow4.Children.Add(this.KeyDot);

                    this.Key9 = new TSUI.UI.Button();
                    this.Key9.RelativeLayoutOn();
                    this.Key9.AddClass("Key");
                    this.Key9.AddClass("Key9");
                    this.Key9.Text("9");
                    this.Key9.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._Key9_Clicked, this));
                    this.KeysRow1.Children.Add(this.Key9);

                    this.Key6 = new TSUI.UI.Button();
                    this.Key6.RelativeLayoutOn();
                    this.Key6.AddClass("Key");
                    this.Key6.AddClass("Key6");
                    this.Key6.Text("6");
                    this.Key6.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._Key6_Clicked, this));
                    this.KeysRow2.Children.Add(this.Key6);

                    this.Key3 = new TSUI.UI.Button();
                    this.Key3.RelativeLayoutOn();
                    this.Key3.AddClass("Key");
                    this.Key3.AddClass("Key3");
                    this.Key3.Text("3");
                    this.Key3.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._Key3_Clicked, this));
                    this.KeysRow3.Children.Add(this.Key3);

                    this.ButtonAdd = new TSUI.UI.Button();
                    this.ButtonAdd.RelativeLayoutOn();
                    this.ButtonAdd.AddClass("CmdButton");
                    this.ButtonAdd.AddClass("ButtonAdd");
                    this.ButtonAdd.Text("+");
                    this.ButtonAdd.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._ButtonAdd_Clicked, this));
                    this.CmdsRow1.Children.Add(this.ButtonAdd);

                    this.ButtonSub = new TSUI.UI.Button();
                    this.ButtonSub.RelativeLayoutOn();
                    this.ButtonSub.AddClass("CmdButton");
                    this.ButtonSub.AddClass("ButtonSub");
                    this.ButtonSub.Text("-");
                    this.ButtonSub.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._ButtonSub_Clicked, this));
                    this.CmdsRow1.Children.Add(this.ButtonSub);

                    this.ButtonMul = new TSUI.UI.Button();
                    this.ButtonMul.RelativeLayoutOn();
                    this.ButtonMul.AddClass("CmdButton");
                    this.ButtonMul.AddClass("ButtonMul");
                    this.ButtonMul.Text("x");
                    this.ButtonMul.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._ButtonMul_Clicked, this));
                    this.CmdsRow2.Children.Add(this.ButtonMul);

                    this.ButtonDiv = new TSUI.UI.Button();
                    this.ButtonDiv.RelativeLayoutOn();
                    this.ButtonDiv.AddClass("CmdButton");
                    this.ButtonDiv.AddClass("ButtonDiv");
                    this.ButtonDiv.Text("/");
                    this.ButtonDiv.OnClick.Attach(new TSUI.Events.ClickEventHandler(this._ButtonDiv_Clicked, this));
                    this.CmdsRow2.Children.Add(this.ButtonDiv);

                    this.ButtonClear = new TSUI.UI.Button();
                    this.ButtonClear.RelativeLayoutOn();
                    this.ButtonClear.AddClass("ButtonClear");
                    this.ButtonClear.Text("Clear");
                    this.ButtonClear.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.ClearButton_Clicked, this));
                    this.CmdsRow3.Children.Add(this.ButtonClear);

                    this.ButtonEquals = new TSUI.UI.Button();
                    this.ButtonEquals.RelativeLayoutOn();
                    this.ButtonEquals.AddClass("ButtonEquals");
                    this.ButtonEquals.Text("=");
                    this.ButtonEquals.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.EqualsButton_Clicked, this));
                    this.CmdsRow3.Children.Add(this.ButtonEquals);
                }
                CalculatorWindow.prototype.ConstructDOM = function (parent, onComplete) {
                    $(window).on("keypress", this._Window_KeyPress_Handler);

                    _super.prototype.ConstructDOM.call(this, parent, function () {
                        if (onComplete) {
                            onComplete();
                        }
                    });
                };
                CalculatorWindow.prototype.DestroyDOM = function () {
                    $(window).off("keypress", this._Window_KeyPress_Handler);

                    _super.prototype.DestroyDOM.call(this);
                };

                CalculatorWindow.prototype._Window_KeyPress = function (args) {
                    var kk = args.jqEvent.which;
                    var key = String.fromCharCode(kk);
                    if (key === "0" || key === "1" || key === "2" || key === "3" || key === "4" || key === "5" || key === "6" || key === "7" || key === "8" || key === "9" || key === ".") {
                        this.HandleKey_Clicked(key);
                    } else if (key === "+" || key === "-" || key === "/") {
                        this.HandleButton_Clicked(key);
                    } else if (key === "*" || key === "x") {
                        this.HandleButton_Clicked("x");
                    } else if (key === "=" || kk === 13 || key === " ") {
                        this.EqualsButton_Clicked(null);
                    }
                };

                CalculatorWindow.prototype._Key0_Clicked = function (args) {
                    this.HandleKey_Clicked("0");
                };
                CalculatorWindow.prototype._Key1_Clicked = function (args) {
                    this.HandleKey_Clicked("1");
                };
                CalculatorWindow.prototype._Key2_Clicked = function (args) {
                    this.HandleKey_Clicked("2");
                };
                CalculatorWindow.prototype._Key3_Clicked = function (args) {
                    this.HandleKey_Clicked("3");
                };
                CalculatorWindow.prototype._Key4_Clicked = function (args) {
                    this.HandleKey_Clicked("4");
                };
                CalculatorWindow.prototype._Key5_Clicked = function (args) {
                    this.HandleKey_Clicked("5");
                };
                CalculatorWindow.prototype._Key6_Clicked = function (args) {
                    this.HandleKey_Clicked("6");
                };
                CalculatorWindow.prototype._Key7_Clicked = function (args) {
                    this.HandleKey_Clicked("7");
                };
                CalculatorWindow.prototype._Key8_Clicked = function (args) {
                    this.HandleKey_Clicked("8");
                };
                CalculatorWindow.prototype._Key9_Clicked = function (args) {
                    this.HandleKey_Clicked("9");
                };
                CalculatorWindow.prototype._KeyDot_Clicked = function (args) {
                    this.HandleKey_Clicked(".");
                };
                CalculatorWindow.prototype.HandleKey_Clicked = function (key) {
                    if (this.Operation === null) {
                        if (this.Value1Str === null) {
                            this.Value1Str = "";
                        }

                        if (this.Value1Str.length < 6) {
                            if (key === ".") {
                                if (this.Value1Str.indexOf(".") === -1) {
                                    this.Value1Str += key;
                                }
                            } else {
                                this.Value1Str += key;
                            }
                        }
                    } else {
                        if (this.Value2Str === null) {
                            this.Value2Str = "";
                        }

                        if (this.Value2Str.length < 6) {
                            if (key === ".") {
                                if (this.Value2Str.indexOf(".") === -1) {
                                    this.Value2Str += key;
                                }
                            } else {
                                this.Value2Str += key;
                            }
                        }
                    }
                    this.RedisplayCalculation();
                };

                CalculatorWindow.prototype._ButtonAdd_Clicked = function (args) {
                    this.HandleButton_Clicked("+");
                };
                CalculatorWindow.prototype._ButtonSub_Clicked = function (args) {
                    this.HandleButton_Clicked("-");
                };
                CalculatorWindow.prototype._ButtonMul_Clicked = function (args) {
                    this.HandleButton_Clicked("x");
                };
                CalculatorWindow.prototype._ButtonDiv_Clicked = function (args) {
                    this.HandleButton_Clicked("/");
                };
                CalculatorWindow.prototype.HandleButton_Clicked = function (key) {
                    if (this.Value1Str !== null) {
                        this.evalCalculation();

                        this.Operation = key;
                        this.RedisplayCalculation();
                    }
                };

                CalculatorWindow.prototype.RedisplayCalculation = function () {
                    var txt = "";
                    if (this.Value1Str !== null) {
                        txt = this.Value1Str;
                        if (this.Operation !== null) {
                            txt += " " + this.Operation;
                            if (this.Value2Str !== null) {
                                txt += " " + this.Value2Str;
                            }
                        }
                    }
                    this.CalculationBox.Text(txt);
                };

                CalculatorWindow.prototype.ClearButton_Clicked = function (args) {
                    if (this.Value2Str !== null) {
                        this.Value2Str = null;
                    } else if (this.Operation !== null) {
                        this.Operation = null;
                    } else if (this.Value1Str !== null) {
                        this.Value1Str = null;
                    }
                    this.RedisplayCalculation();
                };
                CalculatorWindow.prototype.EqualsButton_Clicked = function (args) {
                    this.evalCalculation();
                };
                CalculatorWindow.prototype.evalCalculation = function () {
                    if (this.Value1Str !== null && this.Operation !== null && this.Value2Str !== null) {
                        var val1 = parseFloat(this.Value1Str);
                        var val2 = parseFloat(this.Value2Str);
                        var result = null;
                        switch (this.Operation) {
                            case "+":
                                result = val1 + val2;
                                break;
                            case "-":
                                result = val1 - val2;
                                break;
                            case "x":
                                result = val1 * val2;
                                break;
                            case "/":
                                result = val1 / val2;
                                break;
                        }
                        if (result !== null) {
                            this.Value1Str = result.toFixed(3);
                            if (this.Value1Str.length > 6) {
                                var dotIndex = this.Value1Str.indexOf(".");
                                this.Value1Str = this.Value1Str.substring(0, dotIndex);
                            }
                            this.Operation = null;
                            this.Value2Str = null;

                            this.RedisplayCalculation();
                        }
                    }
                };
                return CalculatorWindow;
            })(TSUI.UI.Window);
        })(Apps.Samples || (Apps.Samples = {}));
        var Samples = Apps.Samples;
    })(TSUI.Apps || (TSUI.Apps = {}));
    var Apps = TSUI.Apps;
})(TSUI || (TSUI = {}));

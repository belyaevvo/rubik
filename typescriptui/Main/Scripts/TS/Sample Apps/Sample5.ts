/// <reference path="../Lib/Build/IApp.d.ts" />
/// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
/// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
/// <reference path="../Definitions/jquery.d.ts" />

module TSUI.Apps.Samples
{
    export class Sample5App implements IApp
    {
        private MainContainer: JQuery = null;
        private StartArgs: string[] = null;

        private TheCalcWindow: CalculatorWindow;

        Run(args: string[]= [], container: JQuery = $("body")): void
        {
            this.StartArgs = args;
            this.MainContainer = container;

            this.MainContainer.addClass("Sample5");

            Animation.AppWindowAnimator.UseCanvasRenderIfSensible = false;

            console.log("Sample 5 loaded.");
            
            this.TheCalcWindow = new CalculatorWindow();
            this.TheCalcWindow.ConstructDOM(this.MainContainer, () =>
            {
                this.TheCalcWindow.Enabled(false);

                this.TheCalcWindow.Top(new UI.CSSNumber(($(this.MainContainer).height() - this.TheCalcWindow.ActualHeight()) / 2));
                this.TheCalcWindow.Left(new UI.CSSNumber(($(this.MainContainer).width() - this.TheCalcWindow.ActualWidth()) / 2));

                this.TheCalcWindow.Show(() =>
                {
                    this.TheCalcWindow.Enabled(true);
                });
            });
        }
    }

    class CalculatorWindow extends UI.Window
    {
        CalculationBox: UI.ITextBox;

        KeysStackPanel: UI.IStackPanel;
        KeysRow1: UI.IStackPanelRow;
        KeysRow2: UI.IStackPanelRow;
        KeysRow3: UI.IStackPanelRow;
        KeysRow4: UI.IStackPanelRow;

        Key0: UI.IButton;
        Key1: UI.IButton;
        Key2: UI.IButton;
        Key3: UI.IButton;
        Key4: UI.IButton;
        Key5: UI.IButton;
        Key6: UI.IButton;
        Key7: UI.IButton;
        Key8: UI.IButton;
        Key9: UI.IButton;
        KeyDot: UI.IButton;

        CmdsStackPanel: UI.IStackPanel;
        CmdsRow1: UI.IStackPanelRow;
        CmdsRow2: UI.IStackPanelRow;
        CmdsRow3: UI.IStackPanelRow;
        
        ButtonAdd: UI.IButton;
        ButtonSub: UI.IButton;
        ButtonMul: UI.IButton;
        ButtonDiv: UI.IButton;
        ButtonClear: UI.IButton;
        ButtonEquals: UI.IButton;

        Value1Str: string = null;
        Value2Str: string = null;
        Operation: string = null;

        constructor()
        {
            super();

            this.AddClass("CalculatorWindow");

            this.Title("Calculator");

            this.CloseButton.Visible(false);
            this.ResizeEnabled(false);

            this.CalculationBox = new UI.TextBox();
            this.CalculationBox.AddClass("CalculationBox");
            this.ContentPanel.Children.Add(this.CalculationBox);

            this.KeysStackPanel = new UI.StackPanel();
            this.KeysStackPanel.AddClass("Keys");
            this.CmdsStackPanel = new UI.StackPanel();
            this.CmdsStackPanel.AddClass("Cmds");

            this.KeysRow1 = new UI.StackPanelRow();
            this.KeysRow2 = new UI.StackPanelRow();
            this.KeysRow3 = new UI.StackPanelRow();
            this.KeysRow4 = new UI.StackPanelRow();

            this.CmdsRow1 = new UI.StackPanelRow();
            this.CmdsRow2 = new UI.StackPanelRow();
            this.CmdsRow3 = new UI.StackPanelRow();
            
            this.ContentPanel.Children.Add(this.KeysStackPanel);
            this.KeysStackPanel.Rows.Add(this.KeysRow1);
            this.KeysStackPanel.Rows.Add(this.KeysRow2);
            this.KeysStackPanel.Rows.Add(this.KeysRow3);
            this.KeysStackPanel.Rows.Add(this.KeysRow4);

            this.ContentPanel.Children.Add(this.CmdsStackPanel);
            this.CmdsStackPanel.Rows.Add(this.CmdsRow1);
            this.CmdsStackPanel.Rows.Add(this.CmdsRow2);
            this.CmdsStackPanel.Rows.Add(this.CmdsRow3);
            
            this.Key7 = new UI.Button();
            this.Key7.RelativeLayoutOn();
            this.Key7.AddClass("Key");
            this.Key7.AddClass("Key7");
            this.Key7.Text("7");
            this.Key7.OnClick.Attach(new Events.ClickEventHandler(this._Key7_Clicked, this));
            this.KeysRow1.Children.Add(this.Key7);
            
            this.Key4 = new UI.Button();
            this.Key4.RelativeLayoutOn();
            this.Key4.AddClass("Key");
            this.Key4.AddClass("Key4");
            this.Key4.Text("4");
            this.Key4.OnClick.Attach(new Events.ClickEventHandler(this._Key4_Clicked, this));
            this.KeysRow2.Children.Add(this.Key4);

            this.Key1 = new UI.Button();
            this.Key1.RelativeLayoutOn();
            this.Key1.AddClass("Key");
            this.Key1.AddClass("Key1");
            this.Key1.Text("1");
            this.Key1.OnClick.Attach(new Events.ClickEventHandler(this._Key1_Clicked, this));
            this.KeysRow3.Children.Add(this.Key1);

            this.Key0 = new UI.Button();
            this.Key0.RelativeLayoutOn();
            this.Key0.AddClass("Key");
            this.Key0.AddClass("Key0");
            this.Key0.Text("0");
            this.Key0.OnClick.Attach(new Events.ClickEventHandler(this._Key0_Clicked, this));
            this.KeysRow4.Children.Add(this.Key0);

            this.Key8 = new UI.Button();
            this.Key8.RelativeLayoutOn();
            this.Key8.AddClass("Key");
            this.Key8.AddClass("Key8");
            this.Key8.Text("8");
            this.Key8.OnClick.Attach(new Events.ClickEventHandler(this._Key8_Clicked, this));
            this.KeysRow1.Children.Add(this.Key8);

            this.Key5 = new UI.Button();
            this.Key5.RelativeLayoutOn();
            this.Key5.AddClass("Key");
            this.Key5.AddClass("Key5");
            this.Key5.Text("5");
            this.Key5.OnClick.Attach(new Events.ClickEventHandler(this._Key5_Clicked, this));
            this.KeysRow2.Children.Add(this.Key5);

            this.Key2 = new UI.Button();
            this.Key2.RelativeLayoutOn();
            this.Key2.AddClass("Key");
            this.Key2.AddClass("Key2");
            this.Key2.Text("2");
            this.Key2.OnClick.Attach(new Events.ClickEventHandler(this._Key2_Clicked, this));
            this.KeysRow3.Children.Add(this.Key2);

            this.KeyDot = new UI.Button();
            this.KeyDot.RelativeLayoutOn();
            this.KeyDot.AddClass("Key");
            this.KeyDot.AddClass("KeyDot");
            this.KeyDot.Text(".");
            this.KeyDot.OnClick.Attach(new Events.ClickEventHandler(this._KeyDot_Clicked, this));
            this.KeysRow4.Children.Add(this.KeyDot);

            this.Key9 = new UI.Button();
            this.Key9.RelativeLayoutOn();
            this.Key9.AddClass("Key");
            this.Key9.AddClass("Key9");
            this.Key9.Text("9");
            this.Key9.OnClick.Attach(new Events.ClickEventHandler(this._Key9_Clicked, this));
            this.KeysRow1.Children.Add(this.Key9);

            this.Key6 = new UI.Button();
            this.Key6.RelativeLayoutOn();
            this.Key6.AddClass("Key");
            this.Key6.AddClass("Key6");
            this.Key6.Text("6");
            this.Key6.OnClick.Attach(new Events.ClickEventHandler(this._Key6_Clicked, this));
            this.KeysRow2.Children.Add(this.Key6);

            this.Key3 = new UI.Button();
            this.Key3.RelativeLayoutOn();
            this.Key3.AddClass("Key");
            this.Key3.AddClass("Key3");
            this.Key3.Text("3");
            this.Key3.OnClick.Attach(new Events.ClickEventHandler(this._Key3_Clicked, this));
            this.KeysRow3.Children.Add(this.Key3);

            this.ButtonAdd = new UI.Button();
            this.ButtonAdd.RelativeLayoutOn();
            this.ButtonAdd.AddClass("CmdButton");
            this.ButtonAdd.AddClass("ButtonAdd");
            this.ButtonAdd.Text("+");
            this.ButtonAdd.OnClick.Attach(new Events.ClickEventHandler(this._ButtonAdd_Clicked, this));
            this.CmdsRow1.Children.Add(this.ButtonAdd);

            this.ButtonSub = new UI.Button();
            this.ButtonSub.RelativeLayoutOn();
            this.ButtonSub.AddClass("CmdButton");
            this.ButtonSub.AddClass("ButtonSub");
            this.ButtonSub.Text("-");
            this.ButtonSub.OnClick.Attach(new Events.ClickEventHandler(this._ButtonSub_Clicked, this));
            this.CmdsRow1.Children.Add(this.ButtonSub);

            this.ButtonMul = new UI.Button();
            this.ButtonMul.RelativeLayoutOn();
            this.ButtonMul.AddClass("CmdButton");
            this.ButtonMul.AddClass("ButtonMul");
            this.ButtonMul.Text("x");
            this.ButtonMul.OnClick.Attach(new Events.ClickEventHandler(this._ButtonMul_Clicked, this));
            this.CmdsRow2.Children.Add(this.ButtonMul);

            this.ButtonDiv = new UI.Button();
            this.ButtonDiv.RelativeLayoutOn();
            this.ButtonDiv.AddClass("CmdButton");
            this.ButtonDiv.AddClass("ButtonDiv");
            this.ButtonDiv.Text("/");
            this.ButtonDiv.OnClick.Attach(new Events.ClickEventHandler(this._ButtonDiv_Clicked, this));
            this.CmdsRow2.Children.Add(this.ButtonDiv);

            this.ButtonClear = new UI.Button();
            this.ButtonClear.RelativeLayoutOn();
            this.ButtonClear.AddClass("ButtonClear");
            this.ButtonClear.Text("Clear");
            this.ButtonClear.OnClick.Attach(new Events.ClickEventHandler(this.ClearButton_Clicked, this));
            this.CmdsRow3.Children.Add(this.ButtonClear);

            this.ButtonEquals = new UI.Button();
            this.ButtonEquals.RelativeLayoutOn();
            this.ButtonEquals.AddClass("ButtonEquals");
            this.ButtonEquals.Text("=");
            this.ButtonEquals.OnClick.Attach(new Events.ClickEventHandler(this.EqualsButton_Clicked, this));
            this.CmdsRow3.Children.Add(this.ButtonEquals);
        }

        _Window_KeyPress_Handler = (event: JQueryEventObject) =>
        {
            this._Window_KeyPress(new Events.KeyPressEventArgs(this, event));
        };

        ConstructDOM(parent: JQuery, onComplete?: () => void)
        {
            $(window).on("keypress", this._Window_KeyPress_Handler);

            super.ConstructDOM(parent, () =>
            {
                if (onComplete)
                {
                    onComplete();
                }
            });
        }
        DestroyDOM(): void
        {
            $(window).off("keypress", this._Window_KeyPress_Handler);

            super.DestroyDOM();
        }

        _Window_KeyPress(args: Events.KeyPressEventArgs)
        {
            var kk = args.jqEvent.which;
            var key = String.fromCharCode(kk);
            if (key === "0" || key === "1" || key === "2" || key === "3" ||
                key === "4" || key === "5" || key === "6" || key === "7" ||
                key === "8" || key === "9" || key === ".")
            {
                this.HandleKey_Clicked(key);
            }
            else if (key === "+" || key === "-" || key === "/")
            {
                this.HandleButton_Clicked(key);
            }
            else if (key === "*" || key === "x")
            {
                this.HandleButton_Clicked("x");
            }
            else if (key === "=" || kk === 13 /*Enter*/ || key === " ")
            {
                this.EqualsButton_Clicked(null);
            }
        }

        _Key0_Clicked(args: Events.ClickEventArgs)
        {
            this.HandleKey_Clicked("0");
        }
        _Key1_Clicked(args: Events.ClickEventArgs)
        {
            this.HandleKey_Clicked("1");
        }
        _Key2_Clicked(args: Events.ClickEventArgs)
        {
            this.HandleKey_Clicked("2");
        }
        _Key3_Clicked(args: Events.ClickEventArgs)
        {
            this.HandleKey_Clicked("3");
        }
        _Key4_Clicked(args: Events.ClickEventArgs)
        {
            this.HandleKey_Clicked("4");
        }
        _Key5_Clicked(args: Events.ClickEventArgs)
        {
            this.HandleKey_Clicked("5");
        }
        _Key6_Clicked(args: Events.ClickEventArgs)
        {
            this.HandleKey_Clicked("6");
        }
        _Key7_Clicked(args: Events.ClickEventArgs)
        {
            this.HandleKey_Clicked("7");
        }
        _Key8_Clicked(args: Events.ClickEventArgs)
        {
            this.HandleKey_Clicked("8");
        }
        _Key9_Clicked(args: Events.ClickEventArgs)
        {
            this.HandleKey_Clicked("9");
        }
        _KeyDot_Clicked(args: Events.ClickEventArgs)
        {
            this.HandleKey_Clicked(".");
        }
        HandleKey_Clicked(key: string)
        {
            if (this.Operation === null)
            {
                if (this.Value1Str === null)
                {
                    this.Value1Str = "";
                }

                if (this.Value1Str.length < 6)
                {
                    if (key === ".")
                    {
                        if (this.Value1Str.indexOf(".") === -1)
                        {
                            this.Value1Str += key;
                        }
                    }
                    else
                    {
                        this.Value1Str += key;
                    }
                }
            }
            else
            {
                if (this.Value2Str === null)
                {
                    this.Value2Str = "";
                }

                if (this.Value2Str.length < 6)
                {
                    if (key === ".")
                    {
                        if (this.Value2Str.indexOf(".") === -1)
                        {
                            this.Value2Str += key;
                        }
                    }
                    else
                    {
                        this.Value2Str += key;
                    }
                }
            }
            this.RedisplayCalculation();
        }

        _ButtonAdd_Clicked(args: Events.ClickEventArgs)
        {
            this.HandleButton_Clicked("+");
        }
        _ButtonSub_Clicked(args: Events.ClickEventArgs)
        {
            this.HandleButton_Clicked("-");
        }
        _ButtonMul_Clicked(args: Events.ClickEventArgs)
        {
            this.HandleButton_Clicked("x");
        }
        _ButtonDiv_Clicked(args: Events.ClickEventArgs)
        {
            this.HandleButton_Clicked("/");
        }
        HandleButton_Clicked(key: string)
        {
            if (this.Value1Str !== null)
            {
                this.evalCalculation();

                this.Operation = key;
                this.RedisplayCalculation();
            }
        }

        RedisplayCalculation(): void
        {
            var txt = "";
            if (this.Value1Str !== null)
            {
                txt = this.Value1Str;
                if (this.Operation !== null)
                {
                    txt += " " + this.Operation;
                    if (this.Value2Str !== null)
                    {
                        txt += " " + this.Value2Str;
                    }
                }
            }
            this.CalculationBox.Text(txt);
        }

        ClearButton_Clicked(args: Events.ClickEventArgs)
        {
            if (this.Value2Str !== null)
            {
                this.Value2Str = null;
            }
            else if (this.Operation !== null)
            {
                this.Operation = null;
            }
            else if (this.Value1Str !== null)
            {
                this.Value1Str = null;
            }
            this.RedisplayCalculation();
        }
        EqualsButton_Clicked(args: Events.ClickEventArgs)
        {
            this.evalCalculation();
        }
        evalCalculation()
        {
            if (this.Value1Str !== null && this.Operation !== null && this.Value2Str !== null)
            {
                var val1 = parseFloat(this.Value1Str);
                var val2 = parseFloat(this.Value2Str);
                var result: number = null;
                switch (this.Operation)
                {
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
                if (result !== null)
                {
                    this.Value1Str = result.toFixed(3);
                    if (this.Value1Str.length > 6)
                    {
                        var dotIndex = this.Value1Str.indexOf(".");
                        this.Value1Str = this.Value1Str.substring(0, dotIndex);
                    }
                    this.Operation = null;
                    this.Value2Str = null;

                    this.RedisplayCalculation();
                }
            }
        }
    }
}
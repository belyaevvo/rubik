var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var TSUI;
(function (TSUI) {
    (function (Apps) {
        (function (Testing) {
            var LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra felis nec erat fermentum malesuada gravida odio pulvinar. Fusce elit massa, hendrerit sit amet vehicula vitae, porta in lorem. Suspendisse volutpat eros sed nibh elementum tincidunt. Nam nulla nibh, dapibus.";

            var TestApp = (function () {
                function TestApp() {
                    this.MainContainer = null;
                    this.StartArgs = null;
                    this.isMobile = false;
                }
                TestApp.prototype.Run = function (args, container) {
                    if (typeof args === "undefined") { args = []; }
                    if (typeof container === "undefined") { container = $("body"); }
                    this.StartArgs = args;
                    this.MainContainer = container;

                    this.MainContainer.addClass("TestApp");

                    this.isMobile = window.location.hash === "#mobile";

                    TSUI.Animation.AppWindowAnimator.UseCanvasRenderIfSensible = !this.isMobile;

                    if (this.isMobile) {
                        this.TheSplashScreen = new MobileSplashScreen();
                        this.TheSplashScreen.ConstructDOM(this.MainContainer);

                        var width = Math.min($(window).width(), 580);
                        this.TheSplashScreen.Width(new TSUI.UI.CSSNumber(width));
                        this.TheSplashScreen.Left(new TSUI.UI.CSSNumber(($(window).width() - width) / 2));
                        this.TheSplashScreen.Height(new TSUI.UI.CSSNumber($(window).height()));
                    } else {
                        this.TheSplashScreen = new MainSplashScreen();
                        this.TheSplashScreen.ConstructDOM(this.MainContainer);
                        var topPx = ($(window).height() - this.TheSplashScreen.Height().Value) / 2;
                        this.TheSplashScreen.Top(new TSUI.UI.CSSNumber((topPx / $(window).height()) * 100, "%"));
                        var leftPx = ($(window).width() - this.TheSplashScreen.Width().Value) / 2;
                        this.TheSplashScreen.Left(new TSUI.UI.CSSNumber((leftPx / $(window).width()) * 100, "%"));
                    }

                    var _this = this;
                    this.TheSplashScreen.Show(function () {
                        _this.Init();

                        _this.TheTilesWindow.Enabled(false);

                        _this.TheTilesWindow.Width(new TSUI.UI.CSSNumber($(window).width()));
                        _this.TheTilesWindow.Height(new TSUI.UI.CSSNumber($(window).height()));

                        setTimeout(function () {
                            var animator = new TSUI.Animation.FadeAnimator();
                            var loadStartTime = Date.now();

                            var loadEndTime = Date.now();

                            setTimeout(function () {
                                _this.TheSplashScreen.Hide(function () {
                                    _this.TheTilesWindow.Show(function () {
                                        _this.TheTilesWindow.Enabled(true);
                                        _this.TheSplashScreen.DestroyDOM();
                                    }, animator);
                                });
                            }, Math.max(3000 - (loadEndTime - loadStartTime), 1000));
                        }, 500);
                    }, new TSUI.Animation.Animator());
                };

                TestApp.prototype.Init = function () {
                    this.InitTilesWindow();
                    this.InitMainWindow();
                };

                TestApp.prototype.InitTilesWindow = function () {
                    this.TheTilesWindow = new TilesWindow();

                    this.TheTilesWindow.ConstructDOM(this.MainContainer);
                };
                TestApp.prototype.InitMainWindow = function () {
                    if (this.isMobile) {
                        this.TheMainWindow = new MobileMainWindow();
                    } else {
                        this.TheMainWindow = new MainWindow();
                    }
                    this.TheMainWindow.ConstructDOM(this.MainContainer);
                };

                TestApp.prototype.TestAppWindowShowHide = function () {
                    var _this = this;

                    _this.TheMainWindow.Hide(function () {
                        setTimeout(function () {
                            _this.TheMainWindow.Show();
                        }, 500);
                    });
                };
                return TestApp;
            })();
            Testing.TestApp = TestApp;

            var MainSplashScreen = (function (_super) {
                __extends(MainSplashScreen, _super);
                function MainSplashScreen() {
                    _super.call(this);

                    this.ID("SplashScreen");

                    this.MainTitleBar.Visible(false);
                    this.CloseButton.Visible(false);
                    this.ResizeEnabled(false);
                    this.DragEnabled(false);

                    this.Width(new TSUI.UI.CSSNumber(500));
                    this.Height(new TSUI.UI.CSSNumber(350));

                    var LogoImage = new TSUI.UI.ImageBox("/Images/SMW-Logo-Film-Strip-Style-1.png", "Slide My Way");
                    LogoImage.AddClass("Logo");
                    this.Children.Add(LogoImage);

                    var NameLabel = new TSUI.UI.Label();
                    NameLabel.AddClass("NameLabel");
                    NameLabel.Text("TypeScript UI");
                    this.Children.Add(NameLabel);

                    var ProgressSpinner = new TSUI.UI.ProgressSpinner();
                    ProgressSpinner.AnimationDuration(2000);
                    this.Children.Add(ProgressSpinner);
                }
                return MainSplashScreen;
            })(TSUI.UI.Window);
            var MobileSplashScreen = (function (_super) {
                __extends(MobileSplashScreen, _super);
                function MobileSplashScreen() {
                    _super.call(this);

                    this.ID("SplashScreen");
                    this.AddClass("Mobile");

                    this.MainTitleBar.Visible(false);
                    this.CloseButton.Visible(false);
                    this.ResizeEnabled(false);
                    this.DragEnabled(false);

                    this.Top(new TSUI.UI.CSSNumber(0));
                    this.Left(new TSUI.UI.CSSNumber(0));

                    var LogoImage = new TSUI.UI.ImageBox("/Images/SMW-Logo-Film-Strip-Style-1.png", "Slide My Way");
                    LogoImage.AddClass("Logo");
                    this.Children.Add(LogoImage);

                    var NameLabel = new TSUI.UI.Label();
                    NameLabel.AddClass("NameLabel");
                    NameLabel.Text("TypeScript UI");
                    this.Children.Add(NameLabel);

                    var ProgressSpinner = new TSUI.UI.ProgressSpinner();
                    ProgressSpinner.AnimationDuration(2000);
                    this.Children.Add(ProgressSpinner);
                }
                return MobileSplashScreen;
            })(TSUI.UI.Window);

            var TilesWindow = (function (_super) {
                __extends(TilesWindow, _super);
                function TilesWindow() {
                    _super.call(this);

                    this.ID("TilesWindow");

                    this.Title("Typescript UI");

                    this.DragEnabled(false);
                    this.ResizeEnabled(false);

                    this.Top(new TSUI.UI.CSSNumber(0));
                    this.Left(new TSUI.UI.CSSNumber(0));

                    this.TilesContainer = new TSUI.UI.Panel();
                    this.TilesContainer.AddClass("TilesContainer");
                    this.ContentPanel.Children.Add(this.TilesContainer);

                    var tileBgUrls = [
                        "http://www.yourbeautifulphotography.com/extras/squareprofile.jpg",
                        "http://www.yourbeautifulphotography.com/extras/squareprofile4.jpg",
                        "http://www.yourbeautifulphotography.com/extras/rainbowovercastlews.jpg",
                        "http://2.bp.blogspot.com/_U_ERG5dylLw/SaaIqOplpnI/AAAAAAAACV0/IfH3Wnht24E/s400/gladwell.jpg",
                        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRaPrH45SmgdWpnm3wH_r2lzqlcHzPKLAmONyrIMVRoDibtxn2d"
                    ];

                    for (var i = 0; i < 9; i++) {
                        var newTile = new TSUI.UI.Tile(TSUI.UI.TileSizes.Small, TSUI.UI.TileTypes.Iconic);
                        newTile.RelativeLayoutOn();
                        newTile.Counter.Text("10");
                        newTile.NameLabel.Text("About");
                        newTile.IconBox.Source(TSUI.UI.TileIcons.About);
                        newTile.TextLabel.Text("Find out more...");
                        newTile.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.AboutTile_OnClick, this));

                        if (i > 5) {
                            for (var j = 0; j < tileBgUrls.length; j++) {
                                var newBg = new TSUI.UI.TileBackground();
                                newBg.Source(tileBgUrls[j]);
                                newTile.Backgrounds.Add(newBg);
                            }
                        }
                        switch (i) {
                            case 0:
                                newTile.Size(TSUI.UI.TileSizes.Small);
                                newTile.Type(TSUI.UI.TileTypes.Flip);
                                break;
                            case 1:
                                newTile.Size(TSUI.UI.TileSizes.Medium);
                                newTile.Type(TSUI.UI.TileTypes.Flip);
                                break;
                            case 2:
                                newTile.Size(TSUI.UI.TileSizes.Large);
                                newTile.Type(TSUI.UI.TileTypes.Flip);
                                break;
                            case 3:
                                newTile.Size(TSUI.UI.TileSizes.Small);
                                newTile.Type(TSUI.UI.TileTypes.Iconic);
                                break;
                            case 4:
                                newTile.Size(TSUI.UI.TileSizes.Medium);
                                newTile.Type(TSUI.UI.TileTypes.Iconic);
                                break;
                            case 5:
                                newTile.Size(TSUI.UI.TileSizes.Large);
                                newTile.Type(TSUI.UI.TileTypes.Iconic);
                                break;
                            case 6:
                                newTile.Size(TSUI.UI.TileSizes.Small);
                                newTile.Type(TSUI.UI.TileTypes.Cycle);
                                break;
                            case 7:
                                newTile.Size(TSUI.UI.TileSizes.Medium);
                                newTile.Type(TSUI.UI.TileTypes.Cycle);
                                break;
                            case 8:
                                newTile.Size(TSUI.UI.TileSizes.Large);
                                newTile.Type(TSUI.UI.TileTypes.Cycle);
                                break;
                        }

                        this.TilesContainer.Children.Add(newTile);
                    }

                    this.AboutPage = new TSUI.UI.PageWindow();

                    var AboutPage_ContentStack = new TSUI.UI.StackPanel();
                    this.AboutPage.ContentPanel.Children.Add(AboutPage_ContentStack);

                    var AboutPage_TitleRow = new TSUI.UI.StackPanelRow();
                    AboutPage_ContentStack.Rows.Add(AboutPage_TitleRow);
                    this.AboutPage.ID("AboutPage");
                    var AboutPage_TitleLabel = new TSUI.UI.Label("About");
                    AboutPage_TitleLabel.AddClass("Title");
                    AboutPage_TitleLabel.RelativeLayoutOn();
                    AboutPage_TitleRow.Children.Add(AboutPage_TitleLabel);

                    var AboutPage_Para1Row = new TSUI.UI.StackPanelRow();
                    AboutPage_ContentStack.Rows.Add(AboutPage_Para1Row);
                    this.AboutPage.ID("AboutPage");
                    var AboutPage_Para1Label = new TSUI.UI.Label(TilesWindow.AboutPage_Para1);
                    AboutPage_Para1Label.AddClass("Para1");
                    AboutPage_Para1Label.RelativeLayoutOn();
                    AboutPage_Para1Row.Children.Add(AboutPage_Para1Label);

                    this.AboutPage.ConstructDOM($("body"));
                }
                TilesWindow.prototype.AboutTile_OnClick = function (eventArgs) {
                    this.AboutPage.PositionCenterWindow();
                    this.AboutPage.Show();
                };
                TilesWindow.AboutPage_Para1 = "";
                return TilesWindow;
            })(TSUI.UI.Window);

            var MainWindow = (function (_super) {
                __extends(MainWindow, _super);
                function MainWindow() {
                    _super.call(this);
                    this.ATextBox_TextChange_MsgBox = null;
                    this.ADropDown_SelectedIndexChanged_Notif = null;
                    this.ANumericUpDown_ValueChange_Notif = null;
                    this.AList_SelectedIndexChanged_Notif = null;

                    this.MinWidth(new TSUI.UI.CSSNumber(725));
                    this.MinHeight(new TSUI.UI.CSSNumber(645));
                    this.MaxWidth(new TSUI.UI.CSSNumber(100, "%"));
                    this.MaxHeight(new TSUI.UI.CSSNumber(100, "%"));

                    this.Title("Desktop Demo");

                    this.SplitContainer1 = new TSUI.UI.SplitContainer();
                    this.ContentPanel.Children.Add(this.SplitContainer1);
                    this.SplitContainer1.Panel1.MinWidth(new TSUI.UI.CSSNumber(130));
                    this.SplitContainer1.Panel2.MinWidth(new TSUI.UI.CSSNumber(590));

                    this.SplitContainer2 = new TSUI.UI.SplitContainer();
                    this.SplitContainer2.Orientation(TSUI.UI.SplitterGrip_Orientations.Horizontal);
                    this.SplitContainer1.Panel2.Children.Add(this.SplitContainer2);
                    this.SplitContainer2.Panel1.MinHeight(new TSUI.UI.CSSNumber(330));
                    this.SplitContainer2.Panel2.MinHeight(new TSUI.UI.CSSNumber(130));

                    var ButtonWidth = new TSUI.UI.CSSNumber(100);
                    var ButtonHeight = new TSUI.UI.CSSNumber(100);
                    var ButtonMargin = 15;
                    var ButtonStartTop = new TSUI.UI.CSSNumber(ButtonMargin);
                    var ButtonLeft = new TSUI.UI.CSSNumber(ButtonMargin);
                    var ButtonNum = 0;

                    while (ButtonNum < 5) {
                        var Button1 = new TSUI.UI.Button();
                        Button1.Text("A Button " + ButtonNum.toString());
                        Button1.Top(new TSUI.UI.CSSNumber(ButtonStartTop.Value + ((ButtonNum % 5) * ButtonHeight.Value) + ((ButtonNum % 5) * ButtonMargin)));
                        Button1.Left(new TSUI.UI.CSSNumber(15));
                        Button1.Width(ButtonWidth);
                        Button1.Height(ButtonHeight);
                        this.SplitContainer1.Panel1.Children.Add(Button1);
                        ButtonNum++;

                        Button1.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.AButton_Clicked, this));
                        if (ButtonNum % 2 == 0) {
                            Button1.Enabled(false);
                        }
                    }

                    this.StackPanel2 = new TSUI.UI.StackPanel();
                    this.StackPanel2.Orientation(TSUI.UI.StackPanelOrientations.Horizontal);
                    this.StackPanel2.Top(new TSUI.UI.CSSNumber(ButtonStartTop.Value - 5));
                    this.StackPanel2.Left(new TSUI.UI.CSSNumber(ButtonLeft.Value + ButtonWidth.Value + ButtonMargin));
                    this.StackPanel2.Width(new TSUI.UI.CSSNumber((ButtonWidth.Value + 15) * 2));
                    this.StackPanel2.Height(new TSUI.UI.CSSNumber((ButtonHeight.Value + 15) * 3));
                    this.SplitContainer1.Panel1.Children.Add(this.StackPanel2);
                    this.StackPanel2.Rows.Add(new TSUI.UI.StackPanelRow());
                    this.StackPanel2.Rows.Add(new TSUI.UI.StackPanelRow());

                    var StackPanel2_Row1 = this.StackPanel2.Rows.ElementAt(0);
                    StackPanel2_Row1.Width(new TSUI.UI.CSSNumber(ButtonWidth.Value + 15));
                    for (var i = 0; i < 2; i++) {
                        var newButton = new TSUI.UI.Button();
                        newButton.Text("Hrz Stk Pan Btn " + i.toString());
                        newButton.RelativeLayoutOn();
                        newButton.Width(ButtonWidth);
                        newButton.Height(ButtonHeight);
                        if (i != 0) {
                            newButton.ApplyStyle("margin-top", "0px");
                        }
                        newButton.ApplyStyle("margin-bottom", "15px");
                        newButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.AButton_Clicked, this));
                        StackPanel2_Row1.Children.Add(newButton);
                    }
                    var StackPanel2_Row2 = this.StackPanel2.Rows.ElementAt(1);
                    StackPanel2_Row2.Width(new TSUI.UI.CSSNumber(ButtonWidth.Value + 10));
                    for (var i = 3; i < 6; i++) {
                        var newButton = new TSUI.UI.Button();
                        newButton.Text("Hrz Stk Pan Btn " + i.toString());
                        newButton.RelativeLayoutOn();
                        newButton.Width(ButtonWidth);
                        newButton.Height(ButtonHeight);
                        if (i != 3) {
                            newButton.ApplyStyle("margin-top", "0px");
                        }
                        newButton.ApplyStyle("margin-bottom", "15px");
                        newButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.AButton_Clicked, this));
                        StackPanel2_Row2.Children.Add(newButton);
                    }

                    this.Expandable1 = new TSUI.UI.Expandable(true);
                    this.Expandable1.Title("Expandable 1");
                    this.Expandable1.Width(new TSUI.UI.CSSNumber(48, "%"));
                    this.Expandable1.Top(new TSUI.UI.CSSNumber(25));
                    this.Expandable1.Left(new TSUI.UI.CSSNumber(25));
                    this.Expandable1.MinWidth(new TSUI.UI.CSSNumber(200));
                    this.Expandable1.ContentPanel.Children.Add(new TSUI.UI.Label("Test label"));
                    this.Expandable1.ContentPanel.Height(new TSUI.UI.CSSNumber(70));
                    this.SplitContainer2.Panel1.Children.Add(this.Expandable1);

                    this.Expandable2 = new TSUI.UI.Expandable(true);
                    this.Expandable2.Title("Expandable 2");
                    this.Expandable2.Width(new TSUI.UI.CSSNumber(48, "%"));
                    this.Expandable2.Top(new TSUI.UI.CSSNumber(175));
                    this.Expandable2.Left(new TSUI.UI.CSSNumber(25));
                    this.Expandable2.MinWidth(new TSUI.UI.CSSNumber(200));
                    var newLabel2 = new TSUI.UI.Label(LoremIpsum);
                    this.Expandable2.ContentPanel.Children.Add(newLabel2);
                    this.Expandable2.ContentPanel.Height(new TSUI.UI.CSSNumber(70));
                    this.SplitContainer2.Panel1.Children.Add(this.Expandable2);

                    this.StackPanel1 = new TSUI.UI.StackPanel();
                    this.StackPanel1.Top(new TSUI.UI.CSSNumber(25));
                    this.StackPanel1.Left(new TSUI.UI.CSSNumber(52, "%"));
                    this.StackPanel1.Width(new TSUI.UI.CSSNumber(47, "%"));
                    this.SplitContainer2.Panel1.Children.Add(this.StackPanel1);

                    this.StackPanel1.Rows.Add(new TSUI.UI.StackPanelRow());
                    this.StackPanel1.Rows.Add(new TSUI.UI.StackPanelRow());
                    this.StackPanel1.Rows.Add(new TSUI.UI.StackPanelRow());
                    this.StackPanel1.Rows.Add(new TSUI.UI.StackPanelRow());
                    this.StackPanel1.Rows.Add(new TSUI.UI.StackPanelRow());
                    this.StackPanel1.Rows.Add(new TSUI.UI.StackPanelRow());
                    this.StackPanel1.Rows.Add(new TSUI.UI.StackPanelRow());
                    this.StackPanel1.Rows.Add(new TSUI.UI.StackPanelRow());
                    this.StackPanel1.Rows.Add(new TSUI.UI.StackPanelRow());
                    this.StackPanel1.Rows.Add(new TSUI.UI.StackPanelRow());
                    this.StackPanel1.Rows.Add(new TSUI.UI.StackPanelRow());

                    this.Expandable3 = new TSUI.UI.Expandable();
                    this.Expandable3.Title("Expandable 3");
                    var newLabel3 = new TSUI.UI.Label(LoremIpsum);
                    this.Expandable3.ContentPanel.Children.Add(newLabel3);
                    this.Expandable3.ContentPanel.Height(new TSUI.UI.CSSNumber(70));
                    (this.StackPanel1.Rows.ElementAt(0)).Children.Add(this.Expandable3);

                    this.Expandable4 = new TSUI.UI.Expandable();
                    this.Expandable4.Title("Expandable 4");
                    var newLabel4 = new TSUI.UI.Label(LoremIpsum);
                    newLabel4.RelativeLayoutOn();
                    this.Expandable4.ContentPanel.Children.Add(newLabel4);
                    for (var i = 0; i < 5; i++) {
                        var newButton = new TSUI.UI.Button();
                        newButton.Text("Exp Button " + i.toString());
                        newButton.RelativeLayoutOn();
                        newButton.Width(ButtonWidth);
                        newButton.Height(ButtonHeight);
                        newButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.AButton_Clicked, this));
                        this.Expandable4.ContentPanel.Children.Add(newButton);
                    }
                    this.Expandable4.ContentPanel.RelativeLayoutOn();
                    (this.StackPanel1.Rows.ElementAt(1)).Children.Add(this.Expandable4);

                    var StackPanel1_Row3 = (this.StackPanel1.Rows.ElementAt(2));
                    while (ButtonNum < 10) {
                        var Button1 = new TSUI.UI.Button();
                        Button1.Text("A Button " + ButtonNum.toString());
                        Button1.RelativeLayoutOn();
                        Button1.Width(ButtonWidth);
                        Button1.Height(ButtonHeight);
                        StackPanel1_Row3.Children.Add(Button1);
                        ButtonNum++;

                        Button1.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.AButton_Clicked, this));
                        if (ButtonNum % 2 == 0) {
                            Button1.Enabled(false);
                        }
                    }

                    var StackPanel1_Row4 = (this.StackPanel1.Rows.ElementAt(3));
                    var innerPanel = new TSUI.UI.Panel();
                    StackPanel1_Row4.Children.Add(innerPanel);
                    var newLabel5 = new TSUI.UI.Label(LoremIpsum);
                    newLabel5.Width(new TSUI.UI.CSSNumber(0, "", true));
                    newLabel5.Height(new TSUI.UI.CSSNumber(0, "", true));
                    newLabel5.Top(new TSUI.UI.CSSNumber(15));
                    newLabel5.Bottom(new TSUI.UI.CSSNumber(15));
                    newLabel5.Left(new TSUI.UI.CSSNumber(15));
                    newLabel5.Right(new TSUI.UI.CSSNumber(15));

                    innerPanel.Height(new TSUI.UI.CSSNumber(100));
                    innerPanel.ApplyStyle("border", "1px solid #000");
                    innerPanel.Children.Add(newLabel5);

                    var StackPanel1_Row5 = (this.StackPanel1.Rows.ElementAt(4));
                    var newLabel6 = new TSUI.UI.Label();
                    newLabel6.Text("Visit Google.co.uk!");
                    newLabel6.Link("http://www.google.co.uk");
                    newLabel6.RelativeLayoutOn();
                    StackPanel1_Row5.Children.Add(newLabel6);

                    var StackPanel1_Row6 = (this.StackPanel1.Rows.ElementAt(5));
                    var newLabel7 = new TSUI.UI.Label();
                    newLabel7.HTML("<span style=\"color:#F00\">A label with HTML set.</span>");
                    newLabel7.RelativeLayoutOn();
                    StackPanel1_Row6.Children.Add(newLabel7);

                    var StackPanel1_Row7 = (this.StackPanel1.Rows.ElementAt(6));
                    for (var i = 0; i < 3; i++) {
                        var newImageBox = new TSUI.UI.ImageBox("http://rack.0.mshcdn.com/media/ZgkyMDEyLzEyLzA0L2I1L3doZXJlZG9nb29nLmJoTi5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/4931e287/304/where-do-google-doodles-come-from--ff2932470c.jpg", "Google Images Logo");
                        newImageBox.Width(new TSUI.UI.CSSNumber(200));
                        newImageBox.Height(new TSUI.UI.CSSNumber(100));
                        newImageBox.RelativeLayoutOn();
                        if (i == 1) {
                            newImageBox.NavigateToOnClick("http://www.google.co.uk");
                        }
                        if (i == 2) {
                            newImageBox.NavigateToOnClick(newImageBox.Source());
                            newImageBox.Enabled(false);
                        }
                        StackPanel1_Row7.Children.Add(newImageBox);
                    }

                    var StackPanel1_Row8 = (this.StackPanel1.Rows.ElementAt(7));
                    for (var i = 0; i < 3; i++) {
                        var newImageBox2 = new TSUI.UI.CanvasBox();
                        newImageBox2.Width(new TSUI.UI.CSSNumber(200));
                        newImageBox2.Height(new TSUI.UI.CSSNumber(100));
                        newImageBox2.Source("http://rack.0.mshcdn.com/media/ZgkyMDEyLzEyLzA0L2I1L3doZXJlZG9nb29nLmJoTi5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/4931e287/304/where-do-google-doodles-come-from--ff2932470c.jpg");
                        newImageBox2.RelativeLayoutOn();
                        if (i == 1) {
                            newImageBox2.NavigateToOnClick("http://www.google.co.uk");
                        }
                        if (i == 2) {
                            newImageBox2.NavigateToOnClick(newImageBox2.Source());
                            newImageBox2.Enabled(false);
                        }
                        if (i == 0 || i == 2) {
                            var context = newImageBox2.Context();
                            context.clearRect(0, 0, context.canvas.width, context.canvas.height);
                            var grad = context.createLinearGradient(0, 0, context.canvas.width, context.canvas.height);
                            grad.addColorStop(0, "#000");
                            grad.addColorStop(1, "#FFF");
                            context.fillStyle = grad;
                            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
                        }
                        StackPanel1_Row8.Children.Add(newImageBox2);
                    }

                    var StackPanel1_Row9 = (this.StackPanel1.Rows.ElementAt(8));
                    for (var i = 0; i < 3; i++) {
                        var newImageBox3 = new TSUI.UI.SVGBox("SVG/Circle.svg");
                        newImageBox3.Width(new TSUI.UI.CSSNumber(200));
                        newImageBox3.Height(new TSUI.UI.CSSNumber(100));
                        newImageBox3.RelativeLayoutOn();
                        if (i == 1) {
                            newImageBox3.NavigateToOnClick("http://www.google.co.uk");
                        }
                        if (i == 2) {
                            newImageBox3.NavigateToOnClick(newImageBox3.Source());
                            newImageBox3.Enabled(false);
                        }
                        StackPanel1_Row9.Children.Add(newImageBox3);
                    }

                    var StackPanel1_Row10 = (this.StackPanel1.Rows.ElementAt(9));
                    for (var i = 0; i < 3; i++) {
                        var newTrackBar3 = new TSUI.UI.TrackBar();
                        newTrackBar3.RelativeLayoutOn();
                        if (i == 0) {
                            newTrackBar3.Divisions(5);
                        } else if (i == 1) {
                            newTrackBar3.Mode(TSUI.UI.TrackBarModes.Continuous);
                        } else if (i == 2) {
                            newTrackBar3.Enabled(false);
                        }
                        StackPanel1_Row10.Children.Add(newTrackBar3);
                    }

                    var StackPanel1_Row11 = (this.StackPanel1.Rows.ElementAt(10));
                    var theListBox = null;
                    for (var j = 0; j < 3; j++) {
                        var newListBox = new TSUI.UI.ListBox();
                        newListBox.RelativeLayoutOn();
                        if (j == 1) {
                            for (var i = 0; i < 5; i++) {
                                newListBox.Items.Add(new TSUI.UI.ListItem("List Item " + i.toString(), null));
                            }

                            theListBox = newListBox;
                        } else if (j == 2) {
                            newListBox.Enabled(false);
                        }
                        newListBox.OnSelectedIndexChange.Attach(new TSUI.Events.SelectedIndexChangeEventHandler(this.AList_SelectedIndexChanged, this));
                        StackPanel1_Row11.Children.Add(newListBox);
                    }

                    this.StackPanel3 = new TSUI.UI.StackPanel();
                    this.StackPanel3.Top(new TSUI.UI.CSSNumber(330));
                    this.StackPanel3.Width(new TSUI.UI.CSSNumber(48, "%"));
                    this.StackPanel3.Left(new TSUI.UI.CSSNumber(25));
                    this.StackPanel3.MinWidth(new TSUI.UI.CSSNumber(200));
                    var StackPanel3_Row1 = new TSUI.UI.StackPanelRow();
                    this.StackPanel3.Rows.Add(StackPanel3_Row1);
                    var StackPanel3_Row2 = new TSUI.UI.StackPanelRow();
                    this.StackPanel3.Rows.Add(StackPanel3_Row2);
                    var StackPanel3_Row3 = new TSUI.UI.StackPanelRow();
                    this.StackPanel3.Rows.Add(StackPanel3_Row3);
                    var StackPanel3_Row4 = new TSUI.UI.StackPanelRow();
                    this.StackPanel3.Rows.Add(StackPanel3_Row4);
                    var StackPanel3_Row5 = new TSUI.UI.StackPanelRow();
                    this.StackPanel3.Rows.Add(StackPanel3_Row5);
                    var StackPanel3_Row6 = new TSUI.UI.StackPanelRow();
                    this.StackPanel3.Rows.Add(StackPanel3_Row6);
                    var StackPanel3_Row7 = new TSUI.UI.StackPanelRow();
                    this.StackPanel3.Rows.Add(StackPanel3_Row7);
                    var StackPanel3_Row8 = new TSUI.UI.StackPanelRow();
                    this.StackPanel3.Rows.Add(StackPanel3_Row8);
                    var StackPanel3_Row9 = new TSUI.UI.StackPanelRow();
                    this.StackPanel3.Rows.Add(StackPanel3_Row9);
                    this.SplitContainer2.Panel1.Children.Add(this.StackPanel3);

                    for (var i = 0; i < 5; i++) {
                        var newCheckBox = new TSUI.UI.CheckBox((i % 2) === 0);
                        newCheckBox.RelativeLayoutOn();
                        newCheckBox.Text("Check box " + i.toString());
                        newCheckBox.TextAlign((i % 2) === 0 ? TSUI.UI.TextAlignments.Left : TSUI.UI.TextAlignments.Right);
                        if (i < 2) {
                            newCheckBox.Enabled(false);
                        }
                        newCheckBox.OnCheckedChange.Attach(new TSUI.Events.CheckedChangeEventHandler(this.ACheckBox_CheckedChange, this));
                        StackPanel3_Row1.Children.Add(newCheckBox);
                    }

                    for (var i = 0; i < 5; i++) {
                        var newRadioButton = new TSUI.UI.RadioButton((i % 2) === 0);
                        newRadioButton.RelativeLayoutOn();
                        newRadioButton.Text("Radio button " + i.toString());
                        newRadioButton.TextAlign((i % 2) === 0 ? TSUI.UI.TextAlignments.Left : TSUI.UI.TextAlignments.Right);
                        newRadioButton.Group("Group1");
                        if (i < 2) {
                            newRadioButton.Enabled(false);
                        }
                        newRadioButton.OnCheckedChange.Attach(new TSUI.Events.CheckedChangeEventHandler(this.ARadioButton_CheckedChange, this));
                        StackPanel3_Row2.Children.Add(newRadioButton);
                    }
                    for (var i = 0; i < 5; i++) {
                        var newToggleButton = new TSUI.UI.ToggleButton((i % 2) === 0);
                        newToggleButton.RelativeLayoutOn();
                        if (i < 2) {
                            newToggleButton.Enabled(false);
                        }
                        newToggleButton.OnCheckedChange.Attach(new TSUI.Events.CheckedChangeEventHandler(this.AToggleButton_CheckedChange, this));
                        StackPanel3_Row3.Children.Add(newToggleButton);
                    }

                    for (var i = 0; i < 3; i++) {
                        var newTextBox = new TSUI.UI.TextBox();
                        newTextBox.RelativeLayoutOn();
                        newTextBox.MaxLength((i + 1) * 10);
                        if (i == 0) {
                            newTextBox.Masked(true);
                        }
                        if (i == 2) {
                            newTextBox.Enabled(false);
                        }
                        newTextBox.OnTextChange.Attach(new TSUI.Events.TextChangeEventHandler(this.ATextBox_TextChange, this));
                        StackPanel3_Row4.Children.Add(newTextBox);
                    }

                    var theDropDownBox = null;
                    for (var j = 0; j < 3; j++) {
                        var newDropDownBox = new TSUI.UI.DropDownBox();
                        newDropDownBox.RelativeLayoutOn();
                        if (j == 1) {
                            for (var i = 0; i < 5; i++) {
                                newDropDownBox.Items.Add(new TSUI.UI.ListItem("Drop Item " + i.toString(), null));
                            }
                            theDropDownBox = newDropDownBox;
                        } else if (j == 2) {
                            newDropDownBox.Enabled(false);
                        }
                        newDropDownBox.OnSelectedIndexChange.Attach(new TSUI.Events.SelectedIndexChangeEventHandler(this.ADropDown_SelectedIndexChanged, this));
                        StackPanel3_Row5.Children.Add(newDropDownBox);
                    }

                    for (var j = 0; j < 3; j++) {
                        var newNumericUpDown = new TSUI.UI.NumericUpDown();
                        newNumericUpDown.RelativeLayoutOn();
                        if (j == 0) {
                            newNumericUpDown.DecimalPlaces(5);
                            newNumericUpDown.Increment(0.05);
                            newNumericUpDown.Min(-0.15);
                            newNumericUpDown.Max(2.55);
                        } else if (j == 1) {
                            newNumericUpDown.DecimalPlaces(-1);
                        } else if (j == 2) {
                            newNumericUpDown.Enabled(false);
                        }
                        newNumericUpDown.OnValueChange.Attach(new TSUI.Events.ValueChangeEventHandler(this.ANumericUpDown_ValueChange, this));
                        StackPanel3_Row6.Children.Add(newNumericUpDown);
                    }

                    for (var j = 0; j < 3; j++) {
                        var newMultilineTextBox = new TSUI.UI.MultilineTextBox();
                        newMultilineTextBox.RelativeLayoutOn();
                        if (j == 0) {
                            newMultilineTextBox.MaxLength(25);
                        } else if (j == 2) {
                            newMultilineTextBox.Enabled(false);
                        }
                        StackPanel3_Row7.Children.Add(newMultilineTextBox);
                    }

                    for (var j = 0; j < 4; j++) {
                        var newProgressSpinner = new TSUI.UI.ProgressSpinner(TSUI.UI.ProgressSpinnerTypes.Horizontal);
                        newProgressSpinner.RelativeLayoutOn();
                        if (j == 0 || j == 1) {
                            newProgressSpinner.Type(TSUI.UI.ProgressSpinnerTypes.Circular);
                            if (j == 1) {
                                newProgressSpinner.Reverse(true);
                            }
                        } else if (j == 2) {
                            newProgressSpinner.Type(TSUI.UI.ProgressSpinnerTypes.Horizontal);
                        } else if (j == 3) {
                            newProgressSpinner.Type(TSUI.UI.ProgressSpinnerTypes.Vertical);
                        }
                        StackPanel3_Row8.Children.Add(newProgressSpinner);
                    }

                    for (var j = 0; j < 4; j++) {
                        var newProgressBar = new TSUI.UI.ProgressBar(TSUI.UI.ProgressBarTypes.Horizontal);
                        newProgressBar.Progress(50 + ((j + 1) * 12.5));
                        newProgressBar.RelativeLayoutOn();
                        if (j == 0 || j == 1) {
                            newProgressBar.Type(TSUI.UI.ProgressBarTypes.Circular);
                            if (j == 1) {
                                newProgressBar.Reverse(true);
                            }
                        } else if (j == 2) {
                            newProgressBar.Type(TSUI.UI.ProgressBarTypes.Horizontal);
                            newProgressBar.ShowText(false);
                        } else if (j == 3) {
                            newProgressBar.Type(TSUI.UI.ProgressBarTypes.Vertical);
                        }
                        StackPanel3_Row9.Children.Add(newProgressBar);
                    }

                    while (ButtonNum < 15) {
                        var Button1 = new TSUI.UI.Button();
                        Button1.Text("A Button " + ButtonNum.toString());
                        Button1.Left(new TSUI.UI.CSSNumber(ButtonStartTop.Value + ((ButtonNum % 5) * ButtonHeight.Value) + ((ButtonNum % 5) * ButtonMargin)));
                        Button1.Top(new TSUI.UI.CSSNumber(15));
                        Button1.Width(ButtonWidth);
                        Button1.Height(ButtonHeight);
                        this.SplitContainer2.Panel2.Children.Add(Button1);
                        ButtonNum++;

                        Button1.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.AButton_Clicked, this));
                        if (ButtonNum % 2 == 0) {
                            Button1.Enabled(false);
                        }
                    }

                    for (var i = 0; i < 5; i++) {
                        theDropDownBox.Items.Add(new TSUI.UI.ListItem("Drop Item " + (i + 5).toString(), null));
                    }

                    for (var i = 0; i < 5; i++) {
                        theListBox.Items.Add(new TSUI.UI.ListItem("List Item " + (i + 5).toString(), null));
                    }
                }
                MainWindow.prototype.ConstructDOM = function (parent) {
                    _super.prototype.ConstructDOM.call(this, parent);

                    this.Width(new TSUI.UI.CSSNumber(100, "%"));
                    this.Height(new TSUI.UI.CSSNumber(100, "%"));

                    this.SplitContainer1.MainSplitterGrip.SplitterDistance((this.SplitContainer1.Panel1.MinWidth().Value / this.SplitContainer1.ActualWidth()) * 100);
                    this.SplitContainer2.MainSplitterGrip.SplitterDistance(100 - ((this.SplitContainer2.Panel2.MinHeight().Value / this.SplitContainer2.ActualWidth()) * 100));
                };

                MainWindow.prototype.AButton_Clicked = function (eventArgs) {
                    var buttonText = (eventArgs.Sender).Text();
                    var message = "You clicked " + buttonText + "!";
                    var words = LoremIpsum.split(" ");
                    var x = parseInt(buttonText[buttonText.length - 1], 10) % 5;
                    for (var i = 0; i < x * 10 && i < words.length; i++) {
                        message += " " + words[i];
                    }
                    var NewWindow = new TSUI.UI.MessageBox("Hello world!", message);
                    NewWindow.ConstructDOM(this._rootElement);
                    NewWindow.PositionCenterParent(this);
                    NewWindow.Show();
                };

                MainWindow.prototype.ACheckBox_CheckedChange = function (eventArgs) {
                    var NewWindow = new TSUI.UI.Notification("You toggled a check box!");
                    NewWindow.OnClose.Attach(new TSUI.Events.CloseEventHandler(this.NewWindow_Close, this));
                    this.Children.Add(NewWindow);
                    NewWindow.ShowFor(3);
                };
                MainWindow.prototype.ARadioButton_CheckedChange = function (eventArgs) {
                    if ((eventArgs.Sender).Checked()) {
                        var NewWindow = new TSUI.UI.Notification("You toggled a radio button!");
                        NewWindow.OnClose.Attach(new TSUI.Events.CloseEventHandler(this.NewWindow_Close, this));
                        this.Children.Add(NewWindow);
                        NewWindow.ShowFor(3);
                    }
                };
                MainWindow.prototype.AToggleButton_CheckedChange = function (eventArgs) {
                    var NewWindow = new TSUI.UI.Notification("You toggled a toggle button!");
                    NewWindow.OnClose.Attach(new TSUI.Events.CloseEventHandler(this.NewWindow_Close, this));
                    this.Children.Add(NewWindow);
                    NewWindow.ShowFor(3);
                };
                MainWindow.prototype.NewWindow_Close = function (eventArgs) {
                    eventArgs.Sender.DestroyDOM();
                };

                MainWindow.prototype.ATextBox_TextChange = function (eventArgs) {
                    var sender = (eventArgs.Sender);
                    if (this.ATextBox_TextChange_MsgBox === null) {
                        this.ATextBox_TextChange_MsgBox = new TSUI.UI.MessageBox("Text Changed", sender.Text());
                        this.ATextBox_TextChange_MsgBox.ConstructDOM(this._rootElement);
                        this.ATextBox_TextChange_MsgBox.PositionCenterParent(this);
                        this.ATextBox_TextChange_MsgBox.OnClose.Attach(new TSUI.Events.CloseEventHandler(this.ATextBox_TextChange_MsgBox_Closed, this));
                        this.ATextBox_TextChange_MsgBox.Show();
                    } else {
                        this.ATextBox_TextChange_MsgBox.Text(sender.Text());
                    }

                    if (sender.Text().length >= sender.MaxLength()) {
                        sender.Enabled(false);
                    }
                };
                MainWindow.prototype.ATextBox_TextChange_MsgBox_Closed = function (eventArgs) {
                    this.ATextBox_TextChange_MsgBox = null;
                };

                MainWindow.prototype.ADropDown_SelectedIndexChanged = function (eventArgs) {
                    var sender = (eventArgs.Sender);
                    var text = "Selected index: " + sender.SelectedIndex();
                    if (this.ADropDown_SelectedIndexChanged_Notif === null) {
                        this.ADropDown_SelectedIndexChanged_Notif = new TSUI.UI.Notification(text);
                        this.Children.Add(this.ADropDown_SelectedIndexChanged_Notif);
                    } else {
                        this.ADropDown_SelectedIndexChanged_Notif.Text(text);
                    }
                    this.ADropDown_SelectedIndexChanged_Notif.ShowFor(10);
                };

                MainWindow.prototype.ANumericUpDown_ValueChange = function (eventArgs) {
                    var sender = (eventArgs.Sender);
                    if (this.ANumericUpDown_ValueChange_Notif === null) {
                        this.ANumericUpDown_ValueChange_Notif = new TSUI.UI.Notification(sender.Value().toString(10));
                        this.Children.Add(this.ANumericUpDown_ValueChange_Notif);
                    } else {
                        this.ANumericUpDown_ValueChange_Notif.Text(sender.Value().toString(10));
                    }
                    this.ANumericUpDown_ValueChange_Notif.ShowFor(3);
                };

                MainWindow.prototype.AList_SelectedIndexChanged = function (eventArgs) {
                    var sender = (eventArgs.Sender);
                    var text = "Selected index: " + sender.SelectedIndex() + "\n" + "Text: " + sender.Items.ElementAt(sender.SelectedIndex()).Text();
                    if (this.AList_SelectedIndexChanged_Notif === null) {
                        this.AList_SelectedIndexChanged_Notif = new TSUI.UI.Notification(text);
                        this.Children.Add(this.AList_SelectedIndexChanged_Notif);
                    } else {
                        this.AList_SelectedIndexChanged_Notif.Text(text);
                    }
                    this.AList_SelectedIndexChanged_Notif.ShowFor(10);
                };
                return MainWindow;
            })(TSUI.UI.Window);
            var MobileMainWindow = (function (_super) {
                __extends(MobileMainWindow, _super);
                function MobileMainWindow() {
                    _super.call(this);

                    this.MinWidth(new TSUI.UI.CSSNumber(100, "%"));
                    this.MinHeight(new TSUI.UI.CSSNumber(100, "%"));
                    this.MaxWidth(new TSUI.UI.CSSNumber(100, "%"));
                    this.MaxHeight(new TSUI.UI.CSSNumber(100, "%"));

                    this.Title("Mobile Demo");

                    this.ResizeEnabled(false);
                    this.DragEnabled(false);

                    this.CloseButton.Visible(false);

                    this.StackPanel = new TSUI.UI.StackPanel();
                    this.StackPanel.Top(new TSUI.UI.CSSNumber(10));
                    this.StackPanel.Bottom(new TSUI.UI.CSSNumber(10));
                    this.StackPanel.Left(new TSUI.UI.CSSNumber(10));
                    this.StackPanel.Right(new TSUI.UI.CSSNumber(10));
                    this.StackPanel.ApplyStyle("overflow", "auto");
                    this.ContentPanel.Children.Add(this.StackPanel);

                    this.StackPanel_Row1 = new TSUI.UI.StackPanelRow();
                    this.StackPanel_Row1.ApplyStyle("text-align", "center");
                    this.StackPanel.Rows.Add(this.StackPanel_Row1);
                    this.StackPanel_Row2 = new TSUI.UI.StackPanelRow();
                    this.StackPanel.Rows.Add(this.StackPanel_Row2);
                    this.StackPanel_Row3 = new TSUI.UI.StackPanelRow();
                    this.StackPanel.Rows.Add(this.StackPanel_Row3);
                    this.StackPanel_Row4 = new TSUI.UI.StackPanelRow();
                    this.StackPanel.Rows.Add(this.StackPanel_Row4);
                    this.StackPanel_Row5 = new TSUI.UI.StackPanelRow();
                    this.StackPanel_Row5.ApplyStyle("text-align", "center");
                    this.StackPanel.Rows.Add(this.StackPanel_Row5);
                    this.StackPanel_Row6 = new TSUI.UI.StackPanelRow();
                    this.StackPanel.Rows.Add(this.StackPanel_Row6);
                    this.StackPanel_Row7 = new TSUI.UI.StackPanelRow();
                    this.StackPanel.Rows.Add(this.StackPanel_Row7);
                    this.StackPanel_Row8 = new TSUI.UI.StackPanelRow();
                    this.StackPanel.Rows.Add(this.StackPanel_Row8);
                    this.StackPanel_Row9 = new TSUI.UI.StackPanelRow();
                    this.StackPanel.Rows.Add(this.StackPanel_Row9);
                    this.StackPanel_Row10 = new TSUI.UI.StackPanelRow();
                    this.StackPanel.Rows.Add(this.StackPanel_Row10);
                    this.StackPanel_Row11 = new TSUI.UI.StackPanelRow();
                    this.StackPanel.Rows.Add(this.StackPanel_Row11);
                    this.StackPanel_Row12 = new TSUI.UI.StackPanelRow();
                    this.StackPanel.Rows.Add(this.StackPanel_Row12);

                    this.MessageBoxDemoButton = new TSUI.UI.Button();
                    this.MessageBoxDemoButton.RelativeLayoutOn();
                    this.MessageBoxDemoButton.Text("Message");
                    this.MessageBoxDemoButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.MessageBoxDemoButton_Click, this));
                    this.StackPanel_Row1.Children.Add(this.MessageBoxDemoButton);

                    this.NotificationDemoButton = new TSUI.UI.Button();
                    this.NotificationDemoButton.RelativeLayoutOn();
                    this.NotificationDemoButton.Text("Notification");
                    this.NotificationDemoButton.Width(new TSUI.UI.CSSNumber(160));
                    this.NotificationDemoButton.OnClick.Attach(new TSUI.Events.ClickEventHandler(this.NotificationDemoButton_Click, this));
                    this.StackPanel_Row1.Children.Add(this.NotificationDemoButton);

                    var newCheckBox = new TSUI.UI.CheckBox();
                    newCheckBox.Text("A check box");
                    newCheckBox.RelativeLayoutOn();
                    this.StackPanel_Row2.Children.Add(newCheckBox);

                    var newRadioButton = new TSUI.UI.RadioButton();
                    newRadioButton.Text("Radion button 1");
                    newRadioButton.Group("Group1");
                    newRadioButton.Checked(true);
                    newRadioButton.RelativeLayoutOn();
                    this.StackPanel_Row3.Children.Add(newRadioButton);
                    newRadioButton = new TSUI.UI.RadioButton();
                    newRadioButton.Text("Radion button 2");
                    newRadioButton.Group("Group1");
                    newRadioButton.RelativeLayoutOn();
                    this.StackPanel_Row3.Children.Add(newRadioButton);

                    var newToggleButton = new TSUI.UI.ToggleButton();
                    newToggleButton.Checked(true);
                    newToggleButton.RelativeLayoutOn();
                    this.StackPanel_Row4.Children.Add(newToggleButton);
                    newToggleButton = new TSUI.UI.ToggleButton();
                    newToggleButton.RelativeLayoutOn();
                    this.StackPanel_Row4.Children.Add(newToggleButton);

                    var newProgressBar = new TSUI.UI.ProgressBar(TSUI.UI.ProgressBarTypes.Circular);
                    newProgressBar.Progress(50);
                    newProgressBar.RelativeLayoutOn();
                    this.StackPanel_Row5.Children.Add(newProgressBar);

                    var newNumericUpDown = new TSUI.UI.NumericUpDown();
                    newNumericUpDown.Value(10);
                    newNumericUpDown.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newNumericUpDown.RelativeLayoutOn();
                    this.StackPanel_Row6.Children.Add(newNumericUpDown);

                    var newExpandable = new TSUI.UI.Expandable();
                    newExpandable.Title("Expandable 1");

                    var newLabel = new TSUI.UI.Label("This is a text label. Below is an image box with a Google logo:");
                    newLabel.RelativeLayoutOn();
                    newLabel.Width(new TSUI.UI.CSSNumber(100, "%"));
                    newExpandable.ContentPanel.Children.Add(newLabel);

                    var newImageBox = new TSUI.UI.ImageBox("http://rack.0.mshcdn.com/media/ZgkyMDEyLzEyLzA0L2I1L3doZXJlZG9nb29nLmJoTi5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/4931e287/304/where-do-google-doodles-come-from--ff2932470c.jpg");
                    newImageBox.RelativeLayoutOn();
                    newImageBox.Width(new TSUI.UI.CSSNumber(200));
                    newExpandable.ContentPanel.Children.Add(newImageBox);

                    newExpandable.ContentPanel.RelativeLayoutOn();
                    this.StackPanel_Row7.Children.Add(newExpandable);

                    var newListBox = new TSUI.UI.ListBox();
                    newListBox.RelativeLayoutOn();
                    newListBox.Width(new TSUI.UI.CSSNumber(100, "%"));
                    for (var i = 0; i < 10; i++) {
                        var newListItem = new TSUI.UI.ListItem("List Item " + i.toString(), "");
                        newListBox.Items.Add(newListItem);
                    }
                    this.StackPanel_Row8.Children.Add(newListBox);

                    var newTrackBar = new TSUI.UI.TrackBar();
                    newTrackBar.RelativeLayoutOn();
                    newTrackBar.Width(new TSUI.UI.CSSNumber(100, "%"));
                    this.StackPanel_Row9.Children.Add(newTrackBar);

                    var newTabControl = new TSUI.UI.TabControl();
                    newTabControl.RelativeLayoutOn();
                    newTabControl.Height(new TSUI.UI.CSSNumber($(window).height() - 120));
                    newTabControl.Width(new TSUI.UI.CSSNumber(100, "%"));
                    for (var i = 0; i < 5; i++) {
                        var newTab = new TSUI.UI.Tab();
                        newTab.Name("Tab " + i.toString());
                        newTab.ApplyStyle("background-color", "rgb(0, " + Math.round((114 / 10) * i).toString() + ", " + Math.round((198 / 10) * i).toString() + ")");
                        newTabControl.Tabs.Add(newTab);
                    }
                    this.StackPanel_Row11.Children.Add(newTabControl);

                    var newDropDownBox = new TSUI.UI.DropDownBox();
                    newDropDownBox.RelativeLayoutOn();
                    newDropDownBox.Width(new TSUI.UI.CSSNumber(100, "%"));
                    for (var i = 0; i < 20; i++) {
                        var newDropDownItem = new TSUI.UI.ListItem("Drop Down Item " + i.toString(), "");
                        newDropDownBox.Items.Add(newDropDownItem);
                    }
                    this.StackPanel_Row10.Children.Add(newDropDownBox);

                    var newProgressSpinner = new TSUI.UI.ProgressSpinner();
                    newProgressSpinner.RelativeLayoutOn();
                    newProgressSpinner.Width(new TSUI.UI.CSSNumber(100, "%"));
                    this.StackPanel_Row12.Children.Add(newProgressSpinner);

                    for (var i = 5; i < 10; i++) {
                        var newTab = new TSUI.UI.Tab();
                        newTab.Name("Tab " + i.toString());
                        newTab.ApplyStyle("background-color", "rgb(0, " + Math.round((114 / 10) * i).toString() + ", " + Math.round((198 / 10) * i).toString() + ")");
                        newTabControl.Tabs.Add(newTab);
                    }
                }
                MobileMainWindow.prototype.MessageBoxDemoButton_Click = function (eventArgs) {
                    var newMsgBox = new TSUI.UI.MessageBox("Demo", "This is a demonstration message box. It contains no text of any real interest - it just demo's a message box.");
                    newMsgBox.ConstructDOM(this._rootElement);
                    newMsgBox.PositionCenterParent(this);
                    newMsgBox.Show();
                };

                MobileMainWindow.prototype.NotificationDemoButton_Click = function (eventArgs) {
                    var newNotif = new TSUI.UI.Notification("This is a demonstration notification.");
                    this.Children.Add(newNotif);
                    newNotif.Right(new TSUI.UI.CSSNumber(0));
                    newNotif.OnClose.Attach(new TSUI.Events.CloseEventHandler(function () {
                        this.DestroyDOM();
                    }, newNotif));
                    newNotif.ShowFor(3);
                };
                return MobileMainWindow;
            })(TSUI.UI.Window);

            TilesWindow.AboutPage_Para1 = "Welcome to Slide My Way's Typescript UI! This user interface library is custom written by Slide My Way in the style of Windows 8 with the aim of making Slide My Way easier to use, more maintainable, more extensible and ultimately, a sleeker product for you to use.";
        })(Apps.Testing || (Apps.Testing = {}));
        var Testing = Apps.Testing;
    })(TSUI.Apps || (TSUI.Apps = {}));
    var Apps = TSUI.Apps;
})(TSUI || (TSUI = {}));

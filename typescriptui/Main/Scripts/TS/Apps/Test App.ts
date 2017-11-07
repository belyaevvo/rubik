/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Lib/Build/IApp.d.ts" />
/// <reference path="../Lib/Build/Animation/AnimationRefs.d.ts" />
/// <reference path="../Lib/Build/UI/UIRefs.d.ts" />
/// <reference path="../Definitions/jquery.d.ts" />

module TSUI.Apps.Testing
{
    var LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra felis nec erat fermentum malesuada gravida odio pulvinar. Fusce elit massa, hendrerit sit amet vehicula vitae, porta in lorem. Suspendisse volutpat eros sed nibh elementum tincidunt. Nam nulla nibh, dapibus.";
    
    export class TestApp implements IApp
    {
        private MainContainer: JQuery = null;
        private StartArgs: string[] = null;

        private TheTilesWindow: TilesWindow;
        private TheMainWindow: IMainWindow;
        private TheSplashScreen: ISplashScreen;
        
        private isMobile: boolean = false;

        Run(args: string[] = [], container: JQuery = $("body")): void
        {
            this.StartArgs = args;
            this.MainContainer = container;

            this.MainContainer.addClass("TestApp"); 

            this.isMobile = window.location.hash === "#mobile";
                
            Animation.AppWindowAnimator.UseCanvasRenderIfSensible = !this.isMobile;

            if (this.isMobile)
            {
                this.TheSplashScreen = new MobileSplashScreen();
                this.TheSplashScreen.ConstructDOM(this.MainContainer);
                
                var width = Math.min($(window).width(), 580);
                this.TheSplashScreen.Width(new UI.CSSNumber(width));
                this.TheSplashScreen.Left(new UI.CSSNumber(($(window).width() - width) / 2));
                this.TheSplashScreen.Height(new UI.CSSNumber($(window).height()));
            }
            else
            {
                this.TheSplashScreen = new MainSplashScreen();
                this.TheSplashScreen.ConstructDOM(this.MainContainer);
                var topPx = ($(window).height() - this.TheSplashScreen.Height().Value) / 2;
                this.TheSplashScreen.Top(new UI.CSSNumber((topPx / $(window).height()) * 100, "%"));
                var leftPx = ($(window).width() - this.TheSplashScreen.Width().Value) / 2;
                this.TheSplashScreen.Left(new UI.CSSNumber((leftPx / $(window).width()) * 100, "%"));
            }

            var _this = this;
            this.TheSplashScreen.Show(function ()
            {
                _this.Init();
                    
                //_this.TheMainWindow.Enabled(false);

                //if (_this.isMobile)
                //{
                //    _this.TheMainWindow.Width(new UI.CSSNumber($(window).width()));
                //    _this.TheMainWindow.Height(new UI.CSSNumber($(window).height()));
                //}

                _this.TheTilesWindow.Enabled(false);

                _this.TheTilesWindow.Width(new UI.CSSNumber($(window).width()));
                _this.TheTilesWindow.Height(new UI.CSSNumber($(window).height()));
                    
                setTimeout(function ()
                {
                    //var animator = new Animation.AppWindowAnimator();
                    //var loadStartTime = Date.now();
                    //animator.PrepareHTML2CanvasForAnimation(_this.TheMainWindow, function ()
                    //{
                    //    var loadEndTime = Date.now();

                    //    setTimeout(function ()
                    //    {
                    //        _this.TheSplashScreen.Hide(function ()
                    //        {
                    //            _this.TheMainWindow.Show(function ()
                    //            {
                    //                _this.TheMainWindow.Enabled(true);
                    //                _this.TheSplashScreen.DestroyDOM();
                    //            }, animator);
                    //        });
                    //    }, Math.max(3000 - (loadEndTime - loadStartTime), 1000));
                    //});

                    var animator = new Animation.FadeAnimator();
                    var loadStartTime = Date.now();
                    //animator.PrepareHTML2CanvasForAnimation(_this.TheTilesWindow, function ()
                    //{
                        var loadEndTime = Date.now();

                        setTimeout(function ()
                        {
                            _this.TheSplashScreen.Hide(function ()
                            {
                                _this.TheTilesWindow.Show(function ()
                                {
                                    _this.TheTilesWindow.Enabled(true);
                                    _this.TheSplashScreen.DestroyDOM();
                                }, animator);
                            });
                        }, Math.max(3000 - (loadEndTime - loadStartTime), 1000));
                    //});

                }, 500);
            }, new Animation.Animator());

                
        }

        Init(): void
        {
            this.InitTilesWindow();
            this.InitMainWindow();
        }

        InitTilesWindow(): void
        {
            //if (this.isMobile)
            //{
            //    this.TheTilesWindow = new MobileMainWindow();
            //}
            //else
            //{
                this.TheTilesWindow = new TilesWindow();
            //}
            this.TheTilesWindow.ConstructDOM(this.MainContainer);
        }
        InitMainWindow(): void
        {
            if (this.isMobile)
            {
                this.TheMainWindow = new MobileMainWindow();
            }
            else
            {
                this.TheMainWindow = new MainWindow();
            }
            this.TheMainWindow.ConstructDOM(this.MainContainer);
        }

        TestAppWindowShowHide(): void
        {
            var _this = this;

            _this.TheMainWindow.Hide(function ()
            {
                setTimeout(function ()
                {
                    _this.TheMainWindow.Show();
                }, 500);
            });
        }
    }

    interface ISplashScreen extends UI.IWindow
    {
    }
    class MainSplashScreen extends UI.Window implements ISplashScreen
    {
        constructor()
        {
            super();

            this.ID("SplashScreen");

            this.MainTitleBar.Visible(false);
            this.CloseButton.Visible(false);
            this.ResizeEnabled(false);
            this.DragEnabled(false);

            this.Width(new UI.CSSNumber(500));
            this.Height(new UI.CSSNumber(350));
                
            var LogoImage = new UI.ImageBox("/Images/SMW-Logo-Film-Strip-Style-1.png", "Slide My Way");
            LogoImage.AddClass("Logo");
            this.Children.Add(LogoImage);
                
            var NameLabel = new UI.Label();
            NameLabel.AddClass("NameLabel");
            NameLabel.Text("TypeScript UI");
            this.Children.Add(NameLabel);

            var ProgressSpinner = new UI.ProgressSpinner();
            ProgressSpinner.AnimationDuration(2000);
            this.Children.Add(ProgressSpinner);
        }
    }
    class MobileSplashScreen extends UI.Window implements ISplashScreen
    {
        constructor()
        {
            super();

            this.ID("SplashScreen");
            this.AddClass("Mobile");

            this.MainTitleBar.Visible(false);
            this.CloseButton.Visible(false);
            this.ResizeEnabled(false);
            this.DragEnabled(false);
                
            this.Top(new UI.CSSNumber(0));
            this.Left(new UI.CSSNumber(0));

            var LogoImage = new UI.ImageBox("/Images/SMW-Logo-Film-Strip-Style-1.png", "Slide My Way");
            LogoImage.AddClass("Logo");
            this.Children.Add(LogoImage);
                
            var NameLabel = new UI.Label();
            NameLabel.AddClass("NameLabel");
            NameLabel.Text("TypeScript UI");
            this.Children.Add(NameLabel);

            var ProgressSpinner = new UI.ProgressSpinner();
            ProgressSpinner.AnimationDuration(2000);
            this.Children.Add(ProgressSpinner);
        }
    }

    class TilesWindow extends UI.Window
    {
        TilesContainer: UI.IPanel;

        AboutTile: UI.ITile;
        AboutPage: UI.IPageWindow;

        static AboutPage_Para1 = "";

        constructor()
        {
            super();

            this.ID("TilesWindow");

            this.Title("Typescript UI");

            this.DragEnabled(false);
            this.ResizeEnabled(false);

            this.Top(new UI.CSSNumber(0));
            this.Left(new UI.CSSNumber(0));

            this.TilesContainer = new UI.Panel();
            this.TilesContainer.AddClass("TilesContainer");
            this.ContentPanel.Children.Add(this.TilesContainer);

            var tileBgUrls = [
                "http://www.yourbeautifulphotography.com/extras/squareprofile.jpg",
                "http://www.yourbeautifulphotography.com/extras/squareprofile4.jpg",
                "http://www.yourbeautifulphotography.com/extras/rainbowovercastlews.jpg",
                "http://2.bp.blogspot.com/_U_ERG5dylLw/SaaIqOplpnI/AAAAAAAACV0/IfH3Wnht24E/s400/gladwell.jpg",
                "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRaPrH45SmgdWpnm3wH_r2lzqlcHzPKLAmONyrIMVRoDibtxn2d"
            ];

            for (var i = 0; i < 9; i++)
            {
                var newTile = new UI.Tile(UI.TileSizes.Small, UI.TileTypes.Iconic);
                newTile.RelativeLayoutOn();
                newTile.Counter.Text("10");
                newTile.NameLabel.Text("About");
                newTile.IconBox.Source(UI.TileIcons.About);
                newTile.TextLabel.Text("Find out more...");
                newTile.OnClick.Attach(new Events.ClickEventHandler(this.AboutTile_OnClick, this));

                if (i > 5)
                {
                    for (var j = 0; j < tileBgUrls.length; j++)
                    {
                        var newBg = new UI.TileBackground();
                        newBg.Source(tileBgUrls[j]);
                        newTile.Backgrounds.Add(newBg);
                    }
                }
                switch (i)
                {
                    case 0:
                        newTile.Size(UI.TileSizes.Small);
                        newTile.Type(UI.TileTypes.Flip);
                        break;
                    case 1:
                        newTile.Size(UI.TileSizes.Medium);
                        newTile.Type(UI.TileTypes.Flip);
                        break;
                    case 2:
                        newTile.Size(UI.TileSizes.Large);
                        newTile.Type(UI.TileTypes.Flip);
                        break;
                    case 3:
                        newTile.Size(UI.TileSizes.Small);
                        newTile.Type(UI.TileTypes.Iconic);
                        break;
                    case 4:
                        newTile.Size(UI.TileSizes.Medium);
                        newTile.Type(UI.TileTypes.Iconic);
                        break;
                    case 5:
                        newTile.Size(UI.TileSizes.Large);
                        newTile.Type(UI.TileTypes.Iconic);
                        break;
                    case 6:
                        newTile.Size(UI.TileSizes.Small);
                        newTile.Type(UI.TileTypes.Cycle);
                        break;
                    case 7:
                        newTile.Size(UI.TileSizes.Medium);
                        newTile.Type(UI.TileTypes.Cycle);
                        break;
                    case 8:
                        newTile.Size(UI.TileSizes.Large);
                        newTile.Type(UI.TileTypes.Cycle);
                        break;
                }

                this.TilesContainer.Children.Add(newTile);
            }

            this.AboutPage = new UI.PageWindow();

            var AboutPage_ContentStack = new UI.StackPanel();
            this.AboutPage.ContentPanel.Children.Add(AboutPage_ContentStack);

            var AboutPage_TitleRow = new UI.StackPanelRow();
            AboutPage_ContentStack.Rows.Add(AboutPage_TitleRow);
            this.AboutPage.ID("AboutPage");
            var AboutPage_TitleLabel = new UI.Label("About");
            AboutPage_TitleLabel.AddClass("Title");
            AboutPage_TitleLabel.RelativeLayoutOn();
            AboutPage_TitleRow.Children.Add(AboutPage_TitleLabel);

            var AboutPage_Para1Row = new UI.StackPanelRow();
            AboutPage_ContentStack.Rows.Add(AboutPage_Para1Row);
            this.AboutPage.ID("AboutPage");
            var AboutPage_Para1Label = new UI.Label(TilesWindow.AboutPage_Para1);
            AboutPage_Para1Label.AddClass("Para1");
            AboutPage_Para1Label.RelativeLayoutOn();
            AboutPage_Para1Row.Children.Add(AboutPage_Para1Label);

            this.AboutPage.ConstructDOM($("body"));
        }

        AboutTile_OnClick(eventArgs: Events.ClickEventArgs)
        {
            this.AboutPage.PositionCenterWindow();
            this.AboutPage.Show();
        }
    }

    interface IMainWindow extends UI.IWindow
    {
    }
    class MainWindow extends UI.Window implements IMainWindow
    {
        SplitContainer1: UI.ISplitContainer;
        SplitContainer2: UI.ISplitContainer;
            
        StackPanel1: UI.StackPanel;
        StackPanel2: UI.StackPanel;
        StackPanel3: UI.StackPanel;

        Expandable1: UI.IExpandable;
        Expandable2: UI.IExpandable;
        Expandable3: UI.IExpandable;
        Expandable4: UI.IExpandable;

        constructor()
        {
            super();
                
            this.MinWidth(new UI.CSSNumber(725));
            this.MinHeight(new UI.CSSNumber(645));
            this.MaxWidth(new UI.CSSNumber(100, "%"));
            this.MaxHeight(new UI.CSSNumber(100, "%"));
                
            this.Title("Desktop Demo");
            //this.ResizeEnabled(false);
            //this.DragEnabled(false);

            this.SplitContainer1 = new UI.SplitContainer();
            this.ContentPanel.Children.Add(this.SplitContainer1);
            this.SplitContainer1.Panel1.MinWidth(new UI.CSSNumber(130));
            this.SplitContainer1.Panel2.MinWidth(new UI.CSSNumber(590));

            this.SplitContainer2 = new UI.SplitContainer();
            this.SplitContainer2.Orientation(UI.SplitterGrip_Orientations.Horizontal);
            this.SplitContainer1.Panel2.Children.Add(this.SplitContainer2);
            this.SplitContainer2.Panel1.MinHeight(new UI.CSSNumber(330));
            this.SplitContainer2.Panel2.MinHeight(new UI.CSSNumber(130));

            var ButtonWidth = new UI.CSSNumber(100);
            var ButtonHeight = new UI.CSSNumber(100);
            var ButtonMargin = 15;
            var ButtonStartTop = new UI.CSSNumber(ButtonMargin);
            var ButtonLeft = new UI.CSSNumber(ButtonMargin);
            var ButtonNum = 0;

            while (ButtonNum < 5)
            {
                var Button1 = new UI.Button();
                Button1.Text("A Button " + ButtonNum.toString());
                Button1.Top(new UI.CSSNumber(ButtonStartTop.Value + ((ButtonNum % 5) * ButtonHeight.Value) + ((ButtonNum % 5) * ButtonMargin)));
                Button1.Left(new UI.CSSNumber(15));
                Button1.Width(ButtonWidth);
                Button1.Height(ButtonHeight);
                this.SplitContainer1.Panel1.Children.Add(Button1);
                ButtonNum++;

                Button1.OnClick.Attach(new Events.ClickEventHandler(this.AButton_Clicked, this));
                if (ButtonNum % 2 == 0)
                {
                    Button1.Enabled(false);
                }
            }

            this.StackPanel2 = new UI.StackPanel();
            this.StackPanel2.Orientation(UI.StackPanelOrientations.Horizontal);
            this.StackPanel2.Top(new UI.CSSNumber(ButtonStartTop.Value - 5));
            this.StackPanel2.Left(new UI.CSSNumber(ButtonLeft.Value + ButtonWidth.Value + ButtonMargin));
            this.StackPanel2.Width(new UI.CSSNumber((ButtonWidth.Value + 15) * 2));
            this.StackPanel2.Height(new UI.CSSNumber((ButtonHeight.Value + 15) * 3));
            this.SplitContainer1.Panel1.Children.Add(this.StackPanel2);
            this.StackPanel2.Rows.Add(new UI.StackPanelRow());
            this.StackPanel2.Rows.Add(new UI.StackPanelRow());
                
            var StackPanel2_Row1 = <UI.StackPanelRow>this.StackPanel2.Rows.ElementAt(0);
            StackPanel2_Row1.Width(new UI.CSSNumber(ButtonWidth.Value + 15));
            for (var i = 0; i < 2; i++)
            {
                var newButton = new UI.Button();
                newButton.Text("Hrz Stk Pan Btn " + i.toString());
                newButton.RelativeLayoutOn();
                newButton.Width(ButtonWidth);
                newButton.Height(ButtonHeight);
                if (i != 0)
                {
                    newButton.ApplyStyle("margin-top", "0px");
                }
                newButton.ApplyStyle("margin-bottom", "15px");
                newButton.OnClick.Attach(new Events.ClickEventHandler(this.AButton_Clicked, this));
                StackPanel2_Row1.Children.Add(newButton);
            }
            var StackPanel2_Row2 = <UI.StackPanelRow>this.StackPanel2.Rows.ElementAt(1);
            StackPanel2_Row2.Width(new UI.CSSNumber(ButtonWidth.Value + 10));
            for (var i = 3; i < 6; i++)
            {
                var newButton = new UI.Button();
                newButton.Text("Hrz Stk Pan Btn " + i.toString());
                newButton.RelativeLayoutOn();
                newButton.Width(ButtonWidth);
                newButton.Height(ButtonHeight);
                if (i != 3)
                {
                    newButton.ApplyStyle("margin-top", "0px");
                }
                newButton.ApplyStyle("margin-bottom", "15px");
                newButton.OnClick.Attach(new Events.ClickEventHandler(this.AButton_Clicked, this));
                StackPanel2_Row2.Children.Add(newButton);
            }

            this.Expandable1 = new UI.Expandable(true);
            this.Expandable1.Title("Expandable 1");
            this.Expandable1.Width(new UI.CSSNumber(48, "%"));
            this.Expandable1.Top(new UI.CSSNumber(25));
            this.Expandable1.Left(new UI.CSSNumber(25));
            this.Expandable1.MinWidth(new UI.CSSNumber(200));
            this.Expandable1.ContentPanel.Children.Add(new UI.Label("Test label"));
            this.Expandable1.ContentPanel.Height(new UI.CSSNumber(70));
            this.SplitContainer2.Panel1.Children.Add(this.Expandable1);
            
            this.Expandable2 = new UI.Expandable(true);
            this.Expandable2.Title("Expandable 2");
            this.Expandable2.Width(new UI.CSSNumber(48, "%"));
            this.Expandable2.Top(new UI.CSSNumber(175));
            this.Expandable2.Left(new UI.CSSNumber(25));
            this.Expandable2.MinWidth(new UI.CSSNumber(200));
            var newLabel2 = new UI.Label(LoremIpsum);
            this.Expandable2.ContentPanel.Children.Add(newLabel2);
            this.Expandable2.ContentPanel.Height(new UI.CSSNumber(70));
            this.SplitContainer2.Panel1.Children.Add(this.Expandable2);

                
            this.StackPanel1 = new UI.StackPanel();
            this.StackPanel1.Top(new UI.CSSNumber(25));
            this.StackPanel1.Left(new UI.CSSNumber(52, "%"));
            this.StackPanel1.Width(new UI.CSSNumber(47, "%"));
            this.SplitContainer2.Panel1.Children.Add(this.StackPanel1);

            this.StackPanel1.Rows.Add(new UI.StackPanelRow());
            this.StackPanel1.Rows.Add(new UI.StackPanelRow());
            this.StackPanel1.Rows.Add(new UI.StackPanelRow());
            this.StackPanel1.Rows.Add(new UI.StackPanelRow());
            this.StackPanel1.Rows.Add(new UI.StackPanelRow());
            this.StackPanel1.Rows.Add(new UI.StackPanelRow());
            this.StackPanel1.Rows.Add(new UI.StackPanelRow());
            this.StackPanel1.Rows.Add(new UI.StackPanelRow());
            this.StackPanel1.Rows.Add(new UI.StackPanelRow());
            this.StackPanel1.Rows.Add(new UI.StackPanelRow());
            this.StackPanel1.Rows.Add(new UI.StackPanelRow());

            this.Expandable3 = new UI.Expandable();
            this.Expandable3.Title("Expandable 3");
            var newLabel3 = new UI.Label(LoremIpsum);
            this.Expandable3.ContentPanel.Children.Add(newLabel3);
            this.Expandable3.ContentPanel.Height(new UI.CSSNumber(70));
            (<UI.StackPanelRow>this.StackPanel1.Rows.ElementAt(0)).Children.Add(this.Expandable3);
                
            this.Expandable4 = new UI.Expandable();
            this.Expandable4.Title("Expandable 4");
            var newLabel4 = new UI.Label(LoremIpsum);
            newLabel4.RelativeLayoutOn();
            this.Expandable4.ContentPanel.Children.Add(newLabel4);
            for (var i = 0; i < 5; i++)
            {
                var newButton = new UI.Button();
                newButton.Text("Exp Button " + i.toString());
                newButton.RelativeLayoutOn();
                newButton.Width(ButtonWidth);
                newButton.Height(ButtonHeight);
                newButton.OnClick.Attach(new Events.ClickEventHandler(this.AButton_Clicked, this));
                this.Expandable4.ContentPanel.Children.Add(newButton);
            }
            this.Expandable4.ContentPanel.RelativeLayoutOn();
            (<UI.StackPanelRow>this.StackPanel1.Rows.ElementAt(1)).Children.Add(this.Expandable4);
                
            var StackPanel1_Row3 = (<UI.StackPanelRow>this.StackPanel1.Rows.ElementAt(2));
            while (ButtonNum < 10)
            {
                var Button1 = new UI.Button();
                Button1.Text("A Button " + ButtonNum.toString());
                Button1.RelativeLayoutOn();
                Button1.Width(ButtonWidth);
                Button1.Height(ButtonHeight);
                StackPanel1_Row3.Children.Add(Button1);
                ButtonNum++;

                Button1.OnClick.Attach(new Events.ClickEventHandler(this.AButton_Clicked, this));
                if (ButtonNum % 2 == 0)
                {
                    Button1.Enabled(false);
                }
            }
                
            var StackPanel1_Row4 = (<UI.StackPanelRow>this.StackPanel1.Rows.ElementAt(3));
            var innerPanel = new UI.Panel();
            StackPanel1_Row4.Children.Add(innerPanel);
            var newLabel5 = new UI.Label(LoremIpsum);
            newLabel5.Width(new UI.CSSNumber(0, "", true));
            newLabel5.Height(new UI.CSSNumber(0, "", true));
            newLabel5.Top(new UI.CSSNumber(15));
            newLabel5.Bottom(new UI.CSSNumber(15));
            newLabel5.Left(new UI.CSSNumber(15));
            newLabel5.Right(new UI.CSSNumber(15));
                
            innerPanel.Height(new UI.CSSNumber(100));
            innerPanel.ApplyStyle("border", "1px solid #000");
            innerPanel.Children.Add(newLabel5);

            var StackPanel1_Row5 = (<UI.StackPanelRow>this.StackPanel1.Rows.ElementAt(4));
            var newLabel6 = new UI.Label();
            newLabel6.Text("Visit Google.co.uk!");
            newLabel6.Link("http://www.google.co.uk");
            newLabel6.RelativeLayoutOn();
            StackPanel1_Row5.Children.Add(newLabel6);

            var StackPanel1_Row6 = (<UI.StackPanelRow>this.StackPanel1.Rows.ElementAt(5));
            var newLabel7 = new UI.Label();
            newLabel7.HTML("<span style=\"color:#F00\">A label with HTML set.</span>");
            newLabel7.RelativeLayoutOn();
            StackPanel1_Row6.Children.Add(newLabel7);

            var StackPanel1_Row7 = (<UI.StackPanelRow>this.StackPanel1.Rows.ElementAt(6));
            for (var i = 0; i < 3; i++)
            {
                var newImageBox = new UI.ImageBox("http://rack.0.mshcdn.com/media/ZgkyMDEyLzEyLzA0L2I1L3doZXJlZG9nb29nLmJoTi5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/4931e287/304/where-do-google-doodles-come-from--ff2932470c.jpg", "Google Images Logo");
                newImageBox.Width(new UI.CSSNumber(200));
                newImageBox.Height(new UI.CSSNumber(100));
                newImageBox.RelativeLayoutOn();
                if (i == 1)
                {
                    newImageBox.NavigateToOnClick("http://www.google.co.uk");
                }
                if (i == 2)
                {
                    newImageBox.NavigateToOnClick(newImageBox.Source());
                    newImageBox.Enabled(false);
                }
                StackPanel1_Row7.Children.Add(newImageBox);
            }
                
            var StackPanel1_Row8 = (<UI.StackPanelRow>this.StackPanel1.Rows.ElementAt(7));
            for (var i = 0; i < 3; i++)
            {
                var newImageBox2 = new UI.CanvasBox();
                newImageBox2.Width(new UI.CSSNumber(200));
                newImageBox2.Height(new UI.CSSNumber(100));
                newImageBox2.Source("http://rack.0.mshcdn.com/media/ZgkyMDEyLzEyLzA0L2I1L3doZXJlZG9nb29nLmJoTi5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/4931e287/304/where-do-google-doodles-come-from--ff2932470c.jpg");
                newImageBox2.RelativeLayoutOn();
                if (i == 1)
                {
                    newImageBox2.NavigateToOnClick("http://www.google.co.uk");
                }
                if (i == 2)
                {
                    newImageBox2.NavigateToOnClick(newImageBox2.Source());
                    newImageBox2.Enabled(false);
                }
                if (i == 0 || i == 2)
                {
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
                
            var StackPanel1_Row9 = (<UI.StackPanelRow>this.StackPanel1.Rows.ElementAt(8));
            for (var i = 0; i < 3; i++)
            {
                var newImageBox3 = new UI.SVGBox("SVG/Circle.svg");
                newImageBox3.Width(new UI.CSSNumber(200));
                newImageBox3.Height(new UI.CSSNumber(100));
                newImageBox3.RelativeLayoutOn();
                if (i == 1)
                {
                    newImageBox3.NavigateToOnClick("http://www.google.co.uk");
                }
                if (i == 2)
                {
                    newImageBox3.NavigateToOnClick(newImageBox3.Source());
                    newImageBox3.Enabled(false);
                }
                StackPanel1_Row9.Children.Add(newImageBox3);
            }
                
            var StackPanel1_Row10 = (<UI.StackPanelRow>this.StackPanel1.Rows.ElementAt(9));
            for (var i = 0; i < 3; i++)
            {
                var newTrackBar3 = new UI.TrackBar();
                newTrackBar3.RelativeLayoutOn();
                if (i == 0)
                {
                    newTrackBar3.Divisions(5);
                }
                else if (i == 1)
                {
                    newTrackBar3.Mode(UI.TrackBarModes.Continuous);
                }
                else if(i == 2)
                {
                    newTrackBar3.Enabled(false);
                }
                StackPanel1_Row10.Children.Add(newTrackBar3);
            }

            var StackPanel1_Row11 = (<UI.StackPanelRow>this.StackPanel1.Rows.ElementAt(10));
            var theListBox = null;
            for (var j = 0; j < 3; j++)
            {
                var newListBox = new UI.ListBox();
                newListBox.RelativeLayoutOn();
                if (j == 1)
                {
                    for (var i = 0; i < 5; i++)
                    {
                        newListBox.Items.Add(new UI.ListItem("List Item " + i.toString(), null));
                    }

                    theListBox = newListBox;
                }
                else if (j == 2)
                {
                    newListBox.Enabled(false);
                }
                newListBox.OnSelectedIndexChange.Attach(new Events.SelectedIndexChangeEventHandler(this.AList_SelectedIndexChanged, this));
                StackPanel1_Row11.Children.Add(newListBox);
            }

            this.StackPanel3 = new UI.StackPanel();
            this.StackPanel3.Top(new UI.CSSNumber(330));
            this.StackPanel3.Width(new UI.CSSNumber(48, "%"));
            this.StackPanel3.Left(new UI.CSSNumber(25));
            this.StackPanel3.MinWidth(new UI.CSSNumber(200));
            var StackPanel3_Row1 = new UI.StackPanelRow();
            this.StackPanel3.Rows.Add(StackPanel3_Row1);
            var StackPanel3_Row2 = new UI.StackPanelRow();
            this.StackPanel3.Rows.Add(StackPanel3_Row2);
            var StackPanel3_Row3 = new UI.StackPanelRow();
            this.StackPanel3.Rows.Add(StackPanel3_Row3);
            var StackPanel3_Row4 = new UI.StackPanelRow();
            this.StackPanel3.Rows.Add(StackPanel3_Row4);
            var StackPanel3_Row5 = new UI.StackPanelRow();
            this.StackPanel3.Rows.Add(StackPanel3_Row5);
            var StackPanel3_Row6 = new UI.StackPanelRow();
            this.StackPanel3.Rows.Add(StackPanel3_Row6);
            var StackPanel3_Row7 = new UI.StackPanelRow();
            this.StackPanel3.Rows.Add(StackPanel3_Row7);
            var StackPanel3_Row8 = new UI.StackPanelRow();
            this.StackPanel3.Rows.Add(StackPanel3_Row8);
            var StackPanel3_Row9 = new UI.StackPanelRow();
            this.StackPanel3.Rows.Add(StackPanel3_Row9);
            this.SplitContainer2.Panel1.Children.Add(this.StackPanel3);
                
            for (var i = 0; i < 5; i++)
            {
                var newCheckBox = new UI.CheckBox((i % 2) === 0);
                newCheckBox.RelativeLayoutOn();
                newCheckBox.Text("Check box " + i.toString());
                newCheckBox.TextAlign((i % 2) === 0 ? UI.TextAlignments.Left : UI.TextAlignments.Right);
                if (i < 2)
                {
                    newCheckBox.Enabled(false);
                }
                newCheckBox.OnCheckedChange.Attach(new Events.CheckedChangeEventHandler(this.ACheckBox_CheckedChange, this));
                StackPanel3_Row1.Children.Add(newCheckBox);
            }
                
            for (var i = 0; i < 5; i++)
            {
                var newRadioButton = new UI.RadioButton((i % 2) === 0);
                newRadioButton.RelativeLayoutOn();
                newRadioButton.Text("Radio button " + i.toString());
                newRadioButton.TextAlign((i % 2) === 0 ? UI.TextAlignments.Left : UI.TextAlignments.Right);
                newRadioButton.Group("Group1");
                if (i < 2)
                {
                    newRadioButton.Enabled(false);
                }
                newRadioButton.OnCheckedChange.Attach(new Events.CheckedChangeEventHandler(this.ARadioButton_CheckedChange, this));
                StackPanel3_Row2.Children.Add(newRadioButton);
            }
            for (var i = 0; i < 5; i++)
            {
                var newToggleButton = new UI.ToggleButton((i % 2) === 0);
                newToggleButton.RelativeLayoutOn();
                if (i < 2)
                {
                    newToggleButton.Enabled(false);
                }
                newToggleButton.OnCheckedChange.Attach(new Events.CheckedChangeEventHandler(this.AToggleButton_CheckedChange, this));
                StackPanel3_Row3.Children.Add(newToggleButton);
            }

            for (var i = 0; i < 3; i++)
            {
                var newTextBox = new UI.TextBox();
                newTextBox.RelativeLayoutOn();
                newTextBox.MaxLength((i + 1) * 10);
                if (i == 0)
                {
                    newTextBox.Masked(true);
                }
                if (i == 2)
                {
                    newTextBox.Enabled(false);
                }
                newTextBox.OnTextChange.Attach(new Events.TextChangeEventHandler(this.ATextBox_TextChange, this));
                StackPanel3_Row4.Children.Add(newTextBox);
            }

            var theDropDownBox = null;
            for (var j = 0; j < 3; j++)
            {
                var newDropDownBox = new UI.DropDownBox();
                newDropDownBox.RelativeLayoutOn();
                if (j == 1)
                {
                    for (var i = 0; i < 5; i++)
                    {
                        newDropDownBox.Items.Add(new UI.ListItem("Drop Item " + i.toString(), null));
                    }
                    theDropDownBox = newDropDownBox;
                }
                else if (j == 2)
                {
                    newDropDownBox.Enabled(false);
                }
                newDropDownBox.OnSelectedIndexChange.Attach(new Events.SelectedIndexChangeEventHandler(this.ADropDown_SelectedIndexChanged, this));
                StackPanel3_Row5.Children.Add(newDropDownBox);
            }
                
            for (var j = 0; j < 3; j++)
            {
                var newNumericUpDown = new UI.NumericUpDown();
                newNumericUpDown.RelativeLayoutOn();
                if (j == 0)
                {
                    newNumericUpDown.DecimalPlaces(5);
                    newNumericUpDown.Increment(0.05);
                    newNumericUpDown.Min(-0.15);
                    newNumericUpDown.Max(2.55);
                }
                else if (j == 1)
                {
                    newNumericUpDown.DecimalPlaces(-1);
                }
                else if (j == 2)
                {
                    newNumericUpDown.Enabled(false);
                }
                newNumericUpDown.OnValueChange.Attach(new Events.ValueChangeEventHandler(this.ANumericUpDown_ValueChange, this));
                StackPanel3_Row6.Children.Add(newNumericUpDown);
            }
                
            for (var j = 0; j < 3; j++)
            {
                var newMultilineTextBox = new UI.MultilineTextBox();
                newMultilineTextBox.RelativeLayoutOn();
                if (j == 0)
                {
                    newMultilineTextBox.MaxLength(25);
                }
                else if (j == 2)
                {
                    newMultilineTextBox.Enabled(false);
                }
                StackPanel3_Row7.Children.Add(newMultilineTextBox);
            }
                
            for (var j = 0; j < 4; j++)
            {
                var newProgressSpinner = new UI.ProgressSpinner(UI.ProgressSpinnerTypes.Horizontal);
                newProgressSpinner.RelativeLayoutOn();
                if (j == 0 || j == 1)
                {
                    newProgressSpinner.Type(UI.ProgressSpinnerTypes.Circular);
                    if (j == 1)
                    {
                        newProgressSpinner.Reverse(true);
                    }
                }
                else if (j == 2)
                {
                    newProgressSpinner.Type(UI.ProgressSpinnerTypes.Horizontal);
                }
                else if (j == 3)
                {
                    newProgressSpinner.Type(UI.ProgressSpinnerTypes.Vertical);
                }
                StackPanel3_Row8.Children.Add(newProgressSpinner);
            }
                
            for (var j = 0; j < 4; j++)
            {
                var newProgressBar = new UI.ProgressBar(UI.ProgressBarTypes.Horizontal);
                newProgressBar.Progress(50 + ((j + 1) * 12.5));
                newProgressBar.RelativeLayoutOn();
                if (j == 0 || j == 1)
                {
                    newProgressBar.Type(UI.ProgressBarTypes.Circular);
                    if (j == 1)
                    {
                        newProgressBar.Reverse(true);
                    }
                }
                else if (j == 2)
                {
                    newProgressBar.Type(UI.ProgressBarTypes.Horizontal);
                    newProgressBar.ShowText(false);
                }
                else if (j == 3)
                {
                    newProgressBar.Type(UI.ProgressBarTypes.Vertical);
                }
                StackPanel3_Row9.Children.Add(newProgressBar);
            }

                

            while (ButtonNum < 15)
            {
                var Button1 = new UI.Button();
                Button1.Text("A Button " + ButtonNum.toString());
                Button1.Left(new UI.CSSNumber(ButtonStartTop.Value + ((ButtonNum % 5) * ButtonHeight.Value) + ((ButtonNum % 5) * ButtonMargin)));
                Button1.Top(new UI.CSSNumber(15));
                Button1.Width(ButtonWidth);
                Button1.Height(ButtonHeight);
                this.SplitContainer2.Panel2.Children.Add(Button1);
                ButtonNum++;

                Button1.OnClick.Attach(new Events.ClickEventHandler(this.AButton_Clicked, this));
                if (ButtonNum % 2 == 0)
                {
                    Button1.Enabled(false);
                }
            }

            for (var i = 0; i < 5; i++)
            {
                theDropDownBox.Items.Add(new UI.ListItem("Drop Item " + (i + 5).toString(), null));
            }
                
            for (var i = 0; i < 5; i++)
            {
                theListBox.Items.Add(new UI.ListItem("List Item " + (i + 5).toString(), null));
            }
        }

        ConstructDOM(parent: JQuery): void
        {
            super.ConstructDOM(parent);

            this.Width(new UI.CSSNumber(100, "%"));
            this.Height(new UI.CSSNumber(100, "%"));
            
            this.SplitContainer1.MainSplitterGrip.SplitterDistance((this.SplitContainer1.Panel1.MinWidth().Value / this.SplitContainer1.ActualWidth()) * 100);
            this.SplitContainer2.MainSplitterGrip.SplitterDistance(100 - ((this.SplitContainer2.Panel2.MinHeight().Value / this.SplitContainer2.ActualWidth()) * 100));
        }

        AButton_Clicked(eventArgs: Events.ClickEventArgs)
        {
            var buttonText = (<UI.Button>eventArgs.Sender).Text();
            var message = "You clicked " + buttonText + "!";
            var words = LoremIpsum.split(" ");
            var x = parseInt(buttonText[buttonText.length - 1], 10) % 5;
            for (var i = 0; i < x * 10 && i < words.length; i++)
            {
                message += " " + words[i];
            }
            var NewWindow = new UI.MessageBox("Hello world!", message);
            NewWindow.ConstructDOM(this._rootElement);
            NewWindow.PositionCenterParent(this);
            NewWindow.Show();
        }

        ACheckBox_CheckedChange(eventArgs: Events.CheckedChangeEventArgs)
        {
            var NewWindow = new UI.Notification("You toggled a check box!");
            NewWindow.OnClose.Attach(new Events.CloseEventHandler(this.NewWindow_Close, this));
            this.Children.Add(NewWindow);
            NewWindow.ShowFor(3);
        }
        ARadioButton_CheckedChange(eventArgs: Events.CheckedChangeEventArgs)
        {
            if ((<UI.IRadioButton>eventArgs.Sender).Checked())
            {
                var NewWindow = new UI.Notification("You toggled a radio button!");
                NewWindow.OnClose.Attach(new Events.CloseEventHandler(this.NewWindow_Close, this));
                this.Children.Add(NewWindow);
                NewWindow.ShowFor(3);
            }
        }
        AToggleButton_CheckedChange(eventArgs: Events.CheckedChangeEventArgs)
        {
            var NewWindow = new UI.Notification("You toggled a toggle button!");
            NewWindow.OnClose.Attach(new Events.CloseEventHandler(this.NewWindow_Close, this));
            this.Children.Add(NewWindow);
            NewWindow.ShowFor(3);
        }
        NewWindow_Close(eventArgs: Events.CloseEventArgs)
        {
            eventArgs.Sender.DestroyDOM();
        }

        private ATextBox_TextChange_MsgBox: UI.IMessageBox = null;
        ATextBox_TextChange(eventArgs: Events.TextChangeEventArgs)
        {
            var sender = (<UI.ITextBox>eventArgs.Sender);
            if (this.ATextBox_TextChange_MsgBox === null)
            {
                this.ATextBox_TextChange_MsgBox = new UI.MessageBox("Text Changed", sender.Text());
                this.ATextBox_TextChange_MsgBox.ConstructDOM(this._rootElement);
                this.ATextBox_TextChange_MsgBox.PositionCenterParent(this);
                this.ATextBox_TextChange_MsgBox.OnClose.Attach(new Events.CloseEventHandler(this.ATextBox_TextChange_MsgBox_Closed, this));
                this.ATextBox_TextChange_MsgBox.Show();
            }
            else
            {
                this.ATextBox_TextChange_MsgBox.Text(sender.Text());
            }

            if (sender.Text().length >= sender.MaxLength())
            {
                sender.Enabled(false);
            }
        }
        ATextBox_TextChange_MsgBox_Closed(eventArgs: Events.CloseEventArgs)
        {
            this.ATextBox_TextChange_MsgBox = null;
        }

        private ADropDown_SelectedIndexChanged_Notif: UI.INotification = null;
        ADropDown_SelectedIndexChanged(eventArgs: Events.SelectedIndexChangeEventArgs)
        {
            var sender = (<UI.IDropDownBox>eventArgs.Sender);
            var text = "Selected index: " + sender.SelectedIndex();
            if (this.ADropDown_SelectedIndexChanged_Notif === null)
            {
                this.ADropDown_SelectedIndexChanged_Notif = new UI.Notification(text);
                this.Children.Add(this.ADropDown_SelectedIndexChanged_Notif);
            }
            else
            {
                this.ADropDown_SelectedIndexChanged_Notif.Text(text);
            }
            this.ADropDown_SelectedIndexChanged_Notif.ShowFor(10);
        }

        private ANumericUpDown_ValueChange_Notif: UI.INotification = null;
        ANumericUpDown_ValueChange(eventArgs: Events.ValueChangeEventArgs)
        {
            var sender = (<UI.INumericUpDown>eventArgs.Sender);
            if (this.ANumericUpDown_ValueChange_Notif === null)
            {
                this.ANumericUpDown_ValueChange_Notif = new UI.Notification(sender.Value().toString(10));
                this.Children.Add(this.ANumericUpDown_ValueChange_Notif);
            }
            else
            {
                this.ANumericUpDown_ValueChange_Notif.Text(sender.Value().toString(10));
            }
            this.ANumericUpDown_ValueChange_Notif.ShowFor(3);
        }

        private AList_SelectedIndexChanged_Notif: UI.INotification = null;
        AList_SelectedIndexChanged(eventArgs: Events.SelectedIndexChangeEventArgs)
        {
            var sender = (<UI.IListBox>eventArgs.Sender);
            var text = "Selected index: " + sender.SelectedIndex() + "\n" +
                        "Text: " + sender.Items.ElementAt(sender.SelectedIndex()).Text();
            if (this.AList_SelectedIndexChanged_Notif === null)
            {
                this.AList_SelectedIndexChanged_Notif = new UI.Notification(text);
                this.Children.Add(this.AList_SelectedIndexChanged_Notif);
            }
            else
            {
                this.AList_SelectedIndexChanged_Notif.Text(text);
            }
            this.AList_SelectedIndexChanged_Notif.ShowFor(10);
        }

    }
    class MobileMainWindow extends UI.Window implements IMainWindow
    {
        StackPanel: UI.IStackPanel;
        StackPanel_Row1: UI.IStackPanelRow;
        StackPanel_Row2: UI.IStackPanelRow;
        StackPanel_Row3: UI.IStackPanelRow;
        StackPanel_Row4: UI.IStackPanelRow;
        StackPanel_Row5: UI.IStackPanelRow;
        StackPanel_Row6: UI.IStackPanelRow;
        StackPanel_Row7: UI.IStackPanelRow;
        StackPanel_Row8: UI.IStackPanelRow;
        StackPanel_Row9: UI.IStackPanelRow;
        StackPanel_Row10: UI.IStackPanelRow;
        StackPanel_Row11: UI.IStackPanelRow;
        StackPanel_Row12: UI.IStackPanelRow;
            
        MessageBoxDemoButton: UI.IButton;
        NotificationDemoButton: UI.IButton;

        constructor()
        {
            super();

            this.MinWidth(new UI.CSSNumber(100, "%"));
            this.MinHeight(new UI.CSSNumber(100, "%"));
            this.MaxWidth(new UI.CSSNumber(100, "%"));
            this.MaxHeight(new UI.CSSNumber(100, "%"));

            this.Title("Mobile Demo");

            this.ResizeEnabled(false);
            this.DragEnabled(false);

            this.CloseButton.Visible(false);

            this.StackPanel = new UI.StackPanel();
            this.StackPanel.Top(new UI.CSSNumber(10));
            this.StackPanel.Bottom(new UI.CSSNumber(10));
            this.StackPanel.Left(new UI.CSSNumber(10));
            this.StackPanel.Right(new UI.CSSNumber(10));
            this.StackPanel.ApplyStyle("overflow", "auto");
            this.ContentPanel.Children.Add(this.StackPanel);
                
            this.StackPanel_Row1 = new UI.StackPanelRow();
            this.StackPanel_Row1.ApplyStyle("text-align", "center");
            this.StackPanel.Rows.Add(this.StackPanel_Row1);
            this.StackPanel_Row2 = new UI.StackPanelRow();
            this.StackPanel.Rows.Add(this.StackPanel_Row2);
            this.StackPanel_Row3 = new UI.StackPanelRow();
            this.StackPanel.Rows.Add(this.StackPanel_Row3);
            this.StackPanel_Row4 = new UI.StackPanelRow();
            this.StackPanel.Rows.Add(this.StackPanel_Row4);
            this.StackPanel_Row5 = new UI.StackPanelRow();
            this.StackPanel_Row5.ApplyStyle("text-align", "center");
            this.StackPanel.Rows.Add(this.StackPanel_Row5);
            this.StackPanel_Row6 = new UI.StackPanelRow();
            this.StackPanel.Rows.Add(this.StackPanel_Row6);
            this.StackPanel_Row7 = new UI.StackPanelRow();
            this.StackPanel.Rows.Add(this.StackPanel_Row7);
            this.StackPanel_Row8 = new UI.StackPanelRow();
            this.StackPanel.Rows.Add(this.StackPanel_Row8);
            this.StackPanel_Row9 = new UI.StackPanelRow();
            this.StackPanel.Rows.Add(this.StackPanel_Row9);
            this.StackPanel_Row10 = new UI.StackPanelRow();
            this.StackPanel.Rows.Add(this.StackPanel_Row10);
            this.StackPanel_Row11 = new UI.StackPanelRow();
            this.StackPanel.Rows.Add(this.StackPanel_Row11);
            this.StackPanel_Row12 = new UI.StackPanelRow();
            this.StackPanel.Rows.Add(this.StackPanel_Row12);

            this.MessageBoxDemoButton = new UI.Button();
            this.MessageBoxDemoButton.RelativeLayoutOn();
            this.MessageBoxDemoButton.Text("Message");
            this.MessageBoxDemoButton.OnClick.Attach(new Events.ClickEventHandler(this.MessageBoxDemoButton_Click, this));
            this.StackPanel_Row1.Children.Add(this.MessageBoxDemoButton);
            
            this.NotificationDemoButton = new UI.Button();
            this.NotificationDemoButton.RelativeLayoutOn();
            this.NotificationDemoButton.Text("Notification");
            this.NotificationDemoButton.Width(new UI.CSSNumber(160));
            this.NotificationDemoButton.OnClick.Attach(new Events.ClickEventHandler(this.NotificationDemoButton_Click, this));
            this.StackPanel_Row1.Children.Add(this.NotificationDemoButton);
            
            var newCheckBox = new UI.CheckBox();
            newCheckBox.Text("A check box");
            newCheckBox.RelativeLayoutOn();
            this.StackPanel_Row2.Children.Add(newCheckBox);
                
            var newRadioButton = new UI.RadioButton();
            newRadioButton.Text("Radion button 1");
            newRadioButton.Group("Group1");
            newRadioButton.Checked(true);
            newRadioButton.RelativeLayoutOn();
            this.StackPanel_Row3.Children.Add(newRadioButton);
            newRadioButton = new UI.RadioButton();
            newRadioButton.Text("Radion button 2");
            newRadioButton.Group("Group1");
            newRadioButton.RelativeLayoutOn();
            this.StackPanel_Row3.Children.Add(newRadioButton);

            var newToggleButton = new UI.ToggleButton();
            newToggleButton.Checked(true);
            newToggleButton.RelativeLayoutOn();
            this.StackPanel_Row4.Children.Add(newToggleButton);
            newToggleButton = new UI.ToggleButton();
            newToggleButton.RelativeLayoutOn();
            this.StackPanel_Row4.Children.Add(newToggleButton);
                
            var newProgressBar = new UI.ProgressBar(UI.ProgressBarTypes.Circular);
            newProgressBar.Progress(50);
            newProgressBar.RelativeLayoutOn();
            this.StackPanel_Row5.Children.Add(newProgressBar);
                
            var newNumericUpDown = new UI.NumericUpDown();
            newNumericUpDown.Value(10);
            newNumericUpDown.Width(new UI.CSSNumber(100, "%"));
            newNumericUpDown.RelativeLayoutOn();
            this.StackPanel_Row6.Children.Add(newNumericUpDown);

            var newExpandable = new UI.Expandable();
            newExpandable.Title("Expandable 1");

            var newLabel = new UI.Label("This is a text label. Below is an image box with a Google logo:");
            newLabel.RelativeLayoutOn();
            newLabel.Width(new UI.CSSNumber(100, "%"));
            newExpandable.ContentPanel.Children.Add(newLabel);

            var newImageBox = new UI.ImageBox("http://rack.0.mshcdn.com/media/ZgkyMDEyLzEyLzA0L2I1L3doZXJlZG9nb29nLmJoTi5qcGcKcAl0aHVtYgk5NTB4NTM0IwplCWpwZw/4931e287/304/where-do-google-doodles-come-from--ff2932470c.jpg");
            newImageBox.RelativeLayoutOn();
            newImageBox.Width(new UI.CSSNumber(200));
            newExpandable.ContentPanel.Children.Add(newImageBox);

            newExpandable.ContentPanel.RelativeLayoutOn();
            this.StackPanel_Row7.Children.Add(newExpandable);

            var newListBox = new UI.ListBox();
            newListBox.RelativeLayoutOn();
            newListBox.Width(new UI.CSSNumber(100, "%"));
            for (var i = 0; i < 10; i++)
            {
                var newListItem = new UI.ListItem("List Item " + i.toString(), "");
                newListBox.Items.Add(newListItem);
            }
            this.StackPanel_Row8.Children.Add(newListBox);

            var newTrackBar = new UI.TrackBar();
            newTrackBar.RelativeLayoutOn();
            newTrackBar.Width(new UI.CSSNumber(100, "%"));
            this.StackPanel_Row9.Children.Add(newTrackBar);
                
            var newTabControl = new UI.TabControl();
            newTabControl.RelativeLayoutOn();
            newTabControl.Height(new UI.CSSNumber($(window).height() - 120));
            newTabControl.Width(new UI.CSSNumber(100, "%"));
            for (var i = 0; i < 5; i++)
            {
                var newTab = new UI.Tab();
                newTab.Name("Tab " + i.toString());
                newTab.ApplyStyle("background-color", "rgb(0, " + Math.round((114 / 10) * i).toString() + ", " + Math.round((198 / 10) * i).toString() + ")");
                newTabControl.Tabs.Add(newTab);
            }
            this.StackPanel_Row11.Children.Add(newTabControl);
                
            var newDropDownBox = new UI.DropDownBox();
            newDropDownBox.RelativeLayoutOn();
            newDropDownBox.Width(new UI.CSSNumber(100, "%"));
            for (var i = 0; i < 20; i++)
            {
                var newDropDownItem = new UI.ListItem("Drop Down Item " + i.toString(), "");
                newDropDownBox.Items.Add(newDropDownItem);
            }
            this.StackPanel_Row10.Children.Add(newDropDownBox);

            var newProgressSpinner = new UI.ProgressSpinner();
            newProgressSpinner.RelativeLayoutOn();
            newProgressSpinner.Width(new UI.CSSNumber(100, "%"));
            this.StackPanel_Row12.Children.Add(newProgressSpinner);

            for (var i = 5; i < 10; i++)
            {
                var newTab = new UI.Tab();
                newTab.Name("Tab " + i.toString());
                newTab.ApplyStyle("background-color", "rgb(0, " + Math.round((114 / 10) * i).toString() + ", " + Math.round((198 / 10) * i).toString() + ")");
                newTabControl.Tabs.Add(newTab);
            }
        }

        MessageBoxDemoButton_Click(eventArgs: Events.ClickEventArgs)
        {
            var newMsgBox: UI.IMessageBox = new UI.MessageBox("Demo", "This is a demonstration message box. It contains no text of any real interest - it just demo's a message box.");
            newMsgBox.ConstructDOM(this._rootElement);
            newMsgBox.PositionCenterParent(this);
            newMsgBox.Show();
        }
            
        NotificationDemoButton_Click(eventArgs: Events.ClickEventArgs)
        {
            var newNotif: UI.INotification = new UI.Notification("This is a demonstration notification.");
            this.Children.Add(newNotif);
            newNotif.Right(new UI.CSSNumber(0));
            newNotif.OnClose.Attach(new Events.CloseEventHandler(function ()
            {
                this.DestroyDOM();
            }, newNotif));
            newNotif.ShowFor(3);
        }
    }

    TilesWindow.AboutPage_Para1 = "Welcome to Slide My Way's Typescript UI! This user interface library is custom written by Slide My Way in the style of Windows 8 with the aim of making Slide My Way easier to use, more maintainable, more extensible and ultimately, a sleeker product for you to use.";
}
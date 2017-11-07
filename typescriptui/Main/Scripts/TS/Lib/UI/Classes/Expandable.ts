/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Animation/ExpandableAnimator.ts" />
/// <reference path="ToggleIndicator.ts" />
/// <reference path="../Interfaces/IExpandable.d.ts" />
/// <reference path="TitleBar.ts" />
/// <reference path="Panel.ts" />
/// <reference path="Control.ts" />

module TSUI.UI
{
    export class Expandable extends Control implements IExpandable
    {
        MainTitleBar: ITitleBar;
        ContentPanel: IPanel;
        MainToggleIndiciator: IToggleIndicator;

        _Expanded: boolean = false;

        constructor(expanded: boolean = false)
        {
            super();

            this._rootElement.addClass("Expandable");

            this.MainTitleBar = new TitleBar();
            this.Children.Add(this.MainTitleBar);

            this.MainTitleBar.OnClick.Attach(new Events.ClickEventHandler(this._MainTitleBar_Clicked, this));
            
            this.MainToggleIndiciator = new ToggleIndicatorLabel();
            this.MainToggleIndiciator.AddClass("ToggleIndicator");
            this.Children.Add(this.MainToggleIndiciator);
            if (!expanded)
            {
                this.MainToggleIndiciator.SetIndicatorToOff();
                this._rootElement.addClass("Collapsed");
            }
            else
            {
                this.MainToggleIndiciator.SetIndicatorToOn();
            }
            this._Expanded = expanded;

            this.MainToggleIndiciator.Focusable(true);
            this.MainToggleIndiciator.OnClick.Attach(new Events.ClickEventHandler(this._MainTitleBar_Clicked, this));
            
            this.ContentPanel = new Panel();
            this.Children.Add(this.ContentPanel);

            this.Height(new CSSNumber(30));
        }

        ConstructDOM(parent: JQuery, onComplete:()=>void = null)
        {
            var _this = this;
            super.ConstructDOM(parent, function ()
            {
                if (_this._Expanded)
                {
                    _this.Height(new CSSNumber(_this.ContentPanel.Top().Value + _this.ContentPanel.Height().Value + 15));
                    _this.ContentPanel.Enabled(true);
                }
                else
                {
                    _this.Height(new CSSNumber(_this.MainTitleBar.ActualHeight()));
                    _this.ContentPanel.Enabled(false);
                }
                if (onComplete)
                {
                    onComplete();
                }
            });
        }
        
        _MainTitleBar_Clicked(eventArgs: Events.ClickEventArgs)
        {
            this.Toggle();
        }
            
        Title(value?: string): string
        {
            return this.MainTitleBar.Title(value);
        }
        
        Expanded(): boolean
        {
            return this._Expanded;
        }

        Toggle(): void
        {
            if (this._Expanded)
            {
                this.Collapse();
            }
            else
            {
                this.Expand();
            }
        }
        Expand(callback: ()=>void = null, animator: Animation.ExpandableAnimator = new Animation.ExpandableAnimator()): void
        {
            if (!this.Expanded())
            {
                var _this = this;
                this.MainToggleIndiciator.SetIndicatorToOn();
                this._rootElement.removeClass("Collapsed");
                animator.Show(this, function ()
                {
                    if (_this.ContentPanel.HasClass("RelativeLayout"))
                    {
                        _this.ContentPanel.Height(new CSSNumber(_this.Height().Value - 60));
                    }
                    
                    _this.ContentPanel.Enabled(true);
                    
                    _this._Expanded = true;
                    if(callback !== null)
                        callback();
                });
            }
        }
        Collapse(callback: ()=>void = null, animator: Animation.ExpandableAnimator = new Animation.ExpandableAnimator()): void
        {
            if (this.Expanded())
            {
                var _this = this;
                this.MainToggleIndiciator.SetIndicatorToOff();
                this._rootElement.addClass("Collapsed");
                this.ContentPanel.Enabled(false);
                animator.Hide(this, function ()
                {
                    if (_this.ContentPanel.HasClass("RelativeLayout"))
                    {
                        _this.ContentPanel.Height(new CSSNumber(0, "", true));
                    }
                    
                    _this._Expanded = false;
                    if(callback !== null)
                        callback();
                });
            }
        }

        EnableByParent(): void
        {
            super.EnableByParent();
            if (!this._Expanded)
            {
                this.ContentPanel.Enabled(false);
            }
        }
    }
}
/*
Copyright � Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../../Collections/CollectionsRefs.d.ts" />
/// <reference path="../../Animation/IAnimator.d.ts" />
/// <reference path="../CSSNumber.d.ts" />
/// <reference path="../../../Definitions/jquery.d.ts" />
/// <reference path="../../Events/Classes/Events.d.ts" />

declare module TSUI.UI
{
    export interface IControl
    {
        AnimationElement(): JQuery;

        Children: Collections.IList<IControl>;

        OnClick: Events.ClickEvent;
        OnMouseDown: Events.MouseDownEvent;
        OnMouseUp: Events.MouseUpEvent;
        OnMouseMove: Events.MouseMoveEvent;
        OnResize: Events.ResizeEvent;
        OnMove: Events.MoveEvent;
        OnShow: Events.ShowEvent;
        OnHide: Events.HideEvent;
        OnFocus: Events.FocusEvent;
        OnBlur: Events.BlurEvent;
        OnKeyDown: Events.KeyDownEvent;
        OnKeyPress: Events.KeyPressEvent;
        OnKeyUp: Events.KeyUpEvent;

        TargetDocumentFor_MouseUp: bool;
        TargetDocumentFor_MouseMove: bool;

        OptimiseConstructForGraphics: bool;

        DOMConstructed: bool;
        ConstructDOM(parent: JQuery, onComplete?: ()=>void): void;
        DestroyDOM(): void;

        ID(value?: string): string;

        GetStyle(name: string): string;
        ApplyStyle(name: string, value: string): void;
        ApplyStyles(cssProps: any): void;
        AddClass(name: string): void;
        RemoveClass(name: string): void;
        HasClass(name: string): bool;

        BackColor(color?: string): string;
        ForeColor(color?: string): string;

        CSSNumberStyle(style: string, value?: CSSNumber): CSSNumber;

        Width(value?: CSSNumber): CSSNumber;
        Height(value?: CSSNumber): CSSNumber;

        ActualWidth(): number;
        ActualHeight(): number;

        Top(value?: CSSNumber): CSSNumber;
        Bottom(value?: CSSNumber): CSSNumber;
        Left(value?: CSSNumber): CSSNumber;
        Right(value?: CSSNumber): CSSNumber;

        PageTop(): number;
        PageLeft(): number;
        PageBottom(): number;
        PageRight(): number;

        MinWidth(value?: CSSNumber): CSSNumber;
        MinHeight(value?: CSSNumber): CSSNumber;
        MaxWidth(value?: CSSNumber): CSSNumber;
        MaxHeight(value?: CSSNumber): CSSNumber;

        Visible(value?: bool): bool;
        Enabled(value?: bool): bool;
        ActuallyEnabled(): bool;
        Focusable(value?: bool): bool;
        EnableByParent(): void;
        DisableByParent(): void;

        Show(callback?: () => void , animator?: Animation.IAnimator): void;
        Hide(callback?: () => void , animator?: Animation.IAnimator): void;

        EnableSelection(): void;
        DisableSelection(): void;

        Focus(): void;
        Blur(): void;

        InvokeDefaultAction(): void;

        IsRelativeLayout(): bool;
        RelativeLayoutOn(): void;
        RelativeLayoutOff(): void;

        TabIndex(value?: number): number;
    }   
}
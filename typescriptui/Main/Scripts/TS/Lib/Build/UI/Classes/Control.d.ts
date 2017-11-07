/// <reference path="../../Events/Classes/Events.d.ts" />
/// <reference path="../../Collections/CollectionsRefs.d.ts" />
/// <reference path="../CSSNumber.d.ts" />
/// <reference path="../../UI/Interfaces/IControl.d.ts" />
/// <reference path="../../Animation/FadeAnimator.d.ts" />
/// <reference path="../UI Static.d.ts" />
/// <reference path="../../Animation/Animation.d.ts" />
/// <reference path="../../Animation/IAnimator.d.ts" />
/// <reference path="../../../../Definitions/jquery.d.ts" />
declare module TSUI.UI {
    class Control implements UI.IControl {
        public __UID: number;
        public _rootElement: JQuery;
        public AnimationElement(): JQuery;
        public OnClick: TSUI.Events.ClickEvent;
        public OnMouseDown: TSUI.Events.MouseDownEvent;
        public OnMouseUp: TSUI.Events.MouseUpEvent;
        public OnMouseMove: TSUI.Events.MouseMoveEvent;
        public OnResize: TSUI.Events.ResizeEvent;
        public OnMove: TSUI.Events.MoveEvent;
        public OnShow: TSUI.Events.ShowEvent;
        public OnHide: TSUI.Events.HideEvent;
        public OnFocus: TSUI.Events.FocusEvent;
        public OnBlur: TSUI.Events.BlurEvent;
        public OnKeyDown: TSUI.Events.KeyDownEvent;
        public OnKeyPress: TSUI.Events.KeyPressEvent;
        public OnKeyUp: TSUI.Events.KeyUpEvent;
        static OnClickEventName: string;
        static OnMouseDownEventName: string;
        static OnMouseUpEventName: string;
        static OnMouseMoveEventName: string;
        public TargetDocumentFor_MouseUp: boolean;
        public TargetDocumentFor_MouseMove: boolean;
        public Children: TSUI.Collections.IList<UI.IControl>;
        public _Enabled: boolean;
        public OptimiseConstructForGraphics: boolean;
        static OptimiseConstructForGraphics_DelayTime: number;
        constructor();
        public _RestoreThis(jqEvent: JQueryEventObject): any;
        public _OnClickAttached: boolean;
        public _OnOnClickChanged(): void;
        public _OnClick(jqEvent: JQueryEventObject): void;
        public _OnMouseDownAttached: boolean;
        public _OnOnMouseDownChanged(): void;
        public _OnMouseDown(jqEvent: JQueryEventObject): void;
        public _OnMouseUpAttached: boolean;
        public _OnMouseUp_GlobalHandler: TSUI.Events.MouseUpEventHandler;
        public _OnOnMouseUpChanged(): void;
        public _OnMouseUp(jqEvent: JQueryEventObject): void;
        public _OnMouseMoveAttached: boolean;
        public _OnMouseMove_GlobalHandler: TSUI.Events.MouseMoveEventHandler;
        public _OnOnMouseMoveChanged(): void;
        public _OnMouseMove(jqEvent: JQueryEventObject): void;
        public _OnResizeAttached: boolean;
        public _OnOnResizeChanged(): void;
        public _OnResize(jqEvent: JQueryEventObject): void;
        public _OnMoveAttached: boolean;
        public _OnOnMoveChanged(): void;
        public _OnMove(jqEvent: JQueryEventObject): void;
        public _OnKeyPressAttached: boolean;
        public _OnOnKeyPressChanged(): void;
        public _OnKeyPress(jqEvent: JQueryEventObject): void;
        public _OnKeyUpAttached: boolean;
        public _OnOnKeyUpChanged(): void;
        public _OnKeyUp(jqEvent: JQueryEventObject): void;
        public _OnFocus(jqEvent: JQueryEventObject): void;
        public _OnBlur(jqEvent: JQueryEventObject): void;
        public _OnKeyDown(jqEvent: JQueryEventObject): boolean;
        public _OnChildren_Modified(eventArgs: TSUI.Events.CollectionModifiedEventArgs<UI.IControl>): void;
        public _This_Resized_ChainHandler_Timeout: number;
        public _This_Resized_ChainHandler(eventArgs: TSUI.Events.ResizeEventArgs): void;
        public _This_Moved_ChainHandler_Timeout: number;
        public _This_Moved_ChainHandler(eventArgs: TSUI.Events.MoveEventArgs): void;
        public DOMConstructed: boolean;
        public ConstructDOM(parent: JQuery, onComplete?: () => void): void;
        public DestroyDOM(): void;
        public ID(value?: string): string;
        public GetStyle(name: string): string;
        public ApplyStyle(name: string, value: string): void;
        public ApplyStyles(cssProps: any): void;
        public AddClass(name: string): void;
        public RemoveClass(name: string): void;
        public HasClass(name: string): boolean;
        public BackColor(color?: string): string;
        public ForeColor(color?: string): string;
        public CSSNumberStyle(style: string, value?: UI.CSSNumber): UI.CSSNumber;
        public Width(value?: UI.CSSNumber): UI.CSSNumber;
        public Height(value?: UI.CSSNumber): UI.CSSNumber;
        public ActualWidth(): number;
        public ActualHeight(): number;
        public Top(value?: UI.CSSNumber): UI.CSSNumber;
        public Bottom(value?: UI.CSSNumber): UI.CSSNumber;
        public Left(value?: UI.CSSNumber): UI.CSSNumber;
        public Right(value?: UI.CSSNumber): UI.CSSNumber;
        public PageTop(): number;
        public PageLeft(): number;
        public PageBottom(): number;
        public PageRight(): number;
        public MinWidth(value?: UI.CSSNumber): UI.CSSNumber;
        public MinHeight(value?: UI.CSSNumber): UI.CSSNumber;
        public MaxWidth(value?: UI.CSSNumber): UI.CSSNumber;
        public MaxHeight(value?: UI.CSSNumber): UI.CSSNumber;
        public _parentVisible: boolean;
        public SetParentVisible(value: boolean): void;
        public ActuallyVisible(): boolean;
        public Visible(value?: boolean): boolean;
        public EnableByParent(): void;
        public DisableByParent(): void;
        public _WasSelectionEnabled: boolean;
        public Enabled(value?: boolean): boolean;
        public ActuallyEnabled(): boolean;
        public _HandleEnableSet(enabled: boolean): void;
        public _HandleFocusableSet(focusable: boolean): void;
        public _Focusable: boolean;
        public Focusable(value?: boolean): boolean;
        public Show(callback?: () => void, animator?: TSUI.Animation.IAnimator): void;
        public Hide(callback?: () => void, animator?: TSUI.Animation.IAnimator): void;
        public _SelectionEnabled: boolean;
        public EnableSelection(): void;
        public DisableSelection(): void;
        public Focus(): void;
        public Blur(): void;
        public InvokeDefaultAction(): void;
        public IsRelativeLayout(): boolean;
        public RelativeLayoutOn(): void;
        public RelativeLayoutOff(): void;
        public _TabIndex: number;
        public TabIndex(value?: number): number;
        /** The collection containing all the binding groups (and thus bindings) for this control. */
        public Bindings: TSUI.Data.IBindingCollection;
        /** The default binding group for the control. */
        private DefaultGroup;
        /** Returns the default binding group for the control. */
        public GetDefaultBindingGroup(): TSUI.Data.IBindingGroup;
        /** Adds a new binding group to Bindings.
        @returns The new binding group.
        */
        public AddBindingGroup(updater?: TSUI.Data.IDataUpdater): TSUI.Data.IBindingGroup;
        /** Removes a binding group from Bindings and calls unbind on all the bindings in the group.
        @param group The group to remove.
        @returns The binding group that was removed.
        */
        public RemoveBindingGroup(group: TSUI.Data.IBindingGroup): TSUI.Data.IBindingGroup;
        /** Adds a new data binding to the specified group for this control.
        @param property The control property to bind to.
        @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
        @param accessor The data accessor to use for the new binding.
        @returns The new data binding.
        */
        public AddBinding(propertyName: string, dataProperty: TSUI.Collections.IList<string>, accessor: TSUI.Data.IDataAccessor<any>): TSUI.Data.IDataBinding<any, any>;
        /** Adds a new data binding to the specified group for this control.
        @param property The control property to bind to.
        @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
        @param accessor The data accessor to use for the new binding.
        @param group The binding group to add the new binding to.
        @returns The new data binding.
        */
        public AddBinding(propertyName: string, dataProperty: TSUI.Collections.IList<string>, accessor: TSUI.Data.IDataAccessor<any>, group: TSUI.Data.IBindingGroup): TSUI.Data.IDataBinding<any, any>;
        /** Adds a new data binding to the specified group for this control.
        @param property The control property to bind to.
        @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
        @param accessor The data accessor to use for the new binding.
        @param group The binding group to add the new binding to.
        @param bindingDirection The binding direction to use for the new binding.
        @returns The new data binding.
        */
        public AddBinding(propertyName: string, dataProperty: TSUI.Collections.IList<string>, accessor: TSUI.Data.IDataAccessor<any>, group: TSUI.Data.IBindingGroup, bindingDirection: TSUI.Data.BindingDirections): TSUI.Data.IDataBinding<any, any>;
        /** Adds a new data binding to the specified group for this control.
        @param property The control property to bind to.
        @param dataProperty The name (or sub names) of the data property to use for the value. Use array of length 0 to use the raw data.
        @param accessor The data accessor to use for the new binding.
        @param group The binding group to add the new binding to.
        @param bindingDirection The binding direction to use for the new binding.
        @param adapter The data adapter to use for the new binding.
        @returns The new data binding.
        */
        public AddBinding(propertyName: string, dataProperty: TSUI.Collections.IList<string>, accessor: TSUI.Data.IDataAccessor<any>, group: TSUI.Data.IBindingGroup, bindingDirection: TSUI.Data.BindingDirections, adapter: TSUI.Data.IDataAdapter<any, any>): TSUI.Data.IDataBinding<any, any>;
        /** Removes a data binding from all binding groups in the binding collection.
        @param binding The binding to remove.
        @returns Void
        */
        public RemoveBinding(binding: TSUI.Data.IDataBinding<any, any>): void;
        /** Internal method which handles removing a binding on the control from the specified group.
        @param group The group to remove the binding from.
        @param binding The binding to remove.
        @returns Void
        */
        private _removeBinding(group, binding);
    }
}

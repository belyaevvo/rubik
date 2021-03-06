﻿///<reference path='Control.ts'/>
///<reference path='../Common/Point.ts'/>
///<reference path='../Events/Events.ts'/>

module Rubik.UI {

    export class DragDropObject {
        elem: JQuery;
        target: EventTarget;
        position: Rubik.Common.Point;
    }

    export class DragDrop {
        
        static source: IDragSource = null;
        static target: IDropTarget = null;
        static dragging: boolean = false;
        static enabledrop: boolean = false;
        static ghost: GhostControl = null; 
        static Data: object = {};
        static dragSource: DragDropObject = new DragDropObject();             
        static dropTarget: DragDropObject = new DragDropObject(); 

        static Initialize(): void {
            document.onmousedown = function (e) {

                if (e.which != 1) { // если клик правой кнопкой мыши
                    return; // то он не запускает перенос
                }
                
                this.dragSource.elem = $(e.target).closest('.dragsource');
                this.dragSource.target = e.target; 
                this.dragSource.position = new Rubik.Common.Point(e.pageX, e.pageY)

            }.bind(this);

            document.onmousemove = function (e) {
                if (!Rubik.exists(this.dragSource.elem)) return; // элемент не зажат

                if (!this.ghost) { // элемент нажат, но пока не начали его двигать
                    // посчитать дистанцию, на которую переместился курсор мыши
                    var moveX = e.pageX - this.dragSource.position.x;
                    var moveY = e.pageY - this.dragSource.position.y;
                    if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
                        return; // ничего не делать, мышь не передвинулась достаточно далеко
                    }
                    var source = Elements[this.dragSource.elem.attr("id")] as IDragSource;
                    if (source) {                        
                        this.DragStart(source, this.dragSource);
                        if (!this.ghost) {
                            this.dragSource = new DragDropObject(); // аватар создать не удалось, отмена переноса
                            return; // возможно, нельзя захватить за эту часть элемента
                        }
                    }
                } 
                this.DragMove(new Rubik.Common.Point(e.pageX, e.pageY), e.target);                

            }.bind(this);

            document.onmouseup = function (e) {
                if (this.ghost) {
                    this.DragEnd(new Rubik.Common.Point(e.pageX, e.pageY), e.target);
                }                
                this.dragSource.elem = null;
            }.bind(this);

        }
                      

        static DragStart(source: IDragSource, dragsource: DragDropObject): void {
            this.ghost = new GhostControl();
            this.dragging = source.DragStarted(dragsource, this.ghost);
            if (this.dragging) {                
                this.source = source;
                document.body.appendChild(this.ghost.Element().get(0));
            }
            
        }
        static DragMove(position: Rubik.Common.Point, target: EventTarget): void {
            if (this.dragging) {

                this.ghost.Left(position.x + 10);
                this.ghost.Top(position.y + 10);

                
                if (this.source) this.source.DragDelta();                         
                var destination = this.FindElement(target, '.droptarget') as IDropTarget;                    
                if (this.target != destination) {
                    if (this.target) {
                        this.target.DraggedOut();
                    }                    
                    this.enabledrop = false;    
                    if (destination) {
                        this.dropTarget.elem = $(target).closest('.droptarget');
                        this.dropTarget.target = target;
                        this.dropTarget.position = new Rubik.Common.Point(position.x, position.y);
                        this.enabledrop = destination.DraggedEnter();
                    }
                    else {
                        this.dropTarget = new DragDropObject();                        
                    }
                    this.target = destination;                                     
                }
                if (this.target && this.enabledrop) {
                    this.dropTarget.position = new Rubik.Common.Point(position.x, position.y);
                    this.target.DraggedOver();
                }                 
            }
        }
        static DragEnd(position: Rubik.Common.Point, target: EventTarget): void {
            if (this.dragging) {
                var destination = this.FindElement(target, '.droptarget') as IDropTarget;  
                this.dropTarget.position = new Rubik.Common.Point(position.x, position.y);                        
                if (this.source) this.source.DragCompleted();   
                if (destination && this.enabledrop) {                                                         
                    destination.Dropped();
                }
                this.DragStop();
            }
        }

        static DragStop(): void {
            if (this.dragging) {                
                this.ghost.Element().remove();
                this.ghost = null;
                this.dragging = false;
                this.dragSource = new DragDropObject();
                this.dropTarget = new DragDropObject();
                this.target = null;
                this.source = null;
                this.enabledrop = false;
            }
            this.Data = {};
        }

        static SetData(data: object, format: string = "Text"): void {            
            this.Data[format] = data;
        }

        static ClearData(): void {
            this.Data = {};
        }

        static GetData(format: string = "Text"): object {
            if (this.IsDataExists(format)) {
                return this.Data[format];
            }
            return null;
        }

        static IsDataExists(format: string): boolean {
            if (Object.keys(this.Data).length === 0)
                return false;
            return this.Data.hasOwnProperty(format);            
        }

        private static FindElement(target: EventTarget, selector: string): object {
            var elem = $(target).closest(selector);
            if (elem.length > 0) {
                return Elements[elem.attr("id")];
            }
            return null;
        }
    }

    export class GhostControl extends FrameworkElement {
        _div: JQuery = null;
        _span: JQuery = null;
        _img: JQuery = null;

        constructor() {
            super();
            this._rootElement.addClass("GhostControl");
            //this._span = $("<span class=\"GridCell-content\">");                        
            this._div = $(document.createElement('div'));
            this._div.addClass("Ghost-content");
            this._img = $(document.createElement('img'));
            this._img.addClass("Ghost-img");
            this._div.append(this._img);
            this._span = $(document.createElement('span'));
            this._span.addClass("Ghost-text");
            this._div.append(this._span);
            this._rootElement.append(this._div);
            this.Text("Ghost");
        }

        Text(text: string | number | boolean = null): string {
            if (text != null) {
                this._span.text(text);
            }
            return this._span.text();
        }

        Content(html: string): string {
            if (html != null) {
                this._div.html(html);
            }
            return this._div.html();
        }

        Image(url: string): string {
            if (url != null) {
                this._img.attr('src',url);
            }
            return this._img.attr('src');
        }

    }

    
    /** See Event for more details. */
    export class DragStartedEvent extends Events.Event<DragStartedEventArgs> { }

    export class DragStartedEventHandler extends Events.EventHandler<DragStartedEventArgs> { }

    
    export class DragStartedEventArgs extends Events.EventArgs {
        constructor(public Sender: UI.IControl, public DragSource: DragDropObject, public Ghost: GhostControl, public EnableDrag: boolean) {
            super(Sender);
        }
    }

    /** See Event for more details. */
    export class DraggedEnterEvent extends Events.Event<DraggedEnterEventArgs> { }

    export class DraggedEnterEventHandler extends Events.EventHandler<DraggedEnterEventArgs> { }

    /** See EventArgs for more details. */
    export class DraggedEnterEventArgs extends Events.EventArgs {
        constructor(public Sender: UI.IControl, public EnableDrop: boolean) {
            super(Sender);
        }
    }

    export interface IDragSource {
        CanDrag: boolean;
        DragStarted(dragsource: DragDropObject, ghost: GhostControl): boolean;
        DragDelta(): void;
        DragCompleted(): void;

    }

    export interface IDropTarget {
        DraggedEnter(): boolean;
        DraggedOver(): void;
        DraggedOut(): void;        
        Dropped(): void;
    }
}
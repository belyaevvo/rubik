module Rubik.UI {
    export class DragDrop {
        
        static source: IDragSource = null;
        static target: IDropTarget = null;
        static dragging: boolean = false;
        static ghost: GhostControl = null;      
        private static dragSource: object = {};             
        private static dropTarget: object = {};

        static Initialize(): void {
            document.onmousedown = function (e) {

                if (e.which != 1) { // если клик правой кнопкой мыши
                    return; // то он не запускает перенос
                }

                this.dragSource.elem = $(e.target).closest('.dragsource');
                this.dragSource.target = e.target; 
                this.dragSource.downX = e.pageX;
                this.dragSource.downY = e.pageY;

            }.bind(this);

            document.onmousemove = function (e) {
                if (!this.dragSource.elem) return; // элемент не зажат

                if (!this.ghost) { // элемент нажат, но пока не начали его двигать
                    // посчитать дистанцию, на которую переместился курсор мыши
                    var moveX = e.pageX - this.dragSource.downX;
                    var moveY = e.pageY - this.dragSource.downY;
                    if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
                        return; // ничего не делать, мышь не передвинулась достаточно далеко
                    }
                    var source = Elements[this.dragSource.elem.attr("id")] as IDragSource;
                    if (source) {                        
                        this.DragStart(source, this.dragSource.target);
                        if (!this.ghost) {
                            this.dragSource = {}; // аватар создать не удалось, отмена переноса
                            return; // возможно, нельзя захватить за эту часть элемента
                        }
                    }
                } 
                this.DragMove(new Rubik.Common.Point(e.pageX, e.pageY), e.target);                

            }.bind(this);

            document.onmouseup = function (e) {
                if (this.ghost) {
                    this.DragEnd(e.target);
                }
            }.bind(this);

        }

        static DragStart(source: IDragSource, target: EventTarget): void {
            this.ghost = source.DragStarted(target);
            if (this.ghost != null) {
                this.dragging = true;
                this.source = source;
                document.body.appendChild(this.ghost.Element().get(0));
            }
            
        }
        static DragMove(position: Rubik.Common.Point, target: EventTarget): void {
            if (this.ghost) {

                this.ghost.Left(position.x);
                this.ghost.Top(position.y);

                var elem = $(target).closest('.droptarget');
                if (elem) {
                    if (this.source) this.source.DragDelta();
                    var destination = Elements[elem.attr("id")] as IDropTarget;                    
                    if (this.target != destination) {
                        if (this.target ) this.target.DraggedOut();
                        if(destination) destination.DraggedEnter();
                        this.target = destination;
                    }
                    if (this.target) this.target.DraggedOver();                                        
                }
            }
        }
        static DragEnd(target: EventTarget): void {
            if (this.ghost) {
                var elem = $(target).closest('.droptarget');
                if (elem) {
                    if (this.source) this.source.DragCompleted();                    
                    var destination = Elements[elem.attr("id")] as IDropTarget;
                    if (destination) destination.Dropped();
                }
                this.DragStop();
            }
        }

        static DragStop(): void {
            if (this.ghost) {                
                this.ghost.Element().remove();
                this.ghost = null;
                this.dragging = false;
                this.dragSource = {};
            }
        }
    }

    export class GhostControl extends FrameworkElement {

    }

    export class DragDropObject {
        elem: JQuery;
        target: EventTarget;
        position: Rubik.Common.Point;        
    }

    export interface IDragSource {
        CanDrag: boolean;
        DragStarted(target: EventTarget): GhostControl;
        DragDelta(): void;
        DragCompleted(): void;

    }

    export interface IDropTarget {
        DraggedEnter(): void;
        DraggedOver(): void;
        DraggedOut(): void;        
        Dropped(): void;
    }
}
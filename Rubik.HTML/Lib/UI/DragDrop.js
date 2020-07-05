///<reference path='Control.ts'/>
///<reference path='../Common/Point.ts'/>
///<reference path='../Events/Events.ts'/>
var Rubik;
(function (Rubik) {
    var UI;
    (function (UI) {
        class DragDropObject {
        }
        UI.DragDropObject = DragDropObject;
        class DragDrop {
            static Initialize() {
                document.onmousedown = function (e) {
                    if (e.which != 1) {
                        return; // то он не запускает перенос
                    }
                    this.dragSource.elem = $(e.target).closest('.dragsource');
                    this.dragSource.target = e.target;
                    this.dragSource.position = new Rubik.Common.Point(e.pageX, e.pageY);
                }.bind(this);
                document.onmousemove = function (e) {
                    if (!this.dragSource.elem)
                        return; // элемент не зажат
                    if (!this.ghost) {
                        // посчитать дистанцию, на которую переместился курсор мыши
                        var moveX = e.pageX - this.dragSource.position.x;
                        var moveY = e.pageY - this.dragSource.position.y;
                        if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
                            return; // ничего не делать, мышь не передвинулась достаточно далеко
                        }
                        var source = UI.Elements[this.dragSource.elem.attr("id")];
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
                        this.DragEnd(e.target);
                    }
                    this.dragSource.elem = null;
                }.bind(this);
            }
            static DragStart(source, dragsource) {
                this.ghost = source.DragStarted(dragsource);
                if (this.ghost != null) {
                    this.dragging = true;
                    this.source = source;
                    document.body.appendChild(this.ghost.Element().get(0));
                }
            }
            static DragMove(position, target) {
                if (this.ghost) {
                    this.ghost.Left(position.x + 10);
                    this.ghost.Top(position.y + 10);
                    var elem = $(target).closest('.droptarget');
                    if (elem) {
                        if (this.source)
                            this.source.DragDelta();
                        var destination = UI.Elements[elem.attr("id")];
                        if (this.target != destination) {
                            if (this.target)
                                this.target.DraggedOut();
                            if (destination)
                                destination.DraggedEnter();
                            this.target = destination;
                        }
                        if (this.target)
                            this.target.DraggedOver();
                    }
                }
            }
            static DragEnd(target) {
                if (this.ghost) {
                    var elem = $(target).closest('.droptarget');
                    if (elem) {
                        if (this.source)
                            this.source.DragCompleted();
                        var destination = UI.Elements[elem.attr("id")];
                        if (destination)
                            destination.Dropped();
                    }
                    this.DragStop();
                }
            }
            static DragStop() {
                if (this.ghost) {
                    this.ghost.Element().remove();
                    this.ghost = null;
                    this.dragging = false;
                    this.dragSource = new DragDropObject();
                }
            }
        }
        DragDrop.source = null;
        DragDrop.target = null;
        DragDrop.dragging = false;
        DragDrop.ghost = null;
        DragDrop.dragSource = new DragDropObject();
        DragDrop.dropTarget = {};
        UI.DragDrop = DragDrop;
        class GhostControl extends UI.FrameworkElement {
            constructor() {
                super();
                this._div = null;
                this._span = null;
                this._img = null;
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
            Text(text = null) {
                if (text != null) {
                    this._span.text(text);
                }
                return this._span.text();
            }
            Content(html) {
                if (html != null) {
                    this._div.html(html);
                }
                return this._div.html();
            }
            Image(url) {
                if (url != null) {
                    this._img.attr('src', url);
                }
                return this._img.attr('src');
            }
        }
        UI.GhostControl = GhostControl;
        /** See Event for more details. */
        class DragStartedEvent extends Rubik.Events.Event {
        }
        UI.DragStartedEvent = DragStartedEvent;
        class DragStartedEventHandler extends Rubik.Events.EventHandler {
        }
        UI.DragStartedEventHandler = DragStartedEventHandler;
        /** See EventArgs for more details. */
        class DragStartedEventArgs extends Rubik.Events.EventArgs {
            constructor(Sender, dragsource, ghost) {
                super(Sender);
                this.Sender = Sender;
                this.dragsource = dragsource;
                this.ghost = ghost;
            }
        }
        UI.DragStartedEventArgs = DragStartedEventArgs;
    })(UI = Rubik.UI || (Rubik.UI = {}));
})(Rubik || (Rubik = {}));
//# sourceMappingURL=DragDrop.js.map
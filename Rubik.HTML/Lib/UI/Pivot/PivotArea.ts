///<reference path='PivotControl.ts'/>
/// <reference path="../StackPanel.ts" />
/// <reference path="../../Resources/localization.ts"/>

module Rubik.UI.Pivot {
    export class PivotArea extends PivotControl {
       
        private areapanel: Rubik.UI.StackPanel;
        private labelpanel: Rubik.UI.Panel;
        private role: Rubik.DataHub.AxisRoleEnum;
        _div: JQuery = null;
        _span: JQuery = null;
        _img: JQuery = null;

        Grid: Grid = new Grid();
        Label: Label = new Label();

        get PivotDataManager(): Rubik.DataHub.PivotDataManager {
            return this.pivotDataManager;
        }

        set PivotDataManager(pm: Rubik.DataHub.PivotDataManager) {
            this.pivotDataManager = pm;
            this.pivotDataManager.SchemaChanged.Attach(new Events.SimpleEventHandler(this.pivotDataManager_SchemaChanged, this));
        }

        constructor() {
            super();
            this._rootElement.addClass("PivotArea");               
            this.labelpanel = new Rubik.UI.Panel();
            this.labelpanel.AddClass("PivotArea-header");
            this.labelpanel.AddClass("NoIndent");
            this.areapanel = new Rubik.UI.StackPanel();
            this.areapanel.AddClass("PivotArea-content");
            this.areapanel.AddClass("NoIndent");
            this.areapanel.AllowDrag();
            this.areapanel.AllowDrop();
            this.areapanel.OnDragStarted.Attach(new DragStartedEventHandler(this.areapanel_OnDragStarted, this));
            this.areapanel.OnDraggedEnter.Attach(new DraggedEnterEventHandler(this.areapanel_OnDraggedEnter, this));
            this.areapanel.OnDropped.Attach(new Events.SimpleEventHandler(this.areapanel_OnDropped, this));
            this.areapanel.OnDragCompleted.Attach(new Events.SimpleEventHandler(this.areapanel_OnDragCompleted, this));
            this._div = $(document.createElement('div'));
            this._img = $(document.createElement('img'));            
            this._div.append(this._img);
            this._span = $(document.createElement('span'));
            this._div.append(this._span);
            this.labelpanel._rootElement.append(this._div);

            this.Grid.ExpandLastColumn = true;
            //this.areapanel.Children.Add(this.Grid);
            this.areapanel.MarginTop(30);
            this.Children.Add(this.labelpanel);
            this.Children.Add(this.areapanel);
            this.Grid.Height("100%");
            this.Grid.Width("100%");
        }

        get Role(): Rubik.DataHub.AxisRoleEnum {
            return this.role;
        }

        set Role(role: Rubik.DataHub.AxisRoleEnum) {            
             this.role = role;
            switch (role) {
                case Rubik.DataHub.AxisRoleEnum.Filters:
                    this._img.attr("src", ContentRoot + "/icons/mppivotcontrols_axis_filter.png");
                    this._span.text(Rubik.Resources.Localization.getString("pivotAreaFilters"));
                    break;
                case Rubik.DataHub.AxisRoleEnum.Columns:
                    this._img.attr("src", ContentRoot + "/icons/mppivotcontrols_axis_col.png");
                    this._span.text(Rubik.Resources.Localization.getString("pivotAreaCols"));
                    break;
                case Rubik.DataHub.AxisRoleEnum.Rows:
                    this._img.attr("src", ContentRoot + "/icons/mppivotcontrols_axis_row.png");
                    this._span.text(Rubik.Resources.Localization.getString("pivotAreaRows"));
                    break;
                case Rubik.DataHub.AxisRoleEnum.Data:
                    this._img.attr("src", ContentRoot + "/icons/mppivotcontrols_sum.png");
                    this._span.text(Rubik.Resources.Localization.getString("pivotAreaData"));
                    break;
            }
        }

        GetIndexFromPoint(x: number, y: number): number {
            var elem = document.elementFromPoint(x, y);
            var item = $(elem).closest('.PivotAreaItem')[0];
            if (item) {
                return +item.getAttribute("data-index");                
            }
            return -1;
        } 

        areapanel_OnDragStarted(args: DragStartedEventArgs) {
            var index = this.GetIndexFromPoint(args.DragSource.position.x, args.DragSource.position.y);
            if (index>=0) {
                var item = this.areapanel.Children.ElementAt(index) as PivotAreaItem;
                if (item) {
                    DragDrop.SetData(item.Info, "TypedSchemaObject");
                    DragDrop.SetData(item.Info, "InfoObject");
                    args.Ghost.Text(item.Text());
                    args.Ghost.Image(item.Image());
                    return true;
                }                
            }
            return false;
        }

        areapanel_OnDraggedEnter(args: DraggedEnterEventArgs) {
            var so = DragDrop.GetData("TypedSchemaObject") as Rubik.DataHub.TypedSchemaObject;
            if (so) {
                args.EnableDrop = so.ObjectType == Rubik.DataHub.ObjectTypeEnum.Measure && this.Role == Rubik.DataHub.AxisRoleEnum.Data ||
                    so.ObjectType != Rubik.DataHub.ObjectTypeEnum.Measure && so.UniqueName != "[Measures]" && this.Role != Rubik.DataHub.AxisRoleEnum.Data ||
                    so.UniqueName == "[Measures]" && (this.Role == Rubik.DataHub.AxisRoleEnum.Columns || this.Role == Rubik.DataHub.AxisRoleEnum.Rows);
            }
             return false;
        }

        areapanel_OnDropped(args: Events.EventArgs) {
            var info = DragDrop.GetData("InfoObject") as DataHub.MeasureInfo | DataHub.MemberInfo | DataHub.LevelInfo | DataHub.HierarchyInfo | DataHub.DimensionInfo;                              
            this.PivotDataManager.Schema.SetObjectAxis(info, this.Role, this.GetIndexFromPoint(DragDrop.dropTarget.position.x, DragDrop.dropTarget.position.y));
        }

        areapanel_OnDragCompleted(args: Events.EventArgs) {
            if (!DragDrop.target) {
                var info = DragDrop.GetData("InfoObject") as DataHub.MeasureInfo | DataHub.MemberInfo | DataHub.LevelInfo | DataHub.HierarchyInfo | DataHub.DimensionInfo;
                this.PivotDataManager.Schema.SetObjectAxis(info, DataHub.AxisRoleEnum.None);
            }
        }


        pivotDataManager_SchemaChanged(args: Events.EventArgs) {
            if (this.Role == DataHub.AxisRoleEnum.Data) {
                this.areapanel.Children.Clear();
                for (var msr of this.PivotDataManager.Schema.Data.Measures.ToArray()) {
                    var item = new PivotAreaItem();
                    item.Index = this.areapanel.Children.Count();
                    item.Info = msr.Info;
                    item.Text(msr.Caption);
                    item.Image(ContentRoot + "/icons/mppivotcontrols_measure.png");
                    item.ButtonVisible(false);
                    this.areapanel.Children.Add(item);
                }
            }
            else if (this.Role != DataHub.AxisRoleEnum.None) {
                var ax = this.PivotDataManager.Schema.GetAxis(this.Role) as DataHub.HierarchyAxis;
                this.areapanel.Children.Clear();
                for (var set of ax.Sets.ToArray()) {                    
                    var item = new PivotAreaItem();
                    item.Index = this.areapanel.Children.Count();
                    item.Info = set.Info;
                    item.Text(set.Caption);
                    item.Image(set.IsMeasures ?
                        ContentRoot + "/icons/mppivotcontrols_dimension_measures.png" :
                        ContentRoot + "/icons/mppivotcontrols_dimension.png");
                    item.ButtonVisible(!set.IsMeasures);
                    this.areapanel.Children.Add(item);
                }
            }
        }
        
    }

    export class PivotAreaItem extends Control {
        _div: JQuery = null;
        _span: JQuery = null;
        _img: JQuery = null;
        //_btn: JQuery = null;
        btn: Control = null;
        Info: DataHub.HierarchyInfo | DataHub.MeasureInfo = null;

        constructor() {
            super();
            this._rootElement.addClass("PivotAreaItem");
            //this._span = $("<span class=\"GridCell-content\">");                        
            this._div = $(document.createElement('div'));
            this._div.addClass("PivotAreaItem-content");
            this._img = $(document.createElement('img'));
            this._img.addClass("PivotAreaItem-img");
            this._div.append(this._img);
            this._span = $(document.createElement('span'));
            this._span.addClass("PivotAreaItem-text");
            this._div.append(this._span);
            this.btn = new Control();
            this.btn.AddClass("PivotAreaItem-button");
            this.btn.AddClass("fa");
            this.btn.AddClass("fa-angle-down");
            this.btn.OnClick.Attach(new Events.ClickEventHandler(this._button_Click, this));            
            //this._btn = $(document.createElement('span'));
            //this._btn.addClass("PivotAreaItem-button fa fa-angle-down");            
            //this._div.append(this._btn);            
            this._rootElement.append(this._div);            
        }

        ConstructDOM(parent: JQuery, onComplete: () => void = null): void {
            this.btn.ConstructDOM(this._div);
            super.ConstructDOM(parent, onComplete);
            

        }
        DestroyDOM(): void {
            this.btn.DestroyDOM();
            super.DestroyDOM();            
        }

        get Index(): number {
            return +this._rootElement.attr("data-index");
        }

        set Index(index: number) {           
                this._rootElement.attr("data-index", index);                
        }

        Text(text?: string): string {
            if (text) {
                this._span.text(text);
            }
            return this._span.text();
        }

        Content(html?: string): string {
            if (html) {
                this._div.html(html);
            }
            return this._div.html();
        }

        Image(url?: string): string {
            if (url) {
                this._img.attr('src', url);
            }
            return this._img.attr('src');
        }

        ButtonVisible(visible?: boolean): boolean {
            if (visible!=null) {
                this.btn.Visible(visible);
            }
            return this.btn.Visible();
        }

        _button_Click(args: Events.ClickEventArgs) {

        }

    }
}

    

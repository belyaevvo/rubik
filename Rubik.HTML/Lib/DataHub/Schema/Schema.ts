/// <reference path="Interfaces.ts" />
/// <reference path="Axis.ts" />
/// <reference path="MeasureInfo.ts" />




module Rubik.DataHub {
    export class Schema implements ISchema {
        private manager: Rubik.DataHub.PivotDataManager;
        private init: Promise<boolean> = Promise.resolve(false);
        private update: boolean;
        private hierarchies: Collections.Dictionary<HierarchySet> = new Collections.Dictionary<HierarchySet>();
        private measures: Collections.Dictionary<Measure> = new Collections.Dictionary<Measure>();
        public Columns: HierarchyAxis;
        public Rows: HierarchyAxis;
        public Filters: HierarchyAxis;
        public Data: DataAxis;
        public CustomMembers: List<CustomMember> = new Rubik.Collections.List<CustomMember>();
        public CustomSets: List<CustomSet> = new Rubik.Collections.List<CustomSet>();
        public CubeName: string;

        SchemaChanged: Events.Event<Events.EventArgs> = new Events.Event<Events.EventArgs>();

        constructor(manager: Rubik.DataHub.PivotDataManager = null) {
            this.manager = manager;
            this.Columns = new HierarchyAxis(AxisRoleEnum.Columns, this);
            this.Rows = new HierarchyAxis(AxisRoleEnum.Rows, this);
            this.Filters = new HierarchyAxis(AxisRoleEnum.Filters, this);
            this.Data = new DataAxis(this);
            manager.CubeChanged.Attach(new Events.EventHandler<Events.EventArgs>(this.OnCubeChanged, this));
            this.CustomMembers.OnModified.Attach(
                new Rubik.Collections.CollectionModifiedEventHandler<CustomMember>(
                    this.OnCustomMembersModified, this)
            );
        }
        
        

        public BeginUpdate(): void {
            this.update = true;
        }

        public EndUpdate(): void {
            if (this.update) {
                this.update = false;
                this.InvokeSchemaChanged();             
            }
        }

        public SetAxisOfHierarchy(hier: HierarchySet, axisRole: HierarchyAxisRoleEnum, index: number = -1): void {
            if (hier) {
                if (hier.IsMeasures && axisRole == AxisRoleEnum.Filters) return;                
                if (axisRole == AxisRoleEnum.None) {
                    hier.LevelName = null;
                    hier.SelectMembers()
                };                
                var src_axis = this.GetAxisOfHierarchy(hier.HierarchyName);
                var dst_axis = this.GetHierarchyAxis(axisRole) as HierarchyAxis;
                if (src_axis) {
                    src_axis.Sets.Remove(hier);
                }
                if (dst_axis) {
                    if (index < 0 || index >= dst_axis.Sets.Count()) {
                        dst_axis.Sets.Add(hier);
                    }
                    else {
                        dst_axis.Sets.Insert(hier, index);
                    }
                }
                this.InvokeSchemaChanged();
            }            
        }

        public SetAxisOfMeasure(msr: Measure, axisRole: MeasureAxisRoleEnum, index: number = -1): void {
            if (msr) {
                var src_axis = this.GetAxisOfMeasure(msr.MeasureName) as DataAxis;
                var dst_axis = this.GetAxis(axisRole) as DataAxis;
                if (src_axis) {
                    src_axis.Measures.Remove(msr);
                }
                if (dst_axis) {
                    if (index < 0 || index >= dst_axis.Measures.Count()) {
                        dst_axis.Measures.Add(msr);
                    }
                    else {
                        dst_axis.Measures.Insert(msr, index);
                    }
                }
                this.LayoutMeasures();
                this.InvokeSchemaChanged();
            }
        }

        private LayoutMeasures() {
            var hier = this.GetMeasuresHierarchySet();
            var axisRole = this.GetAxisRoleOfHierarchy(hier.HierarchyName);
            if (this.Data.Measures.Count() > 1 && axisRole == AxisRoleEnum.None) {
                this.SetAxisOfHierarchy(hier, AxisRoleEnum.Columns);
            }
            else if (this.Data.Measures.Count() <= 1 && axisRole != AxisRoleEnum.None) {
                this.SetAxisOfHierarchy(hier, AxisRoleEnum.None);
            }
        }

        public SetObjectAxis(infoobject: MeasureInfo | MemberInfo | LevelInfo | HierarchyInfo | DimensionInfo, axisRole: AxisRoleEnum, index: number = -1): void {            
            var hier: HierarchySet = null;
            this.BeginUpdate();
            switch (infoobject.ObjectType) {
                case ObjectTypeEnum.Dimension:
                    hier = this.GetHierarchySet((infoobject as DimensionInfo).DefaultHierarchy);
                    this.SetAxisOfHierarchy(hier, axisRole as HierarchyAxisRoleEnum, index); 
                    break;
                case ObjectTypeEnum.Hierarchy:
                    hier = this.GetHierarchySet(infoobject.UniqueName);               
                    this.SetAxisOfHierarchy(hier, axisRole as HierarchyAxisRoleEnum, index);                          
                    break;
                case ObjectTypeEnum.Level:
                    hier = this.GetHierarchySet((infoobject as LevelInfo).Hierarchy_UniqueName);
                    hier.LevelName = (infoobject as LevelInfo).UniqueName;
                    this.SetAxisOfHierarchy(hier, axisRole as HierarchyAxisRoleEnum, index);
                    break;
                case ObjectTypeEnum.Member:
                    hier = this.GetHierarchySet((infoobject as MemberInfo).Hierarchy_UniqueName);
                    hier.LevelName = null;
                    hier.SelectMembers((infoobject as MemberInfo).UniqueName);                 
                    this.SetAxisOfHierarchy(hier, axisRole as HierarchyAxisRoleEnum, index); 
                    break;
                case ObjectTypeEnum.Measure:
                    var msr = this.GetMeasure(infoobject.UniqueName);
                    this.SetAxisOfMeasure(msr, axisRole as MeasureAxisRoleEnum, index);                          
                    break;
            }            
            this.EndUpdate();
        }

        public GetObjectAxis(infoobject: MeasureInfo | MemberInfo | LevelInfo | HierarchyInfo | DimensionInfo): Axis {
            var hier: HierarchySet = null;
            switch (infoobject.ObjectType) {
                case ObjectTypeEnum.Dimension:
                    hier = this.GetHierarchySet((infoobject as DimensionInfo).DefaultHierarchy);
                    break;
                case ObjectTypeEnum.Hierarchy:
                    hier = this.GetHierarchySet(infoobject.UniqueName);
                    break;
                case ObjectTypeEnum.Member:
                    hier = this.GetHierarchySet((infoobject as MemberInfo).Hierarchy_UniqueName);
                    break;
                case ObjectTypeEnum.Measure:
                    var msr = this.GetMeasure(infoobject.UniqueName);
                    return this.Data.Measures.Contains(msr) ? this.Data : null;                                        
            }
        }

        public GetAxisRoleOfHierarchy(hr: string | HierarchySet): HierarchyAxisRoleEnum {            
            var hier = hr instanceof HierarchySet ? hr : this.GetHierarchySet(hr);
            if (hier) {
                if (this.Filters.Sets.Contains(hier)) return AxisRoleEnum.Filters;
                if (this.Columns.Sets.Contains(hier)) return AxisRoleEnum.Columns;
                if (this.Rows.Sets.Contains(hier)) return AxisRoleEnum.Rows;
            }
            return AxisRoleEnum.None;
        }

        public GetAxisOfHierarchy(hr: string | HierarchySet): HierarchyAxis {
            return this.GetAxis(this.GetAxisRoleOfHierarchy(hr)) as HierarchyAxis;
        }

        public GetAxisRoleOfMeasure(meas: string | Measure): MeasureAxisRoleEnum {            
            var msr = meas instanceof Measure ? meas : this.GetMeasure(meas);            
            if (msr) {
                if (this.Data.Measures.Contains(msr)) return AxisRoleEnum.Data;                
            }
            return AxisRoleEnum.None;
        }

        public GetAxisOfMeasure(meas: string | Measure): Axis {
            return this.GetAxis(this.GetAxisRoleOfMeasure(meas)) as Axis;
        }


        public GetHierarchyAxis(role: HierarchyAxisRoleEnum): HierarchyAxis {
            switch (role) {
                case AxisRoleEnum.None:
                    return null;
                case AxisRoleEnum.Columns:
                    return this.Columns;
                case AxisRoleEnum.Rows:
                    return this.Rows;
                case AxisRoleEnum.Filters:
                    return this.Filters;      
                default:
                    return null;          
            }
        }

        public GetAxis(role: AxisRoleEnum): Axis {
            switch (role) {
                case AxisRoleEnum.None:
                    return null;
                case AxisRoleEnum.Columns:
                    return this.Columns;
                case AxisRoleEnum.Rows:
                    return this.Rows;
                case AxisRoleEnum.Filters:
                    return this.Filters;
                case AxisRoleEnum.Data:
                    return this.Data;
            }            
        }

        public GetHierarchySet(uniquename: string): HierarchySet {
            if (this.hierarchies.containsKey(uniquename)) {
                return this.hierarchies[uniquename];
            }
            return null;
        }

        public GetMeasuresHierarchySet(): HierarchySet {
            return this.GetHierarchySet("[Measures]");
        }

        public GetMeasure(uniquename: string): Measure {
            if (this.measures.containsKey(uniquename)) {
                return this.measures[uniquename];
            }
            return null;
        }

        public async Load(schema: any) {
            var self = this;
            if (await this.init) {
                this.BeginUpdate();
                this.Columns.Sets.Clear();
                this.Rows.Sets.Clear();
                this.Data.Measures.Clear();
                this.Filters.Sets.Clear();

                if (schema.CustomMembers) {
                    schema.CustomMembers.forEach(mbr => {
                        self.CustomMembers.Add(new CustomMember(mbr.UniqueName, mbr.Expression))
                    });
                }

                if (schema.CustomSets) {
                    schema.CustomSets.forEach(st => {
                        self.CustomSets.Add(new CustomSet(st.UniqueName, st.Expression))
                    });
                }
                               
                if (schema.Filters) {
                    schema.Filters.forEach((hier, idx, arr) => {
                        var hset = self.GetHierarchySet(hier.HierarchyName);                        
                        if (hset) {
                            this.SetAxisOfHierarchy(hset, AxisRoleEnum.Filters);  
                            if (hier.LevelName) {
                                hset.LevelName = hier.LevelName;
                            }
                            if (hier.SelectedMembers) {
                                hset.SelectMembers(hier.SelectedMembers as string | SelectedMember | string[] | SelectedMember[]);
                            }                           
                        }
                    });
                }
                if (schema.Columns) {
                    (schema.Columns.Sets || schema.Columns).forEach((hier, idx, arr) => {
                        var hset = self.GetHierarchySet(hier.HierarchyName);
                        if (hset) {
                            this.SetAxisOfHierarchy(hset, AxisRoleEnum.Columns);   
                            if (hier.LevelName) {
                                hset.LevelName = hier.LevelName;
                            }                         
                            if (hier.SelectedMembers) {
                                hset.SelectMembers(hier.SelectedMembers as string | SelectedMember | string[] | SelectedMember[]);
                            }
                            if (hier.Properties) {
                                hset.SelectProperties(hier.Properties);
                            }
                        }                        
                    });
                }
                if (schema.Rows) {
                    (schema.Rows.Sets || schema.Rows).forEach((hier, idx, arr) => {
                        var hset = self.GetHierarchySet(hier.HierarchyName);
                        if (hset) {
                            this.SetAxisOfHierarchy(hset, AxisRoleEnum.Rows);                            
                            if (hier.LevelName) {
                                hset.LevelName = hier.LevelName;
                            }
                            if (hier.SelectedMembers) {
                                hset.SelectMembers(hier.SelectedMembers as string | SelectedMember | string[] | SelectedMember[]);
                            }
                            if (hier.Properties) {
                                hset.SelectProperties(hier.Properties);
                            }
                        }                         
                    });
                }
                if (schema.Data) {
                    schema.Data.forEach((msr, idx, arr) => {                        
                        var meas = self.GetMeasure(msr.MeasureName);
                        if (meas) {
                            this.SetAxisOfMeasure(meas, AxisRoleEnum.Data);                            
                        }                         
                    });
                }

                this.EndUpdate();
            }

        }

        public InvokeSchemaChanged() {
            if (!this.update) {
                this.SchemaChanged.Invoke(new Events.EventArgs(this));
            }
            
        }

        public get jsonData(): string {
            return JSON.stringify(this);
        }

        public set jsonData(data: string) {
            this.Load(JSON.parse(data)).then();
        }

        public toJSON(): any {
            return {
                Columns: this.Columns,
                Rows: this.Rows,
                Filters: this.Filters.Sets.ToArray(),
                Data: this.Data.Measures.ToArray(),
                CustomMembers: this.CustomMembers.ToArray(),
                CustomSets: this.CustomSets.ToArray(),
                CubeName: this.CubeName
            };
        }

        private OnCubeChanged(args: Events.EventArgs): void {
            var self = this;
            this.hierarchies = new Collections.Dictionary<HierarchySet>();
            this.measures = new Collections.Dictionary<Measure>();
            this.CubeName = this.manager.DataMember;
            this.Columns = new HierarchyAxis(AxisRoleEnum.Columns, this);
            this.Rows = new HierarchyAxis(AxisRoleEnum.Rows, this);
            this.Filters = new HierarchyAxis(AxisRoleEnum.Filters, this);
            this.Data = new DataAxis(this);
            var initialized;
            this.init = new Promise((resolve, reject) => { initialized = resolve });
            this.manager.CubeInfo.then(cubeinfo => {
                Promise.all([
                    cubeinfo.Hierarchies.then(hiers => {
                        //this.hierarchies.                
                        for (var hier of hiers) {
                            var hs: HierarchySet = hier.UniqueName == "[Measures]" ? new MeasureSet(self) : new HierarchySet(self);                            
                            hs.HierarchyName = hier.UniqueName;
                            hs.Info = hier;
                            this.hierarchies.add(hier.UniqueName, hs);
                        }
                    }),
                    cubeinfo.Measures.then(msrs => {
                        //this.hierarchies.                
                        for (var msr of msrs) {
                            var meas = new Measure(self);
                            meas.MeasureName = msr.UniqueName;
                            meas.Info = msr;
                            this.measures.add(msr.UniqueName, meas);
                        }
                    })
                ]).then(() => {
                    initialized(true);
                });
            });           
        }        

        private OnCustomMembersModified(args: Rubik.Collections.CollectionModifiedEventArgs<CustomMember>) {
            switch (args.Modification) {
                case Rubik.Collections.CollectionModifications.Add:
                    args.ModifiedElements.ToArray().filter(item => item.IsMeasure).forEach(item => {
                        var msr = new Measure(this);
                        msr.MeasureName = item.UniqueName;
                        this.measures.remove(item.UniqueName);
                        this.measures.add(msr.MeasureName, msr);                        
                    });                    
                    break;
                case Rubik.Collections.CollectionModifications.Remove:
                    args.ModifiedElements.ToArray().filter(item => item.IsMeasure).forEach(item => {                                                
                        this.measures.remove(item.UniqueName);
                    });
                    break;                    
            }
        }
    }

    export enum AxisRoleEnum {
        None = -2,
        Filters = -1,
        Columns = 0,
        Rows = 1,
        Data = 2
    }

    type HierarchyAxisRoleEnum = AxisRoleEnum.None | AxisRoleEnum.Filters | AxisRoleEnum.Columns | AxisRoleEnum.Rows;

    type MeasureAxisRoleEnum = AxisRoleEnum.None | AxisRoleEnum.Data;
   
}

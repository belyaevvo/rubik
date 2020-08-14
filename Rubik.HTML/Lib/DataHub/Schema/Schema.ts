/// <reference path="Interfaces.ts" />
/// <reference path="Axis.ts" />
/// <reference path="MeasureInfo.ts" />




module Rubik.DataHub {
    export class Schema implements ISchema {
        private manager: Rubik.DataHub.PivotDataManager;
        public hierarchies: Collections.Dictionary<HierarchySet> = new Collections.Dictionary<HierarchySet>();
        public measures: Collections.Dictionary<Measure> = new Collections.Dictionary<Measure>();
        public Columns: HierarchyAxis = new HierarchyAxis(AxisRoleEnum.Cols);
        public Rows: HierarchyAxis = new HierarchyAxis(AxisRoleEnum.Rows);
        public Filters: HierarchyAxis = new HierarchyAxis(AxisRoleEnum.Filters);
        public Data: DataAxis = new DataAxis();
        public CustomMembers: List<CustomMember> = new Rubik.Collections.List<CustomMember>();
        public CustomSets: List<CustomSet> = new Rubik.Collections.List<CustomSet>();
        public CubeName: string;

        SchemaChanged: Events.Event<Events.EventArgs> = new Events.Event<Events.EventArgs>();

        constructor(manager: Rubik.DataHub.PivotDataManager = null) {
            this.manager = manager;
            manager.CubeChanged.Attach(new Events.EventHandler<Events.EventArgs>(this.OnCubeChanged,this));
        }
        

        public SetObjectAxis(infoobject: MeasureInfo | MemberInfo | LevelInfo | HierarchyInfo | DimensionInfo, axis: AxisRoleEnum, index: number = -1): void {            
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
                    this.Data.Measures.Remove(msr)
                    if (axis == AxisRoleEnum.Data) {
                        if (index < 0 || index >= this.Data.Measures.Count()) {
                            this.Data.Measures.Add(msr);
                        }
                        else {
                            this.Data.Measures.Insert(msr, index);
                        }
                    }
                    break;
            }
            if (hier) {
                var src_axis = this.GetAxisOfHierarchy(hier.HierarchyName);
                var dst_axis = this.GetAxis(axis) as HierarchyAxis;
                if (src_axis) {
                    src_axis.Sets.Remove(hier);
                }
                if (dst_axis) {
                    if (index < 0 || index >= src_axis.Sets.Count()) {
                        dst_axis.Sets.Add(hier);
                    }
                    else {
                        dst_axis.Sets.Insert(hier, index);
                    }
                }
            }
            this.SchemaChanged.Invoke(new Events.EventArgs(this));            
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

        public GetAxisRoleOfHierarchy(uniquename: string): AxisRoleEnum {            
            var hier = this.GetHierarchySet(uniquename);
            if (hier) {
                if (this.Filters.Sets.Contains(hier)) return AxisRoleEnum.Filters;
                if (this.Columns.Sets.Contains(hier)) return AxisRoleEnum.Cols;
                if (this.Rows.Sets.Contains(hier)) return AxisRoleEnum.Rows;
            }
            return AxisRoleEnum.None;
        }

        public GetAxisOfHierarchy(uniquename: string): HierarchyAxis {
            return this.GetAxis(this.GetAxisRoleOfHierarchy(uniquename)) as HierarchyAxis;
        }

        public GetAxis(role: AxisRoleEnum): Axis {
            switch (role) {
                case AxisRoleEnum.None:
                    return null;
                case AxisRoleEnum.Cols:
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

        public GetMeasure(uniquename: string): Measure {
            if (this.measures.containsKey(uniquename)) {
                return this.measures[uniquename];
            }
            return null;
        }

        public OnCubeChanged(args: Events.EventArgs): void {
            var self = this;
            this.hierarchies = new Collections.Dictionary<HierarchySet>();
            this.CubeName = this.manager.DataMember;
            this.Columns = new HierarchyAxis(AxisRoleEnum.Cols);
            this.Rows = new HierarchyAxis(AxisRoleEnum.Rows);
            this.Filters = new HierarchyAxis(AxisRoleEnum.Filters);
            this.Data = new DataAxis();
            this.manager.CubeInfo.Hierarchies.then(hiers => {
                //this.hierarchies.                
                for (var hier of hiers) {
                    var hs = new HierarchySet();
                    hs.HierarchyName = hier.UniqueName;
                    hs.Info = hier;
                    this.hierarchies.add(hier.UniqueName, hs);
                }                
            });

            this.measures = new Collections.Dictionary<Measure>();
            this.manager.CubeInfo.Measures.then(msrs => {
                //this.hierarchies.                
                for (var msr of msrs) {
                    var meas = new Measure();
                    meas.MeasureName = msr.UniqueName;
                    meas.Info = msr;
                    this.measures.add(msr.UniqueName, meas);
                }
            });
        }        
    }

    export enum AxisRoleEnum {
        None = -2,
        Filters = -1,
        Cols = 0,
        Rows = 1,
        Data = 2
    }
}

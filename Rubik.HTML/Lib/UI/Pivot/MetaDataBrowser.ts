///<reference path='PivotControl.ts'/>
///<reference path='../../Events/Events.ts'/>
///<reference path='../../Data/Grid/TreeNodeDataSource.ts'/>
///<reference path='../../DataHub/Schema/TypedSchemaObject.ts'/>


module Rubik.UI.Pivot {
    export class MetaDataBrowser extends PivotControl {

        private gridpanel: Rubik.UI.Panel;

        MetaDataSource: Rubik.Data.TreeNodeDataSource = new Rubik.Data.TreeNodeDataSource();
        Grid: Grid = new Grid();
        CubeInfo: DataHub.CubeInfo;

        get PivotDataManager(): Rubik.DataHub.PivotDataManager {
            return this.pivotDataManager;
        }

        set PivotDataManager(pm: Rubik.DataHub.PivotDataManager) {
            this.pivotDataManager = pm;
            this.pivotDataManager.DataInfo.GetInfoObject({ ObjectType: DataHub.ObjectTypeEnum.Cube, UniqueName: pm.DataMember } as Rubik.DataHub.TypedSchemaObject).then((value) => {                
                this.CubeInfo = value as DataHub.CubeInfo;
                this.MetaDataSource.View.Populate(0);
            });
            
        }
        

        constructor() {
            super();
            this._rootElement.addClass("MetaDataBrowser");
            this.AllowDrag();
            this.gridpanel = new Rubik.UI.Panel();
            this.Grid.AddClass("MetaDataGrid");
            this.Grid.ExpandLastColumn = true;            
            this.gridpanel.Children.Add(this.Grid);
            this.Children.Add(this.gridpanel);
            this.Grid.DataSource = this.MetaDataSource;
            this.MetaDataSource.View.VirtualMode = true;
            this.MetaDataSource.View.VirtualModeCreateChildren.Attach(new Events.EventHandler<Rubik.Data.TreeViewEventArgs>(this.OnVirtualModeCreateChildren, this))
            this.Grid.Height("100%");
            this.Grid.Width("100%");            
        }


        DragStarted(dragsource: DragDropObject, ghost: GhostControl): boolean {
            var [col, row] = this.Grid.GetColRowFromPoint(dragsource.position.x, dragsource.position.y);
            var mbr = this.MetaDataSource.getRowMember(col, row);
            DragDrop.SetData((mbr as Rubik.Data.NodeDataMember).Node.Tag, "TypedSchemaObject");            
            DragDrop.SetData((mbr as Rubik.Data.NodeDataMember).Node.Tag, "InfoObject");            
            ghost.Text(mbr.Caption);
            ghost.Image(mbr.Icon);            
            return true;
        }

        OnVirtualModeCreateChildrenOld(args: Rubik.Data.TreeViewEventArgs) {
            if (args.Node.Level == 0) {
                this.pivotDataManager.GetMetaData("MDSCHEMA_DIMENSIONS", {}, function (data) {
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    var node = new Rubik.Data.TreeNode();
                    node.Key = "[Measures]";
                    node.Caption = Rubik.Resources.Localization.getString("measuresCaption");
                    node.Tag = new Rubik.DataHub.TypedSchemaObject();
                    node.Tag.UniqueName = "[Measures]";
                    node.Tag.ObjectType = Rubik.DataHub.ObjectTypeEnum.Dimension;
                    node.Icon = ContentRoot + "/icons/mppivotcontrols_dimension_measures.png";                    
                    nodes.Add(node);
                    for (var row of data.rowsetTable) {
                        if (row["DIMENSION_UNIQUE_NAME"] != "[Measures]") {
                            var node = new Rubik.Data.TreeNode();
                            node.Key = row["DIMENSION_UNIQUE_NAME"];
                            node.Caption = row["DIMENSION_CAPTION"];
                            node.Tag = new Rubik.DataHub.TypedSchemaObject();
                            node.Tag.UniqueName = row["DIMENSION_UNIQUE_NAME"];
                            node.Tag.ObjectType = Rubik.DataHub.ObjectTypeEnum.Dimension;                                                        
                            if (row["DIMENSION_TYPE"] == 1) {
                                node.Icon = ContentRoot + "/icons/mppivotcontrols_dimension_time.png";
                            }
                            else {
                                node.Icon = ContentRoot + "/icons/mppivotcontrols_dimension.png";
                            }
                            nodes.Add(node);
                        }                        
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Tag.UniqueName == "[Measures]") {
                this.pivotDataManager.GetMetaData("MDSCHEMA_MEASURES", {}, function (data) {
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    for (var row of data.rowsetTable) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = row["MEASURE_UNIQUE_NAME"];
                        node.Caption = row["MEASURE_CAPTION"];
                        node.Tag = new Rubik.DataHub.TypedSchemaObject();
                        node.Tag.UniqueName = row["MEASURE_UNIQUE_NAME"];
                        node.Tag.ObjectType = Rubik.DataHub.ObjectTypeEnum.Measure;                        
                        node.Icon = ContentRoot + "/icons/mppivotcontrols_measure.png";
                        node.Populated = true;                        
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Tag.ObjectType == Rubik.DataHub.ObjectTypeEnum.Dimension) {
                this.pivotDataManager.GetMetaData("MDSCHEMA_HIERARCHIES", { "DIMENSION_UNIQUE_NAME": args.Node.Tag.UniqueName }, function (data) {
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    for (var row of data.rowsetTable) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = row["HIERARCHY_UNIQUE_NAME"];
                        node.Caption = row["HIERARCHY_CAPTION"];
                        node.Tag = new Rubik.DataHub.TypedSchemaObject();
                        node.Tag.UniqueName = row["HIERARCHY_UNIQUE_NAME"];
                        node.Tag.ObjectType = Rubik.DataHub.ObjectTypeEnum.Hierarchy;
                        if (row["HIERARCHY_ORIGIN"] == 1) {
                            node.Icon = ContentRoot + "/icons/mppivotcontrols_hierarchy.png";
                        }
                        else if (row["HIERARCHY_ORIGIN"] == 3) {
                            node.Icon = ContentRoot + "/icons/mppivotcontrols_hierarchy_parentchild.png";
                        }
                        else {
                            node.Icon = ContentRoot + "/icons/mppivotcontrols_hierarchy_attribute.png";
                        }
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Tag.ObjectType == Rubik.DataHub.ObjectTypeEnum.Hierarchy) {
                this.pivotDataManager.GetMetaData("MDSCHEMA_LEVELS", { "HIERARCHY_UNIQUE_NAME": args.Node.Tag.UniqueName }, function (data) {
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    var inclevel: number = 1;
                    var row = data.rowsetTable[0];
                    if (row != null) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = row["LEVEL_UNIQUE_NAME"]+".Members";
                        node.Caption = "Элементы";
                        node.Tag = new Rubik.DataHub.TypedSchemaObject();
                        node.Tag.UniqueName = row["LEVEL_UNIQUE_NAME"];
                        node.Tag.ObjectType = Rubik.DataHub.ObjectTypeEnum.Level;                        
                        node.Icon = ContentRoot + "/icons/mppivotcontrols_members_close.png";
                        nodes.Add(node);
                    }
                    for (var row of data.rowsetTable) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = row["LEVEL_UNIQUE_NAME"];
                        node.Caption = row["LEVEL_CAPTION"];
                        node.Tag = new Rubik.DataHub.TypedSchemaObject();
                        node.Tag.UniqueName = row["LEVEL_UNIQUE_NAME"];
                        node.Tag.ObjectType = Rubik.DataHub.ObjectTypeEnum.Level;                          
                        if (row["LEVEL_TYPE"] == 1) {
                            inclevel = 0;
                        }
                        node.Icon = ContentRoot + "/icons/mppivotcontrols_level_" + (row["LEVEL_NUMBER"] + inclevel) + ".png";                        
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Tag.ObjectType == Rubik.DataHub.ObjectTypeEnum.Level) {
                this.pivotDataManager.GetMetaData("MDSCHEMA_MEMBERS", { "LEVEL_UNIQUE_NAME": args.Node.Tag.UniqueName }, function (data) {
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    for (var row of data.rowsetTable) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = args.Node.Key + row["MEMBER_UNIQUE_NAME"];
                        node.Caption = row["MEMBER_CAPTION"];
                        node.Tag = new Rubik.DataHub.TypedSchemaObject();
                        node.Tag.UniqueName = row["MEMBER_UNIQUE_NAME"];
                        node.Tag.ObjectType = Rubik.DataHub.ObjectTypeEnum.Member;                         
                        node.Icon = ContentRoot + "/icons/mppivotcontrols_member.png";
                        if (row["CHILDREN_CARDINALITY"]==0) {
                            node.Populated = true;
                        }
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Tag.ObjectType == Rubik.DataHub.ObjectTypeEnum.Member) {
                this.pivotDataManager.GetMetaData("MDSCHEMA_MEMBERS", { "MEMBER_UNIQUE_NAME": args.Node.Tag.UniqueName, "TREE_OP": 0x01 }, function (data) {
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    for (var row of data.rowsetTable) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = args.Node.Key + row["MEMBER_UNIQUE_NAME"];
                        node.Caption = row["MEMBER_CAPTION"];
                        node.Tag = new Rubik.DataHub.TypedSchemaObject();
                        node.Tag.UniqueName = row["MEMBER_UNIQUE_NAME"];
                        node.Tag.ObjectType = Rubik.DataHub.ObjectTypeEnum.Member;
                        node.Icon = ContentRoot + "/icons/mppivotcontrols_member.png";
                        if (row["CHILDREN_CARDINALITY"] == 0) {
                            node.Populated = true;
                        }
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            }

        }

        OnVirtualModeCreateChildren(args: Rubik.Data.TreeViewEventArgs) {
            if (args.Node.Level == 0) {
                this.CubeInfo.Dimensions.then((data) => {
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    var node = new Rubik.Data.TreeNode();
                    node.Key = "[Measures]";
                    node.Caption = "Меры";
                    node.Tag = new Rubik.DataHub.TypedSchemaObject();
                    node.Tag.UniqueName = "[Measures]";
                    node.Tag.ObjectType = Rubik.DataHub.ObjectTypeEnum.Dimension;
                    node.Icon = ContentRoot + "/icons/mppivotcontrols_dimension_measures.png";
                    nodes.Add(node);
                    for (var info of data) {
                        if (info.UniqueName != "[Measures]") {
                            var node = new Rubik.Data.TreeNode();
                            node.Key = info.UniqueName;
                            node.Caption = info.Name;
                            node.Tag = info;                            
                            if (info.row["DIMENSION_TYPE"] == 1) {
                                node.Icon = ContentRoot + "/icons/mppivotcontrols_dimension_time.png";
                            }
                            else {
                                node.Icon = ContentRoot + "/icons/mppivotcontrols_dimension.png";
                            }
                            nodes.Add(node);
                        }
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Tag.UniqueName == "[Measures]") {
                this.CubeInfo.Measures.then((data) => {                
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    for (var info of data) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = info.UniqueName;
                        node.Caption = info.Name;
                        node.Tag = info;                        
                        node.Icon = ContentRoot + "/icons/mppivotcontrols_measure.png";
                        node.Populated = true;
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Tag.ObjectType == "Dimension" || args.Node.Tag.ObjectType == DataHub.ObjectTypeEnum.Dimension) {
                (args.Node.Tag as DataHub.DimensionInfo).Hierarchies.then((data) => {
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    for (var info of data) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = info.UniqueName;
                        node.Caption = info.Name;
                        node.Tag = info                        
                        if (info.row["HIERARCHY_ORIGIN"] == 1) {
                            node.Icon = ContentRoot + "/icons/mppivotcontrols_hierarchy.png";
                        }
                        else if (info.row["HIERARCHY_ORIGIN"] == 3) {
                            node.Icon = ContentRoot + "/icons/mppivotcontrols_hierarchy_parentchild.png";
                        }
                        else {
                            node.Icon = ContentRoot + "/icons/mppivotcontrols_hierarchy_attribute.png";
                        }
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Tag.ObjectType == "Hierarchy" || args.Node.Tag.ObjectType == DataHub.ObjectTypeEnum.Hierarchy) {
                (args.Node.Tag as DataHub.HierarchyInfo).Levels.then((data) => {                
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    var inclevel: number = 1;
                    if (data.length > 0) {
                        var info = data[0];
                        var node = new Rubik.Data.TreeNode();
                        node.Key = info.UniqueName + ".Members";
                        node.Caption = "Элементы";
                        node.Tag = info;                        
                        node.Icon = ContentRoot + "/icons/mppivotcontrols_members_close.png";
                        nodes.Add(node);
                    }
                    for (var info of data) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = info.UniqueName;
                        node.Caption = info.Name;
                        node.Tag = info;                        
                        if (info.row["LEVEL_TYPE"] == 1) {
                            inclevel = 0;
                        }
                        node.Icon = ContentRoot + "/icons/mppivotcontrols_level_" + (info.row["LEVEL_NUMBER"] + inclevel) + ".png";
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Tag.ObjectType == "Level" || args.Node.Tag.ObjectType == DataHub.ObjectTypeEnum.Level) {
                (args.Node.Tag as DataHub.LevelInfo).Members.then((data) => {                                
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    for (var info of data) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = args.Node.Key +'|' + info.UniqueName;
                        node.Caption = info.Name;
                        node.Tag = info;                        
                        node.Icon = ContentRoot + "/icons/mppivotcontrols_member.png";
                        if (info.row["CHILDREN_CARDINALITY"] == 0) {
                            node.Populated = true;
                        }
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Tag.ObjectType == "Member" || args.Node.Tag.ObjectType == DataHub.ObjectTypeEnum.Member) {
                (args.Node.Tag as DataHub.MemberInfo).Children.then((data) => {                                                
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    for (var info of data) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = args.Node.Key + '|' + info.UniqueName;
                        node.Caption = info.Name;
                        node.Tag = info;                                                                        
                        node.Icon = ContentRoot + "/icons/mppivotcontrols_member.png";
                        if (info.row["CHILDREN_CARDINALITY"] == 0) {
                            node.Populated = true;
                        }
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            }

        }
    }
}
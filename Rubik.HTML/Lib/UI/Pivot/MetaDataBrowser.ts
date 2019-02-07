///<reference path='PivotControl.ts'/>
///<reference path='../../Events/Events.ts'/>
///<reference path='../../Data/Grid/TreeNodeDataSource.ts'/>
///<reference path='../../Schema/TypedSchemaObject.ts'/>

module Rubik.UI.Pivot {
    export class MetaDataBrowser extends PivotControl{

        private gridpanel: Rubik.UI.Panel;

        MetaDataSource: Rubik.Data.TreeNodeDataSource = new Rubik.Data.TreeNodeDataSource();
        Grid: Grid = new Grid();

        constructor() {
            super();
            this._rootElement.addClass("MetaDataBrowser");
            this.gridpanel = new Rubik.UI.Panel();
            this.Grid.AddClass("GridNoBorder");
            this.Grid.ExpandLastColumn = true;            
            this.gridpanel.Children.Add(this.Grid);
            this.Children.Add(this.gridpanel);
            this.Grid.DataSource = this.MetaDataSource;
            this.MetaDataSource.View.VirtualMode = true;
            this.MetaDataSource.View.VirtualModeCreateChildren.Attach(new Events.EventHandler<Rubik.Data.TreeViewEventArgs>(this.OnVirtualModeCreateChildren, this))
            this.Grid.Height("100%");
            this.Grid.Width("100%");            
        }

        OnVirtualModeCreateChildren(args: Rubik.Data.TreeViewEventArgs) {
            if (args.Node.Level == 0) {
                this.PivotDataManager.GetMetaData("MDSCHEMA_DIMENSIONS", [], function (data) {
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    var node = new Rubik.Data.TreeNode();
                    node.Key = "[Measures]";
                    node.Caption = "Меры";
                    node.Tag = new Rubik.Server.Schema.TypedSchemaObject();
                    node.Tag.UniqueName = "[Measures]";
                    node.Tag.ObjectType = "Dimension";
                    node.Icon = "/Content/icons/mppivotcontrols_dimension_measures.png";                    
                    nodes.Add(node);
                    for (var row of data.rowsetTable) {
                        if (row["DIMENSION_UNIQUE_NAME"] != "[Measures]") {
                            var node = new Rubik.Data.TreeNode();
                            node.Key = row["DIMENSION_UNIQUE_NAME"];
                            node.Caption = row["DIMENSION_CAPTION"];
                            node.Tag = new Rubik.Server.Schema.TypedSchemaObject();
                            node.Tag.UniqueName = row["DIMENSION_UNIQUE_NAME"];
                            node.Tag.ObjectType = "Dimension";                                                        
                            if (row["DIMENSION_TYPE"] == 1) {
                                node.Icon = "/Content/icons/mppivotcontrols_dimension_time.png";
                            }
                            else {
                                node.Icon = "/Content/icons/mppivotcontrols_dimension.png";
                            }
                            nodes.Add(node);
                        }                        
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Tag.UniqueName == "[Measures]") {
                this.PivotDataManager.GetMetaData("MDSCHEMA_MEASURES", [], function (data) {
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    for (var row of data.rowsetTable) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = row["MEASURE_UNIQUE_NAME"];
                        node.Caption = row["MEASURE_CAPTION"];
                        node.Tag = new Rubik.Server.Schema.TypedSchemaObject();
                        node.Tag.UniqueName = row["MEASURE_UNIQUE_NAME"];
                        node.Tag.ObjectType = "Measure";                        
                        node.Icon = "/Content/icons/mppivotcontrols_measure.png";
                        node.Populated = true;                        
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Tag.ObjectType == "Dimension") {
                this.PivotDataManager.GetMetaData("MDSCHEMA_HIERARCHIES", [{ Key: "DIMENSION_UNIQUE_NAME", Value: args.Node.Tag.UniqueName }], function (data) {
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    for (var row of data.rowsetTable) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = row["HIERARCHY_UNIQUE_NAME"];
                        node.Caption = row["HIERARCHY_CAPTION"];
                        node.Tag = new Rubik.Server.Schema.TypedSchemaObject();
                        node.Tag.UniqueName = row["HIERARCHY_UNIQUE_NAME"];
                        node.Tag.ObjectType = "Hierarchy";
                        if (row["HIERARCHY_ORIGIN"] == 1) {
                            node.Icon = "/Content/icons/mppivotcontrols_hierarchy.png";
                        }
                        else if (row["HIERARCHY_ORIGIN"] == 3) {
                            node.Icon = "/Content/icons/mppivotcontrols_hierarchy_parentchild.png";
                        }
                        else {
                            node.Icon = "/Content/icons/mppivotcontrols_hierarchy_attribute.png";
                        }
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Tag.ObjectType == "Hierarchy") {
                this.PivotDataManager.GetMetaData("MDSCHEMA_LEVELS", [{ Key: "HIERARCHY_UNIQUE_NAME", Value: args.Node.Tag.UniqueName }], function (data) {
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    var inclevel: number = 1;
                    var row = data.rowsetTable[0];
                    if (row != null) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = row["LEVEL_UNIQUE_NAME"]+".Members";
                        node.Caption = "Элементы";
                        node.Tag = new Rubik.Server.Schema.TypedSchemaObject();
                        node.Tag.UniqueName = row["LEVEL_UNIQUE_NAME"];
                        node.Tag.ObjectType = "Level";                        
                        node.Icon = "/Content/icons/mppivotcontrols_members_close.png";
                        nodes.Add(node);
                    }
                    for (var row of data.rowsetTable) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = row["LEVEL_UNIQUE_NAME"];
                        node.Caption = row["LEVEL_CAPTION"];
                        node.Tag = new Rubik.Server.Schema.TypedSchemaObject();
                        node.Tag.UniqueName = row["LEVEL_UNIQUE_NAME"];
                        node.Tag.ObjectType = "Level";                          
                        if (row["LEVEL_TYPE"] == 1) {
                            inclevel = 0;
                        }
                        node.Icon = "/Content/icons/mppivotcontrols_level_" + (row["LEVEL_NUMBER"] + inclevel) + ".png";                        
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Tag.ObjectType == "Level") {
                this.PivotDataManager.GetMetaData("MDSCHEMA_MEMBERS", [{ Key: "LEVEL_UNIQUE_NAME", Value: args.Node.Tag.UniqueName }], function (data) {
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    for (var row of data.rowsetTable) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = row["MEMBER_UNIQUE_NAME"];
                        node.Caption = row["MEMBER_CAPTION"];
                        node.Tag = new Rubik.Server.Schema.TypedSchemaObject();
                        node.Tag.UniqueName = row["MEMBER_UNIQUE_NAME"];
                        node.Tag.ObjectType = "Member";                         
                        node.Icon = "/Content/icons/mppivotcontrols_member.png";
                        if (row["CHILDREN_CARDINALITY"]==0) {
                            node.Populated = true;
                        }
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Tag.ObjectType == "Member") {
                this.PivotDataManager.GetMetaData("MDSCHEMA_MEMBERS", [{ Key: "MEMBER_UNIQUE_NAME", Value: args.Node.Tag.UniqueName }, { Key: "TREE_OP", Value: 0x01 }], function (data) {
                    var nodes: Collections.List<Rubik.Data.TreeNode> = new Collections.List<Rubik.Data.TreeNode>();
                    for (var row of data.rowsetTable) {
                        var node = new Rubik.Data.TreeNode();
                        node.Key = row["MEMBER_UNIQUE_NAME"];
                        node.Caption = row["MEMBER_CAPTION"];
                        node.Tag = new Rubik.Server.Schema.TypedSchemaObject();
                        node.Tag.UniqueName = row["MEMBER_UNIQUE_NAME"];
                        node.Tag.ObjectType = "Member";
                        node.Icon = "/Content/icons/mppivotcontrols_member.png";
                        if (row["CHILDREN_CARDINALITY"] == 0) {
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
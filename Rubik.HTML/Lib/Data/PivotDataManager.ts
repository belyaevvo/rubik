/// <reference path="Grid/IGridDataSource.d.ts" />
/// <reference path="Grid/MDDataSource.ts" />
/// <reference path="Grid/TreeNodeDataSource.ts" />

module Rubik.Data {    

    export class PivotDataManager {
        Url: string = null;

        DataMember: string = null;

        DataSource: MDDataSource = new MDDataSource();

        MetaDataSource: TreeNodeDataSource = new TreeNodeDataSource();

        set Command(command: string) {
            this.GetData(command,
                function (data) {
                    this.DataSource._isPopulated = true;     
                    this.DataSource.Data = data;                    
                }.bind(this),
                function (error) {
                    this.DataSource._isPopulated = false;    
                    alert(error.responseText);                     
                }.bind(this));
        }

        constructor()
        {
            this.MetaDataSource.View.VirtualModeCreateChildren.Attach(new Events.EventHandler < TreeViewEventArgs>(this.OnVirtualModeCreateChildren, this))
        }

        OnVirtualModeCreateChildren(args: TreeViewEventArgs) {
            if (args.Node.Level == 0) {
                this.GetMetaData("MDSCHEMA_DIMENSIONS", [{ Key: "CUBE_NAME", Value: this.DataMember }], function (data) {
                    var nodes: Collections.List<TreeNode> = new Collections.List<TreeNode>();
                    for (var row of data.rowsetTable) {
                        var node = new TreeNode();
                        node.Key = row["DIMENSION_UNIQUE_NAME"];                        
                        node.Caption = row["DIMENSION_CAPTION"];
                        node.Tag = row["DIMENSION_UNIQUE_NAME"];                        
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);                    
                }, null);
            } else if (args.Node.Level == 1) {
                this.GetMetaData("MDSCHEMA_HIERARCHIES", [{ Key: "CUBE_NAME", Value: this.DataMember },{ Key: "DIMENSION_UNIQUE_NAME", Value: args.Node.Tag }], function (data) {
                    var nodes: Collections.List<TreeNode> = new Collections.List<TreeNode>();
                    for (var row of data.rowsetTable) {
                        var node = new TreeNode();
                        node.Key = row["HIERARCHY_UNIQUE_NAME"];
                        node.Caption = row["HIERARCHY_CAPTION"];
                        node.Tag = row["HIERARCHY_UNIQUE_NAME"];
                        nodes.Add(node);                        
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Level == 2) {
                this.GetMetaData("MDSCHEMA_LEVELS", [{ Key: "CUBE_NAME", Value: this.DataMember }, { Key: "HIERARCHY_UNIQUE_NAME", Value: args.Node.Tag }], function (data) {
                    var nodes: Collections.List<TreeNode> = new Collections.List<TreeNode>();
                    for (var row of data.rowsetTable) {
                        var node = new TreeNode();
                        node.Key = row["LEVEL_UNIQUE_NAME"];
                        node.Caption = row["LEVEL_CAPTION"];
                        node.Tag = row["LEVEL_UNIQUE_NAME"];
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            } else if (args.Node.Level == 3) {
                this.GetMetaData("MDSCHEMA_MEMBERS", [{ Key: "CUBE_NAME", Value: this.DataMember }, { Key: "LEVEL_UNIQUE_NAME", Value: args.Node.Tag }], function (data) {
                    var nodes: Collections.List<TreeNode> = new Collections.List<TreeNode>();
                    for (var row of data.rowsetTable) {
                        var node = new TreeNode();
                        node.Key = row["MEMBER_UNIQUE_NAME"];
                        node.Caption = row["MEMBER_CAPTION"];
                        node.Tag = row["MEMBER_UNIQUE_NAME"];
                        node.Populated = true;
                        nodes.Add(node);
                    }
                    args.Node.Children.AddRange(nodes);
                }, null);
            }

        }
        

        GetData(command: string, onsuccess: (data: any) => void, onerror: (error: any) => void): void {
            if (this.Url != null) {                
                $.ajax({
                    url: this.Url + '/execute',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { sessionId:'aaa', query:command },
                    dataType: 'json',
                    success: function (data) {
                        if (onsuccess)
                            onsuccess(data);
                    },
                    error: function (error) {
                        if (onerror) {
                            onerror(error);
                        }
                        else {
                            alert(error.responseText);
                        }
                    }
                });
            }
        }

        GetMetaData(schema: string, restrictions: any[], onsuccess: (data: any) => void, onerror: (error: any) => void): void {
            if (this.Url != null) {                
                $.ajax({
                    url: this.Url + '/getmetadata',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: {
                        sessionId: 'aaa', schema: schema, restrictions: restrictions
                    },
                    dataType: 'json',
                    success: function (data) {
                        if (onsuccess)
                            onsuccess(data);                        
                    },
                    error: function (error) {
                        if (onerror) {
                            onerror(error);
                        }
                        else   {
                            alert(error.responseText); 
                        }
                    }
                });
            }
        }
    }
}

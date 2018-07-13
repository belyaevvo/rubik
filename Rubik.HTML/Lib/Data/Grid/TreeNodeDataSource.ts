/// <reference path="IGridDataSource.d.ts" />
/// <reference path="IGridDataMember.d.ts" />
/// <reference path="../Tree/TreeNode.ts" />
/// <reference path="../Tree/TreeView.ts" />

module Rubik.Data {

    export class TreeNodeDataSource implements IGridDataSource {     

        Data: IGridDataMember[] = new Array();

        View: TreeView = new TreeView();


        get RootNode(): TreeNode {
            return this.View.RootNode;
        }

        DataChanged: Events.Event<Events.EventArgs> = new Events.Event<Events.EventArgs>();

        constructor() {
            this.View.NodeModified.Attach(new Events.EventHandler<TreeViewEventArgs>(this.OnNodeModified, this));
            this.View.Expanded.Attach(new Events.EventHandler<TreeViewEventArgs>(this.OnNodeModified, this));
            this.View.Collapsed.Attach(new Events.EventHandler<TreeViewEventArgs>(this.OnNodeModified, this));
        }        

        getColsCount(): number {
            return 0;
        }

        getRowsCount(): number {
            try {
                return this.Data.length;
            }
            catch{
                return 0;
            }
        }

        getFixedColsCount(): number {
            return 1;
        }

        getFixedRowsCount(): number {
            return 0;
        }


        getColMember(col: number, row: number): IGridDataMember {
            return null;
        }

        getRowMember(col: number, row: number): IGridDataMember {
            try {
                return this.Data[row];
            }
            catch{
                return null;
            }
        }


        getColKey(col: number, row: number): any {            
            return null;
        }

        getRowKey(col: number, row: number): any {
            var key: string = "";
            if (row != null) {
                for (var c = 0; c <= col; c++) {
                    if (key != "") key += "_";
                    key += this.getRowMember(c, row).Key;
                }
            }
            return key;
        }

        getCellValue(col: number, row: number): any {            
            return null;            
        }

        getCellFormattedValue(col: number, row: number): string {            
            return null;            
        }

        expand(col: number, row: number): void {
            var node = this.getNodeByIndex(row);
            node.Expand();
        }

        collapse(col: number, row: number): void {
            var node = this.getNodeByIndex(row);
            node.Collapse();
        }

        isPopulated(): boolean {
            return this.RootNode.HasChildren();
        }
        

        private OnNodeModified(args: TreeViewEventArgs) {
            var index = this.getNodeIndex(args.Node);
            if (index >= 0) {
                var member: NodeDataMember = this.Data[index] as NodeDataMember;
                member.Key = args.Node.Key;
                member.Caption = args.Node.Caption;
                member.Node = args.Node;
                member.HasChildren = args.Node.HasChildren();
                member.Expanded = args.Node.Expanded();
                member.Level = args.Node.Level-1;
            }
            this.GetDescenantsData(args.Node);
            this.DataChanged.Invoke(new Events.EventArgs(this));
        }


        GetData(): void {
            this.Data = new Array();
            this.GetDescenantsData(this.RootNode);
        }

        GetDescenantsData(node: TreeNode): void {            
            if (node.Expanded()) {
                var index = this.getNodeIndex(node);
                for (var nd of node.Children.ToArray()) {
                    var member = new NodeDataMember();
                    member.Key = nd.Key;
                    member.Caption = nd.Caption;
                    member.Node = nd;
                    member.HasChildren = nd.HasChildren();
                    member.Expanded = nd.Expanded();
                    member.Level = nd.Level - 1;
                    this.Data.splice(++index, 0, member);
                    if (nd.Expanded()) {
                        this.GetDescenantsData(nd);
                    }
                }
            } else if (node.Populated) {
                index = this.getNodeIndex(node);
                index++;
                while (this.Data.length > index) {
                    if ((this.Data[index] as NodeDataMember).Node.IsDescendant(node)) {
                        this.Data.splice(index, 1);
                    }
                    else {
                        break;
                    }
                }
            }                    
        }

        protected getNodeIndex(node: TreeNode): number {           
            var index = 0;
            for (var el of this.Data) {
                if (el.Key == node.Key) {
                    return index;
                }
                index++;
            }
            return -1;
        }

        protected getNodeByIndex(index: number): TreeNode {
            var member = this.Data[index];
            if (member) {
                return (<NodeDataMember>member).Node;
            }            
            return null;
        }
    }

    export class NodeDataMember implements IGridDataMember {
        Key: string;
        Caption: string;
        Icon: string;
        Node: TreeNode;
        HasChildren: boolean = false;
        Level: number = 0;
        Expanded: boolean = false;;
        Expand() { }
        Collapse() { }
    }
}
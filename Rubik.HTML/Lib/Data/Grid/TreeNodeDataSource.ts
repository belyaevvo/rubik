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


        getColMember(col: number, row: number): any {
            return null;
        }

        getRowMember(col: number, row: number): any {
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
            for (var c = 0; c <= col; c++) {
                if (key != "") key += "_";
                key += this.getRowMember(c, row).uniqueName;
            }
            return key;
        }

        getCellValue(col: number, row: number): any {            
            return null;            
        }

        getCellFormattedValue(col: number, row: number): string {            
            return null;            
        }

        isPopulated(): boolean {
            return this.RootNode.HasChildren();
        }
        

        private OnNodeModified(args: TreeViewEventArgs) {            
            this.GetDescenantsData(args.Node);
        }


        GetData(): void {
            this.Data = new Array();
            this.GetDescenantsData(this.RootNode);
        }

        GetDescenantsData(node: TreeNode): void {
            for (var i = 0; i < node.Children.Count(); i++) {
                var nd = node.Children.ElementAt(i);
                var member = new NodeDataMember();
                member.Key = nd.Key;
                member.Caption = nd.Caption;
                this.Data.push(member);               
                if (nd.Expanded()) {
                    this.GetDescenantsData(nd);
                }
            }
        }

        
    }

    export class NodeDataMember implements IGridDataMember {
        Key: string;
        Caption: string;
        Icon: string;
        HasChildren: boolean = false;
        Level: number = 0;
        Expanded: boolean = false;;
        Expand() { }
        Collapse() { }
    }
}
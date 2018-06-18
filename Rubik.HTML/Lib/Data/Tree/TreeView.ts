module Rubik.Data {

    export class TreeView{

        VirtualMode: boolean;
        RootNode: TreeNode;

        NodeModified: Events.Event<TreeViewEventArgs> = new Events.Event<TreeViewEventArgs>();
        VirtualModeCreateChildren: Events.Event<TreeViewEventArgs> = new Events.Event<TreeViewEventArgs>();
        BeforeExpand: Events.Event<TreeViewCancelEventArgs> = new Events.Event<TreeViewCancelEventArgs>();
        Expanded: Events.Event<TreeViewEventArgs> = new Events.Event<TreeViewEventArgs>();
        BeforeCollapse: Events.Event<TreeViewCancelEventArgs> = new Events.Event<TreeViewCancelEventArgs>();
        Collapsed: Events.Event<TreeViewEventArgs> = new Events.Event<TreeViewEventArgs>();
        BeforeCheck: Events.Event<TreeViewCancelEventArgs> = new Events.Event<TreeViewCancelEventArgs>();
        Checked: Events.Event<TreeViewEventArgs> = new Events.Event<TreeViewEventArgs>();
        BeforeSelect: Events.Event<TreeViewCancelEventArgs> = new Events.Event<TreeViewCancelEventArgs>();
        Selected: Events.Event<TreeViewEventArgs> = new Events.Event<TreeViewEventArgs>();

        constructor() {
            this.RootNode = new TreeNode();
            this.RootNode.Key = "Root";
            this.RootNode.Caption = "Root";
            this.RootNode.View = this;            
        }

        OnNodeModified(node: TreeNode): void {
            var args = new TreeViewCancelEventArgs(this);
            args.Node = node;
            args.Action = Action.None;
            this.NodeModified.Invoke(args);            
        }

        OnExpand(node: TreeNode, action?: (node: TreeNode) => void): void {
            var args = new TreeViewCancelEventArgs(this);
            args.Node = node;
            args.Action = Action.Expand;
            this.BeforeExpand.Invoke(args);
            if (!args.Cancel) {
                if (action) action(node);
                //var args = new TreeViewEventArgs(this);                
                this.Expanded.Invoke(args);
                if (this.VirtualMode && !node.Populated) {
                    this.VirtualModeCreateChildren.Invoke(args);
                }
            }
        }

        OnCollapse(node: TreeNode, action?: (node: TreeNode) => void): void {
            var args = new TreeViewCancelEventArgs(this);
            args.Node = node;
            args.Action = Action.Collapse;
            this.BeforeCollapse.Invoke(args);
            if (!args.Cancel) {
                if (action) action(node);
                //var args = new TreeViewEventArgs(this);
                this.Collapsed.Invoke(args);
            }
        }

        OnCheck(node: TreeNode, action?: (node: TreeNode) => void): void {
            var args = new TreeViewCancelEventArgs(this);
            args.Node = node;
            args.Action = Action.Check;
            this.BeforeCheck.Invoke(args);
            if (!args.Cancel) {
                if (action) action(node);
                //var args = new TreeViewEventArgs(this);
                this.Checked.Invoke(args);
            }
        }

        OnSelect(node: TreeNode, action?: (node: TreeNode) => void): void {
            var args = new TreeViewCancelEventArgs(this);
            args.Node = node;
            args.Action = Action.Select;
            this.BeforeSelect.Invoke(args);
            if (!args.Cancel) {
                if (action) action(node);
                //var args = new TreeViewEventArgs(this);
                this.Selected.Invoke(args);
            }
        }
    }

    export class TreeViewEventArgs extends Rubik.Events.EventArgs{
        Action: Action;
        Node: TreeNode;        
    }

    export class TreeViewCancelEventArgs extends TreeViewEventArgs { 
        Cancel: boolean;
    }

    enum Action {
        Expand,
        Collapse,
        Check,
        Uncheck,
        Select,
        Unselect,
        None
    }
}
module Rubik.Data {

    export class TreeNode implements ITreeNode{        
        Key: string;
        Caption: string;
        Icon: string;
        Tag: any;

        protected parent: TreeNode = null;
        protected view: TreeView = null;
        protected expanded: boolean = false;
        protected checked: boolean = false;
        protected selected: boolean = false;
        protected populated: boolean = false;

        get Parent(): TreeNode {
            return this.parent;
        }

        set Parent(node: TreeNode) {
            this.parent = node;
        }

        set View(view: TreeView) {
            this.view = view;
            this.Children.ToArray().forEach(function (node, index, array) {
                node.View = view;
            });
        }

        get View(): TreeView {
            return this.view;
        }

        HasChildren(): boolean {
            return this.Children.Count() > 0;
        }

        Expanded(): boolean {
            return this.expanded;
        }

        Collapsed(): boolean {
            return !this.expanded;
        }
        
        Checked(): boolean {
            return this.checked;
        }

        Selected(): boolean {
            return this.selected;
        }

        Expand(): void {
            if (this.View != null) {
                this.View.OnExpand(this, function (node) { node.expanded = true; });
            }
            else {
                this.expanded = true;
            }
        }

        Collapse(): void {
            if (this.View != null) {
                this.View.OnCollapse(this, function (node) { node.expanded = false; });
            }
            else {
                this.expanded = false;
            }
        }

        Check(check: boolean = true): void {
            if (this.View != null) {
                this.View.OnCheck(this, function (node) { node.checked = check; });
            }
            else {
                this.checked = check;
            }
        }

        Select(select: boolean = true): void {
            if (this.View != null) {
                this.View.OnSelect(this, function (node) { node.selected = select; });                
            }
            else {
                this.selected = select;
            }
        }

        Children: Collections.IList<TreeNode> = new Collections.List<TreeNode>();

        constructor() {
            this.Children.OnModified.Attach(new Collections.CollectionModifiedEventHandler<TreeNode>(this.OnChildrenModified, this));
        }        

        private OnChildrenModified(args: Collections.CollectionModifiedEventArgs<TreeNode>) {
            if (args.Modification == Collections.CollectionModifications.Add) {
                args.ModifiedElements.ToArray().forEach(function (node, index, array) {
                    node.View = this.View;
                    node.Parent = this;
                }.bind(this));
            }
            else if (args.Modification == Collections.CollectionModifications.Remove) {
                args.ModifiedElements.ToArray().forEach(function (node, index, array) {
                    node.View = null;
                    node.Parent = null;
                }.bind(this));
            }
            if (this.View != null) {
                this.View.OnNodeModified(this);
            }
        }
    }
}
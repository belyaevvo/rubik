/// <reference path="ITreeNode.d.ts" />

module Rubik.Data {

    export class TreeNode implements ITreeNode{        
        Key: string;
        Caption: string;
        Icon: string;
        Tag: any;

        protected level: number = 0;
        protected parent: TreeNode = null;
        protected view: TreeView = null;
        protected expanded: boolean = false;
        protected checked: boolean = false;
        protected selected: boolean = false;
        protected populated: boolean = false;

        get Level(): number {
            return this.level;
        }

        get Parent(): TreeNode {
            return this.parent;
        }

        set Parent(node: TreeNode) {
            this.parent = node;
            if (node != null) {
                this.level = node.Level + 1;
            }
        }

        get Populated(): boolean {
            if (this.View != null && this.View.VirtualMode) {
                return this.populated;
            }
            return true;
        }

        set Populated(value: boolean) {
            this.populated = value;
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
            if (this.View != null && this.View.VirtualMode && !this.Populated) {
                return true;
            }
            return this.Children.Count() > 0;
        }

        IsDescendant(node: TreeNode): boolean {
            var thenode: TreeNode = this;
            while (thenode.Parent != null) {
                if (thenode.Parent == node) {
                    return true
                }
                thenode = thenode.Parent;
            }
            return false;
        }

        IsAscendant(node: TreeNode): boolean {
            return node.IsDescendant(this);
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
            this.Populated = true;
        }
    }
}
declare module Rubik.Data {

    export interface ITreeNode {
        Key: string;
        Caption: string;
        Icon: string;
        Tag: any;
                
        Parent: ITreeNode;        
        View: TreeView;

        Populated: boolean;

        HasChildren(): boolean; 

        Expanded(): boolean;
        Collapsed(): boolean;
        Checked(): boolean;
        Selected(): boolean;

        Expand(): void;
        Collapse(): void;               
        Check(check: boolean): void;
        Select(select: boolean): void;

        Children: Collections.IList<ITreeNode>;
        
    }
}
/// <reference path="Panel.ts" />

module Rubik.UI
{
    /** The orientations of stacking in a stack panel. */
    export enum StackPanelOrientations {
        /** Horizontally stack items i.e. in stack in columns */
        Horizontal,
        /** Vertically stack items i.e. in stack in rows */
        Vertical
    }

    export class StackPanel extends Panel
    {        

        constructor()
        {
            super();
        
            this._rootElement.addClass("StackPanel");            

            this.Orientation(StackPanelOrientations.Vertical);
        }
       

        Orientation(value: StackPanelOrientations = null): StackPanelOrientations
        {
            if (value !== null)
            {
                if (value === StackPanelOrientations.Horizontal)
                {
                    this.RemoveClass("Vertical");
                    this.AddClass("Horizontal");
                }
                else
                {
                    this.RemoveClass("Horizontal");
                    this.AddClass("Vertical");
                }
            }
            return this.HasClass("Horizontal") ? StackPanelOrientations.Horizontal : StackPanelOrientations.Vertical;
        }

        OnChildrenModified(args: Collections.CollectionModifiedEventArgs<IControl>) {            
            for (var i = 0; i < this.Children.Count(); i++) {                
                this.Children.ElementAt(i).AddClass("Row");                
            }
            super.OnChildrenModified(args);
        }
    }
}
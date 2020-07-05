/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/



module Rubik.UI
{
    export class GridPanel extends Panel
    {        
        Columns: number = 0;

        constructor()
        {
            super();

            this._rootElement.addClass("GridPanel");       

            //this.Children.OnModified.Attach(new Collections.CollectionModifiedEventHandler<IControl>(this.OnChildrenModified, this));
        }

        ConstructDOM(parent: JQuery, onComplete: () => void = null): void {
            
            var columns = this.Columns > 0 ? this.Columns : 1;
            var rows = ((this.Children.Count() / columns) | 0);

            this._rootElement.css("grid-template-columns", repeat("auto ", columns));                    
            this._rootElement.css("-ms-grid-columns", repeat("1fr 1em ", columns - 1) + "1fr "); 
            this._rootElement.css("-ms-grid-rows", repeat("1fr 1em ", rows - 1) + "1fr "); 
                        
            super.ConstructDOM(parent, onComplete);
        }

        OnChildrenModified(args: Collections.CollectionModifiedEventArgs<IControl>) {

            var columns = this.Columns > 0 ? this.Columns : 1;

            for (var i = 0; i < this.Children.Count(); i++) {
                var col = (i % columns) * 2 + 1;
                var row = ((i / columns) | 0) * 2 + 1;
                this.Children.ElementAt(i).ApplyStyle("-ms-grid-column", col.toString());
                this.Children.ElementAt(i).ApplyStyle("-ms-grid-row", row.toString());
            }
            super.OnChildrenModified(args);
        }
    }

   
}
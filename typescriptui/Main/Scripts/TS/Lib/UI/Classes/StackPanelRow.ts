/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="../Interfaces/IStackPanelRow.d.ts" />
/// <reference path="Control.ts" />

module TSUI.UI
{
    export class StackPanelRow extends Control implements IStackPanelRow
    {
        constructor()
        {
            super();

            this._rootElement.addClass("Row");
        }
    }
}
var TSUI;
(function (TSUI) {
    /*
    Copyright Edward Nutting 2013
    Author: Edward Nutting
    Date: Jul 8 18:31 2013
    
    URL: https://typescriptui.codeplex.com/
    Modifications:
    - 8/Jul/13 : Initial version.
    
    License: https://typescriptui.codeplex.com/license
    */
    /// <reference path="../Interfaces/IListItem.d.ts" />
    (function (UI) {
        var ListItem = (function () {
            function ListItem(text, value) {
                this.OnTextChange = new TSUI.Events.ListItem_TextChangeEvent();
                this.Index = -1;
                this._Value = null;
                this._Text = "";
                this._Value = value;
                this._Text = text;
            }
            ListItem.prototype.Value = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Value = value;
                }
                return this._Value;
            };

            ListItem.prototype.Text = function (value) {
                if (typeof value === "undefined") { value = null; }
                if (value !== null) {
                    this._Text = value;
                    this.OnTextChange.Invoke(new TSUI.Events.ListItem_TextChangeEventArgs(this));
                }
                return this._Text;
            };
            return ListItem;
        })();
        UI.ListItem = ListItem;
    })(TSUI.UI || (TSUI.UI = {}));
    var UI = TSUI.UI;
})(TSUI || (TSUI = {}));

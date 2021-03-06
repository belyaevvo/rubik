﻿module Rubik.UI.Pivot {
    export class LoadingPanel extends Panel {

        protected DivMessage: JQuery;
        protected DivIcon: JQuery;
        protected SpanText: JQuery;

        constructor() {
            super();
            this._rootElement.addClass("LoadingPanel");
            this.DivMessage = $("<div class=\"LoadingMessage\">");
            this.DivIcon = $("<div class=\"LoadingIcon fa fa-spinner fa-pulse fa-3x fa-fw\">");
            this.SpanText = $(document.createElement('span'));
            this.SpanText.text(Rubik.Resources.Localization.getString("pivotViewLoadingMessage"));
            this.DivMessage.append(this.DivIcon);
            this.DivMessage.append(this.SpanText);
            this._rootElement.append(this.DivMessage);
            this.HandleChainEvents(false);
            this.Visible(false);

            
        }
    }
}
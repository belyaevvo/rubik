/// <reference path="IGridDataSource.d.ts" />

module Rubik.Data {    

    export class PivotDataManager {
        Url: string = null;

        
        GetData(command: string): void {
            if (this.Url != null) {
                $.ajax({
                    url: this.Url + '/execute',
                    type: 'POST',
                    //contentType: 'application/json; charset=utf-8',
                    data: { sessionId:'aaa', query:command },
                    dataType: 'json',
                    success: function (data) {
                        this.Data = data;
                        this._isPopulated = true;
                        this.DataChanged.Invoke(new Events.EventArgs(this));
                    }.bind(this),
                    error: function (error) {
                        this._isPopulated = false;
                        alert(error.responseText); //or whatever
                    }
                });
            }
        }
    }
}

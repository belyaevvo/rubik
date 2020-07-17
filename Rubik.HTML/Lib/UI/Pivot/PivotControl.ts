///<reference path='IPivotControl.ts'/>

module Rubik.UI.Pivot {
    export class PivotControl extends ContentControl implements IPivotControl {
        protected pivotDataManager: Rubik.DataHub.PivotDataManager;

        get PivotDataManager(): Rubik.DataHub.PivotDataManager {
            return this.pivotDataManager;
        }

        set PivotDataManager(pm: Rubik.DataHub.PivotDataManager) {
            this.pivotDataManager = pm;
        }
    }
    
}
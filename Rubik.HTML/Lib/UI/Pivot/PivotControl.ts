///<reference path='IPivotControl.ts'/>

module Rubik.UI.Pivot {
    export class PivotControl extends ContentControl implements IPivotControl {
        pivotDataManager: Rubik.Data.PivotDataManager;

        get PivotDataManager(): Rubik.Data.PivotDataManager {
            return this.pivotDataManager;
        }

        set PivotDataManager(pm: Rubik.Data.PivotDataManager) {
            this.pivotDataManager = pm;
        }
    }
    
}
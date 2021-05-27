
module Rubik.DataHub {
    export class Measure implements IMeasure {
        private schema: Schema;
        public MeasureName: string;
        public Info: MeasureInfo = null;

        constructor(schema: Schema = null) {
            this.schema = schema;
        }

        get Caption(): string {
            if (this.Info) {
                return this.Info.Caption;
            }
            return this.MeasureName;
        }

        public toJSON(): any {
            return {
                MeasureName: this.MeasureName
            };
        }

    }
}
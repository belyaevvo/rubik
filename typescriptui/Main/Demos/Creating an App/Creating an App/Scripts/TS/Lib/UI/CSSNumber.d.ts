declare module TSUI.UI {
    class CSSNumber {
        public Value: number;
        public Units: string;
        public Auto: boolean;
        constructor(Value: number, Units?: string, Auto?: boolean);
        static FromString(value: string): CSSNumber;
        public toString(): string;
        public ToString(): string;
    }
}

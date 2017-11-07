declare module TSUI.UI {
    /** Represents a CSS number value e.g. 10px, 10% or 'auto'.
    Also provides static methods for converting from CSS string to CSSNumber.
    */
    class CSSNumber {
        public Value: number;
        public Units: string;
        public Auto: boolean;
        /** Creates a new CSSNumber with specified value and units.
        @param Value The value of the number (irrelevant if auto is set - see auto param)
        @param Units OPTIONAL The units of the CSS number - px, % or em. Default: px. (Irrelevant if auto is set - see auto param)
        @param Auto OPTIONAL Whether the number has value of "auto"  - other parameters are ignored if set. Default: false
        */
        constructor(Value: number, Units?: string, Auto?: boolean);
        /** Converts a CSS string representation of a CSS Number to a CSS Number.
        @param value The CSS string representation of the number.
        @returns the new CSS Number.
        */
        static FromString(value: string): CSSNumber;
        /** Returns value to ToString method. */
        public toString(): string;
        /** Returns the CSS string representation of the CSS number e.g. 10px, 10% or auto*/
        public ToString(): string;
    }
}

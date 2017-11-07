//Associated with jquery.numeric.js from http://www.texotela.co.uk/code/jquery/numeric/

/*
Copyright Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

interface JQuery
{
    numeric(config?: {
            decimal: string;
            negative?: boolean;
            decimalPlaces?: number;
            min?: number;
            max?: number;
    }, callback?: ()=>void);
    removeNumeric(): void;
    numeric_DecimalSeparator(): string;
    numeric_DecimalSeparator(o: boolean): string;
    numeric_DecimalSeparator(o: string): string;
    numeric_AllowNegatives(): boolean;
    numeric_AllowNegatives(o: boolean): boolean;
    numeric_Callback(): ()=>void;
    numeric_Callback(o: ()=>void): ()=>void;
    numeric_DecimalPlaces(): number;
    numeric_DecimalPlaces(o: number): number;
    numeric_Min(): number;
    numeric_Min(o: number): number;
    numeric_Max(): number;
    numeric_Max(o: number): number;
}
interface JQueryStatic
{
    getSelectionStart(o: HTMLInputElement);
    setSelectionStart(o: HTMLInputElement, p: {
        start: number;
        end?: number;
    });
}
/// <reference path="../Interfaces/IListItem.d.ts" />
declare module TSUI.UI {
    class ListItem<T> implements UI.IListItem<any> {
        public OnTextChange: TSUI.Events.ListItem_TextChangeEvent<T>;
        constructor(text: string, value: T);
        public Index: number;
        public _Value: T;
        public Value(value?: T): T;
        public _Text: string;
        public Text(value?: string): string;
    }
}

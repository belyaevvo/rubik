/// <reference path="../Interfaces/ITileBackground.d.ts" />
/// <reference path="ImageBox.d.ts" />
declare module TSUI.UI {
    class TileBackground extends UI.ImageBox implements UI.ITileBackground {
        constructor(source?: string);
        public SetPosition(value: UI.TileBackgroundPositions): void;
    }
}

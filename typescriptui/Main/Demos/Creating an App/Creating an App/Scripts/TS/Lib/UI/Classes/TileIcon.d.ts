﻿/// <reference path="../Interfaces/ITileIcon.d.ts" />
/// <reference path="ImageBox.d.ts" />
declare module TSUI.UI {
    var IconsDirectory: string;
    var TileIcons: {
        About: string;
        Download: string;
    };
    class TileIcon extends UI.ImageBox implements UI.ITileIcon {
        constructor();
    }
}

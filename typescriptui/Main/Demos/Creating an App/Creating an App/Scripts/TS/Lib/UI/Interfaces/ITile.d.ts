/*
Copyright � Edward Nutting 2013
Author: Edward Nutting 
Date: Jul 8 18:31 2013

URL: https://typescriptui.codeplex.com/
Modifications:
 - 8/Jul/13 : Initial version.

License: https://typescriptui.codeplex.com/license
*/

/// <reference path="ITileBackground.d.ts" />
/// <reference path="../Enums/TileSizes.d.ts" />
/// <reference path="../Enums/TileTypes.d.ts" />
/// <reference path="ILabel.d.ts" />
/// <reference path="ITileIcon.d.ts" />
/// <reference path="ITileCounter.d.ts" />
/// <reference path="IControl.d.ts" />

declare module TSUI.UI
{
    export interface ITile extends IControl
    {
        Counter: ITileCounter;
        NameLabel: ILabel;
        TextLabel: ILabel;
        IconBox: ITileIcon;

        Backgrounds: Collections.IList<ITileBackground>;
        
        ShouldCycle: bool;

        MaxTime: number;
        MinTime: number;
        DelayTimeMax: number;

        Size(value?: TileSizes): TileSizes;
        Type(value?: TileTypes): TileTypes;

        ShowCounter(value?: bool): bool;
    }
}